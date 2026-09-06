# Tay nghề nhà văn chuyên nghiệp — sổ tay craft cho người viết & biên tập

Tài liệu này là **kho kỹ năng viết văn chuyên nghiệp** mà mọi agent viết chương (Bước 5) và tổng
biên tập (Bước 5') phải áp. Bản rút gọn của nó đã nhúng sẵn dưới dạng hằng số `CRAFT` trong
`workflow-chuong.js` và `workflow-tong-bien-tap.js`. Đọc bản đầy đủ này khi cần dạy agent kỹ hơn,
khi tự tay viết/sửa một chương, hoặc khi chấm chất lượng văn.

> Craft **không thay** giọng văn tác giả (Voice Pack) và **không phá** hai chốt EEAT/YMYL. Nó là lớp
> kỹ thuật câu–cảnh–cấu trúc làm cho đúng giọng ấy *hay hơn, giữ chân hơn, đọng lâu hơn*.

---

## I. NGUYÊN LÝ LÕI — 12 luật áp từng câu

1. **Tả, đừng kể (show, don't tell).** Đừng tuyên bố cảm xúc/kết luận. Dựng cảnh, hành động, chi
   tiết giác quan để người đọc *tự* rút ra. — *"Cô ấy rất buồn"* → *"Cô ngồi lại bên mâm cơm nguội,
   đũa vẫn đặt ngay ngắn ở hai chỗ."*
   - Ngoại lệ: được "kể" (tóm lược) ở khúc chuyển ít quan trọng, để dành "tả" cho khoảnh khắc đắt.
2. **Cảnh vs. tóm lược (scene vs. summary).** Khúc quan trọng → **dựng cảnh** (thời gian, không
   gian, hành động, lời thoại, thời lượng chậm lại). Khúc nối → **tóm lược** (nén thời gian). Nhịp
   một chương hay là sự đan xen có chủ ý giữa hai chế độ này.
3. **Cụ thể thắng khái quát.** Một chi tiết thật, riêng, đắt hơn mười câu triết lý chung. *"Nhiều
   cặp vợ chồng ít nói chuyện"* → *"Họ ngủ chung giường tám năm, nhưng lời cuối cùng mỗi đêm là tiếng
   khóa màn hình điện thoại."*
4. **Động từ mạnh, ít tính/trạng từ.** Chọn đúng động từ thay vì động từ yếu + trạng từ (*"đi nhanh"*
   → *"lao"*, *"nói to"* → *"quát"*). Cắt các từ độn: *rất, thật sự, vô cùng, khá, một cách, có thể
   nói rằng*.
5. **Nhịp câu biến hóa.** Câu ngắn để đánh. Câu dài, nhiều mệnh đề, để cuốn người đọc trôi theo mạch
   cảm xúc rồi — dừng. Chuỗi câu cùng độ dài là dấu vân tay của văn AI; phá vỡ nó.
6. **Vào giữa biến cố (in medias res).** Mở chương/cảnh ngay khoảnh khắc căng nhất, cắt phần dạo đầu
   giải thích bối cảnh. Bối cảnh rải sau, nhỏ giọt, khi người đọc đã bị kéo vào.
7. **Móc kéo (hook & cliffhanger).** Câu đầu chương phải tạo một câu hỏi trong đầu người đọc. Câu
   cuối chương **mở một vòng lặp** (câu hỏi treo / lời hứa / mối đe dọa mới) kéo sang chương sau —
   **không** tóm tắt lại điều vừa nói.
8. **Mô-típ & gọi lại (motif & callback).** Gieo một hình ảnh, một câu, một vật ở đầu; gọi lại ở cuối
   chương hoặc cuối sách với ý nghĩa đã đổi. Đây là thứ tạo cảm giác "cả cuốn là một chỉnh thể".
9. **Ẩn dụ có kỷ luật.** Một ẩn dụ đắt, đúng đời sống người đọc Việt, xuyên suốt — hơn năm ẩn dụ rời
   rạc. Diệt ẩn dụ sáo (*"ngọn hải đăng", "chìa khóa vàng", "hành trình"* nếu đã mòn). Không trộn ẩn
   dụ lẫn lộn ("thắp lửa cho con thuyền").
10. **Đối thoại thật.** Một câu nói nguyên văn của nhân vật đắt hơn cả đoạn thuật lại. Lời thoại phải
    *nghe được* — mỗi người một giọng; không ai nói ra suy nghĩ tròn vành như bài giảng.
11. **Sự thật cảm xúc.** Mỗi cảnh có một chuyển biến nội tâm *thật* — không tô hồng, không bi kịch
    hóa quá tay. Người đọc tha thứ mọi thứ trừ cảm xúc giả.
12. **Kill your darlings + test "Rồi sao?".** Câu văn dù đẹp mà không phục vụ chương → cắt. Sau mỗi
    đoạn hỏi *"rồi sao?"*: nó có đẩy hiểu biết / cảm xúc / hành động của người đọc tiến thêm một bước
    không? Không → bỏ hoặc viết lại.

---

## II. CẤU TRÚC CHƯƠNG — kiến trúc một chương giữ chân

**Khuôn 5 nhịp (uốn theo lăng kính mở, không cứng nhắc):**
1. **Hook** — cảnh/câu hỏi/nghịch lý mở, chạm đúng nỗi đau avatar (1–2 đoạn).
2. **Căng** — đào sâu vấn đề, cho người đọc thấy chính mình, nâng mức khó chịu vừa đủ để họ *cần* lời
   giải.
3. **Xoay** — khoảnh khắc "à ra vậy": trao góc nhìn mới / khung / công cụ (chất liệu EEAT thật).
4. **Làm** — bài tập/checklist/biểu mẫu dùng được ngay; biến hiểu thành làm.
5. **Chốt + móc** — đọng lại một câu, và một móc kéo sang chương sau.

**Đường cong cảm xúc trong chương:** không đi ngang. Cần một điểm chùng (nỗi đau/thất bại) trước điểm
sáng (giải pháp) — tương phản làm giải pháp có sức nặng. (Liên hệ arc cả cuốn trong Book Bible.)

**Chuyển đoạn mượt:** kết đoạn bằng một ý mở, mở đoạn sau bằng cách đáp lại nó. Tránh nối bằng từ vô
hồn ("Tiếp theo", "Ngoài ra", "Bên cạnh đó").

---

## III. CÂU & TỪ — kỹ thuật cấp vi mô

- **Cắt mỡ.** Mỗi lần sửa, thử xóa từng từ: nếu nghĩa không đổi, từ đó thừa. Mục tiêu ~15–20% ngắn
  hơn bản nháp mà mạnh hơn.
- **Chủ động > bị động.** *"Vấn đề được giải quyết bởi cô"* → *"Cô giải quyết vấn đề"*. Bị động chỉ
  dùng khi cố tình giấu chủ thể.
- **Cụ thể hóa danh từ trừu tượng.** *"sự giao tiếp"* → *"cách hai người nói chuyện lúc mười giờ
  đêm"*.
- **Một ý một câu ở khúc căng.** Đừng nhồi ba ý vào một câu dài lúc cần cú đấm.
- **Khoảng lặng.** Câu một từ. Một dòng trắng. Lệnh trực tiếp cho người đọc (*"Dừng lại. Đọc lại câu
  đó."*) — đúng giọng PTL.
- **Quy tắc gạch ngang "—":** dùng dè. Ưu tiên dấu phẩy và câu ngắn cho nhịp thuần Việt (Voice Pack
  PTL cấm rải "—").

---

## IV. DANH SÁCH DIỆT — dấu hiệu "văn AI" / văn non tay phải loại

- Mở bài sáo: *"Trong thời đại ngày nay…", "Trong cuộc sống hiện đại…", "Ai trong chúng ta cũng…"*.
- Chốt sáo: *"Tóm lại…", "Nói tóm lại…", "Hy vọng bài viết…"*.
- Câu đệm rỗng: *"Không thể phủ nhận rằng…", "Điều quan trọng cần lưu ý là…", "Như chúng ta đều
  biết…"*.
- Liệt kê vô hồn ba thứ song song đều tăm tắp không có chi tiết riêng.
- Trạng từ độn cảm xúc thay cho tả: *"một cách sâu sắc", "vô cùng ý nghĩa", "thực sự quan trọng"*.
- Tính từ đánh giá thay cho bằng chứng: *"một câu chuyện tuyệt vời", "một bài học quý giá"* — hãy
  *cho thấy* nó tuyệt/quý, đừng dán nhãn.
- Kết luận đạo lý chung chung không có việc-làm-cụ-thể đi kèm.
- Mọi câu cùng độ dài, cùng cấu trúc chủ–vị–bổ.

---

## V. CRAFT GẶP EEAT & YMYL — không đánh đổi

- **Craft phục vụ sự thật, không thay thế nó.** Được dựng cảnh sinh động từ **chất liệu thật** (case,
  trải nghiệm PTL, số liệu có nguồn). **Cấm** bịa chi tiết/số để câu văn hay hơn. Nếu cần một cảnh mà
  nguồn không có, viết cảnh *tổng hợp điển hình* và nói rõ tính minh họa — không gán cho người thật.
- **YMYL kìm cương kịch tính.** Craft cho phép nâng căng thẳng; YMYL cấm bi kịch hóa nỗi đau nhạy
  cảm, cấm hù dọa, cấm hứa "chữa lành tuyệt đối". Cảnh bạo hành/lạm dụng: tả có trách nhiệm, hướng
  tới an toàn, không thẩm mỹ hóa.
- **Đối thoại/nhân vật** trong sách self-help nên là *ẩn danh/tổng hợp* trừ khi có phép dùng chuyện
  thật của người cụ thể.

---

## VI. CHECKLIST CHẤM MỘT CHƯƠNG (dùng ở vòng duyệt)

- [ ] Câu đầu tạo được một câu hỏi trong đầu người đọc (hook thật)?
- [ ] Có ít nhất một **cảnh dựng** (không chỉ toàn thuật lại)?
- [ ] Có chi tiết cụ thể, giác quan, riêng — không toàn khái quát?
- [ ] Động từ mạnh; đã cắt từ độn và tính/trạng từ thừa?
- [ ] Nhịp câu biến hóa (có câu ngắn cú đấm)?
- [ ] Có một chuyển biến cảm xúc/nhận thức thật?
- [ ] Bài tập/công cụ dùng được ngay?
- [ ] Câu cuối là **móc kéo**, không phải tóm tắt?
- [ ] Không còn câu trong "Danh sách diệt" (mục IV)?
- [ ] Đúng giọng Voice Pack + thuật ngữ Book Bible + không lặp chương khác?
- [ ] EEAT (chất liệu thật, không bịa) + YMYL (không phóng đại, xử cờ đỏ) đạt?

Đạt cả 11 ô → chương "đạt chuẩn tay nghề". Thiếu ô nào → ghi vào `huong_bu` để vòng viết bù xử.

---

## VII. Đọc thêm trong hệ PTL (để lấy chất liệu, không sao chép kỹ thuật ngoại lai)
- Kể chuyện 7 hồi, đường cong cảm xúc A→C→B (giọng bán hàng/kể chuyện của PTL).
- Giao tiếp Mehrabian 55-38-7 (dùng khi viết cảnh đối thoại/xung đột).
- 6 nhu cầu con người, LTVM, 7 bước tạo biến đổi (làm khung "xoay" nhận thức trong chương).
Ghi tên trang Brain đã dùng vào chất liệu chương (EEAT).
