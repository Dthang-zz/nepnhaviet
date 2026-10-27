import React, { useState, useMemo } from 'react';
import { PageRoute, ArchitecturalItem } from '../types';
import { ARCHITECTURAL_ITEMS } from '../data/architecturalData';

interface ExploreViewProps {
  onNavigate: (route: PageRoute, houseId?: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedEthnic, setSelectedEthnic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredItems = useMemo(() => {
    return ARCHITECTURAL_ITEMS.filter((item) => {
      // Region filter
      if (selectedRegion !== 'all' && item.region !== selectedRegion) {
        return false;
      }
      // Ethnic filter
      if (selectedEthnic !== 'all' && item.ethnic !== selectedEthnic) {
        return false;
      }
      // Type filter
      if (selectedType !== 'all' && item.architecturalType !== selectedType) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSub = item.subName?.toLowerCase().includes(q);
        const matchesCode = item.code.toLowerCase().includes(q);
        const matchesProvince = item.provinceLabel.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesStruct = item.structuralFeature.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesCode && !matchesProvince && !matchesDesc && !matchesStruct) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedRegion, selectedEthnic, selectedType, selectedStatus]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedEthnic('all');
    setSelectedType('all');
    setSelectedStatus('all');
  };

  const hasActiveFilters = searchQuery !== '' || selectedRegion !== 'all' || selectedEthnic !== 'all' || selectedType !== 'all' || selectedStatus !== 'all';

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
        <span className="text-[#2c221e] font-medium">Khám phá kho tư liệu</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#fff8f0] border-l-4 border-[#6c4e36] p-6 md:p-8 space-y-2 border border-[#ebdccd]">
        <div className="text-xs font-mono uppercase tracking-widest text-[#6c4e36]">
          Mục lục phân loại kiến trúc • 54 Dân tộc Việt Nam
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#2c221e]">
          Kho tư liệu kiến trúc truyền thống
        </h1>
        <p className="text-sm text-[#5c4d44] max-w-3xl leading-relaxed font-sans">
          Tra cứu toàn văn hồ sơ đo vẽ kỹ thuật, mặt bằng công năng, hệ vì kèo gỗ và mô hình giải phẫu cấu kiện của các kiểu nhà dân gian qua các thời kỳ lịch sử.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white border border-[#dfd2c4] p-5 space-y-5 shadow-xs">
        {/* Search input + Region chips */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7b70] text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên kiểu nhà, mã hồ sơ (HS-KTH-...), tỉnh thành, cấu kiện..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#fbf7f2] border border-[#d6c2b0] text-sm text-[#2c221e] focus:outline-none focus:border-[#6c4e36] focus:bg-white placeholder:text-[#9e8f85] font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c7b70] hover:text-[#2c221e] cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          {/* Quick Region Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 font-mono text-xs">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'all'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Tất cả vùng
            </button>
            <button
              onClick={() => setSelectedRegion('bac-bo')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'bac-bo'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Bắc Bộ
            </button>
            <button
              onClick={() => setSelectedRegion('trung-bo')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'trung-bo'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Trung Bộ
            </button>
            <button
              onClick={() => setSelectedRegion('nam-bo')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'nam-bo'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Nam Bộ
            </button>
            <button
              onClick={() => setSelectedRegion('tay-nguyen')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'tay-nguyen'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Tây Nguyên
            </button>
            <button
              onClick={() => setSelectedRegion('tay-bac')}
              className={`px-3 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
                selectedRegion === 'tay-bac'
                  ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                  : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
              }`}
            >
              Tây Bắc
            </button>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#f4ebe1]">
          <div>
            <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Dân tộc cư trú</label>
            <select
              value={selectedEthnic}
              onChange={(e) => setSelectedEthnic(e.target.value)}
              className="w-full px-3 py-2 bg-[#fbf7f2] border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36] font-sans"
            >
              <option value="all">Tất cả dân tộc</option>
              <option value="kinh">Người Kinh</option>
              <option value="muong">Người Tày - Mường</option>
              <option value="e-de">Người Ê Đê</option>
              <option value="ha-nhi">Người Hà Nhì</option>
              <option value="cham">Người Chăm</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Loại hình kết cấu</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-[#fbf7f2] border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36] font-sans"
            >
              <option value="all">Tất cả loại hình</option>
              <option value="khung-go">Khung gỗ cổ truyền</option>
              <option value="san">Nhà sàn gỗ</option>
              <option value="trinh-tuong">Nhà trình tường đất</option>
              <option value="la-mai">Nhà lá mái / đắp đất</option>
              <option value="noi-song">Nhà nổi sông nước</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-[#8c7b70] mb-1">Tình trạng thẩm định</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 bg-[#fbf7f2] border border-[#d6c2b0] text-xs text-[#2c221e] focus:outline-none focus:border-[#6c4e36] font-sans"
            >
              <option value="all">Tất cả tình trạng</option>
              <option value="verified">Tư liệu đầy đủ (Đã duyệt)</option>
              <option value="updating">Đang bổ sung trắc đạc</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className={`w-full py-2 px-3 border text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                hasActiveFilters
                  ? 'border-[#6c4e36] text-[#6c4e36] hover:bg-[#6c4e36] hover:text-white bg-[#fff8f0]'
                  : 'border-[#e0d3c5] text-[#b0a095] bg-[#faf6f1] cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-sm">filter_alt_off</span>
              Đặt lại bộ lọc
            </button>
          </div>
        </div>
      </div>

      {/* Meta Bar: Results Count & View Mode Switcher */}
      <div className="flex items-center justify-between text-xs text-[#6f5a4d] border-b border-[#ebdccd] pb-3 font-mono">
        <div>
          Hiển thị <span className="font-bold text-[#6c4e36]">{filteredItems.length}</span> / {ARCHITECTURAL_ITEMS.length} hồ sơ trắc đạc
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-[#8c7b70] mr-1 hidden sm:inline">Chế độ hiển thị:</span>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 border cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-white text-[#6c4e36] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
            title="Dạng lưới"
          >
            <span className="material-symbols-outlined text-sm block">grid_view</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 border cursor-pointer ${
              viewMode === 'list'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-white text-[#6c4e36] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
            title="Dạng danh sách"
          >
            <span className="material-symbols-outlined text-sm block">view_agenda</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white border border-[#dfd2c4] p-8 space-y-4">
          <div className="w-16 h-16 mx-auto bg-[#f8f1ea] text-[#6c4e36] flex items-center justify-center border border-[#d6c2b0]">
            <span className="material-symbols-outlined text-3xl">search_off</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-[#2c221e]">Không tìm thấy hồ sơ phù hợp</h3>
          <p className="text-xs text-[#6f5a4d] max-w-md mx-auto">
            Không có kiểu nhà nào khớp với các tiêu chí tìm kiếm hiện tại. Bạn vui lòng thử từ khóa khác hoặc đặt lại bộ lọc.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 bg-[#6c4e36] text-white hover:bg-[#543d2b] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            Xóa toàn bộ bộ lọc
          </button>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && filteredItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((house) => (
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
                {house.status === 'verified' ? (
                  <div className="absolute top-3 right-3 bg-[#4e5840] text-white text-[11px] font-mono px-2 py-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
                    Đã giám định
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 bg-amber-700 text-white text-[11px] font-mono px-2 py-0.5">
                    Đang điền dã
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
                  {house.subName && (
                    <div className="text-xs italic text-[#6c4e36] font-serif">
                      {house.subName}
                    </div>
                  )}
                  <p className="text-xs text-[#5c4d44] font-sans line-clamp-3 leading-relaxed pt-1">
                    {house.description}
                  </p>
                </div>

                {/* Key specs */}
                <div className="pt-3 border-t border-[#f4ebe1] space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#6f5a4d]">
                    <span className="font-mono font-semibold text-[#6c4e36] shrink-0">Hệ kết cấu:</span>
                    <span className="truncate">{house.structuralFeature}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#6f5a4d]">
                    <span className="font-mono font-semibold text-[#6c4e36] shrink-0">Vật liệu:</span>
                    <span className="truncate">{house.materials}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8c7b70] pt-1">
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
      )}

      {/* List View */}
      {viewMode === 'list' && filteredItems.length > 0 && (
        <div className="space-y-4">
          {filteredItems.map((house) => (
            <article
              key={house.id}
              className="bg-white border border-[#e2d5c5] hover:border-[#6c4e36] transition-all p-5 flex flex-col md:flex-row gap-6 items-center group"
            >
              <div className="relative w-full md:w-56 h-36 shrink-0 overflow-hidden bg-[#f0e6dc]">
                <img
                  src={house.imageUrl}
                  alt={house.imageAlt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[#6c4e36] text-white text-[10px] font-mono px-1.5 py-0.5">
                  {house.code}
                </div>
              </div>

              <div className="flex-1 space-y-2 text-left w-full">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8c7b70]">
                  <span className="text-[#6c4e36] font-semibold">{house.regionLabel}</span>
                  <span>•</span>
                  <span>{house.provinceLabel}</span>
                  <span>•</span>
                  <span>{house.era}</span>
                  <span>•</span>
                  <span className="text-[#4e5840]">{house.ethnicLabel}</span>
                </div>
                
                <h3 className="text-lg font-serif font-medium text-[#2c221e] group-hover:text-[#6c4e36] transition-colors">
                  {house.name}
                </h3>
                
                <p className="text-xs text-[#5c4d44] line-clamp-2 leading-relaxed">
                  {house.description}
                </p>

                <div className="text-xs font-mono text-[#6f5a4d] flex flex-wrap gap-4 pt-1">
                  <span><strong>Kết cấu:</strong> {house.structuralFeature}</span>
                  <span><strong>Bản vẽ:</strong> {house.blueprintCount}</span>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <button
                  onClick={() => onNavigate('ho-so', house.id)}
                  className="w-full md:w-auto px-5 py-2.5 bg-[#6c4e36] text-white hover:bg-[#543d2b] text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Mở hồ sơ</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
