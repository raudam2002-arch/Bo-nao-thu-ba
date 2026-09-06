# CLAUDE.md — Quy ước & quy trình cho wiki "Hỏi thầy Long"

Đây là dự án xây dựng một wiki tri thức tích lũy dần, chủ đề: **những gì thầy Long chia sẻ về phát triển bản thân và kinh doanh**. Bạn (Claude) là người biên soạn và bảo trì wiki. Người dùng là người mang nguồn vào, đặt câu hỏi, và định hướng nội dung nên nhấn mạnh điều gì.

Đọc file này trước khi ingest nguồn mới, trả lời câu hỏi dựa trên wiki, hoặc rà soát (lint) wiki.

## Ba lớp dữ liệu

1. **`raw/`** — nguồn thô, **bất biến**. Không bao giờ sửa, xoá, hay viết đè lên các file trong đây. Đây là "sự thật gốc" — mọi trang wiki phải có thể truy ngược lại một hoặc nhiều file trong `raw/`.
2. **`wiki/`** — do bạn (Claude) toàn quyền tạo, sửa, và duy trì tính nhất quán. Người dùng đọc, hiếm khi tự viết tay vào đây.
3. **`CLAUDE.md`** (file này) — quy ước. Cùng người dùng chỉnh sửa file này khi phát hiện quy ước chưa phù hợp.

## Quy ước đặt tên & định dạng file

- Tên file: chữ thường, không dấu, nối bằng gạch ngang (kebab-case), ví dụ `tu-duy-ban-le.md`, `2026-03-14-hoi-ve-dong-tien.md`.
- Nguồn trong `raw/ghi-chu-ca-nhan/`: đặt tên `YYYY-MM-DD-chu-de-ngan-gon.md`.
- Nội dung wiki viết bằng **tiếng Việt**. Có thể giữ thuật ngữ tiếng Anh trong ngoặc nếu thầy Long dùng nguyên gốc.
- Mỗi trang wiki bắt đầu bằng YAML frontmatter:

```yaml
---
title: <tên trang>
type: chu-de | khai-niem | hoi-dap | tong-hop | nhan-vat
created: YYYY-MM-DD
updated: YYYY-MM-DD
nguon:
  - raw/ghi-chu-ca-nhan/2026-03-14-hoi-ve-dong-tien.md
tags: [tag1, tag2]
---
```

- Liên kết chéo giữa các trang wiki dùng cú pháp Obsidian: `[[ten-file-khong-duoi]]`. Luôn ưu tiên link đến trang đã có thay vì lặp lại nội dung.

## Quy trình Ingest (khi có nguồn mới trong `raw/`)

Khi người dùng nói "ingest [file]" hoặc thêm ghi chú mới:

1. Đọc toàn bộ nội dung nguồn.
2. Tóm tắt ý chính, hỏi lại người dùng nếu cần làm rõ điều gì nên nhấn mạnh (đừng tự đoán khi không chắc).
3. Tạo trang tóm tắt trong `wiki/hoi-dap/` — tên trùng ngày/chủ đề với nguồn — ghi lại câu hỏi đã hỏi thầy Long và ý chính trong câu trả lời, kèm frontmatter `nguon:` trỏ về file gốc.
4. Cập nhật (hoặc tạo mới) các trang liên quan:
   - `wiki/chu-de/*.md` — trang chủ đề lớn (VD: kinh doanh, tư duy, ra quyết định). Thêm ý mới, hoặc nếu mâu thuẫn với nội dung cũ, **ghi rõ cả hai** kèm ngày, không âm thầm xoá ý cũ.
   - `wiki/khai-niem/*.md` — nếu buổi nói chuyện nhắc đến một khái niệm/mô hình cụ thể chưa có trang riêng và đủ quan trọng, tạo trang mới.
   - `wiki/gioi-thieu-thay-long.md` — cập nhật nếu có thông tin mới về quan điểm/phong cách của thầy Long nói chung.
5. Cập nhật `wiki/index.md` — thêm dòng mới vào đúng danh mục.
6. Thêm một dòng vào `wiki/log.md` theo định dạng chuẩn (xem bên dưới).
7. Báo lại ngắn gọn cho người dùng: đã tạo/sửa những trang nào.

Một nguồn có thể chạm vào 5-10 trang wiki — đó là bình thường, không phải lỗi.

Mặc định ingest **từng nguồn một** và giữ người dùng tham gia (đọc tóm tắt, xác nhận trước khi ghi). Chỉ ingest hàng loạt không giám sát khi người dùng yêu cầu rõ.

## Quy trình Query (khi người dùng đặt câu hỏi)

1. Đọc `wiki/index.md` trước để định vị trang liên quan — không tìm trực tiếp trong `raw/` trừ khi wiki chưa có thông tin.
2. Đọc các trang wiki liên quan, tổng hợp câu trả lời, trích dẫn trang/nguồn cụ thể.
3. Nếu câu trả lời tổng hợp là mới và có giá trị lâu dài (so sánh, phân tích, kết nối ý tưởng), hỏi người dùng có muốn lưu lại vào `wiki/tong-hop/` không — nếu có, tạo trang mới, link vào các trang liên quan, và ghi vào `index.md` + `log.md`.

## Quy trình Lint (rà soát định kỳ, khi được yêu cầu)

Kiểm tra và báo cáo:
- Mâu thuẫn giữa các trang chưa được ghi chú rõ.
- Trang mồ côi (không có trang nào link tới).
- Khái niệm được nhắc nhiều lần trong `wiki/chu-de/` nhưng chưa có trang riêng trong `wiki/khai-niem/`.
- Trang thiếu frontmatter hoặc thiếu `nguon:`.
- Ý tưởng còn dang dở, gợi ý câu hỏi nên hỏi thêm thầy Long ở buổi sau.

## `wiki/index.md` — quy tắc cập nhật

Mục lục theo danh mục (Nhân vật, Chủ đề, Khái niệm, Hỏi-đáp, Tổng hợp). Mỗi dòng: link + tóm tắt một câu + ngày cập nhật gần nhất. Cập nhật file này ở **mọi** lần ingest hoặc tạo trang tổng hợp mới — không để lệch với thực tế thư mục.

## `wiki/log.md` — quy tắc ghi

Mỗi dòng log bắt đầu bằng tiền tố cố định để dễ `grep`:

```
## [YYYY-MM-DD] ingest | <tên nguồn>
## [YYYY-MM-DD] query | <câu hỏi ngắn gọn>
## [YYYY-MM-DD] lint | <tóm tắt phát hiện>
```

Dưới mỗi dòng tiêu đề, liệt kê ngắn gọn các trang wiki đã tạo/sửa. Không bao giờ sửa lại log cũ — chỉ append.

## Việc không nên làm

- Không tự bịa thông tin về thầy Long khi nguồn không có — nếu wiki chưa đủ dữ liệu để trả lời, nói rõ điều đó thay vì suy diễn.
- Không sửa file trong `raw/`.
- Không xoá âm thầm nội dung cũ trong wiki khi có thông tin mới mâu thuẫn — luôn ghi nhận cả hai kèm thời điểm.
