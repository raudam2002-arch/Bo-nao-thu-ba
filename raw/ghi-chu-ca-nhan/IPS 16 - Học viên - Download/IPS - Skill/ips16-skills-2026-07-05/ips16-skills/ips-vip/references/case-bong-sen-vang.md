# CASE WORKED — Bông Sen Vàng (Lotusmiles · Vietnam Airlines) ⭐ KHUÔN CHUẨN

> **Case study chuẩn của skill** — chương trình khách hàng cao cấp / loyalty tier hoàn chỉnh nhất ai cũng từng thấy, dùng làm **khuôn để soi** khi thiết kế tier cho doanh nghiệp người làm. Đây là cùng case PTL mổ xẻ trong M5.6 (mục C `bai-giang-m9-5.md`), nhưng ở đây distill từ **NGUỒN GỐC THẬT** — trang chính thức Vietnam Airlines anh Long tải về, không phải ghi chú lớp.
>
> 🚫 **CỔNG CHỐNG BỊA cho file này:** mọi con số dưới đây là **SỐ THẬT của Vietnam Airlines** (cite raw chính thức). Khi áp cho sản phẩm khác = **KHUÔN/pattern**, KHÔNG bê số nguyên (DN nhỏ ≠ hãng bay 6 triệu hội viên · 25 năm). Mọi lần soi case phải dán nhãn `(theo Bông Sen Vàng — khuôn soi, tự tính lại theo dữ liệu của anh)`. Không hứa "làm như VNA sẽ ra kết quả như VNA".
>
> **Nguồn gốc THẬT (raw chính thức VNA — anh Long tải 2026-06-26):**
> - `raw/Bông sen vàng/Quyền lợi và tiêu chí xét hạng.md` — 5 hạng + bảng so sánh quyền lợi đầy đủ + tiêu chí xét/duy trì hạng. URL: https://www.vietnamairlines.com/.../tier-benefits-eligibility
> - `raw/Bông sen vàng/Quyền lợi dành cho hội viên hạng Vàng.md` — chi tiết tier Vàng. URL: .../tier-benefits-eligibility/gold
> - `raw/Bông sen vàng/Quyền lợi dành cho hội viên hạng Bạch kim.md` — chi tiết tier Bạch kim. URL: .../tier-benefits-eligibility/platinum
> - `raw/Bông sen vàng/CLAUDE.md` — giới thiệu chương trình (>6 triệu hội viên, >25 năm, miễn phí tham gia từ 2 tuổi).
>
> *(Lưu ý: ghi chú lớp RF4/RF5 trong `bai-giang-m9-5.md` gọi hạng 3 là "Bông Sen Vàng" — trang chính thức gọi đó là hạng **Vàng** ("Bông Sen Vàng" = tên CHƯƠNG TRÌNH, không phải tên hạng). Số dặm khớp nhau: Titan 15k / Vàng 30k / Bạch kim 50k / Triệu dặm 1M. File này lấy số liệu trang chính thức làm chuẩn.)*

---

## 0. Vì sao Bông Sen Vàng là khuôn chuẩn

>6 triệu hội viên, >25 năm — chương trình loyalty bài bản nhất VN, và là case PTL chọn để dạy M5.6. Nó hội đủ **MỌI** mảnh của bộ khung "2 bảng VIP" + nhiều pattern nâng cao mà DN nhỏ thường bỏ sót: tiêu chí KÉP, cơ chế tự xuống hạng, leo thang quyền lợi, get hội viên qua đối tác, phân khúc tiêu chí. Soi case này = có checklist đầy đủ.

⭐ **Mệnh đề lõi (PTL):** *Cái thẻ tạo ra khách cao cấp, chứ không phải khách cao cấp đòi có thẻ.* VNA không đi tìm "người giàu" tặng phòng chờ — họ **vẽ ra** thẻ Bạc/Titan/Vàng/Bạch kim/Triệu dặm, rồi ai bay nhiều/chi nhiều thì leo vào.

---

## 1. THANG HẠNG LEO DẦN — 5 hạng, quyền lợi tăng dần

VNA dùng **5 hạng** (vượt khung 3–4 hạng tối thiểu PTL — DN nhỏ KHÔNG cần 5 hạng, 3–4 là đủ):

```
Bạc → Titan → Vàng → Bạch kim → Triệu dặm
 (thấp)                            (đỉnh, trọn đời)
```

| Hạng | SkyTeam tương ứng | Vai trò trong tháp |
|---|---|---|
| **Bạc** | — | Cửa vào, gần như miễn phí (1 dặm) — "ai cũng có thể là hội viên" |
| **Titan** | Elite | Tier ưu tiên thủ tục + hành lý đầu tiên |
| **Vàng** | Elite | Tier phòng chờ Thương gia — bước nhảy đặc quyền lớn |
| **Bạch kim** | Elite Plus | Tier cao cấp đầy đủ — lối đi riêng, +2 hành lý |
| **Triệu dặm** | Elite Plus | Tier đỉnh **trọn đời** + đặc quyền gia đình |

→ **Pattern áp cho DN:** xếp 3–4 hạng tên signature theo thứ tự ai cũng hiểu; mỗi hạng lên là một "bước nhảy đặc quyền" rõ rệt (không chỉ +1% giảm giá). Tier đỉnh nên là **danh hiệu trọn đời** để thưởng người trung thành nhất.

---

## 2. TIÊU CHÍ XÉT HẠNG KÉP ⭐ (pattern quan trọng nhất)

Đây là mảnh quan trọng nhất Bông Sen Vàng bơm vào skill. Mỗi hạng cho khách **HAI ĐƯỜNG** lên hạng — đạt **MỘT trong hai** là đủ:

| Hạng | Đường A — DẶM xét hạng (theo CHI TIÊU) | Đường B — CHẶNG xét hạng (theo TẦN SUẤT) |
|---|---|---|
| Bạc | tối thiểu **1 dặm** | — (không thời hạn) |
| Titan | **15.000 dặm**/kỳ | **18 chặng** (từ 1/7/2026: **20 chặng**) |
| Vàng | **30.000 dặm**/kỳ | **27 chặng** (từ 1/7/2026: **30 chặng**) |
| Bạch kim | **50.000 dặm**/kỳ | **45 chặng** (từ 1/7/2026: **50 chặng**) |
| Triệu dặm | **1.000.000 dặm** cộng dồn (lifetime, chỉ tính chuyến VN khai thác) | — |

*(Số thật — `raw/Bông sen vàng/Quyền lợi và tiêu chí xét hạng.md`. Khuôn soi, KHÔNG bê nguyên.)*

**Vì sao KÉP quan trọng:** khách bay nhiều chặng giá rẻ (dặm thấp nhưng đi liên tục) và khách bay ít chặng giá cao (dặm cao nhưng đi ít) — **cả hai đều có đường lên hạng**. Không bỏ sót loại khách giá trị nào.

→ **Pattern áp cho DN (KHUÔN — chống bịa):**
> Cho khách lên hạng theo **"tổng chi tiêu HOẶC số lần mua"** — đạt một trong hai là đủ.
> - **Đường A (chi tiêu)** bắt loại "mua giá trị cao / số lượng lớn" → kéo đòn bẩy 5 (biên/AOV).
> - **Đường B (tần suất)** bắt loại "mua nhiều lần" → kéo đòn bẩy 4 (tần suất).
> Vd (ước lượng — tự tính lại): "Hạng Vàng = chi ≥ 50tr/năm **HOẶC** mua ≥ 12 lần/năm". KHÔNG bê 15k/30k dặm của VNA.

⚠️ Ánh xạ vào **Bảng Điều kiện** (`bang-dieu-kien.md` Cách 1 + Cách 2 **kết hợp** thành cột kép): thêm cột "Đường A (tiền)" + cột "Đường B (lần)" cho mỗi hạng.

---

## 3. KỲ XÉT HẠNG + DUY TRÌ + TỰ XUỐNG HẠNG ⭐ (cơ chế giữ khách quay lại)

- **Kỳ xét hạng = 12 tháng liên tiếp** kể từ ngày xác nhận hạng thẻ.
- Hạng thẻ (Titan/Vàng/Bạch kim) **có giá trị 12 tháng** — phải đạt lại ngưỡng trong kỳ kế để **DUY TRÌ**.
- **Không đủ điều kiện kỳ sau → TỰ ĐỘNG xuống hạng thấp hơn**, tương đương số dặm/chặng tích được kỳ đó. Nguyên văn raw: *"Nếu không đáp ứng được điều kiện duy trì hạng thẻ, thẻ hội viên sẽ tự động xuống hạng thấp hơn."*
- **Bạc**: không thời hạn (cửa vào không mất). **Triệu dặm**: **trọn đời** — đạt 1 lần giữ mãi.

**Tâm lý lõi:** khách leo lên Vàng rồi **sợ rớt Bạc** → phải mua đều để giữ vị thế. Đây là cách VIP "khoá cái tôi" (khác continuity "khoá ví tiền"). Cái khoảng cách "còn bao xa để duy trì/lên hạng" chính là động lực chi thêm.

→ **Pattern áp cho DN:**
> 1. Hạng có **hạn** (vd 12 tháng), phải đạt lại ngưỡng để giữ.
> 2. Không đạt → **tự xuống hạng** (đừng để vĩnh viễn — sẽ mất đòn bẩy tần suất).
> 3. Một hạng **cửa vào không mất** (như Bạc) + một hạng **đỉnh trọn đời** (như Triệu dặm) để thưởng lòng trung thành tuyệt đối.
> 4. Nâng hạng nên **tự động ngay khi chạm ngưỡng** + báo tin (xem `don-bay-va-van-hanh.md`).

---

## 4. SÁU–BẢY NHÓM QUYỀN LỢI ⭐ (checklist thiết kế Bảng Lợi ích)

Rút từ bảng so sánh quyền lợi thật (`raw/.../Quyền lợi và tiêu chí xét hạng.md` mục "So sánh quyền lợi"). Dùng làm **checklist 7 nhóm** khi điền Bảng Lợi ích — đảm bảo không thiên lệch về toàn perk-giảm-giá. **Mỗi nhóm vẫn phải khớp một gain/pain persona (#1)** — không bê y nguyên perk hàng không.

| # | Nhóm quyền lợi | Bông Sen Vàng làm gì (số thật) | ← Gain/Pain mẫu (DN tự khớp #1) | Đòn bẩy |
|---|---|---|---|---|
| **a** | **Tiết kiệm / giá ưu đãi** | Miễn/giảm phí mua trước chỗ ngồi (Vàng giảm 30% / Bạch kim giảm 50% phí chọn ghế); miễn cước thêm hành lý | ← gain "muốn mua giá tốt hơn người thường" | 4 |
| **b** | **Ưu tiên & tốc độ** | Quầy ưu tiên SkyPriority; ưu tiên chọn chỗ; ưu tiên lên máy bay; lối đi nhanh an ninh/xuất nhập cảnh (Bạch kim, Triệu dặm) | ← pain "ghét xếp hàng, mất thời gian chờ" | 5 |
| **c** | **Trải nghiệm cao cấp** | Phòng khách Thương gia; Meet & Greet (chỉ Triệu dặm); mời thêm khách đi cùng vào phòng chờ | ← gain "muốn cảm giác được nâng niu, đặc biệt" | 5 |
| **d** | **Tích luỹ NHANH HƠN** (flywheel) | Tặng thêm % dặm sau mỗi chuyến: Titan **+30%** / Vàng **+50%** / Bạch kim + Triệu dặm **+100%** | ← gain "lên hạng càng cao càng dễ giữ hạng" | 4 |
| **e** | **Ghi nhận cảm xúc** | Quà sinh nhật tăng theo hạng: Titan **1.000** / Vàng **1.500** / Bạch kim + Triệu dặm **2.000** dặm | ← gain "muốn được nhớ tên, được quan tâm" | 5 |
| **f** | **Đặc quyền độc quyền / gia đình** | Triệu dặm tặng **01 thẻ Bạch kim cho người thân** trong Tài khoản Gia đình | ← gain "muốn người thân cùng hưởng / chia sẻ vị thế" | 5 |
| **g** | **Hỗ trợ riêng** | Hotline/email VIP riêng: `vip.lotusmiles@` (Triệu dặm/Bạch kim/Vàng) vs `lotusmiles@` (Titan/Bạc) | ← pain "sợ không ai chăm khi có sự cố" | 5 |

⚠️ **Số liệu trên là của VNA — KHUÔN SOI.** DN nhỏ không có "phòng chờ Thương gia" hay "Meet & Greet" — nhưng có thể **chuyển vị** nhóm đó sang đặc quyền tương đương ngành mình (vd nhóm c "trải nghiệm cao cấp" → "buổi tư vấn 1-1 với chuyên gia", "khu trải nghiệm sản phẩm riêng"). Cốt là **đủ 7 nhóm**, không phải copy perk.

---

## 5. PATTERN LEO THANG QUYỀN LỢI ⭐ (không chỉ bật/tắt)

Bông Sen Vàng không chỉ "có/không" một perk theo hạng — nó **NÂNG CẤP cùng một perk** lên theo hạng. Đây là cách làm khách khao khát leo tiếp:

| Quyền lợi | Titan | Vàng | Bạch kim | Triệu dặm |
|---|---|---|---|---|
| Tặng thêm % dặm | +30% | +50% | +100% | +100% |
| Quà sinh nhật | 1.000 dặm | 1.500 dặm | 2.000 dặm | 2.000 dặm |
| Thêm hành lý ký gửi | +1 kiện 23kg | +1 kiện 23kg | +2 kiện | +2 kiện |
| Mời thêm khách (quầy ưu tiên) | — | √ | +3 khách | +3 khách |
| Mời thêm khách (phòng chờ) | — | +1 khách | +1 khách | +3 (VN) / +1 (nước ngoài) |

*(Số thật — bảng so sánh raw. Khuôn soi.)*

→ **Pattern áp cho DN:** thay vì bật/tắt perk, hãy **leo thang** chính perk đó:
> - "Mời thêm 1 khách" (hạng giữa) → "Mời thêm 3 khách" (hạng cao)
> - "+30% điểm tích luỹ" → "+100% điểm tích luỹ"
> - "Giảm 5%" → "Giảm 10%" → "Giảm 15%"
> Mỗi nấc leo cho khách thấy rõ "lên hạng nữa thì cái này còn ngon hơn" → động lực chi thêm. Ánh xạ vào `bang-loi-ich.md` cột "Hạng được hưởng": ghi **giá trị khác nhau theo hạng**, không chỉ "Vàng+".

---

## 6. GET HỘI VIÊN QUA ĐỐI TÁC ⭐ (cách chiêu mộ hội viên — không chỉ giữ)

Bông Sen Vàng không chỉ giữ khách — nó **chiêu mộ hội viên mới** qua kênh đối tác:

1. **Nâng hạng từ đối tác** (số thật): hội viên được nâng hạng khi dùng dịch vụ **8 ngân hàng** (Vietcombank, Techcombank, VPBank, VietinBank, VIB, Standard Chartered, Sacombank) + **đối tác viễn thông MobiFone**. → Khách thành VIP **mà chưa cần bay đủ dặm** — đối tác "tặng vé vào câu lạc bộ".
2. **Phiên ngang hạng thẻ (status match)**: hội viên cư trú ngoài VN được **phiên ngang** hạng đang sở hữu **từ hãng hàng không khác** sang Bông Sen Vàng tương ứng (qua `vietnamairlines.statusmatch.com`). → **Cướp khách VIP của đối thủ**: "anh đang là Gold bên kia? Sang đây tôi cho anh Gold luôn, khỏi làm lại từ đầu."
3. **Nhân dặm xét hạng** (boost): đối tác giúp hội viên **nhân dặm** để lên hạng nhanh hơn (`boost.loyaltystatus.com`).
4. **Tích dặm xuyên ngành**: ngân hàng, khách sạn, viễn thông, mua sắm — không chỉ bay (`raw/.../CLAUDE.md`). >60 đối tác.

→ **Pattern áp cho DN (KHUÔN):**
> - **Nâng hạng qua đối tác**: bắt tay đối tác (vd "ai là khách thân thiết của shop X được vào thẳng hạng Vàng của tôi") → mượn database đối tác làm nguồn hội viên.
> - **Phiên ngang từ đối thủ (status match)**: "anh đang VIP bên đối thủ? Đưa bằng chứng, tôi cho hạng tương đương ngay" → kéo khách VIP đã được đối thủ "huấn luyện" về mình.
> - Nối sang **JV / liên doanh** (skill `ec-lien-doanh`) + **Referral** (skill `ec-gioi-thieu-khach`) — đây là chỗ VIP giao với hai mắt xích đó. *(Skill NÀY chỉ ghi nhận cơ chế get; thiết kế JV/referral là việc skill kia.)*

---

## 7. PHÂN KHÚC TIÊU CHÍ ⭐ (ưu đãi nhóm đặc thù)

Bông Sen Vàng **giảm 20% tiêu chí xét hạng** Bạch kim/Vàng/Titan cho **hội viên từ 60 tuổi** (gửi email + ảnh CCCD để xác minh).

→ **Pattern áp cho DN:** hạ ngưỡng lên hạng cho một **nhóm đặc thù** mình muốn ưu tiên (người cao tuổi, sinh viên, khách ngành nghề mục tiêu, khách giới thiệu nhiều...) → vừa thiện chí, vừa mở rộng tệp VIP đúng nhóm chiến lược. Là một cách **flip vị thế** (CHỌN ai mình muốn làm khách cao cấp — quy tắc bất di #2).

---

## 8. ÁNH XẠ VÀO 2 BẢNG + BÀN GIAO (giữ cốt lõi skill)

Bông Sen Vàng KHÔNG thay khung — nó **làm giàu** 2 bảng cốt lõi:

- **Bảng ĐIỀU KIỆN** (`bang-dieu-kien.md`): thêm **cột kép** (Đường A tiền / Đường B lần — mục 2) + ghi **kỳ duy trì + cơ chế tự xuống hạng** (mục 3) + **phân khúc giảm tiêu chí** (mục 7).
- **Bảng LỢI ÍCH** (`bang-loi-ich.md`): chạy **checklist 7 nhóm** (mục 4) để không lệch toàn perk-giảm-giá; mỗi perk ghi **giá trị leo thang theo hạng** (mục 5); **mỗi dòng vẫn phải khớp gain/pain persona (#1)** — số VNA chỉ là khuôn soi.
- **Vận hành** (`don-bay-va-van-hanh.md`): cơ chế tự xuống hạng + hotline VIP riêng (hệ thống con người) + get-qua-đối-tác (nối JV/referral).

> 🚫 **Nhắc lại cổng chống bịa:** số Bông Sen Vàng là THẬT (cite raw chính thức) nhưng khi áp cho sản phẩm khác = KHUÔN/pattern, dán nhãn `(theo Bông Sen Vàng — khuôn soi)`. **DN nhỏ ≠ hãng bay** — không bê 15k/30k dặm, không hứa 6 triệu hội viên. Ngưỡng phải tính từ dữ liệu của chính người làm.
