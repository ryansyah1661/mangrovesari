"use client";

import React, { useState } from "react";

const navLinks = [
  { label: "Majalah", href: "/majalah" },
  { label: "Artikel", href: "/artikel" },
  { label: "Ekowisata", href: "/ekowisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Video", href: "/video" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

const navLinkClass =
  "px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all";

const features = [
  {
    icon: "sailing",
    iconBg: "bg-secondary-container/40",
    iconColor: "text-secondary",
    label: "Ekowisata Pesisir",
    labelColor: "text-secondary",
    title: "Aneka Ragam Jelajah Hutan Mangrove",
    text: "Tracking mangrove di atas jembatan kayu sepanjang estuari, sensasi susur perahu tradisional, belajar membatik mangrove, budidaya kepiting soka, pentas tarian lokal, serta kuliner pesisir khas Brebes.",
    link: "Pelajari Selengkapnya",
    linkColor: "text-secondary hover:text-primary",
  },
  {
    icon: "shopping_bag",
    iconBg: "bg-tertiary-fixed/60",
    iconColor: "text-tertiary-container",
    label: "Pemberdayaan Warga",
    labelColor: "text-tertiary-container",
    title: "Paket UMKM Spesial Untuk Anda",
    text: "Produk unik hasil karya tangan dan pemberdayaan masyarakat Dukuh Pandansari seperti sirup buah pidada/bogem kaya vitamin, keripik daun mangrove renyah, kopi mangrove, serta suvenir ramah lingkungan.",
    link: "Katalog Produk UMKM",
    linkColor: "text-tertiary-container hover:text-tertiary",
  },
  {
    icon: "verified_user",
    iconBg: "bg-secondary-fixed/50",
    iconColor: "text-primary",
    label: "Akuntabilitas & Legalitas",
    labelColor: "text-primary",
    title: "Legalitas Badan Usaha & Organisasi",
    text: "Tata kelola transparan di bawah Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) Mangrove Sari, memiliki SK resmi desa & kementerian, kemitraan BUMN, struktur kepengurusan terpadu, dan SOP keamanan perahu.",
    link: "Struktur & Dokumen",
    linkColor: "text-primary hover:text-secondary",
  },
];

const storyTags = [
  "Restorasi 440+ Ha Lahan Rusak",
  "Mandiri Ekonomi Berbasis UMKM",
  "Laboratorium Lapangan Nasional",
  "Penerima Kalpataru Jawa Tengah",
];

const pillars = [
  {
    icon: "park",
    iconBg: "bg-secondary-container/50",
    iconColor: "text-secondary",
    label: "01. Rehabilitasi Hutan",
    labelColor: "text-secondary",
    title: "4.479.500 Batang di 440 Ha",
    text: "Pemulihan sabuk hijau pesisir membentang melindungi pemukiman warga dari ancaman abrasi rob Laut Jawa.",
  },
  {
    icon: "school",
    iconBg: "bg-tertiary-fixed/60",
    iconColor: "text-tertiary-container",
    label: "02. Pelatihan & Keterampilan",
    labelColor: "text-tertiary-container",
    title: "Olahan Pangan & Hasil Hutan",
    text: "Pemberdayaan ibu-ibu pesisir dalam mengolah buah bogem menjadi sirup, dodol, dan keripik daun bakau.",
  },
  {
    icon: "theater_comedy",
    iconBg: "bg-secondary-fixed/50",
    iconColor: "text-primary",
    label: "03. Seni Kebudayaan",
    labelColor: "text-primary",
    title: "Kampanye Seni Budaya Pesisir",
    text: "Pementasan tari tradisi pesisir, teater rakyat anak nelayan, dan festival tahunan.",
  },
  {
    icon: "flutter_dash",
    iconBg: "bg-secondary-container/50",
    iconColor: "text-secondary",
    label: "04. Dampak Lingkungan",
    labelColor: "text-secondary",
    title: "Ekosistem Pulih Alami",
    text: "Peningkatan jumlah populasi burung migran dan biota laut seiring pulihnya hutan mangrove di sepanjang pesisir.",
  },
  {
    icon: "set_meal",
    iconBg: "bg-tertiary-fixed/60",
    iconColor: "text-tertiary-container",
    label: "05. Sosial Ekonomi",
    labelColor: "text-tertiary-container",
    title: "Pendapatan Nelayan Naik",
    text: "Peningkatan hasil tangkapan udang liar, kepiting, dan ikan di kawasan hutan mangrove.",
  },
  {
    icon: "science",
    iconBg: "bg-secondary-fixed/50",
    iconColor: "text-primary",
    label: "06. Inovasi & Sains",
    labelColor: "text-primary",
    title: "Riset Sumberdaya Pesisir",
    text: "Pemanfaatan terpadu air payau, penerapan silvofishery, dan fasilitas stasiun kajian bagi akademisi dalam maupun luar negeri.",
  },
];

const stats = [
  { value: "250+", label: "Pekerja Lokal", note: "Diberdayakan Aktif" },
  { value: "30+", label: "Usaha Rakyat", note: "UMKM Binaan Lestari" },
  { value: "70+", label: "Mitra Lembaga", note: "NGO & Perusahaan CSR" },
  { value: "4,4 Jt", label: "Batang Mangrove", note: "26 Jenis di 440 Ha" },
  { value: "30+", label: "Negara Asal", note: "Wisatawan Mancanegara" },
  { value: "35+", label: "Riset & Jurnal", note: "Publikasi Internasional" },
];

const team = [
  {
    role: "Ketua Pengelola",
    name: "Rusjan",
    desc: "Tokoh inisiator awal restorasi pesisir sejak 2005 dan penggerak utama gotong royong konservasi warga Pandansari.",
  },
  {
    role: "Koordinator Lapangan",
    name: "Sugiarto",
    desc: "Penanggung jawab operasional boardwalk, navigasi perahu susur sungai, dan keselamatan wisatawan kawasan.",
  },
  {
    role: "Divisi Riset & Pembibitan",
    name: "Mashadi",
    desc: "Pakar pembibitan tanaman mangrove lokal, fasilitator adopsi bibit, dan instruktur penelitian universitas.",
  },
  {
    role: "Bendahara Organisasi",
    name: "Supardi",
    desc: "Menjaga transparansi tata kelola arus kas tiket, dana hibah pembibitan, serta bagi hasil usaha warga.",
  },
  {
    role: "Humas & Kemitraan",
    name: "Abdul Kamid",
    desc: "Jembatan komunikasi dengan pemangku kebijakan, agen perjalanan, dan asosiasi pegiat ekowisata.",
  },
  {
    role: "Pengembangan Usaha Wisata",
    name: "Jarodin",
    desc: "Inovator paket wisata susur sungai, kurator suvenir kearifan lokal, dan pemasaran gerai kuliner pesisir.",
  },
];

// Ganti `image` dengan path foto di /public (mis. "/berita/kepiting.jpg") kalau sudah ada.
const news: {
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
}[] = [
  {
    tag: "Artikel",
    tagColor: "bg-secondary text-on-secondary",
    date: "18 Februari 2026",
    title: "Pelepasliaran 500 Bibit Kepiting Bakau Bersama Mahasiswa",
    excerpt:
      "Langkah konkret menjaga rantai makanan ekosistem rawa pasang surut dan menjamin ketersediaan tangkapan nelayan.",
  },
  {
    tag: "Ekowisata",
    tagColor: "bg-tertiary-container text-on-tertiary",
    date: "10 Februari 2026",
    title: "Jalur Boardwalk Kayu Baru Sepanjang 800 Meter Resmi Dibuka",
    excerpt:
      "Semakin menyusuri kanopi hijau pohon bakau kini semakin nyaman dan ramah untuk keluarga dengan anak-anak.",
  },
  {
    tag: "Pemberdayaan",
    tagColor: "bg-primary text-on-primary",
    date: "28 Januari 2026",
    title: "Inovasi Sirup Bogem Mangrove Sari Raih Penghargaan UMKM",
    excerpt: "Produk olahan buah mangrove karya kelompok wanita tani Dukuh Pandansari berhasil menembus pasar modern.",
  },
];

const partners = [
  { icon: "account_balance", name: "Kementerian LHK" },
  { icon: "location_city", name: "Pemprov Jateng" },
  { icon: "school", name: "UNDIP Semarang" },
  { icon: "school", name: "IPB University" },
  { icon: "business", name: "Pertamina Foundation" },
  { icon: "public", name: "USAID Indonesia" },
  { icon: "water", name: "BPDAS Pemali" },
  { icon: "volunteer_activism", name: "Yayasan KEHATI" },
];

const footerNav = [
  "Home",
  "Tentang Kami & Organisasi",
  "Sejarah Konservasi",
  "Majalah & Publikasi",
  "Galeri Dokumentasi",
];

const footerProgram = [
  "Paket Susur Perahu Mangrove",
  "Adopsi & Tanam Bibit",
  "Produk Olahan & UMKM Lokal",
  "Studi Lapangan & Riset",
  "Dokumentasi & Video Edukasi",
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_12px_32px_-4px_rgba(31,77,58,0.18)]">
        <div className="h-20 w-full px-space-md lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">forest</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-primary leading-tight font-bold tracking-tight">
                MANGROVE SARI
              </span>
              <span className="font-label-sm text-label-sm text-on-primary-container tracking-wider uppercase hidden sm:block">
                Ekowisata &amp; Konservasi Pesisir Brebes
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-space-xs">
            <a
              className="px-space-md py-space-sm bg-secondary text-on-secondary font-title-md rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              href="#">
              Home
            </a>
            <a className={navLinkClass} href="#">
              Majalah
            </a>
            <div className="relative group">
              <button className={`${navLinkClass} flex items-center gap-1`} type="button">
                Profile
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col w-48 bg-primary rounded-xl shadow-[0_12px_32px_-4px_rgba(31,77,58,0.25)] p-space-xs z-50">
                {["Organisasi", "Sejarah"].map((item) => (
                  <a
                    key={item}
                    className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-primary-container hover:bg-primary-container hover:text-on-primary transition-all"
                    href="#">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.slice(1).map((link) => (
              <a key={link.label} className={navLinkClass} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm">
            <div className="hidden md:flex items-center gap-space-xs">
              <a
                aria-label="Facebook Mangrove Sari"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
                href="https://www.facebook.com/Dewimangrovesari"
                rel="noopener noreferrer"
                target="_blank">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Instagram Mangrove Sari"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
                href="https://www.instagram.com/dewimangrovesari"
                rel="noopener noreferrer"
                target="_blank">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
            </div>
            <a
              className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all font-label-md text-label-md shadow-[0_4px_20px_-2px_rgba(31,77,58,0.12)]"
              href="https://wa.me/6281234567890"
              rel="noopener noreferrer"
              target="_blank">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp</span>
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <button
              aria-label="Menu Utama"
              className="xl:hidden p-2 rounded-lg text-on-primary hover:bg-surface-container-lowest/10"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="material-symbols-outlined text-[24px]">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-primary p-space-md flex flex-col gap-space-xs border-t border-surface-container-lowest/10">
            <a className="px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary" href="#">
              Home
            </a>
            {["Majalah", "Organisasi", "Sejarah", "Artikel", "Ekowisata", "UMKM", "Video", "Galeri", "Kontak"].map(
              (item) => (
                <a
                  key={item}
                  className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary"
                  href="#">
                  {item}
                </a>
              ),
            )}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* 1. HERO */}
          <section className="relative w-full -mt-20 overflow-hidden bg-primary text-on-primary min-h-[942px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover object-center scale-105 duration-1000 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I"
                alt="Hutan mangrove Mangrove Sari"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary/95"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-space-md lg:px-margin pt-36 pb-28 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm mb-space-lg shadow-sm border border-secondary-fixed/20">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">eco</span>
                <span>Kawasan Konservasi Pesisir &amp; Ekowisata Berbasis Warga</span>
              </div>

              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary max-w-4xl tracking-tight mb-space-md font-semibold leading-[1.15]">
                Mangrove Sari Pelestari Hutan Pesisir
              </h1>

              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-space-xl font-normal leading-relaxed">
                Konservasi Hutan Pesisir Berbasis Masyarakat. Bertahan Untuk Bumi, Berkembang Bersama Warga Dukuh
                Pandansari, Kaliwlingi, Brebes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-tertiary-container hover:bg-[#8f3c02] text-on-tertiary font-title-md text-title-md transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(117,48,0,0.4)] hover:shadow-lg hover:-translate-y-0.5"
                  href="#kisah">
                  <span>Tentang Kami</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-title-md text-title-md transition-all duration-300 shadow-sm border border-surface-container-lowest/25"
                  href="#pilar">
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  <span>Jelajahi Paket Wisata</span>
                </a>
              </div>

              <div className="mt-space-xl pt-space-lg border-t border-surface-container-lowest/10 flex flex-wrap items-center justify-center gap-space-lg text-on-primary-container font-label-sm text-label-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                  <span>Legalitas SK Desa &amp; Kementerian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">nature_people</span>
                  <span>440 Hektar Hutan Terjaga</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">groups</span>
                  <span>250+ Nelayan &amp; Warga Terberdayakan</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. THREE FEATURE CARDS */}
          <section className="relative z-20 w-full px-space-md lg:px-margin -mt-16 md:-mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex flex-col gap-space-sm">
                    <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-space-xs`}>
                      <span className={`material-symbols-outlined text-[28px] ${f.iconColor}`}>{f.icon}</span>
                    </div>
                    <span className={`font-label-sm text-label-sm ${f.labelColor} uppercase tracking-wider`}>
                      {f.label}
                    </span>
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">{f.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.text}</p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-surface-container">
                    <a
                      className={`inline-flex items-center gap-1 font-title-md text-title-md ${f.linkColor} transition-colors group`}
                      href="#">
                      <span>{f.link}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. STORY */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-background" id="kisah">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(31,77,58,0.12)]">
                  <img
                    className="w-full h-[460px] object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c"
                    alt="Warga menanam mangrove"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-surface-container-high max-w-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                    <div>
                      <span className="block font-title-md text-title-md text-primary font-bold">Sejak 2005</span>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        Titik Nol Kebangkitan Pandansari
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-fixed font-label-sm text-label-sm tracking-wide">
                  <span className="material-symbols-outlined text-[15px] text-secondary">history_edu</span>
                  <span>JEJAK RESTORASI &amp; HARAPAN</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold leading-tight">
                  Dari Tambak Terpuruk Menuju Desa Wisata Inspiratif: Kisah Kebangkitan Dewi Mangrove Sari Brebes
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Dukuh Pandansari di Desa Kaliwlingi dulunya luluh lantak diterjang abrasi pantai utara yang
                  menenggelamkan ratusan hektar tambak bandeng dan merobohkan rumah warga. Abrasi yang tak terkendali
                  sempat membuat desa pesisir ini terancam hilang dari peta.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Alih-alih menyerah pada nasib, warga bersatu membalikkan bencana menjadi gerakan gotong royong
                  penanaman jutaan bibit mangrove. Di bawah binaan KMPHP, kawasan ini kini tumbuh menjadi percontohan
                  ekowisata pesisir di Jawa Tengah sekaligus benteng hijau yang melindungi kehidupan generasi
                  berikutnya.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs font-body-sm text-body-sm text-on-surface">
                  {storyTags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      <span className="font-semibold text-primary">{tag}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-space-xs">
                  <a
                    className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-tertiary-container hover:bg-[#8f3c02] text-on-tertiary font-title-md text-title-md transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(117,48,0,0.3)] hover:-translate-y-0.5"
                    href="#">
                    <span>Baca Kisah Serunya</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 4. CTA BANNER */}
          <section className="w-full px-space-md lg:px-margin pb-space-xl bg-background">
            <div className="max-w-6xl mx-auto rounded-3xl bg-primary-container text-on-primary p-space-lg md:p-space-xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg shadow-[0_16px_36px_-6px_rgba(31,77,58,0.25)]">
              <div className="flex flex-col gap-space-xs max-w-2xl">
                <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">handshake</span>
                  Kemitraan Strategis &amp; Tanggung Jawab Sosial
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold">
                  Mari Wujudkan Ide Anda Bersama Kami!
                </h2>
                <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                  Buka pintu kolaborasi untuk program CSR perusahaan, penelitian akademis, hingga studi banding tata
                  kelola pesisir.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-md flex-shrink-0">
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-tertiary-container hover:bg-[#8f3c02] text-on-tertiary font-title-md text-title-md transition-all"
                  href="#">
                  <span>KONTAK KAMI</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-title-md text-title-md border border-surface-container-lowest/25 transition-all"
                  href="#">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Unduh Proposal</span>
                </a>
              </div>
            </div>
          </section>

          {/* 5. PILAR KEBERHASILAN */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-surface-container-low" id="pilar">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Komitmen &amp; Rekam Jejak
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                  Pilar Keberhasilan Mangrove Sari
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Enam dimensi fondasi transformasi berkelanjutan yang membuktikan kekuatan energi warga desa merajut
                  ekosistem pesisir utara Brebes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                    <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-[26px] ${p.iconColor}`}>{p.icon}</span>
                    </div>
                    <span className={`font-label-sm text-label-sm ${p.labelColor} uppercase tracking-wider`}>
                      {p.label}
                    </span>
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">{p.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. STATS BAND */}
          <section className="w-full bg-primary-container text-on-primary py-space-xl px-space-md lg:px-margin">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg text-center">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="font-display-lg text-4xl md:text-5xl font-bold text-secondary-fixed leading-none">
                    {s.value}
                  </span>
                  <span className="font-title-md text-title-md text-on-primary font-semibold mt-space-xs">
                    {s.label}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-primary-container">{s.note}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. SEKAPUR SIRIH */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-background">
            <div className="max-w-5xl mx-auto bg-surface-container-low rounded-3xl p-space-lg md:p-space-xl relative">
              <span className="material-symbols-outlined absolute top-space-lg right-space-lg text-[56px] text-secondary-container">
                format_quote
              </span>
              <div className="flex flex-col gap-space-md">
                <span className="inline-flex items-center gap-2 self-start font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">campaign</span>
                  Pesan Pengelola Kawasan
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold leading-tight max-w-3xl">
                  Sekapur Sirih: Dedikasi Menjaga Benteng Hijau Pesisir
                </h2>
                <blockquote className="font-body-lg text-body-lg text-on-surface italic leading-relaxed border-l-4 border-secondary pl-space-md">
                  &ldquo;Mangrove bukan sekadar deretan pepohonan penyekap lumpur di bibir pantai. Bagi warga
                  Pandansari, setiap akar tunjang dan napas bibit yang kami tanam adalah tali persaudaraan, benteng
                  pertahanan anak cucu dari amukan rob, serta sumber kehidupan yang menghidupkan kembali denyut ekonomi
                  kampung kami.&rdquo;
                </blockquote>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  KMPHP Mangrove Sari berdiri dari inisiatif warga Dukuh Pandansari dan telah melakukan rehabilitasi
                  pesisir sejak tahun 2005. Berangkat dari keprihatinan mendalam atas lenyapnya tambak akibat abrasi,
                  gerakan akar rumput ini secara konsisten menggandeng pemerintah pusat dan daerah, pegiat lingkungan
                  nasional maupun internasional, puluhan kampus, seniman, serta media demi mewujudkan pesisir yang
                  tangguh, adil, dan lestari.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm border-t border-surface-container-high">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-title-md font-bold">
                      RJ
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary font-bold">
                        Rusjan &amp; Pengurus KMPHP
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Kelompok Masyarakat Pelestari Hutan Pesisir
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-secondary-container/50 text-on-secondary-fixed font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                    Dewi Mangrove Sari, Brebes
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 8. TIM INTI */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-surface-container-low">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Sosok di Balik Layar
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                  Jantung Mangrove Sari: Mengenal Tim Inti
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Kekuatan kolektif masyarakat Pandansari digerakkan oleh para tokoh pengabdi yang mengorbankan waktu
                  dan tenaga demi kelestarian alam pesisir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {team.map((m) => (
                  <div
                    key={m.name}
                    className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col items-center text-center gap-space-sm">
                    <div className="w-20 h-20 rounded-full bg-secondary-container/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[40px] text-secondary">person</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-fixed font-label-sm text-label-sm">
                      {m.role}
                    </span>
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">{m.name}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. KABAR BERITA */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-background">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Informasi Terkini &amp; Edukasi
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                    Kabar Berita Mangrove Sari
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Ikuti dinamika konservasi, kegiatan komunitas, dan inovasi ramah lingkungan langsung dari pesisir
                    Brebes.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1 font-title-md text-title-md text-secondary hover:text-primary transition-colors group flex-shrink-0"
                  href="#">
                  <span>Lihat Semua Artikel</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {news.map((n) => (
                  <article
                    key={n.title}
                    className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] flex flex-col hover:-translate-y-1.5 transition-all duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-primary-container to-secondary">
                      {n.image ? (
                        <img className="w-full h-full object-cover" src={n.image} alt={n.title} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-[48px] text-on-primary/40">forest</span>
                        </div>
                      )}
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label-sm text-label-sm ${n.tagColor}`}>
                        {n.tag}
                      </span>
                    </div>
                    <div className="p-space-lg flex flex-col gap-space-sm flex-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {n.date} · Tim Editorial
                      </span>
                      <h3 className="font-title-lg text-title-lg text-primary font-bold leading-snug">{n.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{n.excerpt}</p>
                      <a
                        className="mt-auto inline-flex items-center gap-1 font-title-md text-title-md text-secondary hover:text-primary transition-colors group"
                        href="#">
                        <span>Baca Selengkapnya</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 10. MITRA */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-surface-container-low">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col items-center text-center gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Jejaring Kolaborasi
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                  Mitra Sejati Mangrove Sari
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Terima kasih atas dedikasi dan dukungan berkelanjutan dari pemerintah, universitas, serta lembaga
                  swadaya masyarakat.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-space-md">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col items-center justify-center gap-2 text-center shadow-sm h-28">
                    <span className="material-symbols-outlined text-[28px] text-secondary">{p.icon}</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold leading-tight">
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-primary text-on-primary px-space-md lg:px-margin pt-space-xl pb-space-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-surface-container-lowest/10">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">forest</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold leading-tight">MANGROVE SARI</span>
                <span className="font-label-sm text-label-sm text-on-primary-container">Pesisir Kaliwlingi</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Inisiatif konservasi hutan bakau berbasis komunitas, restorasi pesisir pantai utara Jawa, serta
              pemberdayaan ekowisata dan ekonomi masyarakat Dukuh Pandansari, Brebes.
            </p>
            <div className="flex items-center gap-space-xs">
              {[
                { icon: "public", label: "Facebook", href: "https://www.facebook.com/Dewimangrovesari" },
                { icon: "photo_camera", label: "Instagram", href: "https://www.instagram.com/dewimangrovesari" },
                { icon: "smart_display", label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center transition-colors"
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold">Navigasi Utama</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-primary-container">
              {footerNav.map((item) => (
                <li key={item}>
                  <a className="hover:text-on-primary transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold">Program &amp; Wisata</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-primary-container">
              {footerProgram.map((item) => (
                <li key={item}>
                  <a className="hover:text-on-primary transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold">Kontak &amp; Alamat</h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary-container">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">location_on</span>
                <span>Jl. Sungai Beting RT.01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">call</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">mail</span>
                <span>sekretariat@mangrovesari.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">schedule</span>
                <span>Setiap Hari: 06.00 - 17.30 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-space-lg flex flex-col md:flex-row justify-between items-center gap-space-md font-body-sm text-body-sm text-on-primary-container">
          <p>© 2026 MANGROVE SARI. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-on-primary transition-colors" href="#">
              Kebijakan Privasi
            </a>
            <a className="hover:text-on-primary transition-colors" href="#">
              Syarat &amp; Ketentuan
            </a>
            <a className="hover:text-on-primary transition-colors" href="#">
              Bantuan Wisata
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#1e7044] hover:bg-secondary text-on-secondary px-5 py-3.5 rounded-full shadow-lg transition-all hover:scale-105"
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer">
        <span className="material-symbols-outlined text-[22px]">forum</span>
        <span className="flex flex-col leading-tight">
          <span className="font-label-sm text-label-sm opacity-80">WhatsApp Resmi</span>
          <span className="font-title-md text-title-md font-bold">Konsultasi Wisata &amp; Bibit</span>
        </span>
      </a>
    </div>
  );
}
