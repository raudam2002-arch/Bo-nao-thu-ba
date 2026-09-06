# KHUNG SPEC SẢN PHẨM LIÊN TỤC (thành phần 9.4 — hệ Khởi Nghiệp)

Copy khung này khi xuất ở Bước 5. Lưu `tang-truong/YYYY-MM-DD-<slug>-continuity.md` ở gốc vault (tạo thư mục `tang-truong/` nếu chưa có).
Thay mọi `[...]` bằng nội dung thật. Mỗi lợi ích trỏ về một gain/pain THẬT của hồ sơ khách #1. Mọi churn/CLV/giá dán nhãn nguồn/ước lượng. Sản phẩm/cơ chế `[đề xuất]` phân biệt với cái đã có. Giữ wikilink về concept KB.

---

```markdown
---
type: analysis
tags: [san-pham-lien-tuc, continuity, subscription, membership, khoi-nghiep, funnel-9.4, churn]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft            # draft | hypothesis | validated
sources: ["[[Sản phẩm tiêu dùng liên tục → High-End funnel]]", "[[M9.4 - Continuity Sản phẩm dịch vụ liên tục]]"]
depends_on:
  ho_so_khach: "[[persona-<slug>]]"        # #1 — nguồn gain/pain
  thang_gia_tri: "funnel/YYYY-MM-DD-<slug>.md"  # mắt xích 9 — continuity nằm bậc nào (ec-xay-pheu)

# ── HỢP ĐỒNG BÀN GIAO ──
produces:
  san_pham_lien_tuc: "[tên gói + loại: lõi tiêu hao / monthly box / subscription / membership]"
  dac_tinh: "[tiêu hết-mua-lại | tiêu hao theo chu kỳ | giá rẻ rào-cản-thấp]"
  tan_suat: "[hằng tháng | mỗi quý | mỗi năm] + cơ chế buộc quay lại"
  gia_moi_ky: "[.. đ/kỳ] (nguồn/ước lượng)"
  clv: "[.. đ] (ước lượng — cách tính: giá kỳ × số kỳ N)"
  churn_quan_tri: "theo dõi hằng tháng + exit survey 3 câu + win-back 2-3 chạm"
  assets_to_build:
    - loai: "Sale page gói liên tục"
      skill: "ec-trang-ban-hang"
      brief: "[1 dòng]"
    - loai: "Chuỗi email win-back"
      skill: "[skill content/email]"
      brief: "[1 dòng — kéo khách đã huỷ quay lại]"
    - loai: "Exit survey 3 câu"
      skill: "[skill form/content]"
      brief: "[1 dòng]"
  feeds:
    - "ec-xay-pheu — đặt continuity đúng bậc phía sau Front-End trên thang giá trị"
    - "ec-trang-ban-hang — viết bài bán gói liên tục"
    - "ec-tang-truong-lvc — continuity là một đòn bẩy F trong hub tăng trưởng LVC (mắt xích 10)"
---

# Spec sản phẩm liên tục — [Tên gói/Sản phẩm] — [YYYY-MM-DD]

## Đề bài
- **Sản phẩm/dịch vụ liên tục:** [...]  · **Giá + biên hiện có:** [...]
- **Khách mục tiêu (hồ sơ #1):** [[persona-<slug>]] — [phân khúc 1 dòng]
- **Lõi giá trị (sợi chỉ đỏ):** [...]
- **Vị trí trên thang:** continuity là bậc [..] (phía sau Front-End — nối `funnel/...`)

## 1. Kiểm đặc tính + 4 câu hỏi handout
**Đặc tính (≥1 trong 3):** [ ] tiêu hết-mua-lại · [ ] tiêu hao theo chu kỳ · [ ] giá rẻ rào-cản-thấp
*(Không đặc tính nào → cảnh báo: có thể không hợp làm continuity.)*

| Câu hỏi handout | Trả lời |
|---|---|
| 1. Ai là khách mục tiêu (có nhu cầu lặp lại)? | [từ hồ sơ #1] |
| 2. Sản phẩm/dịch vụ + lợi ích mỗi kỳ? | [→ bảng mục 2] |
| 3. Mức tái sử dụng (chu kỳ/tần suất)? | [→ mục 3] |
| 4. Giá cả? | [→ mục 3] |

## 2. Bảng tính năng → lợi ích → KHỚP nhu cầu khách #1 ⭐
| Tính năng (CÓ gì) | Lợi ích (ĐƯỢC gì mỗi kỳ) | Khớp nhu cầu khách #1 (gain/pain cụ thể) |
|---|---|---|
| [...] | [...] | → [gain/pain trong persona, hoặc `[?]` nếu chưa có hồ sơ] |
| [...] | [...] | **CHƯA NỐI ĐƯỢC NHU CẦU** ← cờ đỏ: cắt hoặc đào lại |

*Kiểm ngược: gain/pain TOP nào của khách chưa lợi ích nào phục vụ? → cơ hội thêm `[đề xuất]`.*

## 3. Tần suất (đòn bẩy 4) + Giá (đòn bẩy 5/LTV)
- **Chu kỳ tái sử dụng:** [hằng tháng / mỗi quý / lõi 3-6-9 tháng / yearly]
- **Cơ chế "buộc quay lại":** [lõi tiêu hao theo lịch / giao định kỳ / gia hạn tự động] + mức tự động hoá
- **Giá mỗi kỳ:** [.. đ] *(nguồn/ước lượng)*
- **CLV minh hoạ:** [.. đ] = giá kỳ × [N] kỳ trung bình *(ước lượng — cách tính)*; so bán đứt: [...]

## 4. Quản trị churn (BẮT BUỘC — 3 việc)
1. **Theo dõi churn hằng tháng:** [chỉ số + baseline từ tháng đầu + mục tiêu trần nếu có]
2. **Exit survey (3 câu):** [câu lõi "điều gì khiến bạn ngừng?" + 2 câu]
3. **Win-back (2-3 chạm):** [phác chuỗi → bàn giao skill email viết]

*Tâm lý "mặc định lặp lại" dùng tử tế — ở lại dễ & đáng giá, KHÔNG gài bẫy khoá huỷ.*

## 5. Asset cần sản xuất (bàn giao)
- [ ] Sale page gói → `ec-trang-ban-hang` — [brief]
- [ ] Chuỗi email win-back → `[skill]` — [brief]
- [ ] ...

## 6. Phase liên quan (trỏ, không làm ở đây)
- Đặt continuity đúng bậc trên thang → `ec-xay-pheu`
- Continuity là đòn bẩy F trong tăng trưởng LVC → `ec-tang-truong-lvc` (mắt xích 10)

## Self-verify (cổng chống bịa)
- [x] Mỗi lợi ích trỏ gain/pain hồ sơ #1 / `[?]` · [x] Churn/CLV có nhãn ước lượng · [x] Giá kỳ truy được/[?] · [x] [đề xuất] phân biệt · [x] Tính năng vô danh lộ rõ · [x] Đủ 3 việc churn
```
