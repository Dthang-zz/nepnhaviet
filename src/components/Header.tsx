import React, { useState } from 'react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, itemId?: string) => void;
  onOpenSearch: () => void;
  onOpenContribute: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenContribute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'trang-chu', label: 'Trang chủ' },
    { route: 'kham-pha', label: 'Khám phá' },
    { route: 'hoi-dap-ai', label: 'Hỏi đáp AI' },
    { route: 'nguon-tu-lieu', label: 'Nguồn tư liệu' },
    { route: 'gioi-thieu', label: 'Giới thiệu' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fff8f0]/95 backdrop-blur-md border-b border-[#d3c4ba]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div
          onClick={() => {
            onNavigate('trang-chu');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 shrink-0 cursor-pointer group select-none"
        >
          <div className="p-1 bg-[#f3ede5] border border-[#d3c4ba] shadow-xs group-hover:border-[#6c4e36] transition-colors">
            <img
              alt="Nếp Nhà Việt Archive Logo"
              className="w-9 h-9 object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VC5J3OIV5Zsxdjg0rBkDPTlwW9mOkQFyYRHgBfVzBPY86W0bI-oDtbeLqn5ArJLpVh_dPsK9HxZ-w23ssG7l4Jzf2AZn8IX-AZ0l8s3dgEWf1EYcPxd1owPEARevzx19fRQaFTCNSKoi5goDDlvweMo8a4idCZDPVKBTRYbHpKeYwvlSbf37Uf7xBTXfEIpimeTUE3Qv83GevlAqSb_Pv28xV2PkSdEumIMuxmKHP8jK-o_f3cia5lJw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-[19px] md:text-[21px] tracking-wide uppercase text-[#6c4e36] leading-none font-bold">
              NẾP NHÀ VIỆT
            </span>
            <span className="font-sans text-[11px] md:text-[12px] tracking-normal text-[#6f5a4d] font-normal mt-1 leading-none">
              Hồ sơ số kiến trúc nhà ở truyền thống
            </span>
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-sans text-[14px] xl:text-[15px] transition-all h-full flex items-center px-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-[#6c4e36] font-semibold border-[#6c4e36]'
                    : 'text-[#4f453d] font-normal border-transparent hover:text-[#6c4e36] hover:border-[#6c4e36]/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#f9f3eb] border border-[#d3c4ba] rounded hover:border-[#81756c] transition-colors text-[#4f453d] cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-[#6f5a4d]">search</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#6f5a4d]">
              Truy xuất hồ sơ
            </span>
            <kbd className="font-sans text-[10px] px-1.5 py-0.5 bg-[#f3ede5] border border-[#d3c4ba] text-[#6f5a4d] rounded font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Heritage Tag */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 border border-[#4e5840]/30 bg-[#dbe7c7]/30 text-[#4e5840] rounded text-[11px] font-sans uppercase font-medium">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span>Dự án Di sản Số</span>
          </div>

          {/* Contribute Button */}
          <button
            onClick={onOpenContribute}
            className="inline-flex items-center px-3.5 py-2 bg-[#6c4e36] text-white font-sans text-[13px] font-medium rounded hover:bg-[#87664c] transition-colors shadow-xs cursor-pointer"
            type="button"
          >
            Đóng góp tư liệu
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6c4e36] hover:bg-[#f3ede5] rounded transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f0] border-b border-[#d3c4ba] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-3 border-b border-[#d3c4ba]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between p-2.5 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#6f5a4d] text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">search</span>
                <span>Tìm kiếm hồ sơ, cấu kiện...</span>
              </div>
              <kbd className="text-[10px] px-1.5 py-0.5 bg-[#f3ede5] border border-[#d3c4ba] rounded">Ctrl K</kbd>
            </button>
          </div>
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => {
                onNavigate(item.route);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left py-2.5 px-3 rounded font-sans text-sm flex items-center justify-between ${
                currentRoute === item.route
                  ? 'bg-[#6c4e36] text-white font-medium'
                  : 'text-[#1d1b17] hover:bg-[#f3ede5]'
              }`}
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
