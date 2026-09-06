# KHUNG BẢN THIẾT KẾ CHƯƠNG TRÌNH VIP (mắt xích 12 Khởi Nghiệp · phễu 9.5)

Copy khung này khi xuất ở Bước 5. Lưu `tang-truong/YYYY-MM-DD-<slug>-vip.md` ở gốc vault (tạo thư mục nếu chưa có).
Thay mọi `[...]` bằng nội dung thật. **Mọi dòng Bảng Lợi ích gắn `← [pain/gain]` hồ sơ khách (#1)** — dòng không nối được cờ `⚠️ [vô danh]`. Mọi số ngưỡng dán nhãn nguồn/ước lượng hoặc `[?]`. Hạng/đặc quyền `[đề xuất]` phân biệt cái đã có. Giữ wikilink về module KB.

---

```markdown
---
type: analysis
tags: [chuong-trinh-vip, vip, loyalty, premium-customer, customer-equity, khoi-nghiep, eagle-camp]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft            # draft | hypothesis | validated (validated chỉ khi ngưỡng tính từ dữ liệu thật + lợi ích đã test với khách VIP)
sources: ["[[M9.5 - VIP Khách hàng thường xuyên]]", "[[M5.6 - Khách hàng cao cấp (Premium Customer)]]", "[[Hệ thống phễu marketing Eagle Camp]]", "[[Membership Program Design]]"]
inputs:
  persona: "[[persona-<slug>]]"               # đầu vào #1 — nguồn gain/pain khớp lợi ích — null nếu standalone
  thang_gia_tri: "[[YYYY-MM-DD-<slug>]]"       # đầu vào mắt xích 9 (output ec-xay-pheu) — bậc đỉnh + giá + LVC — null nếu standalone

# ── HỢP ĐỒNG BÀN GIAO ──
produces:
  chuong_trinh_vip: "[N hạng: tên1/tên2/... · định ngưỡng theo tiền|lần|sản phẩm]"
  loi_ich_khop_persona: "[X đặc quyền / Y dòng nối được gain-pain · Z dòng ⚠️ vô danh]"
  don_bay_siet: "đòn bẩy 4 (tần suất) + đòn bẩy 5 (biên premium)"
  do_tin_cay: "[ngưỡng từ dữ liệu thật? / ước lượng] · [lợi ích đã test với khách VIP? / chưa]"
  next: "ec-trang-ban-hang — viết câu chữ chào bán đặc quyền VIP. (Continuity → ec-san-pham-lien-tuc; Referral → ec-gioi-thieu-khach — việc khác, không làm ở đây.)"
---

# Chương trình VIP — [Thương hiệu/Sản phẩm] — [YYYY-MM-DD]

## Đề bài
- **Sản phẩm/dịch vụ + giá:** [...]
- **Đầu vào #1 (persona):** [[persona-<slug>]] / *(standalone — hỏi brief)*
- **Đầu vào mắt xích 9 (thang giá trị):** [[YYYY-MM-DD-<slug>]] / *(standalone — VIP là bậc đỉnh)*
- **Dữ liệu tệp:** chi tiêu TB [..] · tần suất TB [..]/năm / *([?] chưa có)*
- **Đã có chương trình thành viên?** [có — mô tả / chưa]

## B1 — Top 10–20% + loại khách cao cấp
- **Ngưỡng lọc top:** [chi ≥ X/năm HOẶC ≥ N lần/năm] *(nguồn/[?])*  → ~[..]% tệp
- **Loại khách cao cấp chính** (M5.6): [số lượng lớn (AOV) / nhiều lần (tần suất) / giá trị cao (biên)] — kéo đòn bẩy [..]
- **Số hạng + tên signature:** [vd Bạc / Vàng / Bạch Kim / Kim Cương]

## B2 — BẢNG ĐIỀU KIỆN (làm sao để vào VIP — đo được)
*Pattern tiêu chí KÉP (Bông Sen Vàng): cho 2 đường lên — Đường A (chi tiêu) HOẶC Đường B (số lần). Bỏ 1 cột nếu chỉ dùng 1 đường.*

| Hạng | Tên signature | Đường A — chi tiêu/năm | Đường B — số lần/năm | Kỳ duy trì | Nguồn/nhãn |
|---|---|---|---|---|---|
| 1 | [...] | [≥ ... đồng] | [HOẶC ≥ N lần] | [vd 12 tháng / không hạn] | [dữ liệu thật / (ước lượng — cách tính) / [?]] |
| 2 | [...] | [...] | [...] | ... | ... |
| 3 | [...] | [...] | [...] | ... | ... |
| 4 (đỉnh) | [...] | [...] | [...] | [vd trọn đời] | ... |

- **Tự xuống hạng:** [không đạt lại ngưỡng kỳ kế → tụt hạng / hạng đỉnh trọn đời / hạng cửa-vào không mất]
- **Phân khúc tiêu chí (tuỳ chọn):** [giảm ..% ngưỡng cho nhóm đặc thù: 60+/sinh viên/... — như VNA giảm 20% cho 60+]

*Kiểm: mọi ngưỡng đo được? tên hạng có signature? thang nhảy ép chi thêm? có cơ chế duy trì + tự xuống hạng?*

## B3 — BẢNG LỢI ÍCH (vào rồi được gì — mỗi dòng khớp #1) ⭐
*Cột "Hạng hưởng" ghi giá trị LEO THANG theo hạng (vd "Vàng +30% / Bạch kim +100%"), không chỉ "Vàng+". Chạy checklist 7 nhóm Bông Sen Vàng: (a) giá ưu đãi · (b) ưu tiên & tốc độ · (c) trải nghiệm cao cấp · (d) tích luỹ nhanh hơn · (e) ghi nhận cảm xúc · (f) độc quyền/gia đình · (g) hỗ trợ riêng.*

| # | Nhóm (a–g) | Đặc quyền | Loại | Hạng hưởng (leo thang) | ← Pain/Gain khách (#1) | Đòn bẩy | Nguồn |
|---|---|---|---|---|---|---|---|
| 1 | [a–g] | [...] | tiền/không-tiền | [vd Bạc 5% → Vàng 10% → BK 15%] | ← [pain/gain] | 4/5 | đã có / [đề xuất] |
| 2 | [...] | [...] | ... | ... | ← [...] | ... | ... |
| ... | | *(≥10 dòng, xếp tăng dần)* | | | | | |

*Kiểm: ≥10 đặc quyền? phủ đủ 7 nhóm? mọi dòng nối gain/pain (#1)? dòng vô danh đã cờ `⚠️`? trộn perk tiền + không-tiền? perk leo thang theo hạng? chạm tầng danh vọng?*

## B4 — Đòn bẩy + cơ chế vận hành
- **Map đòn bẩy:** [..] perk kéo đòn bẩy 4 (tần suất) · [..] perk kéo đòn bẩy 5 (biên premium).
- **Lên hạng:** tự động khi chạm ngưỡng + báo tin + quà chào mừng.
- **Tụt hạng:** kỳ duy trì [vd 12 tháng]; không đạt lại → tự xuống hạng → khách mua đều giữ vị thế. [hạng cửa-vào không mất + hạng đỉnh trọn đời]
- **Hệ thống con người:** [ai chăm tier cao — phân công cụ thể; vd hotline/email VIP riêng cho hạng cao].
- **GET hội viên qua đối tác (tuỳ chọn):** [nâng hạng qua đối tác nào? / status match từ đối thủ? → nối ec-lien-doanh + ec-gioi-thieu-khach]
- **Quy tắc bất di:** (1) ưu đãi tất cả TRỪ tín dụng (không mua nợ/trả sau); (2) flip vị thế — CHỌN khách cao cấp của mình.
- **Phân vai Continuity (9.4):** [đã có gói định kỳ? → VIP ghép tầng lên trên / chưa có] — cơ chế trả định kỳ KHÔNG làm ở đây.

## B5 — Asset cần sản xuất (bàn giao)
- [ ] Câu chữ chào bán đặc quyền VIP / thư mời vào hạng → `ec-trang-ban-hang` — [brief 1 dòng]
- [ ] Thẻ vật lý / landing tier (nếu cần) → [skill] — [brief]
- [ ] (perk "mời người đi cùng" → nối Referral: `ec-gioi-thieu-khach`)

## Self-verify (cổng chống bịa)
- [x] Mọi dòng Bảng Lợi ích gắn `← [pain/gain]` #1 (hoặc đã cờ `⚠️ vô danh`)
- [x] Mọi số ngưỡng truy được / nhãn "(ước lượng — cách tính)" / `[?]`
- [x] Bảng Lợi ích ≥10 đặc quyền xếp tăng dần
- [x] `[đề xuất]` phân biệt cái đã có
- [x] 5 case chỉ làm khuôn soi — không bê y nguyên ngưỡng/perk
- [x] Đã phân biệt VIP với Continuity — không nhét cơ chế trả định kỳ
```
