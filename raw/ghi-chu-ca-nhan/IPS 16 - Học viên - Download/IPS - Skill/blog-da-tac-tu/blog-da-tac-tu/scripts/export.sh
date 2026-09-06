#!/usr/bin/env bash
# Đóng gói skill blog-da-tac-tu để CHIA SẺ cho người khác.
# Tự động LOẠI BỎ references/_private/ (hồ sơ thương hiệu riêng).
#
# Dùng:
#   bash scripts/export.sh <thư-mục-đích>
#   bash scripts/export.sh ~/Desktop/blog-da-tac-tu-share
#
# Kết quả: bản copy sạch (không có _private/), sẵn sàng nén/gửi.

set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="${1:-}"

if [[ -z "$DEST" ]]; then
  echo "Thiếu thư mục đích."
  echo "Dùng: bash scripts/export.sh <thư-mục-đích>"
  exit 1
fi

mkdir -p "$DEST"

# Copy toàn bộ skill TRỪ thư mục _private và file rác.
rsync -a --delete \
  --exclude 'references/_private' \
  --exclude '.DS_Store' \
  --exclude 'evals' \
  "$SRC"/ "$DEST"/

# Bảo hiểm: xóa lần nữa nếu lỡ lọt.
rm -rf "$DEST/references/_private"

echo "✅ Đã xuất bản chia sẻ vào: $DEST"
echo "   - Đã loại bỏ references/_private/ (hồ sơ thương hiệu riêng)."
echo "   - Người dùng mới sẽ được skill hỏi 'hồ sơ thương hiệu' (intake) khi chạy."
echo ""
echo "Kiểm tra nhanh:"
if [[ -d "$DEST/references/_private" ]]; then
  echo "   ⚠️  CẢNH BÁO: _private vẫn còn — KIỂM TRA LẠI trước khi gửi!"
else
  echo "   ✓ Xác nhận: không còn _private trong bản xuất."
fi
