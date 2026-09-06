---
name: flow-studio
description: Điều khiển Google Flow (labs.google/fx/tools/flow) qua Chrome MCP để gen video Veo bằng CREDITS gói Google AI Ultra (không tốn tiền API) — Claude tự mở project, chỉnh cài đặt 9:16/model/số output, điền prompt, chờ render, bắt link CDN và tải video về máy. Dùng BẤT CỨ KHI NÀO người dùng muốn "làm video trên Flow", "gen video bằng credits", "dùng Google Flow", "gen Veo miễn phí/bằng gói Ultra", "làm video đường flow". KHÔNG dùng khi cần batch máy lạnh qua API trả tiền (dùng veo3-studio) hay Higgsfield/Seedance (higgsfield-generate).
---

# Flow Studio — Claude Code điều khiển Google Flow qua Chrome

Gen video Veo bằng **credits gói Google AI (Pro/Ultra)** của chính bạn. Không tốn tiền API. Chậm hơn API (~1-2 phút/clip + thao tác UI) nhưng miễn phí.

## Điều kiện
- Chrome MCP kết nối (browser macOS). Nếu 2 browser (Mac + Windows): hỏi người dùng chọn.
- Đăng nhập Chrome bằng tài khoản Google CÓ GÓI Google AI (Pro/Ultra) của bạn (KHÔNG tự nhập mật khẩu — nếu bị hỏi
  đăng nhập, đưa người dùng tự làm).
- Vào https://labs.google/fx/tools/flow → bấm **New project** để tạo project của bạn (Claude sẽ nhớ URL project trong phiên làm việc).

## Chi phí credits (đo thực tế 7/2026)
| Cấu hình | Credits |
|---|---|
| Omni Flash (= Veo fast), 8s, 1x | 12 |
| Như trên nhưng x2 output | 24 |
| Model quality (Veo 3.1) | cao hơn nhiều — chỉ dùng khi chốt bản final |

Luôn để **1x** khi nháp. Panel cài đặt hiện "Generating will use N credits" — đọc số này báo người dùng.

## Quy trình chuẩn (đã kiểm chứng)

1. **Mở project**: `navigate` tới URL project → chờ 5-6s → screenshot xác nhận (góc phải có badge ULTRA).
2. **Kiểm tra credits** (khi cần): click avatar góc trên phải → menu hiện "N AI credits" → đóng menu (click X).
3. **Mở panel cài đặt**: `find` "video output settings chip button" (chip dạng `Video · 8s ⬜ 1x`
   cạnh ô prompt) → click bằng **ref** (click toạ độ hay trượt). Panel gồm:
   - Image / Video (chọn Video)
   - Frames / Ingredients (Ingredients = dùng ảnh nhân vật/nguyên liệu)
   - Aspect: 9:16 | 16:9
   - Outputs: 1x x2 x3 x4 (click bằng find ref "1x outputs per prompt option")
   - Model dropdown (Omni Flash mặc định)
   - Duration: 4s 6s 8s 10s
   - Dòng "Generating will use N credits"
   CẢNH BÁO: click trượt ra ngoài panel sẽ đóng panel và có thể mở nhầm media phía sau — luôn dùng ref.
4. **Prompt**: click ô "What do you want to create?" → type prompt tiếng Anh (công thức 5 yếu tố trong
   `~/.claude/skills/veo3-studio/references/prompt-cong-thuc.md`; thêm "no text"). Nút "Agent" bên cạnh
   là chế độ Flow tự dựng nhiều cảnh — chỉ bật khi người dùng muốn.
5. **Gửi**: click nút mũi tên (→) cạnh chip cài đặt.
6. **Chờ render**: 6×wait 10s → screenshot. Thẻ video hiện rõ hình = xong (thường ~60-90s với Flash).
   Chưa xong thì lặp thêm.
7. **Tải về (cách ổn định nhất — qua network)**:
   a. Gọi `read_network_requests` 1 lần (bật tracking).
   b. Click nút Download (icon ⬇ đầu hàng nút cạnh metadata video). Toast "Downloading items..." hiện ra
      nhưng file thường KHÔNG rơi vào ~/Downloads — không sao, mục đích là kích hoạt request.
   c. `read_network_requests` lọc pattern `flow-content` → lấy URL dạng
      `https://flow-content.google/video/<id>?Expires=...&KeyName=labs-flow-prod-cdn-key&Signature=...`
   d. `curl -sL -o <đích>.mp4 "<URL>"` — URL có chữ ký, không cần cookie. Verify bằng ffprobe.
8. **Nhiều cảnh**: lặp bước 4-7 từng prompt (mỗi lần submit là 1 job; Flow cho phép queue vài job song
   song). Ghép clip bằng: `python3 ~/.claude/skills/veo3-studio/scripts/veo.py assemble --dir <dir> --out final.mp4`

## Tính năng nâng cao trong Flow
- **Ingredients**: thêm ảnh nhân vật (tab Characters) làm nguyên liệu giữ nhân vật nhất quán.
- **Frames to Video**: cho khung đầu/cuối.
- **Scenes**: dựng chuỗi cảnh nối tiếp trong Flow (Scenebuilder).
- Video Omni Flash mặc định 720p; muốn nét hơn dùng model quality hoặc upscale trong Tools.
- **Ghép với pipeline video-nguoi-que**: clip Flow là 720×1280, còn phụ đề make_subs render khung
  1080×1920 → PHẢI upscale clip trước khi build (`ffmpeg -vf "scale=1080:1920:flags=lanczos"`),
  không thì chữ rơi ngoài khung, video ra không có phụ đề.
- **Nhận diện cảnh khi tải nhiều clip**: các prompt cùng style base bị cắt cụt giống hệt nhau trong
  UI — đừng tin thứ tự/thumbnail; tải về rồi soi khung hình (`ffmpeg -ss 4 -frames:v 1`) để đặt tên.

## Sự cố
| Hiện tượng | Xử lý |
|---|---|
| Mở URL project bị đá về landing page | Chưa đăng nhập trong Chrome này — nhờ người dùng đăng nhập, tuyệt đối không nhập hộ mật khẩu |
| Click chip cài đặt không mở panel | Dùng find → click ref, không click toạ độ |
| Download không rơi vào ~/Downloads | Đúng dự kiến — dùng đường network + curl (bước 7) |
| Hết credits | Báo người dùng; credits reset theo chu kỳ gói Ultra |

## Tác giả & Bản quyền

- Tác giả: **Phạm Thành Long** — https://long.vn
- Skill này dành riêng cho **học viên khoá học IPS** — http://ips.long.vn
- Học viên của lớp được quyền: **đọc, nghiên cứu, cài đặt và sử dụng**.
- Người ngoài lớp học **không có bản quyền** sử dụng dưới mọi hình thức.
