# Module Registry — bản đồ cụm / Công việc IPS

Bản đồ điều phối. Thêm/bớt module ở ĐÂY (điểm plug-in) — Cockpit đọc file này để biết cụm nào đang bật.

## Trạng thái cụm

| Cụm | Skill con | Công việc | DAG | Trạng thái |
|---|---|---|---|---|
| Module 0 — Ý thức & Kỷ luật | `ips-y-thuc` | 5 cấp độ ý thức · kỷ luật nền · tư duy hệ thống (pivot IPS15) | CỔNG ĐẦU TIÊN — trước mọi tactical | ✅ BẬT |
| Vận hành 4DX | `ips-4dx` | WIG/Bảng điểm/DMO xuyên suốt | chạy đầu + cập nhật sau mỗi cụm | ✅ BẬT |
| Định vị & nội dung lõi | `ips-dinh-vi` | CV01 Khách hàng, CV02 Từ khoá | nền móng — làm TRƯỚC | ✅ BẬT |
| Phễu bắt lead | `ips-pheu-lead` | CV10 Lead Magnet → CV11 Squeeze → CV12 Email | tuần tự trong cụm; sau Định vị | ✅ BẬT |
| Nội dung đa kênh | `ips-noi-dung` | CV03 YouTube … CV09 Blog | song song sau Định vị | ✅ BẬT |
| Chuyển đổi & Scale | `ips-chuyen-doi` | CV13 SEO, CV14 Ads, CV15 Sales page | song song sau Phễu | ✅ BẬT |
| Tối đa LTV | `ips-ltv` | CV16 Bổ sung, CV17 Chatbot, CV18 Sàn, CV19 Journey | tổng hợp cuối | ✅ BẬT |

## Trạng thái: ĐỦ 7 CỤM (full build)

Tất cả 7 cụm đã BẬT (gồm **Module 0 Ý thức & Kỷ luật** — pivot IPS15) — Cockpit dựng được trọn Bộ IPS (Module 0 → CV01→CV19).

**Lối vào nhanh khuyến nghị — "Tài sản email"** (cho người mới, win 30 ngày): `ips-y-thuc` (cổng tâm thế, 1 lượt ngắn) → `ips-4dx` (set nền) → `ips-dinh-vi` (CV01-02) → `ips-pheu-lead` (CV10-12) → kết tinh Bộ IPS mini. Xong lối tắt này rồi mở tiếp Nội dung → Chuyển đổi → LTV.

**Full build** (đủ lực): chạy trọn DAG 7 cụm (Module 0 → Định vị → Nội dung → Phễu → Chuyển đổi → LTV, 4DX xuyên suốt) → Bộ IPS hoàn chỉnh.

## Cách mở rộng (điểm 5 — plug-in)

- **Thêm cụm mới**: tạo skill con `ips-<tên>/`, thêm 1 dòng vào bảng trên, đổi trạng thái ✅.
- **Thêm module vào cụm**: bổ sung Công việc trong cột "Công việc" + cập nhật skill con tương ứng.
- **Module 0 đề xuất (IPS 15 pivot)**: "Ý thức & kỷ luật nền" đặt TRƯỚC CV01 — có thể thêm vào `ips-4dx` hoặc tách skill `ips-mindset`. Để ngỏ.
- **Thu hẹp**: hạ trạng thái cụm xuống ⏳ — Cockpit tự bỏ qua, không vỡ DAG.

## Nguồn kiến thức mỗi Công việc

Mỗi skill con đóng gói nội dung self-contained (snapshot từ vault concept page `CVxx` + giáo án IPS). Khi vault cập nhật → regenerate reference skill con. Bản nội bộ (có vault) có thể trỏ thẳng concept page.
