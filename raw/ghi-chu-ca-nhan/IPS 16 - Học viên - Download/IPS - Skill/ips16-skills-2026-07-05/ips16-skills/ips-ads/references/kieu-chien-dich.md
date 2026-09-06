# Kiểu chiến dịch theo nền tảng (đầy đủ) — map 3 giai đoạn

Mỗi nền tảng có hệ mục tiêu/loại chiến dịch riêng. Bảng dưới = ánh xạ giai đoạn Hiển thị/Tương tác/Chuyển đổi → loại chiến dịch + format + KPI + đối tượng đặc thù.

---

## META (Facebook / Instagram) — 6 mục tiêu ODAX
| Giai đoạn | Mục tiêu | Format | KPI | Đối tượng |
|---|---|---|---|---|
| Hiển thị | **Awareness** (Reach, Brand Awareness) · Video views (ThruPlay) | ảnh · video ngắn · Reels · Stories | CPM · Reach · ThruPlay | cold theo interest/LLA |
| Tương tác | **Engagement** · **Traffic** · **Leads** (Instant Form) | carousel · video · collection · instant form | CTR · CPC · CPL | LLA · engaged · web visitors |
| Chuyển đổi | **Sales** (Conversions) · **Leads** (website) · Advantage+ Shopping | DPA/catalog · video offer · carousel proof | CPA · ROAS · CVR | retarget (ATC/visitors) · custom buyers · exclude purchasers |
- Tracking: Meta **Pixel + Conversion API (CAPI)**; Advantage+ audience cho scale.

## GOOGLE ADS (Search / Display / Demand Gen / PMax)
| Giai đoạn | Loại chiến dịch | KPI | Ghi chú |
|---|---|---|---|
| Hiển thị | **Display** (GDN) · **Demand Gen** (reach) | CPM · viewable impr | banner responsive · phủ rộng |
| Tương tác | **Search** (từ khoá ý định) · **Discovery/Demand Gen** | CTR · CPC · CPL | Search bắt cầu (người đang TÌM) — phối `ips-tu-khoa` |
| Chuyển đổi | **Search** (tối ưu conversion) · **Performance Max** · Demand Gen (conv) | CPA · ROAS · CVR | PMax gom mọi inventory; cần conversion tracking + đủ data |
- Tracking: **GA4 + Google Ads conversion tag**; remarketing list (RLSA) cho Search.

## YOUTUBE (Google — Video campaigns)
| Giai đoạn | Loại quảng cáo video | KPI | Ghi chú |
|---|---|---|---|
| Hiển thị | **Bumper 6s** · **Skippable in-stream** · **Non-skippable 15s** · Video reach (efficient) | CPM · view rate · unique reach | nhồi nhận biết, hook 1-3s |
| Tương tác | **Skippable in-stream (TrueView)** · **In-feed video (Discovery)** | CPV · view rate · CTR | người xem ≥30s = ấm → retarget |
| Chuyển đổi | **Video Action Campaign (VAC)** · Demand Gen video (conv) | CPA · CVR | CTA + link phễu; retarget viewers |
- Đối tượng đặc thù: **video viewers / channel engagers** → audience retarget mạnh.

## TIKTOK ADS
| Giai đoạn | Mục tiêu | Format | KPI |
|---|---|---|---|
| Hiển thị | **Reach** · **Video Views** · TopView/Brand Takeover | video dọc 9-15s · Spark Ads (boost organic) | CPM · 2s/6s views |
| Tương tác | **Traffic** · **Community interaction** · **Lead Gen** (instant form) | Spark Ads · in-feed video | CTR · CPC · CPL |
| Chuyển đổi | **Website Conversions** · **Product Sales** · Lead Gen | in-feed · Video Shopping Ads | CPA · ROAS · CVR |
- Tracking: **TikTok Pixel + Events API**; Spark Ads dùng lại video organic THẮNG.

---

## Nguyên tắc chung
- Trong nền tảng đã chọn → đi **đủ 3 loại chiến dịch** theo giai đoạn (đừng chỉ chạy conversion từ đầu khi chưa có pool ấm).
- Đối tượng retarget chỉ đủ lớn khi giai đoạn A/B đã chạy → **đúng thứ tự A→B→C**.
- Mọi benchmark KPI ở đây là khung; số thật phải đo bằng pixel/GA4 sau 3-7 ngày (🔶).
