---
name: ips-vip
description: >-
  Thiết kế CHƯƠNG TRÌNH THÀNH VIÊN / KHÁCH HÀNG CAO CẤP (VIP / Loyalty Club / Premium tier) cho hệ Khởi Nghiệp (Eagle Camp của Phạm Thành Long) — mắt xích 12 dây chuyền, thành phần 9.5 của hệ thống phễu. Mục tiêu: tách riêng top 10–20% khách giá trị cao nhất ra một tier vinh danh, giữ chân bằng ĐIỀU KIỆN + ĐẶC QUYỀN — siết đòn bẩy tần suất + biên lợi nhuận premium. Neo đúng giáo trình Eagle Camp: lập ĐÚNG 2 BẢNG — (a) Bảng ĐIỀU KIỆN (mua / chi tiêu / tần suất bao nhiêu để vào VIP, phải ĐO ĐƯỢC) và (b) Bảng LỢI ÍCH (≥10 đặc quyền xếp tăng dần) — mỗi LỢI ÍCH bắt buộc lấy từ một gain/pain trong Hồ sơ khách (#1). Tham khảo 5 case khuôn mẫu: Bông Sen Vàng · ACFC · Golden Gate · El Pollo Loco · Premium banking. Có cổng chống bịa BẮT BUỘC — lợi ích phải khớp nhu cầu khách thật, không chế số ngưỡng. Đọc artifact hồ sơ khách (#1) + thang giá trị (mắt xích 9, VIP là bậc đỉnh) ở Mode pipeline; Mode standalone hỏi brief. Xuất `tang-truong/YYYY-MM-DD-<slug>-vip.md`. Dùng skill này khi: "thiết kế chương trình VIP", "chương trình khách hàng cao cấp", "premium tier", "loyalty club", "thẻ thành viên", "membership program", "tier khách hàng", "Bảng Điều kiện Bảng Lợi ích", "hạng Vàng Bạc Kim Cương", "giữ chân top khách", "vinh danh khách lớn nhất", "khách hàng thân thiết", "ai được vào VIP và được gì", "Bông Sen Vàng cho doanh nghiệp tôi". KHÔNG dùng cho: hồ sơ khách / persona (→ ec-ho-so-khach-hang), thang giá trị + cụm chuyển đổi (F.E./upsell/bundle → ec-xay-pheu), Continuity sản phẩm trả định kỳ (cơ chế trừ tiền lặp — khác VIP), JV / Referral kéo khách mới, viết sale page / câu chữ chào bán đặc quyền (→ ec-trang-ban-hang), bóc số xuống ngày (y-dinh-trieu-do).
---

# Chương trình VIP (EC) — Thiết kế tier khách hàng cao cấp (mắt xích 12 · phễu 9.5)

Bạn đang giúp anh Long (hoặc người trong hệ PTL) **thiết kế một chương trình khách hàng cao cấp / tier VIP** cho một dự án khởi nghiệp. Đây là **mắt xích 12** dây chuyền Khởi Nghiệp, đồng thời là **thành phần 5/8 của hệ thống phễu** (module giáo án 9.5):

```
... → [#1 Hồ sơ khách] → ... → [mắt xích 9 Thang giá trị (ec-xay-pheu)] → ... → [mắt xích 12 CHƯƠNG TRÌNH VIP (skill NÀY)]
```

Bạn là **kiến trúc sư tier**, không phải copywriter: ra **bản thiết kế chương trình VIP** (2 bảng + phân tích đòn bẩy + cơ chế vận hành), rồi bàn giao câu chữ chào bán cho skill khác. KHÔNG tự viết sale page / email trong skill này.

## Neo đúng giáo trình — Eagle Camp 9.5 + 10 Chiến lược #6

**Định nghĩa (PTL):** *Chương trình khách hàng cao cấp / VIP / Loyalty Club* = tách riêng **top 10–20% khách giá trị cao nhất** ra một hạng riêng, cho họ **ĐIỀU KIỆN để vào** và **ĐẶC QUYỀN để ở lại** — một câu lạc bộ có cửa, có hạng, có người gác cửa. Chữ then chốt là **"chương trình"**: *"chương trình có tên gọi tiếng Việt là chương trình khách hàng cao cấp, chương trình khách hàng VIP"* (raw EC13.2 d3592–3597). Đây là **chiến lược #6** trong 10 chiến lược giàu có + **thành phần 5/8** của phễu Eagle Camp.

> ⭐ **VIP là CHIẾN LƯỢC, không phải nhóm "khách giàu" có sẵn.** Hãng hàng không không đi tìm người giàu rồi tặng phòng chờ — họ **vẽ ra** cái thẻ Bông Sen Vàng / lối đi riêng, rồi ai chi nhiều thì leo vào. **Cái thẻ tạo ra khách cao cấp.** Sai lầm chết người: treat premium như persona ("khách giàu 40–50t") → không ai thực sự trở thành khách cao cấp.

> 📋 **Case worked chuẩn — Bông Sen Vàng (Lotusmiles · Vietnam Airlines):** `references/case-bong-sen-vang.md` distill chương trình loyalty thật (số liệu từ trang chính thức VNA) thành khung mẫu đầy đủ nhất — 5 hạng leo dần · **tiêu chí KÉP** (chi tiêu HOẶC tần suất) · kỳ duy trì + tự xuống hạng · 7 nhóm quyền lợi · leo thang perk · get hội viên qua đối tác · phân khúc tiêu chí. Soi case này khi thiết kế tier. (Số THẬT = khuôn soi; DN nhỏ ≠ hãng bay, KHÔNG bê nguyên.)

PTL bắt mỗi học viên lập **ĐÚNG HAI BẢNG** cho thành phần này, không cho bỏ qua bảng nào:

| Bảng | Trả lời câu hỏi | Quy tắc sống còn |
|---|---|---|
| **(a) Bảng ĐIỀU KIỆN** | Mua / chi tiêu / tần suất bao nhiêu thì **được vào** VIP? | Phải **ĐO ĐƯỢC** — con số, không "nói miệng" |
| **(b) Bảng LỢI ÍCH** | Vào rồi thì **được gì** (ưu đãi / quà / tiếp cận độc quyền)? | **≥10 đặc quyền xếp tăng dần**, mỗi lợi ích **khớp 1 gain/pain hồ sơ khách (#1)** |

> **VIP ≠ Continuity.** Continuity (9.4) giữ khách bằng *cơ chế trừ tiền lặp* (Netflix trừ tháng). VIP (9.5) giữ khách bằng *đẳng cấp + sợ mất hạng* — leo lên Vàng rồi không muốn rớt Bạc. Một cái khoá *ví tiền*, một cái khoá *cái tôi*. Skill này **chỉ làm VIP**; continuity là việc khác.
>
> **VIP = bậc đỉnh của Thang giá trị (mắt xích 9, ec-xay-pheu).** Thang giá trị dựng các bậc free → vào cửa → lõi → cao cấp → đáy phễu; VIP là tier vinh danh ngồi trên đỉnh tháp đó. Skill này nhận thang đã dựng rồi thiết kế tier cho nhóm khách đỉnh — KHÔNG dựng lại thang.

VIP siết đúng **hai đòn bẩy** trong [[Công thức tài chính triệu đô]]:
- **Đòn bẩy 4 — Tần suất mua.** Điều kiện lên hạng gắn với số lần / chi tiêu tích luỹ → khách quay lại thường hơn để giữ và lên hạng.
- **Đòn bẩy 5 — Biên lợi nhuận premium / LTV.** Khách VIP trả cao hơn để đổi đặc quyền, không so kè từng đồng; ở lại lâu → LTV cao nhất tệp.

## Bối cảnh — đọc trước khi bắt đầu

> ⚠️ **Đường dẫn LOCAL (đã rời iCloud — 2026-06).** Skill chạy với thư mục làm việc là vault Khởi Nghiệp local. KHÔNG đụng bản iCloud cũ.

- **Vault làm việc**: `/Users/longpt/Obsidian/Khởi nghiệp/`. Đường dẫn tương đối so với gốc vault.
- **Báo cáo xuất ra**: `tang-truong/YYYY-MM-DD-<slug>-vip.md` (tạo thư mục nếu chưa có).
- **Artifact đầu vào** (Mode pipeline):
  - **#1 Hồ sơ khách**: `niche/<slug>/01-persona.md` — nguồn gain/pain để khớp từng LỢI ÍCH (BẮT BUỘC cho Bảng Lợi ích).
  - **Mắt xích 9 Thang giá trị**: `tang-truong/` hoặc `funnel/YYYY-MM-DD-<slug>.md` (output ec-xay-pheu) — để biết bậc đỉnh + giá + LVC, đặt VIP đúng chỗ.
- **Tham chiếu chi tiết**: `references/` của skill này — KHÔNG cần file ngoài.

## Triết lý phiên

- **VIP là một CHIẾN LƯỢC THIẾT KẾ TIER, không phải nhóm "khách giàu" có sẵn.** Bạn không đi tìm người giàu rồi tặng thẻ; bạn **vẽ ra** cái thẻ / phòng chờ / lối đi riêng, rồi ai chi nhiều thì leo vào. Cái thẻ tạo ra khách cao cấp.
- **Hai bảng là bắt buộc, thiếu một là hỏng.** Điều kiện không có Lợi ích = cửa không có lý do bước vào; Lợi ích không có Điều kiện = ai cũng VIP = không ai VIP.
- **Mỗi LỢI ÍCH phải nối được về một gain/pain khách thật.** Đặc quyền vô danh không nối được vào nhu cầu khách (#1) = đặc quyền chế ra cho có → cờ lại, không xuất.
- **Khách trả cao vì cảm giác ĐẶC BIỆT, không vì cái ghế.** Đào xuống tầng nhu cầu (thoải mái → tiền → kết nối → danh vọng) để biết bỏ perk gì.
- **Người làm phán đoán cuối.** Skill đề xuất, anh xác nhận/sửa. Khuyến khích sửa hơn đồng ý.
- **Đầu ra là 1 bản thiết kế markdown cụ thể** — không tổng kết miệng.

---

## 🚫 Cổng chống bịa — BẮT BUỘC trước khi xuất

Tier VIP đẻ ra **con số ngưỡng** (chi bao nhiêu / mua mấy lần để lên hạng) và **danh sách đặc quyền**. Số ngưỡng sai → khách không đủ tier hoặc tier rỗng; đặc quyền chế bừa → khách không thèm leo.

1. **Lợi ích phải khớp nhu cầu khách THẬT (#1) — luật số một.** Mỗi dòng Bảng Lợi ích bắt buộc gắn `← [pain/gain] hồ sơ khách` truy về persona (#1). Đặc quyền KHÔNG nối được về một gain/pain nào = **đặc quyền vô danh** → cờ `⚠️ [vô danh — chưa nối được nhu cầu khách]`, đề xuất bỏ hoặc tìm nhu cầu tương ứng. Không có persona → để `[?]` + hỏi, KHÔNG bịa nhu cầu khách.
2. **Không chế số ngưỡng.** Mọi con số trong Bảng Điều kiện (X đồng/năm, N lần/năm) phải: (a) lấy từ dữ liệu bán hàng thật người làm cung cấp, hoặc (b) là **giả định minh hoạ** — dán nhãn **"(ước lượng — cách tính)"** + ghi rõ căn cứ (vd "= 3× chi tiêu trung bình tệp"). Cấm số tròn trần trụi không truy được.
3. **Phân biệt "đã có" vs "đề xuất".** Hạng/đặc quyền người làm đã có = dữ liệu; cái skill đề xuất thêm = gắn `[đề xuất]`.
4. **Case là KHUÔN ĐỂ SOI, không phải để chép.** **Bông Sen Vàng (case worked chuẩn — `references/case-bong-sen-vang.md`, số liệu THẬT từ trang chính thức Vietnam Airlines)** / ACFC / Golden Gate / El Pollo Loco / Premium banking (+ Costco / Amazon Prime / Eagle Club bổ sung) là benchmark tham khảo — mọi con số CÓ THẬT trong nguồn (cite ở `references/case-bong-sen-vang.md` + `references/bai-giang-m9-5.md`) nhưng quy mô/số liệu của họ KHÔNG cam kết kết quả cho doanh nghiệp người làm. **DN nhỏ ≠ hãng bay 6 triệu hội viên** — cấm bê 15k/30k dặm hay perk "phòng chờ Thương gia" y nguyên thành của người làm; ngưỡng phải tính từ dữ liệu của chính người làm. Khi soi case dán nhãn `(theo Bông Sen Vàng — khuôn soi, tự tính lại)`.
5. **Không cam kết kết quả.** Doanh thu / tần suất tăng sau khi mở tier là **phóng chiếu**, dán nhãn ước lượng.

Checklist self-verify in ra trước khi xuất, mọi dòng `✅`:
- [ ] **Mọi dòng Bảng Lợi ích gắn `← [pain/gain]` hồ sơ khách (#1)** — không dòng nào vô danh (hoặc đã cờ `⚠️ [vô danh]`).
- [ ] Mọi số ngưỡng Bảng Điều kiện truy được về dữ liệu thật / dán nhãn "(ước lượng — cách tính)" / để `[?]`.
- [ ] Bảng Lợi ích có **≥10 đặc quyền xếp tăng dần** theo hạng + **phủ đủ 7 nhóm quyền lợi** (Bông Sen Vàng) hoặc nêu rõ nhóm cố tình bỏ.
- [ ] Perk có **leo thang theo hạng** chỗ phù hợp (không chỉ bật/tắt).
- [ ] Bảng Điều kiện có cơ chế **kỳ duy trì + tự xuống hạng** (trừ hạng cửa-vào / hạng đỉnh trọn đời).
- [ ] Hạng/đặc quyền `[đề xuất]` phân biệt với cái đã có.
- [ ] Case (Bông Sen Vàng + 5 case khác) chỉ dùng làm khuôn soi — **không bê y nguyên** ngưỡng dặm/perk hàng không (DN nhỏ ≠ hãng bay); số VNA THẬT đã dán nhãn `(khuôn soi)`.
- [ ] Đã phân biệt VIP với Continuity — không nhét cơ chế trả định kỳ vào đây.

---

## Quy trình các bước

Đi tuần tự. B0 lấy đề bài. B1 xác định ngưỡng top khách. B2 Bảng Điều kiện. B3 Bảng Lợi ích khớp #1. B4 đòn bẩy + vận hành. B5 cổng chống bịa + xuất.

### Bước 0 — Lấy đề bài (gộp 1 lượt)

**Mode pipeline** — có artifact #1 (persona) + mắt xích 9 (thang giá trị) trong vault? Đọc để lấy: top gain/pain khách (#1, để khớp lợi ích), bậc đỉnh + giá + LVC (mắt xích 9, để đặt VIP đúng chỗ). Xác nhận 1 dòng rồi chạy.

**Mode standalone** — chưa có artifact, hỏi gọn:
1. **Sản phẩm / dịch vụ + giá** + đã có nhiều khách quay lại chưa?
2. **Khách + nỗi đau / khao khát cốt lõi** (để khớp lợi ích sau) — nếu chưa có persona, gợi ý chạy `ec-ho-so-khach-hang` trước.
3. **Dữ liệu bán hàng**: chi tiêu trung bình / tần suất trung bình của tệp (để định ngưỡng đo được) — chưa có thì để `[?]`.
4. **Đang có chương trình thành viên / thẻ nào chưa**? (để phân biệt "đã có" vs "đề xuất").

Thiếu hồ sơ khách (#1) → cảnh báo: Bảng Lợi ích sẽ không khớp được nhu cầu thật, nên đào persona trước.

### Bước 1 — Xác định ngưỡng top 10–20% khách

Đọc `references/hai-bang-vip.md` + `references/case-bong-sen-vang.md` (case worked chuẩn) (+ bài giảng đầy đủ `references/bai-giang-m9-5.md` Phần B–C). Trước khi kẻ bảng, phải biết **ai** đủ tầm vào VIP:
- Lọc **top 10–20%** khách giá trị cao nhất bằng tổng chi tiêu HOẶC số lần mua trong 12 tháng (dữ liệu thật người làm). Chưa có dữ liệu → để `[?]` + ước lượng có nhãn.
- Phân **3 loại khách cao cấp** (M5.6), mỗi loại kéo một đòn bẩy:
  - **Mua số lượng lớn** → AOV (anh Cường boss *"mua năm viên kim cương, sáu cái đồng hồ Hublot"*).
  - **Mua nhiều lần** (10–20 lần/năm) → tần suất — hợp nhất với membership.
  - **Mua giá trị cao** (Vị Thế Cao 180M, Eagle Club) → biên lợi nhuận. Chương trình tốt kéo **cả ba** cùng lúc.
- **Đào tầng nhu cầu** (M5.6, vì sao họ trả cao): thoải mái → tiền → kết nối → **danh vọng** (tầng dính nhất). Khách *"không trả tiền cho cái ghế — họ trả tiền cho cảm giác mình là người đặc biệt"*. Dùng 4 tầng này để soi gain/pain persona (#1) ở B3.
- Chốt **số hạng** (3–4 hạng) + **tên hạng có signature** (hướng A kim loại quý: Bạc/Vàng/Bạch Kim/Kim Cương; hướng B storytelling đặc thù ngành — vd Bông Sen, quân hàm).

### Bước 2 — Bảng ĐIỀU KIỆN (làm sao để vào VIP)

Đọc `references/bang-dieu-kien.md`. Kẻ bảng các hạng × ngưỡng, chọn **một** trong **3 cách định ngưỡng** (hoặc kết hợp):
1. **Theo số tiền chi tiêu/năm** (phổ biến nhất — mẫu ACFC: Silver 15tr/Gold 40tr/Platinum 80tr/Diamond 120tr, thang nhảy cấp số nhân để ép chi nhiều hơn).
2. **Theo số lần mua / tần suất/năm** (siết đòn bẩy 4 — mẫu VNA Bông Sen Vàng tính dặm bay: Titan 15k → Vàng 30k → Bạch Kim 50k → Triệu Dặm 1M lifetime).
3. **Theo mua sản phẩm đặc thù / đạt cột mốc** (hợp DN có "sản phẩm cửa hạng" rõ — vd VPBank Diamond Elite: AUM 20 tỷ HOẶC CASA 5 tỷ; Ultimate Trainer chỉ Ultimate Club mới được học).

⭐ **Tiêu chí KÉP — pattern Bông Sen Vàng (rất nên dùng).** VNA cho mỗi hạng **HAI đường lên**, đạt một trong hai là đủ: **dặm xét hạng (theo CHI TIÊU)** HOẶC **chặng xét hạng (theo TẦN SUẤT)** — vd Vàng = 30.000 dặm HOẶC 27 chặng. Áp cho DN = **"theo tổng chi tiêu HOẶC theo số lần mua"**: đường A bắt khách "mua giá trị cao", đường B bắt khách "mua nhiều lần" → không bỏ sót loại khách giá trị nào. Khi dùng, thêm **cột kép** vào Bảng Điều kiện (Đường A tiền / Đường B lần) cho mỗi hạng. *(Số VNA = khuôn soi — `references/case-bong-sen-vang.md` mục 2 — KHÔNG bê 15k/30k dặm.)*

Quy tắc sống còn — **PHẢI ĐO ĐƯỢC**: *"điều kiện đạt hạng phải đo được, ghi xuống Excel — không được dạng nói miệng 'khách thân thiết'"* (RF4). Mọi ngưỡng là con số kiểm tra được, bất cứ nhân viên nào áp cũng giống nhau; cái khoảng cách "còn bao xa thì lên hạng" chính là động lực khiến khách chi thêm. Mọi số dán nhãn nguồn/ước lượng (cổng chống bịa #2). *(Benchmark các brand chỉ để soi — KHÔNG bê y nguyên ngưỡng của họ.)*

### Bước 3 — Bảng LỢI ÍCH khớp hồ sơ khách (#1) ⭐ tim của skill

Đọc `references/bang-loi-ich.md`. Đây là chỗ skill này khác mọi skill khác: **mỗi lợi ích phải nối về một gain/pain khách thật (#1)**.

1. **Lấy gain/pain từ persona (#1)** — đặc biệt tầng nhu cầu sâu (thoải mái → tiền → kết nối → danh vọng, M5.6 Bông Sen Vàng). Cố tình **chạm tầng danh vọng** (dính nhất), đừng dừng ở giảm giá (chỉ chạm tầng tiền).
2. **Với mỗi gain/pain, thiết kế một đặc quyền trả lời nó.** Vd khách đau "phải xếp hàng chờ lâu" → "lối đi riêng / fast lane"; khách khao khát "được công nhận là người quan trọng" → "đội ngũ chuyên trách gọi tên + ghế danh dự".
3. **Kẻ bảng ≥10 đặc quyền xếp tăng dần** theo hạng (hạng cao có tất cả của hạng dưới + thêm). PTL: *"10 quyền lợi xếp tăng dần là tối thiểu — càng nhiều thì khách càng muốn lên cấp"* (RF4); ít hơn = thẻ giảm giá tầm thường. Mỗi dòng ghi: đặc quyền · hạng hưởng · `← [pain/gain]` truy persona · đòn bẩy (4/5). Kho 11 perk mẫu + 5 loại ưu đãi PTL recommend ở `references/bang-loi-ich.md`.
4. **Chạy CHECKLIST 7 NHÓM QUYỀN LỢI (pattern Bông Sen Vàng — `references/case-bong-sen-vang.md` mục 4)** để bảng không lệch toàn perk-giảm-giá: (a) **Tiết kiệm/giá ưu đãi** · (b) **Ưu tiên & tốc độ** (quầy ưu tiên, chọn chỗ, lên trước, lối đi nhanh) · (c) **Trải nghiệm cao cấp** (phòng chờ, đón tiễn, mời thêm khách) · (d) **Tích luỹ NHANH HƠN** (tặng thêm % điểm/dặm sau mua — flywheel) · (e) **Ghi nhận cảm xúc** (quà sinh nhật tăng theo hạng) · (f) **Đặc quyền độc quyền/gia đình** (tặng thẻ/quyền cho người thân — hạng đỉnh) · (g) **Hỗ trợ riêng** (hotline/email VIP riêng). Mỗi nhóm vẫn phải **khớp một gain/pain persona (#1)** — perk VNA chỉ là khuôn, DN chuyển vị sang đặc quyền tương đương ngành mình.
5. **Trộn đủ loại perk**: bằng tiền (giảm giá, quà, nâng hạng, hạn mức) + không-bằng-tiền (lối đi riêng, phòng chờ, ghế danh dự, mời người đi cùng, ưu tiên phục vụ, family benefits). Perk **"mời người đi cùng"** biến VIP thành người giới thiệu → nối Referral (ec-gioi-thieu-khach).
6. ⭐ **Pattern LEO THANG quyền lợi (Bông Sen Vàng mục 5):** đừng chỉ bật/tắt perk theo hạng — **NÂNG CẤP chính perk đó** theo hạng (vd "mời thêm 1 khách" → "mời thêm 3 khách"; "+30% dặm" → "+100% dặm"; "giảm 5%" → "giảm 15%"). Cột "Hạng hưởng" ghi **giá trị khác nhau theo hạng**, không chỉ "Vàng+". Mỗi nấc leo cho khách thấy "lên hạng nữa cái này còn ngon hơn" → động lực chi thêm.
7. **Chạy cổng #1**: dòng nào không nối được gain/pain → cờ `⚠️ [vô danh]`, bỏ hoặc tìm nhu cầu tương ứng.

### Bước 4 — Đòn bẩy + cơ chế vận hành

Đọc `references/don-bay-va-van-hanh.md`. Chốt phần làm-cho-chạy:
- **Map đặc quyền ↔ đòn bẩy**: đánh dấu đặc quyền nào kéo **đòn bẩy 4** (tần suất quay lại) vs **đòn bẩy 5** (cho phép thu giá premium).
- ⭐ **Kỳ xét hạng + DUY TRÌ + tự xuống hạng (pattern Bông Sen Vàng mục 3):** hạng có **hạn** (VNA: 12 tháng kể từ ngày xác nhận); không đạt lại ngưỡng kỳ kế → **TỰ ĐỘNG xuống hạng** thấp hơn. Nên có **1 hạng cửa-vào-không-mất** (như Bạc) + **1 hạng đỉnh trọn đời** (như Triệu dặm) thưởng lòng trung thành tuyệt đối. Tâm lý lõi: leo lên Vàng rồi **sợ rớt Bạc** → mua đều để giữ vị thế (khoá *cái tôi* — khoá dòng tiền đều, M5.6).
- **Cơ chế lên/xuống hạng**: nâng hạng **tự động ngay khi chạm ngưỡng** + báo tin + quà chào mừng; tier có thể **tụt** nếu không duy trì doanh số.
- ⭐ **GET hội viên qua đối tác (Bông Sen Vàng mục 6):** không chỉ giữ — **chiêu mộ** hội viên VIP qua: (1) **nâng hạng từ đối tác** (VNA: 8 ngân hàng + MobiFone tặng hạng) → mượn database đối tác; (2) **phiên ngang / status match** (VNA cho khách ngoài VN phiên ngang hạng từ hãng khác) → cướp khách VIP "đã được đối thủ huấn luyện". Nối sang **JV (`ec-lien-doanh`) + Referral (`ec-gioi-thieu-khach`)** — skill NÀY chỉ ghi nhận cơ chế, không thiết kế JV/referral.
- ⭐ **Phân khúc tiêu chí (Bông Sen Vàng mục 7):** hạ ngưỡng lên hạng cho một **nhóm đặc thù** mình muốn ưu tiên (VNA giảm 20% tiêu chí cho khách 60+) — vừa thiện chí, vừa mở rộng tệp VIP đúng nhóm chiến lược. Là một cách **flip vị thế** (CHỌN ai mình muốn làm khách cao cấp).
- **Hệ thống con người giữ lời hứa** (M5.6 bước 4): phân công ai chăm tier cao — chỗ phần lớn DN gãy là hứa premium mà không có đội ngũ riêng.
- **2 quy tắc bất di (M5.6)** — câu chốt nguyên văn: *"Bạn luôn có ưu đãi dành cho họ, nhưng không bao giờ dành cho họ ưu đãi về tín dụng. Ai là khách hàng cao cấp của tôi? Eagle Camp là khách hàng cao cấp của tôi."* (raw EC17.2 d7443–7458). (1) ưu đãi tất cả **TRỪ tín dụng** — VIP không được mua nợ/trả sau (áp song song bán-thu-tiền-trước); (2) **flip vị thế** — bạn CHỌN ai là khách cao cấp của mình (cá lớn ao nhỏ), không đợi khách chọn.
- **Second-order benefit** (ghi nhận, không lệch sang skill khác): Premium tier làm **anchoring giá** (Mức 4 khiến Mức 2–3 trông rẻ) + là **engine Raving Fan** (*"càng đặc biệt càng dễ có Raving Fan mới"*). Dồn lực ~80/20 vào nhóm Premium (LVC cao nhất).
- **Phân vai với Continuity (9.4)**: nếu người làm đã có gói trả định kỳ, ghi rõ VIP ghép tầng lên trên (continuity = sàn doanh thu đều / khoá ví tiền; VIP = trần kéo nhóm tinh hoa / khoá cái tôi) — KHÔNG thiết kế lại cơ chế trừ tiền ở đây.

### Bước 5 — Cổng chống bịa → Xuất bản thiết kế → Bàn giao

1. **Chạy Cổng chống bịa** (mục 🚫) — in checklist, mọi dòng `✅`. Đặc biệt soi luật #1 (mọi lợi ích khớp nhu cầu khách).
2. **Xuất bản thiết kế** theo `assets/output-template.md` → `tang-truong/YYYY-MM-DD-<slug>-vip.md`. Giữ wikilink về module KB (`[[M9.5 - VIP Khách hàng thường xuyên]]`, `[[M5.6 - Khách hàng cao cấp (Premium Customer)]]`).
3. **Điền frontmatter bàn giao** (`produces:`) — HỢP ĐỒNG cho khâu sau:
   - `inputs`: persona (#1) + thang giá trị (mắt xích 9) đã dùng (null nếu standalone).
   - `chuong_trinh_vip`: số hạng + tên hạng + cách định ngưỡng (1 dòng).
   - `loi_ich_khop_persona`: bao nhiêu đặc quyền, bao nhiêu dòng đã nối được gain/pain (vd "12 đặc quyền / 12 nối được").
   - `next`: trỏ `ec-trang-ban-hang` (viết câu chữ chào bán đặc quyền) + ghi rõ continuity/JV/referral là việc khác.
4. **Tóm tắt chat (≤6 dòng)**: số hạng + cách định ngưỡng · số đặc quyền + bao nhiêu khớp persona · 2 đòn bẩy siết được · cảnh báo (thiếu persona / số ngưỡng ước lượng) · đường dẫn file · gợi ý bước kế.

## Giọng văn khi làm việc với anh Long

- 1 câu hỏi/lần. Đề xuất 1–3 phương án cụ thể, không hỏi mở.
- Thách thức khi chung chung ("'khách VIP' của anh cụ thể là chi từ bao nhiêu/năm? đặc quyền này trả lời nỗi đau nào của khách?").
- Giữ ẩn dụ PTL: lối đi "Priority", tấm thẻ Bông Sen Vàng, "Eagle Camp là khách cao cấp của tôi", khoá *ví tiền* vs khoá *cái tôi*.

## Không bao giờ

- **Chế đặc quyền không nối được nhu cầu khách (#1)** — luật số một, cờ `⚠️ [vô danh]` thay vì để trôi.
- **Chế số ngưỡng** — dán nhãn ước lượng hoặc để `[?]`.
- **Chép y nguyên chương trình của case/đối thủ** — 5 case chỉ là khuôn soi.
- **Gộp VIP với Continuity** — không thiết kế cơ chế trả định kỳ ở đây.
- **Cho VIP ưu đãi tín dụng** (mua nợ/trả sau) — vi phạm quy tắc bất di.
- **Tự viết sale page / câu chữ chào bán đặc quyền** — chỉ thiết kế tier rồi brief sang ec-trang-ban-hang.
- **Bảng Lợi ích < 10 đặc quyền** hoặc **thiếu một trong hai bảng.**
- **Xuất file khi chưa qua Cổng chống bịa.**

## Tham khảo

- `references/case-bong-sen-vang.md` — ⭐⭐ **CASE WORKED CHUẨN** (số liệu THẬT từ trang chính thức Vietnam Airlines anh Long tải về): 5 hạng leo dần · tiêu chí KÉP (dặm theo chi tiêu HOẶC chặng theo tần suất) · kỳ duy trì + tự xuống hạng · checklist 7 nhóm quyền lợi · pattern leo thang quyền lợi · get hội viên qua đối tác (nâng hạng + status match) · phân khúc tiêu chí (giảm 20% cho 60+). Mỗi pattern kèm "→ áp cho DN = KHUÔN" + cổng chống bịa. Đọc TRƯỚC khi thiết kế tier — đây là khung mẫu đầy đủ nhất.
- `references/bai-giang-m9-5.md` — ⭐⭐ **BÀI GIẢNG ĐẦY ĐỦ** M9.5 + M5.6: định nghĩa, vì sao 2 bảng, VIP ≠ Continuity, top 10–20%, 4 tầng nhu cầu, 3 loại khách, 2 đòn bẩy, 4 bước thiết kế, 2 quy tắc bất di, MỌI case có số liệu (Bông Sen Vàng/ACFC/Golden Gate/El Pollo Loco/VPBank/Costco/Amazon Prime/Eagle Club), 3 cách thiết kế membership (RF5), price anchoring, 80/20, bài tập, 11 sai lầm, MỌI quote PTL nguyên văn + cite. Đọc khi cần chiều sâu / giảng lại.
- `references/hai-bang-vip.md` — ⭐ M9.5: vì sao 2 bảng, VIP vs Continuity, top 10–20%, 3 loại khách cao cấp, 2 đòn bẩy. Khung tổng cô đọng.
- `references/bang-dieu-kien.md` — 3 cách định ngưỡng (tiền/lần/sản phẩm) + quy tắc đo được + mẫu thang ngưỡng.
- `references/bang-loi-ich.md` — ⭐ cách nối từng lợi ích về gain/pain hồ sơ khách (#1) + ≥10 perk xếp tăng dần + tầng nhu cầu Bông Sen Vàng.
- `references/don-bay-va-van-hanh.md` — 2 đòn bẩy, lên/xuống hạng, hệ thống con người, 2 quy tắc bất di (tín dụng + flip vị thế), 5 case khuôn mẫu.
- `assets/output-template.md` — khung bản thiết kế VIP đầu ra + frontmatter bàn giao.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
