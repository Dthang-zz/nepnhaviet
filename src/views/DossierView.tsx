import React, { useState } from 'react';
import { PageRoute, ArchitecturalItem } from '../types';
import { ARCHITECTURAL_ITEMS, COMPONENT_ANATOMY_LIST, BIBLIO_SOURCES } from '../data/architecturalData';

interface DossierViewProps {
  houseId: string;
  onNavigate: (route: PageRoute, houseId?: string) => void;
}

export const DossierView: React.FC<DossierViewProps> = ({ houseId, onNavigate }) => {
  // Find current house or default to nha-ruong-hue
  const house: ArchitecturalItem = ARCHITECTURAL_ITEMS.find((h) => h.id === houseId) || ARCHITECTURAL_ITEMS[0];

  // Active section for in-page navigation
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'anatomy' | 'climate' | 'sources'>('overview');

  // Blueprint interactive states
  const [layerFunctional, setLayerFunctional] = useState(true);
  const [layerColumns, setLayerColumns] = useState(true);
  const [layerClimate, setLayerClimate] = useState(false);
  const [blueprintZoom, setBlueprintZoom] = useState(1);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);

  // Anatomy inspector states
  const [activeAnatomyId, setActiveAnatomyId] = useState<string>(COMPONENT_ANATOMY_LIST[0].id);
  const currentAnatomy = COMPONENT_ANATOMY_LIST.find((c) => c.id === activeAnatomyId) || COMPONENT_ANATOMY_LIST[0];

  // Column metadata for blueprint tooltips
  const columnsMeta: Record<string, { label: string; role: string; diam: string; wood: string }> = {
    'c1-1': { label: 'Cột Cái Tiền (Tả)', role: 'Chịu lực chính vì nóc gian giữa', diam: 'Ø 38 cm', wood: 'Gỗ Kiền kiền già' },
    'c1-2': { label: 'Cột Cái Tiền (Hữu)', role: 'Chịu lực chính vì nóc gian giữa', diam: 'Ø 38 cm', wood: 'Gỗ Kiền kiền già' },
    'c1-3': { label: 'Cột Cái Hậu (Tả)', role: 'Điểm tựa ban thờ gia tiên', diam: 'Ø 38 cm', wood: 'Gỗ Kiền kiền già' },
    'c1-4': { label: 'Cột Cái Hậu (Hữu)', role: 'Điểm tựa vì rường buồng thờ', diam: 'Ø 38 cm', wood: 'Gỗ Kiền kiền già' },
    'c2-1': { label: 'Cột Quân Tiền', role: 'Đỡ kèo đấm và xà nách', diam: 'Ø 30 cm', wood: 'Gỗ Lim Thanh Hóa' },
    'c2-2': { label: 'Cột Quân Hậu', role: 'Liên kết xà hạ vách gỗ', diam: 'Ø 30 cm', wood: 'Gỗ Lim Thanh Hóa' },
    'c3-1': { label: 'Cột Hiên (Tả)', role: 'Đón đầu bẩy hiên vươn mái', diam: 'Ø 26 cm', wood: 'Gỗ Mít lõi' },
    'c3-2': { label: 'Cột Hiên (Giữa)', role: 'Cửa bức bàn mở rộng đón khách', diam: 'Ø 26 cm', wood: 'Gỗ Mít lõi' },
    'c3-3': { label: 'Cột Hiên (Hữu)', role: 'Đón bẩy hiên che nắng xế', diam: 'Ø 26 cm', wood: 'Gỗ Mít lõi' },
  };

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
        <button 
          onClick={() => onNavigate('kham-pha')} 
          className="hover:text-[#6c4e36] transition-colors cursor-pointer"
        >
          Kho tư liệu
        </button>
        <span>/</span>
        <span className="text-[#2c221e] font-medium">{house.name} ({house.code})</span>
      </nav>

      {/* Monograph Top Hero Card */}
      <header className="bg-white border-2 border-[#6c4e36] p-6 md:p-10 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="bg-[#6c4e36] text-white px-2.5 py-0.5 tracking-wider font-semibold">
                {house.code}
              </span>
              <span className="bg-[#f4ebe1] text-[#6c4e36] px-2.5 py-0.5 border border-[#dfd2c4]">
                {house.regionLabel} • {house.provinceLabel}
              </span>
              <span className="bg-[#4e5840] text-white px-2.5 py-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
                Đã giám định thực địa
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#2c221e]">
              {house.name}
            </h1>
            
            {house.subName && (
              <p className="text-sm font-serif italic text-[#6c4e36]">
                {house.subName}
              </p>
            )}

            <p className="text-sm text-[#5c4d44] leading-relaxed max-w-2xl font-sans pt-1">
              {house.description}
            </p>
          </div>

          {/* Action buttons & export */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 font-mono text-xs">
            <div className="p-3 bg-[#fbf6f0] border border-[#d6c2b0] text-center">
              <span className="block text-xs text-[#8c7b70] uppercase">Quy cách hồ sơ</span>
              <span className="font-bold text-[#6c4e36] text-sm">{house.blueprintCount}</span>
            </div>
            <button
              onClick={() => onNavigate('hoi-dap-ai')}
              className="px-4 py-2.5 bg-[#6c4e36] text-white hover:bg-[#543d2b] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans text-xs"
            >
              <span className="material-symbols-outlined text-sm">psychology</span>
              Hỏi AI về hồ sơ này
            </button>
            <button
              onClick={() => onNavigate('nguon-tu-lieu')}
              className="px-4 py-2 bg-white border border-[#6c4e36] text-[#6c4e36] hover:bg-[#fbf7f2] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans text-xs"
            >
              <span className="material-symbols-outlined text-sm">menu_book</span>
              Thư mục trích dẫn
            </button>
          </div>
        </div>

        {/* In-page navigation tabs */}
        <div className="mt-8 pt-6 border-t border-[#ebdccd] flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'overview'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
          >
            01. Tổng quan &amp; Địa chí
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`px-4 py-2 border whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'blueprint'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">architecture</span>
            02. Đồ bản 2D tương tác
          </button>
          <button
            onClick={() => setActiveTab('anatomy')}
            className={`px-4 py-2 border whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'anatomy'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">carpenter</span>
            03. Giải phẫu cấu kiện mộng gỗ
          </button>
          <button
            onClick={() => setActiveTab('climate')}
            className={`px-4 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'climate'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
          >
            04. Khí hậu &amp; Phong thủy
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`px-4 py-2 border whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'sources'
                ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
            }`}
          >
            05. Thư mục khảo tả
          </button>
        </div>
      </header>

      {/* SECTION 01: Overview & Specs */}
      {(activeTab === 'overview' || activeTab === 'climate') && (
        <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#ebdccd] pb-3">
            <span className="font-mono text-xs text-[#6c4e36] font-bold">MỤC 01</span>
            <h2 className="text-xl font-serif font-medium text-[#2c221e]">
              Thông số kỹ thuật &amp; Đặc điểm khảo tả
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Địa điểm khảo tả điền dã</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.provinceLabel}</div>
              <p className="text-xs text-[#6f5a4d]">Khu vực cư trú truyền thống lưu vực sông Hương</p>
            </div>

            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Niên đại kiến trúc</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.era}</div>
              <p className="text-xs text-[#6f5a4d]">Khảo sát niên giám di tích lịch sử triều Nguyễn</p>
            </div>

            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Hệ khung &amp; Cấu trúc chịu lực</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.structuralFeature}</div>
              <p className="text-xs text-[#6f5a4d]">Nguyên lý mộng chốt ngàm không đinh sắt</p>
            </div>

            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Vật liệu gỗ &amp; Xây dựng</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.materials}</div>
              <p className="text-xs text-[#6f5a4d]">Chân tảng đá nguyên khối kê chống ẩm</p>
            </div>

            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Không gian mặt bằng</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.spatialArrangement || '3 gian 2 chái truyền thống'}</div>
              <p className="text-xs text-[#6f5a4d]">Phân chia gian thờ trung tâm và buồng ở hai chái</p>
            </div>

            <div className="p-4 bg-[#fbf7f2] border border-[#e8ded3] space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#8c7b70]">Đặc trưng mái &amp; Thích ứng</span>
              <div className="font-medium text-sm text-[#2c221e]">{house.specialFeature}</div>
              <p className="text-xs text-[#6f5a4d]">Dốc mái 38° thoát nước mưa bão cấp 12</p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 02: Interactive 2D Blueprint Canvas */}
      {(activeTab === 'overview' || activeTab === 'blueprint') && (
        <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#ebdccd] pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#6c4e36] font-bold">MỤC 02</span>
                <h2 className="text-xl font-serif font-medium text-[#2c221e]">
                  Đồ bản mặt bằng 2D trắc đạc kỹ thuật
                </h2>
              </div>
              <p className="text-xs text-[#6f5a4d] mt-1 font-sans">
                Tương tác trực tiếp: Bật/tắt các lớp bản vẽ, phóng to thu nhỏ và bấm vào chân cột để xem số đo chịu lực.
              </p>
            </div>

            {/* Layer toggles */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setLayerFunctional(!layerFunctional)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer flex items-center gap-1 ${
                  layerFunctional
                    ? 'bg-[#6c4e36] text-white border-[#6c4e36]'
                    : 'bg-[#fbf7f2] text-[#8c7b70] border-[#d6c2b0]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">layers</span>
                Lớp 1: Gian &amp; Công năng
              </button>

              <button
                onClick={() => setLayerColumns(!layerColumns)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer flex items-center gap-1 ${
                  layerColumns
                    ? 'bg-[#4e5840] text-white border-[#4e5840]'
                    : 'bg-[#fbf7f2] text-[#8c7b70] border-[#d6c2b0]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_on</span>
                Lớp 2: Lưới cột chịu lực
              </button>

              <button
                onClick={() => setLayerClimate(!layerClimate)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer flex items-center gap-1 ${
                  layerClimate
                    ? 'bg-[#0284c7] text-white border-[#0284c7]'
                    : 'bg-[#fbf7f2] text-[#8c7b70] border-[#d6c2b0]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">air</span>
                Lớp 3: Hướng gió &amp; Bức xạ
              </button>
            </div>
          </div>

          {/* SVG Canvas Container */}
          <div className="relative border-2 border-[#d6c2b0] bg-[#faf6f0] overflow-hidden p-4 select-none">
            {/* Canvas Action Bar */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-xs border border-[#d6c2b0] p-1 font-mono text-xs shadow-xs">
              <button
                onClick={() => setBlueprintZoom(Math.min(blueprintZoom + 0.2, 1.8))}
                className="w-7 h-7 flex items-center justify-center hover:bg-[#ede0d4] text-[#2c221e] cursor-pointer"
                title="Phóng to"
              >
                +
              </button>
              <span className="px-2 text-[11px] text-[#6c4e36]">{Math.round(blueprintZoom * 100)}%</span>
              <button
                onClick={() => setBlueprintZoom(Math.max(blueprintZoom - 0.2, 0.8))}
                className="w-7 h-7 flex items-center justify-center hover:bg-[#ede0d4] text-[#2c221e] cursor-pointer"
                title="Thu nhỏ"
              >
                -
              </button>
              <button
                onClick={() => { setBlueprintZoom(1); setSelectedColumn(null); }}
                className="px-2 py-1 text-[10px] text-[#6c4e36] hover:bg-[#ede0d4] cursor-pointer"
                title="Khôi phục gốc"
              >
                Mặc định
              </button>
            </div>

            {/* Compass Indicator */}
            <div className="absolute top-4 left-4 z-20 bg-white/80 border border-[#d6c2b0] p-2 text-center font-mono text-[10px] text-[#5c4d44]">
              <div className="w-6 h-6 mx-auto border border-[#6c4e36] flex items-center justify-center font-bold text-[#6c4e36]">
                B
              </div>
              <span className="text-[9px] block mt-0.5">Mặt tiền hướng Nam</span>
            </div>

            {/* SVG Drawing */}
            <div 
              className="w-full flex items-center justify-center py-6 transition-transform duration-300"
              style={{ transform: `scale(${blueprintZoom})`, transformOrigin: 'center center' }}
            >
              <svg 
                viewBox="0 0 900 520" 
                className="w-full max-w-[850px] h-auto drop-shadow-sm font-sans"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ebdccd" strokeWidth="0.8" />
                  </pattern>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
                  </marker>
                </defs>

                <rect width="900" height="520" fill="url(#grid)" />

                {/* Outer House Boundary (Mặt bằng chu vi) */}
                <rect 
                  x="80" 
                  y="60" 
                  width="740" 
                  height="380" 
                  fill="#fefcf9" 
                  stroke="#2c221e" 
                  strokeWidth="3.5" 
                />

                {/* Veranda boundary (Hàng hiên trước) */}
                <rect 
                  x="80" 
                  y="340" 
                  width="740" 
                  height="100" 
                  fill="#fbf3ea" 
                  stroke="#6c4e36" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />

                {/* Functional Zones Layer */}
                {layerFunctional && (
                  <g id="layer-functional">
                    {/* Chái Tây (Trái) */}
                    <rect x="80" y="60" width="160" height="280" fill="#f5ede3" fillOpacity="0.7" stroke="#b8a695" strokeWidth="1.5" />
                    <text x="160" y="200" textAnchor="middle" fill="#6c4e36" fontSize="13" fontWeight="bold">CHÁI TÂY</text>
                    <text x="160" y="220" textAnchor="middle" fill="#8c7b70" fontSize="10">Buồng ngủ &amp; Sinh hoạt</text>

                    {/* Gian Tả */}
                    <rect x="240" y="60" width="130" height="280" fill="#fdfbf7" fillOpacity="0.7" stroke="#b8a695" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="305" y="200" textAnchor="middle" fill="#5c4d44" fontSize="12" fontWeight="bold">GIAN TẢ</text>
                    <text x="305" y="220" textAnchor="middle" fill="#8c7b70" fontSize="9">Tiếp khách nam</text>

                    {/* Gian Giữa (Chính vị) */}
                    <rect x="370" y="60" width="160" height="280" fill="#fdf2e9" fillOpacity="0.9" stroke="#6c4e36" strokeWidth="2" />
                    <text x="450" y="160" textAnchor="middle" fill="#6c4e36" fontSize="14" fontWeight="bold">GIAN GIỮA (CHÍNH)</text>
                    <text x="450" y="180" textAnchor="middle" fill="#2c221e" fontSize="11">Án thờ gia tiên &amp; Sập gụ</text>
                    {/* Altar schematic */}
                    <rect x="410" y="75" width="80" height="35" fill="#6c4e36" stroke="#2c221e" strokeWidth="1.5" />
                    <text x="450" y="97" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">BÀN THỜ</text>

                    {/* Gian Hữu */}
                    <rect x="530" y="60" width="130" height="280" fill="#fdfbf7" fillOpacity="0.7" stroke="#b8a695" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="595" y="200" textAnchor="middle" fill="#5c4d44" fontSize="12" fontWeight="bold">GIAN HỮU</text>
                    <text x="595" y="220" textAnchor="middle" fill="#8c7b70" fontSize="9">Nơi đàm đạo, trà đạo</text>

                    {/* Chái Đông (Phải) */}
                    <rect x="660" y="60" width="160" height="280" fill="#f5ede3" fillOpacity="0.7" stroke="#b8a695" strokeWidth="1.5" />
                    <text x="740" y="200" textAnchor="middle" fill="#6c4e36" fontSize="13" fontWeight="bold">CHÁI ĐÔNG</text>
                    <text x="740" y="220" textAnchor="middle" fill="#8c7b70" fontSize="10">Phòng gia chủ &amp; Lưu trữ</text>

                    {/* Label Hàng Hiên */}
                    <text x="450" y="390" textAnchor="middle" fill="#6c4e36" fontSize="13" fontWeight="bold">
                      HÀNG HIÊN TRƯỚC (BẨY HIÊN VƯƠN MÁI 1.4m)
                    </text>
                    <text x="450" y="410" textAnchor="middle" fill="#8c7b70" fontSize="10">
                      Ngạch cửa gỗ nâng cao 25cm ngăn bụi và chắn nước tràn
                    </text>
                  </g>
                )}

                {/* Column Grid Layer */}
                {layerColumns && (
                  <g id="layer-columns">
                    {/* Grid lines connecting columns */}
                    <line x1="160" y1="130" x2="740" y2="130" stroke="#d6c2b0" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="160" y1="270" x2="740" y2="270" stroke="#d6c2b0" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="160" y1="380" x2="740" y2="380" stroke="#d6c2b0" strokeWidth="1" strokeDasharray="4 4" />
                    
                    <line x1="370" y1="70" x2="370" y2="380" stroke="#d6c2b0" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="530" y1="70" x2="530" y2="380" stroke="#d6c2b0" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Cột Cái (Hàng trước gian giữa) */}
                    <g 
                      onClick={() => setSelectedColumn('c1-1')} 
                      className="cursor-pointer group"
                    >
                      <circle cx="370" cy="270" r="14" fill="#6c4e36" stroke="#2c221e" strokeWidth="2.5" />
                      <circle cx="370" cy="270" r="4" fill="#ffffff" />
                      <text x="370" y="250" textAnchor="middle" fill="#6c4e36" fontSize="11" fontWeight="bold">C1 (Tả)</text>
                    </g>

                    <g 
                      onClick={() => setSelectedColumn('c1-2')} 
                      className="cursor-pointer group"
                    >
                      <circle cx="530" cy="270" r="14" fill="#6c4e36" stroke="#2c221e" strokeWidth="2.5" />
                      <circle cx="530" cy="270" r="4" fill="#ffffff" />
                      <text x="530" y="250" textAnchor="middle" fill="#6c4e36" fontSize="11" fontWeight="bold">C1 (Hữu)</text>
                    </g>

                    {/* Cột Cái (Hàng sau gian giữa) */}
                    <g 
                      onClick={() => setSelectedColumn('c1-3')} 
                      className="cursor-pointer group"
                    >
                      <circle cx="370" cy="130" r="14" fill="#6c4e36" stroke="#2c221e" strokeWidth="2.5" />
                      <circle cx="370" cy="130" r="4" fill="#ffffff" />
                      <text x="370" y="115" textAnchor="middle" fill="#6c4e36" fontSize="11" fontWeight="bold">C1 (Hậu)</text>
                    </g>

                    <g 
                      onClick={() => setSelectedColumn('c1-4')} 
                      className="cursor-pointer group"
                    >
                      <circle cx="530" cy="130" r="14" fill="#6c4e36" stroke="#2c221e" strokeWidth="2.5" />
                      <circle cx="530" cy="130" r="4" fill="#ffffff" />
                      <text x="530" y="115" textAnchor="middle" fill="#6c4e36" fontSize="11" fontWeight="bold">C1 (Hậu)</text>
                    </g>

                    {/* Cột Quân (Gian tả & hữu) */}
                    <g onClick={() => setSelectedColumn('c2-1')} className="cursor-pointer">
                      <circle cx="240" cy="270" r="11" fill="#4e5840" stroke="#2c221e" strokeWidth="2" />
                      <text x="240" y="252" textAnchor="middle" fill="#4e5840" fontSize="10" fontWeight="bold">C2</text>
                    </g>
                    <g onClick={() => setSelectedColumn('c2-2')} className="cursor-pointer">
                      <circle cx="660" cy="270" r="11" fill="#4e5840" stroke="#2c221e" strokeWidth="2" />
                      <text x="660" y="252" textAnchor="middle" fill="#4e5840" fontSize="10" fontWeight="bold">C2</text>
                    </g>

                    {/* Cột Chái */}
                    <circle cx="160" cy="130" r="10" fill="#8c7b70" stroke="#2c221e" strokeWidth="1.5" />
                    <circle cx="160" cy="270" r="10" fill="#8c7b70" stroke="#2c221e" strokeWidth="1.5" />
                    <circle cx="740" cy="130" r="10" fill="#8c7b70" stroke="#2c221e" strokeWidth="1.5" />
                    <circle cx="740" cy="270" r="10" fill="#8c7b70" stroke="#2c221e" strokeWidth="1.5" />

                    {/* Hàng Cột Hiên */}
                    <g onClick={() => setSelectedColumn('c3-1')} className="cursor-pointer">
                      <circle cx="240" cy="380" r="9" fill="#b45309" stroke="#2c221e" strokeWidth="1.5" />
                      <text x="240" y="405" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">C3 Hiên</text>
                    </g>
                    <g onClick={() => setSelectedColumn('c3-2')} className="cursor-pointer">
                      <circle cx="450" cy="380" r="9" fill="#b45309" stroke="#2c221e" strokeWidth="1.5" />
                      <text x="450" y="405" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">C3 Hiên</text>
                    </g>
                    <g onClick={() => setSelectedColumn('c3-3')} className="cursor-pointer">
                      <circle cx="660" cy="380" r="9" fill="#b45309" stroke="#2c221e" strokeWidth="1.5" />
                      <text x="660" y="405" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">C3 Hiên</text>
                    </g>
                    <circle cx="160" cy="380" r="9" fill="#b45309" stroke="#2c221e" strokeWidth="1.5" />
                    <circle cx="740" cy="380" r="9" fill="#b45309" stroke="#2c221e" strokeWidth="1.5" />
                  </g>
                )}

                {/* Climate & Radiation Layer */}
                {layerClimate && (
                  <g id="layer-climate">
                    {/* Wind arrows from South to North */}
                    <path d="M 300 480 Q 300 380 300 240" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#arrow)" />
                    <path d="M 450 490 Q 450 360 450 200" fill="none" stroke="#0284c7" strokeWidth="3" strokeDasharray="6 4" markerEnd="url(#arrow)" />
                    <path d="M 600 480 Q 600 380 600 240" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#arrow)" />
                    <text x="450" y="475" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="bold">
                      LUỒNG GIÓ NỒM MÁT HƯỚNG NAM
                    </text>

                    {/* Solar radiation warning from West */}
                    <rect x="80" y="60" width="30" height="280" fill="#f97316" fillOpacity="0.25" />
                    <text x="95" y="50" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">NẮNG CHIỀU TÂY</text>
                  </g>
                )}

                {/* Dimension Line Bottom (Thước đo kích thước thực tế) */}
                <line x1="80" y1="460" x2="820" y2="460" stroke="#2c221e" strokeWidth="1.5" />
                <line x1="80" y1="450" x2="80" y2="470" stroke="#2c221e" strokeWidth="1.5" />
                <line x1="820" y1="450" x2="820" y2="470" stroke="#2c221e" strokeWidth="1.5" />
                <line x1="450" y1="455" x2="450" y2="465" stroke="#2c221e" strokeWidth="1.5" />
                <text x="450" y="475" textAnchor="middle" fill="#2c221e" fontSize="11" fontFamily="monospace">Tổng chiều dài mặt tiền: 14.8 m (3 gian 2 chái)</text>
              </svg>
            </div>

            {/* Selected Column Floating Popover */}
            {selectedColumn && columnsMeta[selectedColumn] && (
              <div className="mt-4 p-4 bg-[#fff8f0] border-2 border-[#6c4e36] text-xs font-mono space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#6c4e36] text-sm">
                    {columnsMeta[selectedColumn].label}
                  </span>
                  <button 
                    onClick={() => setSelectedColumn(null)}
                    className="text-[#8c7b70] hover:text-[#2c221e] cursor-pointer"
                  >
                    Đóng [×]
                  </button>
                </div>
                <div className="text-[#2c221e]"><strong>Chức năng:</strong> {columnsMeta[selectedColumn].role}</div>
                <div className="text-[#5c4d44]">
                  <span><strong>Đường kính:</strong> {columnsMeta[selectedColumn].diam}</span> • <span><strong>Gỗ:</strong> {columnsMeta[selectedColumn].wood}</span> • <span>Kê chân tảng đá Thanh Hóa</span>
                </div>
              </div>
            )}

            {/* Blueprint Meta Caption Box */}
            <div className="mt-4 pt-3 border-t border-[#ebdccd] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#8c7b70]">
              <div>Bản vẽ trắc đạc trích lục số: <strong className="text-[#2c221e]">KTH-HUE-MB01</strong> • Tỷ lệ nguyên bản 1:50</div>
              <div className="text-[#4e5840]">Đơn vị thực hiện: Viện Bảo tồn Di tích (2022)</div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 03: Component Anatomy Inspector (Giải phẫu mộng gỗ) */}
      {(activeTab === 'overview' || activeTab === 'anatomy') && (
        <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 space-y-6">
          <div className="border-b border-[#ebdccd] pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#6c4e36] font-bold">MỤC 03</span>
              <h2 className="text-xl font-serif font-medium text-[#2c221e]">
                Giải phẫu cấu kiện mộng gỗ cổ truyền
              </h2>
            </div>
            <p className="text-xs text-[#6f5a4d] mt-1 font-sans">
              Chọn cấu kiện để khảo sát chi tiết quy cách gỗ, kỹ thuật mộng ngàm và công năng chịu tải trong bộ vì rường.
            </p>
          </div>

          {/* Component Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-mono text-xs">
            {COMPONENT_ANATOMY_LIST.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveAnatomyId(item.id)}
                className={`p-3 text-left border cursor-pointer transition-all ${
                  activeAnatomyId === item.id
                    ? 'bg-[#6c4e36] text-white border-[#6c4e36] shadow-xs'
                    : 'bg-[#fbf7f2] text-[#5c4d44] border-[#d6c2b0] hover:bg-[#ede0d4]'
                }`}
              >
                <div className={`text-[10px] ${activeAnatomyId === item.id ? 'text-[#ebdccd]' : 'text-[#8c7b70]'}`}>
                  {item.num}
                </div>
                <div className="font-serif font-medium text-xs truncate mt-0.5">
                  {item.name}
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Inspector Display */}
          <div className="border-2 border-[#d6c2b0] bg-[#faf6f0] p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Photo */}
            <div className="lg:col-span-5 space-y-2">
              <div className="relative aspect-[4/3] bg-stone-900 border border-[#d6c2b0] overflow-hidden">
                <img
                  src={currentAnatomy.imageUrl}
                  alt={currentAnatomy.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#6c4e36] text-white text-[10px] font-mono px-2 py-0.5">
                  {currentAnatomy.num} {currentAnatomy.tag}
                </div>
              </div>
              <p className="text-[11px] font-mono text-[#8c7b70] text-center italic">
                {currentAnatomy.imageAlt}
              </p>
            </div>

            {/* Narrative & Parameter Matrix */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6c4e36] bg-[#ede0d4] px-2 py-0.5">
                  {currentAnatomy.tag}
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#2c221e] mt-1">
                  {currentAnatomy.name}
                </h3>
                <div className="text-xs font-serif italic text-[#6c4e36] mt-0.5">
                  {currentAnatomy.subtitle}
                </div>
                <p className="text-xs md:text-sm text-[#5c4d44] font-sans leading-relaxed mt-3">
                  {currentAnatomy.desc}
                </p>
              </div>

              {/* 4 Technical Parameter Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white border border-[#dfd2c4] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#8c7b70]">Chất liệu gỗ tuyển chọn</span>
                  <div className="font-medium text-xs text-[#2c221e]">{currentAnatomy.wood}</div>
                </div>

                <div className="p-3 bg-white border border-[#dfd2c4] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#8c7b70]">Kỹ thuật mộng liên kết</span>
                  <div className="font-medium text-xs text-[#2c221e]">{currentAnatomy.joint}</div>
                </div>

                <div className="p-3 bg-white border border-[#dfd2c4] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#8c7b70]">Quy cách kích thước</span>
                  <div className="font-medium text-xs text-[#2c221e]">{currentAnatomy.dim}</div>
                </div>

                <div className="p-3 bg-white border border-[#dfd2c4] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#8c7b70]">Nghệ thuật chạm khắc</span>
                  <div className="font-medium text-xs text-[#2c221e]">{currentAnatomy.carving}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 04: Climate & Fengshui Adaptation */}
      {(activeTab === 'overview' || activeTab === 'climate') && (
        <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#ebdccd] pb-3">
            <span className="font-mono text-xs text-[#6c4e36] font-bold">MỤC 04</span>
            <h2 className="text-xl font-serif font-medium text-[#2c221e]">
              Tri thức bản địa: Thích ứng khí hậu &amp; Địa sinh thái
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#ebdccd] p-5 bg-[#fbf7f2] space-y-2">
              <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs">
                01
              </div>
              <h3 className="font-serif font-medium text-base text-[#2c221e]">
                Thoát nước &amp; Kháng lụt ngập
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Nền nhà được đắp đất nện tôn cao 60-80cm và kè đá bờ ao. Các cột gỗ đều đặt trên đá tảng cao cách mặt sân, tránh chân cột bị ẩm mục khi nước lũ dâng ngập tạm thời trong các đợt mưa bão miền Trung.
              </p>
            </div>

            <div className="border border-[#ebdccd] p-5 bg-[#fbf7f2] space-y-2">
              <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs">
                02
              </div>
              <h3 className="font-serif font-medium text-base text-[#2c221e]">
                Kháng áp lực bão cấp 12
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Mái ngói liệt 2 lớp có trọng lượng bản thân rất lớn, tạo tải trọng nén ghì toàn bộ hệ khung gỗ xuống nền. Khi bão to tràn qua, hệ ngói ghì chặt không bị gió lốc lật tung như tôn hay ngói nhẹ.
              </p>
            </div>

            <div className="border border-[#ebdccd] p-5 bg-[#fbf7f2] space-y-2">
              <div className="w-8 h-8 bg-[#6c4e36] text-white flex items-center justify-center font-mono text-xs">
                03
              </div>
              <h3 className="font-serif font-medium text-base text-[#2c221e]">
                Hút gió mát &amp; Cách nhiệt hè
              </h3>
              <p className="text-xs text-[#5c4d44] leading-relaxed">
                Hướng nhà mở về phương Nam hoặc Đông Nam, kết hợp hàng hiên rộng râm mát che chắn nắng hè gay gắt và bức xạ nhiệt. Cửa bức bàn tháo lắp cơ động giúp thông gió xuyên phòng tối đa.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 05: Bibliography & Scholarly Citations */}
      {(activeTab === 'overview' || activeTab === 'sources') && (
        <section className="bg-white border border-[#dfd2c4] p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#ebdccd] pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#6c4e36] font-bold">MỤC 05</span>
              <h2 className="text-xl font-serif font-medium text-[#2c221e]">
                Thư mục học thuật đối chiếu hồ sơ
              </h2>
            </div>
            <button
              onClick={() => onNavigate('nguon-tu-lieu')}
              className="text-xs font-mono text-[#6c4e36] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Xem toàn bộ kho thư tịch &rarr;
            </button>
          </div>

          <div className="space-y-4">
            {BIBLIO_SOURCES.filter(b => b.linkedHouseId === house.id || b.linkedHouseId === 'nha-ruong-hue').map((bib) => (
              <div key={bib.id} className="p-4 bg-[#fbf7f2] border border-[#ebdccd] space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="bg-[#6c4e36] text-white px-2 py-0.5">{bib.code}</span>
                  <span className="text-[#4e5840] font-semibold">{bib.verificationBadge}</span>
                  <span className="text-[#8c7b70]">• {bib.pageCitation}</span>
                </div>
                <h4 className="font-serif font-medium text-base text-[#2c221e]">
                  {bib.title} ({bib.year}) — Tác giả: {bib.authors}
                </h4>
                <p className="text-xs text-[#5c4d44] italic border-l-2 border-[#6c4e36] pl-3 py-1">
                  &ldquo;{bib.usageQuote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
