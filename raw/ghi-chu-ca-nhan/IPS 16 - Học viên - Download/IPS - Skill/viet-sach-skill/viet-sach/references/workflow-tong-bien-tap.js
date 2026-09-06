// ============================================================================
// TEMPLATE WORKFLOW — BƯỚC 5': TỔNG BIÊN TẬP (cắt gọt cho mượt → duyệt → viết bù)
// CHẠY SAU KHI ĐỦ CHƯƠNG. Hai vòng:
//   VÒNG CẮT   : cắt bớt chữ, bỏ lặp/sáo → câu mượt & chất lượng hơn (không đổi ý)
//   VÒNG DUYỆT : đọc lại toàn cuốn; chương/đoạn CHƯA ĐẠT thì viết thêm/viết lại
// CÁCH DÙNG: điền VOICE, BOOK_BIBLE, CAC_CHUONG (toàn bộ chương đã viết ở B5).
// Truyền cả file vào tool Workflow. Trả về các chương bản biên tập cuối + báo cáo.
// ============================================================================

export const meta = {
  name: 'viet-sach-tong-bien-tap',
  description: "Bước 5': tổng biên tập cắt gọt cho mượt rồi duyệt & viết bù chỗ chưa đạt",
  phases: [
    { title: 'Cắt gọt', detail: 'Cắt bớt chữ, bỏ lặp/sáo, siết cho mượt (giữ nguyên ý)' },
    { title: 'Duyệt', detail: 'Đọc lại toàn cuốn theo Book Bible, chấm chương đạt/chưa đạt' },
    { title: 'Viết bù', detail: 'Viết thêm/viết lại chương chưa đạt' },
  ],
}

// <<< KHỐI 1: VOICE >>>
const VOICE = `
## GIỌNG VĂN (bắt buộc): ...
## TÁC GIẢ / EEAT: ...
## ĐỐI TƯỢNG (avatar): ...
`;
// <<< KHỐI 2: BOOK_BIBLE (bản chốt) >>>
const BOOK_BIBLE = `
## LỜI HỨA CUỐN SÁCH: ...
## GIỌNG + BẢNG THUẬT NGỮ CHUẨN: ...
## DANH SÁCH CHƯƠNG + mục tiêu mỗi chương: ...
## ARC: ...
## QUY TẮC YMYL + CỜ ĐỎ: ...
`;
// <<< KHỐI 3: CAC_CHUONG — toàn bộ chương đã viết ở B5 (điền so, tieu_de, noi_dung) >>>
const CAC_CHUONG = [
  { so: 1, tieu_de: '...', noi_dung: '... (toàn văn chương) ...' },
  // ... tất cả các chương
];

// ============================================================================
// ============================ ĐỘNG CƠ (không cần sửa) ========================
// ============================================================================

// TAY NGHỀ NHÀ VĂN — thước đo craft cho cả 3 vòng biên tập
const CRAFT = `
## TAY NGHỀ NHÀ VĂN CHUYÊN NGHIỆP (thước đo biên tập)
- TẢ, ĐỪNG KỂ: câu "kể" cảm xúc/kết luận khô → sửa thành cảnh + chi tiết giác quan cho người đọc tự cảm.
- CHI TIẾT CỤ THỂ thắng khái quát; ĐỘNG TỪ MẠNH, cắt "rất/thật sự/vô cùng/một cách…" và tính-trạng từ thừa.
- NHỊP CÂU biến hóa (ngắn để đánh, dài để cuốn) — diệt chuỗi câu cùng độ dài kiểu văn AI.
- HOOK mở chương vào thẳng biến cố; MÓC KÉO cuối chương (vòng lặp/câu hỏi treo), không tóm tắt lại.
- ẨN DỤ có kỷ luật; MÔ-TÍP gieo–gọi-lại tạo dư âm; ĐỐI THOẠI thật khi có thể.
- DIỆT câu sáo/giọng AI trung tính ("Trong thời đại ngày nay…", "Tóm lại…", "Không thể phủ nhận…", liệt kê vô hồn).
- "KILL YOUR DARLINGS" + TEST "RỒI SAO?": đoạn nào không đẩy hiểu biết/cảm xúc/hành động tiến lên thì cắt hoặc viết lại.
`;

// ── VÒNG CẮT: cắt bớt chữ cho mượt (song song từng chương) ───────────────────
phase('Cắt gọt');
const CUT_SCHEMA = {
  type: 'object',
  required: ['chuong_cat', 'so_tu_truoc', 'so_tu_sau', 'da_cat_gi'],
  properties: {
    chuong_cat: { type: 'string', description: 'Văn bản chương sau khi cắt gọt (markdown)' },
    so_tu_truoc: { type: 'number' },
    so_tu_sau: { type: 'number' },
    da_cat_gi: { type: 'string', description: 'Tóm tắt đã cắt/siết gì' },
  },
};
const daCat = await parallel(CAC_CHUONG.map(ch => () =>
  agent(
    `${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là TỔNG BIÊN TẬP tay nghề nhà văn, VÒNG CẮT GỌT. Nguyên tắc: câu ít mà chất.\nChương ${ch.so}: ${ch.tieu_de}\n"""\n${ch.noi_dung}\n"""\n\nNHIỆM VỤ: CẮT BỚT CHỮ cho câu mượt & chất lượng hơn theo thước đo CRAFT — bỏ ý lặp, bỏ câu thừa, diệt câu sáo/giọng AI trung tính, cắt tính-trạng từ thừa, thay động từ yếu bằng động từ mạnh, siết đoạn lê thê, tạo nhịp câu biến hóa. KHÔNG đổi ý chính, KHÔNG bỏ bài tập, KHÔNG bỏ chất liệu/số liệu thật, KHÔNG bỏ nội dung YMYL cần thiết, KHÔNG cắt mất hook mở / móc kéo cuối chương. Giữ heading "## ${ch.tieu_de}". Trả về theo schema.`,
    { label: `cắt gọt · Chương ${ch.so}`, phase: 'Cắt gọt', schema: CUT_SCHEMA }
  ).then(r => ({ so: ch.so, tieu_de: ch.tieu_de, noi_dung: r.chuong_cat, da_cat: r.da_cat_gi, tu_truoc: r.so_tu_truoc, tu_sau: r.so_tu_sau }))
)).then(r => r.filter(Boolean));

const tongTruoc = daCat.reduce((s, c) => s + (c.tu_truoc || 0), 0);
const tongSau = daCat.reduce((s, c) => s + (c.tu_sau || 0), 0);
log(`Vòng cắt xong: ${tongTruoc} → ${tongSau} từ (${tongTruoc ? Math.round((1 - tongSau / tongTruoc) * 100) : 0}% gọn hơn).`);

// ── VÒNG DUYỆT: chấm từng chương đạt/chưa đạt theo Book Bible ─────────────────
phase('Duyệt');
const mucLuc = daCat.map(c => `${c.so}. ${c.tieu_de}`).join('\n');
const REVIEW_SCHEMA = {
  type: 'object',
  required: ['dat_chuan', 'thieu_gi', 'huong_bu'],
  properties: {
    dat_chuan: { type: 'boolean' },
    thieu_gi: { type: 'string', description: 'Thiếu gì: chất liệu/cảm xúc/bài tập/đứt mạch/lỗi YMYL... (rỗng nếu đạt)' },
    huong_bu: { type: 'string', description: 'Cần viết thêm/viết lại gì cho đạt (rỗng nếu đạt)' },
  },
};
const duyet = await parallel(daCat.map(c => () =>
  agent(
    `${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là TỔNG BIÊN TẬP tay nghề nhà văn, VÒNG DUYỆT. Mục lục cả cuốn:\n${mucLuc}\n\nChấm Chương ${c.so}: ${c.tieu_de}\n"""\n${c.noi_dung}\n"""\n\nĐẠT CHUẨN khi cùng lúc: HẤP DẪN (giữ chân) + CHUYỂN HÓA (trao thay đổi/công cụ, có bài tập) + LIỀN MẠCH (đúng arc, đúng giọng & thuật ngữ Book Bible, không trùng chương khác) + EEAT (chất liệu thật) + YMYL (không phóng đại, xử cờ đỏ) + CRAFT (tả-không-kể, chi tiết cụ thể, nhịp câu biến hóa, hook + móc kéo, không câu sáo/giọng AI). Nếu thiếu, nêu rõ thiếu gì và hướng bù. Trả về theo schema.`,
    { label: `duyệt · Chương ${c.so}`, phase: 'Duyệt', schema: REVIEW_SCHEMA }
  ).then(r => ({ so: c.so, ...r }))
)).then(r => r.filter(Boolean));

const canBu = duyet.filter(d => !d.dat_chuan);
log(`Duyệt xong: ${daCat.length - canBu.length}/${daCat.length} chương đạt. Viết bù ${canBu.length} chương.`);

// ── VÒNG VIẾT BÙ: chỉ viết lại chương chưa đạt ───────────────────────────────
phase('Viết bù');
const buMap = {};
if (canBu.length) {
  const buList = await parallel(canBu.map(d => {
    const c = daCat.find(x => x.so === d.so);
    return () => agent(
      `${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là TỔNG BIÊN TẬP tay nghề nhà văn, VÒNG VIẾT BÙ cho Chương ${c.so}: ${c.tieu_de}.\nBản hiện tại:\n"""\n${c.noi_dung}\n"""\n\nTHIẾU: ${d.thieu_gi}\nHƯỚNG BÙ: ${d.huong_bu}\n\nViết thêm/viết lại cho ĐẠT (hấp dẫn + chuyển hóa + liền mạch + EEAT + YMYL + CRAFT), áp mọi luật tay nghề nhà văn ở trên, giữ giọng VOICE & thuật ngữ Book Bible, giữ heading "## ${c.tieu_de}". Trả về TOÀN VĂN chương đã bù.`,
      { label: `viết bù · Chương ${c.so}`, phase: 'Viết bù' }
    ).then(txt => ({ so: c.so, noi_dung: txt }));
  })).then(r => r.filter(Boolean));
  buList.forEach(b => { buMap[b.so] = b.noi_dung; });
}

const chuongCuoi = daCat.map(c => ({ so: c.so, tieu_de: c.tieu_de, noi_dung: buMap[c.so] || c.noi_dung, da_bu: !!buMap[c.so] }));

return {
  so_chuong: chuongCuoi.length,
  tong_tu_truoc_cat: tongTruoc,
  tong_tu_sau_cat: tongSau,
  chuong_da_bu: Object.keys(buMap).map(Number),
  bao_cao_cat: daCat.map(c => `Ch${c.so}: ${c.tu_truoc}→${c.tu_sau} từ — ${c.da_cat}`).join('\n'),
  chuong: chuongCuoi,
};
