import Link from "next/link";
import { SITE } from "@/lib/site";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami & Organisasi", href: "/organisasi" },
  { label: "Sejarah Konservasi", href: "/sejarah" },
  { label: "Majalah & Publikasi", href: "/majalah" },
  { label: "Kabar & Artikel Edukasi", href: "/artikel" },
  { label: "Galeri Dokumentasi", href: "/galeri" },
];

const footerProgram = [
  { label: "Paket Susur Perahu Mangrove", href: "/ekowisata" },
  { label: "Adopsi & Tanam Bibit", href: "/ekowisata" },
  { label: "Produk Olahan & UMKM Lokal", href: "/umkm" },
  { label: "Studi Lapangan & Riset", href: "/ekowisata" },
  { label: "Dokumenter & Video Edukasi", href: "/video" },
];

const linkClass = "hover:text-on-primary transition-colors flex items-center gap-2";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-primary-container text-on-primary relative overflow-hidden">
      <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
        <svg
          className="relative block w-full h-8 text-background"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120">
          <path
            d="M0,0 C150,90 400,100 600,40 C800,-20 1000,80 1200,20 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="w-full px-space-md lg:px-margin pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">forest</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">{SITE.name}</span>
                <span className="font-label-sm text-label-sm text-on-primary-container">Pesisir Kaliwlingi</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Inisiatif konservasi hutan bakau berbasis komunitas, restorasi pesisir pantai utara Jawa, serta
              pemberdayaan ekowisata dan ekonomi lokal masyarakat Dukuh Pandansari, Brebes.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              {[
                { icon: "public", label: "Facebook", href: SITE.facebook },
                { icon: "photo_camera", label: "Instagram", href: SITE.instagram },
                { icon: "smart_display", label: "YouTube", href: SITE.youtube },
              ].map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-all"
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-semibold tracking-wide">
              Navigasi Utama
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-primary-container">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-semibold tracking-wide">
              Program &amp; Wisata
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-primary-container">
              {footerProgram.map((l) => (
                <li key={l.label}>
                  <Link className={linkClass} href={l.href}>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-semibold tracking-wide">
              Kontak &amp; Alamat
            </h3>
            <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-primary-container">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed flex-shrink-0 mt-0.5">
                  location_on
                </span>
                <p>{SITE.address}</p>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed flex-shrink-0">call</span>
                <span>{SITE.phone}</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed flex-shrink-0">mail</span>
                <span>{SITE.email}</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed flex-shrink-0">
                  schedule
                </span>
                <span>{SITE.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary-container">
          <p>© 2026 MANGROVE SARI. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-lg">
            <Link className="hover:text-on-primary transition-colors" href="/kebijakan-privasi">
              Kebijakan Privasi
            </Link>
            <Link className="hover:text-on-primary transition-colors" href="/syarat-ketentuan">
              Syarat &amp; Ketentuan
            </Link>
            <Link className="hover:text-on-primary transition-colors" href="/kontak">
              Bantuan Wisata
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
