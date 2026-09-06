# Output — Hồ sơ Cá nhân (CUNG) + Bảng năng lực bán được

Xuất ra **`wiki/entities/<Tên người dùng>.md`** (hồ sơ bất biến, dùng lại cho mọi ngách/dự án).
Khi 1 dự án `niche/<slug>/` dùng tới → wikilink VỀ entity này, KHÔNG copy nội dung.

---

## RUBRIC — Bảng năng lực bán được ⭐ (lõi của skill)

Mỗi **năng lực** rút từ 5 trục → chấm 4 cột, mỗi cột ✅ / ⚠️ / ❌:

| Cột | Hỏi gì | ✅ khi |
|---|---|---|
| **1. Có thật?** | Có bằng chứng (kết quả đã tạo / kinh nghiệm đã sống / kiến thức đã học sâu)? | có ví dụ/case cụ thể |
| **2. Có người cần?** | Có ai đang đau/muốn cái này? | chỉ ra được nhóm người |
| **3. Có người TRẢ TIỀN?** | Thị trường đã trả tiền cho thứ tương tự chưa? | có sản phẩm/đối thủ cùng loại đang bán |
| **4. Mình DẠY được?** | Chuyển giao được, không chỉ tự làm? | hình dung được cách dạy |

**Xếp hạng:**
- 4 ✅ → **Năng lực bán được hạng A** (đem sang `ips-ngach` trước).
- Thiếu cột 3 (chưa rõ ai trả tiền) → nhóm "tiềm năng — cần kiểm chứng cầu".
- Thiếu cột 1 (chưa có bằng chứng) → nhóm "đam mê chưa đủ lực bán".

> Cổng chống bịa: cột 1 và cột 3 phải có cơ sở thật (người dùng kể hoặc thị trường có bằng chứng). Suy luận từ raw → 🔶.

---

## TEMPLATE FILE `wiki/entities/<Tên>.md`

```markdown
---
type: entity
tags: [hoa-than, chu-doanh-nghiep, course/ips, cung]
created: YYYY-MM-DD
updated: YYYY-MM-DD
nguồn: ["hỏi-đáp", "<raw/MXH nếu có>"]
---

# <Tên người dùng> — Hồ sơ Cá nhân (CUNG)

[1-2 câu: người dùng là ai, đang ở đâu trong hành trình IPS]

## ⭐ Top 3 năng lực bán được (bàn giao ips-ngach)
1. **<năng lực>** — ai trả tiền: <nhóm> · bằng chứng: <…>
2. …
3. …

## Bảng năng lực bán được (đầy đủ)
| Năng lực | Có thật? | Có người cần? | Có người trả tiền? | Dạy được? | Hạng |
|---|---|---|---|---|---|
| … | ✅ | ✅ | ⚠️ | ✅ | B |

## 4 khối hồ sơ
### Kho năng lực (5 trục)
- Đam mê: …  · Tài năng: …  · Khả năng/Tính cách: …  · Kiến thức: …  · Kinh nghiệm: …
### Kho chất liệu (câu chuyện / case kể được)
- …
### Bộ nhận diện giọng (cho skill content dùng lại)
- Từ vựng ruột · nhịp câu · chủ đề lặp · câu cửa miệng · điều khiến tức giận/tranh đấu
### Giá trị & niềm tin
- Tin con người làm được điều gì · điều sẵn sàng tranh đấu

## Khái niệm liên quan
- **đi cặp** [[<Hồ sơ khách hàng — CẦU>]] · **kế thừa** [[<ngách dự án>]]

## Câu hỏi mở
- 🔶 [chỗ suy từ raw chưa xác nhận] · [năng lực cần kiểm chứng cầu]
```

---

## Sau khi xuất
1. Cập nhật `index.md` mục **Entities** + dòng `- [[<Tên>]] — hồ sơ CUNG, Top 3 năng lực bán được`.
2. Append `log.md`.
3. Bàn giao: mở `ips-ngach` với **Top 3 năng lực bán được** làm đầu vào CUNG.
