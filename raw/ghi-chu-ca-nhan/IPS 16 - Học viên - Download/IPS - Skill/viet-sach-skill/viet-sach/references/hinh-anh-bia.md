# Bước 6 — Nhân vật, minh họa, bìa sách

Mục tiêu: một bìa sách + (tùy chọn) một nhân vật xuyên suốt + minh họa đầu chương. Ưu tiên Higgsfield;
không có thì soạn prompt cho ChatGPT/DALL·E để người dùng tự tạo.

## Đường A — Có Higgsfield (ưu tiên)
- **Bìa + minh họa:** dùng skill `higgsfield-generate` (mặc định GPT Image 2 cho ảnh có chữ/thiết kế).
- **Nhân vật xuyên suốt (nhất quán khuôn mặt):** train một lần bằng skill `higgsfield-soul-id` →
  lấy `reference_id` → dùng lại trong `higgsfield-generate` (`--soul-id <id>`) cho mọi minh họa.
- Lưu ảnh vào `san-pham/<ten-sach>/media/`.

## Đường B — Không có Higgsfield → soạn prompt cho ChatGPT/DALL·E
Soạn prompt **song ngữ** (tiếng Việt để người dùng hiểu + tiếng Anh để dán vào công cụ), lưu ở
`san-pham/<ten-sach>/00-prompts-hinh-anh.md`. Mỗi prompt gồm: chủ thể, bối cảnh, cảm xúc, phong cách,
bảng màu, ánh sáng, bố cục, tỉ lệ khung, chừa chỗ cho chữ tiêu đề (với bìa).

**Mẫu prompt BÌA (điền [ ]):**
```
[VI] Bìa sách "[TỰA]" — chủ đề [chủ đề], cảm xúc [ấm áp/hy vọng/…], khách đọc [avatar].
     Phong cách [minh họa phẳng/ảnh điện ảnh/…], màu chủ đạo [ ], chừa 1/3 trên cho tiêu đề.
[EN] Book cover for "[TITLE]". Theme: [ ]. Mood: warm, hopeful, dignified. Audience: [ ].
     Style: [flat editorial illustration / cinematic photo], palette [ ], soft light,
     centered composition, clear negative space in top third for title text, portrait 2:3, high detail.
```

**Mẫu prompt NHÂN VẬT (để nhất quán, mô tả cố định rồi tái dùng):**
```
[EN] Consistent character "[TÊN]": [tuổi, giới, vóc dáng, tóc, trang phục đặc trưng, thần thái].
     Same face and outfit across images. [scene per chapter]. Style [ ], palette [ ], 3:2.
```

## Chốt YMYL cho hình ảnh
Với chủ đề nhạy cảm (hôn nhân, sức khỏe, mất mát): hình **ấm áp, tôn trọng, hy vọng**; tránh hình
bạo lực, khỏa thân, kỳ thị, khuôn mẫu giới tiêu cực, hoặc hù dọa. Cổng: người dùng duyệt bìa & minh họa.
