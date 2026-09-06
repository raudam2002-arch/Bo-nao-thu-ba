# Bộ Skill Video AI — dành cho học viên khoá IPS

Tác giả: **Phạm Thành Long** — https://long.vn · Khoá học: http://ips.long.vn
Bản quyền dành riêng cho học viên của lớp: được **đọc, nghiên cứu, cài đặt và sử dụng**.
Người ngoài lớp học **không có bản quyền** sử dụng dưới mọi hình thức.

## Bộ này gồm 3 skill

| Skill | Làm gì | Chi phí |
|---|---|---|
| **flow-studio** | Claude điều khiển Google Flow trong Chrome để gen video Veo bằng credits gói Google AI | Credits gói Pro/Ultra (~12 credits/clip 8s) |
| **video-nguoi-que** | Video dọc 9:16 "người que vẽ phấn": hình Flow + giọng đọc thiền + nhạc + phụ đề vàng chanh | Credits Flow + ít credits Higgsfield (giọng/nhạc) |
| **veo3-studio** | Gen Veo 3.1 qua API (Gemini/Vertex) — batch nhiều cảnh, resume, retry | Trả tiền theo giây (~$0.40/s) — chỉ dùng khi cần API |

Dùng hàng ngày: **flow-studio** và **video-nguoi-que**. veo3-studio là đường API cho ai cần chạy số lượng lớn.

## Yêu cầu trước khi cài

1. **Claude Code** (bản Desktop hoặc CLI) — đã đăng nhập tài khoản Claude.
2. **Google Chrome** + extension **Claude in Chrome** (cài từ Chrome Web Store, đăng nhập cùng tài khoản Claude).
3. **Tài khoản Google có gói Google AI** (Pro hoặc Ultra) — để có credits gen video trên Flow (https://labs.google/fx/tools/flow). Đăng nhập tài khoản này trong Chrome.
4. **ffmpeg + python3** (cho video-nguoi-que):
   - macOS: `brew install ffmpeg` · Python có sẵn, cài thêm Pillow: `pip3 install Pillow`
5. **Higgsfield CLI** (cho giọng đọc + nhạc của video-nguoi-que): xem hướng dẫn đăng nhập trong lớp.

## Cài đặt (1 phút)

Copy 3 thư mục skill vào thư mục skills của Claude Code:

```bash
# macOS / Linux
cp -R flow-studio video-nguoi-que veo3-studio ~/.claude/skills/
```

Windows (PowerShell):
```powershell
Copy-Item -Recurse flow-studio,video-nguoi-que,veo3-studio "$env:USERPROFILE\.claude\skills\"
```

Mở phiên Claude Code mới — 3 skill tự được nhận.

## Dùng thử ngay

- `làm video trên flow: cảnh hồ núi sương sớm, dọc 9:16` → skill flow-studio chạy
- `tạo video người que 40 giây nội dung: <đoạn text truyền cảm hứng của bạn>` → skill video-nguoi-que chạy trọn gói (hình + giọng + nhạc + phụ đề)

## Lưu ý

- Lần đầu chạy Flow, Claude sẽ nhờ bạn tự đăng nhập Google trong Chrome (Claude không bao giờ nhập mật khẩu hộ bạn).
- Credits nằm trong tài khoản Google của BẠN — kiểm tra bằng cách bấm avatar góc phải trên trang Flow.
- Video Flow ra 720p; skill tự upscale lên 1080×1920 khi dựng bản cuối.
