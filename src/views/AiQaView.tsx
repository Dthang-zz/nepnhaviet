import React, { useState } from 'react';
import { PageRoute, AiChatMessage } from '../types';
import { INITIAL_AI_MESSAGES } from '../data/architecturalData';

interface AiQaViewProps {
  onNavigate: (route: PageRoute, houseId?: string) => void;
}

export const AiQaView: React.FC<AiQaViewProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<AiChatMessage[]>(INITIAL_AI_MESSAGES);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const samplePrompts = [
    {
      label: 'Cấu trúc vì rường và mộng gỗ xứ Huế?',
      query: 'Nhà rường Huế có những đặc điểm cấu kiện và thích ứng khí hậu nào nổi bật?'
    },
    {
      label: 'Niên đại C14 nhà trình tường Hà Giang?',
      query: 'Kiểu nhà trình tường của người Mông ở Hà Giang được xây dựng từ thế kỷ thứ mấy?'
    },
    {
      label: 'So sánh tiền kẻ hậu bẩy với kèo suốt?',
      query: 'So sánh sự khác biệt cơ học giữa hệ vì kèo tiền kẻ hậu bẩy Bắc Bộ và vì rường Trung Bộ?'
    },
    {
      label: 'Cầu thang đực / cái nhà dài Ê Đê?',
      query: 'Ý nghĩa biểu tượng văn hóa mẫu hệ trên cấu trúc cầu thang và xà Kpan nhà dài Ê Đê?'
    }
  ];

  const handleCopyCitation = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const handleSendQuery = (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim() || isTyping) return;

    const userMsg: AiChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      let aiMsg: AiChatMessage;

      if (text.toLowerCase().includes('hà giang') || text.toLowerCase().includes('c14') || text.toLowerCase().includes('mông')) {
        aiMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          verificationTag: 'GIỚI HẠN DỮ LIỆU THỰC ĐỊA',
          confidenceScore: 'Cơ chế cảnh báo thiếu nguồn',
          warningNote: 'Chưa đủ tư liệu xác thực trong cơ sở dữ liệu. Hệ thống không tìm thấy tài liệu định lượng hoặc bản vẽ khảo cổ có niên đại C14 chính xác khẳng định thế kỷ xuất hiện ban đầu của kiến trúc nhà trình tường người Mông tại khu vực cao nguyên đá Hà Giang. Việc đưa ra kết luận cụ thể sẽ vi phạm nguyên tắc liêm chính học thuật của Nếp Nhà Việt.',
          digitizationContext: 'Cơ sở dữ liệu Nếp Nhà Việt hiện chỉ mới lưu trữ hồ sơ đo vẽ thực địa nhà trình tường đất Hà Nhì (xã Y Tý, huyện Bát Xát, Lào Cai — đợt khảo tả 2019, mã hồ sơ TT-HN-008). Hồ sơ kiến trúc dân gian của đồng bào người Mông tại các huyện Đồng Văn, Mèo Vạc (Hà Giang) hiện đang nằm trong kế hoạch điền dã đợt 4 và đang trong giai đoạn thẩm định nguồn văn bản của Viện Dân tộc học.',
          content: '',
        };
      } else if (text.toLowerCase().includes('kẻ bẩy') || text.toLowerCase().includes('kèo suốt') || text.toLowerCase().includes('so sánh')) {
        aiMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          verificationTag: 'XÁC MINH CẤP 1 (TRÍCH XUẤT NGUYÊN BẢN)',
          confidenceScore: '96.2%',
          content: 'Đối chiếu đối sánh đồ bản trắc đạc giữa hệ vì kèo Bắc Bộ và Trung Bộ cho thấy 2 trường phái giải pháp cơ học gỗ khác biệt:',
          summaryPoints: [
            {
              title: '01. HỆ VÌ KẺ TRUYỀN (BẮC BỘ)',
              desc: 'Thanh kẻ gác chuyền từ cột cái ra cột quân và vươn qua cột hiên tạo thành bẩy. Kết cấu này tạo đường cong dốc võng mềm mại cho mái ngói mũi hài, tăng độ thông thoáng lòng nhà.'
            },
            {
              title: '02. HỆ VÌ RƯỜNG (TRUNG BỘ)',
              desc: 'Sử dụng các thanh rường nằm ngang chồng khít lên nhau qua trổng trếnh, khóa bằng mộng thắt cổ cò. Hệ này triệt tiêu hoàn toàn lực xô ngang, tạo sức chịu nén cực lớn chống bão biển miền Trung.'
            }
          ],
          heritageReference: {
            code: 'Hồ sơ số KTH-BB-018 & KTH-VN-042',
            surveyYear: 'Niên giám đối sánh: 2023',
            title: 'Khảo sát cấu trúc liên kết vì kèo dân gian miền Bắc và miền Trung',
            extractedFields: ['Module thước tầm 1 lòng rường', 'Góc dốc mái 32° (Bắc) vs 38.5° (Huế)', 'Cơ cấu chốt mộng then trác'],
            matchPercentage: '96.2%',
            blueprintTitle: 'Mặt cắt đối sánh hệ vì rường và vì kẻ chuyền',
            blueprintScale: 'Bản vẽ tỷ lệ 1:30',
            blueprintImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD80wcgmCcXfQj8fsSZr_4fZUftKzbsO5CiWnOc4ggMMB1YSdAxelN9SsZrq0WqIJutozER3M724EDH5GBxGLAq5oHXMJWqq_pmh9uBmLFCMRTQd6ozHgIOhkzaY5in735X3R-l7fZwYfA8cWn93JuE50GIlRo_hR_qxj5_RuZGddUwxZOTusoWXM5Cer-Est9HJ9_q2e8ZfWerKZFhhTytUFowf-4b6UasnJ8ylOA5KrLOKtgTIMEQ'
          },
          sources: [
            '[1] PGS.TS. Nguyễn Bá Đang (2007), "Kiến trúc truyền thống Việt Nam", NXB Xây dựng, tr. 45–68.',
            '[2] Viện Bảo tồn Di tích (2016), "Hồ sơ đo đạc kiến trúc gỗ cổ truyền Việt Nam", Tập 2.'
          ]
        };
      } else {
        aiMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          verificationTag: 'TRÍCH XUẤT THƯ MỤC CHÍNH THỐNG',
          confidenceScore: '95.5%',
          content: `Vấn đề "${text}" đã được đối chiếu trong các chuyên khảo kiến trúc dân gian Việt Nam. Cấu trúc chịu lực và ngôn ngữ mộng gỗ của thể loại này phản ánh tri thức bản địa thích ứng môi trường khí hậu đặc thù của địa phương.`,
          summaryPoints: [
            {
              title: '01. LIÊN KẾT MỘNG TRUYỀN THỐNG',
              desc: 'Toàn bộ liên kết chịu lực sử dụng mộng ngàm đóng then nêm, tuyệt đối không dùng đinh kim loại nhằm tránh mục rỉ khi tiếp xúc độ ẩm nhiệt đới.'
            },
            {
              title: '02. MẶT BẰNG KHÔNG GIAN BẢN ĐỊA',
              desc: 'Tổ chức không gian gian - chái linh hoạt, định vị theo hướng gió nồm và che chắn hướng tây bằng hàng hiên đệm hoặc vách giáp.'
            }
          ],
          sources: [
            '[1] Hồ sơ trắc đạc Nếp Nhà Việt (2023), Lưu trữ tại Viện Bảo tồn Di tích.',
            '[2] NXB Khoa học Xã hội (2002), "Không gian văn hóa cư trú các dân tộc Việt Nam".'
          ]
        };
      }

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8c7b70]">
        <button 
          onClick={() => onNavigate('trang-chu')} 
          className="hover:text-[#6c4e36] transition-colors cursor-pointer"
        >
          Trang chủ
        </button>
        <span>/</span>
        <span className="text-[#2c221e] font-medium">Trợ lý tra cứu học thuật AI</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#fff8f0] border-l-4 border-[#6c4e36] p-6 md:p-8 space-y-3 border border-[#ebdccd]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6c4e36]">
              Công cụ số hóa &amp; Tra cứu kiến trúc
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#2c221e]">
              Trợ lý tra cứu học thuật AI
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4e5840] text-white text-xs font-mono">
            <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
            ZERO HALLUCINATION PROTOCOL
          </div>
        </div>

        <p className="text-sm text-[#5c4d44] max-w-3xl leading-relaxed font-sans">
          Mô hình truy vấn học thuật chuyên biệt cho kiến trúc gỗ cổ truyền Việt Nam. Mọi câu trả lời bắt buộc gắn liền với mã trích dẫn thư tịch, bản vẽ đo đạc và niên đại khảo cổ đã được thẩm định.
        </p>

        {/* Academic Integrity Pledge Box */}
        <div className="p-3 bg-[#f6eee3] border border-[#d6c2b0] flex items-start gap-2.5 text-xs text-[#5c4d44]">
          <span className="material-symbols-outlined text-[#6c4e36] text-base shrink-0 mt-0.5">verified_user</span>
          <div>
            <strong className="text-[#6c4e36] font-mono">CAM KẾT LIÊM CHÍNH HỌC THUẬT:</strong> Khi cơ sở dữ liệu chưa có đủ tư liệu trắc đạc hoặc thiếu niên đại C14 xác thực (như trường hợp nhà trình tường Hà Giang), hệ thống sẽ chủ động từ chối suy đoán và thông báo giới hạn dữ liệu điền dã.
          </div>
        </div>
      </div>

      {/* Main Grid: Left sidebar prompts + Right Chat dialogue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-[#dfd2c4] p-5 space-y-4 shadow-xs">
            <div className="text-xs font-mono uppercase text-[#6c4e36] font-bold border-b border-[#ebdccd] pb-2">
              Câu hỏi mẫu có nguồn khảo tả
            </div>
            <div className="space-y-2">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(p.query)}
                  className="w-full text-left p-3 bg-[#fbf7f2] hover:bg-[#ede0d4] border border-[#ebdccd] text-xs font-sans text-[#2c221e] transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <span className="line-clamp-2">{p.label}</span>
                  <span className="material-symbols-outlined text-sm text-[#8c7b70] group-hover:text-[#6c4e36] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Academic Verification Checklist */}
          <div className="bg-[#f7efe5] border border-[#e2d0bf] p-5 space-y-3 font-mono text-xs">
            <div className="font-bold text-[#6c4e36] uppercase">Tiêu chí xác minh dữ liệu:</div>
            <ul className="space-y-2 text-[#5c4d44]">
              <li className="flex items-start gap-2">
                <span className="text-[#4e5840] font-bold">✓</span>
                <span>Trích dẫn theo quy chuẩn APA từ các NXB Đại học &amp; Viện nghiên cứu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4e5840] font-bold">✓</span>
                <span>Đối chiếu ảnh scan bản vẽ trắc đạc tỷ lệ 1:25 - 1:50.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4e5840] font-bold">✓</span>
                <span>Không ngoại suy niên đại khi chưa có giám định carbon C14.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Chat Flow */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#dfd2c4] p-4 sm:p-6 space-y-6 min-h-[500px] flex flex-col justify-between shadow-xs">
            {/* Messages Container */}
            <div className="space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  {/* Sender Tag & Timestamp */}
                  <div className={`flex items-center gap-2 text-xs font-mono ${
                    msg.sender === 'user' ? 'justify-end text-[#6c4e36]' : 'text-[#4e5840]'
                  }`}>
                    <span className="font-bold">
                      {msg.sender === 'user' ? 'NHÀ NGHIÊN CỨU / NGƯỜI DÙNG' : 'TRỢ LÝ HỌC THUẬT NẾP NHÀ VIỆT'}
                    </span>
                    <span>•</span>
                    <span className="text-[#8c7b70]">{msg.time}</span>
                  </div>

                  {/* Message Bubble */}
                  <div className={`p-5 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#fbf7f2] border border-[#e2d5c5] text-[#2c221e] max-w-2xl ml-auto'
                      : 'bg-[#fffdfa] border-2 border-[#d6c2b0] text-[#2c221e] space-y-4'
                  }`}>
                    {/* User message simple text */}
                    {msg.sender === 'user' && (
                      <p className="font-sans font-medium">{msg.content}</p>
                    )}

                    {/* AI Verified Response Body */}
                    {msg.sender === 'ai' && (
                      <>
                        {/* Verification Ribbon */}
                        {msg.verificationTag && (
                          <div className={`flex flex-wrap items-center justify-between gap-2 p-2.5 font-mono text-xs border ${
                            msg.warningNote
                              ? 'bg-amber-50 text-amber-900 border-amber-300'
                              : 'bg-[#eef3ea] text-[#36482e] border-[#c5d8bd]'
                          }`}>
                            <div className="flex items-center gap-1.5 font-bold">
                              <span className="material-symbols-outlined text-sm">
                                {msg.warningNote ? 'warning' : 'verified'}
                              </span>
                              {msg.verificationTag}
                            </div>
                            <div>Độ tin cậy: {msg.confidenceScore}</div>
                          </div>
                        )}

                        {/* Text Intro */}
                        {msg.content && (
                          <p className="leading-relaxed font-sans text-sm text-[#3c2f28]">
                            {msg.content}
                          </p>
                        )}

                        {/* Summary Points List */}
                        {msg.summaryPoints && (
                          <div className="space-y-3 pt-2">
                            {msg.summaryPoints.map((pt, i) => (
                              <div key={i} className="p-3.5 bg-[#fbf7f2] border-l-3 border-[#6c4e36] space-y-1">
                                <div className="font-mono font-bold text-xs text-[#6c4e36]">
                                  {pt.title}
                                </div>
                                <div className="text-xs text-[#5c4d44] leading-relaxed font-sans">
                                  {pt.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Heritage Reference Card with Blueprint */}
                        {msg.heritageReference && (
                          <div className="border border-[#d6c2b0] bg-[#faf6f0] p-4 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2d5c5] pb-2 font-mono text-xs">
                              <span className="font-bold text-[#6c4e36]">{msg.heritageReference.code}</span>
                              <span className="text-[#8c7b70]">{msg.heritageReference.surveyYear}</span>
                              <span className="text-[#4e5840]">Khớp dữ liệu: {msg.heritageReference.matchPercentage}</span>
                            </div>

                            <div className="text-xs font-serif font-medium text-[#2c221e]">
                              {msg.heritageReference.title}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-1">
                              <div className="sm:col-span-8 space-y-1 text-xs font-mono text-[#5c4d44]">
                                {msg.heritageReference.extractedFields.map((field, fIdx) => (
                                  <div key={fIdx} className="flex items-center gap-1.5">
                                    <span className="text-[#6c4e36]">•</span>
                                    <span>{field}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="sm:col-span-4">
                                <div className="border border-[#c5b5a5] bg-stone-900 p-1">
                                  <img
                                    src={msg.heritageReference.blueprintImg}
                                    alt={msg.heritageReference.blueprintTitle}
                                    className="w-full h-20 object-contain filter invert"
                                  />
                                  <div className="text-[9px] font-mono text-stone-300 text-center mt-1 truncate">
                                    {msg.heritageReference.blueprintScale}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Sources Citation Block */}
                        {msg.sources && (
                          <div className="pt-2 border-t border-[#ebdccd] space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs font-bold text-[#6c4e36]">
                                NGUỒN TRÍCH DẪN THƯ MỤC (APA STANDARD)
                              </span>
                              <button
                                onClick={() => handleCopyCitation(msg.sources?.join('\n') || '')}
                                className="px-2.5 py-1 text-[11px] font-mono border border-[#6c4e36] text-[#6c4e36] hover:bg-[#6c4e36] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                              >
                                <span className="material-symbols-outlined text-xs">
                                  {copiedCitation ? 'done' : 'content_copy'}
                                </span>
                                {copiedCitation ? 'Đã sao chép' : 'Sao chép trích dẫn'}
                              </button>
                            </div>

                            <div className="space-y-1.5 text-xs font-mono text-[#5c4d44] bg-[#fbf7f2] p-3 border border-[#ebdccd]">
                              {msg.sources.map((s, sIdx) => (
                                <p key={sIdx} className="leading-relaxed">{s}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Warning Box for Missing Data / Lack of C14 */}
                        {msg.warningNote && (
                          <div className="p-4 bg-amber-50 border-l-4 border-amber-600 space-y-2">
                            <div className="font-mono text-xs font-bold text-amber-900 flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-sm">report_problem</span>
                              THÔNG BÁO THIẾU DỮ LIỆU ĐỊNH LƯỢNG
                            </div>
                            <p className="text-xs text-amber-950 font-sans leading-relaxed">
                              {msg.warningNote}
                            </p>
                            {msg.digitizationContext && (
                              <div className="pt-2 border-t border-amber-200 text-xs font-mono text-amber-900 leading-relaxed">
                                <strong>Bối cảnh số hóa:</strong> {msg.digitizationContext}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="p-4 bg-[#fffdfa] border border-[#d6c2b0] flex items-center gap-3 text-xs font-mono text-[#6c4e36]">
                  <span className="w-2 h-2 bg-[#6c4e36] animate-ping inline-block"></span>
                  Đang đối chiếu đồ bản trắc đạc và thư mục học thuật...
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="pt-4 border-t border-[#ebdccd] space-y-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendQuery();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder="Nhập câu hỏi tra cứu cấu kiện, vì kèo, hoặc niên đại khảo sát..."
                  className="flex-1 px-4 py-3 bg-[#fbf7f2] border border-[#d6c2b0] text-sm text-[#2c221e] focus:outline-none focus:border-[#6c4e36] focus:bg-white font-sans"
                />
                <button
                  type="submit"
                  disabled={!inputPrompt.trim() || isTyping}
                  className={`px-6 py-3 font-medium text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                    inputPrompt.trim() && !isTyping
                      ? 'bg-[#6c4e36] text-white hover:bg-[#543d2b]'
                      : 'bg-[#e0d3c5] text-[#8c7b70] cursor-not-allowed'
                  }`}
                >
                  <span>Truy vấn</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>

              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#8c7b70]">
                <span>Trích xuất dựa trên 4 đầu sách chuyên khảo &amp; 140+ bản vẽ trắc đạc Viện Bảo tồn Di tích.</span>
                <span className="text-[#6c4e36]">Nếp Nhà Việt AI Research Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
