# Bước 10 — Xuất PDF khổ A5, cỡ chữ 15pt, trình bày chuyên nghiệp

Cách chắc ăn nhất cho tiếng Việt (dấu đầy đủ) + kiểm soát khổ giấy/typography: **dựng HTML + CSS rồi
render ra PDF**. Dùng kèm skill `anthropic-skills:pdf` cho các thao tác PDF (ghép, mục lục, kiểm tra).

## Thứ tự ráp bản thảo
`bìa → lời cảm ơn (front-01) → lời tựa (front-02) → MỤC LỤC → ch-01 … ch-NN → bìa 4 (back-01)`

## CSS khổ A5, chữ 15pt (khung mẫu)
```css
@page {
  size: A5;                     /* 148 × 210 mm */
  margin: 18mm 16mm 20mm 16mm;  /* trên phải dưới trái */
  @bottom-center { content: counter(page); font-size: 10pt; color: #555; }
}
body { font-family: "Be Vietnam Pro", "Noto Serif", Georgia, serif;
       font-size: 15pt; line-height: 1.5; text-align: justify; hyphens: auto; }
h1.chuong { font-size: 22pt; page-break-before: always; margin-top: 0; }
h2 { font-size: 17pt; } h3 { font-size: 15.5pt; }
.bia, .bia4 { page-break-after: always; text-align: center; }
.muc-luc li { list-style: none; }        /* mục lục: dùng target-counter cho số trang nếu engine hỗ trợ */
img { max-width: 100%; height: auto; }
blockquote { border-left: 3px solid #c9a227; padding-left: 10px; color: #333; }
```
- **Font có dấu tiếng Việt:** chọn font hỗ trợ đầy đủ (Be Vietnam Pro, Noto Serif/Sans, Times).
- **Ngắt trang:** mỗi chương bắt đầu trang mới (`page-break-before: always` trên `h1.chuong`).

## Render HTML → PDF (chọn công cụ có sẵn)
- **WeasyPrint** (tốt cho `@page`, mục lục, số trang):
  `weasyprint sach.html san-pham/<ten-sach>/xuat-ban/sach-chinh.pdf`
- **Pandoc + wkhtmltopdf/LaTeX:** `pandoc noi-dung.md -o sach.pdf -V papersize=a5 -V fontsize=15pt`
  (kiểm tra font tiếng Việt với engine `--pdf-engine=xelatex`).
- Nếu công cụ chưa cài, hỏi người dùng cho phép cài, hoặc dùng skill `anthropic-skills:pdf`.

## Soát bản in thử (cổng người duyệt)
- Dấu tiếng Việt hiển thị đúng, không vỡ font.
- Mục lục khớp số trang; mỗi chương sang trang mới.
- Ảnh/bìa không vỡ, không tràn lề; số trang chạy đúng.
- Cỡ chữ thân bài đúng 15pt, khổ đúng A5.
Đầu ra: `san-pham/<ten-sach>/xuat-ban/sach-chinh.pdf`.
