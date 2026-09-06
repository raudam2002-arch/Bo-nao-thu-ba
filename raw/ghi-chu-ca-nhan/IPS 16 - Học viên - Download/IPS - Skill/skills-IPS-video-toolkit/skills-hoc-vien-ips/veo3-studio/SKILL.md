---
name: veo3-studio
description: Điều phối Google Veo 3.1 từ Claude Code — gen video AI (text-to-video, image-to-video, giữ nhân vật nhất quán bằng ảnh tham chiếu, nối dài clip, batch nhiều cảnh có resume/retry) qua Gemini API hoặc Vertex AI. Dùng BẤT CỨ KHI NÀO người dùng muốn "gen video Veo", "tạo video bằng Veo 3", "dựng video AI nhiều cảnh", "video dọc 9:16 bằng Veo", "batch video từ kịch bản", "image-to-video", "nối dài video", hoặc nhắc "Google Flow" nhưng muốn làm qua API ổn định. KHÔNG dùng cho Higgsfield/Seedance (dùng higgsfield-generate), cắt short từ video có sẵn (video-hook-shorts), video người que (video-nguoi-que).
---

# Veo 3 Studio — Claude Code là đạo diễn, Veo là quay phim

Skill này biến yêu cầu của người dùng thành video Veo 3.1 qua quy trình 6 pha,
KHÔNG BAO GIỜ đốt tiền API trước khi người dùng duyệt prompt + chi phí.

Script chính: `scripts/veo.py` (Python thuần stdlib, không cần cài gì thêm).
Backend tự chọn: có `GEMINI_API_KEY` → Gemini API; không thì `GOOGLE_CLOUD_PROJECT` + gcloud → Vertex AI.

## Giá (nhớ để báo người dùng TRƯỚC khi gen)

| Loại | Giá |
|---|---|
| Video KHÔNG audio (720p/1080p) | $0.20/giây → clip 8s ≈ $1.60 |
| Video CÓ audio | $0.40/giây → clip 8s ≈ $3.20 |
| 4K | $0.60/giây |

⚠️ Riêng **Gemini API (preview)**: Veo 3.1 LUÔN tự gen audio (không tắt được) → tính giá theo
mức có audio. Muốn trả giá không-audio thì dùng backend Vertex (`generateAudio: false` hoạt động).

Mặc định của skill: **9:16, 8s, 720p, KHÔNG audio** (giọng đọc + nhạc lồng sau ở bước hậu kỳ — giống workflow video-nguoi-que). Giới hạn API: clip chỉ 4/6/8s;
video dài = nhiều cảnh 8s ghép lại bằng `assemble`.

## QUY TRÌNH 6 PHA (theo thứ tự, không bỏ pha)

### PHA 0 — DOCTOR (lần đầu trong session)
```bash
python3 ~/.claude/skills/veo3-studio/scripts/veo.py doctor
```
Nếu chưa có backend: hướng dẫn lấy key tại https://aistudio.google.com/app/apikey
rồi `export GEMINI_API_KEY=...` (khuyên thêm vào ~/.zshrc).

### PHA 1 — HIỂU
Hỏi làm rõ nếu yêu cầu mơ hồ: dùng ở đâu (Shorts/Reels? hero web?), mood gì,
có nhân vật cần giữ nhất quán không, cái gì KHÔNG được xuất hiện.
Yêu cầu rõ ràng thì đi tiếp luôn, đừng hỏi thừa.

### PHA 2 — VIẾT PROMPT (tiếng Anh, công thức 5 yếu tố)
```
[Camera] + [Chủ thể chi tiết] + [MỘT hành động] + [Bối cảnh/thời điểm] + [Ánh sáng/màu]
```
Đọc `references/prompt-cong-thuc.md` để lấy từ vựng điện ảnh + template.
Video nhiều cảnh: viết TẤT CẢ prompt trước, giữ chung palette/ánh sáng/mood xuyên suốt.

### PHA 3 — TỰ KIỂM (bắt buộc)
LOẠI ngay nếu: chồng 2 chuyển động camera; yêu cầu chữ/text trên hình (Veo render chữ xấu);
mô tả mâu thuẫn ("dynamic but subtle"); nhiều chủ thể + nhiều hành động cùng lúc.
CẢNH BÁO nếu: thiếu chất liệu cụ thể, thiếu ánh sáng, loop mà không có "seamless loop, locked camera".

### PHA 4 — TRÌNH DUYỆT & CHỜ OK
Trình bày: prompt đầy đủ + settings + **chi phí ước tính** (`veo.py estimate`).
Với batch: liệt kê bảng cảnh + tổng tiền. CHỜ người dùng đồng ý rồi mới gen.

### PHA 5 — GEN

**1 clip:**
```bash
python3 ~/.claude/skills/veo3-studio/scripts/veo.py generate \
  --prompt "..." --aspect 9:16 --duration 8 --out ./clip.mp4 --yes
```
Tùy chọn hay dùng: `--image anh.png` (image-to-video), `--ref nhanvat.png` (tối đa 3, giữ
nhân vật nhất quán giữa các cảnh), `--negative "..."`, `--seed N` (tái lập), `--audio`,
`--model fast` (rẻ + nhanh khi nháp), `--count 2` (2 biến thể chọn 1).

**Nhiều cảnh (batch):** tạo manifest theo `examples/manifest-mau.json` rồi:
```bash
python3 ~/.claude/skills/veo3-studio/scripts/veo.py batch -m manifest.json --yes
```
Batch tự lo: concurrency (mặc định 2), retry/backoff khi 429/5xx, journal `journal.jsonl`,
**resume** — chạy lại cùng lệnh sẽ bỏ qua cảnh đã xong, chỉ gen cảnh lỗi/thiếu.

**Ghép thành video hoàn chỉnh:**
```bash
python3 ~/.claude/skills/veo3-studio/scripts/veo.py assemble \
  --dir veo-projects/<ten>/clips --out final.mp4
```

**Nối dài clip +7s:** `veo.py extend --video in.mp4 --prompt "tiếp tục..." --out out.mp4`

### PHA 6 — LẶP KHI CHƯA ƯNG
Hỏi cụ thể cái gì chưa được, sửa ĐÚNG yếu tố đó (đừng viết lại từ đầu), giữ `--seed` cũ
để so sánh. Chẩn đoán nhanh: tĩnh quá → tăng mô tả chuyển động; loạn quá → 1 hành động +
locked camera; sai mood → sửa ánh sáng/màu; nhân vật lệch → thêm `--ref`.

## Kỹ thuật giữ NHẤT QUÁN xuyên video dài (học từ flowkit)

1. Gen 1 ảnh chân dung nhân vật chuẩn trước (Higgsfield/Nano Banana hoặc Veo frame).
2. Dùng ảnh đó làm `--ref` (hoặc `"refs"` trong manifest) cho MỌI cảnh có nhân vật.
3. Mọi prompt trong cùng dự án: chung color palette + lighting style + tông camera.
4. Cảnh nối cảnh: dùng `--image` = frame cuối cảnh trước (xuất bằng
   `ffmpeg -sseof -0.1 -i truoc.mp4 -frames:v 1 lastframe.png`).

## Xử lý sự cố

| Lỗi | Xử lý |
|---|---|
| 429 RESOURCE_EXHAUSTED ngay từ request đầu | Key free tier — Veo không có quota free, phải bật billing (paid) tại aistudio.google.com |
| Bị safety filter (raiMediaFiltered) | Bỏ tên người thật/thương hiệu/nội dung nhạy cảm khỏi prompt |
| 429 rate limit | Script tự backoff; nếu batch lớn giảm `--concurrency 1`, tăng `--stagger` |
| Hết giờ chờ | Chạy lại — batch tự resume, cảnh xong không gen lại |
| Key không hợp lệ | `veo.py doctor` để chẩn đoán |
| Muốn rẻ khi thử ý tưởng | `--model fast --resolution 720p --duration 4`, chốt rồi mới gen bản quality |

## Tác giả & Bản quyền

- Tác giả: **Phạm Thành Long** — https://long.vn
- Skill này dành riêng cho **học viên khoá học IPS** — http://ips.long.vn
- Học viên của lớp được quyền: **đọc, nghiên cứu, cài đặt và sử dụng**.
- Người ngoài lớp học **không có bản quyền** sử dụng dưới mọi hình thức.
