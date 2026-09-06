# Bảng tính năng → lợi ích KHỚP hồ sơ khách #1 + tần suất + giá

Đây là bước **giá trị nhất** của skill — biến một món thành sản phẩm liên tục mà **mỗi lời hứa lợi ích có một khách thật đứng sau**. Nguồn: giáo án [[M9.4 - Continuity Sản phẩm dịch vụ liên tục]] (câu hỏi handout #2 + #3 + #4) + nguyên tắc tính năng→lợi ích khớp persona dùng chung hệ EC.

## Vì sao phải khớp hồ sơ khách #1

Câu hỏi handout #2 — *"sản phẩm/dịch vụ là gì và lợi ích gì?"* — dễ trả lời ẩu: liệt một mớ tính năng rồi gọi đó là "lợi ích". Nhưng continuity sống nhờ khách **trả tiền lặp lại mỗi kỳ** — và khách chỉ trả lặp lại nếu **mỗi kỳ vẫn nhận đủ giá trị họ thật sự cần**. Giá trị "thật sự cần" = các **gain** (mong muốn) và **pain** (nỗi đau) đã ghi trong hồ sơ khách #1 (`persona-<slug>.md`).

→ Quy tắc cứng: **mỗi lợi ích phải trỏ về một gain/pain cụ thể** trong hồ sơ khách #1. Lợi ích không nối được vào nhu cầu nào = lời hứa rỗng → khách hết háo hức → huỷ → churn tăng.

## Phân biệt TÍNH NĂNG vs LỢI ÍCH

- **Tính năng** = thứ sản phẩm CÓ (thành phần, dung tích, số buổi, tính năng app, tần suất giao, chế độ bảo hành…). Mô tả sản phẩm.
- **Lợi ích** = thứ khách ĐƯỢC, diễn đạt theo **đời sống của khách**, và vì là continuity → diễn đạt theo **mỗi kỳ**. Trả lời "vậy thì sao?" của tính năng.

Ví dụ:
- Tính năng: *"lõi lọc cấp 1 thay mỗi 3 tháng"* → Lợi ích: *"mỗi quý nước nhà vẫn sạch, không phải lo con uống nước bẩn"* → khớp **pain**: "lo sức khoẻ gia đình" trong hồ sơ khách.
- Tính năng: *"hộp TPCN 30 viên/tháng"* → Lợi ích: *"đủ dùng đúng 1 tháng, hết là có hộp mới về, không bao giờ đứt liều"* → khớp **gain**: "duy trì thói quen chăm sóc sức khoẻ đều đặn".
- Tính năng: *"app nhắc lịch uống"* → Lợi ích: *"không phải nhớ, app nhắc — hợp người bận"* → khớp **pain**: "hay quên / quá bận".

## Bảng tính năng → lợi ích → khớp nhu cầu (điền được)

| Tính năng (sản phẩm CÓ gì) | Lợi ích (khách ĐƯỢC gì mỗi kỳ) | Khớp nhu cầu khách #1 (gain/pain cụ thể) |
|---|---|---|
| [đặc điểm vật lý/dịch vụ] | [diễn ra trong đời khách, mỗi kỳ] | → [gain/pain nào trong `persona-<slug>.md`] |
| ... | ... | ... |

**Quy tắc điền:**
1. Mỗi dòng đi từ trái sang phải: có tính năng → diễn dịch thành lợi ích đời-thực mỗi-kỳ → tìm gain/pain khớp trong hồ sơ khách #1.
2. Cột 3 phải trỏ về một item **cụ thể, trích được** trong `persona-<slug>.md` — không nói chung chung "khách thích tiện lợi" nếu hồ sơ khách không có item đó.
3. Tính năng nào **không nối được** vào gain/pain nào → ghi **"CHƯA NỐI ĐƯỢC NHU CẦU"** ở cột 3. Đây là **cờ đỏ**: hoặc (a) cắt tính năng đó khỏi spec (khách không cần, đừng tốn chi phí làm), hoặc (b) đào lại hồ sơ khách xem có nhu cầu thật nào bị bỏ sót. **TUYỆT ĐỐI không bịa một gain/pain mới chỉ để cho khớp** (cổng chống bịa #1).
4. Không có hồ sơ khách #1 → cả cột 3 để `[?]` + đề nghị chạy `ec-ho-so-khach-hang` trước.

**Kiểm chéo ngược lại:** lướt qua các gain/pain TOP trong hồ sơ khách — có gain/pain quan trọng nào **chưa lợi ích nào phục vụ** không? Nếu có → đó là cơ hội thêm tính năng (gắn `[đề xuất]`) hoặc dấu hiệu món này chưa hợp với tệp khách.

## Ví dụ continuity-set thực tế PTL nêu (EC18.4 — case nha sĩ)

PTL minh hoạ continuity bằng bộ sản phẩm nha sĩ riêng (EC18.4 C028:84–92): **kem đánh răng + bàn chải + nước súc miệng** mang thương hiệu phòng khám → khách dùng hết lại mua → tiêu hao tự nhiên (đặc tính 1) + tăng điểm chạm trung thành. Đây là pattern "lắp cái máy bán cái lõi" áp vào dịch vụ: khám răng (front-end) → bộ chăm sóc tiêu hao (continuity). Dùng làm khuôn khi người làm là dịch vụ "một lần xong" cần một món tiêu hao đi kèm.

Các continuity khác PTL liệt cùng đoạn: đồ ăn, quần áo thời trang, **sạc pin/dây sạc tiêu hao**, thuốc chữa bệnh trọn đời, mật ong/rượu bổ sung định kỳ — mỗi món là một "lý do quay lại" gắn vào một tệp khách có nhu cầu lặp.

## Quy tắc vàng — mỗi lợi ích khớp gain/pain hồ sơ khách #1 là GỐC của giữ chân

Đây không phải bước trang trí. Continuity sống nhờ khách **trả lặp lại mỗi kỳ**, và khách chỉ trả lặp lại nếu **mỗi kỳ vẫn nhận đủ giá trị họ thật sự cần**. Một lợi ích không nối được vào gain/pain nào = lời hứa rỗng → khách hết háo hức → huỷ → churn tăng. Vì thế bảng này là **gốc của quản trị churn** (xem `quan-tri-churn.md`), không phải thủ thuật khoá huỷ. Giữ chân bằng giá trị thật > giữ chân bằng rào cản huỷ.

## Tần suất / chu kỳ tái sử dụng (câu hỏi #3 — đòn bẩy 4)

Câu hỏi handout #3 — *"mức độ tái sử dụng bao nhiêu?"* — định ra **khi nào khách quay lại**. Đây là **đòn bẩy 4 (Frequency)**.

Chốt rõ:
- **Chu kỳ**: hằng tháng / mỗi quý / mỗi năm? Lõi 3 tháng hay 9 tháng? Hộp giao mỗi tháng?
- **Cơ chế "buộc quay lại"** (BẮT BUỘC ghi rõ — mua một lần rồi khách tự quên là mất tần suất):
  - **Lõi tiêu hao theo lịch** — lõi lọc nước 3/6/9 tháng, đầu bàn chải điện…
  - **Giao hàng định kỳ** — monthly box tự gửi, TPCN auto-ship mỗi tháng…
  - **Gia hạn tự động** — subscription trừ tiền hằng tháng, membership gia hạn yearly…
- **Tự động hoá nhịp**: càng tự động (lịch giao tự động, gia hạn tự động, app nhắc lõi đến hạn) thì F càng ổn định **mà không tốn thêm công bán**.

## Giá mỗi kỳ (câu hỏi #4 — đòn bẩy 5 / LTV)

Câu hỏi handout #4 — *"giá cả thế nào?"* — định **giá định kỳ**. Đây là **đòn bẩy 5 (Margin / LTV)**.

- Giá đủ **thấp để khách dễ gật** (continuity giá thường thấp, rào cản mua thấp), nhưng đủ để **cộng dồn thành dòng tiền đáng kể**.
- **Nguyên tắc cốt lõi**: sức mạnh ở **số kỳ × số khách ở lại**, KHÔNG ở giá một kỳ. Đừng coi nhẹ continuity vì "giá rẻ quá".
- Giá lấy từ **biên/giá sản phẩm thật** (artifact #2 hoặc người làm cho). Chưa có → `[?]` + hỏi, không bịa (cổng chống bịa #3).

## CLV minh hoạ (tuỳ chọn — để thấy bằng con số)

Để cho thấy vì sao continuity đáng đầu tư dù giá kỳ thấp, phác **CLV (giá trị trọn đời của khách)**:

```
CLV ≈ giá mỗi kỳ  ×  số kỳ trung bình khách ở lại
```

Ví dụ minh hoạ (giả định — KHÔNG cam kết): lõi 300k/quý × trung bình khách ở lại 8 quý (2 năm) = **2,4 triệu CLV** từ một khách — trong khi cái máy lọc bán đứt lúc đầu chỉ lời vài trăm nghìn. → continuity là chỗ tiền thật.

**Bắt buộc dán nhãn** mọi con số: *"(ước lượng — cách tính: giá kỳ × số kỳ giả định N)"*. Số kỳ trung bình khách ở lại là **giả định** trừ khi người làm có dữ liệu churn thật. So CLV với lợi nhuận một thương vụ bán đứt để thấy chênh lệch.

## Tâm lý — vì sao khách chịu trả đều đặn

Khi một khoản chi trở thành **mặc định lặp lại** (tự động trừ tiền, tự động gia hạn), khách **không phải ra quyết định mua lại mỗi kỳ** nữa — và con người vốn ngại ra quyết định lặp đi lặp lại, nên họ cứ để nguyên. Thiết kế nên tận dụng điều này một cách **tử tế**: làm việc ở lại **dễ dàng và đáng giá**, KHÔNG phải làm việc rời đi khó khăn một cách gài bẫy. Khách ở lại vì **mỗi kỳ vẫn nhận đủ giá trị** — đó mới là continuity bền (và cũng là vì sao bảng tính năng→lợi ích khớp #1 ở trên là sống còn).
