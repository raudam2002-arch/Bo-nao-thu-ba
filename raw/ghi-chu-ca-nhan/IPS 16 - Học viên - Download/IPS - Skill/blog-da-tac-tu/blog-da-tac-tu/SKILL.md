---
name: blog-da-tac-tu
description: >-
  Viết bài blog dài chuẩn SEO/EEAT/YMYL bằng quy trình ĐA TÁC TỬ 5 bước (tập hợp tư liệu → 3 dàn bài → tranh biện có thư ký → đồng viết + peer-review → tổng biên tập). Mỗi ý được nhiều agent tranh luận để vừa hấp dẫn, vừa giữ chân, vừa chuyển đổi người đọc; một agent thư ký ghi biên bản, một tổng biên tập rà soát chống "văn AI". Dùng skill này BẤT CỨ KHI NÀO người dùng muốn "viết blog đa tác tử", "viết bài chuẩn SEO EEAT", "viết blog dài 2000-2500 từ", "dựng bài theo quy trình nhiều agent tranh biện", "viết bài authority/chuyên sâu cho doanh nhân/khách hàng", "biến chủ đề này thành blog hoàn chỉnh", hoặc đưa một chủ đề + nguồn tư liệu và yêu cầu ra bài blog hoàn chỉnh theo giọng văn thương hiệu. Kích hoạt cả khi chỉ nói "viết blog về X theo quy trình 5 bước", "chạy multi-agent viết bài cho tôi", "viết bài blog chuẩn Google". KHÔNG dùng cho: bài viral câu tương tác ngắn (dùng content-viral), sale page bán hàng (dùng salepage-warrior-plus), blog nấu ăn (dùng blog-nau-an), kịch bản video (dùng video-marketing-28-ngay), bài 30 giây (dùng rem-30s).
---

# Blog Đa Tác Tử — Viết blog dài chuẩn SEO/EEAT/YMYL qua 5 bước nhiều agent

Skill này biến **một chủ đề + một bộ tư liệu nguồn + một hồ sơ thương hiệu (giọng văn)** thành **một bài blog dài hoàn chỉnh** (mặc định 2000–2500 từ) đạt chuẩn SEO, EEAT, YMYL, và **vượt được test "đây có phải AI viết"**.

Khác với viết một mạch, skill chạy một **quy trình đa tác tử (multi-agent) 5 bước**: nhiều agent dựng dàn bài theo các góc khác nhau → tranh biện để chọn cái tốt nhất → đồng viết và phản biện từng ý → một tổng biên tập rà soát cuối. Cơ chế đối kháng (người viết ≠ người phản biện ≠ thư ký ≠ tổng biên tập) khử được điểm yếu "tự khen mình" của một agent đơn lẻ.

## Nguyên lý nền

Một bài blog **đạt chuẩn** phải làm được ba việc cùng lúc với người đọc mục tiêu:
1. **Hấp dẫn** — hook giữ chân trong 5 giây đầu, đọc tới cuối.
2. **Giữ chân (dwell-time)** — mỗi phần có một lý do để đọc tiếp.
3. **Chuyển đổi** — đẩy người đọc tin và hành động.

Mỗi agent trong quy trình đều bị buộc tự hỏi 3 câu này cho từng ý. Ý nào không đạt cả 3 thì viết lại.

---

## ĐIỀU KIỆN TIÊN QUYẾT — Hồ sơ thương hiệu (Voice Pack)

Skill **không tự bịa giọng văn hay danh tính tác giả**. Trước khi chạy, phải có một **Hồ sơ thương hiệu** gồm 5 mảnh:

| Mảnh | Nội dung |
|---|---|
| **Giọng văn** | Văn phong signature: ngôi kể, nhịp câu, ẩn dụ, điều nên/cấm |
| **Nguồn tư liệu** | Nơi lấy chất liệu thật (vault, file, link, ghi chú) — để KHÔNG bịa số liệu |
| **Tác giả / EEAT** | Tiểu sử, bằng cấp, trải nghiệm, thành tích chứng minh thẩm quyền |
| **Đối tượng** | Người đọc mục tiêu là ai, họ sợ gì / muốn gì |
| **Từ khóa SEO** | Từ khóa chính + phụ |

**Cách lấy Hồ sơ thương hiệu — theo thứ tự ưu tiên:**

1. **Nếu tồn tại file `references/_private/`** (bản dùng riêng của chủ skill): đọc hồ sơ thương hiệu private trong đó và dùng luôn, **không cần hỏi**. → xem mục "Bản dùng riêng" bên dưới.
2. **Nếu KHÔNG có `references/_private/`** (bản đã xuất cho người dùng khác): chạy **bước tiếp nhận (intake)** — hỏi người dùng để dựng hồ sơ thương hiệu. → xem `references/ho-so-thuong-hieu-template.md`.
3. Người dùng có thể **ghi đè** bằng cách cung cấp hồ sơ/giọng văn riêng ngay trong yêu cầu.

> ⚠️ Không bao giờ chạy quy trình viết khi còn thiếu mảnh nào trong hồ sơ thương hiệu. Thiếu thì hỏi (intake) hoặc đọc nguồn để bù.

---

## QUY TRÌNH 5 BƯỚC (tổng quan)

Chi tiết đầy đủ + lý do từng khâu: đọc `references/quy-trinh-5-buoc.md`.
Script Workflow chạy được ngay (có chỗ điền): `references/workflow-script.js`.

```
B1  TẬP HỢP TƯ LIỆU      (assistant tự làm) → đóng gói KB từ Nguồn tư liệu, cấm bịa ngoài KB
B2  3 DÀN BÀI            3 agent // — 3 góc tiếp cận khác nhau (kể chuyện / logic / giải tỏa)
B3  TRANH BIỆN + THƯ KÝ  3 góc phản biện // + 1 thư ký ghi biên bản → 1 dàn bài thống nhất
B4  ĐỒNG VIẾT           pipeline mỗi phần: viết → peer-review thuyết phục; rồi 1 agent điều phối ráp bài
B5  TỔNG BIÊN TẬP        1 agent (effort cao) rà SEO/EEAT/YMYL/test-AI → bản xuất bản
```

### Bước 1 — Tập hợp tư liệu (assistant tự làm, KHÔNG qua agent)
- Đọc **Nguồn tư liệu** trong hồ sơ thương hiệu. Tìm/quét đúng chủ đề, trích chất liệu thật: định nghĩa, câu chuyện, số liệu, ví dụ, khung tư duy.
- Đóng gói thành **KB (kho tư liệu nguồn)** — văn bản có cấu trúc, chia mục. Đây là nguồn DUY NHẤT cho mọi số liệu trong bài. **Cấm mọi agent bịa số ngoài KB.**
- Gộp thêm **Giọng văn** + **Tác giả/EEAT** + **Đối tượng** + **Từ khóa** vào khối tư liệu chung.

### Bước 2 — 3 dàn bài (3 agent song song)
Mỗi agent nhận KB + một góc tiếp cận riêng, trả về dàn bài theo schema (tiêu đề H1, hook, các phần + chất liệu, CTA). 3 góc mặc định: **(A)** kể chuyện trước, **(B)** logic/khung tài sản, **(C)** giải tỏa nỗi sợ / hướng hành động. Đổi góc cho hợp chủ đề.

### Bước 3 — Tranh biện + thư ký
- **3 agent phản biện** song song, mỗi agent một lăng kính: (1) người đọc bận rộn — hấp dẫn & giữ chân; (2) SEO/EEAT/YMYL; (3) gác cổng giọng văn & chuyển đổi. Chấm mạnh/yếu cả 3 dàn bài.
- **1 agent thư ký**: KHÔNG tranh luận, chỉ ghi **biên bản tranh biện** (đồng thuận / xung đột / cách hòa giải) rồi tổng hợp ra **một dàn bài thống nhất** (tiêu đề, meta description, từ khóa, 6–8 phần, số từ mỗi phần).

### Bước 4 — Đồng viết
- **Pipeline theo từng phần** của dàn bài thống nhất, mỗi phần 2 chặng: **viết nháp** (giọng thương hiệu) → **peer-review thuyết phục** (agent khác tự hỏi: ý này *quan trọng / giữ chân / chuyển đổi* không? chưa đạt thì viết lại mạnh hơn).
- **1 agent điều phối** ráp các phần thành bài liền mạch, đồng nhất 100% giọng văn, đúng độ dài, thêm câu chuyển đoạn, khử trùng ý.

### Bước 5 — Tổng biên tập (1 agent, reasoning cao)
Rà theo checklist 6 tiêu chí: **hấp dẫn · giọng văn · SEO · EEAT · YMYL · vượt test-AI**. Thêm khối tác giả + FAQ + meta + slug. Cắt/chỉnh về đúng độ dài. Trả về bản xuất bản + báo cáo rà soát + checklist.

---

## CÁCH CHẠY (cho assistant)

1. Xác lập **Hồ sơ thương hiệu** (đọc `_private/` nếu có; nếu không → intake; hoặc theo yêu cầu người dùng).
2. Hỏi/khẳng định **chủ đề + độ dài + đối tượng** nếu chưa rõ.
3. **Bước 1**: tự quét nguồn, dựng KB.
4. Mở `references/workflow-script.js`, **điền** 3 khối: `KB`, `VOICE` (giọng + EEAT + đối tượng), `REQUIREMENTS` (chủ đề + độ dài + từ khóa + chuẩn). Gọi tool **Workflow** với script đó.
5. Khi workflow xong: trình bày **bài viết cuối** + tóm tắt quy trình (biên bản tranh biện, dàn bài thống nhất, checklist).
6. Đề xuất lưu file `.md` có frontmatter SEO/EEAT, hoặc xuất `.docx`, hoặc tạo biến thể tiêu đề.

> Nếu môi trường KHÔNG có tool Workflow: chạy thủ công bằng tool Agent theo đúng 5 bước trong `references/quy-trinh-5-buoc.md` (mục "Chạy thủ công không có Workflow").

---

## BẢN DÙNG RIÊNG vs BẢN XUẤT ĐI

- **Bản dùng riêng (của chủ skill):** có thư mục `references/_private/` chứa hồ sơ thương hiệu cá nhân (giọng văn, vault nguồn, tiểu sử EEAT). Skill tự đọc, không hỏi.
- **Bản xuất cho người khác:** **XÓA toàn bộ `references/_private/`** trước khi chia sẻ. Khi không có thư mục này, skill tự chuyển sang **intake** — hỏi người dùng mới về hồ sơ thương hiệu của họ rồi mới chạy.
- Cách xuất an toàn: chạy `scripts/export.sh <thư-mục-đích>` — tự copy skill và loại bỏ `_private/`. Xem `scripts/export.sh`.

---

## Bản đồ tài liệu

| File | Dùng để |
|---|---|
| `references/quy-trinh-5-buoc.md` | Chi tiết 5 bước + lý do từng khâu + cách chạy thủ công không Workflow |
| `references/workflow-script.js` | Script Workflow chạy được, có 3 khối cần điền (KB / VOICE / REQUIREMENTS) |
| `references/ho-so-thuong-hieu-template.md` | Mẫu intake cho NGƯỜI DÙNG KHÁC tự khai báo giọng văn / nguồn / EEAT |
| `references/_private/` | **RIÊNG TƯ — KHÔNG XUẤT.** Hồ sơ thương hiệu cá nhân của chủ skill |
| `scripts/export.sh` | Đóng gói skill để chia sẻ, tự loại bỏ `_private/` |
