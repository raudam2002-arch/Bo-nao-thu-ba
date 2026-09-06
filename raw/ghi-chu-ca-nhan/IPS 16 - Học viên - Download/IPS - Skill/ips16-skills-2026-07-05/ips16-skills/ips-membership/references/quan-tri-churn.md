# Quản trị churn — chỗ continuity sống hay chết

Phần **KHÔNG được bỏ** của mọi spec sản phẩm liên tục. Nguồn: giáo án [[M9.4 - Continuity Sản phẩm dịch vụ liên tục]] (mục 5 — quản trị churn) + sai lầm phổ biến concept [[Sản phẩm tiêu dùng liên tục → High-End funnel]].

## Vì sao churn quyết định sống chết

Continuity có một mặt trái: nếu bán lần đầu là cánh cửa vào, thì **churn — tỉ lệ khách huỷ** — là **cái lỗ rò ở đáy thùng**. Bạn đổ khách mới vào miệng phễu bao nhiêu cũng vô nghĩa nếu khách cũ rỉ ra ở đáy nhanh hơn.

> Sai lầm chết người trong tài liệu phát: *"continuity không có quản trị churn"*. Bán continuity rồi quên đo churn = đổ nước vào thùng thủng.

Toàn bộ phép màu compound + CAC-một-lần ở `bon-cau-hoi-handout.md` chỉ thành hiện thực **nếu khách ở lại đủ lâu**. Số kỳ trung bình khách ở lại tụt → CLV tụt → cả mô hình sụp. Vì thế churn không phải việc làm sau — nó là một phần của spec.

> **Frame R × R = R vô cùng** ([[R x R = R vô cùng - Result Retention Revenue infinite EC17.5]]): lợi nhuận = Result × **Retention**. Churn là nghịch đảo của Retention — churn cao = nhân tử Retention thấp = Result × (gần 0) = doanh thu gần 0 dù Result tốt mấy. PTL: *"Bạn làm có kết quả sau đó bạn duy trì cái việc làm này thì bạn có lợi nhuận vô cùng"* (EC17.5 chunk 25). Quản trị churn = bảo vệ nhân tử Retention.

> **Forced touchpoint vật lý là vũ khí chống churn rẻ nhất** (case [[Cô Vân Lộc Nước]]): lõi 3/6/9 tháng + dịch vụ vệ sinh máy nhỏ ($20→$10) không bán vì lợi nhuận dịch vụ — bán để **giữ điểm chạm vật lý** mỗi quý. Mỗi lần thợ đến nhà = một nhịp xây trust + một cơ hội thấy sớm khách sắp rời. Thiết kế "lý do gặp lại" định kỳ rẻ hơn nhiều so với win-back sau khi đã mất.

## 3 việc quản trị churn BẮT BUỘC

Một spec continuity chưa có đủ 3 việc này = **chưa xong** (cổng chống bịa #6).

### 1. Theo dõi churn hằng tháng

Mỗi tháng có bao nhiêu phần trăm khách huỷ? Con số này phải nằm trên **bảng điều khiển** của bạn, theo dõi **ngang hàng doanh thu**. Không đo thì không quản được.

- Định nghĩa churn rate đơn giản: `% khách huỷ trong tháng = số khách huỷ tháng / số khách đầu tháng`.
- Đo từ **tháng đầu tiên** để có **baseline** — không có baseline thì không biết đang tốt lên hay xấu đi.
- Đặt mục tiêu churn trần (vd "giữ dưới X%/tháng") — nhưng đừng bịa con số X nếu chưa có dữ liệu; để người làm chốt sau khi có baseline.

### 2. Phỏng vấn thoát (exit survey)

Khi khách huỷ — hỏi cho bằng được **tại sao**. Người càm ràm bỏ đi im lặng rồi đi chửi bên ngoài; doanh nghiệp khôn thì **mở một cái cửa cho khách nói ra lý do** — vừa để cứu khách đó, vừa để sửa sản phẩm cho những khách sau.

- Đặt một exit survey **ngắn (3 câu)** ở **mọi điểm huỷ**: câu hỏi lõi *"điều gì khiến bạn ngừng?"* + 1 câu "thiếu gì để bạn ở lại?" + 1 câu mở.
- Gom lý do huỷ thành nhóm → lý do nào lặp nhiều nhất = chỗ sửa sản phẩm trước.

### 3. Chiến dịch kéo khách quay lại (win-back)

Khách đã huỷ **không phải đã chết** — họ là tệp **ấm nhất** bạn có (từng trả tiền, từng tin). Một chuỗi tự động nhắc lại giá trị + một ưu đãi quay lại đúng lúc sẽ kéo về một phần đáng kể. Đây cũng là "marketing vào dữ liệu đã có" (EC17.5): blast tới database cũ rẻ hơn nhiều lần acquire khách lạ qua quảng cáo — khách đã huỷ có CAC ≈ 0.

- Phác một chuỗi **win-back đơn giản 2–3 lần chạm**:
  1. **Chạm 1 — nhắc giá trị đang bỏ lỡ** (cái họ đã có mà giờ mất): "tháng này hội viên nhận được X, Y, Z mà bạn đang vắng".
  2. **Chạm 2 — ưu đãi quay lại có thời hạn** (đòn bẩy thời gian, đừng để treo vô hạn): "quay lại trong 7 ngày được giữ giá cũ / tặng kỳ đầu".
  3. **Chạm 3 — "cửa vẫn mở"** (chạm cuối, low-pressure, để lại thiện cảm dù họ không quay): "khi nào cần, bạn luôn được chào đón lại".
- Việc viết nội dung chuỗi này → **bàn giao** cho skill content/email (brief trong spec, không tự viết ở đây).
- **KHÔNG bịa tỉ lệ win-back** ("kéo về 30%"…) trừ khi người làm có data thật — để trống hoặc nhãn ước lượng.

## Tâm lý "mặc định lặp lại" — dùng tử tế

Khi một khoản chi trở thành **mặc định lặp lại** (tự động trừ tiền, tự động gia hạn), khách **không phải ra quyết định mua lại mỗi kỳ** — và con người ngại ra quyết định lặp đi lặp lại, nên cứ để nguyên.

Tận dụng điều này một cách **tử tế**: làm việc **ở lại** dễ dàng và đáng giá, KHÔNG làm việc **rời đi** khó khăn một cách gài bẫy (huỷ phải gọi tổng đài 10 lần, ẩn nút huỷ…). Gài bẫy giữ chân tạm thời nhưng đẻ ra review xấu + chửi bên ngoài → hỏng thương hiệu dài hạn. Khách ở lại bền vì **mỗi kỳ vẫn nhận đủ giá trị** — đó là lý do bảng tính năng→lợi ích khớp hồ sơ khách #1 (xem `tinh-nang-loi-ich-khop-persona.md`) là gốc của giữ chân, không phải thủ thuật khoá huỷ.

## 5 sai lầm phổ biến (+ cách sửa)

1. **Bán continuity rồi quên đo churn.**
   → Sửa: đưa churn rate hằng tháng lên bảng điều khiển, ngang hàng doanh thu. Đo từ tháng đầu để có baseline.
2. **Khách huỷ mà không hỏi vì sao.**
   → Sửa: bắt buộc một exit survey ngắn (3 câu) ở mọi điểm huỷ — *"điều gì khiến bạn ngừng?"*.
3. **Không có chu kỳ "buộc quay lại".**
   → Sửa: thiết kế tiêu hao theo chu kỳ (lõi 3/6/9 tháng) hoặc giao định kỳ / gia hạn tự động — mua một lần rồi khách tự quên là mất tần suất.
4. **Đặt continuity ngay ở miệng phễu làm món thu hút đầu tiên.**
   → Sửa: continuity thu rất ít tiền ngay lúc đầu — đặt nó làm cửa vào sẽ làm dòng tiền 30 ngày đầu **sụp**, khó quảng cáo có lãi. Để continuity **phía sau**, sau khi đã gặt tiền mặt từ Front-End + upsell.
5. **Coi nhẹ continuity vì "giá thấp quá".**
   → Sửa: tính theo CLV và **số kỳ × số khách ở lại**, không tính theo giá một kỳ.

## Nối với 5 bước làm theo (tóm tắt M9.4)

1. **Chọn món có nhu cầu lặp lại** (tiêu hết-mua-lại / tiêu hao theo chu kỳ / membership).
2. **Trả 4 câu hỏi handout**: khách mục tiêu → sản phẩm + lợi ích mỗi kỳ → chu kỳ tái sử dụng → giá mỗi kỳ.
3. **Cài cơ chế "buộc quay lại"**: lõi tiêu hao theo lịch / giao hàng định kỳ / gia hạn tự động.
4. **Lắp 3 việc quản trị churn**: bảng theo dõi churn hằng tháng + exit survey ở điểm huỷ + chuỗi win-back tự động.
5. **Đặt đúng vị trí trên thang giá trị**: continuity nằm **sau** Front-End/upsell, không ở miệng phễu.
