---
name: ips-email
description: Viết CHUỖI EMAIL nuôi dưỡng + chốt đơn cho hệ Internet Power System (IPS) của Phạm Thành Long — rút từ khoá Email Marketing của PTL (nguyên lý "38 chuỗi vũ khí tối thượng": nuôi dưỡng trước, bán sau, khớp Lạnh-Ấm-Nóng-Mua). Output mặc định = TRỌN BỘ 20 EMAIL phủ toàn funnel (sau lead magnet → tripwire → main offer → subscription/chăm sóc). Bước 11 trong pipeline ips-build. Dùng skill này BẤT CỨ KHI NÀO người dùng muốn "viết chuỗi email", "email sequence", "email nuôi dưỡng lead", "autoresponder", "drip campaign", "chuỗi email bán hàng", "email marketing", "follow-up email", hoặc sau khi đã có funnel + lead magnet. Đọc upstream ips-xay-pheu (funnel), ho-so-khach-hang-vpc (persona), ips-ho-so-ca-nhan (giọng + chất liệu), salepage (offer chính).
---

# IPS · Chuỗi Email (Bước 11)

Bạn viết **trọn bộ 20 email** dẫn khách từ lúc để lại lead → mua → ở lại, theo nguyên lý email PTL: **nuôi dưỡng trước, bán sau**, cá nhân hoá, bán bằng câu chuyện + giá trị.

> Nguồn: khoá Email MKT + concept "Email Marketing 38-chuỗi vũ khí tối thượng" (PTL). 38-chuỗi gốc ~2 tháng; bản IPS rút gọn còn **20 email phủ toàn funnel**.

## 1. Giọng & nguyên tắc
- Giọng PTL: câu ngắn, xưng "tôi"/gọi "bạn", động từ mạnh, tránh sáo rỗng. Lấy **giọng + chất liệu thật** từ `ips-ho-so-ca-nhan` nếu có.
- **Bán kết quả, không bán sản phẩm.** Mỗi email 1 ý chính, 1 CTA.
- Cá nhân hoá: gọi đúng tên, đúng nhu cầu, đúng giai đoạn vòng đời.
- Cổng chống bịa: KHÔNG chế con số/social proof/lời chứng thực. Chưa có → để `[chèn case thật/số liệu]`.

## 2. Đầu vào (đọc trước)
- **Funnel** (`ips-xay-pheu`): các bậc lead magnet / tripwire / main / subscription + giá.
- **Persona** (`ho-so-khach-hang-vpc`): Jobs/Pains/Gains → chất liệu chạm đau.
- **Offer chính** (`salepage`): lời chào, khan hiếm, deadline.
- **Giọng + câu chuyện** (`ips-ho-so-ca-nhan`).
Thiếu cái nào → hỏi gọn rồi mới viết.

## 3. Bản đồ 20 email theo funnel (khớp Lạnh-Ấm-Nóng-Mua)

**GIAI ĐOẠN A — Nuôi dưỡng sau optin (Ấm→Nóng) · email 1-8**
1. **Giao lead magnet + chào** — trao quà ngay, set kỳ vọng "vài hôm tới tôi gửi gì".
2. **Câu chuyện cá nhân** — kết nối (7 thành phần kể chuyện), vì sao tôi làm việc này.
3. **Giá trị 1 — gọi tên VẤN ĐỀ thị trường** (Lạnh): khách thấy "đúng nỗi đau của mình".
4. **Giá trị 2 — giải pháp thường & vì sao chưa đủ** (Ấm).
5. **Case/khách thành công** — social proof sớm `[chèn case thật]`.
6. **Giải pháp ĐỘC ĐÁO của bạn** (Nóng) — cách làm khác biệt, dẫn về offer.
7. **Tripwire** — lời chào rẻ không-thể-từ-chối (bậc tripwire của funnel).
8. **Tripwire chốt** — khan hiếm nhẹ + last call cho tripwire.

**GIAI ĐOẠN B — Bán main offer (Nóng→Mua) · email 9-16**
9. **Cầu nối** — từ vấn đề lớn → giới thiệu main product là lối ra.
10. **Reveal offer** — lời chào hàng "điên rồ không thể chối từ" (đồng bộ sale page).
11. **Lợi ích/kết quả** — bán phiên bản tốt hơn của khách, không bán tính năng.
12. **Social proof mạnh** — case + con số `[chèn số thật]`.
13. **Xử lý phản đối** — gỡ 3-5 cái cớ phổ biến (giá, thời gian, "tôi khác").
14. **Chi phí của KHÔNG hành động** — đòn bẩy đau mất mát.
15. **Khan hiếm + deadline** — lý do mua NGAY (có thật).
16. **Last call** — đóng cửa, nhắc deadline.

**GIAI ĐOẠN C — Subscription + chăm sóc sau mua · email 17-20**
17. **Onboarding người đã mua** / **downsell** người chưa mua.
18. **Giới thiệu subscription/continuity** — bậc giữ chân định kỳ.
19. **Gieo referral / raving fan** — xin giới thiệu đúng lúc hài lòng nhất.
20. **Bắc cầu chuỗi thường kỳ** — chuyển sang nhịp email duy trì dài hạn.

## 4. Mỗi email viết theo khung
`Subject (≤9 từ, tò mò/lợi ích)` · `Preview` · `Hook 1-2 dòng` · `Thân (1 ý, kể chuyện/giá trị)` · `1 CTA rõ` · `P.S. (nhắc CTA/khan hiếm)`.

## 5. Xuất & bàn giao
- Xuất `niche/<slug>/11-email.md` — 20 email đánh số theo 3 giai đoạn + ghi rõ trigger gửi (ngày/hành vi).
- Ghi chú công cụ: GetResponse (autoresponder) · Pancake (thu nguồn vào) · LonGPT Email Marketing (gen theo style).
- Bàn giao: nối với `ips-xay-pheu` (đặt đúng bậc) + `ips-4dx` (đo open/CTR/chuyển đổi).

## 6. Mode rút gọn
Nếu người dùng chỉ cần 1 đoạn funnel → viết đúng giai đoạn A / B / C tương ứng, không ép đủ 20.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
