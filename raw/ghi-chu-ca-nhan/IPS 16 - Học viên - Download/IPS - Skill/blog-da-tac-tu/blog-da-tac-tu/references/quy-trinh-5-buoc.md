# Quy trình 5 bước — chi tiết & lý do

Tài liệu này giải thích đầy đủ từng bước, lý do thiết kế, và cách chạy thủ công khi không có tool Workflow.

---

## Triết lý thiết kế

- **Tách vai đối kháng.** Người viết, người phản biện, thư ký, tổng biên tập là các agent KHÁC NHAU. Một agent tự chấm bài mình luôn rộng lượng; tách vai để có phản biện thật.
- **KB là nguồn sự thật duy nhất.** Mọi số liệu/câu chuyện trong bài phải truy ngược về KB (kho tư liệu nguồn). Cấm bịa. Đây là điều kiện sống còn cho EEAT/YMYL.
- **Pipeline thay vì rào chắn.** Các phần chảy độc lập qua các chặng, không chờ nhau → nhanh hơn nhiều so với "viết hết rồi mới review hết".
- **3 câu hỏi vàng cho mỗi ý:** *quan trọng với người đọc? · giữ chân đọc tiếp? · chuyển đổi (tin & hành động)?* Ý nào trượt cả ba thì viết lại.

---

## Bước 1 — Tập hợp tư liệu (assistant tự làm)

**Mục tiêu:** dựng **KB** — kho tư liệu nguồn có cấu trúc, là nguồn duy nhất cho nội dung bài.

Việc cần làm:
1. Đọc **Nguồn tư liệu** trong hồ sơ thương hiệu (vault, file, link, ghi chú…).
2. Tìm/quét đúng chủ đề. Trích: định nghĩa, khái niệm, câu chuyện thật, số liệu, ví dụ, khung tư duy, câu trích dẫn.
3. Đóng gói thành văn bản chia mục rõ ràng (A, B, C…). Ghi rõ con số nào lấy từ đâu.
4. Gắn kèm **Giọng văn**, **Tác giả/EEAT**, **Đối tượng**, **Từ khóa** vào khối tư liệu chung.

**Quy tắc vàng:** ghi thẳng vào KB câu *"KHÔNG bịa số liệu ngoài KB này"*. Mọi agent đều thấy.

Nếu nguồn mỏng → nói rõ với người dùng và/hoặc bổ sung bằng tìm kiếm web (nếu được phép), đánh dấu nguồn ngoài để tổng biên tập kiểm chứng.

---

## Bước 2 — 3 dàn bài (3 agent song song)

Mỗi agent = một biên tập viên, nhận KB + một **góc tiếp cận** riêng, trả về dàn bài theo schema.

3 góc mặc định (đổi cho hợp chủ đề):
- **A — Kể chuyện trước:** mở bằng câu chuyện/cảnh đời thật, dẫn cảm xúc rồi mới ra khái niệm.
- **B — Logic / khung tài sản:** mở bằng nghịch lý hoặc khung tư duy, đanh thép, có số liệu.
- **C — Giải tỏa nỗi sợ / hướng hành động:** gọi tên nỗi sợ/nhu cầu của người đọc, trấn an + thúc đẩy.

Schema dàn bài: `goc_tiep_can, tieu_de (H1 SEO), hook_mo_bai, cac_phan[{heading, y_chinh, chat_lieu}], cta_ket`.

**Vì sao 3 góc:** ép không gian giải pháp rộng ra trước khi hội tụ. Một góc đơn lẻ dễ rơi vào lối mòn.

---

## Bước 3 — Tranh biện + thư ký

**3 agent phản biện** (song song), mỗi agent một lăng kính cố định, chấm mạnh/yếu CẢ 3 dàn bài rồi đề xuất giữ/bỏ/ghép:
1. **Người đọc bận rộn** — hook đủ mạnh? có chỗ lê thê/giáo điều? độ "đã" để đọc tiếp & chia sẻ?
2. **SEO / EEAT / YMYL** — tiêu đề & heading chuẩn, từ khóa tự nhiên? thể hiện Trải nghiệm–Chuyên môn–Thẩm quyền–Uy tín? lời khuyên có trách nhiệm (YMYL)? thiếu citation nào?
3. **Gác cổng giọng văn & chuyển đổi** — đúng giọng thương hiệu? có sức cảm xúc & sức đẩy hành động? chỗ nào nghe giống "văn AI trung tính" cần sửa?

**1 agent thư ký** (KHÔNG can thiệp tranh luận):
- Viết **biên bản tranh biện**: điểm đồng thuận, điểm xung đột giữa 3 lăng kính, cách hòa giải.
- Tổng hợp thành **MỘT dàn bài thống nhất** — lấy tinh hoa cả 3, theo đề xuất phản biện.
- Schema: `bien_ban_tranh_bien, dan_bai_thong_nhat{tieu_de, meta_description, tu_khoa[], cac_phan[{heading, muc_tieu, chat_lieu, so_tu_du_kien}]}`. Tổng số từ = mục tiêu (vd 2000–2500).

**Vì sao có thư ký riêng:** người chốt phải khách quan, không phải một bên tranh luận. Biên bản cũng là tài liệu giải trình cho người dùng.

---

## Bước 4 — Đồng viết

**Pipeline theo từng phần** của dàn bài thống nhất. Mỗi phần qua 2 chặng độc lập:
- **Chặng 1 — Viết nháp:** agent viết đúng giọng thương hiệu, dùng chất liệu bắt buộc từ KB, đúng số từ, mở bằng heading `## ...`. Được thấy TOÀN dàn bài để không lặp phần khác.
- **Chặng 2 — Peer-review thuyết phục:** agent khác đọc nháp, tự hỏi 3 câu vàng, viết lại cho mạnh hơn / cảm xúc hơn / cụ thể hơn / đúng giọng hơn, diệt câu sáo & giọng AI. Giữ heading & độ dài.

**1 agent điều phối** sau pipeline:
- Ráp tất cả các phần thành bài liền mạch (thêm câu chuyển đoạn, khử trùng ý).
- Thống nhất 100% giọng văn thương hiệu. Mở `# <tiêu đề>`. Đúng độ dài mục tiêu.
- Thuật ngữ ngoại ngữ kèm dịch trong ngoặc ở lần đầu.

**Vì sao pipeline:** phần 1 review xong là chạy luôn trong khi phần khác đang viết — tiết kiệm thời gian. Một phần lỗi rớt thành `null`, lọc bỏ, không kéo cả bài.

---

## Bước 5 — Tổng biên tập (1 agent, effort cao)

Rà & hoàn thiện theo **checklist 6 tiêu chí**:
1. **Hấp dẫn** — hook 5 giây, giữ chân tới cuối, không lê thê/giáo điều.
2. **Giọng văn** — đúng signature thương hiệu; diệt sạch sáo rỗng & "văn AI trung tính".
3. **SEO** — H1 + H2 hợp lý, từ khóa tự nhiên, meta description, slug; FAQ cho rich snippet nếu hợp.
4. **EEAT** — trải nghiệm thật + thẩm quyền; thêm **khối tác giả** cuối bài.
5. **YMYL** — lời khuyên có trách nhiệm, không hứa hão, cân bằng; thêm disclaimer khi cần (chủ đề tiền bạc/sức khỏe/sự nghiệp).
6. **Vượt test-AI** — nhịp văn không đều (xen câu rất ngắn với câu dài), chi tiết cảm giác cụ thể, quan điểm cá nhân sắc, số liệu lẻ thật thay vì số tròn.

Schema trả về: `bai_viet_cuoi, bao_cao_ra_soat, so_tu, checklist{hap_dan, van_phong, seo, eeat, ymyl, vuot_test_ai}`.

---

## Quy mô khuyến nghị theo độ dài bài

| Độ dài bài | Số phần thân | Số agent ước tính |
|---|---|---|
| ~1000–1500 từ | 4–5 | ~15 |
| 2000–2500 từ (mặc định) | 6–8 | ~22–26 |
| 3000+ từ | 8–10 | ~30+ |

Số agent ≈ 3 (dàn bài) + 3 (phản biện) + 1 (thư ký) + 2×số_phần (đồng viết) + 1 (điều phối) + 1 (tổng biên tập).

---

## Chạy thủ công khi KHÔNG có tool Workflow

Dùng tool **Agent** (gửi nhiều agent độc lập trong một lượt để chạy song song):

1. **B2:** gửi 3 Agent song song (3 góc) → thu 3 dàn bài.
2. **B3:** gửi 3 Agent phản biện song song → thu 3 bản chấm; rồi 1 Agent thư ký → dàn bài thống nhất.
3. **B4:** với mỗi phần, gửi 1 Agent viết → 1 Agent review (có thể gộp 2 chặng vào 1 prompt nếu muốn nhanh); rồi 1 Agent điều phối ráp bài.
4. **B5:** 1 Agent tổng biên tập.

Truyền KB + hồ sơ thương hiệu vào prompt từng agent. Giữ nguyên schema bằng cách yêu cầu agent trả JSON theo mẫu trong `workflow-script.js`.
