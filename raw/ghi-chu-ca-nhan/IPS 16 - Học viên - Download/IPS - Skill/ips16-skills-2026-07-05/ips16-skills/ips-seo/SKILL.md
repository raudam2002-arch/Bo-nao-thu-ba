---
name: ips-seo
description: Tối ưu SEO — đưa nội dung organic đã chạy lên top tìm kiếm (Google / YouTube / sàn) cho hệ Internet Power System (IPS) của Phạm Thành Long. Tách từ cụm Chuyển đổi (cùng ips-ads). Việc chính: nghiên cứu từ khoá theo ý định tìm kiếm, tối ưu nội dung CŨ đã có tương tác organic (on-page, tiêu đề, cấu trúc, internal link), dựng cụm chủ đề (topic cluster) để leo thứ hạng bền. Dùng skill này BẤT CỨ KHI NÀO người dùng muốn "làm SEO", "lên top Google", "nghiên cứu từ khoá", "tối ưu bài viết cũ", "SEO YouTube", "topic cluster", "tăng traffic tự nhiên", "search intent", hoặc sau khi đã có nội dung organic chạy ổn và muốn khuếch đại bằng tìm kiếm. Đọc upstream ips-noi-dung (nội dung đã chạy) + ips-top-100 (từ khoá đối thủ). Nguyên tắc: chỉ SEO cái ĐÃ có tín hiệu organic, không SEO từ con số 0.
---

# IPS · SEO (cụm Chuyển đổi)

🚧 **NỀN — chưa viết ruột.** Scaffold 2026-06-28. Quy trình nghiên cứu từ khoá + checklist on-page + topic cluster sẽ viết ở đợt build.

## Mục tiêu
Khuếch đại nội dung organic **đã có tương tác** bằng tìm kiếm — đưa lên top từ khoá có ý định mua/tìm hiểu, kéo traffic tự nhiên bền vào phễu.

## Vị trí trong dây chuyền IPS
- **Upstream:** `ips-noi-dung` (nội dung đã chạy organic — phụ thuộc mềm, KHÔNG SEO từ 0), `ips-top-100` (từ khoá đối thủ), `ips-usp`.
- **Downstream:** phễu (`ips-xay-pheu`), trang đích.
- **Cùng cụm:** `ips-ads` (cụm Chuyển đổi).

## Đầu vào
- Kho nội dung đã chạy + số liệu tương tác.
- Từ khoá ngách/đối thủ.

## Đầu ra (artifact)
- `niche/<slug>/13-seo.md`:
  - **Bộ từ khoá** theo ý định (thông tin / so sánh / mua) — đánh dấu 🔶 số liệu cần kiểm bằng Keyword Planner/Ahrefs
  - **Danh sách nội dung cũ cần tối ưu** + việc cụ thể mỗi bài
  - **Topic cluster** (trụ + nhánh + internal link)

## Phương pháp dự kiến (outline)
1. Lấy nội dung đã có tín hiệu → map sang từ khoá.
2. Nghiên cứu từ khoá theo search intent (gắn nhãn nguồn số).
3. Tối ưu on-page bài cũ + dựng cụm chủ đề + internal link.
4. Đề xuất lịch cập nhật.

## Cần khi build
- Checklist on-page chuẩn.
- Quy ước gắn nhãn số liệu (không bịa volume/độ khó).


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
