import React from 'react';
import { PageRoute } from '../types';
import { ARCHITECTURAL_ITEMS } from '../data/architecturalData';

interface HomeViewProps {
  onNavigate: (route: PageRoute, houseId?: string) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenSearch }) => {
  const featuredHouses = ARCHITECTURAL_ITEMS.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#fff8f0] border-b border-[#ebdccd] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ede0d4] text-[#6c4e36] text-xs font-mono uppercase tracking-widest border border-[#d6c2b0]">
              <span className="w-2 h-2 bg-[#6c4e36] inline-block"></span>
              Kho lưu trữ di sản số học thuật
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2c221e] leading-tight font-medium">
              Hồ sơ số kiến trúc <br />
              <span className="italic text-[#6c4e36]">nhà ở truyền thống</span> Việt Nam
            </h1>
            
            <p className="text-[#5c4d44] text-base md:text-lg leading-relaxed max-w-2xl font-sans">
              Hệ thống lưu trữ học thuật, số hóa bản vẽ đo đạc kỹ thuật và giải mã kết cấu gỗ cổ truyền của 54 dân tộc anh em trên nền tảng di sản số mở, chuẩn mực và minh bạch nguồn gốc.
            </p>

            {/* Quick search input trigger */}
            <div className="pt-2">
              <div 
                onClick={onOpenSearch}
                className="flex items-center bg-white border-2 border-[#6c4e36] p-2 shadow-sm cursor-pointer hover:border-[#8c6b50] transition-colors max-w-xl group"
              >
                <span className="material-symbols-outlined text-[#6c4e36] mx-3">search</span>
                <span className="text-[#8c7b70] text-sm flex-1 font-sans">
                  Tìm nhanh theo kiểu nhà, cấu kiện mộng gỗ, vùng miền (hoặc ấn Ctrl + K)...
                </span>
                <span className="hidden sm:inline-block px-2.5 py-1 bg-[#f4ebe1] text-[#6c4e36] text-xs font-mono border border-[#d6c2b0]">
                  ⌘ K
                </span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('kham-pha')}
                className="px-6 py-3.5 bg-[#6c4e36] text-white hover:bg-[#543d2b] transition-colors text-sm font-medium tracking-wide flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-lg">folder_open</span>
                Khám phá kho tư liệu
              </button>
              
              <button
                onClick={() => onNavigate('hoi-dap-ai')}
                className="px-6 py-3.5 bg-white border border-[#6c4e36] text-[#6c4e36] hover:bg-[#f8f1ea] transition-colors text-sm font-medium tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">psychology</span>
                Tra cứu cấu kiện AI
              </button>

              <button
                onClick={() => onNavigate('ho-so', 'nha-ruong-hue')}
                className="px-4 py-3.5 text-[#6c4e36] hover:text-[#2c221e] text-sm font-medium underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                Xem hồ sơ mẫu (Nhà rường Huế) &rarr;
              </button>
            </div>
          </div>

          {/* Hero Feature Visual: Traditional Wooden House Elevation */}
          <div className="lg:col-span-5">
            <div className="relative border-4 border-white shadow-xl bg-white p-3">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#2c221e]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqm_akIBl2H8aepo8JBoEB1yPexkn54ZSKneb1wzDW8f04ZpT-DLDjH_5xszF_TcpArAz6e_8GozKy2joAThKqcVcHLWMJnI_QwY1ch3LXrnkQBTE-osg-Lu3uZGUTqwlZ-zZquEJrCan_kUdv467qbQYxsUmHJpvz9DbUHTRBfzLfZcLxqBmnIKlJc9a3FpcrwLnLAGf_dtbqaro-WGx1BT4UeOEeSfC3czFC2oU1Gr0Ei5ypJ04M"
                  alt="Nhà rường xứ Huế - Hồ sơ di sản số"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-mono text-[#d6c2b0] uppercase tracking-wider">Hồ sơ số tiêu điểm • HS-KTH-0104</span>
                  <h3 className="text-lg font-serif font-medium mt-1">Nhà rường ba gian hai chái xứ Huế</h3>
                  <p className="text-xs text-[#e0d5cb] mt-1 font-sans">
                    Niên đại triều Nguyễn • 48 cột gỗ kiền kiền mộng sập ngàm khóa
                  </p>
                </div>
              </div>

              {/* Technical Badge Row */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#ebdccd] text-center font-mono text-xs text-[#5c4d44]">
                <div className="p-2 bg-[#fbf6f0]">
                  <span className="block font-bold text-[#6c4e36] text-sm">1:50</span>
                  Tỷ lệ trắc đạc
                </div>
                <div className="p-2 bg-[#fbf6f0]">
                  <span className="block font-bold text-[#6c4e36] text-sm">12</span>
                  Bản vẽ CAD/SVG
                </div>
                <div className="p-2 bg-[#fbf6f0]">
                  <span className="block font-bold text-[#4e5840] text-sm">100%</span>
                  Kiểm định OCR
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Metrics Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#e2d0bf] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-l-2 border-[#6c4e36] pl-4">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[#2c221e]">08+</div>
            <div className="text-xs font-sans text-[#6f5a4d] uppercase tracking-wider mt-1">Kiểu hình kiến trúc đặc thù</div>
          </div>
          <div className="border-l-2 border-[#6c4e36] pl-4">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[#2c221e]">140+</div>
            <div className="text-xs font-sans text-[#6f5a4d] uppercase tracking-wider mt-1">Bản vẽ đo đạc & Mặt cắt</div>
          </div>
          <div className="border-l-2 border-[#4e5840] pl-4">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[#2c221e]">54</div>
            <div className="text-xs font-sans text-[#6f5a4d] uppercase tracking-wider mt-1">Nhóm cộng đồng dân tộc</div>
          </div>
          <div className="border-l-2 border-[#4e5840] pl-4">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[#4e5840]">100%</div>
            <div className="text-xs font-sans text-[#6f5a4d] uppercase tracking-wider mt-1">Nguồn trích dẫn thư tịch</div>
          </div>
        </div>
      </section>

      {/* Main Grid: Featured House Typologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#ebdccd]">
          <div>
            <div className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest mb-1">Mục lục khảo tả</div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2c221e] font-medium">Kho tư liệu kiến trúc nổi bật</h2>
          </div>
          <button
            onClick={() => onNavigate('kham-pha')}
            className="mt-4 md:mt-0 text-sm font-medium text-[#6c4e36] hover:text-[#2c221e] inline-flex items-center gap-1 cursor-pointer group"
          >
            Xem tất cả hồ sơ trắc đạc
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((house) => (
            <article
              key={house.id}
              className="bg-white border border-[#e2d5c5] flex flex-col hover:border-[#6c4e36] transition-all hover:shadow-md group"
            >
              {/* Image & Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f0e6dc]">
                <img
                  src={house.imageUrl}
                  alt={house.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#6c4e36] text-white text-[11px] font-mono px-2 py-0.5 uppercase tracking-wider">
                    {house.regionLabel}
                  </span>
                  <span className="bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5">
                    {house.code}
                  </span>
                </div>
                {house.status === 'verified' && (
                  <div className="absolute top-3 right-3 bg-[#4e5840] text-white text-[11px] font-mono px-2 py-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
                    Đã giám định
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#8c7b70]">{house.provinceLabel} • {house.era}</div>
                  <h3 className="text-xl font-serif font-medium text-[#2c221e] group-hover:text-[#6c4e36] transition-colors">
                    {house.name}
                  </h3>
                  <p className="text-xs text-[#5c4d44] font-sans line-clamp-2 leading-relaxed">
                    {house.description}
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="pt-2 border-t border-[#f4ebe1] space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#6f5a4d]">
                    <span className="font-mono font-semibold text-[#6c4e36] shrink-0">Kết cấu:</span>
                    <span className="truncate">{house.structuralFeature}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8c7b70]">
                    <span>{house.blueprintCount}</span>
                    <span className="text-[#6c4e36] font-medium">{house.ethnicLabel}</span>
                  </div>
                </div>

                {/* Open Dossier Button */}
                <button
                  onClick={() => onNavigate('ho-so', house.id)}
                  className="w-full py-2.5 bg-[#fbf7f2] hover:bg-[#6c4e36] text-[#6c4e36] hover:text-white border border-[#dfd2c4] text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Xem hồ sơ chi tiết</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regional Classification Section */}
      <section className="bg-[#f7efe5] border-y border-[#e2d0bf] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest">Không gian cư trú</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2c221e] font-medium">
              4 Phân vùng sinh thái kiến trúc Việt Nam
            </h2>
            <p className="text-sm text-[#5c4d44] font-sans">
              Mỗi vùng miền sản sinh những thức kiến trúc độc bản để thích ứng với vi khí hậu, thổ nhưỡng và tập tục cộng đồng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bac Bo */}
            <div 
              onClick={() => onNavigate('kham-pha')} 
              className="bg-white border border-[#dfd2c4] p-6 hover:border-[#6c4e36] transition-all cursor-pointer group space-y-3"
            >
              <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#6c4e36] group-hover:text-white transition-colors">
                B
              </div>
              <h3 className="font-serif font-medium text-lg text-[#2c221e] group-hover:text-[#6c4e36]">
                Kiến trúc Bắc Bộ
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Đặc trưng vì kèo kẻ truyền, tiền kẻ hậu bẩy, ngói mũi hài, giáp sông hồ và sân gạch rộng phơi nông sản.
              </p>
              <div className="text-xs font-mono text-[#6c4e36] flex items-center gap-1 pt-2">
                Khám phá 32 hồ sơ &rarr;
              </div>
            </div>

            {/* Trung Bo */}
            <div 
              onClick={() => onNavigate('kham-pha')} 
              className="bg-white border border-[#dfd2c4] p-6 hover:border-[#6c4e36] transition-all cursor-pointer group space-y-3"
            >
              <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#6c4e36] group-hover:text-white transition-colors">
                T
              </div>
              <h3 className="font-serif font-medium text-lg text-[#2c221e] group-hover:text-[#6c4e36]">
                Kiến trúc Trung Bộ
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Tiêu biểu hệ nhà rường Huế và nhà lá mái Bình Định; kết cấu mộng sập ngàm chắc chắn chống bão lũ khắc nghiệt.
              </p>
              <div className="text-xs font-mono text-[#6c4e36] flex items-center gap-1 pt-2">
                Khám phá 28 hồ sơ &rarr;
              </div>
            </div>

            {/* Tay Nguyen */}
            <div 
              onClick={() => onNavigate('kham-pha')} 
              className="bg-white border border-[#dfd2c4] p-6 hover:border-[#6c4e36] transition-all cursor-pointer group space-y-3"
            >
              <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#6c4e36] group-hover:text-white transition-colors">
                TN
              </div>
              <h3 className="font-serif font-medium text-lg text-[#2c221e] group-hover:text-[#6c4e36]">
                Kiến trúc Tây Nguyên
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Nhà dài Ê Đê, nhà Rông Ba Na; kết cấu sàn gỗ cao vút, xà Kpan uy quyền và nhịp điệu sinh hoạt mẫu hệ.
              </p>
              <div className="text-xs font-mono text-[#6c4e36] flex items-center gap-1 pt-2">
                Khám phá 19 hồ sơ &rarr;
              </div>
            </div>

            {/* Mien Nui Phia Bac */}
            <div 
              onClick={() => onNavigate('kham-pha')} 
              className="bg-white border border-[#dfd2c4] p-6 hover:border-[#6c4e36] transition-all cursor-pointer group space-y-3"
            >
              <div className="w-10 h-10 bg-[#f4ebe1] text-[#6c4e36] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#6c4e36] group-hover:text-white transition-colors">
                TB
              </div>
              <h3 className="font-serif font-medium text-lg text-[#2c221e] group-hover:text-[#6c4e36]">
                Vùng cao Tây Bắc
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Nhà sàn Tày - Mường, nhà trình tường Hà Nhì với tường đất nện dày 50cm giữ ấm giữa sương muối đại ngàn.
              </p>
              <div className="text-xs font-mono text-[#6c4e36] flex items-center gap-1 pt-2">
                Khám phá 24 hồ sơ &rarr;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Monograph Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#6c4e36] p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6c4e36] bg-[#f7efe5] px-3 py-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Chuyên khảo trắc đạc nổi bật
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#2c221e]">
                Hồ sơ kiến trúc: Nhà rường cổ Kim Long xứ Huế
              </h2>

              <p className="text-sm md:text-base text-[#5c4d44] leading-relaxed font-sans">
                Tài liệu khảo tả hoàn chỉnh nhất về thức nhà ba gian hai chái thời Nguyễn với bản vẽ đo vẽ tỷ lệ 1:25, hồ sơ 48 chân cột đá nguyên khối và hệ thống mộng thắt then khóa. Dữ liệu đối chiếu trực tiếp từ tác phẩm &ldquo;Kiến trúc Cố đô Huế&rdquo; của nhà nghiên cứu Phan Thuận An.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="border border-[#ebdccd] p-3 bg-[#fbf7f2]">
                  <div className="text-xs font-mono text-[#8c7b70]">ĐẶC TRƯNG MÁI</div>
                  <div className="font-medium text-sm text-[#2c221e] mt-1">Ngói liệt 2 tầng dày dặn</div>
                </div>
                <div className="border border-[#ebdccd] p-3 bg-[#fbf7f2]">
                  <div className="text-xs font-mono text-[#8c7b70]">KHÍ HẬU</div>
                  <div className="font-medium text-sm text-[#2c221e] mt-1">Kháng bão cấp 12 &amp; lụt ngập</div>
                </div>
                <div className="border border-[#ebdccd] p-3 bg-[#fbf7f2]">
                  <div className="text-xs font-mono text-[#8c7b70]">MỘNG GỖ</div>
                  <div className="font-medium text-sm text-[#2c221e] mt-1">Khẩu ngàm không đinh sắt</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate('ho-so', 'nha-ruong-hue')}
                  className="px-6 py-3 bg-[#6c4e36] text-white hover:bg-[#543d2b] transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">architecture</span>
                  Mở đồ bản 2D tương tác
                </button>
                <button
                  onClick={() => onNavigate('nguon-tu-lieu')}
                  className="px-6 py-3 border border-[#6c4e36] text-[#6c4e36] hover:bg-[#f7efe5] transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">menu_book</span>
                  Xem nguồn thư tịch
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[#d6c2b0] bg-[#fcf9f5] p-3">
                <div className="relative aspect-square overflow-hidden bg-stone-900 border border-stone-300">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD80wcgmCcXfQj8fsSZr_4fZUftKzbsO5CiWnOc4ggMMB1YSdAxelN9SsZrq0WqIJutozER3M724EDH5GBxGLAq5oHXMJWqq_pmh9uBmLFCMRTQd6ozHgIOhkzaY5in735X3R-l7fZwYfA8cWn93JuE50GIlRo_hR_qxj5_RuZGddUwxZOTusoWXM5Cer-Est9HJ9_q2e8ZfWerKZFhhTytUFowf-4b6UasnJ8ylOA5KrLOKtgTIMEQ"
                    alt="Bản vẽ trắc đạc vì rường Huế"
                    className="w-full h-full object-contain filter invert contrast-125"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-emerald-400">
                    BẢN VẼ TRẮC ĐẠC KH-042/B
                  </div>
                </div>
                <div className="mt-2 text-center text-xs font-mono text-[#6f5a4d]">
                  Mặt cắt ngang khung vì rường • Tỷ lệ bản vẽ trích xuất 1:25
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Hook Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2c221e] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d6c2b0]">
              <span className="material-symbols-outlined text-emerald-400 text-sm">verified_user</span>
              Liêm chính học thuật 100%
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium">
              Bạn đang cần tra cứu cấu kiện hay đối chiếu thư tịch?
            </h2>
            <p className="text-sm text-[#d6c2b0] leading-relaxed font-sans">
              Hệ thống AI Nghiên cứu của Nếp Nhà Việt chỉ trả lời dựa trên các đầu sách chuyên khảo và báo cáo khảo sát thực địa được giám định. Nếu tư liệu chưa đủ căn cứ (như thiếu niên đại C14), hệ thống sẽ từ chối suy đoán để bảo đảm tính chuẩn xác.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('hoi-dap-ai')}
                className="px-6 py-3 bg-[#fff8f0] text-[#2c221e] hover:bg-[#ede0d4] transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Thử hỏi trợ lý học thuật
              </button>
              <button
                onClick={() => onNavigate('gioi-thieu')}
                className="px-5 py-3 border border-[#8c7b70] text-[#d6c2b0] hover:text-white hover:border-white transition-colors text-sm font-medium cursor-pointer"
              >
                Xem quy chuẩn dữ liệu
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <span className="material-symbols-outlined text-[240px]">architecture</span>
          </div>
        </div>
      </section>
    </div>
  );
};
