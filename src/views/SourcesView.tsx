import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types';
import { BIBLIO_SOURCES } from '../data/architecturalData';

interface SourcesViewProps {
  onNavigate: (route: PageRoute, houseId?: string) => void;
}

export const SourcesView: React.FC<SourcesViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const filteredSources = useMemo(() => {
    return BIBLIO_SOURCES.filter((s) => {
      if (selectedFormat !== 'all' && !s.typeBadge.toLowerCase().includes(selectedFormat.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = s.title.toLowerCase().includes(q);
        const matchesAuthor = s.authors.toLowerCase().includes(q);
        const matchesCode = s.code.toLowerCase().includes(q);
        const matchesQuote = s.usageQuote.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor && !matchesCode && !matchesQuote) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedFormat]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8c7b70]">
        <button 
          onClick={() => onNavigate('trang-chu')} 
          className="hover:text-[#6c4e36] transition-colors cursor-pointer"
        >
          Trang chủ
        </button>
        <span>/</span>
        <span className="text-[#2c221e] font-medium">Nguồn tư liệu &amp; Thư mục học thuật</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#fff8f0] border-l-4 border-[#6c4e36] p-6 md:p-8 space-y-3 border border-[#ebdccd]">
        <div className="text-xs font-mono uppercase tracking-widest text-[#6c4e36]">
          Thư mục đối chiếu &amp; Minh chứng khoa học
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#2c221e]">
          Nguồn tư liệu &amp; Thư mục học thuật
        </h1>
        <p className="text-sm text-[#5c4d44] max-w-3xl leading-relaxed font-sans">
          Mọi dữ liệu trắc đạc, thuật ngữ cấu kiện và luận điểm khoa học trong hệ thống Nếp Nhà Việt đều được xây dựng trên nền tảng các chuyên khảo đã xuất bản và báo cáo khảo sát thực địa của các viện nghiên cứu chuyên ngành.
        </p>
      </div>

      {/* 4 Statistics Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-[#dfd2c4] p-5 space-y-1">
          <div className="text-2xl md:text-3xl font-serif font-bold text-[#6c4e36]">04</div>
          <div className="text-xs font-mono uppercase text-[#8c7b70]">Chuyên khảo trụ cột</div>
          <p className="text-[11px] text-[#5c4d44] font-sans pt-1">Đã kiểm chuẩn trích dẫn toàn văn</p>
        </div>

        <div className="bg-white border border-[#dfd2c4] p-5 space-y-1">
          <div className="text-2xl md:text-3xl font-serif font-bold text-[#6c4e36]">1,200+</div>
          <div className="text-xs font-mono uppercase text-[#8c7b70]">Trang OCR &amp; Dữ liệu số</div>
          <p className="text-[11px] text-[#5c4d44] font-sans pt-1">Trích xuất cấu trúc mộc dân gian</p>
        </div>

        <div className="bg-white border border-[#dfd2c4] p-5 space-y-1">
          <div className="text-2xl md:text-3xl font-serif font-bold text-[#4e5840]">24+</div>
          <div className="text-xs font-mono uppercase text-[#8c7b70]">Đồ bản đo đạc thực địa</div>
          <p className="text-[11px] text-[#5c4d44] font-sans pt-1">Tỷ lệ kỹ thuật 1:20 đến 1:50</p>
        </div>

        <div className="bg-white border border-[#dfd2c4] p-5 space-y-1">
          <div className="text-2xl md:text-3xl font-serif font-bold text-[#4e5840]">100%</div>
          <div className="text-xs font-mono uppercase text-[#8c7b70]">Định danh định lượng</div>
          <p className="text-[11px] text-[#5c4d44] font-sans pt-1">Không giả định hay suy đoán</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#dfd2c4] p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7b70] text-sm">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tác giả, tên sách, mã tham chiếu..."
            className="w-full pl-9 pr-4 py-2 bg-[#fbf7f2] border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36] font-sans"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto font-mono text-xs">
          <span className="text-[#8c7b70] shrink-0">Loại tài liệu:</span>
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="px-3 py-2 bg-[#fbf7f2] border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36] font-sans"
          >
            <option value="all">Tất cả hình thức</option>
            <option value="chuyên khảo">Sách chuyên khảo</option>
            <option value="giáo trình">Giáo trình đại học</option>
            <option value="báo cáo">Báo cáo khảo sát thực địa</option>
            <option value="nhân học">Tài liệu Dân tộc học</option>
          </select>
        </div>
      </div>

      {/* Bibliography Source Cards */}
      <div className="space-y-6">
        {filteredSources.map((source) => (
          <article
            key={source.id}
            className="bg-white border-2 border-[#dfd2c4] hover:border-[#6c4e36] transition-all p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start shadow-xs"
          >
            {/* Book Cover / Document Thumbnail */}
            <div className="w-full md:w-48 shrink-0 bg-[#fbf7f2] border border-[#d6c2b0] p-2 self-stretch flex flex-col justify-between">
              <div className="aspect-[3/4] overflow-hidden bg-stone-900 border border-[#d6c2b0]">
                <img
                  src={source.imageUrl}
                  alt={source.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 pt-2 border-t border-[#ebdccd] text-center font-mono text-[10px] text-[#8c7b70]">
                {source.format}
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="bg-[#6c4e36] text-white px-2 py-0.5">{source.refNum}</span>
                <span className="bg-[#f4ebe1] text-[#6c4e36] px-2 py-0.5 border border-[#dfd2c4]">{source.code}</span>
                <span className="text-[#4e5840] font-semibold">{source.verificationBadge}</span>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2c221e]">
                  {source.title}
                </h2>
                <div className="text-xs font-mono text-[#6f5a4d] mt-1">
                  <strong>Tác giả:</strong> {source.authors} • <strong>Xuất bản:</strong> {source.publisher}
                </div>
              </div>

              {/* Usage quote in Nếp Nhà Việt */}
              <div className="p-4 bg-[#fbf7f2] border-l-4 border-[#6c4e36] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6c4e36] font-bold">
                  Phạm vi ứng dụng vào hồ sơ số:
                </span>
                <p className="text-xs md:text-sm text-[#3c2f28] font-sans leading-relaxed italic">
                  &ldquo;{source.usageQuote}&rdquo;
                </p>
              </div>

              {/* Linked Dossier Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#f4ebe1] text-xs font-mono">
                <div className="text-[#8c7b70]">
                  <span>Vị trí trích dẫn: </span>
                  <strong className="text-[#2c221e]">{source.pageCitation}</strong>
                </div>

                <button
                  onClick={() => onNavigate('ho-so', source.linkedHouseId)}
                  className="px-4 py-2 bg-[#6c4e36] text-white hover:bg-[#543d2b] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Mở hồ sơ: {source.linkedHouseName}</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 4-Step Verification Workflow */}
      <section className="bg-[#f7efe5] border border-[#dfd2c4] p-6 md:p-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase text-[#6c4e36] tracking-widest">Quy trình thẩm định</span>
          <h2 className="text-2xl font-serif font-medium text-[#2c221e]">
            Chu trình 4 bước kiểm định dữ liệu học thuật
          </h2>
          <p className="text-xs text-[#5c4d44]">
            Đảm bảo mọi hồ sơ kiến trúc xuất bản đều có căn cứ vững chắc và không có sai số kỹ thuật.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="bg-white border border-[#dfd2c4] p-5 space-y-2">
            <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs font-bold">
              01
            </div>
            <h3 className="font-serif font-medium text-sm text-[#2c221e]">Tiếp cận thư tịch gốc</h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Thu thập các ấn bản nghiên cứu của Viện Bảo tồn Di tích, Viện Dân tộc học và các chuyên gia đầu ngành.
            </p>
          </div>

          <div className="bg-white border border-[#dfd2c4] p-5 space-y-2">
            <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs font-bold">
              02
            </div>
            <h3 className="font-serif font-medium text-sm text-[#2c221e]">Số hóa &amp; Bóc tách OCR</h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Chuyển đổi các bản vẽ scan sang dữ liệu vector SVG tỉ lệ chuẩn, chuẩn hóa thuật ngữ mộng gỗ cổ truyền.
            </p>
          </div>

          <div className="bg-white border border-[#dfd2c4] p-5 space-y-2">
            <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs font-bold">
              03
            </div>
            <h3 className="font-serif font-medium text-sm text-[#2c221e]">Đối chiếu thực địa</h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Xác minh số đo đường kính cột, kích thước gian chái và chất liệu gỗ tại các di tích còn hiện hữu.
            </p>
          </div>

          <div className="bg-white border border-[#dfd2c4] p-5 space-y-2">
            <div className="w-8 h-8 bg-[#4e5840] text-white flex items-center justify-center font-mono text-xs font-bold">
              04
            </div>
            <h3 className="font-serif font-medium text-sm text-[#2c221e]">Nghiệm thu &amp; Mở mã</h3>
            <p className="text-xs text-[#5c4d44] leading-relaxed">
              Gắn nhãn cấp độ xác thực, liên kết trích dẫn APA và cấp quyền truy cập mở phục vụ cộng đồng học thuật.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
