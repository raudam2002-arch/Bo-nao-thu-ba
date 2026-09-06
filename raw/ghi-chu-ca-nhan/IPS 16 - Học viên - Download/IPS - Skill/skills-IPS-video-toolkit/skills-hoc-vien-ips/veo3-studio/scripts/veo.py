#!/usr/bin/env python3
"""
veo.py — Veo 3.1 studio CLI cho Claude Code (thuần stdlib, không cần pip).

Backend:
  - gemini : Gemini API, cần GEMINI_API_KEY hoặc GOOGLE_API_KEY (lấy tại aistudio.google.com/app/apikey)
  - vertex : Vertex AI, cần GOOGLE_CLOUD_PROJECT + gcloud auth (application-default hoặc account)
  Tự chọn: có API key -> gemini, không thì thử vertex.

Lệnh:
  doctor                                Kiểm tra môi trường (key, gcloud, ffmpeg)
  estimate  --duration 8 [--audio] [--resolution 1080p] [--count N]
  generate  --prompt "..." [tùy chọn]   Gen 1 clip (t2v / i2v / interpolation)
  batch     --manifest m.json [--yes]   Gen nhiều cảnh: journal + resume + retry + concurrency
  extend    --video in.mp4 --prompt "..." --out out.mp4
  assemble  --dir clips/ --out final.mp4 [--pattern '*.mp4']

Giá tham khảo (Veo 3.1, 2026-01): $0.20/s không audio, $0.40/s có audio (720p/1080p), $0.60/s 4k.
"""

import argparse
import base64
import glob as globmod
import json
import mimetypes
import os
import shutil
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
from pathlib import Path

# ----------------------------------------------------------------------------
# Config
# ----------------------------------------------------------------------------

GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta"
POLL_INTERVAL = 12          # giây
MAX_POLL_ATTEMPTS = 60      # ~12 phút
MAX_RETRIES = 5             # retry khi 429/5xx, backoff mũ

MODELS = {
    "gemini": {"quality": "veo-3.1-generate-preview", "fast": "veo-3.1-fast-generate-preview"},
    "vertex": {"quality": "veo-3.1-generate-001", "fast": "veo-3.1-fast-generate-001"},
}

PRICE_PER_SEC = {"audio": 0.40, "no_audio": 0.20, "4k": 0.60}


def log(msg):
    print(msg, flush=True)


def confirm(question):
    """Hỏi y/N; nếu không có terminal (chạy tự động) thì coi như từ chối và nhắc --yes."""
    try:
        return input(question).strip().lower() in ("y", "yes")
    except EOFError:
        err("Không có terminal tương tác — chạy lại kèm --yes để xác nhận.")
        return False


def err(msg):
    print(msg, file=sys.stderr, flush=True)


# ----------------------------------------------------------------------------
# Backend / auth
# ----------------------------------------------------------------------------

def get_api_key():
    return os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")


def get_vertex_ctx():
    project = os.environ.get("GOOGLE_CLOUD_PROJECT") or os.environ.get("GOOGLE_CLOUD_PROJECT_ID")
    location = os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1")
    return project, location


def get_gcloud_token():
    for args in (["auth", "application-default", "print-access-token"],
                 ["auth", "print-access-token"]):
        try:
            out = subprocess.run(["gcloud"] + args, capture_output=True, text=True, timeout=30)
            if out.returncode == 0 and out.stdout.strip():
                return out.stdout.strip()
        except (FileNotFoundError, subprocess.TimeoutExpired):
            return None
    return None


def pick_backend(explicit=None):
    if explicit in ("gemini", "vertex"):
        return explicit
    if get_api_key():
        return "gemini"
    project, _ = get_vertex_ctx()
    if project and get_gcloud_token():
        return "vertex"
    err("Không có backend nào sẵn sàng.\n"
        "  Cách 1 (dễ nhất): export GEMINI_API_KEY=...  (lấy tại https://aistudio.google.com/app/apikey)\n"
        "  Cách 2: export GOOGLE_CLOUD_PROJECT=... && gcloud auth application-default login")
    sys.exit(2)


# ----------------------------------------------------------------------------
# HTTP với retry/backoff
# ----------------------------------------------------------------------------

def http_json(method, url, headers=None, body=None, retries=MAX_RETRIES):
    payload = json.dumps(body).encode() if body is not None else None
    last_e = None
    for attempt in range(retries):
        req = urllib.request.Request(url, data=payload, method=method)
        req.add_header("Content-Type", "application/json")
        for k, v in (headers or {}).items():
            req.add_header(k, v)
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                return json.loads(resp.read().decode())
        except urllib.error.HTTPError as e:
            detail = e.read().decode(errors="replace")[:2000]
            if e.code in (429, 500, 502, 503, 504) and attempt < retries - 1:
                wait = min(2 ** attempt * 5, 60)
                err(f"   HTTP {e.code}, thử lại sau {wait}s ({attempt + 1}/{retries})...")
                time.sleep(wait)
                last_e = RuntimeError(f"HTTP {e.code}: {detail}")
                continue
            raise RuntimeError(f"HTTP {e.code}: {detail}") from None
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < retries - 1:
                wait = min(2 ** attempt * 5, 60)
                err(f"   Lỗi mạng ({e}), thử lại sau {wait}s...")
                time.sleep(wait)
                last_e = e
                continue
            raise
    raise last_e


def http_download(url, out_path, headers=None):
    req = urllib.request.Request(url)
    for k, v in (headers or {}).items():
        req.add_header(k, v)
    tmp = str(out_path) + ".part"
    with urllib.request.urlopen(req, timeout=600) as resp, open(tmp, "wb") as f:
        shutil.copyfileobj(resp, f)
    os.replace(tmp, out_path)


# ----------------------------------------------------------------------------
# Media helpers
# ----------------------------------------------------------------------------

def image_part(path):
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Không thấy file ảnh: {path}")
    mime = mimetypes.guess_type(str(p))[0] or "image/png"
    data = base64.b64encode(p.read_bytes()).decode()
    return {"bytesBase64Encoded": data, "mimeType": mime}


def video_part(path):
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Không thấy file video: {path}")
    data = base64.b64encode(p.read_bytes()).decode()
    return {"bytesBase64Encoded": data, "mimeType": "video/mp4"}


# ----------------------------------------------------------------------------
# Core: submit + poll + download
# ----------------------------------------------------------------------------

def build_request(cfg, backend="gemini"):
    """cfg: dict với prompt/image/refs/last_frame/video/negative/aspect/duration/resolution/audio/seed/count"""
    instance = {}
    if cfg.get("prompt"):
        instance["prompt"] = cfg["prompt"]
    if cfg.get("image"):
        instance["image"] = image_part(cfg["image"])
    if cfg.get("last_frame"):
        instance["lastFrame"] = image_part(cfg["last_frame"])
    if cfg.get("video"):
        instance["video"] = video_part(cfg["video"])
    if cfg.get("refs"):
        refs = cfg["refs"][:3]
        instance["referenceImages"] = [
            {"image": image_part(r), "referenceType": "asset"} for r in refs
        ]

    params = {
        "aspectRatio": cfg.get("aspect", "9:16"),
        "durationSeconds": int(cfg.get("duration", 8)),
        "resolution": cfg.get("resolution", "720p"),
        "sampleCount": int(cfg.get("count", 1)),
    }
    # Chỉ gửi personGeneration khi khai báo rõ — Gemini API preview từ chối giá trị mặc định.
    if cfg.get("person"):
        params["personGeneration"] = cfg["person"]
    # Gemini API (preview) không nhận generateAudio — Veo 3.1 luôn tự gen audio.
    # Vertex AI thì bắt buộc khai báo.
    if backend == "vertex":
        params["generateAudio"] = bool(cfg.get("audio", False))
    if cfg.get("negative"):
        params["negativePrompt"] = cfg["negative"]
    if cfg.get("seed") is not None:
        params["seed"] = int(cfg["seed"])
    return {"instances": [instance], "parameters": params}


def submit(backend, model_id, body):
    if backend == "gemini":
        url = f"{GEMINI_BASE}/models/{model_id}:predictLongRunning"
        headers = {"x-goog-api-key": get_api_key()}
        resp = http_json("POST", url, headers, body)
    else:
        project, location = get_vertex_ctx()
        token = get_gcloud_token()
        url = (f"https://{location}-aiplatform.googleapis.com/v1/projects/{project}"
               f"/locations/{location}/publishers/google/models/{model_id}:predictLongRunning")
        resp = http_json("POST", url, {"Authorization": f"Bearer {token}"}, body)
    name = resp.get("name")
    if not name:
        raise RuntimeError(f"API không trả operation name: {json.dumps(resp)[:500]}")
    return name


def poll(backend, op_name, label=""):
    for attempt in range(MAX_POLL_ATTEMPTS):
        if backend == "gemini":
            url = f"{GEMINI_BASE}/{op_name}"
            status = http_json("GET", url, {"x-goog-api-key": get_api_key()})
        else:
            _, location = get_vertex_ctx()
            token = get_gcloud_token()
            model_path = op_name.split("/operations/")[0]
            url = f"https://{location}-aiplatform.googleapis.com/v1/{model_path}:fetchPredictOperation"
            status = http_json("POST", url, {"Authorization": f"Bearer {token}"},
                               {"operationName": op_name})
        if status.get("done"):
            return status
        log(f"   {label}đang gen... ({(attempt + 1) * POLL_INTERVAL}s)")
        time.sleep(POLL_INTERVAL)
    raise RuntimeError(f"Hết giờ chờ sau {MAX_POLL_ATTEMPTS * POLL_INTERVAL}s")


def extract_videos(status):
    """Trả về list các item {'uri': ...} hoặc {'b64': ...} — chống nhiều format response."""
    if status.get("error"):
        e = status["error"]
        raise RuntimeError(f"Generation lỗi: {e.get('message')} (code {e.get('code')})")
    resp = status.get("response", {}) or {}
    out = []

    gvr = resp.get("generateVideoResponse", {})
    for s in gvr.get("generatedSamples", []) or []:
        uri = (s.get("video") or {}).get("uri")
        if uri:
            out.append({"uri": uri})
    for v in resp.get("generatedVideos", []) or []:
        uri = (v.get("video") or {}).get("uri")
        if uri:
            out.append({"uri": uri})
    for v in resp.get("videos", []) or []:
        if v.get("gcsUri"):
            out.append({"uri": v["gcsUri"]})
        elif v.get("bytesBase64Encoded"):
            out.append({"b64": v["bytesBase64Encoded"]})

    if not out:
        filtered = resp.get("raiMediaFilteredCount")
        reasons = resp.get("raiMediaFilteredReasons")
        if filtered:
            raise RuntimeError(f"Bị safety filter chặn ({filtered} video). Lý do: {reasons}. "
                               "Sửa prompt: bỏ tên người thật/thương hiệu/nội dung nhạy cảm.")
        raise RuntimeError(f"Response không có video: {json.dumps(resp)[:800]}")
    return out


def save_video(backend, item, out_path):
    out_path = Path(out_path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    if "b64" in item:
        out_path.write_bytes(base64.b64decode(item["b64"]))
        return
    uri = item["uri"]
    if uri.startswith("gs://"):
        r = subprocess.run(["gcloud", "storage", "cp", uri, str(out_path)],
                           capture_output=True, text=True)
        if r.returncode != 0:
            raise RuntimeError(f"gcloud storage cp lỗi: {r.stderr[:500]}")
        return
    headers = {}
    if backend == "gemini":
        headers["x-goog-api-key"] = get_api_key()
    else:
        headers["Authorization"] = f"Bearer {get_gcloud_token()}"
    http_download(uri, out_path, headers)


def run_one(backend, model_id, cfg, out_path, label=""):
    t0 = time.time()
    body = build_request(cfg, backend)
    op = submit(backend, model_id, body)
    log(f"   {label}operation: ...{op[-40:]}")
    status = poll(backend, op, label)
    items = extract_videos(status)
    save_video(backend, items[0], out_path)
    # Nếu sampleCount > 1, lưu thêm các biến thể
    for i, extra in enumerate(items[1:], start=2):
        p = Path(out_path)
        save_video(backend, extra, p.with_name(f"{p.stem}-v{i}{p.suffix}"))
    dt = time.time() - t0
    return {"op": op, "file": str(out_path), "seconds": round(dt, 1), "variants": len(items)}


# ----------------------------------------------------------------------------
# Cost
# ----------------------------------------------------------------------------

def estimate_cost(duration, audio, resolution="720p", count=1):
    if resolution == "4k":
        rate = PRICE_PER_SEC["4k"]
    else:
        rate = PRICE_PER_SEC["audio"] if audio else PRICE_PER_SEC["no_audio"]
    return round(rate * duration * count, 2)


# ----------------------------------------------------------------------------
# Commands
# ----------------------------------------------------------------------------

def cmd_doctor(_args):
    ok = True
    key = get_api_key()
    log(f"GEMINI_API_KEY / GOOGLE_API_KEY : {'✅ có' if key else '❌ chưa có'}")
    project, location = get_vertex_ctx()
    log(f"GOOGLE_CLOUD_PROJECT           : {'✅ ' + project if project else '❌ chưa có'}")
    gcloud = shutil.which("gcloud")
    log(f"gcloud CLI                     : {'✅ ' + gcloud if gcloud else '❌ chưa cài'}")
    if gcloud:
        token = get_gcloud_token()
        log(f"gcloud token                   : {'✅ lấy được' if token else '❌ chưa auth (chạy: gcloud auth application-default login)'}")
    ffmpeg = shutil.which("ffmpeg")
    log(f"ffmpeg                         : {'✅ ' + ffmpeg if ffmpeg else '❌ chưa cài (brew install ffmpeg)'}")

    backend = None
    if key:
        backend = "gemini"
    elif project and gcloud and get_gcloud_token():
        backend = "vertex"
    if backend:
        log(f"\n→ Backend sẵn sàng: {backend} (model: {MODELS[backend]['quality']})")
        if backend == "gemini":
            try:
                http_json("GET", f"{GEMINI_BASE}/models/{MODELS['gemini']['quality']}",
                          {"x-goog-api-key": key}, retries=1)
                log("→ Gọi thử API: ✅ key hợp lệ, model truy cập được")
            except Exception as e:
                ok = False
                log(f"→ Gọi thử API: ❌ {str(e)[:300]}")
    else:
        ok = False
        log("\n→ ❌ Chưa backend nào sẵn sàng. Dễ nhất: lấy key tại https://aistudio.google.com/app/apikey rồi:")
        log("     export GEMINI_API_KEY=...   (thêm vào ~/.zshrc để dùng lâu dài)")
    sys.exit(0 if ok else 1)


def cmd_estimate(args):
    cost = estimate_cost(args.duration, args.audio, args.resolution, args.count)
    log(f"~${cost} ({args.count} clip × {args.duration}s, "
        f"{'có audio' if args.audio else 'không audio'}, {args.resolution})")


def cmd_generate(args):
    if not args.prompt and not args.image:
        err("Cần --prompt hoặc --image (hoặc cả hai).")
        sys.exit(2)
    backend = pick_backend(args.backend)
    model_id = MODELS[backend].get(args.model, args.model)
    cfg = {
        "prompt": args.prompt, "image": args.image, "refs": args.ref or [],
        "last_frame": args.last_frame, "negative": args.negative,
        "aspect": args.aspect, "duration": args.duration,
        "resolution": args.resolution, "audio": args.audio,
        "seed": args.seed, "count": args.count,
    }
    cost = estimate_cost(args.duration, args.audio, args.resolution, args.count)
    log(f"🎬 Veo 3.1 [{backend}/{model_id}] {args.aspect} {args.duration}s "
        f"{args.resolution} audio={'on' if args.audio else 'off'} — ước tính ~${cost}")
    if not args.yes and not confirm("Tiếp tục? [y/N] "):
        log("Đã hủy.")
        return
    result = run_one(backend, model_id, cfg, args.out)
    log(f"✅ Xong sau {result['seconds']}s → {result['file']}"
        + (f" (+{result['variants'] - 1} biến thể)" if result["variants"] > 1 else ""))


def _journal_load(path):
    done = {}
    if Path(path).exists():
        for line in Path(path).read_text().splitlines():
            try:
                rec = json.loads(line)
                if rec.get("status") == "done":
                    done[rec["scene"]] = rec
            except json.JSONDecodeError:
                continue
    return done


def cmd_batch(args):
    manifest = json.loads(Path(args.manifest).read_text())
    backend = pick_backend(args.backend or manifest.get("backend"))
    defaults = manifest.get("defaults", {})
    scenes = manifest.get("scenes", [])
    if not scenes:
        err("Manifest không có scenes.")
        sys.exit(2)

    project = manifest.get("project", "veo-batch")
    outdir = Path(args.outdir or manifest.get("outdir") or f"./veo-projects/{project}")
    clipdir = outdir / "clips"
    clipdir.mkdir(parents=True, exist_ok=True)
    journal_path = outdir / "journal.jsonl"
    done = _journal_load(journal_path)

    # Chuẩn hoá cấu hình từng cảnh + tính tiền phần chưa làm
    jobs, total_cost = [], 0.0
    for i, s in enumerate(scenes):
        sid = s.get("id") or f"scene-{i + 1:02d}"
        out_path = clipdir / f"{sid}.mp4"
        if sid in done and out_path.exists():
            continue
        cfg = {**defaults, **s}
        cfg.setdefault("aspect", "9:16")
        cfg.setdefault("duration", 8)
        cfg.setdefault("resolution", "720p")
        cfg.setdefault("audio", False)
        model_key = cfg.get("model", "quality")
        model_id = MODELS[backend].get(model_key, model_key)
        total_cost += estimate_cost(cfg["duration"], cfg["audio"], cfg["resolution"],
                                    int(cfg.get("count", 1)))
        jobs.append((sid, model_id, cfg, out_path))

    skipped = len(scenes) - len(jobs)
    log(f"📋 Dự án '{project}': {len(scenes)} cảnh, đã xong {skipped}, cần gen {len(jobs)}")
    if not jobs:
        log("✅ Tất cả cảnh đã hoàn thành. Dùng 'assemble' để ghép.")
        return
    log(f"💰 Ước tính phần còn lại: ~${round(total_cost, 2)} [backend: {backend}]")
    if not args.yes and not confirm("Tiếp tục? [y/N] "):
        log("Đã hủy. Chạy lại với --yes khi sẵn sàng.")
        return

    lock = threading.Lock()
    sem = threading.Semaphore(args.concurrency)
    results = {}

    def journal_write(rec):
        with lock:
            with open(journal_path, "a") as f:
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")

    def worker(sid, model_id, cfg, out_path):
        with sem:
            label = f"[{sid}] "
            try:
                log(f"▶️  {sid}: bắt đầu ({cfg['duration']}s {cfg['aspect']})")
                r = run_one(backend, model_id, cfg, out_path, label)
                journal_write({"scene": sid, "status": "done", "ts": time.strftime("%F %T"),
                               "file": r["file"], "op": r["op"], "gen_seconds": r["seconds"]})
                results[sid] = ("done", r["file"])
                log(f"✅ {sid}: xong ({r['seconds']}s)")
            except Exception as e:
                journal_write({"scene": sid, "status": "failed", "ts": time.strftime("%F %T"),
                               "error": str(e)[:1000]})
                results[sid] = ("failed", str(e))
                err(f"❌ {sid}: {str(e)[:300]}")

    threads = [threading.Thread(target=worker, args=j, daemon=True) for j in jobs]
    for t in threads:
        t.start()
        time.sleep(args.stagger)  # tránh dội rate limit ngay lúc submit
    for t in threads:
        t.join()

    n_done = sum(1 for v in results.values() if v[0] == "done")
    n_fail = len(results) - n_done
    log(f"\n📊 Kết quả: {n_done} xong, {n_fail} lỗi. Journal: {journal_path}")
    if n_fail:
        log("→ Chạy lại đúng lệnh này để retry các cảnh lỗi (cảnh xong sẽ tự bỏ qua).")
        sys.exit(1)
    log(f"→ Ghép: python3 veo.py assemble --dir {clipdir} --out {outdir / 'final.mp4'}")


def cmd_extend(args):
    backend = pick_backend(args.backend)
    if backend != "gemini":
        log("⚠️  Extend chạy ổn nhất qua Gemini API backend.")
    model_id = MODELS[backend]["quality"]
    cfg = {"prompt": args.prompt, "video": args.video, "aspect": args.aspect,
           "duration": 8, "resolution": "720p", "audio": args.audio}
    log(f"🎬 Extend +7s [{backend}] từ {args.video}")
    r = run_one(backend, model_id, cfg, args.out)
    log(f"✅ Xong → {r['file']}")


def cmd_assemble(args):
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        err("Cần ffmpeg: brew install ffmpeg")
        sys.exit(2)
    clips = sorted(globmod.glob(str(Path(args.dir) / args.pattern)))
    clips = [c for c in clips if not c.endswith(".part")]
    if not clips:
        err(f"Không thấy clip nào khớp {args.pattern} trong {args.dir}")
        sys.exit(2)
    log(f"🎞  Ghép {len(clips)} clip:")
    for c in clips:
        log(f"   - {Path(c).name}")
    listfile = Path(args.dir) / ".concat.txt"
    listfile.write_text("".join(f"file '{os.path.abspath(c)}'\n" for c in clips))
    # re-encode để an toàn khi các clip khác nhau về stream/timebase
    r = subprocess.run([ffmpeg, "-y", "-f", "concat", "-safe", "0", "-i", str(listfile),
                        "-c:v", "libx264", "-preset", "medium", "-crf", "18",
                        "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
                        "-movflags", "+faststart", args.out],
                       capture_output=True, text=True)
    listfile.unlink(missing_ok=True)
    if r.returncode != 0:
        err(f"ffmpeg lỗi: {r.stderr[-800:]}")
        sys.exit(1)
    log(f"✅ Video hoàn chỉnh: {args.out}")


# ----------------------------------------------------------------------------
# CLI
# ----------------------------------------------------------------------------

def main():
    p = argparse.ArgumentParser(description="Veo 3.1 studio CLI")
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("doctor", help="Kiểm tra môi trường")

    pe = sub.add_parser("estimate", help="Ước tính chi phí")
    pe.add_argument("--duration", type=int, default=8, choices=[4, 6, 8])
    pe.add_argument("--audio", action="store_true")
    pe.add_argument("--resolution", default="720p", choices=["720p", "1080p", "4k"])
    pe.add_argument("--count", type=int, default=1)

    def common(sp):
        sp.add_argument("--backend", choices=["gemini", "vertex"])
        sp.add_argument("--yes", "-y", action="store_true", help="Không hỏi xác nhận")

    pg = sub.add_parser("generate", help="Gen 1 clip")
    common(pg)
    pg.add_argument("--prompt", "-p", required=False, default=None)
    pg.add_argument("--image", help="Ảnh khung đầu (image-to-video)")
    pg.add_argument("--last-frame", help="Ảnh khung cuối (interpolation, dùng cùng --image)")
    pg.add_argument("--ref", action="append", help="Ảnh tham chiếu nhân vật/đồ vật (tối đa 3, lặp lại flag)")
    pg.add_argument("--negative", help="Những thứ cần tránh")
    pg.add_argument("--aspect", default="9:16", choices=["16:9", "9:16"])
    pg.add_argument("--duration", type=int, default=8, choices=[4, 6, 8])
    pg.add_argument("--resolution", default="720p", choices=["720p", "1080p", "4k"])
    pg.add_argument("--audio", action="store_true")
    pg.add_argument("--seed", type=int)
    pg.add_argument("--count", type=int, default=1, choices=[1, 2, 3, 4])
    pg.add_argument("--model", default="quality", help="quality | fast | model-id đầy đủ")
    pg.add_argument("--out", "-o", default="./veo-output.mp4")

    pb = sub.add_parser("batch", help="Gen nhiều cảnh từ manifest")
    common(pb)
    pb.add_argument("--manifest", "-m", required=True)
    pb.add_argument("--outdir")
    pb.add_argument("--concurrency", type=int, default=2)
    pb.add_argument("--stagger", type=float, default=3.0, help="Giãn cách submit (giây)")

    px = sub.add_parser("extend", help="Nối dài video +7s")
    common(px)
    px.add_argument("--video", required=True)
    px.add_argument("--prompt", required=True)
    px.add_argument("--aspect", default="9:16", choices=["16:9", "9:16"])
    px.add_argument("--audio", action="store_true")
    px.add_argument("--out", "-o", required=True)

    pa = sub.add_parser("assemble", help="Ghép clip bằng ffmpeg")
    pa.add_argument("--dir", required=True)
    pa.add_argument("--pattern", default="*.mp4")
    pa.add_argument("--out", "-o", required=True)

    args = p.parse_args()
    try:
        {"doctor": cmd_doctor, "estimate": cmd_estimate, "generate": cmd_generate,
         "batch": cmd_batch, "extend": cmd_extend, "assemble": cmd_assemble}[args.cmd](args)
    except (RuntimeError, FileNotFoundError, json.JSONDecodeError) as e:
        err(f"❌ {e}")
        if "API_KEY_INVALID" in str(e):
            err("→ Key không hợp lệ. Lấy key mới tại https://aistudio.google.com/app/apikey")
        if "RESOURCE_EXHAUSTED" in str(e):
            err("→ Hết quota. Veo KHÔNG có quota free tier — cần bật billing (paid tier) cho "
                "project tại https://aistudio.google.com/ (mục Plan/Billing), hoặc đợi reset quota.")
        sys.exit(1)
    except KeyboardInterrupt:
        err("\nĐã dừng theo yêu cầu. Batch có thể chạy lại để resume.")
        sys.exit(130)


if __name__ == "__main__":
    main()
