# Visual Design - Warrior Plus Style

Tài liệu hướng dẫn visual cho HTML salepage. Warrior Plus là sàn affiliate đông đảo nhất thế giới về info-product - style của họ tối ưu cho chuyển đổi, không quan tâm thẩm mỹ "đẹp" hiện đại.

---

## Bảng màu chủ đạo

| Vai trò | Hex | Khi dùng |
|---------|-----|----------|
| Đỏ alert | `#D32F2F` | Headline, urgency banner, "Mua ngay" |
| Đỏ đậm | `#B71C1C` | Hover state, gạch chéo giá gốc |
| Vàng highlight | `#FFD700` | Background CTA button, highlight text |
| Vàng đậm | `#FFC107` | Border, badge bonus |
| Đen heading | `#1A1A1A` | Heading H2/H3, body bold |
| Đen text | `#333333` | Body text |
| Xám sub | `#666666` | Sub-headline, caption |
| Trắng nền | `#FFFFFF` | Background chung |
| Kem nền alt | `#FFF8E1` | Background section bonus |
| Xanh tick | `#388E3C` | Icon ✓ bullets |

**Combo phổ biến**:
- Headline đỏ trên nền trắng: `#D32F2F` on `#FFFFFF`
- CTA: chữ đỏ trên nền vàng: `#D32F2F` on `#FFD700`
- Urgency banner: chữ trắng trên nền đỏ: `#FFFFFF` on `#D32F2F`

---

## Typography

**Font chính**: 
```css
font-family: 'Be Vietnam Pro', 'Inter', -apple-system, sans-serif;
```

Fallback nếu cần serif feel:
```css
font-family: 'Merriweather', Georgia, serif;
```

**Hierarchy**:

| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| Pre-headline | 16-18px | 400 italic | 1.4 |
| Headline (H1) | 36-48px | 800 | 1.2 |
| Sub-headline | 22-26px | 500 | 1.3 |
| Section H2 | 28-32px | 700 | 1.3 |
| H3 | 22-24px | 700 | 1.3 |
| Body | 18-20px | 400 | 1.6 |
| Bullets | 18-20px | 400 | 1.5 |
| CTA button | 22-28px | 800 UPPERCASE | 1.2 |
| Caption | 14-16px | 400 | 1.4 |

**Quy tắc**: 
- Mobile giảm 80% kích thước
- Tránh font-weight 300 (mảnh quá, mất ấn tượng)
- IN HOA chỉ dùng cho CTA + urgency banner

---

## Layout & Spacing

**Max-width container**: 720px (đọc dễ, không quá rộng)

**Padding mỗi section**: 60px trên/dưới, 20px hai bên (mobile: 40px/16px)

**Gap giữa elements**:
- Giữa các đoạn body: 20px
- Giữa heading và body: 24px  
- Giữa các section: 60-80px
- Giữa bullets: 12px

---

## Components

### 1. Urgency Banner (top sticky)
```html
<div class="urgency-banner">
  ⏰ ƯU ĐÃI KẾT THÚC SAU: <span id="countdown">23:59:45</span>
</div>
```

```css
.urgency-banner {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #D32F2F;
  color: white;
  text-align: center;
  padding: 12px;
  font-size: 18px;
  font-weight: 700;
}
```

### 2. Headline Section
```html
<section class="hero">
  <p class="pre-headline">Dành riêng cho [đối tượng]...</p>
  <h1 class="headline">[Headline chính 36-48px đậm đỏ]</h1>
  <p class="sub-headline">[Sub-headline 22-26px xám đậm]</p>
</section>
```

```css
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, #FFF8E1 0%, #FFFFFF 100%);
}
.headline {
  color: #D32F2F;
  font-size: 44px;
  font-weight: 800;
  line-height: 1.2;
  margin: 16px 0;
}
.headline em {
  background: #FFD700;
  font-style: normal;
  padding: 0 8px;
}
```

### 3. Pain Section
```css
.pain-section {
  background: #1A1A1A;
  color: #FFFFFF;
  padding: 60px 20px;
}
.pain-section h2 {
  color: #FFD700;
}
```

Sử dụng nền đen + chữ vàng cho phần khoét đau để tạo cảm xúc nặng nề.

### 4. Bullets List
```html
<ul class="benefits">
  <li>✓ [bullet 1]</li>
  <li>✓ [bullet 2]</li>
</ul>
```

```css
.benefits li {
  list-style: none;
  padding: 12px 0 12px 36px;
  position: relative;
  font-size: 19px;
}
.benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #388E3C;
  font-weight: 800;
  font-size: 24px;
}
```

### 5. Bonus Box
```html
<div class="bonus">
  <div class="bonus-tag">🎁 BONUS #1</div>
  <h3>[Tên bonus]</h3>
  <p>[Mô tả]</p>
  <div class="price-line">
    <span class="strike">Giá riêng: 5.000.000đ</span>
    <span class="free">HÔM NAY: MIỄN PHÍ</span>
  </div>
</div>
```

```css
.bonus {
  background: #FFF8E1;
  border: 3px dashed #FFC107;
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
}
.bonus-tag {
  display: inline-block;
  background: #D32F2F;
  color: white;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 700;
  margin-bottom: 12px;
}
.strike { text-decoration: line-through; color: #999; }
.free { color: #D32F2F; font-weight: 800; font-size: 20px; }
```

### 6. Guarantee Badge
```html
<div class="guarantee">
  <div class="badge">
    <div class="badge-inner">
      100% <br>
      <strong>GUARANTEE</strong> <br>
      30 NGÀY
    </div>
  </div>
  <p>[Mô tả guarantee chi tiết]</p>
</div>
```

```css
.badge {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(#FFD700, #FFC107);
  border: 6px solid #D32F2F;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  transform: rotate(-8deg);
}
.badge-inner {
  text-align: center;
  color: #D32F2F;
  font-weight: 800;
  font-size: 22px;
  transform: rotate(8deg);
}
```

### 7. Value Stack Table
```html
<table class="value-stack">
  <tr><td>Khóa học chính</td><td class="amount">15.000.000đ</td></tr>
  <tr><td>BONUS #1</td><td class="amount">5.000.000đ</td></tr>
  ...
  <tr class="total"><td>TỔNG GIÁ TRỊ</td><td>37.000.000đ</td></tr>
  <tr class="today"><td>HÔM NAY CHỈ:</td><td>5.900.000đ</td></tr>
</table>
```

```css
.value-stack {
  width: 100%;
  border-collapse: collapse;
  font-size: 19px;
}
.value-stack td {
  padding: 14px;
  border-bottom: 1px solid #E0E0E0;
}
.value-stack .amount {
  text-align: right;
  font-weight: 700;
}
.value-stack .total {
  background: #1A1A1A;
  color: white;
}
.value-stack .total td {
  font-size: 22px;
  font-weight: 800;
}
.value-stack .today {
  background: #FFD700;
}
.value-stack .today td {
  font-size: 28px;
  font-weight: 800;
  color: #D32F2F;
}
```

### 8. CTA Button
```html
<a href="[link mua]" class="cta-button">
  ĐĂNG KÝ NGAY - NHẬN 4 BONUS
</a>
<div class="cta-subtext">
  🔒 Thanh toán an toàn · ⚡ Truy cập ngay · 💯 Hoàn tiền 30 ngày
</div>
```

```css
.cta-button {
  display: block;
  background: #FFD700;
  color: #D32F2F;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  padding: 24px 32px;
  border: 4px solid #1A1A1A;
  border-radius: 12px;
  text-decoration: none;
  margin: 32px auto;
  max-width: 600px;
  box-shadow: 0 6px 16px rgba(211, 47, 47, 0.3);
  animation: pulse 1.5s infinite;
  transition: transform 0.2s;
}
.cta-button:hover {
  transform: translateY(-3px);
  background: #FFC107;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
.cta-subtext {
  text-align: center;
  font-size: 15px;
  color: #666;
  margin-top: 12px;
}
```

### 9. Testimonial Card
```html
<div class="testimonial">
  <img src="[ảnh khách]" alt="[tên]" class="testimonial-avatar">
  <div class="testimonial-content">
    <h4>[Tên - Chức danh - Địa điểm]</h4>
    <p class="result"><strong>Trước:</strong> [tình trạng] · <strong>Sau:</strong> [kết quả]</p>
    <blockquote>"[Lời chia sẻ]"</blockquote>
  </div>
</div>
```

```css
.testimonial {
  background: #FFF8E1;
  border-left: 6px solid #FFC107;
  padding: 24px;
  margin: 16px 0;
  display: flex;
  gap: 20px;
}
.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.testimonial blockquote {
  font-style: italic;
  color: #1A1A1A;
  border: none;
  margin: 8px 0 0;
}
```

### 10. Countdown Timer (JavaScript)
```html
<div class="countdown-wrapper">
  <p>⏰ ƯU ĐÃI KẾT THÚC SAU:</p>
  <div class="countdown">
    <div><span id="days">00</span><label>NGÀY</label></div>
    <div><span id="hours">00</span><label>GIỜ</label></div>
    <div><span id="minutes">00</span><label>PHÚT</label></div>
    <div><span id="seconds">00</span><label>GIÂY</label></div>
  </div>
</div>

<script>
// Đặt deadline tại đây (format ISO)
const deadline = new Date("2026-MM-DDTHH:MM:SS+07:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = deadline - now;
  if (distance < 0) {
    document.querySelector('.countdown-wrapper').innerHTML = '<p style="color:#D32F2F;font-weight:700">ƯU ĐÃI ĐÃ KẾT THÚC</p>';
    return;
  }
  document.getElementById('days').textContent = String(Math.floor(distance / 86400000)).padStart(2,'0');
  document.getElementById('hours').textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2,'0');
  document.getElementById('minutes').textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2,'0');
  document.getElementById('seconds').textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();
</script>
```

```css
.countdown {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 16px 0;
}
.countdown > div {
  background: #1A1A1A;
  color: #FFD700;
  padding: 16px;
  border-radius: 8px;
  min-width: 80px;
  text-align: center;
}
.countdown span {
  font-size: 36px;
  font-weight: 800;
  display: block;
}
.countdown label {
  font-size: 12px;
  letter-spacing: 1px;
}
```

---

## Mobile Responsive

**Breakpoint chính**: 768px

```css
@media (max-width: 768px) {
  .headline { font-size: 32px; }
  .sub-headline { font-size: 19px; }
  body { font-size: 17px; }
  .cta-button { font-size: 20px; padding: 18px 20px; }
  .countdown > div { min-width: 60px; padding: 10px; }
  .countdown span { font-size: 26px; }
  .testimonial { flex-direction: column; text-align: center; }
}
```

---

## Quy tắc cuối

1. **KHÔNG dùng dark mode** - salepage cần sáng, rõ, tin cậy
2. **KHÔNG dùng gradient phức tạp** - chỉ gradient nhẹ vàng→trắng
3. **KHÔNG dùng quá 3 font** - 1 sans-serif body + 1 display headline đủ
4. **LUÔN có khoảng trắng** giữa các block - không nhồi nhét
5. **CTA xuất hiện ít nhất 3 lần** - đầu (sau hero), giữa (sau bullets), cuối (sau guarantee)
6. **Tốc độ tải** - tránh image >500KB, dùng lazy loading
7. **Test trên mobile** - 70% khách Việt Nam đọc trên điện thoại
