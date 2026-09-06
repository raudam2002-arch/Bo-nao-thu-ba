# raw/ — Nguồn thô

Thư mục này chứa nguồn gốc, **bất biến**. Claude chỉ đọc từ đây, không bao giờ sửa hay xoá file trong thư mục này.

- `ghi-chu-ca-nhan/` — ghi chú các buổi hỏi-đáp với thầy Long. Nguồn chính hiện tại. Đặt tên file `YYYY-MM-DD-chu-de-ngan-gon.md`.
- `bai-giang/` — transcript bài giảng (text), nếu có sau này.
- `bai-viet/` — bài viết, tài liệu khác liên quan đến thầy Long.

Thêm nguồn mới rồi nói với Claude: *"Ingest file raw/ghi-chu-ca-nhan/2026-xx-xx-....md"* để bắt đầu quy trình ingest (xem [`CLAUDE.md`](../CLAUDE.md)).
