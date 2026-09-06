# Hỏi thầy Long

Một **wiki tri thức sống** (living wiki) ghi lại và tích lũy dần những điều thầy Long đã chia sẻ — về phát triển bản thân, kinh doanh, tư duy — thay vì để chúng nằm rải rác trong ghi chú cá nhân rồi bị quên.

## Ý tưởng cốt lõi

Cách dùng LLM phổ biến nhất với tài liệu là kiểu RAG: tải file lên, hỏi, LLM tìm đoạn liên quan rồi trả lời. Cách đó hoạt động, nhưng LLM phải "khám phá lại" tri thức từ đầu mỗi lần hỏi — không có gì được tích lũy.

Ở đây làm khác: mỗi khi có một ghi chú/bài giảng mới của thầy Long, Claude sẽ **đọc, trích xuất ý chính, và tích hợp vào wiki đang có** — cập nhật trang chủ đề, trang khái niệm, trang tổng hợp, ghi nhận chỗ nào bổ sung hay mâu thuẫn với những gì đã ghi trước đó. Tri thức được biên soạn một lần và giữ luôn cập nhật, không phải suy luận lại mỗi lần hỏi.

Bạn không tự viết wiki — Claude viết và bảo trì toàn bộ. Việc của bạn là: mang nguồn vào (`raw/`), trò chuyện, đặt câu hỏi hay, và đọc kết quả.

## Cấu trúc thư mục

```
raw/            # Nguồn thô, bất biến — Claude chỉ đọc, không bao giờ sửa
  ghi-chu-ca-nhan/   # Ghi chú các buổi hỏi-đáp với thầy Long (nguồn chính)
  bai-giang/         # Transcript bài giảng (nếu có, dạng text)
  bai-viet/          # Bài viết, tài liệu văn bản khác

wiki/           # Tri thức do Claude biên soạn và bảo trì — đây là "sản phẩm" chính
  index.md           # Mục lục toàn bộ wiki, theo danh mục
  log.md             # Nhật ký các lần ingest/hỏi/lint, theo thời gian
  gioi-thieu-thay-long.md  # Trang "nhân vật" trung tâm: thầy Long là ai, dạy gì
  chu-de/            # Mỗi chủ đề lớn một trang (kinh doanh, tư duy, v.v.)
  khai-niem/         # Khái niệm/thuật ngữ/mô hình cụ thể thầy Long hay nhắc
  hoi-dap/           # Tóm tắt từng buổi hỏi-đáp đã ingest
  tong-hop/          # Bài tổng hợp, so sánh, phân tích do bạn hỏi và Claude viết ra

CLAUDE.md       # "Luật chơi" — quy ước cấu trúc & quy trình cho Claude khi làm việc với wiki này
```

## Cách dùng nhanh

1. **Thêm nguồn**: bỏ ghi chú mới vào `raw/ghi-chu-ca-nhan/` (đặt tên `YYYY-MM-DD-chu-de-ngan-gon.md`), rồi nói với Claude: *"Ingest ghi chú mới trong raw/ghi-chu-ca-nhan/..."*
2. **Hỏi wiki**: hỏi thẳng câu hỏi, Claude sẽ đọc `wiki/index.md` trước để tìm trang liên quan rồi tổng hợp câu trả lời có trích dẫn.
3. **Rà soát định kỳ**: thỉnh thoảng nhờ Claude "lint" wiki — tìm mâu thuẫn, trang mồ côi, khái niệm bị thiếu trang riêng.

Chi tiết quy trình và quy ước xem trong [`CLAUDE.md`](./CLAUDE.md).
