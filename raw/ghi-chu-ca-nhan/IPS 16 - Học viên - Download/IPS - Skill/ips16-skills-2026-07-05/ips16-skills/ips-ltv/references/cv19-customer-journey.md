# CV19 — Xây dựng các luồng khách hàng (Customer Journeys)

> Việc cuối cùng — kết nối tất cả điểm chạm từ CV01-CV18 thành các luồng liền mạch. **Xi măng kết các viên gạch thành hệ thống.**

---

## 1. Mô tả & vì sao

18 Công việc trước là các **"viên gạch" rời**: video, bài blog, lead magnet, email, sales page, chatbot, gian hàng sàn... Mỗi viên đều tốt, nhưng rời rạc thì không thành nhà. **CV19 là xi măng** — kết nối tất cả thành các luồng (journey) cụ thể mà khách đi qua từ lúc chưa biết mình đến lúc thành fan giới thiệu người khác.

**Không có CV19 = có 18 mảnh ghép rời, không có hệ thống.** Khách rơi giữa các điểm chạm "cụt", không ai biết chỗ nào nghẽn. Có CV19 = một cỗ máy: khách vào đầu này, đi theo đường đã vẽ, ra đầu kia thành khách trả tiền — và đo được từng bước. Đây là **mảnh ghép cuối của cả Bộ IPS**.

Một khách có thể đi qua **nhiều luồng** (vừa là khách mới của luồng Cold, vừa là nguồn giới thiệu của luồng Referral). Nền tảng của mọi luồng: gắn mỗi điểm chạm vào 1 trong 4 nấc **Biết → Tin → Yêu → Mua** — tránh dồn quá nhiều điểm ở nấc "Biết" mà không có "Mua", hoặc ngược lại. Trung bình một khách cần 7-12 điểm chạm trước khi mua — không ai chỉ qua 1 điểm rồi rút ví. 🔶

**Vị trí trong cụm**: CV19 đóng vòng. Nó dùng xương sống là chuỗi email automation (cụm Phễu bắt lead), nối mọi tài sản CV01→CV18, rồi nuôi data thực tế ngược về CV01 để refine lại chân dung khách hàng.

---

## 2. WIG mẫu (4DX)

**Loại chỉ số**: Số luồng đang chạy + Conversion từng luồng.

**Mẫu WIG**: *Hoàn thành 5 luồng khách hàng đang chạy automation, mỗi luồng có CR ≥10% và đo được từng bước, vào ngày DD/MM.* 🔶

Mục tiêu khởi đầu khiêm tốn hơn cũng được: *Vận hành đủ ≥80% điểm chạm trong 60 ngày.* Quan trọng là luồng **chạy thật và đo được**, không phải vẽ đẹp trên giấy.

---

## 3. KPI đòn bẩy

- **Số luồng đang chạy** (mục tiêu: 5) — lag measure chính.
- **Conversion rate từng bước trong luồng** (mục tiêu 🔶 mỗi bước ≥30%).
- **Drop-off rate từng bước** (mục tiêu 🔶 ≤70%) — phát hiện chỗ nghẽn.
- **Cost per customer per luồng** — luồng nào rẻ nhất thì nhân lên.
- **LTV per customer per luồng** — luồng nào sinh khách giá trị cao nhất.
- **Số điểm chạm đã "bật" / tổng kế hoạch** — đòn bẩy hành vi giai đoạn dựng.

---

## 4. DMO (Daily Method of Operation)

- **60 phút/tuần**: review 5 luồng, đọc data từng bước.
- **60 phút/tuần**: tối ưu 1 bước có drop-off cao nhất (vá chỗ rơi khách).
- **30 phút/tuần**: thiết kế luồng mới (nếu cần) / bật 1 điểm chạm chưa live.

CV19 là việc nhịp tuần, không phải nhịp ngày — vì luồng cần thời gian tích data đủ để đọc.

---

## 5. Checklist

### Checklist mỗi luồng (trước khi launch)

- [ ] **Vẽ ra giấy/Miro**: từng bước rõ ràng có mũi tên (không bước nào "cụt").
- [ ] **Mỗi bước có 1 KPI đo được**.
- [ ] **Trigger mỗi bước** (thời gian/hành động) được setup automation.
- [ ] **Exit criteria** — khi nào khách thoát luồng (đã mua, đã hết hạn nuôi dưỡng).
- [ ] **Fail-safe** — khi nào can thiệp người thật (chốt giá cao, khiếu nại).
- [ ] **Tracking xuyên kênh** qua UTM + CRM.
- [ ] **Test E2E** (end-to-end) với account thật trước khi launch — chạy thử cả luồng như một khách thật.

---

## 6. Công cụ (LonGPT + tool)

**Khoá học Phạm Thành Long bổ trợ**:
- **Internet Power System (IPS)** — toàn bộ phương pháp 19 Công việc.
- **Eagle Camp** — quản trị hệ thống doanh nghiệp (vận hành cỗ máy bền vững).
- **YES Summit** — cam kết → vận hành.

**Tool phần mềm**:
- **Vẽ luồng**: Miro, FigJam, Whimsical, Lucidchart.
- **Automation**: GetResponse Workflows, n8n, Make, Zapier.
- **CRM**: HubSpot (free tier OK), Pipedrive.
- **Phân tích chéo kênh**: GA4, Mixpanel.
- **Tracking**: Google Tag Manager + UTM cho mọi link.

**Prompt LonGPT mẫu** (copy-paste, điền `[chỗ điền]`):

```
Bạn là kiến trúc sư customer journey theo phương pháp IPS của Phạm Thành Long.
Sản phẩm chính: [tên + giá]. Persona: [mô tả].
Các tài sản tôi đã có (CV01-CV18): [liệt kê — video, blog, lead magnet, email,
sales page, chatbot, gian hàng sàn, sản phẩm bổ sung...].
Hãy thiết kế cho tôi 5 luồng khách hàng:
1. COLD (khách mới)   2. WARM (nuôi dưỡng)   3. HOT (khách cũ → upsell)
4. ABANDON (bỏ giỏ)   5. REFERRAL (giới thiệu)
Mỗi luồng: vẽ sơ đồ từng bước có mũi tên, gắn mỗi bước vào nấc Biết/Tin/Yêu/Mua,
nêu trigger automation + KPI đo được + điểm cần người thật can thiệp.
Ràng buộc: không bước nào "cụt"; không bịa số; đánh dấu 🔶 mọi con số minh hoạ;
ưu tiên 5 luồng làm sâu hơn 20 luồng nửa vời.
```

---

## 7. Bảng điểm 4DX

| Trường | Nội dung |
|---|---|
| **Hiển thị** | Dashboard tổng + Google Sheet "Customer Journey Tracker" + sơ đồ Miro live |
| **Đo** | Số người trong từng bước / Conversion mỗi bước / Drop-off / Doanh thu attributed |
| **Cập nhật** | Marketing Manager + người vận hành automation |
| **Tần suất** | Review thứ 2 hàng tuần |

---

## 8. Nhân sự

**Vị trí**:
- **Marketing Operations Manager** (1 người, vai chiến lược — kiến trúc sư luồng).
- **Automation Specialist** (vai kỹ thuật setup workflow).

**Tiêu chuẩn**:
- **Marketing Ops**: tư duy hệ thống, đọc data sâu, hiểu cả CV01-CV18 (nhìn toàn cảnh).
- **Automation Specialist**: thuần thục n8n/Make/Zapier, hiểu API, debug được flow.

Giai đoạn đầu chủ doanh nghiệp là kiến trúc sư luồng; thuê Automation Specialist (kể cả part-time) để dựng kỹ thuật.

---

## 9. 5 sai lầm + cách sửa

1. **Setup luồng nhưng không đo từng bước** → không biết chỗ nào nghẽn → không tối ưu được.
   → **Sửa**: mỗi bước gắn 1 KPI; dashboard hiển thị drop-off từng bước.
2. **Over-automation** — tự động hoá cả bước cần con người (chốt giá cao, xử lý khiếu nại).
   → **Sửa**: giữ fail-safe để người thật can thiệp đúng chỗ. Bot + người = vô địch.
3. **Làm 20 luồng nửa vời** → loãng, không luồng nào ra kết quả.
   → **Sửa**: 5 luồng làm sâu. 5 luồng tốt > 20 luồng trung bình.
4. **Điểm chạm "cụt"** — bước này không dẫn rõ sang bước kế → khách rơi giữa luồng.
   → **Sửa**: mỗi điểm chạm phải có đích đến rõ ràng cho bước tiếp theo.
5. **Không test E2E trước khi launch** → khách thật chạy vào luồng lỗi, mất uy tín.
   → **Sửa**: chạy thử cả luồng bằng account thật trước khi bật automation cho khách.

---

## 10. Câu chốt Phạm Thành Long

> *"Không phải là sự nổi tiếng, mà là con người tuyệt vời bạn sẽ trở thành."*

Sau khi hệ thống chạy, doanh nhân được giải phóng khỏi việc tay chân để trở thành phiên bản tốt hơn của chính mình — vì cỗ máy đã tự dắt khách qua từng nấc.

**Quy tắc**: 5 luồng tốt > 20 luồng trung bình. Đầu tư sâu, đo đầy đủ. Bắt đầu với 1 luồng đơn giản, chạy 30 ngày, đo, tối ưu — rồi nhân bản thành 5. **READY! FIRE! AIM!** — bật luồng đơn giản trước, sửa trong lúc chạy, đừng chờ hoàn hảo.

---

## Ví dụ đa ngành (4) — luồng nào ưu tiên

**A. Sản phẩm vật lý — shop đồ gia dụng**
- Ưu tiên: COLD (TikTok viral → giỏ hàng) + HOT (khách mua → cross-sell phụ kiện) + REFERRAL.
- ABANDON mạnh vì giỏ hàng sàn/web hay bị bỏ.

**B. Khoá học / số — học online**
- Ưu tiên: WARM (blog SEO + webinar nuôi dài) + HOT (học viên cũ → khoá nâng cao) + REFERRAL (học viên giới thiệu).
- COLD qua video; ít phụ thuộc ABANDON kiểu giỏ hàng.

**C. Dịch vụ — phòng khám / spa**
- Ưu tiên: COLD (review + map) + HOT (gói chăm sóc định kỳ) + REFERRAL (giới thiệu bạn bè giảm giá).
- Chốt nhiều ở chat/điện thoại (fail-safe người thật đậm).

**D. F&B — chuỗi quán**
- Ưu tiên: HOT (thẻ thành viên, đơn lặp) + REFERRAL (giới thiệu tặng món) + COLD (review viral).
- Automation nhẹ hơn; tập trung loyalty.

---

## Template điền sẵn — Bản đồ 5 luồng (Cold / Warm / Hot / Abandon / Referral)

### Luồng 1: COLD — Tiếp cận khách mới
```
Video TikTok/YouTube viral (cụm Nội dung)        [Biết]
 → Click bio link
 → Squeeze page tặng lead magnet (cụm Phễu bắt lead)  [Tin]
 → Email chuỗi 7 ngày (cụm Phễu bắt lead)             [Tin→Yêu]
 → Sales page (cụm Chuyển đổi)                        [Mua]
 → Mua sản phẩm chính
 → Email upsell sau 14 ngày
 → Sản phẩm bổ sung (CV16)
```

### Luồng 2: WARM — Nuôi dưỡng qua Blog SEO
```
Bài blog SEO top Google (cụm Nội dung + Chuyển đổi)  [Biết]
 → Pop-up offer lead magnet                          [Tin]
 → Squeeze page
 → Email chuỗi giáo dục 14 ngày                       [Tin→Yêu]
 → Mời tham gia webinar miễn phí                      [Yêu]
 → Sales page                                         [Mua]
 → Mua sản phẩm
```

### Luồng 3: HOT — Khách cũ → Upsell
```
Khách đã mua sản phẩm 1                               [đã Mua]
 → Email cảm ơn + giao hàng
 → 30 ngày sau: email khảo sát phản hồi
 → 60 ngày: email tặng giá trị (case study, mẹo)      [Yêu lại]
 → 90 ngày: email giới thiệu sản phẩm 2 (CV16)
 → Sales page sản phẩm 2                              [Mua lại]
 → Mua → vào nhóm VIP
```

### Luồng 4: ABANDON — Bỏ giỏ hàng
```
Khách vào sales page                                  [Mua-dở]
 → Click mua nhưng không hoàn tất
 → Email recover sau 1 giờ
 → Email recover sau 24 giờ (kèm bonus)
 → Email recover sau 72 giờ (urgency)
 → Retargeting ads (cụm Chuyển đổi) trong 14 ngày     [kéo lại Mua]
```

### Luồng 5: REFERRAL — Khuyến khích giới thiệu
```
Khách hàng hài lòng (NPS ≥9)                          [Yêu]
 → Email gửi link giới thiệu kèm thưởng
 → Khách giới thiệu được ghi nhận trong hệ thống
 → Người được giới thiệu vào Luồng 1 hoặc 2           [vòng mới: Biết]
 → Mua → Khách giới thiệu nhận thưởng                 [compound]
```

> Luồng 5 là vòng lặp tăng trưởng (compound) — mỗi khách hài lòng đẻ ra khách mới, nối thẳng vào tinh thần Raving Fan.

---

### Bảng điểm chạm đa kênh (bám 4 nấc Biết–Tin–Yêu–Mua)

Với mỗi persona, lập bảng để thấy rõ đang thừa/thiếu điểm chạm ở nấc nào:

| Nấc | Nhiệt độ | Kênh (CV nguồn) | Nội dung cụ thể | KPI đo |
|---|---|---|---|---|
| Biết | Lạnh | TikTok / YouTube (Nội dung) | video viral | Reach, Views |
| Biết | Lạnh | Facebook (Nội dung) | bài giá trị | Reach, Engagement |
| Tin | Ấm | Blog SEO (Nội dung) | bài top Google | Time on page |
| Tin | Ấm | Email (Phễu bắt lead) | chuỗi nuôi dưỡng | Open rate |
| Yêu | Nóng | Webinar / Case study | live + story | Attendance |
| Mua | Mua | Sales page (Chuyển đổi) | trang chốt chính | Conversion rate |
| Mua | Mua | Retargeting ads (Chuyển đổi) | ad BOFU | CPA |
| Mua | Mua | Chatbot (CV17) | luồng chốt | Tỷ lệ chốt chat |

> Quy tắc đọc bảng: nếu kín nấc "Biết" mà trống nấc "Mua" → có traffic không có doanh thu (thiếu chốt); ngược lại, kín "Mua" mà trống "Biết" → hết phễu đầu vào.

---

## Đóng Bộ IPS

CV19 đóng vòng. Sau CV19, vòng lặp quay về CV01 với **data thực tế từ luồng** để refine lại chân dung khách hàng. Đây là lúc Bộ IPS đã trọn vẹn — trả toàn bộ **4 tài sản cụm** (product ladder + kịch bản chatbot + kế hoạch sàn + bản đồ 5 luồng) về Cockpit `ips-build` để kết tinh thành .docx (kế hoạch) + .xlsx (bảng điểm + DMO) + thư mục tài sản.

> *"Bạn vừa hoàn thành hệ thống marketing 19 Công việc theo phương pháp IPS. Giờ việc còn lại không phải suy nghĩ thêm, mà là bắt đầu triển khai. READY! FIRE! AIM! Biết → Tin → Yêu → Mua."*
