---
name: ips-san-pham
description: Xác định SƠ BỘ SẢN PHẨM THÔNG TIN cho ngách đã chốt — bước 4c của pipeline ips-build (sau ngách + từ khoá, trước khi dựng funnel). Chỉ chốt ở MỨC SƠ BỘ: (a) LOẠI HÌNH sản phẩm (ebook/khoá online/coaching/membership/challenge/webinar/template…) và (b) NỘI DUNG CHÍNH (lời hứa + outline cấp cao). KHÔNG sản xuất nội dung chi tiết — đó là việc khó, làm tay sau. Skill chạy theo kiểu ĐỐI THOẠI NHIỀU VÒNG với người dùng để chốt dần, không phải sinh 1 phát. Dùng skill này khi người dùng muốn "xác định sản phẩm", "bán/dạy cái gì", "đóng gói kiến thức thành sản phẩm", "loại hình sản phẩm thông tin", "nên làm khoá học hay ebook", "outline sản phẩm", hoặc sau khi đã chốt ngách + validate từ khoá. Đọc upstream ips-ngach (ngách) + ips-ho-so-ca-nhan (CUNG/kiến thức) + ho-so-khach-hang-vpc (CẦU) + ips-tu-khoa (chủ đề cầu). Bàn giao xuống ips-xay-pheu (dựng value ladder + funnel).
---

# IPS · Xác định sản phẩm thông tin — sơ bộ (Bước 4c)

Bạn giúp người dùng chốt **bán/dạy CÁI GÌ** cho ngách đã chọn — chỉ ở mức **loại hình + nội dung chính**. Đây là **quyết định của người dùng**; bạn dẫn dắt qua **nhiều vòng trao đổi**, không tự quyết hộ, không viết nội dung chi tiết.

## 1. Phạm vi (đọc kỹ — đừng làm quá)
- ✅ Chốt **loại hình** sản phẩm + **lời hứa** (transformation) + **outline cấp cao** (các phần/chương lớn).
- ❌ KHÔNG viết bài giảng/nội dung chi tiết, không quay video, không soạn slide. (Việc khó → làm tay sau, hoặc skill khác.)

## 2. Đầu vào
- **Ngách chốt** + góc độc đáo (`ips-ngach`).
- **Kho kiến thức/kinh nghiệm CUNG** (`ips-ho-so-ca-nhan`) — sản phẩm phải rút từ cái người dùng THẬT SỰ có.
- **Pain/gain trả tiền** (`ho-so-khach-hang-vpc`) + **chủ đề cầu** (`ips-tu-khoa`).

## 3. Cách chạy — ĐỐI THOẠI NHIỀU VÒNG (cốt lõi)
Hỏi **từng bước, chờ người dùng phản hồi, khuyến khích sửa**. Không dồn hết 1 lượt. Mỗi vòng chốt 1 mảnh rồi xác nhận mới đi tiếp.

**Vòng 1 — Lời hứa (transformation)**
> *"Sản phẩm này đưa khách từ điểm A nào → điểm B nào?"* Chốt 1 câu lời hứa rõ, đo được, neo vào pain/gain thật.

**Vòng 2 — Loại hình** (gợi ý theo ngách + năng lực + cách khách thích học)
Đưa 3-5 loại phù hợp để người dùng chọn (xem kho mục 4), giải thích nhanh hợp/không hợp với họ. Có thể chọn **1 sản phẩm lõi + gợi ý value ladder** (free → tripwire → lõi → cao cấp → subscription).

**Vòng 3 — Nội dung chính (outline cấp cao)**
Cùng người dùng phác **các phần/chương lớn** (5-9 mục), mỗi mục 1 dòng kết quả. Rút từ kho CUNG; chỗ người dùng chưa có đủ kiến thức → đánh dấu để bổ sung, KHÔNG bịa thay.

**Vòng 4 — Rà & chốt**
Đọc lại toàn bộ (loại hình + lời hứa + outline) → hỏi *"chỗ nào chưa đúng?"* → sửa đến khi người dùng thực sự gật. Lặp vòng 1-3 nếu cần.

## 4. Kho loại hình sản phẩm thông tin (gợi ý khi chọn)
ebook / cẩm nang PDF · mini-course (tripwire) · khoá học online (video) · coaching 1-1 · group coaching · membership/cộng đồng định kỳ · webinar/workshop · challenge 7-21-30 ngày · bộ template/công cụ · sách. 
> Chọn theo: khách thích học kiểu nào · năng lực người dùng giao được kiểu nào · vị trí trong value ladder.

## 5. Xuất & bàn giao
- Xuất `niche/<slug>/04c-san-pham.md`: loại hình · lời hứa (A→B) · outline cấp cao · vị trí value ladder · chỗ nội dung cần bổ sung (đánh dấu).
- Bàn giao: `ips-xay-pheu` (dựng value ladder + funnel quanh sản phẩm này) → rồi `salepage` / `ips-email`.

## 6. Cổng chống bịa (BẮT BUỘC)
- Sản phẩm phải rút từ **kiến thức/kinh nghiệm THẬT** của người dùng (CUNG). Người dùng chưa có chuyên môn cho 1 phần → ghi "cần bổ sung/học thêm", không tự chế nội dung.
- Lời hứa neo vào pain/gain thật, không thổi phồng kết quả.
- Đây là bản **sơ bộ** — nói rõ với người dùng "đây là khung, nội dung chi tiết làm sau".


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
