# KHUNG OUTPUT — Đặt tên thương hiệu (EC)

Skill **trình bày trong chat** đúng 2 mục dưới (KHÔNG html, KHÔNG đánh số ở mục Tổng quan). Nếu anh Long muốn lưu, xuất file `dat-ten/YYYY-MM-DD-<slug>.md` ở gốc vault với frontmatter bên dưới.

Thay mọi `[...]` bằng nội dung thật. Mọi tên đã qua B3 search Internet. Theo Cổng chống bịa: KHÔNG khẳng định "đăng ký được" — chỉ "chưa thấy trùng (cần kiểm ...)".

---

## A. Khung trình bày trong chat (2 mục — BẮT BUỘC đúng định dạng này)

```markdown
# Tên thương hiệu cho [ngành / sản phẩm]

## 1. Tổng quan

[Mỗi tên sạch trên MỘT dòng, KHÔNG đánh số, đơn giản. Có thể kèm một cụm gợi rất ngắn sau dấu gạch.]

Tên A
Tên B — [gợi 2-3 chữ]
Tên C
Tên D
...

## 2. Cụ thể

### Tên A
- **Ý tưởng & phát âm:** [đọc thế nào, vì sao dễ phát âm, có "a" ở đâu, đọc đa ngôn ngữ ra sao]
- **Tính độc đáo:** [vì sao khác biệt, không đụng hàng, dễ nhận diện]
- **Tính có ý nghĩa:** [gói được USP / cảm hứng / ngành gì; nghĩa gợi lên điều gì]
- **Khả năng phát triển / mở rộng tương lai:** [mở sub-brand được không, ra thị trường nước ngoài được không, dùng cho dòng sản phẩm mới được không, làm domain/hệ sinh thái được không]
- **Trạng thái kiểm (cổng chống bịa):** Search Internet [ngày]: [chưa thấy trùng nổi bật / thấy ... → đã loại]. Domain `[tên].com`: chưa thấy ai giữ qua search — *cần kiểm registrar để chắc*. Nhãn hiệu: chưa thấy thương hiệu trùng nổi bật — *cần tra IPVietnam / luật sư để chắc*.

### Tên B
[... lặp lại cấu trúc trên ...]
```

> Lưu ý định dạng: **Mục 1 — mỗi tên một dòng, KHÔNG số thứ tự.** **Mục 2 — giải thích THẬT CHI TIẾT từng tên** theo đủ 4 trục (phát âm / độc đáo / ý nghĩa / mở rộng) + dòng trạng thái kiểm.

---

## B. Frontmatter file (tuỳ chọn — khi lưu lại)

```markdown
---
type: analysis
tags: [dat-ten, naming, thuong-hieu, khoi-nghiep, brand-name]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft            # draft | shortlist | chosen
sources: []              # USP / thông điệp upstream nếu có

# ── ĐỀ BÀI ──
de_bai:
  nganh_san_pham: "[...]"
  usp_cam_hung: "[...]"
  rang_buoc: "[độ dài / .com / thị trường / tránh từ ...]"
  so_ten_can: [n]

# ── HỢP ĐỒNG BÀN GIAO ──
produces:
  ten_chot: ["[Tên A]", "[Tên B]", "..."]   # danh sách tên sạch để anh Long chọn
  trang_thai_kiem: "search Internet [ngày]; domain + nhãn hiệu mới sàng SƠ BỘ — chưa đăng ký, cần kiểm registrar + IPVietnam"
  next:
    - "ec-thong-diep-truyen-thong — viết thông điệp / slogan / tagline quanh tên đã chốt"
---

# Đặt tên thương hiệu — [Ngành/Sản phẩm] — [YYYY-MM-DD]

## Đề bài
- **Ngành / sản phẩm:** [...]  · **USP / cảm hứng:** [...]
- **Ràng buộc:** [...]  · **Số tên cần:** [n]

## Nhật ký sàng lọc (minh bạch — không bắt buộc show trong chat)
| Tên ứng viên | Sạch f/w/j/r/z? | Có "a" / đa ngôn ngữ / dễ đọc? | Search: trùng? | Kết luận |
|---|---|---|---|---|
| [...] | ✅ | ✅ | sạch / trùng (ai dùng) / không rõ | GIỮ / LOẠI |

## 1. Tổng quan
[mỗi tên một dòng, không đánh số]

## 2. Cụ thể
[từng tên theo 4 trục + trạng thái kiểm — như khung A]

## Bàn giao
- Tên chốt → `ec-thong-diep-truyen-thong` (viết thông điệp / slogan).
- ⚠️ Domain + nhãn hiệu mới sàng **sơ bộ** — trước khi dùng thật phải kiểm registrar + IPVietnam / luật sư.

## Self-verify (cổng chống bịa)
- [x] Mọi tên không chứa f/w/j/r/z
- [x] Mọi tên đã search Internet (có ngày)
- [x] Tên trùng đã loại, không lẫn vào danh sách sạch
- [x] Không khẳng định "đăng ký được" — chỉ "chưa thấy trùng (cần kiểm ...)"
- [x] Mục Cụ thể nêu rõ phát âm / độc đáo / ý nghĩa / mở rộng
```
