---
name: ips-top-100
description: Nghiên cứu TOP 100 ĐỐI THỦ cùng ngách cho hệ Internet Power System (IPS) của Phạm Thành Long — quét đa nguồn (web, mạng xã hội, marketplace, ads library, danh sách Dream 100, từ khoá có sẵn) tới 100 người chơi cùng tệp khách, giải phẫu từng cái (kênh · hook · offer · giá · điểm mạnh · điểm yếu · review xấu) để lộ KHE HỞ ĐỊNH VỊ mình chen vào. Bước 3 trong pipeline ips-build; feed ips-ngach (ngách=(1+2)−3) + ips-usp + ips-ads. Được phép DÙNG PYTHON, WebSearch/WebFetch, kết nối MCP (SEO/social/scraping/AI deep-research nếu có), nguồn từ khoá có sẵn, spawn agent quét song song. Dùng skill này khi người dùng muốn "nghiên cứu đối thủ", "phân tích cạnh tranh", "top 100", "Dream 100", "ai đang bán cái này", "khe hở thị trường", hoặc trước khi chốt ngách/USP. Bản nâng cấp gộp ec-vu-khi-bi-mat + ec-nghien-cuu-thi-truong, hướng Internet.
---

# IPS · Top 100 Đối thủ (Bước 3)

Bạn dựng **bản đồ tới 100 đối thủ cùng ngách** và chắt ra **khe hở định vị** — đạn cho `ips-ngach` và `ips-usp`. Làm THẬT, quét THẬT, **không bịa cho đủ số**.

## 1. Đầu vào
- **Ngách / chủ đề** (từ `ips-ngach` hoặc người dùng đưa) + **persona** (`ho-so-khach-hang-vpc`).
- **Kho từ khoá** (`ips-tu-khoa` nếu đã chạy) để biết quét theo cụm nào.

## 2. Năng lực được phép dùng (tận dụng tối đa)
- **Python (Bash)**: gọi API, xử lý/dedup danh sách, parse kết quả, lập bảng, tính thị phần ước lượng.
- **WebSearch + WebFetch**: tìm + đọc trang đối thủ, fanpage, kênh, sale page.
- **MCP**: lúc chạy **ToolSearch** dò connector phù hợp (SEO/social/ads library/scraping/AI deep-research). Có → dùng. Chưa có → degrade (xem mục 4) và có thể gợi ý người dùng nối (`suggest_connectors`).
- **deep-research skill** + **spawn agent (Explore/general) song song**: mỗi agent quét 1 góc khác nhau.
- **Nguồn dữ liệu có sẵn trong vault**: `Hoc/raw/ips`, `PLR/raw`, research cũ → đọc trước, đỡ quét lại.

## 3. Quét đa góc (multi-modal sweep — mỗi góc 1 luồng)
1. **Theo từ khoá**: search các từ khoá ngách → ai lên top organic/ads.
2. **Theo nền tảng**: YouTube · Facebook/fanpage · TikTok · Instagram · blog/web · sàn TMĐT/khoá học (Unica, Kyna, Udemy…).
3. **Theo quảng cáo**: Facebook Ads Library / TikTok Creative Center → ai đang chạy ads ngách này.
4. **Theo Dream 100**: KOL/thương hiệu lớn nhất ngách (kể cả gián tiếp).
5. **Theo review**: đọc bình luận/đánh giá xấu của đối thủ → lộ điểm yếu.

> Chạy song song bằng agent khi có Agent tool; gom kết quả → **dedup** (Python) theo tên/kênh.

## 4. Degrade khi thiếu công cụ
Không có MCP SEO/ads library → dùng WebSearch + đọc trực tiếp; số liệu (follower/view/giá) lấy từ trang công khai. **Không truy được số → để 🔶 + ghi "cần [tool] kiểm"**. KHÔNG suy đoán thị phần thành con số chắc.

## 5. Giải phẫu mỗi đối thủ (bảng chuẩn)
| Tên/Thương hiệu | Kênh chính | Hook/Thông điệp | Offer & giá | Điểm mạnh | Điểm yếu / review xấu | Nguồn (link) |

→ Sau bảng: **cụm hoá** (nhóm đối thủ theo cách chơi) → tìm khoảng trống chung → **3-5 KHE HỞ ĐỊNH VỊ** kèm bằng chứng.

## 6. Xuất & bàn giao
- Xuất `niche/<slug>/02-top-100.md`: bảng đối thủ + cụm hoá + khe hở định vị.
- Lưu kho dùng chung: `wiki/topics/Đối thủ ngách <tên>.md` (tái dùng dự án sau).
- Bàn giao: `ips-ngach` (khe hở → trừ vào (1+2)) · `ips-usp` (khe hở → USP) · `ips-noi-dung`/`ips-ads` (học hook).

## 7. Cổng chống bịa (BẮT BUỘC)
- Chỉ liệt đối thủ **tìm thấy thật**, mỗi cái có link nguồn.
- Không đủ 100 → **báo rõ "tìm được N/100, lý do"** — KHÔNG bịa thêm tên/số cho đủ.
- Mọi số (follower/view/giá/thị phần) chưa kiểm bằng tool → 🔶.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
