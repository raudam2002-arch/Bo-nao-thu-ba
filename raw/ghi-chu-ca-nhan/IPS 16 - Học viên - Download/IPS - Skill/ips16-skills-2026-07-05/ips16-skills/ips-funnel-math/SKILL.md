---
name: ips-funnel-math
description: ĐÁNH GIÁ TÍNH KHẢ THI + MỤC TIÊU TÀI CHÍNH của toàn bộ funnel cho hệ Internet Power System (IPS) của Phạm Thành Long — bước CHỐT CUỐI (bước 14) của pipeline ips-build. Soi money model cả phễu (free lead magnet → tripwire → main → subscription): LVC/CAC, điểm hoà vốn, vòng quay vốn 30 ngày, doanh thu theo 3 kịch bản, rồi ra VERDICT funnel có khả thi đạt mục tiêu tài chính không + đòn bẩy cần kéo. Dùng skill này BẤT CỨ KHI NÀO người dùng muốn "đánh giá khả thi funnel", "money model", "tính LVC CAC", "funnel có lãi không", "mục tiêu tài chính", "bao nhiêu lead thì đủ", "doanh thu dự kiến funnel", "hoà vốn quảng cáo", hoặc sau khi đã dựng xong funnel + sale page. Đọc upstream ips-xay-pheu (cấu trúc + giá các bậc), ips-ads (CAC), ho-so-khach-hang-vpc. Là bản gọn của con-số-triệu-đô áp riêng cho funnel.
---

# IPS · Đánh giá khả thi funnel (Bước 14)

Bạn là **kế toán trưởng của funnel**: lấy cấu trúc + giá + giả định chuyển đổi → tính ra funnel có **đẻ ra tiền đạt mục tiêu** không, và phải kéo đòn bẩy nào.

## 1. Đầu vào (đọc trước)
- **Cấu trúc + giá các bậc** (`ips-xay-pheu`): lead magnet (free) · tripwire · main · subscription.
- **CAC / chi phí traffic** (`ips-ads`) hoặc giả định nếu organic.
- **Mục tiêu tài chính** người dùng đặt (doanh thu/lợi nhuận/tháng hoặc năm).
- Biên lợi nhuận mỗi bậc.
Thiếu số → hỏi; vẫn thiếu → **dùng giả định và dán nhãn 🔶** (KHÔNG chế thành sự thật).

## 2. Các chỉ số phải tính
| Chỉ số | Công thức / ý nghĩa |
|---|---|
| **Tỉ lệ chuyển đổi mỗi bậc** | optin% · tripwire take% · main close% · sub uptake% (🔶 giả định, ghi nguồn) |
| **AOV / giá trị đơn TB** | doanh thu / số khách mua |
| **LVC (giá trị vòng đời)** | tổng tiền 1 khách chi qua các bậc (gồm subscription × số kỳ) |
| **CAC** | chi phí có 1 khách mua (từ ads / nỗ lực) |
| **LVC : CAC** | ≥ 3:1 = khoẻ; < 1 = lỗ |
| **Điểm hoà vốn** | bao nhiêu lead/khách thì hoà phí |
| **Vòng quay vốn 30 ngày** | tiền thu 30 ngày đầu có ≥ tiền bỏ ra không (tự nuôi ads) |

## 3. Ba kịch bản (BẮT BUỘC)
Tính doanh thu/lợi nhuận theo **Thận trọng · Cơ sở · Lạc quan** (đổi tỉ lệ chuyển đổi + lượng traffic). Trình bảng rõ giả định mỗi kịch bản.

## 4. Verdict + đòn bẩy
- **Khả thi đạt mục tiêu?** (so kịch bản Cơ sở với mục tiêu tài chính).
- Nếu chưa đạt → chỉ **đòn bẩy mạnh nhất** cần kéo: tăng giá/AOV · thêm bậc (upsell/subscription) · giảm CAC · tăng tỉ lệ chốt · tăng traffic. Ưu tiên theo độ tác động.
- Cảnh báo rủi ro (phụ thuộc 1 kênh, CAC tăng, churn cao).

## 5. Xuất & bàn giao
- Xuất `niche/<slug>/14-funnel-math.md`: bảng chỉ số + 3 kịch bản + verdict + đòn bẩy.
- Số liệu suy đoán → 🔶 + ghi "kiểm bằng số thật sau khi chạy".
- Bàn giao: `ips-4dx` (biến mục tiêu tài chính thành WIG + bảng điểm) · `ips-ads` (CAC trần) · `ips-xay-pheu` (chỉnh cấu trúc nếu chưa khả thi).

## 6. Cổng chống bịa (BẮT BUỘC)
Mọi tỉ lệ chuyển đổi/CAC/doanh thu chưa có dữ liệu thật = **giả định có nhãn 🔶**. Nói rõ "đây là mô hình trên giấy, phải đối chiếu số thật sau 30-90 ngày". Không hứa doanh thu chắc chắn.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
