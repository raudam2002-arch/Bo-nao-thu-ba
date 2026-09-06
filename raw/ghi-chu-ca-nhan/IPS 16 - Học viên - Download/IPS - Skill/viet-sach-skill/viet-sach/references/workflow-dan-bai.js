// ============================================================================
// TEMPLATE WORKFLOW — BƯỚC 4: DÀN BÀI ≥20 CHƯƠNG (đa tác tử, có tranh luận)
// CÁCH DÙNG: điền 4 khối <<< ... >>> (KB, VOICE, BOOK_BIBLE_SEED, REQUIREMENTS) rồi
// truyền toàn bộ file này vào tool Workflow ({ script: "<nội dung file>" }).
// Kết quả trả về: dàn bài thống nhất + arc + phần bổ sung cho Book Bible.
// Đưa kết quả cho người dùng DUYỆT trước khi sang Bước 5. KHÔNG cần sửa phần "ĐỘNG CƠ".
// ============================================================================

export const meta = {
  name: 'viet-sach-dan-bai',
  description: 'Bước 4: nhiều kiến trúc sư dựng dàn bài ≥20 chương → tranh luận → hợp nhất 1 dàn bài + arc',
  phases: [
    { title: 'Kiến trúc', detail: '3 kiến trúc sư, 3 dàn bài ≥20 chương theo 3 cấu trúc' },
    { title: 'Tranh luận', detail: '3 lăng kính phản biện mạnh/yếu từng dàn bài' },
    { title: 'Hợp nhất', detail: 'Kiến trúc trưởng chốt 1 dàn bài thống nhất + arc + Book Bible' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// <<< KHỐI 1: KB — CHẤT LIỆU NGUỒN (từ Bước 3: brief + tóm tắt sách mẫu + chất liệu Brain) >>>
const KB = `
# KHO CHẤT LIỆU (dựng dàn bài — KHÔNG bịa ngoài đây)
## A. Sách mẫu/nguồn: bản đồ chương gốc
- ...
## B. Nỗi đau & mong muốn của avatar (từ Bước 2, giữ quote thật)
- ...
## C. Chất liệu / framework của tác giả cần nhúng (Brain) — ghi tên trang nguồn
- ...
## D. Điểm đau bản địa nguồn còn thiếu, phải thêm chương
- ...
`;

// <<< KHỐI 2: VOICE — GIỌNG VĂN + TÁC GIẢ/EEAT + ĐỐI TƯỢNG (từ Voice Pack) >>>
const VOICE = `
## GIỌNG VĂN (bắt buộc): [ngôi kể, xưng hô, nhịp câu, ẩn dụ, NÊN/CẤM, thuật ngữ Anh kèm dịch lần đầu]
## TÁC GIẢ / EEAT: [tên, bằng cấp, năm kinh nghiệm, thành tích, trải nghiệm thật]
## ĐỐI TƯỢNG: [avatar chính: là ai, sợ gì, muốn gì, bối cảnh văn hóa]
`;

// <<< KHỐI 3: BOOK_BIBLE_SEED — mầm sổ tay thống nhất (từ Bước 3) >>>
const BOOK_BIBLE_SEED = `
## LỜI HỨA CUỐN SÁCH (1 câu: đọc xong người đọc thay đổi được gì): ...
## BẢNG THUẬT NGỮ CHUẨN (mỗi khái niệm gọi đúng 1 tên): ...
## QUY TẮC YMYL cho cuốn này + DANH SÁCH CỜ ĐỎ cần xử: ...
`;

// <<< KHỐI 4: REQUIREMENTS — yêu cầu dàn bài >>>
const SO_CHUONG_TOI_THIEU = 20;
const REQUIREMENTS = `Sách tiếng Việt cho avatar ở VOICE. Chủ đề & thông điệp lõi: [ĐIỀN].
Tối thiểu ${SO_CHUONG_TOI_THIEU} chương. Mỗi chương phải phục vụ một nỗi đau/mong muốn cụ thể của avatar,
có chất liệu thật từ KB, có bài tập/checklist dùng được, có HOOK mở và MÓC KÉO cuối chương, và nối vào
một cung bậc cảm xúc (arc) toàn cuốn có điểm chùng trước điểm sáng, với một mô-típ xuyên suốt.`;

// ============================================================================
// ============================ ĐỘNG CƠ (không cần sửa) ========================
// ============================================================================

phase('Kiến trúc');

// TAY NGHỀ NHÀ VĂN Ở TẦNG DÀN BÀI — gài sẵn craft vào khung để B5 viết cho hay
const CRAFT_DAN_BAI = `
## TAY NGHỀ NHÀ VĂN — áp ngay khi dựng DÀN BÀI (không đợi tới lúc viết)
- Mỗi chương phải kèm một Ý HOOK mở (cảnh/câu hỏi/nghịch lý cụ thể, vào giữa biến cố) và một MÓC KÉO cuối chương kéo sang chương sau — thiết kế móc kéo của chương N ăn khớp hook của chương N+1 để cả cuốn liền một mạch.
- Cả cuốn cần một MÔ-TÍP XUYÊN SUỐT (một hình ảnh/câu/vật gieo ở chương đầu, gọi lại ở các mốc và ở chương chốt) để tạo dư âm và tính chỉnh thể.
- ARC phải có điểm chùng trước điểm sáng: sắp chương sao cho nỗi đau/thất bại đi trước bước ngoặt, tương phản làm giải pháp nặng ký.
- Rải BÀI TẬP/công cụ đều tay; xen chương "cảnh–cảm xúc" với chương "khung–công cụ" để nhịp cả cuốn biến hóa, tránh đều đều.
- Tránh trùng lặp: mỗi chương một nhiệm vụ riêng; nếu hai chương cùng ý → gộp hoặc đổi góc.
`;

const CHUONG_ITEM = {
  type: 'object',
  required: ['so', 'tieu_de', 'muc_tieu', 'y_chinh', 'chat_lieu', 'hook', 'moc_keo'],
  properties: {
    so: { type: 'number' },
    tieu_de: { type: 'string' },
    muc_tieu: { type: 'string', description: 'Chương này làm gì cho người đọc (nỗi đau/mong muốn nào)' },
    y_chinh: { type: 'array', items: { type: 'string' }, description: '3-5 ý chính' },
    chat_lieu: { type: 'string', description: 'Chất liệu/câu chuyện/số liệu/framework từ KB dùng cho chương' },
    hook: { type: 'string', description: 'Ý MỞ CHƯƠNG: một cảnh/câu hỏi/nghịch lý cụ thể vào giữa biến cố, chạm đúng nỗi đau avatar' },
    moc_keo: { type: 'string', description: 'MÓC KÉO cuối chương: câu hỏi treo/lời hứa/vòng lặp mở kéo sang chương sau (không tóm tắt)' },
    bai_tap: { type: 'string', description: 'Bài tập/checklist/biểu mẫu của chương (nếu có)' },
    co_ymyl: { type: 'string', description: 'Cờ đỏ/lưu ý YMYL của chương (nếu có), rỗng nếu không' },
  },
};
const OUTLINE_SCHEMA = {
  type: 'object',
  required: ['cau_truc', 'tua_sach', 'cac_chuong'],
  properties: {
    cau_truc: { type: 'string', description: 'Nguyên tắc tổ chức của dàn bài này' },
    tua_sach: { type: 'string' },
    cac_chuong: { type: 'array', items: CHUONG_ITEM },
  },
};

const cauTruc = [
  { key: 'A', ten: 'Theo hành trình cảm xúc (transformation arc)', brief: 'Sắp chương theo hành trình biến đổi của người đọc: từ đau/mất phương hướng → nhận ra → học kỹ năng → thực hành → hồi phục → duy trì. Cảm xúc dẫn dắt.' },
  { key: 'B', ten: 'Theo hệ thống framework (chuyên đề)', brief: 'Sắp chương như một hệ thống có khung: mỗi chương một trụ cột/kỹ năng/khái niệm, logic chặt, dễ tra cứu. Lý trí dẫn dắt.' },
  { key: 'C', ten: 'Theo trình tự bài tập (workbook)', brief: 'Mỗi chương là một bước hành động có bài tập/biểu mẫu, người đọc vừa đọc vừa làm. Ứng dụng dẫn dắt.' },
];

const outlines = await parallel(cauTruc.map(c => () =>
  agent(
    `${KB}\n\n${VOICE}\n\n${CRAFT_DAN_BAI}\n\n${BOOK_BIBLE_SEED}\n\n---\nBạn là KIẾN TRÚC SƯ NỘI DUNG kỳ cựu, tư duy như một nhà văn.\nNHIỆM VỤ: dựng MỘT dàn bài sách theo CẤU TRÚC: "${c.ten}". Định hướng: ${c.brief}\n\nYÊU CẦU: ${REQUIREMENTS}\n\nDàn bài: tựa sách; TỐI THIỂU ${SO_CHUONG_TOI_THIEU} chương; mỗi chương có số, tiêu đề, mục tiêu (nỗi đau/mong muốn nào của avatar), 3-5 ý chính, chất liệu từ KB, HOOK mở chương, MÓC KÉO cuối chương, bài tập, cờ YMYL nếu có. Áp TAY NGHỀ NHÀ VĂN Ở TẦNG DÀN BÀI (hook↔móc kéo khớp nhau, arc chùng-trước-sáng, nhịp chương biến hóa, không trùng). Bám avatar & giọng ở VOICE. Trả về theo schema.`,
    { label: `dàn bài ${c.key}: ${c.ten}`, phase: 'Kiến trúc', schema: OUTLINE_SCHEMA }
  )
)).then(r => r.filter(Boolean));

log(`Có ${outlines.length} dàn bài (${outlines.map(o => o.cac_chuong.length).join('/')} chương). Tranh luận.`);

phase('Tranh luận');

const outlinesText = outlines.map((o, i) =>
  `### DÀN BÀI ${cauTruc[i].key} — ${o.cau_truc}\nTỰA: ${o.tua_sach}\nCHƯƠNG:\n${o.cac_chuong.map(c => `  ${c.so}. ${c.tieu_de} — ${c.muc_tieu}`).join('\n')}`
).join('\n\n');

const CRITIQUE_SCHEMA = {
  type: 'object',
  required: ['goc_nhin', 'danh_gia', 'de_xuat'],
  properties: {
    goc_nhin: { type: 'string' },
    danh_gia: { type: 'array', items: { type: 'object', required: ['dan_bai', 'manh', 'yeu'], properties: { dan_bai: { type: 'string' }, manh: { type: 'string' }, yeu: { type: 'string' } } } },
    de_xuat: { type: 'string', description: 'Nên lấy chương/trình tự nào, bỏ gì, ghép ra sao' },
  },
};
const lenses = [
  { ten: 'Người đọc bận rộn (hấp dẫn & giữ chân)', focus: 'Trình tự chương có cuốn không? Có chương nào thừa/trùng/lê thê dễ bỏ? Mở đầu và chương 1 có kéo đọc tiếp?' },
  { ten: 'Chuyên gia EEAT/YMYL', focus: 'Dàn bài có chỗ cho trải nghiệm thật + chất liệu tác giả (EEAT)? Nỗi đau nhạy cảm (cờ đỏ) có được xử đúng chương, không phóng đại, có chương/đoạn miễn trừ?' },
  { ten: 'Người gác cổng cung bậc & tay nghề nhà văn', focus: 'Cả cuốn có một arc rõ (mở → cao trào → chốt), có điểm chùng trước điểm sáng? Mỗi chương có HOOK mở mạnh và MÓC KÉO cuối ăn khớp hook chương sau? Có một MÔ-TÍP xuyên suốt để tạo dư âm? Nhịp chương có biến hóa (xen cảnh–cảm xúc với khung–công cụ) hay đều đều? Mỗi chương có trao một thay đổi/công cụ, bài tập rải đều? Kết cuốn có đủ lực?' },
];
const critiques = await parallel(lenses.map(l => () =>
  agent(
    `${KB}\n\n${VOICE}\n\n---\nBạn PHẢN BIỆN để chọn/ghép dàn bài tốt nhất, DƯỚI GÓC NHÌN: "${l.ten}".\nTrọng tâm: ${l.focus}\n\nCÁC DÀN BÀI:\n${outlinesText}\n\nĐánh giá thẳng mạnh/yếu từng dàn bài dưới góc của bạn, rồi đề xuất giữ gì/bỏ gì/ghép ra sao. Trả về theo schema.`,
    { label: `phản biện: ${l.ten}`, phase: 'Tranh luận', schema: CRITIQUE_SCHEMA }
  )
)).then(r => r.filter(Boolean));

const critiquesText = critiques.map(c => `### ${c.goc_nhin}\n${c.danh_gia.map(d => `- ${d.dan_bai}: MẠNH=${d.manh} | YẾU=${d.yeu}`).join('\n')}\nĐỀ XUẤT: ${c.de_xuat}`).join('\n\n');

phase('Hợp nhất');

const fullOutlinesText = outlines.map((o, i) =>
  `### DÀN BÀI ${cauTruc[i].key}\nTỰA: ${o.tua_sach}\n${o.cac_chuong.map(c => `${c.so}. ${c.tieu_de}\n   mục tiêu: ${c.muc_tieu}\n   ý: ${c.y_chinh.join('; ')}\n   chất liệu: ${c.chat_lieu}\n   bài tập: ${c.bai_tap || '-'}\n   ymyl: ${c.co_ymyl || '-'}`).join('\n')}`
).join('\n\n');

const UNIFIED_SCHEMA = {
  type: 'object',
  required: ['tua_sach', 'arc', 'mo_tip_xuyen_suot', 'cac_chuong', 'book_bible_bo_sung'],
  properties: {
    tua_sach: { type: 'string' },
    arc: { type: 'string', description: 'Cung bậc cảm xúc toàn cuốn: mở → cao trào → chốt, có điểm chùng trước điểm sáng' },
    mo_tip_xuyen_suot: { type: 'string', description: 'Mô-típ (hình ảnh/câu/vật) gieo ở chương đầu, gọi lại ở các mốc & chương chốt để tạo dư âm' },
    cac_chuong: { type: 'array', items: CHUONG_ITEM },
    book_bible_bo_sung: { type: 'string', description: 'Phần thêm vào Book Bible: danh sách chương + 1 câu mục tiêu/chương, thuật ngữ mới, ghi chú arc + mô-típ' },
  },
};

const unified = await agent(
  `${KB}\n\n${VOICE}\n\n${CRAFT_DAN_BAI}\n\n${BOOK_BIBLE_SEED}\n\n---\nBạn là KIẾN TRÚC TRƯỞNG chốt dàn bài cuối, tư duy như một nhà văn.\n\nCÁC DÀN BÀI ỨNG VIÊN:\n${fullOutlinesText}\n\nCÁC LUỒNG PHẢN BIỆN:\n${critiquesText}\n\nNHIỆM VỤ: hợp nhất thành MỘT dàn bài tốt hơn cả ba — lấy tinh hoa theo đề xuất phản biện. Yêu cầu: TỐI THIỂU ${SO_CHUONG_TOI_THIEU} chương, mỗi chương đủ (số, tiêu đề, mục tiêu, 3-5 ý, chất liệu KB, HOOK mở, MÓC KÉO cuối, bài tập, cờ YMYL); một ARC rõ có điểm chùng trước điểm sáng; một MÔ-TÍP XUYÊN SUỐT; hook↔móc kéo khớp giữa các chương; nhịp chương biến hóa; không trùng chương; rải bài tập đều. Đồng thời xuất phần BỔ SUNG cho Book Bible (danh sách chương + 1 câu mục tiêu mỗi chương + ghi chú arc & mô-típ). Trả về theo schema.`,
  { label: 'kiến trúc trưởng: dàn bài thống nhất', phase: 'Hợp nhất', effort: 'high', schema: UNIFIED_SCHEMA }
);

log(`Dàn bài chốt: "${unified.tua_sach}" — ${unified.cac_chuong.length} chương.`);

return {
  tua_sach: unified.tua_sach,
  arc: unified.arc,
  mo_tip_xuyen_suot: unified.mo_tip_xuyen_suot,
  so_chuong: unified.cac_chuong.length,
  cac_chuong: unified.cac_chuong,
  book_bible_bo_sung: unified.book_bible_bo_sung,
  bien_ban_tranh_luan: critiquesText,
};
