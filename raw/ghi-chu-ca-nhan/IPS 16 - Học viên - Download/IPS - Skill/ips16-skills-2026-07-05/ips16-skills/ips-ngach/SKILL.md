---
name: ips-ngach
description: Chốt THỊ TRƯỜNG NGÁCH cho sản phẩm thông tin trong hệ Internet Power System (IPS) của Phạm Thành Long — bước 4, CHỐT ĐẦU TIÊN của mạch sản phẩm. Công thức NGÁCH = (1 CẦU + 2 CUNG) − 3 ĐỐI THỦ: giao giữa thứ thị trường cần (ho-so-khach-hang-vpc) và thứ mình làm được (ips-ho-so-ca-nhan), rồi TRỪ phần Top-100 đối thủ đã chiếm (ips-top-100) → còn lại khe hở để chen vào. THỨ TỰ BẮT BUỘC: chốt ngách TRƯỚC → rồi mới nghiên cứu từ khoá (ips-tu-khoa) để validate cầu → rồi mới xác định sản phẩm. Dùng skill này khi người dùng muốn "chọn ngách", "chốt ngách", "tôi nên bán/dạy cái gì", "thị trường ngách", "niche", "ngách sản phẩm thông tin", "giao điểm đam mê và nhu cầu", hoặc sau khi đã có hồ sơ CUNG + CẦU + đối thủ. Đọc upstream ips-ho-so-ca-nhan + ho-so-khach-hang-vpc + ips-top-100. Bàn giao xuống ips-tu-khoa rồi xác định sản phẩm.
---

# IPS · Chốt Ngách (Bước 4)

Bạn chốt **một ngách sản phẩm thông tin** ở khe hở: thứ người dùng *làm tốt* ∩ thị trường *trả tiền* − chỗ *đối thủ chưa phủ*. **Ngách chốt trước**, mọi thứ sau (từ khoá, sản phẩm, nội dung) bám theo.

## 1. Công thức NGÁCH = (1 + 2) − 3
- **1. CẦU** — bản đồ giá trị KH: Jobs/Pains/Gains mà khách **trả tiền** (`ho-so-khach-hang-vpc`).
- **2. CUNG** — năng lực bán được hạng A (`ips-ho-so-ca-nhan`).
- **3. ĐỐI THỦ** — khe hở từ Top-100: chỗ đối thủ **chưa/kém phủ** (`ips-top-100`).
→ Ngách = ô vừa (mình làm được) vừa (khách cần & trả tiền) mà (đối thủ để trống).

## 2. Đầu vào (đọc trước; thiếu cái nào → chạy/hỏi cái đó trước)
- Top 3 năng lực bán được (CUNG).
- Top pain/gain trả tiền của persona (CẦU).
- Khe hở định vị + bản đồ đối thủ (top-100).

## 3. Quy trình
1. **Lập ma trận giao** CUNG × CẦU → liệt các ô "mình làm được & khách cần".
2. **Trừ đối thủ**: bỏ/hạ điểm ô mà Top-100 đã phủ mạnh; ưu tiên ô trùng **khe hở định vị**.
3. **Chấm mỗi ô ngách ứng viên** (mục 4) → xếp hạng.
4. **Chốt 1 ngách** + 2-3 ngách dự phòng. Ngách phải mô tả được kiểu: *"giúp [ai cụ thể] đạt [kết quả] qua [góc độc đáo của mình mà đối thủ chưa làm]"*.

## 4. Tiêu chí chấm ngách (mỗi tiêu chí cao/vừa/thấp)
| Tiêu chí | Hỏi |
|---|---|
| Khớp năng lực (CUNG) | mình có bằng chứng làm tốt? |
| Độ đau & khả năng chi trả (CẦU) | khách đau thật & sẵn tiền? |
| Khe hở (− đối thủ) | đối thủ để trống / yếu chỗ này? |
| Khả năng tạo nội dung bền | mình nói mãi không cạn? |
| Tiềm năng đóng gói thành sản phẩm thông tin | dạy/coaching/khoá được? |

## 5. Xuất & bàn giao (đúng thứ tự)
- Xuất `niche/<slug>/04-ngach.md`: ngách chốt · công thức (1+2)−3 dẫn ra sao · điểm chấm · ngách dự phòng · góc độc đáo.
- **Bàn giao tuần tự:**
  1. → `ips-tu-khoa`: **validate cầu** ngách vừa chốt bằng volume/độ khó (3 nhóm từ khoá). Cầu yếu/không ai tìm → **quay lại chọn ngách dự phòng** (vòng lặp).
  2. → **xác định sản phẩm**: sau khi từ khoá xác nhận cầu, mới chốt sản phẩm thông tin (offer) cho ngách (`ips-xay-pheu` dựng value ladder / hoặc bước sản phẩm riêng).
- Cập nhật `index.md` + `log.md`.

> ⚠️ KHÔNG nghiên cứu từ khoá hay chốt sản phẩm TRƯỚC khi có ngách. Ngách là cái khung; từ khoá & sản phẩm là cái lấp vào khung.

## 6. Cổng chống bịa (BẮT BUỘC)
- Ngách chốt phải **neo vào CUNG + CẦU + đối thủ THẬT** (có nguồn từ 3 skill upstream), không chọn theo cảm tính.
- KHÔNG chế cỡ thị trường thành con số; ước lượng → 🔶, để `ips-tu-khoa` kiểm bằng volume thật.
- Nếu upstream thiếu (chưa có CUNG/CẦU/đối thủ) → nói rõ "cần chạy [skill] trước", không tự bịa thay.


---

## 📜 Bản quyền & hướng dẫn sử dụng — Bản dành cho học viên IPS 16

**Bản quyền © Phạm Thành Long (long.vn)** — Dành cho học viên lớp **IPS 16** (ips.long.vn).

Skill này là **BẢN MẪU**: dùng để định khung mô hình, để anh/chị **sửa chữa, nâng cấp và làm tốt hơn** cho chính doanh nghiệp của mình — không phải để dùng nguyên xi.

**Hướng dẫn sử dụng đúng cách:**

1. **KHÔNG import trực tiếp** skill này vào hệ thống của anh/chị — import nguyên xi sẽ **không học được gì**.
2. Hãy **nhờ Claude hướng dẫn**: mở skill mẫu này ra và hỏi Claude — *"Skill này có gì hay? Cấu trúc ra sao? Phần nào phù hợp với sản phẩm/ngách của tôi?"*
3. Chọn lọc phần hay, rồi **tự viết lại thành skill của riêng mình** — đúng sản phẩm, đúng ngách, đúng giọng của anh/chị. Đó mới là lúc anh/chị thực sự học được.
