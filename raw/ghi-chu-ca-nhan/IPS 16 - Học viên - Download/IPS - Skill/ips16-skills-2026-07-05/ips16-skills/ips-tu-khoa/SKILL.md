---
name: ips-tu-khoa
description: NGHIÊN CỨU TỪ KHOÁ cho hệ Internet Power System (IPS) của Phạm Thành Long — tiện ích dùng chung feed nhiều bước (ngách, blog, SEO, ads, và cả bằng chứng CẦU cho persona). Quét + dựng KHO TỪ KHOÁ chia 3 NHÓM (từ khoá chính/head · từ khoá liên quan/related · từ khoá đuôi dài người mua/long-tail buyer-intent), gắn ý định tìm kiếm + volume + độ khó khi có nguồn thật, ưu tiên shortlist volume cao × cạnh tranh thấp. Được phép DÙNG PYTHON, WebSearch/WebFetch, kết nối MCP công cụ từ khoá (Google Keyword Planner, Ahrefs, Semrush, DataForSEO… nếu có), dùng nguồn từ khoá đã có trong vault. Dùng skill này BẤT CỨ KHI NÀO người dùng muốn "nghiên cứu từ khoá", "keyword research", "tìm từ khoá", "search volume", "độ khó từ khoá", "search intent", "từ khoá ngách", "topic ideas", "people also ask", hoặc trước khi viết blog/SEO/ads. Bàn giao kho từ khoá cho ips-blog, ips-seo, ips-ads, ips-ngach.
---

# IPS · Nghiên cứu Từ khoá (tiện ích dùng chung)

Bạn dựng **kho từ khoá theo ý định tìm kiếm** — nền cho nội dung (blog/SEO), nhắm ads, và đo CẦU thị trường. Số liệu **chỉ ghi khi có nguồn thật**; suy đoán → 🔶.

## 1. Đầu vào
- **Ngách + persona** (`ips-ngach` / `ho-so-khach-hang-vpc`): ngôn ngữ thật khách dùng (pain/gain → cụm từ tìm).
- **Hạt giống**: 5-10 từ khoá gốc người dùng đưa, hoặc rút từ persona/đối thủ.

## Bước 0 — MỞ CỔNG MCP (chạy đầu tiên) — đọc `references/mcp-tu-khoa.md`
1. Dò connector từ khoá: `search_mcp_registry(["dataforseo","ahrefs","semrush","keyword","seo","google ads","search console"])`.
2. Có connector **chưa nối** → **gọi `suggest_connectors`** để bật nút Connect cho người dùng chọn (đây là "mở cổng MCP").
3. Registry trống / chưa nối gì → báo người dùng + đưa danh mục MCP từ khoá (`references/mcp-tu-khoa.md`) để cân nhắc nối, rồi **degrade** về nguồn miễn phí (mục 2).
> Tình trạng kiểm 2026-06-28: registry chưa có connector SEO/từ khoá → mặc định chạy degrade; tự bật cổng khi anh nối sau.

## 2. Năng lực được phép dùng
- **MCP công cụ từ khoá** (ưu tiên nếu có — xem Bước 0): Google Keyword Planner · Ahrefs · Semrush · DataForSEO · Moz · Search Console. Có → lấy volume/độ khó/CPC THẬT.
- **WebSearch/WebFetch**: lấy gợi ý từ Google Autocomplete, "People also ask", "Searches related to", YouTube/TikTok suggest, diễn đàn/group (ngôn ngữ khách thật).
- **Python (Bash)**: gom-dedup, phân nhóm theo ý định, chấm điểm ưu tiên, xuất bảng/CSV.
- **Nguồn có sẵn trong vault**: `Hoc/raw/ips`, `PLR/raw`, kho từ khoá/ngách cũ → đọc trước.

## 3. Quy trình
1. **Mở rộng hạt giống → 3 tầng**: từ khoá CHÍNH (head trụ) → LIÊN QUAN (biến thể/đồng nghĩa) → ĐUÔI DÀI người mua (autocomplete + PAA + related + đối thủ + biến thể địa phương/ý định mua "giá", "ở đâu", "tốt nhất").
2. **Phân nhóm theo Ý ĐỊNH** (khớp Lạnh-Ấm-Nóng cho `ips-blog`/`content`):
   - **Thông tin** (Lạnh): "là gì", "cách", "vì sao".
   - **So sánh** (Ấm): "A vs B", "top", "nên chọn", "review".
   - **Mua** (Nóng): "giá", "mua ở đâu", "khoá học", "dịch vụ".
3. **Gắn số** (nếu có tool): volume · độ khó (KD) · CPC. Không có tool → 🔶 ước lượng định tính (cao/vừa/thấp) + ghi "kiểm bằng [tool]".
4. **Chấm ưu tiên**: cơ hội = volume cao × độ khó thấp × ý định gần mua. Đánh dấu "quick win".
5. **Cụm chủ đề (topic cluster)**: gom thành trụ + nhánh để giao thẳng `ips-blog`/`ips-seo`.

## 4. Xuất & bàn giao — BẮT BUỘC chia 3 NHÓM
Mọi lần chạy phải trả về đủ **3 nhóm theo cấu trúc từ khoá** (mỗi từ kèm: ý định · volume · KD · nguồn; số thật mới ghi, ước lượng → 🔶):

1. **TỪ KHOÁ CHÍNH (head)** — 3-7 từ trụ của ngách. Volume lớn, cạnh tranh cao → định hướng tổng thể, làm bài trụ (pillar).
2. **TỪ KHOÁ LIÊN QUAN (related)** — biến thể, đồng nghĩa, cùng chủ đề (mid-tail). Mở rộng vùng phủ → làm bài nhánh.
3. **TỪ KHOÁ ĐUÔI DÀI NGƯỜI MUA (long-tail buyer-intent)** ⭐ — cụ thể, ý định mua/quyết định ("giá", "mua ở đâu", "khoá học … cho …", "… tốt nhất 2026"). Cạnh tranh thấp, dễ rank, chuyển đổi cao → **nền tảng quick-win**.

- Xuất `niche/<slug>/tu-khoa.md`:
  - **⭐ Top quick-win** (10-20 từ đuôi dài người mua: volume khá + KD thấp) lên ĐẦU.
  - Sau đó 3 bảng theo 3 nhóm trên.
  - **Cụm chủ đề** (trụ = từ khoá chính → nhánh = liên quan + đuôi dài) cho `ips-blog`.
- Lưu kho dùng chung: `wiki/topics/Từ khoá ngách <tên>.md`.
- Bàn giao: `ips-blog` (20 bài) · `ips-seo` (tối ưu) · `ips-ads` (target/negative keyword) · `ips-ngach`/persona (bằng chứng CẦU = volume).

## 5. Cổng chống bịa (BẮT BUỘC)
**KHÔNG bao giờ chế số volume/KD/CPC.** Chỉ ghi số khi lấy từ tool thật, kèm nguồn + ngày. Mọi ước lượng định tính phải dán nhãn 🔶 "chưa kiểm bằng công cụ".

## Tham khảo nội bộ
- `references/mcp-tu-khoa.md` — danh mục MCP/nguồn từ khoá + cách mở cổng connect + thứ tự degrade


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
