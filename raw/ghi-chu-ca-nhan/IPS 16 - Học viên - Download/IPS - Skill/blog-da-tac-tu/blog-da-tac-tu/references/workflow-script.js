// ============================================================================
// TEMPLATE WORKFLOW — Blog Đa Tác Tử 5 bước
// CÁCH DÙNG: điền 3 khối <<< ... >>> ở đầu (KB, VOICE, REQUIREMENTS) rồi truyền
// toàn bộ file này vào tool Workflow ({ script: "<nội dung file>" }).
// KB lấy từ Bước 1 (tập hợp tư liệu). VOICE + REQUIREMENTS lấy từ hồ sơ thương hiệu.
// KHÔNG cần đổi gì bên dưới phần "ĐỘNG CƠ".
// ============================================================================

export const meta = {
  name: 'blog-da-tac-tu',
  description: 'Viết blog dài chuẩn SEO/EEAT/YMYL qua 5 bước đa tác tử (dàn bài → tranh biện → đồng viết → tổng biên tập)',
  phases: [
    { title: 'Dàn bài', detail: '3 agent tạo 3 dàn bài theo 3 góc tiếp cận' },
    { title: 'Tranh biện', detail: '3 góc phản biện + thư ký tổng hợp 1 dàn bài thống nhất' },
    { title: 'Đồng viết', detail: 'Viết từng phần, peer-review thuyết phục, điều phối ráp bài' },
    { title: 'Tổng biên tập', detail: 'Rà SEO/EEAT/YMYL/văn phong, xuất bản cuối' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// <<< KHỐI 1: KB — KHO TƯ LIỆU NGUỒN (điền từ Bước 1). Cấm bịa số ngoài KB. >>>
// ─────────────────────────────────────────────────────────────────────────────
const KB = `
# KHO TƯ LIỆU NGUỒN (dùng để viết bài — KHÔNG bịa thêm số liệu ngoài đây)

## A. [Khái niệm / định nghĩa cốt lõi của chủ đề]
- ...

## B. [Luận đề chủ đạo / góc nhìn lớn]
- ...

## C. [Câu chuyện thật / case / ví dụ]
- ...

## D. [Số liệu, trích dẫn, nguồn]
- ...
`;

// ─────────────────────────────────────────────────────────────────────────────
// <<< KHỐI 2: VOICE — GIỌNG VĂN + TÁC GIẢ/EEAT + ĐỐI TƯỢNG (từ hồ sơ thương hiệu) >>>
// ─────────────────────────────────────────────────────────────────────────────
const VOICE = `
## GIỌNG VĂN THƯƠNG HIỆU (bắt buộc tuân thủ)
- [Ngôi kể, cách xưng hô, nhịp câu, ẩn dụ hay dùng, điều NÊN / điều CẤM]
- [Quy tắc ngôn ngữ: thuật ngữ ngoại ngữ kèm dịch trong ngoặc lần đầu...]

## TÁC GIẢ / EEAT (dùng cho khối tác giả + tín hiệu thẩm quyền)
- [Tên, bằng cấp, số năm kinh nghiệm, thành tích, trải nghiệm thật chứng minh thẩm quyền]

## ĐỐI TƯỢNG NGƯỜI ĐỌC
- [Người đọc là ai, họ sợ gì / muốn gì / đang ở đâu]
`;

// ─────────────────────────────────────────────────────────────────────────────
// <<< KHỐI 3: REQUIREMENTS — YÊU CẦU BÀI (chủ đề, độ dài, từ khóa, chuẩn) >>>
// ─────────────────────────────────────────────────────────────────────────────
const REQUIREMENTS = `Bài blog tiếng Việt, [2000–2500] từ, đối tượng [ĐỐI TƯỢNG], giọng [THƯƠNG HIỆU] (xem VOICE).
Chủ đề: [CHỦ ĐỀ + góc/thông điệp chính].
Từ khóa: [từ khóa chính + phụ].
Chuẩn SEO/EEAT/YMYL.`;

const TONG_DO_DAI = '2000–2500 từ'; // đổi nếu cần

// ============================================================================
// ============================ ĐỘNG CƠ (không cần sửa) ========================
// ============================================================================

// ── BƯỚC 2: 3 DÀN BÀI ───────────────────────────────────────────────────────
phase('Dàn bài');

const OUTLINE_SCHEMA = {
  type: 'object',
  required: ['goc_tiep_can', 'tieu_de', 'hook_mo_bai', 'cac_phan'],
  properties: {
    goc_tiep_can: { type: 'string' },
    tieu_de: { type: 'string', description: 'Tiêu đề H1 chuẩn SEO, hấp dẫn đối tượng' },
    hook_mo_bai: { type: 'string', description: 'Ý tưởng mở bài 2-3 câu' },
    cac_phan: {
      type: 'array',
      items: {
        type: 'object',
        required: ['heading', 'y_chinh', 'chat_lieu'],
        properties: {
          heading: { type: 'string' },
          y_chinh: { type: 'string' },
          chat_lieu: { type: 'string', description: 'Chất liệu/câu chuyện/số liệu từ KB dùng cho phần này' },
        },
      },
    },
    cta_ket: { type: 'string' },
  },
};

const angles = [
  { key: 'A', ten: 'Kể chuyện trước (storytelling-first)', brief: 'Mở bằng một câu chuyện/cảnh đời thật, dẫn dắt cảm xúc rồi mới rút ra khái niệm. Nhấn nỗi sợ/nhu cầu của người đọc và sự giải tỏa.' },
  { key: 'B', ten: 'Logic / khung tài sản (framework-first)', brief: 'Mở bằng một nghịch lý hoặc khung tư duy đanh thép, trình bày chủ đề như một hệ thống có khung, có số liệu, thuyết phục bằng lý trí.' },
  { key: 'C', ten: 'Giải tỏa nỗi sợ / hướng hành động', brief: 'Gọi tên thẳng nỗi sợ hoặc nhu cầu của người đọc, trấn an, rồi chuyển sang hành động cụ thể. Vừa trấn an vừa thúc đẩy.' },
];

const outlines = await parallel(angles.map(a => () =>
  agent(
    `${KB}\n\n${VOICE}\n\n---\nBạn là biên tập viên nội dung kỳ cựu, hiểu sâu đối tượng người đọc và giọng văn thương hiệu (xem VOICE).\nNHIỆM VỤ: Tạo MỘT dàn bài chi tiết cho bài blog theo GÓC TIẾP CẬN: "${a.ten}".\nĐịnh hướng góc này: ${a.brief}\n\nYÊU CẦU BÀI: ${REQUIREMENTS}\n\nDàn bài phải: tiêu đề H1 chuẩn SEO chứa từ khóa; 5-8 phần (heading H2) mạch lạc; mỗi phần ghi rõ ý chính + chất liệu/câu chuyện/số liệu lấy từ KB; có CTA kết bài. Bám sát thông điệp chính và đối tượng. Trả về theo schema.`,
    { label: `dàn bài ${a.key}: ${a.ten}`, phase: 'Dàn bài', schema: OUTLINE_SCHEMA }
  )
)).then(r => r.filter(Boolean));

log(`Đã có ${outlines.length} dàn bài. Bắt đầu phiên tranh biện.`);

// ── BƯỚC 3: TRANH BIỆN + THƯ KÝ ─────────────────────────────────────────────
phase('Tranh biện');

const outlinesText = outlines.map((o, i) =>
  `### DÀN BÀI ${angles[i].key} — ${o.goc_tiep_can}\nTIÊU ĐỀ: ${o.tieu_de}\nHOOK: ${o.hook_mo_bai}\nCÁC PHẦN:\n${o.cac_phan.map((p, j) => `  ${j + 1}. [${p.heading}] ${p.y_chinh} | Chất liệu: ${p.chat_lieu}`).join('\n')}\nCTA: ${o.cta_ket || ''}`
).join('\n\n');

const CRITIQUE_SCHEMA = {
  type: 'object',
  required: ['goc_nhin', 'danh_gia_tung_dan_bai', 'de_xuat'],
  properties: {
    goc_nhin: { type: 'string' },
    danh_gia_tung_dan_bai: {
      type: 'array',
      items: {
        type: 'object',
        required: ['dan_bai', 'manh', 'yeu'],
        properties: { dan_bai: { type: 'string' }, manh: { type: 'string' }, yeu: { type: 'string' } },
      },
    },
    de_xuat: { type: 'string', description: 'Đề xuất cụ thể nên lấy gì, bỏ gì, ghép thế nào' },
  },
};

const lenses = [
  { ten: 'Người đọc bận rộn (hấp dẫn & giữ chân)', focus: 'Bài có giữ chân người đọc tới cuối không? Hook đủ mạnh trong 5 giây đầu? Chỗ nào lê thê, giáo điều, dễ bỏ giữa chừng? Đề xuất tăng độ cuốn và độ "đã".' },
  { ten: 'Chuyên gia SEO/EEAT/YMYL', focus: 'Tiêu đề & heading có chuẩn SEO, chứa từ khóa tự nhiên? Có thể hiện Trải nghiệm-Chuyên môn-Thẩm quyền-Uy tín (trải nghiệm thật, số liệu, nguồn) đạt YMYL? Thiếu yếu tố EEAT nào?' },
  { ten: 'Người gác cổng giọng văn & chuyển đổi', focus: 'Đúng giọng văn thương hiệu chưa (xem VOICE)? Có sức cảm xúc và sức CHUYỂN ĐỔI (đẩy người đọc tin & hành động) không? Chỗ nào nghe giống AI trung tính cần sửa?' },
];

const critiques = await parallel(lenses.map(l => () =>
  agent(
    `${KB}\n\n${VOICE}\n\n---\nBạn tham gia PHIÊN TRANH BIỆN chọn/ghép dàn bài tốt nhất.\nBẠN ĐÓNG GÓC NHÌN: "${l.ten}".\nTrọng tâm phản biện: ${l.focus}\n\n3 dàn bài ứng viên:\n\n${outlinesText}\n\nPhản biện thẳng thắn từng dàn bài (mạnh/yếu) DƯỚI GÓC NHÌN CỦA BẠN, rồi đề xuất cụ thể giữ gì/bỏ gì/ghép ra sao để bài hấp dẫn & chuyển đổi nhất. Trả về theo schema.`,
    { label: `phản biện: ${l.ten}`, phase: 'Tranh biện', schema: CRITIQUE_SCHEMA }
  )
)).then(r => r.filter(Boolean));

const critiquesText = critiques.map(c =>
  `### GÓC NHÌN: ${c.goc_nhin}\n${c.danh_gia_tung_dan_bai.map(d => `- ${d.dan_bai}: MẠNH=${d.manh} | YẾU=${d.yeu}`).join('\n')}\nĐỀ XUẤT: ${c.de_xuat}`
).join('\n\n');

const SECRETARY_SCHEMA = {
  type: 'object',
  required: ['bien_ban_tranh_bien', 'dan_bai_thong_nhat'],
  properties: {
    bien_ban_tranh_bien: { type: 'string', description: 'Biên bản: luồng tranh biện, đồng thuận, xung đột & cách hòa giải' },
    dan_bai_thong_nhat: {
      type: 'object',
      required: ['tieu_de', 'meta_description', 'tu_khoa', 'cac_phan'],
      properties: {
        tieu_de: { type: 'string' },
        meta_description: { type: 'string' },
        tu_khoa: { type: 'array', items: { type: 'string' } },
        cac_phan: {
          type: 'array',
          items: {
            type: 'object',
            required: ['heading', 'muc_tieu', 'chat_lieu', 'so_tu_du_kien'],
            properties: {
              heading: { type: 'string' },
              muc_tieu: { type: 'string', description: 'Phần này làm gì cho người đọc + vì sao giữ chân/chuyển đổi' },
              chat_lieu: { type: 'string' },
              so_tu_du_kien: { type: 'number' },
            },
          },
        },
      },
    },
  },
};

const secretary = await agent(
  `${KB}\n\n${VOICE}\n\n---\nBạn là THƯ KÝ phiên tranh biện: KHÔNG can thiệp tranh luận, chỉ GHI LẠI trung thực rồi CHỐT.\n\n## 3 DÀN BÀI:\n${outlinesText}\n\n## 3 LUỒNG PHẢN BIỆN:\n${critiquesText}\n\nNHIỆM VỤ:\n1) Viết BIÊN BẢN TRANH BIỆN ngắn gọn: đồng thuận, xung đột giữa 3 góc nhìn, cách hòa giải.\n2) Tổng hợp thành MỘT DÀN BÀI THỐNG NHẤT tốt nhất — lấy tinh hoa cả 3 theo đề xuất phản biện, tối ưu vừa HẤP DẪN vừa GIỮ CHÂN vừa CHUYỂN ĐỔI, vừa chuẩn SEO/EEAT/YMYL.\nDàn bài cần: tiêu đề H1, meta description, danh sách từ khóa, 6-8 phần — mỗi phần có heading, mục tiêu, chất liệu từ KB, số từ dự kiến (tổng ${TONG_DO_DAI}). Trả về theo schema.`,
  { label: 'thư ký: chốt dàn bài thống nhất', phase: 'Tranh biện', schema: SECRETARY_SCHEMA }
);

const unified = secretary.dan_bai_thong_nhat;
log(`Dàn bài thống nhất: "${unified.tieu_de}" — ${unified.cac_phan.length} phần.`);

// ── BƯỚC 4: ĐỒNG VIẾT ───────────────────────────────────────────────────────
phase('Đồng viết');

const planText = unified.cac_phan.map((p, i) => `${i + 1}. [${p.heading}] mục tiêu: ${p.muc_tieu} | chất liệu: ${p.chat_lieu} | ~${p.so_tu_du_kien} từ`).join('\n');

const sectionDrafts = await pipeline(
  unified.cac_phan,
  (p, _orig, i) => agent(
    `${KB}\n\n${VOICE}\n\n---\nBạn là một trong các cây bút ĐỒNG VIẾT bài blog, viết đúng giọng văn thương hiệu (xem VOICE).\nTOÀN BỘ DÀN BÀI (để viết liền mạch, không lặp phần khác):\nTIÊU ĐỀ: ${unified.tieu_de}\n${planText}\n\nCHỈ VIẾT PHẦN ${i + 1}: "${p.heading}"\n- Mục tiêu: ${p.muc_tieu}\n- Chất liệu bắt buộc: ${p.chat_lieu}\n- Độ dài: ~${p.so_tu_du_kien} từ.\nMở đầu bằng heading "## ${p.heading}". Viết cuốn, cảm xúc, cụ thể, số liệu thật từ KB, đúng giọng thương hiệu. Không viết phần khác. Trả về VĂN BẢN phần này.`,
    { label: `viết phần ${i + 1}: ${p.heading}`, phase: 'Đồng viết' }
  ),
  (draft, p, i) => agent(
    `${KB}\n\n${VOICE}\n\n---\nBạn là cây bút thứ hai, PEER-REVIEW phần "${p.heading}".\nBản nháp của đồng đội:\n"""\n${draft}\n"""\n\nTự hỏi 3 câu: (1) Ý này có QUAN TRỌNG với người đọc không? (2) Có GIỮ CHÂN đọc tiếp không? (3) Có CHUYỂN ĐỔI (đẩy tin & hành động) không?\nChỗ nào chưa đạt cả 3, VIẾT LẠI cho đạt: mạnh hơn, cảm xúc hơn, cụ thể hơn, đúng giọng thương hiệu hơn, bỏ mọi câu sáo/giống AI. Giữ heading "## ${p.heading}". Giữ độ dài ~${p.so_tu_du_kien} từ. Trả về VĂN BẢN phần đã hoàn thiện (chỉ văn bản).`,
    { label: `tinh chỉnh phần ${i + 1}`, phase: 'Đồng viết' }
  )
).then(r => r.filter(Boolean));

const assembled = sectionDrafts.join('\n\n');

const coordinated = await agent(
  `${KB}\n\n${VOICE}\n\n---\nBạn là AGENT ĐIỀU PHỐI: ráp các phần thành MỘT BÀI HOÀN CHỈNH, LIỀN MẠCH.\nTIÊU ĐỀ (H1): ${unified.tieu_de}\nMETA: ${unified.meta_description}\n\nCÁC PHẦN ĐÃ VIẾT:\n"""\n${assembled}\n"""\n\nNHIỆM VỤ:\n- Ghép thành bài hoàn chỉnh, các phần nối liền mạch (thêm câu chuyển đoạn nếu cần), KHÔNG trùng ý.\n- Thống nhất 100% giọng văn thương hiệu (xem VOICE).\n- Bắt đầu bằng "# ${unified.tieu_de}". Tổng độ dài ${TONG_DO_DAI}.\n- Thuật ngữ ngoại ngữ kèm dịch trong ngoặc lần đầu.\nTrả về TOÀN VĂN bài blog (markdown), không kèm lời bình.`,
  { label: 'điều phối: ráp bài hoàn chỉnh', phase: 'Đồng viết' }
);

log(`Đã ráp bản hoàn chỉnh (~${coordinated.split(/\s+/).length} từ). Chuyển tổng biên tập.`);

// ── BƯỚC 5: TỔNG BIÊN TẬP ───────────────────────────────────────────────────
phase('Tổng biên tập');

const EDITOR_SCHEMA = {
  type: 'object',
  required: ['bai_viet_cuoi', 'bao_cao_ra_soat', 'so_tu', 'checklist'],
  properties: {
    bai_viet_cuoi: { type: 'string', description: 'Toàn văn bài blog cuối (markdown), kèm khối tác giả/EEAT + FAQ + meta + slug' },
    bao_cao_ra_soat: { type: 'string', description: 'Tóm tắt đã sửa gì và vì sao' },
    so_tu: { type: 'number' },
    checklist: {
      type: 'object',
      required: ['hap_dan', 'van_phong', 'seo', 'eeat', 'ymyl', 'vuot_test_ai'],
      properties: {
        hap_dan: { type: 'string' },
        van_phong: { type: 'string' },
        seo: { type: 'string' },
        eeat: { type: 'string' },
        ymyl: { type: 'string' },
        vuot_test_ai: { type: 'string', description: 'Vì sao bài vượt test "AI viết" và đạt chuẩn thương hiệu' },
      },
    },
  },
};

const editor = await agent(
  `${KB}\n\n${VOICE}\n\n---\nBạn là TỔNG BIÊN TẬP cuối cùng, người gác cổng tiêu chuẩn thương hiệu.\nBản đã điều phối:\n"""\n${coordinated}\n"""\n\nRÀ SOÁT & HOÀN THIỆN theo checklist:\n1) HẤP DẪN: hook 5 giây, giữ chân tới cuối, không lê thê/giáo điều.\n2) GIỌNG VĂN: đúng signature thương hiệu (xem VOICE). Diệt sạch câu sáo & giọng AI trung tính (bỏ kiểu "Trong thời đại ngày nay...", "Tóm lại...", liệt kê vô hồn).\n3) SEO: H1 + H2 hợp lý, từ khóa tự nhiên, meta description, slug; thêm FAQ nếu hợp.\n4) EEAT: thể hiện trải nghiệm thật + thẩm quyền; thêm KHỐI TÁC GIẢ cuối bài (từ VOICE).\n5) YMYL: lời khuyên có trách nhiệm, không hứa hão, cân bằng; thêm disclaimer nếu chủ đề nhạy cảm (tiền/sức khỏe/sự nghiệp).\n6) VƯỢT TEST AI: nhịp văn không đều, chi tiết cảm giác cụ thể, quan điểm cá nhân sắc, số liệu lẻ thật.\nĐiều chỉnh để đạt ${TONG_DO_DAI}. Trả về theo schema.`,
  { label: 'tổng biên tập: bản xuất bản', phase: 'Tổng biên tập', effort: 'high', schema: EDITOR_SCHEMA }
);

return {
  bien_ban_tranh_bien: secretary.bien_ban_tranh_bien,
  dan_bai_thong_nhat: unified,
  bao_cao_tong_bien_tap: editor.bao_cao_ra_soat,
  checklist: editor.checklist,
  so_tu: editor.so_tu,
  bai_viet_cuoi: editor.bai_viet_cuoi,
};
