# Recipe chi tiết — Video Người Que

## STYLE_BASE (bắt buộc đứng đầu mọi prompt hình)
```
Hand-drawn white chalk stick figure animation on a dark green classroom chalkboard, vertical format. Simple white chalk line art, slightly wobbly hand-drawn lines, visible chalk dust texture, charming stop-motion chalk-drawing feel.
```
## STYLE_TAIL (đứng cuối)
```
Consistent white chalk on green board, smooth motion, warm inspiring mood.
```
Giữa hai đoạn là mô tả cảnh cụ thể. Có thể dùng **1 hoặc 2 người que** tuỳ nội
dung (cá nhân → 1; tình yêu/hôn nhân/đội nhóm → 2 hoặc nhiều).

## Cung cảm xúc chuẩn (tham khảo)
Một video tốt đi theo A→C→B: hiện trạng/khó khăn → cao trào/bước ngoặt → kết
rực sáng nhiệm màu. Cảnh cuối gần như luôn: người que vươn mình / trái tim hàn
gắn / mặt trời + tia sáng lấp lánh + đường ánh sáng vàng.

## Ví dụ mapping ý → cảnh (đã dùng thật)

**Chủ đề "Thói quen tí hon" (15s, 1 clip, 3 shot trong cùng prompt):**
uể oải đứng dậy uống ly nước → lịch lật, đường mòn thành vệt sáng → vươn tay,
mặt trời + đường ánh sáng.

**Chủ đề "Tình yêu" (60s, 4 clip):**
1. Hai người que trước trường học có trái tim trên cửa + mũ tốt nghiệp + tim phát sáng giữa họ.
2. Vẽ tiền/xe/nhà/cặp công việc rồi gạch X từng cái → trái tim lớn rực sáng giữa bảng.
3. Biểu đồ tròn 80%/20% + một người que ngồi đọc chồng sách cao, trái tim nhỏ rạn nứt rơi bụi phấn.
4. Người que chạm đầu rồi chạm ngực; trái tim rạn tự hàn gắn phát sáng; hai người que tiến lại ôm nhau dưới mưa sao phấn.

## Giọng đọc — mẹo pacing
- **Caspian** (mặc định) đọc rất chậm & trầm. ~150 từ ≈ 58s. Với video 15s dùng
  ~35–40 từ. Tránh `...` nhiều — mỗi dấu ba chấm thành khoảng lặng ~1s.
- Đọc số/ký hiệu thành chữ trong `--prompt` giọng ("tám mươi phần trăm",
  "một triệu"), nhưng ghi số trong phụ đề cho gọn ("80%", "1 triệu").
- Nếu giọng ra dài quá mốc: rút bớt chữ / bỏ `...` rồi tạo lại (đừng atempo).

## Bảng giọng
| Tên | voice_id | Chất |
|---|---|---|
| Caspian (mặc định) | ef70cc83-3015-4bad-9359-0ea968c43ec0 | Nam trầm, thiền, chậm |
| Orion | ed69c516-92d2-4b30-a967-617737a342e5 | Nam trầm vừa |
| Maya | b0f766b7-8703-4bd1-b973-f857c36837b6 | Nữ ấm, truyền cảm |

Giọng khác: `list_voices` (Higgsfield) — tất cả là ElevenLabs đa ngôn ngữ, đọc
được tiếng Việt.

## Phụ đề — quy tắc
- Màu chốt: fill vàng chanh `[235,255,130,255]`, viền `[20,28,12,255]`. Trên nền
  bảng xanh cho tương phản cao, rất dễ đọc.
- `make_subs.py` tự co cỡ chữ để dòng dài nhất không tràn mép (max ~960px).
- Mỗi cụm ≤ 2 dòng. Chia dòng ở chỗ ngắt nghĩa tự nhiên.
- Đặt ở 1/3 dưới (`center_y` 1430) để chừa vùng UI TikTok/Reels dưới đáy.
- Câu chốt cuối giữ lâu hơn một chút (fade out mượt).

## Nhạc nền
- `sonilo_music`, `--duration` = tổng giây. Nếu chủ đề tình cảm: thêm
  "warm, tender, romantic, hopeful" vào prompt. Thiền/động lực: "meditative,
  uplifting". Luôn "no drums, no vocals" để không đè giọng.
- Trộn 9% (`music_volume: 0.09`). AI sinh nên **an toàn bản quyền**.

## Xử lý lỗi thường gặp
- `No such filter: 'subtitles' / drawtext` → đúng như dự kiến (ffmpeg thiếu
  libass). Dùng PNG overlay qua `make_subs.py` — không cố cài lại ffmpeg.
- Giọng lố giờ → rút lời, bỏ `...`, tạo lại.
- Phụ đề lệch tiếng → chạy lại `detect_silence.py`, chỉnh `start/end` trong cues.
- Clip ghép giật timestamp → các clip cùng model/cùng thông số nên concat `-c copy`
  chạy tốt; nếu lỗi, re-encode từng clip về cùng 30fps trước khi ghép.
- Chữ tràn mép → `make_subs.py` đã tự co; nếu vẫn dài, tách thành nhiều dòng/cụm.
```

## Đường hình Google Flow (mặc định từ 7/2026)
- Clip Flow: **8s hoặc 10s** (không phải 15s như Seedance) → mapping ý→cảnh chia nhỏ hơn,
  ví dụ giọng 39.6s = 5 cảnh (4×8s + kết 10s). Cảnh kết luôn để 10s.
- STYLE_BASE/TAIL giữ nguyên, thêm đuôi `no readable text`. Omni Flash vẽ chalk rất chuẩn,
  tả "golden glowing light path" / "radiant chalk sun" để có điểm nhấn vàng.
- Flow ra 720×1280 → upscale lanczos lên 1080×1920 TRƯỚC khi build (không thì mất phụ đề).
- Tải clip: bắt link flow-content.google qua network (xem skill flow-studio); các cảnh cùng
  STYLE_BASE nhìn giống nhau trong UI — soi frame sau khi tải để đặt tên đúng.
