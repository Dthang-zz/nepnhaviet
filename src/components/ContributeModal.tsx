import React, { useState } from 'react';

interface ContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContributeModal: React.FC<ContributeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: 'dinh-chinh',
    dossierCode: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-[#fff8f0] border border-[#d3c4ba] shadow-2xl rounded-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3c4ba] bg-[#f9f3eb]">
          <div className="flex items-center gap-2 text-[#6c4e36]">
            <span className="material-symbols-outlined text-[24px]">publish</span>
            <div>
              <h2 className="font-serif text-[18px] font-semibold text-[#6c4e36] leading-tight">
                Đóng góp tư liệu &amp; Hiệu đính di sản
              </h2>
              <span className="font-sans text-[11px] text-[#6f5a4d] uppercase tracking-wider block">
                Chương trình lưu trữ mở phi lợi nhuận
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#81756c] hover:text-[#1d1b17] p-1 rounded-md"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#dbe7c7] text-[#4e5840] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-serif text-[20px] font-semibold text-[#6c4e36]">
              Tiếp nhận tư liệu thành công!
            </h3>
            <p className="font-sans text-[14px] text-[#4f453d] max-w-md mx-auto leading-relaxed">
              Hội đồng giám định khoa học của Nếp Nhà Việt sẽ đối chiếu thông tin đóng góp với cơ sở dữ liệu thực địa và thông báo qua email của quý vị.
            </p>
            <div className="pt-2 font-mono text-[12px] text-[#6f5a4d]">
              Mã biên nhận: NNV-REC-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 font-sans text-sm">
            <p className="text-[13px] text-[#4f453d] leading-relaxed">
              Chào đón các bản vẽ trắc đạc, hình ảnh điền dã mộng gỗ, hoặc đề xuất hiệu đính thuật ngữ từ quý học giả, kiến trúc sư và sinh viên.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6f5a4d] mb-1">
                  Họ và tên *
                </label>
                <input
                  required
                  type="text"
                  placeholder="KTS. Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#1d1b17] focus:outline-none focus:border-[#6c4e36]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6f5a4d] mb-1">
                  Email liên hệ *
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@viennghiencuu.vn"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#1d1b17] focus:outline-none focus:border-[#6c4e36]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6f5a4d] mb-1">
                  Đơn vị / Trường / Viện
                </label>
                <input
                  type="text"
                  placeholder="Đại học Kiến trúc / Hội Di sản"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#1d1b17] focus:outline-none focus:border-[#6c4e36]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6f5a4d] mb-1">
                  Mục đích đóng góp
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#1d1b17] focus:outline-none focus:border-[#6c4e36]"
                >
                  <option value="dinh-chinh">Đính chính / Hiệu đính thuật ngữ</option>
                  <option value="anh-thuc-dia">Gửi ảnh chụp điền dã mộng gỗ</option>
                  <option value="ban-ve">Cung cấp bản vẽ trắc đạc 2D/3D</option>
                  <option value="hop-tac">Hợp tác nghiên cứu học thuật</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6f5a4d] mb-1">
                Nội dung chi tiết &amp; Nguồn tài liệu đối chiếu *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Ghi rõ tên ngôi nhà, địa phương, niên đại hoặc số trang trong thư tịch dẫn chứng..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 bg-[#f9f3eb] border border-[#d3c4ba] rounded text-[#1d1b17] focus:outline-none focus:border-[#6c4e36]"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#d3c4ba]">
              <span className="text-[11px] text-[#6f5a4d] italic">
                * Cam kết tôn trọng bản quyền học thuật.
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#d3c4ba] text-[#4f453d] hover:bg-[#f3ede5] rounded font-medium"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#6c4e36] text-white hover:bg-[#87664c] rounded font-medium shadow-xs"
                >
                  Gửi dữ liệu
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
