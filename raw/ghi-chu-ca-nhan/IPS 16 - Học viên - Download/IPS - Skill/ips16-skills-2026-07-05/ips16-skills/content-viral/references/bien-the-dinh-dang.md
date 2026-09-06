# Biến thể theo định dạng

Cùng một bộ xương 7 khúc, đổi độ dài và tỷ lệ theo kênh. Ba thứ **bất biến mọi định dạng**: hook bắt trong 1-2 giây đầu (video 3 giây), cảm xúc bốc cao, một lời mời tương tác rõ ràng cuối bài.

Mặc định **Facebook long-form** (format viral nhất của fanpage) trừ khi anh Long nói khác.

---

## 1. Facebook long-form (mặc định) — 2.000-4.500 chữ

Đủ 7 khúc, đúng tỷ lệ chuẩn. Đây là format đã được data thực chứng (8 bài viral nhất, TB 4.626 react). Dùng cho: câu chuyện học viên, chuyện đời anh Long, ngụ ngôn dài.

- Giữ nguyên cả 7 khúc.
- Câu hỏi tấm gương cuối **bắt buộc**.
- Không gắn link bán trong thân bài (organic thuần).
- Markdown thuần, copy thẳng vào Facebook.

---

## 2. Facebook short — dưới 500 chữ

Khi cần đăng nhanh, hoặc chủ đề không đủ chất liệu cho long-form. Nén còn **3 khúc**:

```
HOOK (nghịch lý / con số / câu sốc) — 2-3 câu
INSIGHT (một khung tư duy, một cú "à há") — 4-6 câu
CÂU HỎI TẤM GƯƠNG — 1 câu in đậm
```

Bỏ khúc 2-3-6 (nhân vật, bối cảnh, bài tập). Giữ khúc 1, một phần khúc 5, và khúc 7.

**Ví dụ khung:**
> Có người mất 10 tỷ rồi đứng dậy. Có người mất 10 triệu rồi nằm cả năm.
> Khác nhau không nằm ở số tiền. Nằm ở chỗ họ chọn làm nạn nhân hay nguyên nhân. Nạn nhân có một danh sách lý do rất dài và rất đúng — và vì đúng nên không sửa được gì. Nguyên nhân nhận về mình, vì cái gì do mình gây ra thì mình sửa được.
>
> **Hôm nay bạn đang đóng vai nào?**

---

## 3. Blog SEO — 1.500-3.500 chữ

Giữ linh hồn tâm sự nhưng thêm lớp tối ưu tìm kiếm. Áp dụng cho long.vn/blog. (Nếu là blog thương hiệu cá nhân chuẩn SEO/EEAT đầy đủ → cân nhắc giao cho agent `blog-writer-PTL-style`; skill này lo phần linh hồn viral + cấu trúc.)

**Thêm so với FB long-form:**
- **Frontmatter SEO:** `slug`, `title` (≤60 ký tự, có focus keyword), `meta_description` (≤155 ký tự), `focus_keyword`, `secondary_keywords`, `author: Phạm Thành Long`, `date_published`, `date_modified`, `schema_type: BlogPosting`.
- **H2/H3:** 5-8 H2 mang secondary keyword tự nhiên. Focus keyword xuất hiện ở H1 / H2 đầu / đoạn đầu / đoạn cuối / 2-3 lần giữa (mật độ ~2%).
- **TL;DR** 3-5 câu đầu bài (cho người đọc + cho AI Overviews).
- **Một khối Q&A** (AEO — Answer Engine Optimization): "X là gì?" → trả lời 30-50 từ, để Google AI / ChatGPT search / Perplexity trích được.
- **Câu trích dẫn được** (GEO): mỗi đoạn quan trọng có 1 câu đứng một mình, kèm số liệu/nguồn khi có.
- **Internal links:** 5-10 wikilink vào concept page liên quan; **external:** 2-5 nguồn uy tín.
- **Bio tác giả** cuối bài (EEAT): "Phạm Thành Long — 25 năm điều hành doanh nghiệp, 16 năm BNI, 13 năm đào tạo doanh nhân Việt..." (lấy số chuẩn từ memory, không phóng đại).

**Giữ nguyên:** hook bằng cảnh/cú sốc (không mở bằng định nghĩa), giọng tâm sự, câu hỏi tấm gương trước phần kết.

---

## 4. Video / Reel ngắn — kịch bản 30-90 giây

(Video dài 5-15 phút → dùng `video-marketing-28-ngay`. Đây chỉ lo Reel/Short viral.)

```
0-3 giây: HOOK hình + tiếng cùng lúc (câu đắt nhất / con số to / hành động lạ)
3-15 giây: CĂNG — dựng vấn đề, một câu hỏi xoáy
15-50 giây: NGOẶT — cú lật / insight, giữ một cliffhanger giữa chừng
50-75 giây: PAY-OFF — câu chốt, khoảnh khắc cảm xúc đỉnh
cuối: CÂU HỎI + lời mời (comment / lưu / theo dõi)
```

Quy tắc: **không intro, không "xin chào", không logo mở đầu.** Câu đắt nhất đặt frame 1. Mỗi 5-7 giây phải có một lý do để không lướt (chữ chạy, đổi cảnh, câu hỏi). → Ngân hàng hook video ở `cong-thuc-hook.md`.

---

## 5. Poster đi kèm bài (ảnh feed/quảng cáo)

Mỗi bài Facebook nên có 1 poster đồng hành. Công thức 3 tầng chữ (theo bộ poster DTSGC HCM 2026 anh Long đã làm):

```
TẦNG 1 — Tên sự kiện/thương hiệu (vd ĐÁNH THỨC SỰ GIÀU CÓ)
TẦNG 2 — HOOK (rút từ câu chốt/câu hỏi của bài: "NGÀY BẠN THÔI ĐỔ LỖI")
TẦNG 3 — Địa điểm + ngày (nếu là sự kiện)
```

- **A/B test:** làm 3-5 hook khác nhau cho cùng một câu chuyện, mỗi hook một hero visual → đăng đo hook nào kéo tương tác tốt nhất.
- Ngôn ngữ thiết kế nhất quán (vd vàng-đen luxury, khung viền vàng, cinematic, lề ≥15%).
- Soát dấu tiếng Việt thủ công 100% (AI hay sai dấu trên poster).
- Tỷ lệ: 1:1 cho feed/carousel, cắt 4:5 cho story.

---

## 6. Email — 400-800 chữ

Chuyển bài viral thành email giữ chân danh sách:
- **Tiêu đề email = hook** (dạng nghịch lý/con số/câu hỏi). Quyết định mở hay không.
- Thân ngắn hơn FB, vẫn giữ một câu chuyện + một insight.
- Một câu hỏi cuối mời **trả lời email** (reply = tín hiệu tốt cho deliverability).
- Không e.long.vn (rule tuyệt đối). CTA dẫn về sale page chính thức nếu có chiến dịch.

---

## Bảng tra nhanh

| Định dạng | Độ dài | Khúc giữ | Mời tương tác |
|---|---|---|---|
| FB long-form | 2.000-4.500 chữ | Đủ 7 | Câu hỏi tấm gương |
| FB short | <500 chữ | 1 + 5 + 7 | Câu hỏi tấm gương |
| Blog SEO | 1.500-3.500 chữ | Đủ 7 + lớp SEO/AEO/GEO | Câu hỏi + internal link |
| Video/Reel | 30-90 giây | Hook + căng + ngoặt + pay-off | Comment / lưu / theo dõi |
| Poster | 3 tầng chữ | Hook cô đặc | (đi kèm bài) |
| Email | 400-800 chữ | Hook + chuyện + insight | Reply email |
