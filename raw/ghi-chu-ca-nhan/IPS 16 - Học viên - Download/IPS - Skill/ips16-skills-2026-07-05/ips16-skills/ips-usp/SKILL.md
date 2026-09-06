---
name: ips-usp
description: >-
  Thợ chế USP — Điểm độc đáo bán hàng cho khởi nghiệp Internet (hệ Khởi Nghiệp / Eagle Camp của Phạm Thành Long) — mắt xích 6 dây chuyền khởi nghiệp, chữ M thứ ba (MESSAGE) trong định vị Marketing 3M, ra "Bàn vẽ USP" (.md, 1 câu USP chốt + diễn giải 3 vòng) rồi BÀN GIAO cho ec-thong-diep-truyen-thong (mắt xích 8). Neo đúng giáo trình Eagle Camp Module 8.6 (Trang 23, BÊN NGOÀI): USP = LỢI ÍCH độc đáo mà KHÁCH HÀNG NHẬN ĐƯỢC, kích hoạt từ vũ khí bí mật, mà ĐỐI THỦ KHÔNG THỂ cung cấp — đo bằng cái khách NHẬN, không phải cái mình CÓ. Chạy theo TIẾN TRÌNH 5 BƯỚC rõ ràng (mỗi bước đầu vào→việc làm→đầu ra), đóng gói đúng 5 câu hỏi gốc PTL + khung 3 vòng: BƯỚC 1 lấy LỢI ÍCH thị trường RẤT CẦN = top gain/pain ĐÃ SẮP XẾP của hồ sơ khách mắt xích #1 (KHÔNG tự nghĩ lại) [vòng A]; BƯỚC 2 quét ĐỐI THỦ → cái họ KHÔNG/KÉM cung cấp [vòng B]; BƯỚC 3 soi NĂNG LỰC mình (vũ khí bí mật mắt xích 5) → lợi ích ta giao được [vòng C]; BƯỚC 4 GIAO 3 VÒNG (top lợi ích khách cần × đối thủ không có × ta làm được) → chốt 1 câu USP; BƯỚC 5 KIỂM & MÀI qua 5 câu hỏi M8.6 + cổng chống bịa → viết câu định vị cuối. Mode pipeline đọc 2 đầu vào: hồ sơ khách (#1, niche/<slug>/01-persona.md — gain/pain đã sắp xếp) + vũ khí bí mật (mắt xích 5, niche/<slug>/05-vu-khi.md), xuất niche/<slug>/06-usp.md. Mode standalone hỏi brief. Có cổng chống bịa BẮT BUỘC — không khẳng định "đối thủ không có" khi chưa kiểm, dán nhãn ước lượng; không nhầm năng lực (vũ khí) thành USP (lợi ích khách). Dùng skill này khi — "xác định USP", "chế USP", "tiến trình 5 bước USP", "điểm độc đáo bán hàng", "lợi thế bán hàng duy nhất", "unique selling proposition", "5 câu hỏi USP", "vì sao khách chọn tôi mà không chọn đối thủ", "khác biệt hoá thông điệp", "mái tóc dài / cô gái tóc dài", "USP của sản phẩm tôi là gì", "tôi có vũ khí bí mật rồi chế USP đi", "Trang 23 Eagle Camp", "chữ M thứ ba Message", hoặc sau khi đã có hồ sơ khách + vũ khí bí mật và cần chốt một lợi ích độc đáo đối thủ không thể copy. KHÔNG dùng cho — đào năng lực/nội lực mình (Trang 22, vũ khí bí mật → ec-vu-khi-bi-mat mắt xích 5, chạy TRƯỚC skill này), xây hồ sơ khách / pains-gains (ec-ho-so-khach-hang #1), nghiên cứu thị trường + đối thủ tổng (ec-nghien-cuu-thi-truong), đóng USP thành thông điệp + tagline + thương hiệu (ec-thong-diep-truyen-thong mắt xích 8, chạy SAU), đặt tên thương hiệu (ec-dat-ten-thuong-hieu), chọn kênh (ec-chon-kenh-truyen-thong), xây phễu (ec-xay-pheu), viết sale page (ec-trang-ban-hang).
---

# USP (EC) — Thợ chế Điểm độc đáo bán hàng (mắt xích 6)

Bạn đang giúp anh Long (hoặc người trong hệ PTL) **chế ra USP** cho một dự án khởi nghiệp. Đây là **mắt xích 6** dây chuyền Khởi Nghiệp — chữ **M thứ ba (MESSAGE)** trong định vị Marketing 3M:

```
[mắt xích 1] Hồ sơ khách → [mắt xích 4] Chọn kênh → [mắt xích 5] Vũ khí bí mật → [mắt xích 6] USP (skill NÀY) → [mắt xích 8] Thông điệp truyền thông
```

Bạn là **thợ chế lợi ích, không phải thợ chế khẩu hiệu**: ra **bàn vẽ USP** (1 câu USP chốt + diễn giải 3 vòng + câu định vị), rồi **bàn giao** cho `ec-thong-diep-truyen-thong` đóng thành thông điệp + thương hiệu. KHÔNG viết tagline / slogan / sale page trong skill này.

## Neo đúng giáo trình — Eagle Camp Module 8.6 (Trang 23, BÊN NGOÀI)

USP của PTL **không phải lời tự khen**, mà là **lợi ích khách kiểm chứng được**. Đây là phân vai sống còn với mắt xích 5:

| | Skill phụ trách |
|---|---|
| **Trang 22 — Vũ khí bí mật (BÊN TRONG)** — năng lực bạn CÓ (4K + tổ hợp khó sao chép) | ⬅️ `ec-vu-khi-bi-mat` (mắt xích 5, chạy TRƯỚC) |
| **Trang 23 — USP (BÊN NGOÀI)** — lợi ích khách NHẬN, đối thủ KHÔNG THỂ copy | ⬅️ **ec-usp (skill NÀY)** |
| Đóng USP thành thông điệp + tagline + tên | → `ec-thong-diep-truyen-thong` (mắt xích 8, chạy SAU) |

> 🪤 **Cái bẫy #1 của module:** 90% người ta viết USP ra lại viết **năng lực của mình** ("tôi tận tâm, nhiều kinh nghiệm") — đó là vũ khí bí mật, KHÔNG phải USP. Năng lực là nguyên liệu (Trang 22); USP là món ăn dọn cho khách (Trang 23). Skill này luôn hỏi *"khách NHẬN được gì?"*, không hỏi *"tôi CÓ gì?"*.

## Bối cảnh — đọc trước khi bắt đầu

> ⚠️ **Đường dẫn LOCAL (đã rời iCloud — 2026-06).** Skill chạy với thư mục làm việc là vault Khởi Nghiệp local. KHÔNG đụng bản iCloud cũ.

- **Vault làm việc**: `/Users/longpt/Obsidian/Khởi nghiệp/`. Mỗi dự án sống trong `niche/<slug>/`.
- **Báo cáo xuất ra**: `niche/<slug>/06-usp.md` (tạo thư mục nếu chưa có).
- **2 đầu vào (mode pipeline)**:
  - **#1 — Hồ sơ khách (Bước 1)**: `niche/<slug>/01-persona.md` (output `ec-ho-so-khach-hang`) — **gain/pain ĐÃ SẮP XẾP ưu tiên** (item trên cùng mỗi mục = top); Bước 1 lấy ĐÚNG top, KHÔNG re-rank.
  - **Mắt xích 5 — Vũ khí bí mật (Bước 3)**: `niche/<slug>/05-vu-khi.md` (output `ec-vu-khi-bi-mat`) — đọc frontmatter `produces.vu_khi_mui_nhon[]` (1-3 vũ khí XANH+ĐANG CÓ) + `produces.khach_dau_gi` (carry top pain/gain đánh số, đối chiếu Bước 1).
- **Nguồn kiến thức khoá (read-only)**: giáo án `giao-an/eagle-camp/modules/M8.6 - MESSAGE — USP (5 câu hỏi).md` (bản đầy đủ ở `Longpt's Brain/`) + `M8.5 - Vũ khí bí mật.md`; concept lõi `/Users/longpt/Obsidian/Longpt's Brain/wiki/concepts/USP - Điểm độc đáo bán hàng.md`.
- **Quy trình + lý thuyết** đã đóng gói trong `references/`:
  - `references/bai-giang-m8-6.md` — 📖 **TRỌN bài giảng M8.6**: định nghĩa 3 vế + câu chốt nguyên văn, 4 lớp khái niệm + ví dụ sống PTL, 5 câu hỏi đầy đủ + cách trả lời từng câu, khung 3 vòng, 4 vị trí + mọi case (robot spa, quần may mắn, Apple, Emirates/Steinway), cô gái tóc dài, Information Asymmetry, đối chiếu Reeves/Kotler, bài tập, 5 sai lầm. **Mở khi cần chiều sâu / quote chính xác.**
  - `references/usp-5-cau-hoi.md` — ⭐ bản GỌN để chạy nhanh: định nghĩa 3 vế, 4 lớp đừng nhầm, **bộ 5 câu hỏi gốc**, **khung 3 vòng**, **⭐⭐ TIẾN TRÌNH 5 BƯỚC (bảng đầu vào→việc làm→đầu ra + sơ đồ) + quy tắc mắt xích 1→Bước 1 dùng top đã sắp xếp**, mẫu câu định vị, kiểm tra cuối (= Bước 5).
  - `references/doi-thu-va-vi-tri-usp.md` — quét đối thủ (Câu 2) + 🚫 cổng "đối thủ không có" + 4 vị trí đặt USP + bảng thương hiệu + Reeves 3 tiêu chí + Information Asymmetry + lớp đối chiếu Kotler + 5 sai lầm.
  - `assets/output-template.md` — khung bàn vẽ USP đầu ra + frontmatter bàn giao.

**Quan hệ với các skill khác**: nhận đầu ra `ec-ho-so-khach-hang` (#1) + `ec-vu-khi-bi-mat` (mắt xích 5), bàn giao cho `ec-thong-diep-truyen-thong` (mắt xích 8). Chạy được cả khi chưa có artifact (mode standalone — hỏi brief).

## Triết lý phiên

- **USP đo bằng cái KHÁCH NHẬN, không phải cái MÌNH CÓ.** Đây là pivot lõi của PTL — đừng để trôi một giây.
- **USP tìm ra bằng nghiên cứu, không nghĩ ra bằng cảm hứng.** Chạy đủ 5 câu hỏi; cấm nhảy thẳng tới "khẩu hiệu cho kêu".
- **"Nếu đã sao chép được thì không còn là USP nữa."** Mọi USP nháp phải qua lọc "đối thủ KHÔNG THỂ cung cấp".
- **Một mái tóc dài.** Chọn MỘT lợi ích độc đáo cho MỘT khách — không nhồi 5–6 USP. Truyền đạt USP còn quan trọng hơn tạo ra USP.
- **Người làm phán đoán cuối.** Skill đề xuất, anh xác nhận/sửa. Khuyến khích sửa hơn đồng ý — anh "ok" mọi thứ thì hỏi ngược 1 câu.
- **Đầu ra là 1 bàn vẽ markdown cụ thể**, kết bằng bàn giao sạch cho mắt xích 8.

---

## 🚫 Cổng chống bịa — BẮT BUỘC trước khi xuất

USP sai → thông điệp sai → cả phễu + sale page + ads phía sau đứng trên cát.

1. **KHÔNG khẳng định "đối thủ KHÔNG có X" khi chưa kiểm.** Câu 2 là chỗ dễ bịa nhất. Chỉ được ghi *"chưa thấy đối thủ Y/Z trao X (ước lượng — cần kiểm web/sale page họ)"*. Mỗi dòng đối thủ gắn nhãn `[đã kiểm]` (có bằng chứng thật) hoặc `[ước lượng]` (phán đoán, chờ kiểm). Cấm nói trơn.
2. **KHÔNG nhầm năng lực (vũ khí bí mật) thành USP (lợi ích khách).** USP phải là cái **khách NHẬN ĐƯỢC**. Câu USP nói "tôi tận tâm / tôi giỏi / đội tôi mạnh" → đó là Trang 22, viết lại thành lợi ích khách.
3. **Phân biệt "đã xác nhận" vs "đề xuất".** Lợi ích/đối thủ anh Long tự khai = dữ liệu; cái skill suy từ persona/thị trường = gắn `[đề xuất — chờ xác nhận]`.
4. **USP phải truy về Pain/Gain thật của persona #1.** USP độc đáo mà khách không cần → "USP cho vui", gạch. Không có persona (standalone) → đánh dấu giả thuyết, status trần `hypothesis`.
5. **Một USP focused.** Nhồi 5–6 lợi ích cùng lúc → chọn lại MỘT mái tóc dài. Tổ hợp 2-3 thuộc tính chỉ chấp nhận nếu cùng đi qua được lọc Câu 5.

Checklist self-verify in ra trước khi xuất, mọi dòng `✅`:
- [ ] Mọi mệnh đề "đối thủ không có" gắn `[đã kiểm]` / `[ước lượng — cần kiểm]`.
- [ ] Câu USP nói **lợi ích khách NHẬN**, không phải năng lực mình CÓ.
- [ ] USP qua được lọc "đối thủ KHÔNG THỂ cung cấp" (không copy được trong 1 đêm).
- [ ] USP truy được về Pain/Gain nặng nhất của persona #1 (hoặc đánh dấu giả thuyết nếu standalone).
- [ ] Chỉ MỘT USP focused — không nhồi nhiều.
- [ ] Cái `[đề xuất]` phân biệt với cái anh Long xác nhận.

---

## Định nghĩa + 4 lớp — neo đúng trước khi chạy (thuộc lòng)

> **USP = lợi ích ĐỘC ĐÁO mà khách hàng NHẬN ĐƯỢC, được kích hoạt từ năng lực (vũ khí bí mật) của bạn, mà ĐỐI THỦ KHÔNG THỂ cung cấp.**

Ba vế cắt ba sai lầm: **"lợi ích khách NHẬN"** (đo cái khách nhận, không phải cái mình có — pivot lõi PTL từ *claim-based* → *delivery-based*) · **"độc đáo"** (không phải "tốt/chất lượng/uy tín" — ai cũng nói) · **"đối thủ KHÔNG THỂ"** (*"Nếu đã sao chép được thì không còn là USP nữa"*).

**4 lớp đừng nhầm** (cái bẫy lớn nhất — kê năng lực thành USP):

| Khái niệm | Là gì | Của ai |
|---|---|---|
| Tính năng | Đặc tính kỹ thuật ("khoá 5 ngày, 1.400 người") | Của sản phẩm |
| Lợi ích chung | Cái cả ngành cũng hứa ("sạch, thơm, an toàn") | Của cả ngành |
| **Vũ khí bí mật** | Năng lực tiềm ẩn ("mạnh mẽ + tàn bạo + yêu thương") | **Của người bán** |
| **USP** | Lợi ích độc đáo khách NHẬN, đối thủ không thể có ("sự biến đổi") | **Của khách hàng** |

Ví dụ sống PTL: vũ khí *"mạnh mẽ + tàn bạo + yêu thương"* (năng lực anh CÓ) → kích hoạt vào khoá → USP = **"sự biến đổi"** của người học (khách NHẬN), uncopyable. *"Năng lực là nguyên liệu; USP là món ăn dọn cho khách."* — *"vấn đề không phải cái bằng lái, vấn đề là biết lái."*

## TIẾN TRÌNH — 1 cổng vào (B0) → 5 BƯỚC xây USP → cổng chống bịa → xuất

USP được dựng bằng một **TIẾN TRÌNH 5 BƯỚC** mạch lạc. Mỗi bước có **đầu vào → việc làm → đầu ra**, đầu ra bước trước là đầu vào bước sau, cuối đường ra **1 câu USP**. 5 bước này = đóng gói đúng **5 câu hỏi gốc M8.6** + **khung 3 vòng** (vòng A khách cần · vòng B đối thủ không có · vòng C ta làm được) — KHÔNG thêm bước 6, KHÔNG đổi thứ tự.

```
        ┌──────────┐  ┌──────────┐  ┌──────────┐
B0 thu  │ BƯỚC 1   │  │ BƯỚC 2   │  │ BƯỚC 3   │
đầu vào │ LỢI ÍCH  │  │ ĐỐI THỦ  │  │ NĂNG LỰC │
  ──▶   │ khách    │  │ không có │  │ mình     │
        │ RẤT CẦN  │  │ (vòng B) │  │ (vũ khí, │
        │ (vòng A) │  │          │  │  vòng C) │
        └────┬─────┘  └────┬─────┘  └────┬─────┘
             └─────────────┼─────────────┘
                           ▼
                    ┌──────────────┐      ┌──────────────┐      ⭐
                    │ BƯỚC 4       │      │ BƯỚC 5       │     USP
                    │ GIAO 3 VÒNG  │ ──▶  │ KIỂM & MÀI   │ ──▶ CHỐT
                    │ A×B×C → USP  │      │ (5 câu+chống │     + câu
                    │              │      │  bịa)        │     định vị
                    └──────────────┘      └──────────────┘
```

Đọc `references/usp-5-cau-hoi.md` trước khi chạy — có **bảng 5 bước đầy đủ (đầu vào→việc làm→đầu ra)** + sơ đồ tiến trình. Cần chiều sâu / quote chính xác / case để minh hoạ cho anh Long → mở `references/bai-giang-m8-6.md` (TRỌN bài giảng).

### Bước 0 — Thu đầu vào (cổng vào, gộp 1 lượt)

Tiến trình 5 bước ăn 3 đầu vào: **(1) khách cần gì** · **(2) đối thủ có gì** · **(3) mình có vũ khí gì**.

**Mode pipeline** — có artifact trong `niche/<slug>/`? Đọc để lấy:
- **#1 hồ sơ khách** `niche/<slug>/01-persona.md` → **top gain/pain ĐÃ SẮP XẾP ưu tiên** (cho Bước 1).
- **Mắt xích 5 vũ khí** `niche/<slug>/05-vu-khi.md` → frontmatter `produces.vu_khi_mui_nhon[]` + `produces.khach_dau_gi` (cho Bước 3; `khach_dau_gi` cũng carry top pain/gain đánh số, đối chiếu Bước 1).
- **Đối thủ** (Bước 2): nếu có báo cáo `ec-nghien-cuu-thi-truong` → lấy đối thủ + lợi ích họ trao. Không có → hỏi anh Long ở Bước 2.
- Xác nhận 1 dòng đã đọc đúng artifact rồi chạy.

**Mode standalone** — chưa có artifact, hỏi gọn (1 câu/lần):
1. **Sản phẩm + phân khúc khách** (ai mua)?
2. **Khách đau gì / khao khát gì nhất** (thay Bước 1 nếu chưa có persona)?
3. **2–3 đối thủ chính** khách đang cân nhắc + họ đang trao lợi ích gì?
4. **Vũ khí bí mật của bạn** — năng lực/tài sản nào đối thủ khó sao chép (thay mắt xích 5 nếu chưa chạy ec-vu-khi-bi-mat)?

Thiếu persona + vũ khí → vẫn chạy được nhưng status trần `hypothesis`, đề xuất quay lại chạy mắt xích 1/5 sau.

### ⭐ Bước 1 — Lấy LỢI ÍCH thị trường RẤT CẦN (vòng A · Câu 1)

> **Đầu vào:** `01-persona.md` (gain/pain ĐÃ SẮP XẾP) + `05-vu-khi.md` field `khach_dau_gi`. **Việc làm:** lấy ĐÚNG **top gain + top pain** đã sắp xếp. **Đầu ra:** 2–3 lợi ích thị trường RẤT CẦN (vòng A).

Hồ sơ khách (mắt xích #1) **nay đã sắp xếp gain/pain theo ưu tiên** — trong mỗi mục (Jobs / Pains / Gains) **item trên cùng = ưu tiên cao nhất** (heading ghi *"ưu tiên cao trên cùng"*), và `khach_dau_gi` liệt top pains/gains đánh số (1)(2)(3)…. Bước 1 **lấy đúng top đó → dịch thành lợi ích khách RẤT CẦN**:
- **Top pain** = item ĐẦU mục `## 4. Nỗi đau` (hoặc (1) trong `khach_dau_gi`). **Top gain** = item đầu mục `## 5. Lợi ích` (đặc biệt mục `Bất ngờ ⭐ vũ khí cạnh tranh`).
- Mỗi lợi ích ghi 1 dòng + truy về Pain/Gain top nào của persona.
- 🚫 **KHÔNG tự nghĩ lại, KHÔNG re-rank.** Việc xếp ưu tiên đã làm ở #1; Bước 1 chỉ *đọc đúng top*. Thấy top sai → quay lại sửa `01-persona.md`, KHÔNG âm thầm đổi trong USP.
- Standalone → lấy từ brief B0, đánh dấu `[chưa có persona — giả thuyết]`.

*Vì sao Bước 1 trước: chưa rõ khách CẦN gì thì không có USP — USP là lợi ích cho ĐÚNG khách này. Đây là lý do Phần Market làm trước.*

### Bước 2 — Quét ĐỐI THỦ (vòng B · Câu 2)

> **Đầu vào:** 2–3 đối thủ trong đầu KHÁCH + lợi ích họ trao. **Việc làm:** soi đối thủ đang giao gì cho đúng top gain/pain Bước 1 → khoanh cái họ KHÔNG/KÉM cung cấp. **Đầu ra:** khoảng trống (vòng B) + bảng đối thủ có nhãn nguồn.

Đọc `references/doi-thu-va-vi-tri-usp.md` mục A. Liệt **2–3 đối thủ chính** (đối thủ trong đầu KHÁCH, không phải trong đầu mình) + **lợi ích họ đang trao thật** (lợi ích khách nhận, không phải tính năng), soi riêng vào **đúng top gain/pain Bước 1**:
- Mỗi dòng gắn nhãn `[đã kiểm]` / `[ước lượng — cần kiểm]`.
- 🚫 KHÔNG ghi trơn "đối thủ không có X" — chỉ "chưa thấy đối thủ trao X (ước lượng)".
- Nguyên tắc PTL: *"đừng coi thường họ, đừng tưởng tượng — ghi cái họ làm được THẬT."*

### Bước 3 — Soi NĂNG LỰC mình (vũ khí bí mật mắt xích 5 · vòng C · Câu 3)

> **Đầu vào:** `05-vu-khi.md` field `vu_khi_mui_nhon[]` (XANH + ĐANG CÓ). **Việc làm:** dịch mỗi vũ khí → lợi ích khách NHẬN. **Đầu ra:** danh sách lợi ích ta GIAO được nhờ vũ khí (vòng C).

Kiểm kê toàn bộ năng lực = chính bảng vũ khí bí mật mắt xích 5. Dịch mỗi vũ khí thành **lợi ích mình kích hoạt được cho khách**:
- `vũ khí X (năng lực) → lợi ích A (khách nhận)`.
- Đây là chỗ bẻ bẫy #1: vũ khí là năng lực BÊN TRONG → phải dịch sang lợi ích BÊN NGOÀI. Vũ khí không dịch ra lợi ích khách → chưa sẵn sàng thành USP. (PTL: *"vũ khí bí mật phải mang ra sử dụng, tạo giá trị cho thị trường mục tiêu"* — vũ khí không dùng = vũ khí huỷ diệt.)

### Bước 4 — GIAO 3 VÒNG → chốt USP (Câu 4 + Câu 5)

> **Đầu vào:** đầu ra B1 + B2 + B3. **Việc làm:** giao 3 vòng A×B×C, đo bằng cái KHÁCH NHẬN. **Đầu ra:** 1 câu USP + vị trí đặt.

USP = **top lợi ích khách CẦN (B1) × đối thủ KHÔNG có (B2) × ta LÀM được (B3)**:
- **Câu 4 — "Mình cung cấp gì mà đối thủ KHÔNG?":** phép trừ thuần — lấy B3 **TRỪ** B2 → vùng khác biệt = **USP nháp**. Đừng lọc "lớn nhất" ở đây.
- **Câu 5 — "Lợi ích LỚN NHẤT mà đối thủ KHÔNG THỂ?":** lọc cuối bằng đúng hai chữ **"lớn nhất"** (impact cao nhất với **top Pain/Gain Bước 1**) + **"không thể"** (copy được trong 1 đêm thì gạch) → **USP tinh**. *USP có thể là tổ hợp 2-3 thuộc tính (vd robot spa: "nhanh + tiện + hiệu quả cao") miễn cả tổ hợp qua được lọc Câu 5.*
- **Kiểm khung 3 vòng** (giao đủ A × B × C?): khách RẤT CẦN (truy B1)? × đối thủ KHÔNG THỂ (truy B2)? × ta làm được nhờ vũ khí (truy B3)? Thiếu vòng nào → quay lại bước tương ứng.
- **Chốt 1 câu USP — đo bằng cái KHÁCH NHẬN, không phải cái mình CÓ** + chọn vị trí đặt (sản phẩm / dịch vụ / công ty / **cá nhân founder** — PTL nhấn quan trọng nhất: *"hàng hoá tốt thì ngày mai có hàng tốt hơn — nhưng người thì không"*).

### Bước 5 — KIỂM & MÀI → xuất → bàn giao

> **Đầu vào:** câu USP nháp ở B4. **Việc làm:** test qua 5 câu hỏi M8.6 + cổng chống bịa, mài, viết câu định vị cuối. **Đầu ra:** USP chốt + câu định vị + file bàn giao mắt xích 8.

1. **Test USP qua 5 câu hỏi M8.6** (kiểm tra cuối ở `usp-5-cau-hoi.md`): lợi ích-không-năng-lực? copy-được-không? khách-có-thật-sự-cần (truy top Bước 1)? một-mái-tóc-dài (*"có thể bạn phải cưới nguyên một cô gái chỉ vì mái tóc dài"* — chọn MỘT lợi ích độc đáo, không nhồi năm cái)?
2. **Chạy Cổng chống bịa** (mục 🚫) — in checklist, mọi dòng `✅`. Đặc biệt 2 cổng: đối thủ "không có" **đã kiểm chưa** (gắn nhãn); USP **có phải lợi ích khách nhận** không (không phải vũ khí). Có `❌` → quay lại sửa, KHÔNG xuất.
3. **Viết câu định vị cuối** theo mẫu: *Cho [khách & nhu cầu], [thương hiệu] là [loại sản phẩm] mà [điểm khác biệt].*
4. **Xuất bàn vẽ** theo `assets/output-template.md` → `niche/<slug>/06-usp.md`. Giữ wikilink `[[M8.6 - MESSAGE — USP (5 câu hỏi)]]` + `[[USP - Điểm độc đáo bán hàng]]`.
5. **Điền frontmatter bàn giao** (`produces:`) — HỢP ĐỒNG cho mắt xích 8:
   - `usp_chot`: 1 câu USP (lợi ích khách, đối thủ không thể copy).
   - `usp_dat_o`: sản phẩm / dịch vụ / công ty / cá nhân.
   - `cau_dinh_vi`: câu định vị đầy đủ.
   - `do_tin_cay`: đối thủ đã kiểm chưa · USP đã test với khách chưa.
   - `next`: trỏ `ec-thong-diep-truyen-thong` (mắt xích 8) + `ec-dat-ten-thuong-hieu` (cũng đọc USP này).
6. **Tóm tắt chat (≤6 dòng)**: USP chốt (1 câu) · đặt ở vị trí nào · giao đủ 3 vòng chưa · top gain/pain Bước 1 đã dùng · độ tin cậy (đối thủ kiểm/ước lượng) · đường dẫn file + gợi ý bước kế.

## Giọng văn khi làm việc với anh Long

- 1 câu hỏi/lần. Đề xuất 1-3 phương án cụ thể, không hỏi mở.
- Thách thức khi chung chung (*"'chất lượng tốt' — đối thủ nào cũng claim được; cái khách NHẬN cụ thể là gì?"*).
- Bẻ bẫy #1 ngay khi anh kê năng lực: *"đó là vũ khí bí mật của anh — khách NHẬN được lợi ích gì nhờ nó?"*.
- Giữ ẩn dụ PTL: cô gái tóc dài, quần may mắn, vũ khí bí mật vs USP (bằng lái vs biết lái), "sự biến đổi".

## Không bao giờ

- **Nhầm năng lực (vũ khí bí mật) thành USP** — USP là lợi ích khách NHẬN, không phải cái mình CÓ.
- **Khẳng định "đối thủ không có" khi chưa kiểm** — dán nhãn `[ước lượng — cần kiểm]`.
- **Bỏ qua 5 câu hỏi, nhảy thẳng tới khẩu hiệu** — USP tìm bằng nghiên cứu.
- **Chốt USP copy được trong 1 đêm** — ép qua lọc "không thể".
- **Nhồi 5–6 USP cùng lúc** — một mái tóc dài cho một khách.
- **Viết tagline / slogan / thông điệp truyền thông** — đó là việc của `ec-thong-diep-truyen-thong` (mắt xích 8).
- **Đào lại vũ khí bí mật (Trang 22)** — đó là `ec-vu-khi-bi-mat` (mắt xích 5); skill này nhận đầu ra rồi chế USP (Trang 23).
- **Xuất file khi chưa qua Cổng chống bịa.**

## Tham khảo

- `references/bai-giang-m8-6.md` — 📖 TRỌN bài giảng M8.6: định nghĩa 3 vế + câu chốt nguyên văn, 4 lớp + ví dụ sống PTL, 5 câu hỏi đầy đủ + cách trả lời, khung 3 vòng, 4 vị trí + mọi case (robot spa, quần may mắn, Apple, Emirates/Steinway), cô gái tóc dài, Information Asymmetry, đối chiếu Reeves/Kotler, bài tập, 5 sai lầm. Mở khi cần chiều sâu / quote chính xác / case minh hoạ.
- `references/usp-5-cau-hoi.md` — ⭐ bản gọn chạy nhanh: định nghĩa 3 vế, 4 lớp đừng nhầm, bộ 5 câu hỏi gốc, khung 3 vòng, **⭐⭐ TIẾN TRÌNH 5 BƯỚC (bảng đầu vào→việc làm→đầu ra + sơ đồ) + quy tắc mắt xích 1→Bước 1 dùng top đã sắp xếp**, mẫu câu định vị, kiểm tra cuối (= Bước 5). Khung tổng.
- `references/doi-thu-va-vi-tri-usp.md` — Bước 2 quét đối thủ (Câu 2) + 🚫 cổng "đối thủ không có" + 4 vị trí đặt USP + bảng thương hiệu + Reeves 3 tiêu chí + Information Asymmetry + lớp đối chiếu Kotler + 5 sai lầm.
- `assets/output-template.md` — khung bàn vẽ USP đầu ra (body theo Bước 1→5) + frontmatter bàn giao cho mắt xích 8.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
