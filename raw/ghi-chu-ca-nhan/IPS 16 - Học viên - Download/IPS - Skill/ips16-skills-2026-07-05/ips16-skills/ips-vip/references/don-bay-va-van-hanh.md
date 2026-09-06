# Đòn bẩy + cơ chế vận hành VIP (M9.5 + M5.6) — làm cho tier CHẠY

Hai bảng (Điều kiện + Lợi ích) là *thiết kế*; phần này là *làm cho chạy*. Nguồn: giáo án `M9.5` (2 đòn bẩy, lên/xuống hạng), `M5.6` (4 bước thiết kế, 2 quy tắc bất di, 5 case).

## Map đặc quyền ↔ hai đòn bẩy
Mỗi đặc quyền sinh ra để siết một trong hai cần. Đánh dấu rõ trên Bảng Lợi ích:
- **Đòn bẩy 4 — Tần suất.** Perk kéo khách quay lại thường hơn để giữ/lên hạng (giảm giá theo lần mua, quà mốc tần suất, ngưỡng lên hạng tính bằng số lần).
- **Đòn bẩy 5 — Biên premium / LTV.** Perk cho phép thu giá cao hơn (đặc quyền danh vọng, phục vụ riêng, access độc quyền — khách trả thêm để có, không so kè giá).

Một tier khoẻ có cả hai loại; nếu bảng toàn perk đòn bẩy 4 → tier chỉ tăng tần suất mà không nâng được biên, và ngược lại.

## Cơ chế lên/xuống hạng — khoá dòng tiền đều (M5.6 + pattern Bông Sen Vàng)
- **Nâng hạng TỰ ĐỘNG ngay khi chạm ngưỡng** + báo tin + quà chào mừng. ĐỪNG bắt khách chờ xét duyệt cuối năm — giữ cho khách luôn có cảm giác "mình đang lên".
- ⭐ **Kỳ duy trì + tự xuống hạng (số thật Bông Sen Vàng):** mỗi hạng có **kỳ xét hạng 12 tháng**; không đạt lại ngưỡng → **tự động xuống hạng** thấp hơn (nguyên văn raw VNA: *"thẻ hội viên sẽ tự động xuống hạng thấp hơn"*). Nên có **1 hạng cửa-vào-không-mất** (Bạc — không thời hạn) + **1 hạng đỉnh trọn đời** (Triệu dặm) thưởng lòng trung thành tuyệt đối. Chi tiết: `references/case-bong-sen-vang.md` mục 3.
- **Tier có thể TỤT** nếu không duy trì doanh số. PTL: bay nhiều thì lên titan, năm sau bay ít *"nó cho xuống hội viên vàng rồi"*. Áp Eagle Club: *"không duy trì membership thì coi như người bình thường, bị đối xử như người bình thường"*. → Tier tụt được = khách phải mua đều để giữ vị thế = khoá dòng tiền đều (khoá *cái tôi*: leo lên rồi sợ rớt).

## ⭐ GET hội viên qua đối tác (pattern Bông Sen Vàng) — chiêu mộ, không chỉ giữ
VIP không chỉ là công cụ **giữ** khách — Bông Sen Vàng còn dùng nó để **chiêu mộ** hội viên mới qua kênh đối tác (`references/case-bong-sen-vang.md` mục 6):
- **Nâng hạng từ đối tác:** VNA cho khách dùng dịch vụ **8 ngân hàng (Vietcombank, Techcombank, VPBank, VietinBank, VIB, Standard Chartered, Sacombank) + MobiFone** được nâng hạng → mượn database đối tác làm nguồn hội viên. Áp DN: bắt tay đối tác để khách thân thiết của họ vào thẳng một hạng của mình.
- **Phiên ngang / status match:** VNA cho khách cư trú ngoài VN **phiên ngang** hạng đang sở hữu **từ hãng khác** sang hạng Bông Sen Vàng tương ứng → **cướp khách VIP đã được đối thủ "huấn luyện"**. Áp DN: "anh đang VIP bên đối thủ? Đưa bằng chứng, tôi cho hạng tương đương ngay."
- **Nhân dặm xét hạng (boost):** đối tác giúp khách lên hạng nhanh hơn.
> → Đây là chỗ VIP giao với **JV/liên doanh (`ec-lien-doanh`)** + **Referral (`ec-gioi-thieu-khach`)**. Skill NÀY chỉ **ghi nhận cơ chế get** vào bản thiết kế; thiết kế JV/referral đầy đủ là việc skill kia.

## Hệ thống con người giữ lời hứa (M5.6 bước 4) — chỗ phần lớn DN gãy
Bốn bước thiết kế tier của M5.6: (1) rõ đối tượng → (2) sản phẩm dành riêng → (3) trải nghiệm & quy trình nội bộ → (4) **dựng hệ thống con người để duy trì**. Bước 4 là chỗ gãy: *hứa premium nhưng không có đội ngũ riêng giữ lời hứa, nên tier sụp*. Bắt buộc **phân công ai chăm tier cao** (như tiếp viên màu vàng riêng cho Bông Sen Vàng) trước khi mở tier.

## Hai quy tắc bất di (M5.6) — không nhân nhượng

### Quy tắc 1 — Ưu đãi tất cả, TRỪ tín dụng
*"Bạn luôn có ưu đãi dành cho họ, nhưng không bao giờ dành cho họ ưu đãi về tín dụng."* Khách VIP được perk, giá tốt hơn, phục vụ riêng — **nhưng không được mua nợ, không được trả sau**. Khoảnh khắc cho khách lớn nhất nợ = đặt dòng tiền cả DN vào tay họ. VIP vẫn áp song song nguyên tắc bán-thu-tiền-trước, không ngoại lệ.

### Quy tắc 2 — Flip vị thế
Câu chốt signature PTL: *"Ai là khách hàng cao cấp của tôi? Eagle Camp là khách hàng cao cấp của tôi."* Anh không đợi khách lẻ chen vào — anh **chủ động CHỌN** ai là khách cao cấp mình muốn phục vụ, rồi phục vụ tới mức họ ngồi vị trí trang trọng. Tinh thần **cá lớn ao nhỏ**: chủ DN chọn ao, chọn cá, không bị động chấp nhận bất kỳ ai trả tiền. (Đối chiếu GBI Mac Attram: phân loại ngược / take-away "đây không dành cho mọi người" — cùng nguyên lý lọc khách, không van xin khách. Cảnh báo: khan hiếm + neo giá phải THẬT, scarcity giả làm sập độ tin cả tier. KHÔNG gán cho PTL.)

## Phân vai với Continuity (9.4) — ghép tầng, không loại trừ
Nếu người làm đã có gói trả định kỳ (continuity), ghi rõ VIP **ghép tầng lên trên**: continuity = *sàn doanh thu đều* (khoá ví tiền); VIP = *trần* kéo nhóm tinh hoa chi nhiều hơn (khoá cái tôi). KHÔNG thiết kế lại cơ chế trừ tiền ở đây (đó là việc skill ec-san-pham-lien-tuc / module 9.4).

## 5(+) case khuôn mẫu (KHUÔN ĐỂ SOI — KHÔNG để chép)
Tài liệu Eagle Camp nêu năm chương trình thành viên thật ở năm ngành rất khác; concept [[Membership Program Design]] (RF4) bổ sung Costco + Amazon Prime với số liệu cụ thể. Để thấy cùng một khung "Điều kiện + Lợi ích" vận hành khắp nơi:

| Case | Ngành | Định ngưỡng theo | Số liệu / bài học khuôn |
|---|---|---|---|
| **Bông Sen Vàng** (VNA + Sky Team) ⭐ **case worked → `case-bong-sen-vang.md`** | Hàng không | **Tiêu chí KÉP**: dặm (chi tiêu) HOẶC chặng (tần suất) | 5 hạng: Bạc → Titan 15k dặm/18 chặng → Vàng 30k/27 → Bạch kim 50k/45 → Triệu dặm 1M lifetime. Kỳ duy trì 12 tháng + tự xuống hạng. 7 nhóm quyền lợi · leo thang perk (+30%→+100% dặm, mời 1→3 khách) · get qua đối tác (8 NH + MobiFone + status match) · giảm 20% tiêu chí cho 60+. *(Số THẬT trang chính thức VNA)* |
| **ACFC** | Bán lẻ thời trang (Nike/Levi's/Mango/Tommy) | Tiền chi tiêu/năm | Silver 15tr/Gold 40tr/Platinum 80tr/Diamond 120tr — thẻ *xuyên brand*, thang nhảy cấp số nhân |
| **Golden Gate / Golden Spoon** | Chuỗi nhà hàng (Sumo BBQ/GoGi/Vuvuzela/Kichi Kichi/Hadilao) | Tiền chi tiêu | 1 thẻ dùng *xuyên thương hiệu* trong tập đoàn — nhiều dòng/chi nhánh gắn kết một tier |
| **El Pollo Loco** | Gà nướng Mexico-American (Mỹ) | Tần suất | Loyalty cho ăn uống bình dân — VIP *không chỉ cho hàng xa xỉ* |
| **VPBank Private Banking Diamond Elite** | Ngân hàng | AUM 20 tỷ HOẶC CASA 5 tỷ | Tier *đỉnh tháp*: nhận diện 300 chi nhánh, phòng VIP, phòng chờ 21 sân bay, hạn mức Visa 1 tỷ, family banking, hoàn tiền không giới hạn, personal banker chuyên trách |
| **Costco** (mở rộng RF4) | Bán lẻ kho | Phí thẻ $60–120/năm | 100M thành viên × ~$100 ≈ $10 tỷ ≈ **~72% lợi nhuận ròng** — membership = *dòng doanh thu chính* (exception, không phải rule) |
| **Amazon Prime** (mở rộng RF4) | E-commerce | Phí $14–15/tháng | Bundle ship 2 ngày + phim/nhạc/sách → khách không huỷ vì sợ mất quyền lợi (chi phí chìm) |
| **Eagle Club** (PTL) | Đào tạo | Tier cao nhất hệ sinh thái | "Bông Sen Vàng" của PTL: waiver học phí cross-program + ghế đầu + thẻ riêng + thương thảo khách sạn |

**Bài học chung**: bảy+ ngành đều dùng đúng một bộ khung *Điều kiện + Lợi ích* → khung không kén ngành; việc của người làm chỉ là điền hai bảng cho đúng sản phẩm của mình. *(Số liệu/quy mô các brand này là benchmark tham khảo — KHÔNG cam kết kết quả; KHÔNG bê y nguyên ngưỡng/perk của họ.)*

## Hai second-order benefit (ngoài revenue trực tiếp từ tier)
- **Price anchoring** — Premium tier (Mức 4) làm Mức 2–3 trông "rẻ" hơn trong mắt mass market → tăng CR cho cả tệp thường. Eagle Camp ladder PTL nêu (vd 19.8M→28M→38M→68M→98M) là filter, không phải obstacle. *(Số ladder là số PTL nêu trong nguồn — tính lại theo giá thật của người làm, KHÔNG bê y nguyên.)*
- **Raving Fan engine** — *"càng đặc biệt bao nhiêu bạn càng dễ dàng có Raving Fan mới"* (PTL 30TC C32). Premium tier sản xuất referral; đếm số Raving Fan / Premium customer / năm làm KPI.
- **Dồn lực 80/20** — dồn phần lớn effort marketing + service vào nhóm ~20% Premium (LVC cao nhất tệp). ⚠️ PTL chưa dạy ratio chính xác — trình bày như nguyên tắc dồn lực, KHÔNG khẳng định con số tuyệt đối.

## Các bước làm theo (chốt M9.5)
1. **Lọc top 10–20%** khách giá trị cao nhất (tổng chi tiêu / số lần mua 12 tháng).
2. **Lập Bảng Điều kiện**: 3–4 hạng tên signature + chọn 1 cách định ngưỡng + con số cụ thể đo được.
3. **Lập Bảng Lợi ích**: ≥10 đặc quyền xếp tăng dần, mỗi cái nối gain/pain (#1), trộn perk tiền + không-tiền.
4. **Đặt tên hạng có signature.**
5. **Cài cơ chế lên hạng tự động** + cơ chế tụt hạng + phân công đội ngũ chăm tier + áp 2 quy tắc bất di.
