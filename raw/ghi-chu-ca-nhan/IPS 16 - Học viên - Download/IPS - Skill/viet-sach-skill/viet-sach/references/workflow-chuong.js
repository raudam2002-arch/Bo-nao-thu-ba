// ============================================================================
// TEMPLATE WORKFLOW — BƯỚC 5: VIẾT CHƯƠNG (đa tác tử, có tranh luận + giám sát)
// CHẠY THEO LÔ 4–5 CHƯƠNG. Với MỖI chương:
//   1) nhiều cây bút viết CÁC PHIÊN BẢN khác nhau
//   2) chúng TRANH LUẬN (mỗi bút phản biện các bản còn lại)
//   3) một agent HỢP NHẤT lấy đoạn mạnh nhất thành bản tốt hơn
//   4) một agent GIÁM SÁT căn theo BOOK_BIBLE (giọng/thuật ngữ/arc/không trùng) + soát YMYL/EEAT
// CÁCH DÙNG: điền KB, VOICE, BOOK_BIBLE (bản chốt ở B4), CHUONG_CAN_VIET (lô này).
// Truyền cả file vào tool Workflow. Trả về mảng chương đã viết → đưa người dùng DUYỆT.
// ============================================================================

export const meta = {
  name: 'viet-sach-chuong',
  description: 'Bước 5: mỗi chương do nhiều cây bút viết nhiều phiên bản → tranh luận → hợp nhất → giám sát nhất quán',
  phases: [
    { title: 'Viết phiên bản', detail: 'Nhiều cây bút, mỗi chương nhiều phiên bản theo lăng kính khác nhau' },
    { title: 'Tranh luận', detail: 'Các cây bút phản biện chéo các phiên bản' },
    { title: 'Hợp nhất', detail: 'Ghép bản tốt hơn từ các đoạn mạnh nhất' },
    { title: 'Giám sát', detail: 'Căn Book Bible + soát YMYL/EEAT' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// <<< KHỐI 1: KB — CHẤT LIỆU NGUỒN (trích đúng các chương trong lô này) >>>
const KB = `
# KHO CHẤT LIỆU (viết chương — KHÔNG bịa số ngoài đây; mọi số truy về nguồn)
## Câu chuyện/case thật, số liệu, framework tác giả (ghi tên trang nguồn Brain)
- ...
`;

// <<< KHỐI 2: VOICE — GIỌNG VĂN + TÁC GIẢ/EEAT + ĐỐI TƯỢNG (từ Voice Pack) >>>
const VOICE = `
## GIỌNG VĂN (bắt buộc): ...
## TÁC GIẢ / EEAT: ...
## ĐỐI TƯỢNG (avatar): ...
`;

// <<< KHỐI 3: BOOK_BIBLE — sổ tay thống nhất bản CHỐT ở Bước 4 (dán nguyên) >>>
const BOOK_BIBLE = `
## LỜI HỨA CUỐN SÁCH: ...
## GIỌNG + BẢNG THUẬT NGỮ CHUẨN: ...
## DANH SÁCH CHƯƠNG + 1 câu mục tiêu mỗi chương (để không trùng): ...
## ARC (mở → cao trào → chốt): ...
## QUY TẮC YMYL + CỜ ĐỎ: ...
`;

// <<< KHỐI 4: CHUONG_CAN_VIET — các chương trong LÔ này (điền từ dàn bài B4) >>>
const CHUONG_CAN_VIET = [
  { so: 1, tieu_de: '...', muc_tieu: '...', y_chinh: ['...'], chat_lieu: '...', hook: '...', moc_keo: '...', bai_tap: '...', co_ymyl: '', so_tu: 1800 },
  // ... thêm 3-4 chương nữa cho đủ lô (hook & moc_keo lấy từ dàn bài B4)
];

const SO_PHIEN_BAN = 3; // số cây bút/phiên bản mỗi chương (tăng 4-5 cho chương xương sống; tối đa 5 lăng kính)

// ============================================================================
// ============================ ĐỘNG CƠ (không cần sửa) ========================
// ============================================================================

// 5 lăng kính mở chương — SO_PHIEN_BAN=3 lấy 3 lăng kính đầu; đặt 4-5 cho chương xương sống.
const LANG_KINH = [
  { key: 'story', ten: 'Mở bằng câu chuyện', brief: 'Bắt đầu bằng một cảnh đời/câu chuyện thật cụ thể của người đọc, dẫn cảm xúc rồi mới rút bài học và công cụ.' },
  { key: 'framework', ten: 'Mở bằng khung lý thuyết', brief: 'Bắt đầu bằng một nghịch lý hoặc khung tư duy sắc, trình bày mạch lạc như hệ thống, thuyết phục bằng lý trí rồi minh họa.' },
  { key: 'baitap', ten: 'Mở bằng bài tập/tình huống', brief: 'Bắt đầu bằng một tình huống hoặc một bài tập nhỏ kéo người đọc vào làm ngay, rồi giảng qua trải nghiệm đó.' },
  { key: 'cauhoi', ten: 'Mở bằng câu hỏi tấm gương', brief: 'Ném thẳng một câu hỏi chạm đúng nỗi đau khiến người đọc phải tự soi mình, để câu hỏi treo, rồi dẫn họ đi tìm câu trả lời qua cả chương.' },
  { key: 'phande', ten: 'Mở bằng phản đề/nghịch lý', brief: 'Nêu một niềm tin phổ biến người đọc đang bám, rồi lật ngược tạo cú sốc nhận thức ("Điều anh chị tin bấy lâu chính là thứ đang giết mối quan hệ"), sau đó chứng minh.' },
].slice(0, SO_PHIEN_BAN);

// TAY NGHỀ NHÀ VĂN — luật craft áp cho MỌI agent viết/hợp nhất/giám sát (bổ trợ cho VOICE)
const CRAFT = `
## TAY NGHỀ NHÀ VĂN CHUYÊN NGHIỆP (bắt buộc — áp từng câu)
- TẢ, ĐỪNG KỂ (show, don't tell): thay "cô ấy rất buồn" bằng cảnh + hành động + chi tiết giác quan để người đọc TỰ cảm.
- DỰNG CẢNH ở khúc quan trọng, TÓM LƯỢC ở khúc chuyển: cảnh có thời gian–không gian–hành động cụ thể mới giữ chân; đừng thuật lại từ xa.
- CHI TIẾT CỤ THỂ thắng khái quát: một chi tiết thật đắt ("chiếc điện thoại úp mặt xuống mâm cơm") hơn mười câu triết lý.
- ĐỘNG TỪ MẠNH, ÍT tính/trạng từ: cắt "rất, thật sự, vô cùng, một cách…"; chọn đúng động từ thay vì động từ yếu + trạng từ.
- NHỊP CÂU biến hóa: câu ngắn để đánh, câu dài để cuốn — đừng để mọi câu cùng độ dài (đặc trưng văn AI đều đều).
- VÀO GIỮA BIẾN CỐ (in medias res): mở thẳng khoảnh khắc căng nhất, cắt phần dạo đầu giải thích.
- CHỐT CHƯƠNG có MÓC KÉO sang chương sau (mở một vòng lặp / câu hỏi treo / lời hứa), không tóm tắt lại điều vừa nói.
- MÔ-TÍP & GỌI LẠI: gieo một hình ảnh/câu ở đầu, gọi lại ở cuối chương (hoặc cuối sách) để tạo dư âm và tính chỉnh thể.
- ẨN DỤ CÓ KỶ LUẬT: một ẩn dụ đắt, đúng đời sống người đọc — không chồng ẩn dụ, không ẩn dụ sáo mòn.
- ĐỐI THOẠI khi có thể: một câu nói thật của nhân vật đắt hơn cả đoạn thuật lại.
- SỰ THẬT CẢM XÚC: mỗi cảnh có một chuyển biến nội tâm thật — không tô hồng, không bi kịch hóa quá tay.
- "KILL YOUR DARLINGS": câu văn dù hay mà không phục vụ chương thì cắt.
- TEST "RỒI SAO?" (so-what): mỗi đoạn phải đẩy hiểu biết / cảm xúc / hành động của người đọc tiến thêm một bước; không đạt thì bỏ hoặc viết lại.
`;

// Viết + tranh luận + hợp nhất + giám sát cho MỘT chương
async function vietMotChuong(ch) {
  const nhan = `Chương ${ch.so}: ${ch.tieu_de}`;
  const spec = `MỤC TIÊU: ${ch.muc_tieu}\nÝ CHÍNH: ${(ch.y_chinh || []).join('; ')}\nCHẤT LIỆU BẮT BUỘC (từ KB): ${ch.chat_lieu}\nHOOK MỞ (từ dàn bài B4 — triển khai, được làm hay hơn): ${ch.hook || '-'}\nMÓC KÉO CUỐI (từ dàn bài B4 — nối sang chương sau): ${ch.moc_keo || '-'}\nBÀI TẬP: ${ch.bai_tap || '-'}\nCỜ YMYL: ${ch.co_ymyl || '-'}\nĐỘ DÀI: ~${ch.so_tu || 1800} từ.`;

  // (1) NHIỀU PHIÊN BẢN
  const versions = await parallel(LANG_KINH.map(lk => () =>
    agent(
      `${KB}\n\n${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là CÂY BÚT VĂN XUÔI chuyên nghiệp, đúng giọng ở VOICE và đủ TAY NGHỀ NHÀ VĂN ở trên.\nVIẾT TRỌN "${nhan}" theo LĂNG KÍNH: "${lk.ten}" — ${lk.brief}\n\n${spec}\n\nMở bằng "## ${ch.tieu_de}". Chương phải: hấp dẫn (giữ chân), chuyển hóa (trao thay đổi/công cụ), có bài tập dùng được, chốt nối sang chương sau. Áp mọi luật CRAFT (tả không kể, dựng cảnh, chi tiết cụ thể, động từ mạnh, nhịp câu biến hóa, móc kéo cuối chương). Số liệu chỉ lấy từ KB. KHÔNG viết chương khác. Trả về VĂN BẢN chương.`,
      { label: `${nhan} · bản ${lk.key}`, phase: 'Viết phiên bản' }
    )
  )).then(r => r.filter(Boolean));

  const versionsText = versions.map((v, i) => `### PHIÊN BẢN ${LANG_KINH[i].key} (${LANG_KINH[i].ten})\n"""\n${v}\n"""`).join('\n\n');

  // (2) TRANH LUẬN — mỗi cây bút phản biện chéo
  const debates = await parallel(LANG_KINH.map(lk => () =>
    agent(
      `${VOICE}\n\n${CRAFT}\n\n---\nBạn là cây bút bản "${lk.ten}", nay THAM GIA TRANH LUẬN về "${nhan}", chấm theo TAY NGHỀ NHÀ VĂN ở trên.\nCÁC PHIÊN BẢN:\n${versionsText}\n\nSo sánh thẳng thắn theo craft: bản nào có HOOK mở chương mạnh nhất? Bản nào TẢ (không kể), DỰNG CẢNH, CHI TIẾT CỤ THỂ tốt nhất? VÍ DỤ/CÂU CHUYỆN/ĐỐI THOẠI đắt nhất? BÀI TẬP dùng được nhất? MÓC KÉO cuối chương hay nhất? Chỗ nào sáo/giống AI/kể-lể/lạc giọng/nhịp câu đều đều cần bỏ? Nêu rõ nên lấy đoạn nào của bản nào để ghép thành chương tốt nhất. Trả về VĂN BẢN nhận định ngắn gọn, cụ thể theo tên phiên bản.`,
      { label: `${nhan} · tranh luận ${lk.key}`, phase: 'Tranh luận' }
    )
  )).then(r => r.filter(Boolean));

  const debateText = debates.map((d, i) => `- Góc ${LANG_KINH[i].key}: ${d}`).join('\n\n');

  // (3) HỢP NHẤT — ghép bản tốt hơn
  const merged = await agent(
    `${KB}\n\n${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là BIÊN TẬP HỢP NHẤT cho "${nhan}", tay nghề nhà văn cao.\nCÁC PHIÊN BẢN:\n${versionsText}\n\nBIÊN BẢN TRANH LUẬN:\n${debateText}\n\nGhép MỘT chương TỐT HƠN mọi phiên bản đơn lẻ: lấy hook/cảnh/chi tiết/ví dụ/bài tập/móc-kéo mạnh nhất theo tranh luận, khử trùng, mạch liền. Áp lại toàn bộ luật CRAFT khi ghép (không để lộ đường nối, nhịp câu biến hóa, cắt darlings không phục vụ chương). Giữ "## ${ch.tieu_de}", độ dài ~${ch.so_tu || 1800} từ, đúng giọng VOICE. Trả về VĂN BẢN chương hợp nhất.`,
    { label: `${nhan} · hợp nhất`, phase: 'Hợp nhất' }
  );

  // (4) GIÁM SÁT — căn Book Bible + YMYL/EEAT
  const SUPERVISE_SCHEMA = {
    type: 'object',
    required: ['chuong_cuoi', 'ghi_chu_giam_sat', 'dat_chuan'],
    properties: {
      chuong_cuoi: { type: 'string', description: 'Văn bản chương sau khi căn Book Bible (markdown)' },
      ghi_chu_giam_sat: { type: 'string', description: 'Đã sửa gì để nhất quán/đúng YMYL/EEAT' },
      dat_chuan: { type: 'boolean', description: 'true nếu chương đạt 3 tiêu chí nền + Book Bible' },
    },
  };
  const supervised = await agent(
    `${KB}\n\n${VOICE}\n\n${CRAFT}\n\n${BOOK_BIBLE}\n\n---\nBạn là AGENT GIÁM SÁT giữ cả cuốn ĐI THEO MỘT LUỒNG.\nChương hợp nhất:\n"""\n${merged}\n"""\n\nĐối chiếu BOOK BIBLE: (a) đúng giọng & BẢNG THUẬT NGỮ chuẩn (mỗi khái niệm đúng 1 tên)? (b) đúng vị trí trong ARC, nối trơn với chương trước/sau? (c) KHÔNG lặp nội dung chương khác (xem danh sách mục tiêu chương)? (d) EEAT: có chất liệu/trải nghiệm thật, không bịa số? (e) YMYL: không phóng đại, có xử cờ đỏ, nêu miễn trừ khi cần? (f) CRAFT: có tả-không-kể, dựng cảnh, chi tiết cụ thể, nhịp câu biến hóa, móc kéo cuối chương; không còn câu sáo/giọng AI/kể-lể?\nSửa cho đạt (không làm hỏng giọng), rồi chấm dat_chuan (chỉ true khi đạt cả 6 mục). Trả về theo schema.`,
    { label: `${nhan} · giám sát`, phase: 'Giám sát', schema: SUPERVISE_SCHEMA }
  );

  return { so: ch.so, tieu_de: ch.tieu_de, noi_dung: supervised.chuong_cuoi, ghi_chu: supervised.ghi_chu_giam_sat, dat_chuan: supervised.dat_chuan };
}

phase('Viết phiên bản');
const ketqua = await parallel(CHUONG_CAN_VIET.map(ch => () => vietMotChuong(ch))).then(r => r.filter(Boolean));

const chuaDat = ketqua.filter(k => !k.dat_chuan).map(k => k.so);
log(`Viết xong lô ${ketqua.length} chương. ${chuaDat.length ? 'Chương cần rà thêm ở B5\': ' + chuaDat.join(', ') : 'Tất cả đạt chuẩn giám sát.'}`);

return { so_chuong: ketqua.length, chuong: ketqua, chuong_chua_dat: chuaDat };
