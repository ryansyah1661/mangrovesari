import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#1e7044] hover:bg-secondary text-on-secondary px-5 py-3.5 rounded-full shadow-[0_12px_32px_-4px_rgba(31,77,58,0.3)] transition-all duration-300 hover:scale-105"
      href={waLink("Halo Pengelola Mangrove Sari, saya ingin konsultasi wisata dan bibit")}
      rel="noopener noreferrer"
      target="_blank">
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <span className="material-symbols-outlined text-[20px] text-on-secondary">forum</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-label-sm text-label-sm leading-none text-secondary-fixed">WhatsApp Resmi</span>
        <span className="font-title-md text-title-md leading-tight font-bold text-on-secondary">
          Konsultasi Wisata &amp; Bibit
        </span>
      </div>
    </a>
  );
}
