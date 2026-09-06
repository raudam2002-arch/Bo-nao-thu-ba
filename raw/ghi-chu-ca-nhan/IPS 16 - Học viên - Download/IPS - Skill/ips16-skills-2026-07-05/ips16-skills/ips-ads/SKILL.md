---
name: ips-ads
description: QUẢNG CÁO TRẢ PHÍ — lập kế hoạch chiến dịch + brief creative + cấu trúc đối tượng cho Facebook/Instagram, Google/YouTube, TikTok Ads trong hệ Internet Power System (IPS) của Phạm Thành Long (bước 8 pipeline ips-build). Chia 3 GIAI ĐOẠN theo phễu — Hiển thị (awareness) → Tương tác (engagement) → Chuyển đổi (conversion) — mỗi giai đoạn KPI riêng, creative/thông điệp/hình ảnh riêng. Chia ĐỐI TƯỢNG theo persona, dữ liệu tải lên (custom audience), lookalike, và tương tác (pixel/GA4 retargeting). MCP-ready (Meta/Google/TikTok Ads nếu có). Nguyên tắc: CHỈ rót tiền vào nội dung/offer đã test organic ra kết quả. Dùng skill này khi người dùng muốn "chạy quảng cáo", "Facebook/Google/TikTok Ads", "set chiến dịch", "target/đối tượng", "lookalike", "custom audience", "retarget", "creative quảng cáo", "scale ads", "ngân sách quảng cáo". Đọc upstream ips-noi-dung/content-viral (bài organic thắng), ips-xay-pheu (đích đổ traffic), ho-so-khach-hang-vpc (persona), ips-top-100 (góc đối thủ + khe hở).
---

# IPS · Quảng cáo trả phí (Bước 8)

Bạn lập **kế hoạch ads chạy được tiền**: 3 giai đoạn theo phễu, mỗi giai đoạn KPI + creative + đối tượng riêng. Ra **kế hoạch + brief**, KHÔNG tự thiết kế hình (giao designer/higgsfield).

> ⚠️ **Cổng đầu**: chỉ chạy ads vào cái **đã test organic ra kết quả** (5-7). Chưa có tín hiệu organic → chặn, trả về `ips-noi-dung`.

## 1. Đầu vào
- **Bài/creative organic THẮNG** (`content-viral`/`ips-noi-dung`) — hook đã được thị trường xác nhận.
- **Phễu / đích đổ traffic** (`ips-xay-pheu`): lead magnet / tripwire / sale page.
- **Persona** (`ho-so-khach-hang-vpc`): pain/gain → góc nhắm + thông điệp.
- **Khe hở định vị + đối thủ** (`ips-top-100`) — để creative khác biệt giữa thị trường cạnh tranh cao.
- **Biên lợi nhuận / LVC** (`ips-xay-pheu`/`ips-funnel-math`) → định **CAC trần**.

## 2. Bước 0 — Chọn nền tảng + mở cổng MCP
- Chọn nền tảng theo persona (khách ở đâu): Meta (FB/IG) · Google Search/Display/YouTube · TikTok.
- Dò connector ads lúc chạy (`search_mcp_registry(["meta ads","google ads","tiktok ads","facebook"])`) → có thì `suggest_connectors` bật nút Connect; chưa có → lập kế hoạch để người dùng set tay.

## 3. YÊU CẦU 1 — 3 GIAI ĐOẠN × kiểu QC × KPI (khớp Lạnh-Ấm-Nóng)
| Giai đoạn | Mục tiêu chiến dịch | KPI chính | Phụ |
|---|---|---|---|
| **A. Hiển thị** (Lạnh) | Awareness / Reach / Video views | CPM · Reach · 3s/ThruPlay view · tần suất | brand recall |
| **B. Tương tác** (Ấm) | Engagement / Traffic / Lead | CTR · CPC · cost/landing-view · **CPL (cost per lead)** | engagement rate |
| **C. Chuyển đổi** (Nóng) | Conversion / Sales | **CPA/CPL** · **ROAS** · tỉ lệ chuyển đổi · cost/purchase | AOV |
> Ngân sách chảy theo thứ tự: nuôi A → lọc người tương tác sang B → retarget người ấm sang C.

### 3b. Kiểu chiến dịch TƯƠNG ĐỒNG theo nền tảng — đọc `references/kieu-chien-dich.md`
Map mỗi giai đoạn sang đúng **mục tiêu/loại chiến dịch** của từng nền tảng:

| Giai đoạn | Meta (FB/IG) | Google (Search/Display) | YouTube (Google Video) | TikTok |
|---|---|---|---|---|
| **A. Hiển thị** | Awareness (Reach · Brand Awareness · Video ThruPlay) | Display · Demand Gen (reach) | Video reach: Bumper 6s · Skippable in-stream · Non-skippable · Efficient reach | Reach · Video Views · TopView/Brand Takeover |
| **B. Tương tác** | Engagement · Traffic · Leads (instant form) | Search (intent traffic) · Demand Gen · Discovery | In-stream skippable (TrueView) · In-feed video (Discovery) | Traffic · Community interaction · Lead Gen (instant form) |
| **C. Chuyển đổi** | Sales/Conversions · Leads (website) · Advantage+ Shopping | Search (conversion) · Performance Max · Demand Gen (conv) | Video Action Campaign (VAC) · Demand Gen conversion | Website Conversions · Product Sales · Lead Gen |

> Chọn nền tảng theo persona (mục Bước 0), nhưng trong nền tảng đã chọn phải đi đủ 3 loại chiến dịch trên theo giai đoạn.

## 4. YÊU CẦU 2 — Creative/thông điệp/hình ảnh khác nhau theo KPI (thị trường cạnh tranh cao)
Mỗi giai đoạn brief creative RIÊNG, và **nhiều biến thể để test** (cạnh tranh cao = phải nổi bật + test liên tục):
- **A. Hiển thị**: hook chặn đứng scroll (pattern interrupt), hình/clip bắt mắt 1-3s đầu, thông điệp chạm 1 pain, cực ngắn. Mục tiêu: dừng ngón tay.
- **B. Tương tác**: nội dung giá trị/story, gợi tò mò → click/đọc/optin; thông điệp "có giải pháp". Format đa dạng (video ngắn · carousel · UGC).
- **C. Chuyển đổi**: offer rõ + social proof + khan hiếm/deadline + CTA mua; creative retarget nhắc lại offer.
- **Khác biệt hoá**: lấy **khe hở định vị** (top-100) + **giọng người dùng** (ips-ho-so-ca-nhan) để creative không đụng hàng. Brief ≥3 biến thể hook/giai đoạn để A/B.

## 5. YÊU CẦU 3 — Cấu trúc ĐỐI TƯỢNG (4 loại)
| Loại đối tượng | Nguồn | Dùng ở giai đoạn |
|---|---|---|
| **Theo persona (cold)** | interest/demographic/behavior suy từ `ho-so-khach-hang-vpc` | A (Hiển thị) |
| **Dữ liệu tải lên (custom)** | upload email/SĐT từ `ips-email`/Pancake/CRM → match | C (bán thêm/loại trừ) |
| **Lookalike (LLA)** | từ custom audience / người mua / khách giá trị cao → LLA 1-3% | A-B (mở rộng chất lượng) |
| **Tương tác / retarget** | **pixel/GA4/CAPI**: video viewers · page visitors · add-to-cart · cart abandoners · email openers · engaged social | B-C |
- **Loại trừ** người đã mua khỏi cold/lead campaign (trừ khi upsell).
- **Tracking bắt buộc**: cài Meta Pixel + Conversion API (CAPI) / GA4 / TikTok Pixel + UTM cho mọi link → đo đúng chuyển đổi.

## 6. Ngân sách & test
- Đặt **CAC trần** từ biên LN/LVC (CAC < LVC, hướng LVC:CAC ≥ 3:1).
- Thang test: ngân sách nhỏ test nhiều hook → **kill** cái kém (CTR/CPL xấu sau ngưỡng) → **scale** cái thắng.
- Mọi benchmark (CPM/CTR/CVR/CPA/ROAS) chưa có dữ liệu thật = **🔶 ước lượng**, ghi "đo lại sau 3-7 ngày".

## 7. Xuất & bàn giao
- Xuất `niche/<slug>/08-ads.md`: nền tảng + lý do · bảng 3 giai đoạn (mục tiêu/KPI/đối tượng/creative/ngân sách) · ma trận 4 đối tượng · brief creative (≥3 biến thể/giai đoạn) · setup tracking (pixel/GA4/CAPI/UTM) · CAC trần + thang kill/scale.
- Bàn giao: số liệu → `ips-4dx` (bảng điểm) + `ips-funnel-math` (CAC thật) · retarget/database → `ips-remarketing` · brief hình → designer/higgsfield.

## 8. Cổng chống bịa (BẮT BUỘC)
Không chạy ads khi chưa có tín hiệu organic. KHÔNG chế CPM/CTR/CVR/CAC/ROAS — mọi số chưa đo = 🔶. Không hứa ROAS chắc chắn.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
