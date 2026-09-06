---
name: video-nguoi-que
description: >-
  Tạo video DỌC 9:16 phong cách "người que vẽ phấn trên bảng xanh" truyền cảm
  hứng — dựng hình động qua GOOGLE FLOW (credits Ultra, mặc định) hoặc Seedance
  (dự phòng), lồng GIỌNG ĐỌC tiếng Việt kiểu thiền, thêm NHẠC NỀN không bản
  quyền, và cháy PHỤ ĐỀ vàng chanh khớp từng câu. Dùng skill này BẤT CỨ KHI NÀO
  người dùng muốn "tạo video người que", "video người que phấn", "video hoạt
  hình que dọc", "chalk stick figure video", "làm clip người que về chủ đề X",
  "video truyền cảm hứng người que", "video bảng phấn", 15s/30s/60s, hoặc đưa
  một đoạn nội dung / quote / bài giảng và bảo dựng thành video người que. Kích
  hoạt cả khi chỉ nói "dựng video kiểu người que như lần trước", "làm video
  giống bản tình yêu", "stick figure chalkboard video", "video người que qua
  flow". KHÔNG dùng cho: cắt short từ video có sẵn (dùng video-hook-shorts),
  hay chỉ tạo một ảnh/clip đơn lẻ không cần giọng+phụ đề (dùng higgsfield-generate).
---

# Video Người Que (chalk stick-figure, dọc 9:16)

Biến một đoạn nội dung tiếng Việt thành video dọc hoàn chỉnh: **hình người que vẽ
phấn trắng trên bảng xanh → giọng đọc thiền → nhạc nền không bản quyền → phụ đề
vàng chanh cháy chữ**. Pipeline đã thực chiến; giữ nguyên các hằng số đã chốt để
mọi video ra lò đồng bộ về nhân vật / giọng / màu / nhạc.

## Yêu cầu môi trường
- **Đường hình mặc định — Google Flow**: Chrome có extension Claude kết nối + đăng nhập
  tài khoản Google có gói Google AI (Pro/Ultra) của bạn. Quy trình điều khiển chi tiết: skill **flow-studio**.
- `higgsfield` CLI đã đăng nhập (`higgsfield account status`) — dùng cho **giọng đọc + nhạc**
  (và Seedance nếu đi đường dự phòng).
- `ffmpeg` + `ffprobe`, `python3` (có Pillow). ffmpeg máy này **không có libass/drawtext**
  → phụ đề render PNG rồi overlay (script lo sẵn).

## Hằng số đã CHỐT (đừng đổi trừ khi user yêu cầu)

| Thành phần | Giá trị |
|---|---|
| **Nhân vật/nền** | Người que **phấn trắng** trên **bảng xanh đen**, nét run tay, bụi phấn, kiểu stop-motion |
| **Hình — MẶC ĐỊNH: Google Flow** | Model **Omni Flash** · 9:16 · **1x** output · clip **8s hoặc 10s** · ~**12 credits/8s** · ra 720×1280 → **bắt buộc upscale 1080×1920** trước khi build |
| **Hình — dự phòng: Seedance** | `seedance_2_0` · 9:16 · 1080p · `--generate_audio false` · 15s/clip · ~135 credits/clip (đắt ~10×, chỉ dùng khi Flow không khả dụng) |
| **Giọng đọc** | `text2speech_v2` / `elevenlabs` / preset. Mặc định **Caspian** `ef70cc83-3015-4bad-9359-0ea968c43ec0` (nam trầm, thiền) |
| **Nhạc nền** | `sonilo_music` (AI sinh → **không bản quyền**), zen ambient. Trộn **9%** (`music_volume: 0.09`) |
| **Phụ đề** | Vàng chanh `RGB(235,255,130)`, viền đậm, Arial Bold (tự co cỡ chữ), đặt 1/3 dưới, khung 1080×1920 |
| **Ghép** | Giọng vào sau **1.2s**; xuất 1080×1920 H.264 |

Giọng thay thế khi user muốn: nữ ấm **Maya** `b0f766b7-8703-4bd1-b973-f857c36837b6` ·
nam **Orion** `ed69c516-92d2-4b30-a967-617737a342e5`. Danh sách đầy đủ: `list_voices` (Higgsfield).

## Quy trình 7 bước

Làm trong một thư mục làm việc (scratchpad). **Chạy B2 (giọng) TRƯỚC TIÊN ở nền** —
độ dài giọng quyết định số cảnh; nhạc (B3) chạy nền sau khi đo giọng.

### B1 — Giọng trước, rồi tính số cảnh
Thứ tự đúng: gen giọng (B2, nền) → đo duration → tính cảnh → gen hình.

Với clip Flow 8s/10s: `tổng_video ≥ giọng + 1.2s (lead) + ~1s (tail)`.
Ghép từ các clip 8s, **cảnh cuối nên 10s** (câu chốt giữ hình lâu). Ví dụ thực chiến:
giọng 39.6s → 4×8s + 1×10s = 42s ✓. (Đường Seedance dự phòng: clip 15s, `ceil(giây/15)`.)

Mỗi clip minh hoạ MỘT ý theo cung A→C→B (hiện trạng → bước ngoặt → kết rực sáng —
xem `references/recipe.md`). Prompt hình = `STYLE_BASE + cảnh + STYLE_TAIL` trong recipe,
thêm đuôi `no readable text`.

### B1b — Gen hình qua FLOW (mặc định)
Theo đúng quy trình skill **flow-studio** (mở project → chip cài đặt bằng find→ref →
9:16 / 1x / Omni Flash / 8s hoặc 10s → điền prompt qua ref textarea → gửi → chờ ~60-90s
→ bắt link `flow-content.google/video/...` qua `read_network_requests` → `curl` tải về):
- Submit tất cả prompt liên tiếp (Flow tự queue), rồi chờ chung.
- **Nhận diện cảnh khi tải**: các prompt cùng STYLE_BASE bị cắt cụt giống hệt nhau trong UI —
  ĐỪNG tin thứ tự/thumbnail. Tải về xong soi khung hình
  (`ffmpeg -ss 4 -i clip.mp4 -frames:v 1 f.png` rồi Read ảnh) để đặt tên c1..cN đúng cảnh.
- **BẮT BUỘC upscale** từng clip trước khi build (Flow ra 720×1280, phụ đề render 1080×1920 —
  không upscale là mất phụ đề):
```bash
ffmpeg -y -i cN.mp4 -vf "scale=1080:1920:flags=lanczos" \
  -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p -an cN_hd.mp4
```
Dự phòng Seedance (khi Chrome/Flow không khả dụng — báo user trước vì đắt):
```bash
higgsfield generate create seedance_2_0 \
  --prompt "<STYLE_BASE> <cảnh> <STYLE_TAIL>" \
  --aspect_ratio 9:16 --duration 15 --resolution 1080p --generate_audio false \
  --wait --wait-timeout 25m --json
```

### B2 — Giọng đọc (chạy đầu tiên, quyết định mọi thứ)
Viết lời **pause gọn** (dấu phẩy/chấm, tránh nhiều `...` vì Caspian đọc rất chậm).
Đọc số/ký hiệu bằng chữ ("tám mươi phần trăm") — nhưng phụ đề vẫn ghi "80%".

```bash
higgsfield generate create text2speech_v2 \
  --model elevenlabs --voice_type preset \
  --voice_id ef70cc83-3015-4bad-9359-0ea968c43ec0 \
  --prompt "<lời đọc tiếng Việt>" --wait --wait-timeout 10m --json
```
Tải về, đo `ffprobe -show_entries format=duration`. Muốn khớp mốc tròn: chỉnh độ dài
lời đọc, đừng kéo giãn audio.

### B3 — Nhạc nền (không bản quyền)
```bash
higgsfield generate create sonilo_music \
  --prompt "calm meditative ambient background music, soft felt piano and gentle strings, peaceful uplifting, zen, slow, no drums, no vocals, cinematic underscore" \
  --duration <tổng_giây> --wait --wait-timeout 15m --json
```

### B4 — Canh nhịp phụ đề
```bash
python3 scripts/detect_silence.py voice.mp3
```
Script in các "đoạn nói" đã cộng sẵn 1.2s + khung cues mẫu. Gộp đoạn quá ngắn, tách đoạn
quá dài, điền lời cho mỗi cụm (≤ 2 dòng). Câu lặp kiểu "liên tục, liên tục" tách flash
ngắn cho có nhịp.

### B5 — Viết `project.json` + render phụ đề
`clips` trỏ vào bản **_hd** (đã upscale). Schema đầy đủ ở đầu `scripts/build_video.py`:
```json
{
  "output": "<thư mục dự án của bạn>/TEN-VIDEO.mp4",
  "clips": ["c1_hd.mp4", "c2_hd.mp4", "c3_hd.mp4", "c4_hd.mp4", "c5_hd.mp4"],
  "voice": "voice.mp3",
  "music": "music.m4a",
  "lead_in": 1.2,
  "music_volume": 0.09,
  "subs_dir": ".",
  "cues": [
    {"start": 1.20, "end": 3.53, "lines": ["Tình yêu là trường học", "quan trọng nhất,"]}
  ]
}
```
```bash
python3 scripts/make_subs.py project.json
```

### B6 — Dựng bản cuối
```bash
python3 scripts/build_video.py project.json
```
Script tự: ghép clip → overlay phụ đề đúng giờ (fade mượt) → trộn giọng (1.2s) + nhạc 9%
→ xuất MP4.

### B7 — Kiểm tra bắt buộc trước khi giao
Soi ≥3 khung (đầu / giữa / cuối) xác nhận **phụ đề hiện đúng cảnh đúng lời**
(bài học: từng có bản dựng mất sạch phụ đề vì quên upscale):
```bash
ffmpeg -y -ss <giây> -i <output.mp4> -frames:v 1 check.png   # rồi Read ảnh
ffmpeg -i <output.mp4> -af volumedetect -f null - 2>&1 | grep max_volume  # đỉnh < 0dB
ffprobe -v error -show_entries stream=width,height -of csv=p=0 <output.mp4>  # phải 1080,1920
```

## Lưu ý thực chiến
- **Đặt output vào thư mục dự án của bạn**, tên gợi nhớ chủ đề + độ dài:
  `ban-hang-nguoi-que_42s_9x16.mp4`.
- **Omni Flash hiểu style chalk rất tốt** — cảnh kết mặt trời + tia sáng vàng + mưa sao phấn
  ra đẹp; cứ tả "golden glowing light path" là có điểm nhấn màu trên nền phấn trắng.
- **Hình đổi mỗi lần tạo** (AI sinh mới) — style/giọng/màu/nhạc thì giống hệt. Muốn khoá cả
  hình: tái dùng clip cũ thay vì tạo mới.
- **Nhạc mặc định 9%.** To hơn: 0.12–0.16.
- Chi phí tham khảo (7/2026): Flow ~12 credits/cảnh 8s (video 42s ≈ 63 credits Ultra);
  giọng + nhạc tốn ít credits Higgsfield. Seedance dự phòng ~135 credits/clip 15s.
- Chi tiết prompt cảnh, giọng thay thế, xử lý lỗi: `references/recipe.md`.

## Câu ra lệnh điển hình
> "Tạo video người que 60s nội dung: <đoạn text>"
→ B2 giọng trước → tính cảnh → gen hình qua Flow → dựng đủ 7 bước, mặc định
Caspian + nhạc 9% + phụ đề vàng chanh.

## Tác giả & Bản quyền

- Tác giả: **Phạm Thành Long** — https://long.vn
- Skill này dành riêng cho **học viên khoá học IPS** — http://ips.long.vn
- Học viên của lớp được quyền: **đọc, nghiên cứu, cài đặt và sử dụng**.
- Người ngoài lớp học **không có bản quyền** sử dụng dưới mọi hình thức.
