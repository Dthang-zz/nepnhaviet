import React, { useState, useEffect } from 'react';
import { ARCHITECTURAL_ITEMS, COMPONENT_ANATOMY_ITEMS, BIBLIO_SOURCES } from '../data/architecturalData';
import { PageRoute } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute, itemId?: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const filteredHouses = ARCHITECTURAL_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.provinceLabel.toLowerCase().includes(query) ||
    item.regionLabel.toLowerCase().includes(query) ||
    item.code.toLowerCase().includes(query)
  );

  const filteredComponents = COMPONENT_ANATOMY_ITEMS.filter((comp) =>
    comp.name.toLowerCase().includes(query) ||
    comp.desc.toLowerCase().includes(query) ||
    comp.joint.toLowerCase().includes(query)
  );

  const filteredBiblio = BIBLIO_SOURCES.filter((b) =>
    b.title.toLowerCase().includes(query) ||
    b.authors.toLowerCase().includes(query) ||
    b.usageQuote.toLowerCase().includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#fff8f0] border border-[#d3c4ba] shadow-2xl rounded-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#d3c4ba] bg-[#f9f3eb]">
          <span className="material-symbols-outlined text-[#6f5a4d] text-[22px]">manage_search</span>
          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo kiểu nhà, cấu kiện mộng, vùng miền, ấn bản..."
            className="w-full bg-transparent font-sans text-[15px] text-[#1d1b17] placeholder:text-[#81756c] outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#81756c] hover:text-[#1d1b17]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-[#f3ede5] border border-[#d3c4ba] text-[#6f5a4d] rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Section: Kiểu nhà truyền thống */}
          {filteredHouses.length > 0 && (
            <div>
              <div className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#6f5a4d] mb-2 flex items-center justify-between">
                <span>Hồ sơ kiến trúc ({filteredHouses.length})</span>
                <span className="text-[#81756c]">Khám phá chi tiết</span>
              </div>
              <div className="space-y-1">
                {filteredHouses.slice(0, 4).map((house) => (
                  <div
                    key={house.id}
                    onClick={() => {
                      onNavigate('ho-so', house.id);
                      onClose();
                    }}
                    className="p-2.5 bg-[#f3ede5]/60 hover:bg-[#faddcc]/40 rounded border border-transparent hover:border-[#d3c4ba] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#6c4e36] text-[20px]">
                        museum
                      </span>
                      <div>
                        <div className="font-serif text-[15px] text-[#6c4e36] font-semibold group-hover:text-[#87664c]">
                          {house.name}
                        </div>
                        <div className="font-sans text-[11px] text-[#6f5a4d]">
                          {house.code} • {house.provinceLabel} • {house.materials}
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-[#6f5a4d] opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Cấu kiện vì kèo mộng */}
          {filteredComponents.length > 0 && (
            <div>
              <div className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#6f5a4d] mb-2 flex items-center justify-between">
                <span>Cấu kiện vì rường &amp; Mộng gỗ ({filteredComponents.length})</span>
                <span className="text-[#81756c]">Giải phẫu</span>
              </div>
              <div className="space-y-1">
                {filteredComponents.slice(0, 3).map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => {
                      onNavigate('ho-so', 'nha-ruong-hue');
                      onClose();
                    }}
                    className="p-2.5 bg-[#f3ede5]/60 hover:bg-[#dbe7c7]/40 rounded border border-transparent hover:border-[#d3c4ba] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#4e5840] text-[20px]">
                        architecture
                      </span>
                      <div>
                        <div className="font-serif text-[14px] text-[#1d1b17] font-semibold group-hover:text-[#4e5840]">
                          {comp.name}
                        </div>
                        <div className="font-sans text-[11px] text-[#6f5a4d]">
                          {comp.subtitle} • {comp.dim}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-sans font-bold text-[#4e5840] bg-[#dbe7c7]/50 px-2 py-0.5 rounded">
                      Xem giải phẫu
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Thư mục nguồn */}
          {filteredBiblio.length > 0 && (
            <div>
              <div className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#6f5a4d] mb-2">
                Tài liệu &amp; Chuyên khảo ({filteredBiblio.length})
              </div>
              <div className="space-y-1">
                {filteredBiblio.slice(0, 2).map((bib) => (
                  <div
                    key={bib.id}
                    onClick={() => {
                      onNavigate('nguon-tu-lieu');
                      onClose();
                    }}
                    className="p-2.5 bg-[#f3ede5]/60 hover:bg-[#f9f3eb] rounded border border-transparent hover:border-[#d3c4ba] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#6c4e36] text-[20px]">
                        menu_book
                      </span>
                      <div>
                        <div className="font-serif text-[14px] text-[#6c4e36] font-semibold">
                          {bib.title} ({bib.year})
                        </div>
                        <div className="font-sans text-[11px] text-[#6f5a4d]">
                          {bib.authors} • {bib.code}
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-[#6f5a4d] opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredHouses.length === 0 && filteredComponents.length === 0 && filteredBiblio.length === 0 && (
            <div className="text-center py-8 space-y-2">
              <span className="material-symbols-outlined text-[36px] text-[#81756c]">search_off</span>
              <p className="font-serif text-[16px] text-[#6c4e36]">Không tìm thấy dữ liệu phù hợp</p>
              <p className="font-sans text-[12px] text-[#6f5a4d]">
                Thử tìm các từ khóa: &quot;nhà rường&quot;, &quot;cột cái&quot;, &quot;mộng sập&quot;, &quot;Phan Thuận An&quot;, v.v.
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#ede7df] border-t border-[#d3c4ba] flex items-center justify-between text-[11px] font-sans text-[#6f5a4d]">
          <span>Gợi ý: Nhấn <kbd className="font-mono bg-[#f3ede5] px-1 py-0.5 border border-[#d3c4ba] rounded">ESC</kbd> để đóng</span>
          <button
            onClick={() => {
              onNavigate('hoi-dap-ai');
              onClose();
            }}
            className="text-[#6c4e36] hover:underline flex items-center gap-1 font-medium"
          >
            <span>Hỏi đáp chuyên sâu với Nếp Nhà Việt AI</span>
            <span className="material-symbols-outlined text-[14px]">smart_toy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
