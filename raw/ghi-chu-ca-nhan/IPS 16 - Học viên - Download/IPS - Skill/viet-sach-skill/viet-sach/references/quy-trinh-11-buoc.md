# Quy trình viết sách 11 bước — chi tiết & lý do

Tài liệu này mở rộng phần tổng quan trong `SKILL.md`. Đọc khi cần chi tiết một bước cụ thể.
Ba script Workflow: `workflow-dan-bai.js` (B4), `workflow-chuong.js` (B5), `workflow-tong-bien-tap.js` (B5').

---

## Bước 1 — Xác định đối tượng đọc

- **Mục tiêu:** một chân dung (avatar) chính rõ mặt — giới tính, tuổi, giai đoạn, vai trò, bối cảnh
  văn hóa. Một cuốn sách chỉ nói với **một** người để giữ giọng nhất quán; đối tượng phụ để phễu nhánh.
- **Cách làm:** skill `ho-so-khach-hang-vpc` (Mode A dựng từ kiến thức, hoặc Mode B nếu có raw thật:
  comment, tin nhắn khách, review). EEAT: đối chiếu vault Brain.
- **Đầu ra:** `khach-hang/avatar-chinh.md` (hoặc nơi dự án quy định).
- **Cổng:** người dùng duyệt avatar. Nếu bộ nguồn có nhiều biến thể (nam/nữ) → chốt 1.

## Bước 2 — Xác định vấn đề của họ

- **Mục tiêu:** liệt kê **Pains (nỗi đau) – Jobs (việc cần làm) – Gains (mong muốn)**, giữ **quote
  nguyên văn** giọng khách để chương sau chạm đúng ngôn ngữ của họ.
- **YMYL:** đánh dấu ngay nỗi đau chạm **cờ đỏ** (bạo hành, lạm dụng, ý định tự hại) → ghi cách xử vào
  Book Bible (ưu tiên an toàn, chỉ chỗ cần chuyên gia).
- **Đầu ra:** phần Pain–Gain trong avatar, tách file riêng nếu dày.

## Bước 3 — Trộn nguồn (B1 + B2 + sách mẫu) → Brief + Book Bible

- **Mục tiêu:** một **brief biên tập** dạng ma trận: mỗi **nỗi đau của avatar** được **chương nào của
  sách mẫu** trả lời, **chất liệu Brain nào** bồi vào, **điểm đau bản địa nào** phải thêm mà nguồn thiếu.
  Đây là bước quyết định "khung nhà nguồn — sơn màu tác giả".
- Đồng thời khởi tạo **Book Bible** (xem SKILL.md): lời hứa cuốn sách, giọng, bảng thuật ngữ, arc,
  quy tắc YMYL. Book Bible + Brief là hai đầu vào bắt buộc cho Workflow B4/B5.
- **Đầu ra:** `00-brief.md`, `00-book-bible.md`.

## Bước 4 — Dàn bài ≥20 chương (ĐA TÁC TỬ) — CỔNG LỚN NHẤT

Chạy `workflow-dan-bai.js`. Ba pha:
1. **Nhiều kiến trúc sư** (≥3) mỗi người một dàn bài ≥20 chương theo cấu trúc khác nhau.
2. **Tranh luận** đa lăng kính (giữ chân · EEAT/YMYL · cung bậc) → mạnh/yếu từng dàn bài.
3. **Kiến trúc trưởng hợp nhất** → một dàn bài ≥20 chương + arc + cập nhật Book Bible.

**Cách mở nguồn (thường 10–13 chương) thành ≥20:** tách chương dày; thêm chương bối cảnh bản địa;
thêm chương *workbook* (biến văn xuôi thành bài tập/checklist/biểu mẫu — tăng giá trị cảm nhận); thêm
chương khung của tác giả (framework signature). Mỗi chương ghi: tiêu đề, 3–5 ý, nguồn gốc, chất liệu
Brain, **HOOK mở**, **MÓC KÉO cuối** (khớp hook chương sau), bài tập, cờ YMYL.

**Craft ở tầng dàn bài (xem `ky-nang-nha-van.md`):** kiến trúc sư gài sẵn hook↔móc kéo cho từng chương,
một **mô-típ xuyên suốt** (gieo ở chương đầu, gọi lại ở chốt), arc có điểm chùng trước điểm sáng, và
nhịp chương biến hóa (xen chương cảnh–cảm xúc với chương khung–công cụ). Nhờ vậy Bước 5 chỉ triển khai,
không phải bịa khung.

- **Đầu ra:** `00-dan-bai.md` (+ Book Bible cập nhật).
- **Cổng:** người dùng **chốt dàn bài** trước khi viết bất kỳ chương nào.

## Bước 5 — Viết các chương (ĐA TÁC TỬ, theo LÔ)

Chạy `workflow-chuong.js` cho từng lô 4–5 chương. Với **mỗi chương**:
1. **Nhiều cây bút** (≥3) viết **các phiên bản khác nhau** (lăng kính: câu chuyện-first / framework-first
   / bài tập-first).
2. **Tranh luận**: đối chiếu các phiên bản, chỉ ra đoạn mạnh nhất của từng bản.
3. **Hợp nhất**: ghép bản tốt hơn, khử trùng.
4. **Giám sát**: đối chiếu Book Bible (giọng, thuật ngữ, arc, không đè chương khác) + checkpoint EEAT/YMYL.

**Khuôn mỗi chương:** mở bằng câu chuyện/nỗi đau bản địa → nội dung (chất liệu thật, dẫn nguồn) →
**bài tập/checklist** → chốt chương nối sang chương sau. Mọi số liệu truy về nguồn.

- **Đầu ra:** `ch-01.md … ch-NN.md`.
- **Cổng:** duyệt cả lô rồi chạy lô kế.

## Bước 5' — Tổng biên tập: cắt gọt rồi viết bù

Chạy `workflow-tong-bien-tap.js` sau khi đủ chương. Hai vòng:
1. **CẮT:** đọc từng chương, **cắt bớt chữ** — bỏ lặp, bỏ câu thừa/sáo, siết cho **mượt và chất lượng
   hơn**. Không đổi ý; chỉ làm cô đọng và giữ nhịp. Ghi báo cáo đã cắt gì, còn bao nhiêu chữ.
2. **DUYỆT + VIẾT BÙ:** đọc lại toàn cuốn theo Book Bible + 3 tiêu chí nền (hấp dẫn/chuyển hóa/liền
   mạch). Chương/đoạn **chưa đạt** → viết thêm hoặc viết lại. **Lặp** tới khi đạt.

> Cắt trước, bù sau: cắt làm lộ lỗ hổng thật, tránh bù nhầm rồi cắt nhầm.

- **Đầu ra:** các `ch-*.md` bản biên tập cuối + `00-bao-cao-bien-tap.md`.
- **Cổng:** duyệt bản cuối trước B6.

## Bước 6 — Nhân vật, minh họa, bìa

Xem `hinh-anh-bia.md`. Có Higgsfield → skill `higgsfield-generate` (+ `higgsfield-soul-id` cho nhân
vật xuyên suốt). Không có → soạn prompt song ngữ cho ChatGPT/DALL·E, lưu `00-prompts-hinh-anh.md`.
YMYL/hình: tránh hình kích động; ấm áp, tôn trọng, hợp văn hóa. **Cổng:** duyệt bìa & minh họa.

## Bước 7 — Lời cảm ơn
Giọng tác giả, chân thành, ngắn. → `front-01-loi-cam-on.md`.

## Bước 8 — Lời tựa
Thiết lập EEAT (vì sao tác giả viết cuốn này); **đặt tuyên bố miễn trừ YMYL** (self-help, không thay
thế tư vấn chuyên môn, chỉ dẫn khi nào cần chuyên gia). → `front-02-loi-tua.md`.

## Bước 9 — Bìa 4
3–5 lợi ích cụ thể theo Pains/Gains + một hook + một CTA. Học cấu trúc từ salesletter nguồn nhưng
**viết lại**, không phóng đại (YMYL). → `back-01-bia-4.md`.

## Bước 10 — Xuất PDF A5, chữ 15pt
Xem `xuat-ban-pdf.md`. Ráp toàn bộ theo thứ tự (bìa → cảm ơn → tựa → mục lục → chương → bìa 4) →
skill `anthropic-skills:pdf`, dựng HTML/CSS `@page {size: A5}` + `font-size: 15pt` + mục lục + số
trang → render PDF. **Cổng:** soát bản in thử (ngắt trang, ảnh, mục lục).

## Bước 11 — Xuất bản
- **Google Drive** (nếu có MCP): tải PDF + đặt chia sẻ public → trả link.
- **Heyzine** (flipbook đẹp để nhúng leadpage/salepage): qua trình duyệt (Chrome MCP) hoặc thủ công.
- ⚠️ **Xác nhận với người dùng trước khi đặt public.** Ghi link + trạng thái vào nhật ký dự án.

---

## Checklist "đạt chuẩn" trước khi coi cuốn sách là xong
- [ ] ≥20 chương, mỗi chương đạt 3 tiêu chí nền (hấp dẫn/chuyển hóa/liền mạch).
- [ ] Giọng & thuật ngữ nhất quán toàn cuốn (Book Bible).
- [ ] Mọi số liệu/khẳng định truy về nguồn; không bịa (EEAT).
- [ ] Tuyên bố miễn trừ + xử lý cờ đỏ đúng (YMYL).
- [ ] Có bìa, lời cảm ơn, lời tựa, mục lục, bìa 4.
- [ ] PDF A5 chữ 15pt trình bày sạch; link chia sẻ hoạt động.
