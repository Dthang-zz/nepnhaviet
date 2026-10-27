import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, itemId?: string) => void;
  onOpenContribute?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f3ede5] border-t border-[#d3c4ba] mt-16">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Project Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#6c4e36] text-[24px]">
                temple_buddhist
              </span>
              <span className="font-serif text-[18px] uppercase text-[#6c4e36] font-semibold tracking-wide">
                NẾP NHÀ VIỆT
              </span>
            </div>
            <p className="font-sans text-[13px] text-[#4f453d] leading-relaxed text-justify">
              Kho lưu trữ học thuật số và đồ bản kiến trúc nhà ở dân gian truyền thống Việt Nam. Dự án thu thập, bảo tồn và số hóa các cấu kiện vì kèo, thước tầm và không gian sống xuyên suốt bốn phương diện: Bắc Bộ, Miền Trung, Nam Bộ và Tây Nguyên.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="px-2 py-0.5 border border-[#d3c4ba] font-sans text-[11px] uppercase tracking-wider text-[#6f5a4d] bg-[#f9f3eb]">
                BẢN THẢO QUỐC GIA
              </span>
              <span className="px-2 py-0.5 border border-[#d3c4ba] font-sans text-[11px] uppercase tracking-wider text-[#6f5a4d] bg-[#f9f3eb]">
                OPEN ACCESS
              </span>
            </div>
          </div>

          {/* Col 2: Typology Directory */}
          <div className="space-y-4">
            <h3 className="font-serif text-[17px] font-semibold text-[#6c4e36] pb-1 border-b border-[#d3c4ba]/60">
              Danh mục tra cứu
            </h3>
            <ul className="space-y-2.5 font-sans text-[13px] text-[#4f453d]">
              <li>
                <button
                  onClick={() => onNavigate('ho-so', 'nha-ruong-hue')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6c4e36]/60 rounded-full shrink-0"></span>
                  <span>Nhà rường Huế &amp; Phủ đệ cố đô</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ho-so', 'nha-ba-gian-bac-bo')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6c4e36]/60 rounded-full shrink-0"></span>
                  <span>Nhà ba gian đồng bằng Bắc Bộ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ho-so', 'nha-san-tay-muong')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6c4e36]/60 rounded-full shrink-0"></span>
                  <span>Nhà sàn truyền thống Tày - Mường</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ho-so', 'nha-dai-e-de')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6c4e36]/60 rounded-full shrink-0"></span>
                  <span>Nhà dài Ê Đê vùng cao nguyên</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ho-so', 'nha-trinh-tuong-ha-nhi')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6c4e36]/60 rounded-full shrink-0"></span>
                  <span>Nhà trình tường đất Hà Nhì</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic & Methods */}
          <div className="space-y-4">
            <h3 className="font-serif text-[17px] font-semibold text-[#6c4e36] pb-1 border-b border-[#d3c4ba]/60">
              Học thuật &amp; Phương pháp
            </h3>
            <ul className="space-y-2.5 font-sans text-[13px] text-[#4f453d]">
              <li>
                <button
                  onClick={() => onNavigate('nguon-tu-lieu')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6f5a4d]/60 rounded-full shrink-0"></span>
                  <span>Tiêu chuẩn định danh cấu kiện</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nguon-tu-lieu')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6f5a4d]/60 rounded-full shrink-0"></span>
                  <span>Thẩm định nguồn tư liệu khảo sát</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kham-pha')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6f5a4d]/60 rounded-full shrink-0"></span>
                  <span>Bản vẽ 2D/3D &amp; Sơ đồ trắc đạc</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gioi-thieu')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6f5a4d]/60 rounded-full shrink-0"></span>
                  <span>Quy chế bản quyền tư liệu số</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gioi-thieu')}
                  className="hover:text-[#6c4e36] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#6f5a4d]/60 rounded-full shrink-0"></span>
                  <span>Quy trình khảo tả thực địa</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Mandatory Student & Project Info Box */}
          <div className="space-y-4">
            <h3 className="font-serif text-[17px] font-semibold text-[#6c4e36] pb-1 border-b border-[#d3c4ba]/60">
              Thông tin sinh viên &amp; Dự án
            </h3>
            <div className="p-4 bg-[#f9f3eb] border border-[#d3c4ba] rounded space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-[#6c4e36]">
                <span className="material-symbols-outlined text-[20px]">school</span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider">
                  Báo cáo thực tập sinh
                </span>
              </div>
              <p className="font-sans text-[13px] text-[#4f453d] leading-snug">
                Sản phẩm thực tập của <strong>Tạ Đức Thắng</strong>, mã sinh viên <strong>PH60330</strong>.
              </p>
              <p className="font-sans text-[12px] text-[#6f5a4d] border-t border-[#d3c4ba]/50 pt-2 leading-relaxed">
                Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH — Dự án văn hóa &amp; xã hội phi lợi nhuận hướng tới bảo tồn bền vững.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-4 border-t border-[#d3c4ba] flex flex-col md:flex-row items-center justify-between gap-2 font-sans text-[12px] text-[#6f5a4d]">
          <div className="flex items-center gap-1 text-center md:text-left">
            <span>© 2024 Nếp Nhà Việt. Toàn bộ quyền sở hữu trí tuệ về đồ án kiến trúc và phân tích mô hình.</span>
          </div>
          <div className="text-center md:text-right text-[#4f453d]/80">
            Bản quyền tư liệu viện bảo tàng và viện nghiên cứu kiến trúc Việt Nam.
          </div>
        </div>
      </div>
    </footer>
  );
};
