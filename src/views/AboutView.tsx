import React, { useState } from 'react';
import { PageRoute } from '../types';

interface AboutViewProps {
  onNavigate: (route: PageRoute, houseId?: string) => void;
  onOpenContribute: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenContribute }) => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackContent) return;
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackName('');
      setFeedbackEmail('');
      setFeedbackContent('');
      setFeedbackSubmitted(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8c7b70]">
        <button 
          onClick={() => onNavigate('trang-chu')} 
          className="hover:text-[#6c4e36] transition-colors cursor-pointer"
        >
          Trang chủ
        </button>
        <span>/</span>
        <span className="text-[#2c221e] font-medium">Giới thiệu dự án &amp; Sứ mệnh di sản</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#fff8f0] border-l-4 border-[#6c4e36] p-6 md:p-10 space-y-4 border border-[#ebdccd]">
        <div className="text-xs font-mono uppercase tracking-widest text-[#6c4e36]">
          Sáng kiến di sản số cộng đồng • Phi lợi nhuận
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#2c221e]">
          Về dự án Nếp Nhà Việt
        </h1>
        <p className="text-base text-[#5c4d44] max-w-3xl leading-relaxed font-sans">
          Nếp Nhà Việt là dự án xây dựng hệ thống lưu trữ số hóa mở về kiến trúc nhà ở truyền thống của 54 dân tộc Việt Nam. Chúng tôi kết hợp tư liệu khảo tả thư tịch, bản vẽ đo đạc kỹ thuật thực địa và công nghệ đồ họa tương tác 2D nhằm đưa vẻ đẹp cấu trúc gỗ cổ truyền đến gần hơn với thế hệ trẻ và giới nghiên cứu.
        </p>
      </div>

      {/* MANDATORY STUDENT HONOR & ATTRIBUTION BLOCK */}
      <section className="bg-white border-2 border-[#6c4e36] p-6 md:p-10 shadow-sm relative">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ede0d4] text-[#6c4e36] text-xs font-mono uppercase tracking-wider border border-[#d6c2b0]">
            <span className="material-symbols-outlined text-sm">school</span>
            Thông tin thực tập học thuật &amp; Bản quyền sản phẩm
          </div>

          <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2c221e]">
            Hồ sơ công bố sản phẩm thực tập
          </h2>

          {/* STUDENT HONOR & ATTRIBUTION BLOCK */}
          <div className="p-5 bg-[#fbf7f2] border-l-4 border-[#6c4e36] border border-[#ebdccd] space-y-3">
            <p className="font-serif text-base sm:text-lg text-[#2c221e] leading-relaxed font-medium">
              Sản phẩm thực tập của <span className="text-[#6c4e36] font-bold">Tạ Đức Thắng</span>, mã sinh viên <span className="text-[#6c4e36] font-mono font-bold">PH60330</span>, Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH, dự án xã hội phi lợi nhuận.
            </p>
            <div className="text-xs font-mono text-[#6f5a4d] pt-1 border-t border-[#ebdccd]">
              • Mục tiêu: Xây dựng nền tảng số hóa di sản kiến trúc phục vụ cộng đồng sinh viên, nhà nghiên cứu và người yêu mến văn hóa truyền thống Việt Nam.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-[#5c4d44]">
            <div className="p-3 bg-[#fdfaf6] border border-[#dfd2c4]">
              <strong className="text-[#6c4e36] block">Sinh viên thực hiện:</strong>
              <div className="mt-1 font-sans font-medium text-sm text-[#2c221e]">Tạ Đức Thắng</div>
              <div className="text-[11px] text-[#8c7b70]">MSV: PH60330</div>
            </div>
            <div className="p-3 bg-[#fdfaf6] border border-[#dfd2c4]">
              <strong className="text-[#6c4e36] block">Đơn vị hướng nghiệp:</strong>
              <div className="mt-1">Cao đẳng FPT Polytechnic &amp; IMTA TECH</div>
              <div className="text-[11px] text-[#8c7b70]">Chương trình Đợt 15</div>
            </div>
            <div className="p-3 bg-[#fdfaf6] border border-[#dfd2c4]">
              <strong className="text-[#4e5840] block">Tính chất pháp lý dự án:</strong>
              <div className="mt-1">Dự án xã hội phi lợi nhuận</div>
              <div className="text-[11px] text-[#8c7b70]">Creative Commons BY-NC 4.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Operating Pillars */}
      <section className="space-y-6">
        <div className="border-b border-[#ebdccd] pb-3">
          <span className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest">Triết lý hành động</span>
          <h2 className="text-2xl font-serif font-medium text-[#2c221e] mt-1">
            3 Trụ cột cốt lõi của Nếp Nhà Việt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#dfd2c4] p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">history_edu</span>
            </div>
            <h3 className="font-serif font-medium text-lg text-[#2c221e]">
              01. Bảo tồn số (Digital Preservation)
            </h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Trước sức ép của hiện đại hóa và bê tông hóa nông thôn, nhiều ngôi nhà gỗ cổ truyền đang dần biến mất. Việc số hóa bản vẽ và mô hình 2D/3D là giải pháp cấp thiết để lưu giữ ký ức văn hóa cho các thế hệ tương lai.
            </p>
          </div>

          <div className="bg-white border border-[#dfd2c4] p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">public</span>
            </div>
            <h3 className="font-serif font-medium text-lg text-[#2c221e]">
              02. Khả năng tiếp cận học thuật (Open Access)
            </h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Xóa bỏ rào cản tài liệu lưu trữ đóng kín. Toàn bộ hồ sơ trắc đạc, kích thước cột gỗ, chi tiết mộng thắt được công khai trực quan trên nền tảng web nhẹ nhàng, tra cứu tức thì trên mọi thiết bị máy tính và điện thoại.
            </p>
          </div>

          <div className="bg-white border border-[#dfd2c4] p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 bg-[#f4ebe1] text-[#4e5840] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">fact_check</span>
            </div>
            <h3 className="font-serif font-medium text-lg text-[#2c221e]">
              03. Liêm chính dữ liệu (Data Integrity)
            </h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Nói không với suy đoán hư cấu. Bất kỳ thông số nào chưa đủ chứng cứ khảo cổ học hoặc thiếu kiểm định niên đại C14 đều được cảnh báo rõ ràng, giữ gìn tiêu chuẩn trung thực nghiêm cẩn trong học thuật kiến trúc.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Acknowledgments & Methodology */}
      <section className="bg-[#f7efe5] border border-[#dfd2c4] p-6 md:p-8 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest">Phương pháp luận</span>
          <h2 className="text-2xl font-serif font-medium text-[#2c221e]">
            Nền tảng tri thức &amp; Lời tri ân
          </h2>
          <p className="text-xs md:text-sm text-[#5c4d44] leading-relaxed">
            Dự án Nếp Nhà Việt xin bày tỏ lòng biết ơn sâu sắc đến các thế hệ nhà nghiên cứu văn hóa, kiến trúc sư tiền bối đã để lại những công trình khảo tả đồ sộ: Cố nhà nghiên cứu Phan Thuận An, PGS.TS. Nguyễn Bá Đang, các nhà khoa học tại Viện Bảo tồn Di tích (Bộ VHTTDL) và Viện Dân tộc học (Viện Hàn lâm KHXH Việt Nam).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-4 border border-[#dfd2c4] space-y-1">
            <span className="text-xs font-mono font-bold text-[#6c4e36]">VIỆN BẢO TỒN DI TÍCH</span>
            <p className="text-xs text-[#5c4d44]">Nguồn tư liệu đo vẽ kỹ thuật nhà ở các dân tộc phía Bắc &amp; miền Trung.</p>
          </div>
          <div className="bg-white p-4 border border-[#dfd2c4] space-y-1">
            <span className="text-xs font-mono font-bold text-[#6c4e36]">VIỆN DÂN TỘC HỌC</span>
            <p className="text-xs text-[#5c4d44]">Hồ sơ nhân học về không gian cư trú mẫu hệ Tây Nguyên và nhà sàn Tày - Mường.</p>
          </div>
          <div className="bg-white p-4 border border-[#dfd2c4] space-y-1">
            <span className="text-xs font-mono font-bold text-[#6c4e36]">CỘNG ĐỒNG NGHỆ NHÂN MỘC</span>
            <p className="text-xs text-[#5c4d44]">Kinh nghiệm thực tiễn từ các làng nghề mộc Kim Bồng, Chàng Sơn, La Xuyên.</p>
          </div>
        </div>
      </section>

      {/* Feedback & Contribution Interaction Box */}
      <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest">Đóng góp &amp; Phản biện</span>
          <h2 className="text-xl font-serif font-medium text-[#2c221e]">
            Gửi phản hồi hoặc tài liệu hiệu đính
          </h2>
          <p className="text-xs text-[#5c4d44] leading-relaxed">
            Bạn là kiến trúc sư, sinh viên hoặc người sở hữu ngôi nhà cổ? Hãy đồng hành cùng Nếp Nhà Việt bằng cách đóng góp bản vẽ, hình ảnh mộng gỗ hoặc góp ý hiệu đính sai sót nếu có.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContribute}
              className="px-5 py-2.5 bg-[#6c4e36] text-white hover:bg-[#543d2b] text-xs font-medium tracking-wide transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">cloud_upload</span>
              Mở cổng nộp tư liệu điền dã
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#fbf7f2] border border-[#ebdccd] p-5">
          {feedbackSubmitted ? (
            <div className="p-6 text-center space-y-2 bg-[#f4ebe1] border border-[#d6c2b0]">
              <span className="material-symbols-outlined text-3xl text-[#4e5840]">check_circle</span>
              <h4 className="font-serif font-medium text-base text-[#2c221e]">Cảm ơn bạn đã gửi ý kiến!</h4>
              <p className="text-xs text-[#5c4d44]">Ý kiến phản biện của bạn đã được chuyển đến ban cố vấn học thuật dự án.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 bg-white border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Email liên lạc</label>
                  <input
                    type="email"
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-white border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Nội dung góp ý / Hiệu đính thuật ngữ *</label>
                <textarea
                  required
                  rows={3}
                  value={feedbackContent}
                  onChange={(e) => setFeedbackContent(e.target.value)}
                  placeholder="Góp ý về số đo thước tầm, tên gọi cấu kiện mộng gỗ theo tiếng địa phương..."
                  className="w-full px-3 py-2 bg-white border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36]"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#2c221e] hover:bg-[#43352f] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Gửi phản hồi học thuật
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
