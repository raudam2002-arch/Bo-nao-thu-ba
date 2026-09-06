# KHUNG CHƯƠNG TRÌNH GIỚI THIỆU KHÁCH HÀNG (Referral 9.8)

Copy khung này khi xuất ở bước cuối. Lưu `tang-truong/YYYY-MM-DD-<slug>-referral.md` ở gốc vault (tạo `tang-truong/` nếu chưa có).
Thay mọi `[...]` bằng nội dung thật. Mọi số dán nhãn nguồn/ước lượng. Mức thưởng + ưu đãi phải hợp biên lợi nhuận thật. Thành tố `[đề xuất]` phân biệt với cái đã có; thành tố thiếu ghi **"TRỐNG"**. Giữ wikilink về `wiki/concepts/` (KB flat).

---

```markdown
---
type: analysis
tags: [gioi-thieu-khach, referral, khoi-nghiep, word-of-mouth, quy-luat-250, eagle-camp]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft            # draft | hypothesis | validated
sources: ["[[Customer Referrals]]", "[[Quy luật 250 - Joe Girard]]", "[[Hệ thống phễu marketing Eagle Camp]]", "[[Công thức tài chính triệu đô]]"]

# ── PHỤ THUỘC (đọc vào) ──
depends_on:
  persona: "[[persona-<slug>]]"            # ec-ho-so-khach-hang — ai giới thiệu, động cơ, ưu đãi gì hấp dẫn
  san_pham_gia_bien: "[sản phẩm + giá + biên 1 đơn + CAN — nguồn]"  # để đặt mức thưởng/ưu đãi hợp biên

# ── HỢP ĐỒNG BÀN GIAO (đẻ ra) ──
produces:
  ten_chuong_trinh: "[tên chốt]"
  thuong_nguoi_gioi_thieu: "[mức + cấu trúc 1-chiều/2-chiều — có nhãn]"
  uu_dai_nguoi_duoc_gt: "[mức ưu đãi — có nhãn]"
  cach_theo_doi: "[tối giản / mã riêng — 1 dòng]"
  thoi_diem_xin: "[điểm chạm cố định sau khoảnh khắc hài lòng nhất]"
  tools_to_build:
    - loai: "Mẫu tin nhắn Zalo sẵn-share"
      skill: "[skill content]"
      brief: "[1 dòng]"
    - loai: "Tờ rơi / ảnh share"
      skill: "[skill content/design]"
      brief: "[1 dòng]"
    - loai: "Landing page giới thiệu"
      skill: "ec-trang-ban-hang"
      brief: "[1 dòng]"
  next_phase:
    - "ec-lien-doanh — JV (DN↔DN) đổ thêm lead, bổ trợ referral (khách↔khách)"
    - "ec-tang-truong-lvc — soi referral trong tổng đòn bẩy LVC"
---

# Chương trình Giới thiệu khách hàng — [Sản phẩm/Ngách] — [YYYY-MM-DD]

## Đề bài
- **Sản phẩm + giá + biên 1 đơn:** [...] · **CAC trung bình:** [.. / ước lượng / [?]]
- **Khách hài lòng nhất + khoảnh khắc "tuyệt thật":** [...]
- **Kênh khách hay dùng:** [Zalo / FB / email …]  · **Mẩu referral đã có:** [có/không]

## Nền kinh tế — Quy luật 250
- 1 khách hài lòng = cửa tới ~250 mối ([[Quy luật 250 - Joe Girard]]). Referral đánh đòn bẩy 1+2 ([[Công thức tài chính triệu đô]]).
- Baseline cần đo: % referral hiện tại = [.. / chưa đo] · % churn = [.. / chưa đo].
- *(Nếu trích "66% khách từ referral" → dán nhãn: số riêng hệ PTL, KHÔNG cam kết.)*

## Bảng 5 thành tố
| # | Thành tố | Thiết kế cho doanh nghiệp này | Trạng thái |
|---|---|---|---|
| 1 | **Tên chương trình** | [tên gọn, rõ lợi ích] | đã có / `[đề xuất]` |
| 2 | **Thưởng người giới thiệu** | [mức ≤ CAC; cấu trúc 1-chiều/2-chiều] | [nhãn nguồn] |
| 3 | **Ưu đãi người được giới thiệu** | [mức; thưởng+ưu đãi ≤ biên 1 đơn] | [nhãn nguồn] |
| 4 | **Theo dõi — đo lường** | [câu hỏi "biết qua ai" + file / mã riêng] | đã có / `[đề xuất]` |
| 5 | **Công cụ hỗ trợ sẵn-share** | [liệt kê — KHÔNG viết nội dung] | `[đề xuất]` → bàn giao |

*Kiểm: đủ 5 thành tố? thành tố nào TRỐNG đã lộ? mức thưởng ≤ CAC? thưởng+ưu đãi ≤ biên?*

## Kinh tế chương trình (hợp biên — cổng chống bịa)
| Chỉ số | Giá trị | Nguồn / nhãn |
|---|---|---|
| CAC trung bình | [..] | thật / ước lượng — cách tính / `[?]` |
| Trần thưởng (= CAC) | [..] | suy từ CAC |
| Mức thưởng chốt | [..] | ≤ trần |
| Mức ưu đãi người mới | [..] | |
| Thưởng + ưu đãi | [..] | **≤ biên 1 đơn?** [có/không] |
| Biên lợi nhuận 1 đơn | [..] | thật / `[?]` |

*Cảnh báo:* [thưởng+ưu đãi vượt biên / chưa có CAC → để [?] / sản phẩm chưa đủ tốt để khách tự khen — nếu có]

## Thời điểm xin
- **Điểm chạm cố định:** ngay sau [khoảnh khắc khách hài lòng nhất cụ thể].
- Đóng gói lời xin = lời mời cùng có lợi (referrer thưởng · người mới ưu đãi). Xin **giới thiệu ba chiều** thật, không chỉ tên + số.

## Công cụ cần sản xuất (bàn giao)
- [ ] [loại công cụ] → `[skill]` — [brief 1 dòng]
- [ ] ...

## Phase sau / bổ trợ (trỏ, không làm ở đây)
- JV (DN↔DN) → `ec-lien-doanh`
- Soi trong tổng đòn bẩy LVC → `ec-tang-truong-lvc`

## Self-verify (cổng chống bịa)
- [x] Đủ 5 thành tố / thành tố trống ghi "TRỐNG"
- [x] Mức thưởng ≤ CAC (truy được / [?])
- [x] Thưởng + ưu đãi ≤ biên 1 đơn (hợp biên / [?])
- [x] Mọi số có nhãn nguồn/ước lượng · "66%" dán nhãn PTL nếu trích
- [x] [đề xuất] phân biệt với đã có
- [x] Công cụ chỉ liệt kê + brief (không tự viết nội dung)
```
