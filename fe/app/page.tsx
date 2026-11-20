"use client";

import React, { useState } from "react";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface Feature {
  icon: string;
  iconBg: string;
  iconColor: string;
  label: string;
  title: string;
  text: string;
  linkText: string;
  href: string;
}

interface Pillar {
  icon: string;
  iconBg: string;
  iconColor: string;
  number: string;
  title: string;
  text: string;
}

interface Stat {
  value: string;
  label: string;
  note: string;
}

interface TeamMember {
  role: string;
  name: string;
  desc: string;
}

interface NewsItem {
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
  href: string;
}

interface Partner {
  icon: string;
  name: string;
}

// Data Sets
const NAV_LINKS: NavLink[] = [
  { label: "Warta & Media", href: "/wardia" },
  { label: "Ekowisata", href: "/ekowisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

const FEATURES: Feature[] = [
  {
    icon: "sailing",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-800",
    label: "Ekowisata Pesisir",
    title: "Jelajah Hutan & Susur Rivering",
    text: "Nikmati trekking kayu estuari, susur sungai perahu tradisional, belajar membatik pewarna alami mangrove, hingga wisata kuliner pesisir khas Brebes.",
    linkText: "Lihat Paket Wisata",
    href: "/ekowisata",
  },
  {
    icon: "shopping_bag",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-800",
    label: "Pemberdayaan Warga",
    title: "Produk Olahan & Olahan Lokal",
    text: "Hasil olahan tangan warga Dukuh Pandansari seperti sirup buah pidada/bogem tinggi vitamin C, keripik daun mangrove, dan suvenir ramah lingkungan.",
    linkText: "Katalog Produk",
    href: "/umkm",
  },
  {
    icon: "verified_user",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-800",
    label: "Akuntabilitas",
    title: "Tata Kelola & Legalitas Resmi",
    text: "Berada di bawah naungan Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) Mangrove Sari. Dilengkapi SK Desa, kementerian, dan SOP navigasi aman.",
    linkText: "Dokumen & Legalitas",
    href: "/profil",
  },
];

const STORY_TAGS = [
  "Restorasi 440+ Hektar Lahan",
  "Kemandirian Ekonomi Warga",
  "Stasiun Riset & Edukasi",
  "Penerima Anugerah Kalpataru",
];

const PILLARS: Pillar[] = [
  {
    icon: "park",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    number: "01",
    title: "Rehabilitasi Sabuk Hijau",
    text: "Penanaman lebih dari 4,4 juta batang mangrove untuk membentengi pemukiman warga dari bahaya erosi dan abrasi laut.",
  },
  {
    icon: "school",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    number: "02",
    title: "Pelatihan Olahan Pangan",
    text: "Pemberdayaan kelompok perempuan tani dalam mengolah hasil kebun mangrove menjadi sirup bogem, dodol, dan keripik.",
  },
  {
    icon: "theater_comedy",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    number: "03",
    title: "Seni & Kebudayaan Pesisir",
    text: "Pelestarian tari tradisional pesisir, teater anak nelayan, dan gelaran festival budaya tahunan desa.",
  },
  {
    icon: "flutter_dash",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    number: "04",
    title: "Pemulihan Ekosistem",
    text: "Kembalinya habitat alami burung migran serta bertambahnya populasi biota pesisir di sekitar hutan.",
  },
  {
    icon: "set_meal",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    number: "05",
    title: "Peningkatan Ekonomi Nelayan",
    text: "Tingkat tangkapan udang, kepiting soka, dan ikan liar yang meningkat seiring sehatnya kawasan bakau.",
  },
  {
    icon: "science",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    number: "06",
    title: "Inovasi & Riset Pesisir",
    text: "Penerapan sistem silvofishery dan penyediaan stasiun penelitian bagi akademisi dalam serta luar negeri.",
  },
];

const STATS: Stat[] = [
  { value: "250+", label: "Warga Terlibat", note: "Pekerja & Pengelola" },
  { value: "30+", label: "UMKM Aktif", note: "Kelompok Olahan Lokal" },
  { value: "70+", label: "Mitra Kerja", note: "Lembaga & Perusahaan" },
  { value: "4,4 Jt", label: "Batang Tanam", note: "Di Area 440 Ha" },
  { value: "30+", label: "Negara Wisatawan", note: "Kunjungan Mancanegara" },
  { value: "35+", label: "Riset Akademis", note: "Publikasi & Jurnal" },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    role: "Ketua Pengelola",
    name: "Rusjan",
    desc: "Inisiator awal pemulihan pesisir Pandansari sejak 2005 dan koordinator gotong royong warga.",
  },
  {
    role: "Koordinator Lapangan",
    name: "Sugiarto",
    desc: "Penanggung jawab operasional jalurnya boardwalk kayu, armada perahu, dan keamanan pengunjung.",
  },
  {
    role: "Divisi Pembibitan & Riset",
    name: "Mashadi",
    desc: "Praktisi pembibitan tanaman mangrove, pendamping penelitian universitas, dan fasilitator tanam bibit.",
  },
  {
    role: "Bendahara Organisasi",
    name: "Supardi",
    desc: "Pengelola transparansi kas tiket wisata, pendanaan program CSR, serta bagi hasil usaha masyarakat.",
  },
  {
    role: "Humas & Kemitraan",
    name: "Abdul Kamid",
    desc: "Penghubung komunikasi dengan instansi pemerintah, agen perjalanan wisata, dan mitra pendukung.",
  },
  {
    role: "Pengembangan Usaha",
    name: "Jarodin",
    desc: "Pengembang rute wisata susur sungai, pengarah standar kuliner lokal, dan pemasaran suvenir.",
  },
];

const NEWS_LIST: NewsItem[] = [
  {
    category: "Kegiatan Lapangan",
    categoryColor: "bg-emerald-700 text-white",
    date: "18 Feb 2026",
    title: "Pelepasliaran 500 Bibit Kepiting Bakau Bersama Mahasiswa",
    excerpt:
      "Upaya menjaga keseimbangan rantai makanan ekosistem rawa pasang surut sekaligus mendukung produktivitas nelayan.",
    href: "/artikel/pelepasliaran-kepiting-bakau",
  },
  {
    category: "Fasilitas",
    categoryColor: "bg-amber-700 text-white",
    date: "10 Feb 2026",
    title: "Jalur Boardwalk Kayu 800 Meter Selesai Diperbaiki",
    excerpt: "Akses menyusuri rimbunnya hutan mangrove kini lebih kokoh, aman, dan ramah untuk rombongan keluarga.",
    href: "/artikel/boardwalk-baru",
  },
  {
    category: "Prestasi Warga",
    categoryColor: "bg-teal-700 text-white",
    date: "28 Jan 2026",
    title: "Sirup Bogem Olahan Warga Pandansari Raih Penghargaan UMKM",
    excerpt:
      "Produk minuman olahan alami karya kelompok perempuan tani berhasil masuk dalam jaringan pemasaran daerah.",
    href: "/artikel/penghargaan-sirup-bogem",
  },
];

const PARTNERS: Partner[] = [
  { icon: "account_balance", name: "Kementerian LHK" },
  { icon: "location_city", name: "Pemprov Jateng" },
  { icon: "school", name: "UNDIP Semarang" },
  { icon: "school", name: "IPB University" },
  { icon: "business", name: "Pertamina Foundation" },
  { icon: "public", name: "USAID Indonesia" },
  { icon: "water", name: "BPDAS Pemali" },
  { icon: "volunteer_activism", name: "Yayasan KEHATI" },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-950/95 backdrop-blur-md shadow-md border-b border-emerald-900/40">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-200">
              <span className="material-symbols-outlined text-2xl">forest</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight leading-tight">MANGROVE SARI</span>
              <span className="text-xs text-emerald-300 tracking-wide uppercase hidden sm:block">
                Ekowisata &amp; Konservasi Brebes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <a className="px-4 py-2 bg-emerald-700 text-white text-sm font-medium rounded-full shadow-sm" href="#">
              Beranda
            </a>
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium text-emerald-100 hover:text-white hover:bg-emerald-900/60 rounded-full transition flex items-center gap-1"
                type="button">
                Profile
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-48 bg-emerald-900 rounded-xl shadow-xl p-2 z-50 border border-emerald-800">
                <a
                  className="px-3 py-2 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800 hover:text-white transition"
                  href="/organisasi">
                  Struktur Organisasi
                </a>
                <a
                  className="px-3 py-2 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800 hover:text-white transition"
                  href="/sejarah">
                  Sejarah Pemulihan
                </a>
              </div>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="px-4 py-2 text-sm font-medium text-emerald-100 hover:text-white hover:bg-emerald-900/60 rounded-full transition"
                href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition shadow-sm"
              href="https://wa.me/6281234567890"
              rel="noopener noreferrer"
              target="_blank">
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Hubungi Kami</span>
            </a>
            <button
              aria-label="Buka Menu"
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 rounded-lg text-emerald-100 hover:bg-emerald-900/60 transition"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-emerald-950 p-4 border-t border-emerald-900/60 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <a className="px-4 py-2.5 rounded-lg bg-emerald-800 text-white font-medium" href="#">
              Beranda
            </a>
            <a
              className="px-4 py-2.5 rounded-lg text-emerald-200 hover:bg-emerald-900 hover:text-white transition"
              href="/organisasi">
              Struktur Organisasi
            </a>
            <a
              className="px-4 py-2.5 rounded-lg text-emerald-200 hover:bg-emerald-900 hover:text-white transition"
              href="/sejarah">
              Sejarah Pemulihan
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="px-4 py-2.5 rounded-lg text-emerald-200 hover:bg-emerald-900 hover:text-white transition"
                href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20">
        {/* HERO SECTION */}
        <section className="relative w-full bg-emerald-950 text-white min-h-[640px] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-35"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I"
              alt="Hutan mangrove Mangrove Sari Brebes"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/40"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="material-symbols-outlined text-base">eco</span>
              <span>Kawasan Konservasi Pesisir Berbasis Masyarakat</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight max-w-4xl">
              Restorasi Pesisir, Kemandirian Warga Pandansari
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mb-8 leading-relaxed">
              Memulihkan benteng hijau pantai utara dari abrasi, memelihara keanekaragaman hayati, dan menggerakkan
              perekonomian masyarakat Kaliwlingi, Brebes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold transition shadow-md"
                href="#kisah">
                <span>Tentang Kami</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 text-white font-semibold border border-emerald-700/60 transition backdrop-blur-sm"
                href="#pilar">
                <span className="material-symbols-outlined text-lg">explore</span>
                <span>Paket Wisata</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-800/60 w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-lg">verified</span>
                <span>SK Legalitas Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-lg">nature_people</span>
                <span>440 Hektar Hutan Terjaga</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-lg">groups</span>
                <span>250+ Keterlibatan Warga</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition duration-200">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-4`}>
                    <span className={`material-symbols-outlined text-2xl ${f.iconColor}`}>{f.icon}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{f.label}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.text}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition group"
                    href={f.href}>
                    <span>{f.linkText}</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="kisah">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c"
                  alt="Aktivitas warga menanam pohon bakau"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-slate-200 max-w-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">calendar_today</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">Sejak 2005</span>
                  <span className="block text-xs text-slate-500">Awal Pergerakan Restorasi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3">
                <span className="material-symbols-outlined text-sm">history_edu</span>
                <span>Jejak Konservasi</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Bangkit dari Abrasi: Perjuangan Warga Pandansari Merawat Pesisir
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dukuh Pandansari di Desa Kaliwlingi sempat kehilangan ratusan hektar lahan tambak akibat abrasi hebat di
                pantai utara Brebes. Dampak erosi tidak hanya merusak mata pencaharian nelayan, tetapi juga mengancam
                keberadaan pemukiman warga.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Menolak kalah dari bencana, masyarakat berinisiatif membentuk kelompok swadaya untuk menanam kembali
                benteng bakau. Usaha panjang yang dimulai sejak 2005 ini kini membuahkan kawasan ekosistem mangrove
                seluas 440 hektar yang juga menjadi pusat edukasi dan ekowisata daerah.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {STORY_TAGS.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                    <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold transition shadow-sm"
                href="/sejarah">
                <span>Baca Selengkapnya</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA PARTNERSHIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-emerald-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-md">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">handshake</span>
                <span>Kolaborasi &amp; Penelitian</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Tertarik Mengadakan Program CSR atau Riset Lapangan?
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Kami terbuka untuk kemitraan penanaman bibit, kegiatan edukasi universitas, maupun kunjungan studi
                banding pengelolaan kawasan pesisir.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shadow-sm"
                href="/kontak">
                <span>Hubungi Pengelola</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-950/60 hover:bg-emerald-950/80 text-white font-semibold text-sm border border-emerald-700/60 transition"
                href="/documents/proposal-kemitraan.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Unduh Profile PDF</span>
              </a>
            </div>
          </div>
        </section>

        {/* PILARS SECTION */}
        <section className="py-20 bg-slate-100 border-y border-slate-200" id="pilar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">
                Fokus Kegiatan
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Pilar Utama Pengelolaan Kawasan</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enam fokus kerja berkelanjutan yang dirancang untuk menjaga kelestarian ekosistem sekaligus menopang
                kesejahteraan warga setempat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PILLARS.map((p) => (
                <div
                  key={p.number}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined text-2xl ${p.iconColor}`}>{p.icon}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 font-mono">{p.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">{s.value}</span>
                  <span className="text-sm font-semibold text-white">{s.label}</span>
                  <span className="text-xs text-emerald-300/80 mt-1">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-slate-100 select-none pointer-events-none">
              format_quote
            </span>
            <div className="relative z-10 flex flex-col gap-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                <span className="material-symbols-outlined text-sm">campaign</span>
                <span>Catatan Pengelola</span>
              </span>
              <blockquote className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed border-l-4 border-emerald-600 pl-4">
                &ldquo;Mangrove bukan sekadar pepohonan penahan ombak. Bagi kami di Pandansari, tiap bibit yang tumbuh
                adalah benteng keselamatan pemukiman sekaligus harapan ekonomi bagi keluarga nelayan.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
                  RJ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rusjan &amp; Pengurus KMPHP</h4>
                  <p className="text-xs text-slate-500">Kelompok Masyarakat Pelestari Hutan Pesisir Mangrove Sari</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">
                Penggerak Lapangan
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Pengurus &amp; Tim KMPHP</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tokoh lokal yang mengoordinasikan kegiatan konservasi, pengelolaan tiket wisata, dan pendampingan
                lapangan secara berkelanjutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((m) => (
                <div
                  key={m.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-3xl">person</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
                    {m.role}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">
                Pembaruan Publik
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">Kabar dari Pesisir</h2>
            </div>
            <a
              className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition group"
              href="/artikel">
              <span>Arsip Artikel</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_LIST.map((n) => (
              <article
                key={n.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col hover:shadow-md transition duration-200">
                <div className="relative h-48 bg-slate-200">
                  {n.image ? (
                    <img className="w-full h-full object-cover" src={n.image} alt={n.title} />
                  ) : (
                    <div className="w-full h-full bg-emerald-900/10 flex items-center justify-center text-emerald-800">
                      <span className="material-symbols-outlined text-4xl">forest</span>
                    </div>
                  )}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${n.categoryColor}`}>
                    {n.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs text-slate-400 block mb-2">{n.date}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">{n.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{n.excerpt}</p>
                  </div>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition group mt-auto"
                    href={n.href}>
                    <span>Baca Selengkapnya</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                Kemitraan
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Lembaga &amp; Instansi Pendukung</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center border border-slate-200/60 shadow-2xs h-24">
                  <span className="material-symbols-outlined text-2xl text-emerald-700">{p.icon}</span>
                  <span className="text-xs font-semibold text-slate-800 leading-tight">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-white pt-16 pb-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-200">
                <span className="material-symbols-outlined text-xl">forest</span>
              </div>
              <span className="text-lg font-bold tracking-tight">MANGROVE SARI</span>
            </div>
            <p className="text-sm text-emerald-200/80 leading-relaxed">
              Inisiatif konservasi hutan bakau dan pemulihan pesisir berbasis masyarakat di Dukuh Pandansari, Desa
              Kaliwlingi, Brebes, Jawa Tengah.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Navigasi</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-emerald-200/80">
              <li>
                <a className="hover:text-white transition" href="#">
                  Beranda
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/profil">
                  Profil &amp; Legalitas
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/sejarah">
                  Sejarah Kebangkitan
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/majalah">
                  Majalah Publikasi
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/galeri">
                  Galeri Dokumentasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Program &amp; Wisata</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-emerald-200/80">
              <li>
                <a className="hover:text-white transition" href="/ekowisata">
                  Paket Susur Perahu
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/ekowisata#tanam">
                  Adopsi &amp; Tanam Bibit
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/umkm">
                  Produk Olahan Warga
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/riset">
                  Penelitian &amp; Magang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Sekretariat</h4>
            <ul className="flex flex-col gap-3 text-sm text-emerald-200/80">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-emerald-400 shrink-0">location_on</span>
                <span>Jl. Sungai Beting RT 01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lg text-emerald-400 shrink-0">call</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lg text-emerald-400 shrink-0">mail</span>
                <span>sekretariat@mangrovesari.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-300/70">
          <p>© {new Date().getFullYear()} Mangrove Sari Brebes. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition" href="/privasi">
              Kebijakan Privasi
            </a>
            <a className="hover:text-white transition" href="/syarat">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg transition duration-200 hover:scale-105"
        href="https://wa.me/6281234567890"
        rel="noopener noreferrer"
        target="_blank">
        <span className="material-symbols-outlined text-xl">forum</span>
        <span className="text-sm font-bold hidden sm:inline">Kontak WhatsApp</span>
      </a>
    </div>
  );
}
