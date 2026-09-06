# Nhật ký wiki

Ghi lại theo thời gian mọi lần ingest, query đáng nhớ, và lint. Chỉ append, không sửa lại log cũ. Mỗi mục bắt đầu bằng tiêu đề chuẩn để dễ `grep "^## \["`.

## [2026-09-06] setup | Khởi tạo cấu trúc wiki

Dựng khung ban đầu cho dự án "Hỏi thầy Long":
- Tạo `raw/` (ghi-chu-ca-nhan, bai-giang, bai-viet) và `wiki/` (chu-de, khai-niem, hoi-dap, tong-hop).
- Viết `CLAUDE.md` — quy ước và quy trình ingest/query/lint.
- Tạo `wiki/index.md`, `wiki/log.md`, `wiki/gioi-thieu-thay-long.md` (khung rỗng, chờ nguồn đầu tiên).

Chưa có nguồn nào được ingest. Bước tiếp theo: thêm ghi chú đầu tiên vào `raw/ghi-chu-ca-nhan/`.

## [2026-09-06] ingest | Video Marketing 28 Ngày (skill IPS 16)

Người dùng thêm thư mục tài liệu khoá học IPS 16 vào `raw/ghi-chu-ca-nhan/IPS 16 - Học viên - Download/` (giữ lại phần skill dạng markdown, đã xoá các file zip/pdf/docx nặng). Trong đó có skill `video-marketing-28-ngay` mô tả chương trình dạy làm video của thầy Long. Qua 2 câu hỏi của người dùng ("16 bước bán hàng gồm những bước nào" và "nội dung cần đưa vào khi làm video là gì"), đã đọc và tạo trang cho phần video marketing:
- Tạo `wiki/khai-niem/video-marketing-28-ngay.md`
- Tạo `wiki/khai-niem/khung-kich-ban-video-6-buoc.md`
- Cập nhật `wiki/gioi-thieu-thay-long.md` — thêm tên đầy đủ (Phạm Thành Long), quy mô follower, phong cách giảng dạy
- Cập nhật `wiki/index.md` — mục Nhân vật và Khái niệm

Còn nợ: câu hỏi "16 bước bán hàng" (khung Jay Abraham viết salepage mà thầy Long dùng) — người dùng chưa xác nhận có muốn tạo trang `wiki/khai-niem/16-buoc-ban-hang-jay-abraham.md` hay không.
