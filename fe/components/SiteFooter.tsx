import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

const footerNav = [
  { label: "Beranda", href: "/" },
  { label: "Struktur Organisasi", href: "/organisasi" },
  { label: "Sejarah Pemulihan", href: "/sejarah" },
  { label: "Warta & Media", href: "/wardia" },
  { label: "Galeri Dokumentasi", href: "/galeri" },
];

const footerProgram = [
  { label: "Paket Susur Perahu Mangrove", href: "/ekowisata" },
  { label: "Adopsi & Tanam Bibit", href: "/ekowisata" },
  { label: "Produk Olahan & UMKM Lokal", href: "/umkm" },
  { label: "Studi Lapangan & Riset", href: "/ekowisata" },
  { label: "Kontak & Reservasi", href: "/kontak" },
];

const linkClass = "text-stone-300/85 hover:text-white transition-colors flex items-center gap-2 text-sm";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#062319] text-stone-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900/90 border border-emerald-500/25 flex items-center justify-center text-amber-400 shrink-0">
                <span className="material-symbols-outlined text-[20px]">forest</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight">{SITE.name}</span>
                <span className="text-[11px] font-medium text-emerald-300/80 uppercase tracking-wider">
                  Pesisir Kaliwlingi, Brebes
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-300/80 leading-relaxed">
              Inisiatif konservasi hutan bakau berbasis komunitas, restorasi pesisir pantai utara Jawa, serta
              pemberdayaan ekowisata dan ekonomi lokal masyarakat Dukuh Pandansari, Brebes.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: "public", label: "Facebook", href: SITE.facebook },
                { icon: "photo_camera", label: "Instagram", href: SITE.instagram },
                { icon: "chat", label: "WhatsApp", href: waLink() },
              ].map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 flex items-center justify-center text-stone-200 hover:text-white transition-all"
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Navigasi Utama</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    <span className="material-symbols-outlined text-[15px] text-emerald-400/70">chevron_right</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Program &amp; Wisata</h3>
            <ul className="flex flex-col gap-2.5">
              {footerProgram.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    <span className="material-symbols-outlined text-[15px] text-emerald-400/70">chevron_right</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Kontak &amp; Alamat</h3>
            <div className="flex flex-col gap-3 text-sm text-stone-300/85">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-amber-400 shrink-0 mt-0.5">
                  location_on
                </span>
                <p className="leading-relaxed">{SITE.address}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-amber-400 shrink-0">call</span>
                <span>{SITE.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-amber-400 shrink-0">mail</span>
                <span>{SITE.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-amber-400 shrink-0">schedule</span>
                <span>{SITE.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {SITE.name}. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-white transition-colors" href="/kontak">
              Bantuan Wisata
            </Link>
            <a
              className="hover:text-white transition-colors"
              href={waLink()}
              rel="noopener noreferrer"
              target="_blank">
              WhatsApp Sekretariat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
