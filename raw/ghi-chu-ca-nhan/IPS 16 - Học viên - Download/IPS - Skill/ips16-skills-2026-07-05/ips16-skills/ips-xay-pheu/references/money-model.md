# Money Model (9.10) — kinh tế dòng tiền của phễu

Module CHỐT của Phần 9. Sau khi dựng 8 thành phần phễu, module này trả lời "*vì sao* nó chạy?" bằng động cơ kinh tế: đọc lại toàn bộ cái thang bằng **con số dòng tiền**. Nguồn: giáo án `M9.10`; concept [[Công thức tài chính triệu đô]] · [[Phễu sản phẩm]] · [[Hệ thống phễu marketing Eagle Camp]].

> ⚠️ **Cổng chống bịa số.** Mọi con số dưới đây: lấy từ dữ liệu thật người làm cung cấp, hoặc là **giả định minh hoạ** dán nhãn **"(ước lượng — cách tính)"** / **"(minh hoạ — không cam kết)"**. Không chế CVR/giá/doanh thu. Tra không ra → để `[?]` + hỏi. Nguyên tắc "tiền ở phía sau" + đo bằng LVC là tự đóng gói PTL; CFA/Money Model/Break-even (Hormozi/Brunson) chỉ đối chiếu. Con số LVC 45 USD, CAC 20 USD, vòng vốn 30 ngày là **MỤC TIÊU thiết kế + minh hoạ tạo lực, KHÔNG phải con số HIỆN TẠI mặc định có** — người làm phải tự đo trên kênh của chính mình.

## "Tiền ở phía sau" — và vì sao đúng về MẶT SỐ

Suốt Phần 9 PTL nói đi nói lại: **F.E. không phải để kiếm tiền, nó để tạo giao dịch đầu tiên; tiền nằm ở những thành phần phía sau** ([[Hệ thống phễu marketing Eagle Camp]]).

> *"Tôi không bao giờ nghĩ đến chuyện bán một sản phẩm hết — không bao giờ bán một sản phẩm, phải bán nhiều lần. Vì cái chi phí để đầu tư ban đầu ấy nó đắt đỏ."* — PTL ([[Phễu sản phẩm]], dẫn DTSGC 72 d35524–35528)

Đây là module chứng minh câu đó **không phải câu nói hay — mà là một phép tính**. Câu hỏi cốt lõi cả buổi: *trong 30 ngày, một khách đem về đủ tiền để đi lấy thêm bao nhiêu khách nữa?*

**Điểm chốt:** Một sản phẩm đầu phễu lỗ vốn vẫn **đúng**, miễn là cả thang phía sau kéo tổng tiền thu từ một khách lên **cao hơn** chi phí lấy khách. Phễu không phải để bán một món — phễu là **cái máy in tiền có kỷ luật về con số**.

## 1. LVC — mỗi lead của bạn đáng bao nhiêu?

Trước khi nói "dám chi bao nhiêu để có một khách", phải biết **một khách đáng bao nhiêu**. LVC = giá trị một lead đem lại khi đi qua *toàn bộ* thang sản phẩm, KHÔNG đo bằng đơn đầu tiên.

```
LVC = Σ (số người đạt bậc i × giá bậc i)  ÷  số lead đầu vào
```

Bảng 5 tầng (case [[Phễu sản phẩm]], dẫn KDDP d4045–4106 — **minh hoạ**):

| Tầng | Giá ví dụ | Vào tầng (từ 1.000 lead) | Doanh thu tầng |
|---|---|---|---|
| 1 — Free (mồi câu) | 0 | 1.000 người | 0 |
| 2 — Entry | 50 USD | 100 người (10%) | 5.000 USD |
| 3 — Validate | 200 USD | 50 người | 10.000 USD |
| 4 — Core (upsell) | 1.000 USD | 20 người | 20.000 USD |
| 5 — Backend high-end | 10.000 USD | 1 người | 10.000 USD |
| **Tổng** | | | **45.000 USD** |

Một ngàn lead miễn phí, dẫn qua đủ năm bậc, đẻ ra **45.000 USD**. Chia ngược: **45.000 ÷ 1.000 = 45 USD mỗi lead** = LVC. *"Mỗi một cái lead miễn phí của tôi đáng giá 45 đô la"* (tinh thần [[Phễu sản phẩm]]).

Con số này lật úp cách một người mới nghĩ về marketing. Người chưa có phễu nhìn một lead miễn phí: *"thằng này có trả tôi xu nào đâu."* Người có phễu nhìn đúng cái lead đó: **45 đô đang đi tới**. Cùng một con người bước vào cửa, hai chủ DN định giá lệch nhau bằng cả một thang sản phẩm.

**Ẩn dụ — quán cà phê:** Chủ A nhìn khách lần đầu gọi ly 30 nghìn, nghĩ "lời mấy đồng". Chủ B nhìn đúng khách đó nghĩ "nếu ông này thấy ngon, một tháng quay lại 8 lần, rủ thêm bạn, mua bánh, mua cả gói cà phê mang về" → trong đầu B, ông khách đáng **vài triệu một năm**. B sẵn sàng tặng ly đầu tiên miễn phí để có ông khách đó. A thì không dám. Khác nhau không nằm ở ly cà phê — ở chỗ B **biết mỗi khách đáng bao nhiêu khi đi hết hành trình**.

## 2. CAC — dám chi bao nhiêu để có một khách?

**CAC** = chi phí để có một khách (tiền quảng cáo + tiền chạy mồi câu chia trên số lead về).

```
CAC trần < LVC × biên an toàn
```

> Chừng nào **LVC còn cao hơn CAC**, mỗi đồng bỏ vào quảng cáo còn đẻ ra hơn một đồng — và bạn còn được phép chi tiếp.

Con số của ta: LVC = 45 USD/lead. PTL chốt thẳng trong hội trường — **sẵn sàng chi tới 20 USD quảng cáo để có một lead miễn phí** ([[Phễu sản phẩm]], dẫn KDDP d4045–4106). Chi 20, thu về 45, còn lại 25 đô lãi gộp trên mỗi lead. Mỗi đồng đẻ hơn hai đồng.

Câu mở của buổi: *một người dám chi 5.000đ để có một khách, một người dám chi 500.000đ — người chi 500.000đ thắng.* Không phải vì liều hơn, mà vì **phễu của ông ta nâng LVC lên đủ cao để 500.000đ vẫn nằm dưới LVC**. Ông ta không đốt tiền — ông ta đang mua tiền với giá rẻ. Người chỉ dám chi 5.000đ là người chưa xây phễu.

Nối thẳng về 9.1: F.E. *được phép* lỗ chính vì khoản lỗ đó nhỏ hơn rất nhiều LVC mà cả phễu phía sau thu về. **Lỗ ở cửa, lời ở trong nhà.**

**Điểm chốt:** Trận đấu marketing thật ra là trận đấu xem ai dám — và được phép — chi nhiều nhất để có một khách. Bạn không thắng bằng quảng cáo hay hơn; thắng bằng cái phễu nâng LVC cao đến mức ngưỡng CAC bỏ xa đối thủ. *(= Customer Lifetime Value / trần CAC trong Kotler. Dan Kennedy, được cả Hormozi & Brunson trích: "the business that can spend the most to acquire a customer wins".)*

## 3. Cả 8 thành phần phễu là một cỗ máy nâng LVC

Mỗi thành phần phễu là một bộ phận của cỗ máy nâng LVC — kéo con số 45 đô lên cao hơn nữa so với CAC:

| Thành phần phễu (Phần 9) | Đòn bẩy [[Công thức tài chính triệu đô]] | Nâng LVC bằng cách |
|---|---|---|
| F.E. Quà tặng điên rồ | Lead gen + Conversion | Hạ rào cản đầu phễu → nhiều người vào → CAC/lead giảm |
| Upsell / Downsell / Add-on | AOV (đòn bẩy 3) | Mỗi khách chi nhiều hơn ngay lần đầu → LVC tăng |
| Đóng gói / Bundle | AOV (đòn bẩy 3) | Tăng giá trị một giỏ hàng → LVC tăng |
| Continuity (tiêu dùng liên tục) | Frequency + Margin (4 + 5) | Khách trả lặp lại nhiều tháng → LVC tăng mạnh nhất, đều nhất |
| VIP / Loyalty | Frequency + premium margin | Top khách chi nhiều, ở lại lâu → đuôi LVC dài |
| Marketing-In (data cũ) | Frequency + Conversion | Đánh thức khách cũ, gần như không tốn CAC → LVC tăng "miễn phí" |
| JV / Liên doanh | Lead gen (đòn bẩy 1) | Mượn tệp khách của đối tác → CAC gần 0 |
| Referral | Lead gen CAC thấp nhất | Khách cũ kéo khách mới → CAC thấp nhất, LVC cao nhất |

**Toàn bộ Phần 9 chỉ làm đúng một việc về số**: hoặc kéo LVC lên (upsell, bundle, continuity, VIP, marketing-in), hoặc kéo CAC xuống (F.E., JV, referral). Cả hai hướng đều mở rộng khoảng cách **LVC − CAC** — chính là lãi gộp được phép tái đầu tư để scale.

Khoanh đỏ **Continuity** — sản phẩm tiêu dùng liên tục: thành phần có ROI cao nhất trong 8 cái, vì là thứ duy nhất khiến doanh thu **cộng dồn theo thời gian** trong khi CAC chỉ trả đúng một lần. *(Thiết kế chi tiết Continuity → ec-san-pham-lien-tuc; skill này chỉ đặt chỗ.)*

> *(Tâm lý — vì sao chủ DN Việt hay sợ chi mạnh quảng cáo:* não ghét mất mát gấp đôi ghét bỏ lỡ — chi 100 triệu quảng cáo *thấy đau* ngay, còn 45 đô LVC mỗi lead thì *trừu tượng và ở tương lai*. Cách hoá giải: **biến LVC thành con số cụ thể viết ra giấy** — khi đã thấy đen trên trắng "mỗi lead đáng 45 đô, chi 20 đô vẫn lời 25", nỗi đau chi tiền được thay bằng phép tính.)*

## 4. Break-even funnel — phễu tự nuôi acquisition

Câu hỏi: **F.E. + upsell + bundle có bù nổi chi phí quảng cáo để có khách đó không?**
- Nếu (doanh thu FE + upsell + bundle của 1 khách) ≥ (CAC + giá vốn) → **acquire khách MIỄN PHÍ** (break-even ngay ở front-end), phần thang trên là lãi ròng. Chén thánh: scale ads gần như vô hạn không lo âm vốn.
- Nếu chưa → phải đợi bậc lõi/cao cấp mới hoà → dòng tiền căng hơn, scale chậm hơn.

## 5. Vòng vốn 30 ngày — phép toán làm cả cỗ máy tự nuôi nó

**Tại sao 30 ngày?** Vì vấn đề thật khi scale **không phải lời/lỗ — mà là TỐC ĐỘ thu hồi tiền**. Có thể lời rất to trên giấy mà vẫn chết, nếu tiền lời hai năm sau mới về còn tiền quảng cáo phải trả ngay tháng này. Thước đo sống còn: **trong 30 ngày, một khách đem về đủ tiền để đi lấy thêm bao nhiêu khách nữa?**

Ví dụ toán **(minh hoạ — KHÔNG cam kết kết quả)** cho một DN giả định:
- **CAC:** 1.000.000đ
- **F.E.** thu lần đầu: 600.000đ → *lỗ nhẹ 400.000đ ngay đầu phễu.* (Nhìn tới đây ai cũng tắt quảng cáo.)
- **Upsell + Bundle** ngay sau F.E. (40% khách lấy, bình quân +1.500.000đ).
- **Continuity** trong 30 ngày đầu (bình quân +800.000đ/khách).

```
F.E.                         :   600.000  (− 1.000.000 CAC = lỗ 400.000)
+ Upsell/Bundle (bình quân)  : + 1.500.000
+ Continuity 30 ngày         : +   800.000
------------------------------------------------
Tổng thu 30 ngày             =   2.900.000đ / khách
− CAC                        =   1.000.000đ
================================================
LÃI GỘP 30 NGÀY              =   1.900.000đ / khách
```

Mỗi khách, sau khi trừ chi phí lấy chính nó, **để lại 1.900.000đ tiền mặt trong 30 ngày** — đủ để đi lấy thêm **gần hai khách nữa** (1.900.000 ÷ 1.000.000 CAC). Mỗi khách sinh ra gần hai khách — lúc đó cỗ máy chuyển từ *đốt tiền* sang *in tiền*: không còn "ngân sách quảng cáo", chỉ còn "đổ thêm bao nhiêu cũng được, miễn vòng vốn còn dương".

Cái bẫy ở dòng đầu: **F.E. lỗ 400.000đ.** Người nghiệp dư dừng ở đó, kêu "phễu này lỗ", rồi tắt. Người hiểu vòng vốn 30 ngày biết khoản lỗ đó là *mồi*, lãi thật nằm ở upsell + continuity ngay sau lưng. **Đừng bao giờ đánh giá một cái phễu chỉ bằng sản phẩm đầu phễu.**

> **Case — ngân hàng dòng tiền** ([[Hệ thống phễu marketing Eagle Camp]]): phễu như cửa hàng có lối vào miễn phí + bảy quầy bên trong. F.E. là cái cửa — mở cửa tốn phí, đứng ở cửa chẳng thu được gì, thậm chí lỗ. Bảy quầy bên trong (upsell, bundle, continuity, VIP…) mới là chỗ tiền chảy. Chủ tiệm chỉ chăm chăm "mở cửa có lời không" thì đóng tiệm sớm. Chủ tiệm tính "một người bước qua cửa, trong 30 ngày ghé bảy quầy chi cho tôi bao nhiêu" mới dám mở thật to cái cửa. **Bài học:** thiết kế xong phễu, việc đầu tiên là ngồi tính lãi gộp 30 ngày một khách — có con số đó mới biết được phép mở van quảng cáo tới đâu.

## 6. CFA — Client Financed Acquisition (Hormozi)

Mục tiêu mạnh hơn break-even: trong **30 ngày đầu**, thu đủ tiền mặt từ 1 khách để trả **CAC + giá vốn phục vụ khách đó** → mỗi khách mới tự tài trợ việc kiếm khách kế → tăng trưởng **tự nuôi**, không cần bơm vốn ngoài. Đây chính là cái PTL gọi là **vòng vốn 30 ngày**.

## 7. Các bước (Cho giảng viên)
1. **Tính LVC:** lấy bảng 5 tầng phễu của bạn, ước CR vào mỗi tầng × giá tầng → tổng doanh thu ÷ số lead = LVC mỗi lead.
2. **Đo CAC thật:** tổng tiền quảng cáo (+ chi phí mồi câu) ÷ số lead về trong kỳ. Đo trên kênh của *chính bạn*, đừng bê con số người khác.
3. **Soi tỷ số LVC : CAC:** nếu LVC chưa lớn hơn CAC đủ xa → quay về Phần 9 kéo thêm một thành phần (thường là Continuity hoặc Upsell) để nâng LVC.
4. **Lập bảng vòng vốn 30 ngày:** điền *CAC | F.E. | Upsell/Bundle | Continuity 30 ngày | Lãi gộp 30 ngày*.
5. **Tính hệ số tái đầu tư:** lãi gộp 30 ngày ÷ CAC = mỗi khách sinh ra mấy khách. ≥1 là cỗ máy bắt đầu tự nuôi.
6. **Mở van có kỷ luật:** test ngân sách nhỏ trước; chỉ scale phễu đã chứng minh vòng vốn 30 ngày dương; phễu âm thì sửa rồi test lại.

## 8. Bảng money model (điền vào bản vẽ)

| Chỉ số | Giá trị | Nguồn / nhãn |
|---|---|---|
| Giá vốn / khách | ... | thật / `[?]` |
| Doanh thu FE + upsell + bundle (front-end) | ... | ước lượng — cách tính |
| CAC dự kiến | ... | ước lượng |
| Break-even ở front-end? | có / không | suy từ trên |
| LVC | ... | phóng chiếu chuyển bậc |
| CAC trần cho phép | ... | = LVC × biên |
| Lãi gộp 30 ngày / khách | ... | F.E. + upsell + continuity − CAC |
| Hệ số tái đầu tư (khách sinh khách) | ... | lãi gộp 30 ngày ÷ CAC |
| Hoàn vốn 1 khách | ... ngày | vòng vốn 30 ngày |

## 9. Cảnh báo phải nêu (nếu có)
- **Biên mỏng** ở front-end → không break-even → scale ads sẽ đốt vốn. → Nâng AOV (upsell/bundle) hoặc tăng giá.
- **Thang thiếu bậc trên** (chỉ FE + lõi, không cao cấp) → LVC thấp → CAC trần thấp → khó cạnh tranh ads. → Lấp bậc 4–5.
- **Hoàn vốn > 30 ngày** → dòng tiền căng, cần vốn đệm; cân nhắc continuity (→ ec-san-pham-lien-tuc) để rút ngắn vòng vốn.

## 🚦 CỔNG 4 — KIỂM TÀI CHÍNH ĐỦ MỤC TIÊU (chạy ở B4.5 trước khi xuất)

Cổng cuối trong 4 cổng kiểm chất lượng phễu. Money model ở trên trả lời "*phễu có dương dòng tiền không*". Cổng này hỏi câu thẳng hơn của chủ DN: **"phễu này có ĐỦ tạo ra mục tiêu tài chính tôi đặt ra không (vd triệu đô)?"** — vì một phễu có thể dương vốn mà vẫn quá nhỏ để chạm đích.

**Câu hỏi kiểm:** *Sản phẩm LÕI có đủ tạo lợi nhuận đạt mục tiêu (vd triệu đô) không? Hoặc sản phẩm CAO CẤP / HI-END có đủ tạo mục tiêu tài chính ban đầu không?*

### Cách kiểm — bóc ngược (nối [[Con số triệu đô - Bóc tách mục tiêu xuống ngày]] + skill `y-dinh-trieu-do`)

Đây là bài toán "Con số triệu đô" áp ngược lên cái thang. Làm cho **bậc lõi** trước, rồi cho **bậc cao cấp/hi-end** nếu lõi chưa gánh nổi:

```
Số sản phẩm cần bán/năm  = Mục tiêu lợi nhuận ÷ Lợi nhuận ròng mỗi sản phẩm   (làm tròn LÊN)
Số/tháng = Số/năm ÷ 10   ·   Số/tuần = Số/tháng ÷ 4   ·   Số/ngày = Số/tuần ÷ 5
                                          (quy ước: 1 năm = 10 tháng = 200 ngày làm việc)
```

Chốt bằng câu hỏi khả thi: **con số/ngày đó có nằm trong tầm tay** (năng lực sản xuất + kênh traffic + đội ngũ) không?

> ⚠️ Dùng **LỢI NHUẬN RÒNG mỗi sản phẩm**, KHÔNG phải doanh thu/giá bán (Sai lầm #1 của bài Con số triệu đô — chia cho giá bán ra số nhẹ giả tạo, bán đủ số vẫn không đủ lãi). Mục tiêu là tiền **về túi**.

**Ví dụ bóc ngược (minh hoạ — KHÔNG cam kết):** mục tiêu 30 tỷ/năm, bậc lõi lãi 3 triệu/sản phẩm → cần **10.000 sp/năm = 1.000/tháng = 50/ngày**. 50/ngày cho DN 1 người = bất khả thi → **Cổng 4 TRƯỢT**. Nâng lên bậc cao cấp lãi 30 triệu/sp → cần 1.000/năm = 5/ngày → khả thi hơn hẳn (bảng đòn bẩy giá [[Con số triệu đô - Bóc tách mục tiêu xuống ngày]]). *(Mọi số ở đây dán nhãn ước lượng + ghi giả định.)*

### 3 tiêu chí ĐẠT (cả 3 phải tick)

1. **Đã bóc ngược tới số/ngày** cho ít nhất bậc lõi (và bậc cao cấp nếu cần) — không dừng ở "mục tiêu 30 tỷ" trừu tượng.
2. **Số/ngày khả thi** với năng lực + kênh + đội ngũ thực tế (không phải con số trong mơ).
3. **Mọi con số dán nhãn ước lượng + ghi cách tính / giả định** — mục tiêu, lợi nhuận/sp, số cần bán đều truy được hoặc `[?]`.

### Trượt → cách sửa (thứ tự ưu tiên)

Nếu số/ngày bất khả thi (Cổng 4 trượt), KHÔNG hạ mục tiêu lén — sửa cấu trúc thang để nâng lợi nhuận/khách:
1. **Thêm bậc CAO CẤP / HI-END** — lợi nhuận/sp cao hơn → số cần bán ít đi (bảng đòn bẩy giá: lãi 300tr/sp chỉ cần 1 sp/ngày cho 30 tỷ). Đây là cách nhanh nhất kéo Cổng 4 về đạt.
2. **Thêm CONTINUITY** (sản phẩm tiêu dùng liên tục) — nâng LVC/khách bằng doanh thu cộng dồn nhiều tháng → mỗi khách gánh nhiều mục tiêu hơn, đỡ phải săn khách mới. *(Thiết kế chi tiết → ec-san-pham-lien-tuc; ở đây chỉ đặt chỗ + tính tác động lên LVC.)*
3. **Nâng giá / nâng biên** bậc đang có (cao cấp hoá, bundle, cắt chi phí) → lợi nhuận/sp lên, số cần bán xuống.

Sau khi sửa → **chạy lại bóc ngược** tới khi số/ngày khả thi. Nối thẳng 5 đòn bẩy ([[5 đòn bẩy đột phá doanh số]]): nâng AOV/Frequency/Margin chính là kéo Cổng 4 về đạt mà không cần thêm leads.

> **Anti-fab (quan trọng nhất ở cổng này):** cổng tài chính dễ bị "đạt" bằng cách chế lợi nhuận/sp đẹp hoặc tỉ lệ chuyển bậc lạc quan. CẤM. Mọi mục tiêu, lợi nhuận ròng/sp, % chuyển bậc, LVC dùng để bóc ngược phải lấy từ dữ liệu thật người làm hoặc dán nhãn **"(ước lượng — cách tính)"** + ghi giả định; không có → để `[?]` + hỏi. Cổng đạt nhờ số bịa = phễu sẽ trượt ngoài đời thật.

Cổng 4 **Trượt → quay lại B1 (thêm bậc cao cấp / continuity) hoặc chỉnh giá-biên ở thang & money model**, KHÔNG xuất. (3 cổng còn lại: Cổng 1 ở `thang-gia-tri.md`, Cổng 2 + 3 ở `cum-chuyen-doi.md`.)

## Sai lầm phổ biến (money model)
1. **Đánh giá phễu chỉ bằng F.E.** ("sản phẩm đầu phễu lỗ → phễu lỗ"). → Luôn cộng cả chuỗi upsell + continuity 30 ngày rồi mới kết luận.
2. **Chỉ nhìn lời/lỗ, quên tốc độ thu hồi.** → Lời 2 năm sau mới về vẫn làm cháy túi tháng này; đo lãi gộp *30 ngày*, không chỉ ROI tổng.
3. **Bán một sản phẩm rồi tắt máy.** → Không có thang sau F.E. thì LVC = đúng lần mua đầu, CAC ăn hết. Tối thiểu phải có một sản phẩm continuity.
4. **Nhầm "vòng vốn 30 ngày" với "bán rẻ".** → Không phải hạ giá, mà là **thu đủ nhanh** nhờ upsell + continuity.
5. **Mở van quảng cáo trên phễu chưa kiểm chứng.** → Test ngân sách nhỏ trước; chỉ scale phễu đã chứng minh lãi gộp 30 ngày dương.

## Đối chiếu Hormozi / Brunson (phần phụ — KHÔNG gán cho PTL)
- **CFA — Client-Financed Acquisition** (Hormozi, *$100M Money Models*): lãi gộp 30 ngày từ một khách đủ trả chi phí lấy + phục vụ ≥2 khách nữa → *"the cost of getting more customers will never be a problem again"* — tiền mặt thôi là nút thắt tăng trưởng, DN chuyển từ "đốt tiền" sang "in tiền". Chính xác là **vòng vốn 30 ngày**.
- **Money Model** (Hormozi): chuỗi offer có chủ đích 3 stage — **Attraction → Upsell/Downsell → Continuity** — nguyên tắc *"each stage pays for the next"*. Soi 8 thành phần Eagle Camp: F.E. = Attraction, upsell/bundle/downsell = stage giữa, continuity/VIP = stage cuối.
- **Break-even funnel** (Brunson, *Traffic Secrets*): hoà vốn ngay đầu phễu (*"for each \$1 we put into paid ads, we get at least \$1 back"*) để traffic về sau gần như miễn phí; mục tiêu *"to spend as much money profitably as possible"* — đúng tinh thần "mở van có kỷ luật".
- Cả ba quy về một câu Dan Kennedy: *"the business that can spend the most to acquire a customer wins"* — **ai dám và được phép chi nhiều nhất để mua một khách thì thắng** (= mục 2).

**🔗 Liên quan:** [[M9.0 - Thang giá trị (khung tổng)|Thang giá trị]] (module chốt kinh tế của khung tổng) · [[M4.1 - Rõ ràng về Mục tiêu tài chính|M4.1 - Con số triệu đô]] (con số tài chính cái thang phải hiện thực hoá) · [[Công thức tài chính triệu đô]] (5 đòn bẩy = 5 cách nâng LVC / hạ CAC) · [[Phễu sản phẩm]] (nguồn bảng LVC 5 tầng) · [[Hệ thống phễu marketing Eagle Camp]] (8 thành phần = cỗ máy nâng LVC).
