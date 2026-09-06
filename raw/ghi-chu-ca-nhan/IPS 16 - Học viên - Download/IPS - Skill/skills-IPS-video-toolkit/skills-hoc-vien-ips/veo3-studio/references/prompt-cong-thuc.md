# Công thức prompt Veo 3.1 (rút gọn từ veo-tools, prompt viết TIẾNG ANH)

## Khung 5 yếu tố — đúng thứ tự
```
[Camera] + [Chủ thể] + [Hành động] + [Bối cảnh] + [Ánh sáng & màu]
```

## 1. Camera — chọn MỘT, không chồng
| Từ khóa | Dùng khi |
|---|---|
| `static camera` / `locked camera` | Nền, loop, quan sát thuần |
| `slow push in` | Tăng tension, kéo mắt vào chủ thể |
| `pull out` | Mở rộng bối cảnh, reveal |
| `dolly forward/back` | Tiến/lùi thân mật |
| `tracking left/right` | Đi theo, mở không gian dần |
| `crane up/down` | Cho thấy quy mô |
| `orbit` | Khoe sản phẩm/vật thể 360° |
| `handheld` | Cảm giác tài liệu, đời thực |
| `rack focus` | Chuyển chú ý gần↔xa |

Thêm ống kính khi cần: `macro lens` (chi tiết cực cận), `telephoto compression`, `wide establishing shot`.

## 2. Chủ thể — cụ thể tàn nhẫn
- ❌ "a person" → ✅ "a ceramicist in her 70s, clay-dusted apron, silver hair tied back"
- ❌ "metal surface" → ✅ "brushed titanium with microscopic scratches catching light"
- Chất liệu + tuổi + kết cấu bề mặt = ăn tiền.

## 3. Hành động — MỘT hành động, thì tiếp diễn
Nhẹ (nền/loop): `particles rising slowly`, `fog rolling across`, `shadows lengthening`.
Mạnh (nội dung): `rotating to reveal`, `turning toward camera`, `assembling from fragments`.

## 4. Bối cảnh — nơi chốn + thời điểm
`golden hour — last fifteen minutes`, `blue hour twilight`, `3AM sodium street light`,
`overcast noon flat light`. Địa điểm cụ thể: "corner office, floor 47, rain streaking the windows".

## 5. Ánh sáng & màu
- `single hard source, deep shadows` / `soft wraparound light` / `backlit silhouette, rim light`
- `desaturated earth tones` / `teal and orange grade` / `single accent color against neutral`
- Tham chiếu phim (dùng tiết chế): `Blade Runner 2049 amber/teal`, `Malick natural light`, `Fincher clinical desaturated`.

## Audio (khi bật --audio)
Veo 3.1 gen được thoại + tiếng động. Ghi trong prompt:
- Thoại: `A man says in Vietnamese: "..."` (ngắn, 1-2 câu/clip 8s)
- Ambient: `sound of wind and distant waves`, `soft piano score`
- Muốn KHÔNG lời: thêm `no dialogue, no narration` + `--negative "speech"`

## Loop nền (hero/ambient)
BẮT BUỘC có: `seamless loop` + `locked camera` + chuyển động `gentle/slowly/imperceptibly`.
Duration 4s loop mượt nhất.

## Chống lỗi thường gặp
- Veo render CHỮ rất xấu → cấm yêu cầu text/UI, đẩy chữ sang bước hậu kỳ (caption burn).
- Negative prompt mặc định tốt: `text, watermark, logo, blurry, distorted face, extra fingers`
- Shorts 9:16: chủ thể đặt giữa khung, mặt chiếm 1/3 trên; tránh chi tiết quan trọng sát mép.

## Template video dọc truyền cảm hứng (phong cách Phạm Thành Long)
```
Slow push in on [nhân vật cụ thể], [1 hành động], [bối cảnh hùng vĩ/đời thường VN],
golden hour warm light, teal and orange cinematic grade, shallow depth of field, 9:16 vertical composition
```
