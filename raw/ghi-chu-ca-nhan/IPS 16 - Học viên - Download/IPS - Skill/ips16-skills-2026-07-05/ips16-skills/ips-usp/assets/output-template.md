# KHUNG BÀN VẼ USP (mắt xích 6 Khởi Nghiệp) — TIẾN TRÌNH 5 BƯỚC

Copy khung này khi xuất ở Bước 5. Lưu `niche/<slug>/06-usp.md`.
Khung phản chiếu đúng **tiến trình 5 bước** (Bước 1→5 → USP). Thay mọi `[...]` bằng nội dung thật. Mệnh đề "đối thủ không có" CHƯA kiểm → dán nhãn `(ước lượng — cần kiểm)`. Cái skill đề xuất phân biệt với cái anh Long xác nhận. Giữ wikilink về `[[M8.6 - MESSAGE — USP (5 câu hỏi)]]` + `[[USP - Điểm độc đáo bán hàng]]`.

---

```markdown
---
type: analysis
tags: [usp, message, marketing-3m, khoi-nghiep, dinh-vi, eagle-camp]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft            # draft | hypothesis | validated (validated chỉ khi đối thủ đã kiểm thật + USP đã test với khách)
sources: ["[[M8.6 - MESSAGE — USP (5 câu hỏi)]]", "[[USP - Điểm độc đáo bán hàng]]", "[[M8.5 - Vũ khí bí mật]]"]
depends_on:
  persona: "[[01-persona]]"        # đầu vào #1 (Bước 1) — null nếu standalone
  vu_khi_bi_mat: "[[05-vu-khi]]"   # đầu vào mắt xích 5 (Bước 3) — null nếu standalone

# ── HỢP ĐỒNG BÀN GIAO cho ec-thong-diep-truyen-thong (mắt xích 8) ──
produces:
  usp_chot: "[1 câu USP — lợi ích khách NHẬN, đối thủ KHÔNG THỂ copy]"
  usp_dat_o: "[sản phẩm | dịch vụ | công ty | cá nhân founder]"
  cau_dinh_vi: "Cho [phân khúc & nhu cầu], [thương hiệu] là [loại sản phẩm] mà [điểm khác biệt]."
  do_tin_cay: "[đối thủ đã kiểm? / ước lượng] · [USP đã test với khách? / chưa]"
  next: "ec-thong-diep-truyen-thong (mắt xích 8) — đóng USP thành thông điệp + thương hiệu; ec-dat-ten-thuong-hieu cũng đọc USP này"
---

# Bàn vẽ USP — [Thương hiệu/Sản phẩm] — [YYYY-MM-DD]

## Đề bài
- **Sản phẩm:** [...]  · **Phân khúc khách:** [...]
- **Đầu vào #1 (hồ sơ khách):** [[01-persona]] / *(standalone — hỏi brief)*
- **Đầu vào mắt xích 5 (vũ khí bí mật):** [[05-vu-khi]] / *(standalone — hỏi brief)*

## Tiến trình 5 bước (sơ đồ)
```
B1 LỢI ÍCH cần (vòng A) ┐
B2 ĐỐI THỦ không có (vòng B) ├─▶ B4 GIAO 3 VÒNG ─▶ B5 KIỂM & MÀI ─▶ ⭐ USP
B3 NĂNG LỰC mình (vòng C) ┘
```

## BƯỚC 1 — Lấy LỢI ÍCH thị trường RẤT CẦN (vòng A)
> Đầu vào: `01-persona.md` (gain/pain ĐÃ SẮP XẾP) + `05-vu-khi.md` `khach_dau_gi`. Lấy ĐÚNG top — KHÔNG re-rank.

- **Top pain** (item đầu mục Nỗi đau / (1) khach_dau_gi): [...] → lợi ích khách cần: [...]
- **Top gain** (item đầu mục Lợi ích / mục Bất ngờ ⭐): [...] → lợi ích khách cần: [...]
- *(standalone → đánh dấu `[chưa có persona — giả thuyết]`)*

## BƯỚC 2 — Quét ĐỐI THỦ → khoảng trống (vòng B)
| Đối thủ | Lợi ích họ trao (cho top gain/pain B1) | Nguồn |
|---|---|---|
| [Đối thủ A] | [...] | [đã kiểm] / [ước lượng — cần kiểm web/sale page họ] |
| [Đối thủ B] | [...] | ... |

**Cái đối thủ KHÔNG/KÉM cung cấp** (vòng B): [khoảng trống 1] · [khoảng trống 2]
*🚫 KHÔNG ghi trơn "đối thủ không có X" — chỉ "chưa thấy đối thủ trao X (ước lượng — cần kiểm)".*

## BƯỚC 3 — Soi NĂNG LỰC mình (vũ khí bí mật mắt xích 5 → vòng C)
Dịch mỗi vũ khí (XANH + ĐANG CÓ) → lợi ích khách NHẬN:
- [lợi ích A] ← vũ khí: [tên vũ khí mắt xích 5]
- [lợi ích B] ← vũ khí: [...]
*(Vũ khí không dịch ra lợi ích khách → chưa sẵn sàng thành USP, gạch khỏi đây.)*

## BƯỚC 4 — GIAO 3 VÒNG → chốt USP

### Câu 4 — Mình − Đối thủ (USP nháp)
Lấy B3 trừ B2 — phần đối thủ KHÔNG có:
- [khác biệt 1] — đối thủ chưa thấy có ([nguồn])
- [khác biệt 2] — ...

### Câu 5 + khung 3 vòng (lọc "lớn nhất" + "không thể")
- **(a) Khách RẤT CẦN?** [có/không — truy top B1]
- **(b) Đối thủ KHÔNG THỂ cung cấp?** [có/không — truy B2; copy được trong 1 đêm thì gạch]
- **(c) TA cung cấp được nhờ vũ khí bí mật?** [có/không — truy B3]
- → Giao đủ 3 vòng? [có/không — thiếu vòng nào quay lại bước đó]

### ⭐ USP CHỐT (1 câu)
> **[USP — lợi ích khách NHẬN ĐƯỢC, đối thủ KHÔNG THỂ copy]**

- **USP đặt ở:** [sản phẩm / dịch vụ / công ty / cá nhân founder]  *(PTL nhấn cá nhân founder quan trọng nhất — người không copy được)*
- **Ô 5 kiểu thắng (Kotler — tuỳ chọn):** [nhiều hơn–giá cao hơn / nhiều hơn–cùng giá / cùng giá trị–rẻ hơn / ...] — USP mạnh thường đẩy về *"nhiều hơn – giá cao hơn"*.

## BƯỚC 5 — KIỂM & MÀI → câu định vị cuối

### Test qua 5 câu hỏi M8.6 + chống bịa
- [ ] Câu USP nói **lợi ích khách NHẬN** (không phải năng lực mình CÓ).
- [ ] Đối thủ **không copy được trong 1 đêm** (đã ép qua lọc "không thể").
- [ ] Truy được về **top Pain/Gain ĐÃ SẮP XẾP** của persona #1 (Bước 1).
- [ ] Chỉ MỘT "mái tóc dài" — không nhồi 5–6 USP.
- [ ] Mệnh đề "đối thủ không có" đã kiểm / dán nhãn ước lượng.

### Câu định vị (chốt sau khi mài)
> *Cho [khách & nhu cầu], [thương hiệu] là [loại sản phẩm] mà [điểm khác biệt].*

## Diễn giải 3 vòng (vì sao là USP)
1 đoạn ngắn: vì sao lợi ích này nằm đúng giao của (a) khách cần × (b) đối thủ không có × (c) ta làm được — và vì sao không copy được. (Có thể neo bằng ẩn dụ PTL: đây là "mái tóc dài" của sản phẩm — 1 đặc điểm đủ để khách chọn riêng bạn.)

## Bàn giao (mắt xích 8)
- USP chốt + vị trí đặt → `ec-thong-diep-truyen-thong` đóng thành thông điệp + thương hiệu.
- Câu định vị + USP → `ec-dat-ten-thuong-hieu` (nếu chưa có tên).

## Self-verify (cổng chống bịa)
- [x] Bước 1 dùng ĐÚNG top gain/pain đã sắp xếp (không re-rank) · [x] Mệnh đề "đối thủ không có" có nhãn [đã kiểm]/[ước lượng] · [x] USP = lợi ích khách (không phải vũ khí) · [x] qua lọc "không thể" · [x] truy top persona · [x] 1 USP focused
```
