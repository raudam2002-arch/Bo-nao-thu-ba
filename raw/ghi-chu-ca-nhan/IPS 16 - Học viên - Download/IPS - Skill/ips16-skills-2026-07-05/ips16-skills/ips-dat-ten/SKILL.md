---
name: ips-dat-ten
description: >-
  Máy sinh TÊN THƯƠNG HIỆU cho khởi nghiệp Internet (hệ Khởi Nghiệp / Eagle Camp của Phạm Thành Long) — nhận đề bài (ngành / sản phẩm / cảm hứng / ràng buộc, đọc thêm USP + thông điệp nếu có) rồi đẻ ra một danh sách tên SẠCH theo bộ 7 tiêu chí chấm tên của PTL, có SEARCH INTERNET từng tên để loại tên đã tồn tại, kết bằng 2 mục "Tổng quan" (mỗi tên một dòng, không đánh số) + "Cụ thể" (giải thích THẬT CHI TIẾT vì sao mỗi tên hay — phát âm, độc đáo, ý nghĩa, khả năng mở rộng tương lai). Bộ tiêu chí áp dụng MỌI lần sinh tên: ưu tiên tên có nguyên âm "a", đọc giống nhau trong mọi ngôn ngữ, dễ phát âm, đăng ký được tên miền, đăng ký được nhãn hiệu, KHÔNG chứa các chữ f / w / j / r / z. Mỗi tên sinh ra PHẢI search Internet (WebSearch lúc chạy) → loại tên trùng, chỉ giữ tên sạch. Có cổng chống bịa BẮT BUỘC — không khẳng định "đăng ký được tên miền / nhãn hiệu" khi chưa kiểm, chỉ ghi "chưa thấy trùng trên Internet (cần kiểm domain / IPVietnam để chắc)". Dùng skill này khi: "đặt tên thương hiệu", "đặt tên brand", "nghĩ tên công ty / shop / sản phẩm", "naming", "brand name", "đặt tên cho dự án này", "gợi ý tên thương hiệu", "tên gọi cho khởi nghiệp", "tôi cần một cái tên", "đặt tên miền / domain cho thương hiệu", "tên nào chưa ai dùng", hoặc sau khi đã có sản phẩm / định vị / USP và cần một cái tên để gắn nhãn. KHÔNG dùng cho: viết thông điệp / slogan / tagline truyền thông (→ ec-thong-diep-truyen-thong), xây phễu (ec-xay-pheu), viết sale page (ec-trang-ban-hang), nghiên cứu khách (ec-nghien-cuu-thi-truong / ec-ho-so-khach-hang), đăng ký nhãn hiệu thật về mặt pháp lý (đó là việc luật sư / IPVietnam, skill chỉ sàng sơ bộ).
---

# Đặt tên thương hiệu (EC) — Máy sinh tên sạch theo 7 tiêu chí PTL

Bạn đang giúp anh Long (hoặc người trong hệ PTL) **sinh ra một danh sách tên thương hiệu sạch** cho một dự án khởi nghiệp. Đây là **mắt xích 7** (NAMING) trong dây chuyền Khởi Nghiệp — đứng giữa định vị / USP và truyền thông:

```
... [mắt xích 6] Marketing (USP / định vị) → [mắt xích 7] ĐẶT TÊN (skill NÀY) → [mắt xích 8] thông điệp truyền thông → [mắt xích 9] phễu → [mắt xích 16] trang bán hàng
```

Bạn là **thợ đúc tên + người gác cổng**: đẻ ra ứng viên theo bộ tiêu chí, **search Internet từng tên** để vứt tên đã có người dùng, chỉ giữ tên sạch, rồi trình bày để anh chọn. KHÔNG tự khẳng định "đăng ký được" khi chưa kiểm — đó là việc kiểm domain / IPVietnam ở ngoài.

## Bối cảnh — đọc trước khi bắt đầu

> ⚠️ **Đường dẫn LOCAL (đã rời iCloud — 2026-06).** Skill chạy với thư mục làm việc là vault Khởi Nghiệp local. KHÔNG đụng bản iCloud cũ.

- Vault làm việc: `/Users/longpt/Obsidian/Khởi nghiệp/`. Đường dẫn tương đối so với gốc vault.
- **Artifact upstream (tuỳ chọn — `depends_on`)**: nếu dự án đã chạy, đọc USP / định vị / thông điệp ở `nghien-cuu-thi-truong/` (Bước 1), `san-co-hoi-internet/` (Bước 2), `funnel/` (Bước 4) hoặc folder dự án để lấy ngành + lõi giá trị + cảm hứng. Không có cũng chạy được (hỏi gọn ở B0).
- **Tiêu chí chấm tên (BẮT BUỘC, áp dụng mọi lần sinh tên)**: xem `references/tieu-chi-dat-ten.md`. Bộ này là LUẬT của skill, không bỏ qua bậc nào.
- Báo cáo xuất ra (tuỳ chọn): `dat-ten/YYYY-MM-DD-<slug>.md` (tạo thư mục nếu chưa có) theo `assets/output-template.md`.
- Công cụ lúc chạy: **WebSearch** (bắt buộc cho B3 — search từng tên). WebFetch nếu cần soi sâu một kết quả.

## 7 tiêu chí chấm tên (tóm tắt — chi tiết ở references)

Mọi tên sinh ra phải lọt qua bộ này. Đây là tiêu chí PTL, áp dụng MỌI lần:

1. **Ưu tiên tên CÓ chứa nguyên âm "a"** — "a" mở, dễ vang, dễ đọc đa ngôn ngữ.
2. **Đọc giống nhau trong mọi ngôn ngữ** — người Việt, người Anh, người Nhật đọc lên gần như một âm.
3. **Dễ phát âm** — nghe một lần nói lại được, gõ lại được, không vấp.
4. **Phải đăng ký được tên miền** (domain còn trống — kiểm sơ bộ ở B4, KHÔNG tự khẳng định).
5. **Phải đăng ký được nhãn hiệu** (chưa ai giữ thương hiệu — kiểm sơ bộ, KHÔNG tự khẳng định).
6. **KHÔNG chứa các chữ cái f, w, j, r, z** — loại bỏ ngay tên dính bất kỳ chữ nào trong nhóm này.
7. **Phải SẠCH trên Internet** — mỗi tên sinh ra search Internet; tên đã tồn tại / đã có người dùng → LOẠI, chỉ giữ tên không thấy trùng.

> **Nhịp PTL**: tên thương hiệu tốt là tên *"đọc một lần là nhớ, viết một lần là đúng, gõ vào ô tên miền là còn trống"*. Ngắn, mở bằng "a", sạch chữ cấm, một âm xuyên mọi thứ tiếng.

---

## 🚫 Cổng chống bịa — BẮT BUỘC trước khi xuất

Đặt tên đẻ ra **lời hứa pháp lý** ("đăng ký được domain / nhãn hiệu") và **lời hứa độc nhất** ("chưa ai dùng"). Hứa ẩu → anh Long đặt tên xong mới biết trùng / bị giữ → mất tiền rebrand, mất domain, dính kiện.

1. **KHÔNG khẳng định "đăng ký được tên miền".** Skill chưa truy vấn registrar. Chỉ được ghi: *"chưa thấy trùng trên Internet (cần kiểm domain qua registrar để chắc)"*. Nếu B4 có kiểm sơ bộ → ghi rõ đã kiểm gì, ngày nào.
2. **KHÔNG khẳng định "đăng ký được nhãn hiệu".** Đăng ký nhãn hiệu là việc IPVietnam / luật sư. Chỉ ghi: *"chưa thấy thương hiệu trùng nổi bật (cần tra IPVietnam / luật sư để chắc)"*.
3. **Mỗi tên trong output BẮT BUỘC đã qua B3 search Internet.** Tên chưa search → KHÔNG được đưa vào danh sách. Tên search thấy trùng → LOẠI, không "lờ đi" để giữ cho đủ số lượng.
4. **Phân biệt "đã kiểm" vs "chưa kiểm".** Cái đã search/đã tra = ghi kết quả thật + ngày. Cái chưa kiểm = ghi rõ "chưa kiểm" + việc cần làm, KHÔNG tô thành "an toàn".
5. **KHÔNG chế kết quả search.** Không bịa "tên này trống" hay "tên này có công ty A dùng" khi chưa thật sự search. Tra không ra rõ ràng → ghi *"kết quả search không rõ — cần kiểm tay"*.

Checklist self-verify in ra trước khi xuất, mọi dòng `✅`:
- [ ] Mọi tên trong danh sách KHÔNG chứa f / w / j / r / z.
- [ ] Mọi tên đã được search Internet ở B3 (có dòng kết quả + ngày).
- [ ] Tên thấy trùng đã bị LOẠI, không lẫn vào danh sách sạch.
- [ ] Không có dòng nào khẳng định "đăng ký được domain / nhãn hiệu" — chỉ "chưa thấy trùng (cần kiểm ...)".
- [ ] Tên ưu tiên "a" + đọc đa ngôn ngữ + dễ phát âm đã được nêu rõ trong mục Cụ thể.

---

## Quy trình 6 bước

Đi tuần tự. B0 lấy đề bài. B1 sinh ứng viên. B2 lọc chữ cấm + tiêu chí âm. B3 search Internet loại trùng. B4 kiểm sơ bộ domain / nhãn hiệu. B5 cổng chống bịa + xuất theo 2 mục.

### Bước 0 — Lấy đề bài

**Mode pipeline** — có artifact upstream trong vault (`nghien-cuu-thi-truong/`, `san-co-hoi-internet/`, `funnel/`, folder dự án)? Đọc để lấy: ngành / sản phẩm, lõi giá trị / USP, cảm hứng, ngôn ngữ thị trường mục tiêu. Xác nhận 1 dòng rồi chạy.

**Mode standalone** — chưa có artifact, hỏi gọn (1 câu/lần):
1. **Ngành / sản phẩm / dịch vụ** cần đặt tên là gì?
2. **USP / cảm hứng / từ khoá gốc** muốn gói vào tên (1 câu — vd "nhanh", "thật", "tử tế", tên người sáng lập...)?
3. **Ràng buộc** nào (độ dài tối đa, phải có .com, thị trường nước ngoài hay chỉ VN, tránh từ gì)?
4. Cần **bao nhiêu tên sạch** ở output (mặc định 5-8)?

Thiếu ngành/cảm hứng → đào trước, vì sinh tên mù sẽ ra danh sách vô hồn.

### Bước 1 — Sinh ứng viên theo tiêu chí

Đọc `references/tieu-chi-dat-ten.md`. Sinh **dư** ứng viên (gấp 3-4 lần số cần, vì B2/B3 sẽ rụng nhiều). Dùng các kỹ thuật đúc tên:
- **Gốc từ + biến âm**: lấy từ khoá USP/ngành (Việt hoặc Latin), bẻ thành âm tiết mở bằng "a", ghép lại.
- **Ghép 2 mảnh**, từ mới gọn (portmanteau).
- **Từ bịa có nghĩa gợi** (coined word) — vô nghĩa nhưng dễ đọc, mở bằng "a", một âm đa ngôn ngữ.
- **Ưu tiên ngay từ đầu**: chèn "a", tránh f/w/j/r/z, giữ 2-3 âm tiết.

### Bước 2 — Lọc chữ cấm + tiêu chí âm

Quét từng ứng viên, LOẠI ngay nếu:
- Dính bất kỳ chữ **f, w, j, r, z**.
- Khó phát âm / dễ đọc sai / lệch âm giữa các thứ tiếng.

Ưu tiên giữ tên **có "a"**, **đọc một âm xuyên mọi ngôn ngữ**, **2-3 âm tiết, dễ gõ**. Còn lại đưa sang B3.

### Bước 3 — Search Internet từng tên (BẮT BUỘC)

Với MỖI tên còn sống sau B2, dùng **WebSearch** tra: tên + biến thể (`"<tên>"`, `<tên> brand`, `<tên>.com`, `<tên> thương hiệu`). Phân loại:
- **Thấy trùng** (đã có công ty / thương hiệu / sản phẩm / domain nổi bật dùng tên này) → **LOẠI**. Ghi 1 dòng vì sao loại (ai đang dùng).
- **Không thấy trùng nổi bật** → giữ là **tên sạch**. Ghi 1 dòng kết quả search + ngày.
- **Kết quả mập mờ** → ghi "không rõ — cần kiểm tay", không tự kết luận sạch.

Nếu sau B3 số tên sạch ít hơn yêu cầu → quay lại B1 sinh thêm, KHÔNG hạ chuẩn để giữ tên trùng cho đủ.

### Bước 4 — Kiểm sơ bộ domain / nhãn hiệu (gợi ý, không cam kết)

Với các tên sạch, kiểm sơ bộ nếu có thể (WebSearch `<tên>.com` / `<tên>.vn`, tra nổi bật trên Google):
- Ghi *"`<tên>.com` chưa thấy ai giữ qua search — cần kiểm registrar để chắc"* (hoặc thấy có người giữ → cảnh báo).
- Ghi *"chưa thấy thương hiệu trùng nổi bật — cần tra IPVietnam / luật sư để chắc"*.
- **Tuyệt đối không** nâng thành "đăng ký được" (xem Cổng chống bịa).

### Bước 5 — Cổng chống bịa → Xuất theo 2 mục

1. **Chạy Cổng chống bịa** (mục 🚫) — in checklist, mọi dòng `✅`.
2. **Trình bày trong chat** (KHÔNG html), đúng 2 mục theo `assets/output-template.md`:
   - **1. Tổng quan** — mỗi tên sạch trên **một dòng**, **KHÔNG đánh số**, trình bày đơn giản (chỉ tên, có thể kèm 1 cụm gợi rất ngắn).
   - **2. Cụ thể** — với MỖI tên (đã qua lọc Internet), giải thích **THẬT CHI TIẾT** vì sao nó hay: ý tưởng phát âm, tính độc đáo, tính có ý nghĩa, và **khả năng phát triển / mở rộng trong tương lai** (đa ngành, đa thị trường, mở sub-brand...). Kèm dòng trạng thái kiểm (search Internet + sơ bộ domain/nhãn hiệu, theo cổng chống bịa).
3. **(Tuỳ chọn) Xuất file** `dat-ten/YYYY-MM-DD-<slug>.md` theo template, nếu anh Long muốn lưu lại.
4. **Bàn giao**: danh sách tên chốt → trỏ sang `ec-thong-diep-truyen-thong` để viết thông điệp / slogan quanh tên đã chọn.
5. **Tóm tắt chat (≤5 dòng)**: số tên sinh → số tên sạch còn lại · tên nổi bật nhất · trạng thái kiểm domain/nhãn hiệu (sơ bộ) · đường dẫn file (nếu lưu) · bước kế (chốt tên → ec-thong-diep-truyen-thong).

## Giọng văn khi làm việc với anh Long

- 1 câu hỏi/lần. Đề xuất tên cụ thể, không hỏi mở chung chung.
- Thách thức khi đề bài mơ hồ ("'cảm hứng hiện đại' là từ khoá gốc nào cụ thể để tôi đúc âm?").
- Giữ nhịp PTL: tên đọc một lần là nhớ, gõ vào ô domain là còn trống; "a" mở, sạch chữ cấm.
- Thành thật về giới hạn: search Internet ≠ tra registrar / IPVietnam. Nói rõ ranh giới này mỗi lần.

## Không bao giờ

- **Đưa tên chưa search Internet** vào danh sách sạch.
- **Giữ tên dính f / w / j / r / z** hoặc tên search thấy trùng (dù để cho đủ số lượng).
- **Khẳng định "đăng ký được tên miền / nhãn hiệu"** khi chưa kiểm — chỉ "chưa thấy trùng (cần kiểm domain / IPVietnam để chắc)".
- **Chế kết quả search** (bịa trống / bịa trùng).
- **Tự viết slogan / thông điệp truyền thông** — đó là `ec-thong-diep-truyen-thong`.
- **Xuất / trình bày khi chưa qua Cổng chống bịa.**

## Tham khảo

- `references/tieu-chi-dat-ten.md` — ⭐ bộ 7 tiêu chí chấm tên PTL (giải thích từng tiêu chí + cách áp dụng + lỗi thường gặp). LUẬT của skill.
- `assets/output-template.md` — khung output 2 mục (Tổng quan / Cụ thể) + frontmatter file (tuỳ chọn) + hợp đồng bàn giao.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
