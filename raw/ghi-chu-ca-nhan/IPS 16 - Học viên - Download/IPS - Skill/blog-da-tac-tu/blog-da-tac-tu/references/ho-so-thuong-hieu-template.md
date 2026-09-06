# Hồ sơ thương hiệu (Voice Pack) — mẫu khai báo cho người dùng

Tài liệu này dành cho **người dùng KHÔNG phải chủ skill** (bản đã xuất đi, không có `references/_private/`).
Trước khi viết bài, assistant phải dựng **Hồ sơ thương hiệu** bằng cách hỏi người dùng 5 mảnh dưới đây.

## Quy tắc tiếp nhận (intake)

- Hỏi gọn, gộp tối đa 4 câu/lần (dùng AskUserQuestion khi hợp). Không hỏi dồn dập từng câu một.
- Nếu người dùng đã cung cấp sẵn một số mảnh → chỉ hỏi mảnh còn thiếu.
- Nếu người dùng có sẵn file/vault/website chứa giọng văn & tư liệu → xin đường dẫn và TỰ ĐỌC thay vì bắt họ gõ lại.
- Sau khi đủ 5 mảnh, **tóm tắt lại hồ sơ** cho người dùng xác nhận rồi mới chạy.
- (Tùy chọn) Đề nghị **lưu hồ sơ** thành file để lần sau khỏi khai lại — ví dụ một file `.md` trong dự án của họ; trỏ tới nó như "nguồn tư liệu".

## 5 mảnh cần thu thập

### 1. Giọng văn (bắt buộc)
- Ngôi kể (tôi / chúng tôi / trung lập)? Cách xưng hô với người đọc (bạn / anh chị / quý vị)?
- Nhịp & phong cách: câu ngắn dứt khoát hay mềm mại? trang trọng hay đời thường?
- Ẩn dụ / hình ảnh hay dùng? Có câu cửa miệng / khẩu hiệu nào không?
- Điều CẤM: từ ngữ, giọng điệu, chủ đề cần tránh.
- *Mẹo:* dán 1–2 đoạn văn mẫu họ tâm đắc → assistant rút giọng từ đó.

### 2. Nguồn tư liệu (bắt buộc)
- Lấy chất liệu thật ở đâu? (file, thư mục, vault, website, tài liệu nội bộ, link).
- Có số liệu / case / câu chuyện cụ thể nào muốn dùng không?
- *Quan trọng:* skill **cấm bịa số liệu**. Không có nguồn thì assistant chỉ viết ý chung và nói rõ chỗ nào cần người dùng bổ sung dữ liệu thật.

### 3. Tác giả / EEAT (bắt buộc cho chuẩn YMYL)
- Tên tác giả / thương hiệu đứng tên bài.
- Bằng cấp, chứng chỉ, số năm kinh nghiệm, vai trò.
- Thành tích / trải nghiệm thật chứng minh thẩm quyền trong chủ đề.
- (Dùng cho "khối tác giả" cuối bài + tín hiệu E-E-A-T.)

### 4. Đối tượng người đọc (bắt buộc)
- Người đọc mục tiêu là ai? (nghề, độ tuổi, trình độ, bối cảnh)
- Họ ĐANG SỢ gì / MUỐN gì liên quan chủ đề?
- Bạn muốn họ làm gì sau khi đọc (CTA)?

### 5. Từ khóa SEO (nên có)
- Từ khóa chính (1) + từ khóa phụ (3–6).
- Có muốn nhắm câu hỏi "People Also Ask" / FAQ không?

## Sau khi đủ hồ sơ → đổ vào script

Điền vào `references/workflow-script.js`:
- **VOICE** = mảnh 1 (giọng văn) + mảnh 3 (tác giả/EEAT) + mảnh 4 (đối tượng).
- **KB** = chất liệu trích từ mảnh 2 (nguồn tư liệu) sau Bước 1.
- **REQUIREMENTS** = chủ đề + độ dài + mảnh 5 (từ khóa) + "chuẩn SEO/EEAT/YMYL".

Rồi chạy tool Workflow như mô tả trong `SKILL.md`.
