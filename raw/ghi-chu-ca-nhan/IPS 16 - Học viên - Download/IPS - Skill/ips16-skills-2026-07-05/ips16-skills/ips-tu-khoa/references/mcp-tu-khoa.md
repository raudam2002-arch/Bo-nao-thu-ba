# Danh mục MCP / nguồn dữ liệu Từ khoá

Skill dò các connector này lúc chạy. **Có volume THẬT mới ghi số; không có → 🔶 ước lượng + WebSearch/Python.**

## Bước mở cổng MCP (chạy đầu skill)
1. `ToolSearch` + `search_mcp_registry(["dataforseo","ahrefs","semrush","keyword","seo","google ads","search console","serp"])`.
2. Có connector phù hợp **chưa kết nối** → gọi `suggest_connectors(uuids=[...], keywords=["keywords"])` → bật nút Connect cho người dùng chọn.
3. Đã kết nối → dùng ngay.
4. Registry trống → báo người dùng + đưa danh mục dưới + degrade về nguồn miễn phí.

## A. Cho VOLUME + ĐỘ KHÓ thật (ưu tiên — nền cho "volume cao × cạnh tranh thấp")
| Nguồn | Cho gì | Chi phí | Ghi chú |
|---|---|---|---|
| **DataForSEO** (có MCP server chính thức) | volume, KD, CPC, SERP, đối thủ | trả phí theo call | đầy đủ nhất, dễ cắm MCP |
| **Ahrefs API** | volume, KD, backlink, traffic | trả phí (gói) | KD chuẩn ngành |
| **Semrush API** | volume, KD, CPC, keyword magic | trả phí | mạnh về ý định + cụm |
| **Google Ads API (Keyword Planner)** | volume (dạng khoảng), CPC | cần tài khoản Ads | rẻ/miễn phí nhưng volume theo dải |
| **Moz / Ubersuggest API** | volume, độ khó | trả phí (có free hạn chế) | thay thế |

## B. Miễn phí — dùng được ngay (degrade)
| Nguồn | Cho gì | Cách lấy |
|---|---|---|
| **Google Search Console** | truy vấn THẬT site đang có (volume tương đối + vị trí) | cắm nếu người dùng có site |
| **Google Trends** (pytrends) | độ quan tâm tương đối, mùa vụ, tăng/giảm | Python, miễn phí |
| **Google Autocomplete / "People also ask" / "Related searches"** | gợi ý từ khoá thật khách gõ | WebSearch/WebFetch |
| **YouTube / TikTok suggest** | từ khoá video | WebSearch |
| **AnswerThePublic / Keyword Surfer** | câu hỏi quanh từ khoá | WebFetch (giới hạn) |

> Nguồn B không cho volume tuyệt đối → chấm **định tính** (cao/vừa/thấp) + đánh dấu 🔶 "kiểm bằng nguồn A".

## Quy tắc chọn từ khoá nền tảng
Mục tiêu: **volume cao × độ khó (KD) thấp × ý định gần mua** = *quick win*.
- Có nguồn A: lọc KD ≤ 30 (hoặc thấp tương đối ngách) & volume ≥ ngưỡng → xếp hạng cơ hội.
- Chỉ có nguồn B: ưu tiên từ khoá đuôi dài, cụ thể, có ý định rõ (đối thủ yếu trên SERP = dấu hiệu dễ).
