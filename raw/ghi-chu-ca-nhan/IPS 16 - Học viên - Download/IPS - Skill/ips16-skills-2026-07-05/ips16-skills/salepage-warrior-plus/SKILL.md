---
name: salepage-warrior-plus
description: Viết salepage (trang bán hàng / sales letter) tiếng Việt phong cách Warrior Plus theo cấu trúc Jay Abraham 16 bước cho khóa học, sản phẩm vật lý, info-product. Output 2 file - HTML salepage standalone (visual vàng/đỏ/đen, urgency banner, countdown, scarcity) VÀ Markdown copy text theo 16 block để paste vào Webcake/WordPress. Sử dụng BẤT CỨ KHI NÀO người dùng yêu cầu viết salepage, sales letter, trang bán hàng, sales page, landing page bán hàng, long-form sales copy, hoặc nhắc "viết salepage cho X", "lên trang bán hàng", "16 bước Jay Abraham", "Warrior Plus style", "trang bán khóa học", "trang bán sản phẩm". Kích hoạt cả khi chỉ nói "tôi cần bán X online", "viết trang chốt khách", "làm offer page", "trang bán đai bụng", "trang bán ebook", hoặc đưa thông tin sản phẩm và yêu cầu "lên trang bán hàng full". KHÔNG dùng cho squeeze page lead magnet (dùng ips-cmo), VSL ngắn (dùng video-marketing-28-ngay), offer thuần (dùng 100m-offers trước rồi qua skill này).
---

# Salepage Warrior Plus - Jay Abraham 16 bước

Đây là skill viết salepage (trang bán hàng) tiếng Việt theo phong cách của Phạm Thành Long: cấu trúc Jay Abraham 16 bước làm khung xương, visual style Warrior Plus làm da thịt, giọng văn mạnh mẽ - góc cạnh - đi thẳng vấn đề.

Skill này phục vụ 3 loại sản phẩm anh Long hay bán:
- **Khóa học** (DTSGC, LTVM, SSS, IPS, Eagle Camp, Ultimate Trainer, YES Summit)
- **Sản phẩm vật lý** (đai bụng, phụ kiện, hàng tiêu dùng)
- **Info-product / digital** (ebook, sales letter, tài liệu, template)

## Quy trình tổng quát

Theo đúng thứ tự, đừng nhảy bước:

1. **Phỏng vấn khách** (BẮT BUỘC) - thu thập đủ thông tin sản phẩm trước khi viết
2. **Phác thảo bộ khung 16 bước** - đề cương trước khi viết chi tiết
3. **Viết copy đầy đủ** - dùng formulas trong `references/copy-formulas.md`
4. **Xuất 2 output song song**:
   - File HTML salepage standalone (Warrior Plus visual)
   - File Markdown copy text theo block (cho Webcake/WordPress)

## Bước 1: Phỏng vấn khách - thu thập input

Trước khi viết bất cứ chữ nào, phải hỏi đủ những thông tin sau. Nếu khách đã cung cấp một phần trong cuộc hội thoại, chỉ hỏi phần còn thiếu. Hỏi gom nhóm bằng `ask_user_input_v0` khi có thể, tránh bắt khách trả lời lan man.

### Nhóm 1 - Sản phẩm
- Tên sản phẩm/khóa học chính xác (cách Phạm Thành Long muốn nó xuất hiện trên trang)
- Loại sản phẩm: khóa học online / khóa học offline / sản phẩm vật lý / info-product / dịch vụ
- Giá bán chính + giá so sánh (nếu có giá gốc cao hơn để gạch chéo)
- Hình thức giao hàng (link học, ship hàng, file PDF, lịch lớp...)

### Nhóm 2 - Khách hàng mục tiêu
- Avatar khách hàng: ai, bao nhiêu tuổi, làm gì, đang đau cái gì
- 3 nỗi đau lớn nhất họ đang gặp (cụ thể, dùng ngôn ngữ của họ - không generic)
- 3 mong muốn lớn nhất họ đang khát khao
- Họ đã thử cái gì trước đó mà không thành công

### Nhóm 3 - Lợi ích & chuyển hóa
- 5-10 lợi ích cụ thể, đo lường được khi dùng sản phẩm
- "Trước khi - sau khi" trông thế nào
- Câu chuyện thành công của khách thật (testimonial - nếu có)

### Nhóm 4 - Offer
- Sản phẩm chính bao gồm gì (modules, items, sessions)
- Các bonus đi kèm (mỗi bonus nên có giá quy đổi)
- Tổng giá trị quy đổi (để so với giá bán → thấy hời)
- Guarantee/cam kết bảo hành
- Khan hiếm (scarcity): số lượng giới hạn / thời gian khuyến mãi / quà tặng có hạn
- Khẩn cấp (urgency): deadline cụ thể

### Nhóm 5 - Tác giả/người bán (anh Long mặc định)
- Tên, danh xưng (Luật sư / Diễn giả / Chuyên gia)
- 3-5 thành tựu/credential quan trọng nhất liên quan đến sản phẩm
- Lý do TẠI SAO anh làm sản phẩm này (câu chuyện sứ mệnh)

### Nhóm 6 - CTA & technical
- Link mua hàng/đăng ký (Pancake POS link / Webcake / form đăng ký)
- Hotline / Zalo / Messenger để khách hỏi
- Logo, hình ảnh sản phẩm (nếu có sẵn URL)

**Lưu ý quan trọng**: Nếu khách chưa có offer rõ ràng (chưa biết bonus, guarantee, value stack), hãy đề xuất gọi skill `100m-offers` trước để xây offer Grand Slam, sau đó quay lại skill này viết salepage.

## Bước 2: Phác thảo bộ khung 16 bước

Dùng cấu trúc Jay Abraham 16 bước đầy đủ trong `references/jay-abraham-16-buoc.md`. Tóm tắt nhanh:

| Bước | Tên | Mục đích |
|------|-----|----------|
| 1 | Pre-headline | Khoanh vùng đối tượng ("Dành riêng cho...") |
| 2 | Headline chính | Câu hứa lớn nhất - lợi ích #1 |
| 3 | Sub-headline | Bổ sung lợi ích phụ, mở rộng lời hứa |
| 4 | Mở đầu - khoét đau | Đồng cảm với nỗi đau, mô tả cụ thể tình trạng hiện tại |
| 5 | Giải pháp - giới thiệu | Cầu nối từ đau → sản phẩm |
| 6 | Câu chuyện nguồn gốc | Tại sao sản phẩm này ra đời, ai làm |
| 7 | Cơ chế hoạt động | Cách sản phẩm giải quyết vấn đề |
| 8 | Bằng chứng - testimonial | Khách thật, kết quả thật |
| 9 | Liệt kê lợi ích | Bullets "Bạn sẽ..." - 10-20 gạch đầu dòng |
| 10 | Mô tả gói sản phẩm | Trong gói có gì - chi tiết từng phần |
| 11 | Bonus stacking | Quà tặng kèm + giá quy đổi |
| 12 | Tổng giá trị vs Giá bán | Bảng tính "Tổng X triệu - chỉ Y triệu" |
| 13 | Guarantee | Cam kết hoàn tiền / chính sách bảo hành |
| 14 | Scarcity & Urgency | Số lượng giới hạn + đếm ngược thời gian |
| 15 | Call to Action | Nút mua + chỉ dẫn rõ ràng "Bấm vào đây để..." |
| 16 | P.S. - Postscript | Nhắc lại lợi ích #1 + urgency lần cuối |

Đề cương phải có đủ 16 bước. Bước nào không có dữ liệu thì hỏi khách thêm, không tự bịa.

## Bước 3: Viết copy đầy đủ

Dùng `references/copy-formulas.md` cho từng block:
- Headline: 8 công thức (Curiosity / How-to / Question / Specific number / Negative / Testimonial / Promise / Warning)
- Bullets: pattern "Cách + động từ + lợi ích + bí mật" (thêm cái-gọi-là blind bullets)
- Guarantee: 3 mức (cơ bản 7 ngày / mạnh 30 ngày / điên rồ 60 ngày 100% hoàn tiền)
- Scarcity: tránh fake, dùng số thật (số ghế, số bộ, số ngày deadline)
- CTA: nút phải có lợi ích chứ không chỉ "Mua ngay"

**Giọng văn anh Long**:
- Câu ngắn, đi thẳng vấn đề
- Dùng "anh/chị" với khách, không "bạn"
- Lật ngược niềm tin sai - tái tạo niềm tin đúng
- Từ ngữ mạnh: "lật tung", "phá vỡ", "thoát khỏi", "thật sự", "ngay hôm nay"
- Tránh: "có thể", "có lẽ", "hy vọng", "tương đối", "khá là"
- KHÔNG dùng emoji thừa thãi. Chỉ dùng ✓ ✗ ⚠ ⏰ 🔥 cho checklist/cảnh báo

## Bước 4: Xuất 2 output

### Output A - HTML salepage standalone
Dùng template trong `assets/template-html.html`. Đặc điểm Warrior Plus visual:
- **Màu chủ đạo**: vàng (#FFD700) + đỏ (#D32F2F) + đen (#1A1A1A) + trắng
- **Headline cực lớn**: 36-48px, đỏ hoặc đen đậm, có gạch chân/highlight vàng
- **Urgency banner trên cùng**: nền đỏ, chữ trắng, "CHỈ CÒN X NGÀY"
- **Countdown timer**: JavaScript đếm ngược (template có sẵn)
- **CTA button**: vàng nền, chữ đỏ, viền đen, có hiệu ứng pulse
- **Bonus stack**: từng box riêng, có ảnh + giá gạch chéo
- **Guarantee badge**: hình huy chương vàng to ở giữa
- **Testimonials**: card xếp grid, có ảnh khách hàng
- **Mobile responsive**: bắt buộc

Lưu file: `/mnt/user-data/outputs/salepage-[ten-san-pham].html`

### Output B - Copy text theo block (Markdown)
Đầy đủ 16 block tương ứng 16 bước, đánh số rõ ràng, kèm hướng dẫn paste vào đâu:

```markdown
## BLOCK 1 - Pre-headline
[copy text]
→ Paste vào: phần Header trên cùng, font nhỏ, italic

## BLOCK 2 - Headline chính
[copy text]
→ Paste vào: heading H1, font lớn, đậm, màu đỏ
...
```

Lưu file: `/mnt/user-data/outputs/salepage-copy-[ten-san-pham].md`

## Quy tắc cuối

- **KHÔNG bịa testimonial**. Nếu khách chưa có testimonial thật, để chỗ trống `[TESTIMONIAL - CHỜ KHÁCH BỔ SUNG]` và nhắc khách lấy về sau.
- **KHÔNG bịa số liệu** (số học viên, doanh thu, %, v.v.). Hỏi khách hoặc để chỗ trống.
- **KHÔNG dùng câu chung chung**. Mỗi câu phải cụ thể, có thể đo lường được.
- **Luôn xuất CẢ 2 file** (HTML + Markdown copy text), không chỉ một.
- **Sau khi xuất file, dùng `present_files`** để khách download được.

## Tham khảo

- `references/jay-abraham-16-buoc.md` - Chi tiết từng bước, ví dụ thực tế
- `references/copy-formulas.md` - 8 công thức headline, bullets, guarantee, CTA
- `references/visual-design.md` - Warrior Plus visual rules, color codes, layout
- `assets/template-html.html` - HTML salepage template với CSS + JS countdown
- `assets/template-copy-text.md` - Markdown template 16 block


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
