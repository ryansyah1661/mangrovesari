"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

interface LegalDocument {
  id: string;
  badge: string;
  badgeTone: "emerald" | "amber";
  icon: string;
  title: string;
  description: string;
  meta: { label: string; value: string; highlight?: boolean }[];
  scanNote: string;
  imagePlaceholder?: string;
}

interface DivisionDetail {
  number: string;
  coordinator: string;
  title: string;
  icon: string;
  badgeText: string;
  badgeIcon: string;
  tasks: string[];
  spanWide?: boolean;
}

const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: "sk-kemenkumham",
    badge: "Badan Hukum Perkumpulan",
    badgeTone: "emerald",
    icon: "verified",
    title: "SK Pengesahan Badan Hukum Kemenkumham RI",
    description:
      "Pengesahan pendirian badan hukum Perkumpulan Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) Mangrove Sari Desa Kaliwlingi Kecamatan Brebes Kabupaten Brebes.",
    meta: [
      { label: "Nomor SK", value: "AHU-0003233.AH.01.07.TAHUN 2015" },
      { label: "No. Pendaftaran", value: "6015082633100990 (26 Agustus 2015)" },
      { label: "Status Berlaku", value: "Aktif & Sah Permanen", highlight: true },
    ],
    scanNote:
      "Dicetak pada tanggal 26 Agustus 2015 dan ditandatangani oleh Direktur Jenderal Administrasi Hukum Umum a.n. Menteri Hukum dan Hak Asasi Manusia RI (Dr. Aidir Amin Daud, S.H., M.H.).",
  },
  {
    id: "akta-notaris",
    badge: "Akta Pendirian & AD/ART",
    badgeTone: "emerald",
    icon: "description",
    title: "Akta Notaris Pendirian & AD/ART KMPHP",
    description:
      "Landasan dasar pendirian, anggaran dasar, anggaran rumah tangga, serta tata kelola musyawarah operasional organisasi masyarakat pelestari hutan pesisir.",
    meta: [
      { label: "Nomor Akta", value: "Akta No. 46 (19 Agustus 2015)" },
      { label: "Pejabat Pembuat", value: "Notaris Dwi Hastuti, S.H., M.Kn." },
      { label: "Kedudukan", value: "Kabupaten Brebes, Jawa Tengah", highlight: true },
    ],
    scanNote:
      "Salinan resmi Akta Pendirian Perkumpulan Kelompok Masyarakat Pelestari Hutan Pesisir Mangrove Sari yang dibuat di hadapan Notaris & PPAT Dwi Hastuti, S.H., M.Kn.",
  },
  {
    id: "sk-klhk",
    badge: "SK Kementerian LHK",
    badgeTone: "emerald",
    icon: "forest",
    title: "SK Pengakuan Perlindungan Hutan KLHK RI",
    description:
      "Surat Keputusan Menteri Lingkungan Hidup dan Kehutanan tentang Pengelolaan Hutan Lindung dan Rehabilitasi Pesisir Berbasis Masyarakat.",
    meta: [
      { label: "Nomor SK", value: "SK.6234/MENLHK-PSKL/PKTHA" },
      { label: "Instansi Penerbit", value: "Kementerian LHK RI" },
      { label: "Luas Kawasan", value: "440 Hektar Pesisir", highlight: true },
    ],
    scanNote:
      "Menetapkan mandat konservasi, pembibitan, dan pemanfaatan jasa lingkungan berkelanjutan pada bentang alam pesisir Dukuh Pandansari.",
  },
  {
    id: "sk-bupati",
    badge: "Regulasi Daerah",
    badgeTone: "emerald",
    icon: "gavel",
    title: "SK Bupati Brebes Destinasi Dewi Mangrove Sari",
    description: "Penetapan kawasan ekowisata percontohan dan desa wisata bahari terpadu tingkat Kabupaten Brebes.",
    meta: [
      { label: "Nomor Regulasi", value: "SK Bupati No. 556/412/2016" },
      { label: "Pemerintah", value: "Pemerintah Kabupaten Brebes" },
      { label: "Klaster", value: "Desa Wisata Unggulan", highlight: true },
    ],
    scanNote:
      "Dasar hukum penyelenggaraan wisata edukasi pesisir dan pemberdayaan ekonomi kreatif warga Desa Kaliwlingi.",
  },
  {
    id: "kalpataru",
    badge: "Penghargaan Tertinggi",
    badgeTone: "amber",
    icon: "military_tech",
    title: "Sertifikat Kalpataru & Lingkungan Nasional",
    description:
      "Pengakuan kehormatan tertinggi pelopor perintis dan penyelamat lingkungan hidup pesisir Republik Indonesia.",
    meta: [
      { label: "Kategori", value: "Penyelamat Lingkungan Hidup" },
      { label: "Diberikan Oleh", value: "Presiden Republik Indonesia" },
      { label: "Tingkat", value: "Nasional (Republik Indonesia)", highlight: true },
    ],
    scanNote:
      "Penghargaan atas keberhasilan warga Pandansari memulihkan ratusan hektar tambak terabrasi menjadi hutan mangrove produktif.",
  },
  {
    id: "nib-umkm",
    badge: "Legalitas Usaha & Koperasi",
    badgeTone: "emerald",
    icon: "badge",
    title: "Izin Operasional Koperasi & UMKM Pesisir",
    description: "Nomor Induk Berusaha (NIB) serta izin edar produk olahan pangan Dinas Koperasi & UMKM Jawa Tengah.",
    meta: [
      { label: "NIB", value: "9120003841192" },
      { label: "Sektor", value: "Ekowisata, Hasil Laut & Pangan" },
      { label: "PIRT / Halal", value: "Tersertifikasi Resmi", highlight: true },
    ],
    scanNote:
      "Mencakup legalitas unit usaha olahan buah bogem (sirup, dodol, keripik), batik mangrove, serta jasa pemandu wisata.",
  },
];

const CORE_LEADERS = [
  {
    role: "Sekretaris",
    members: ["1. M. Bangkit"],
    focus: "Administrasi, Persuratan & Arsip Legalitas",
  },
  {
    role: "Bendahara",
    members: ["1. Supardi", "2. Sakri W"],
    focus: "Tata Kelola Keuangan, Kas & Aset Komunal",
  },
  {
    role: "Diklat & Riset",
    members: ["1. Mashadi"],
    focus: "Pembibitan 26 Spesies & Pendampingan Riset",
  },
];

const OPERATIONAL_DIVISIONS = [
  {
    title: "Bidang Logistik",
    members: ["1. Taripah", "2. Winda L"],
  },
  {
    title: "Bidang Operasional",
    members: ["1. Tarmidi", "2. Sugiarto"],
  },
  {
    title: "Bidang Humas",
    members: ["1. Santiryo", "2. Abdul Kamid"],
  },
  {
    title: "Pengembangan Usaha",
    members: ["1. H. Karyudi", "2. Jarodin", "3. Ahmad S"],
  },
  {
    title: "Bidang Pengolahan",
    members: ["1. Warsih", "2. Lina Ulfa"],
  },
  {
    title: "Bidang Perlengkapan",
    members: ["1. Karyo", "2. Winoto H", "3. Dasmin", "4. M. Sali"],
  },
  {
    title: "Bidang Penghijauan",
    members: ["1. Sapar", "2. Sukyadi", "3. Sarpudin", "4. Sunarto"],
  },
  {
    title: "Bidang Pemberdayaan",
    members: ["1. Rasimpen", "2. Ninik Ika W"],
  },
  {
    title: "Bidang Pemasaran",
    members: ["1. Tarsimpen", "2. Nur Kholik", "3. Widi W", "4. Erina"],
  },
];

const DIVISION_DETAILS: DivisionDetail[] = [
  {
    number: "Divisi 01",
    coordinator: "Koordinator: Sugiarto & Tarmidi",
    title: "Operasional & Keamanan Kawasan",
    icon: "shield",
    badgeText: "Standar Keselamatan Pesisir Teruji",
    badgeIcon: "verified_user",
    tasks: [
      "Pengawasan berkala zona konservasi 440 hektar dari pembalakan liar dan perburuan satwa.",
      "Koordinasi giliran 15 armada perahu nelayan untuk penyeberangan wisatawan.",
      "Pemeliharaan berkala tracking jembatan kayu (boardwalk) sepanjang 1,2 km.",
      "Penerapan standar operasional prosedur (SOP) keselamatan pelampung bagi seluruh pengunjung.",
    ],
  },
  {
    number: "Divisi 02",
    coordinator: "Koordinator: Mashadi",
    title: "Diklat, Riset & Pembibitan",
    icon: "potted_plant",
    badgeText: "Riset Karbon Biru & Biodiversitas",
    badgeIcon: "biotech",
    tasks: [
      "Penyediaan bibit varietas unggul Rhizophora mucronata & Avicennia marina kapasitas 500.000 bibit/tahun.",
      "Bimbingan teknis mahasiswa, dosen, serta peneliti internasional terkait pemulihan pantai utara.",
      "Inventarisasi keanekaragaman hayati dan perhitungan cadangan karbon biru pesisir.",
      "Pelatihan kaderisasi konservasionis muda dari generasi anak nelayan Kaliwlingi.",
    ],
  },
  {
    number: "Divisi 03",
    coordinator: "Koordinator: Supardi & Sakri W",
    title: "Keuangan & Aset Lembaga",
    icon: "account_balance",
    badgeText: "Audit Terbuka & Pembukuan Digital",
    badgeIcon: "receipt_long",
    tasks: [
      "Akuntansi kas transparan penerimaan donasi program Adopsi Pohon dan tiket ekowisata.",
      "Penyaluran upah harian kerja penanaman secara adil kepada kelompok ibu nelayan pesisir.",
      "Penyusunan laporan pertanggungjawaban berkala yang diaudit melalui musyawarah terbuka paguyuban.",
      "Inventarisasi aset fisik komunal meliputi sarana dermaga, pos jaga, dan peralatan konservasi.",
    ],
  },
  {
    number: "Divisi 04",
    coordinator: "Koordinator: Abdul Kamid & Santiryo",
    title: "Humas & Kemitraan Strategis",
    icon: "handshake",
    badgeText: "Jejaring Kolaborasi Multipihak",
    badgeIcon: "hub",
    tasks: [
      "Fasilitasi program Tanggung Jawab Sosial dan Lingkungan (TJSL/CSR) BUMN dan korporasi swasta.",
      "Diplomasi kebijakan tata ruang pesisir bersama Pemkab Brebes, BPDAS HL Pemali Jratun, dan KLHK.",
      "Pendampingan sosial kelompok nelayan sekitar guna mencegah konflik kepentingan lahan tambak.",
      "Penyebarluasan publikasi capaian restorasi melalui media nasional dan jejaring global.",
    ],
  },
  {
    number: "Divisi 05",
    coordinator: "Koordinator: Jarodin & H. Karyudi",
    title: "Pengembangan Usaha, Pengolahan & Ekowisata",
    icon: "storefront",
    badgeText: "Ekonomi Sirkular & Pemberdayaan UMKM Pesisir",
    badgeIcon: "shopping_bag",
    spanWide: true,
    tasks: [
      "Standardisasi produk olahan bernilai tambah buah bogem (sirup, keripik, dodol).",
      "Pengembangan industri kreatif batik pewarna alami getah mangrove ramah lingkungan.",
      "Tata kelola paket edukasi sekolah, mahasiswa, dan korporasi secara terpadu.",
      "Hilirisasi garam rebus tradisional pesisir sebagai komoditas unggulan masyarakat Kaliwlingi.",
    ],
  },
];

export default function OrganisasiPage() {
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);

  return (
    <div className="bg-[#FAF8F4] font-sans text-stone-800 antialiased min-h-screen selection:bg-emerald-900 selection:text-white">
      <SiteHeader />

      <main className="w-full pt-20">
        {/* 1. HERO & BREADCRUMB HEADER (Dark Emerald Band matching Home Hero tone) */}
        <section className="bg-[#062319] text-white py-16 sm:py-20 border-b-4 border-amber-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-300 mb-6">
              <Link href="/" className="hover:text-amber-400 transition flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">home</span>
                <span>Beranda</span>
              </Link>
              <span className="material-symbols-outlined text-xs text-stone-500">chevron_right</span>
              <span className="text-stone-400">Profil</span>
              <span className="material-symbols-outlined text-xs text-stone-500">chevron_right</span>
              <span className="text-amber-400 font-semibold">Organisasi &amp; Legalitas</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                  KMPHP Mangrove Sari · Tata Kelola Akuntabel &amp; Berkelanjutan
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                  Legalitas Badan Usaha, Akta Notaris, dan Struktur Organisasi
                </h1>
                <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
                  Sebagai bentuk komitmen terhadap transparansi, akuntabilitas, dan kepatuhan hukum dalam pelestarian
                  440 hektar bentang alam Dukuh Pandansari, Desa Kaliwlingi, Brebes, berikut instrumen legalitas dan
                  susunan pengurus resmi kami.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20KMPHP%20Mangrove%20Sari,%20saya%20ingin%20mengajukan%20permohonan%20salinan%20dokumen%20kemitraan/legalitas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-lg transition">
                  <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
                  <span>Permohonan Dokumen Resmi</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. AMANAT KONSTITUTIF & PENGAKUAN BADAN HUKUM (White Band with border-b) */}
        <section className="py-20 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Narrative & Principles */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-0.5 w-8 bg-amber-600" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                    Amanat Konstitutif KMPHP
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-snug mb-6">
                  Landasan Hukum &amp; Visi Pelestarian Kawasan Kaliwlingi
                </h2>

                <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
                  <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
                    KMPHP Mangrove Sari telah secara resmi diakui sebagai badan hukum yang sah berdasarkan{" "}
                    <span className="text-emerald-900 font-semibold">
                      Surat Keputusan Menteri Hukum dan Hak Asasi Manusia RI Nomor AHU-0003233.AH.01.07.TAHUN 2015
                    </span>{" "}
                    tanggal 26 Agustus 2015.
                  </p>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    Pengakuan legalitas ini diperkuat dengan{" "}
                    <span className="font-semibold text-stone-800">Akta Notaris Nomor 46</span> tertanggal 19 Agustus
                    2015 oleh Notaris Dwi Hastuti, S.H., M.Kn. di Kabupaten Brebes sebagai pedoman pendirian dan
                    operasional organisasi dalam menjaga ekosistem daerah aliran sungai dan pesisir utara Jawa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-200 text-xs sm:text-sm font-medium text-stone-800">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-700 text-lg">groups</span>
                    <span>Prinsip Demokrasi Komunitas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-700 text-lg">account_balance_wallet</span>
                    <span>Transparansi Dana &amp; Aset</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-700 text-lg">eco</span>
                    <span>Berbasis Konservasi Mandiri</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-700 text-lg">balance</span>
                    <span>Keadilan Gender &amp; Nelayan</span>
                  </div>
                </div>
              </div>

              {/* Right: Field Photo & Key Institutional Figures */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-[#FAF8F4]">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWVgtiFQVlM9viu-VsB8GEC-f0ZCGOU0R1yKha3gTyUjod-M9HlELVCWpEL-1PDwYOclX39XFbcmZv31iVa6kEqQ9IaoGgvuBYg9l43QbcCqffQ8nYVkedUJlaF2L7mIESc-fXZXHmje7jt2MVz9Kyt05uF3-rE8cys7P9OqY5PNDR6tCCR8XteNV4-EOnFlH0LWTFoY7Te1jXx0Cbi4qVDNRLnIaxooSt57pDlsk"
                      alt="Gotong royong warga KMPHP Mangrove Sari di pesisir Kaliwlingi"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-semibold">
                        Aksi Nyata Pemulihan Abrasi Pesisir Dukuh Pandansari
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-stone-200 p-5 text-center bg-[#FAF8F4]">
                    <div>
                      <span className="block text-xl font-bold text-stone-900">2005</span>
                      <span className="text-xs text-stone-600">Berdiri Sejak</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-stone-900">2015</span>
                      <span className="text-xs text-stone-600">SK Badan Hukum</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-emerald-800">440 Ha</span>
                      <span className="text-xs text-stone-600">Kawasan Kelola</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STRUKTUR ORGANISASI RESMI (Warm Cream #FAF8F4 Band with border-b) */}
        <section className="py-20 sm:py-24 bg-[#FAF8F4] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  Bagan Tata Kelola Lembaga
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Struktur Organisasi KMPHP Mangrove Sari
                </h2>
              </div>
              <p className="text-sm text-stone-600 max-w-md">
                Sekretariat: Jl. Sungai Beting RT 01/05 Dukuh Pandansari, Desa Kaliwlingi, Brebes · Disahkan bersama
                Pemerintah Desa Kaliwlingi.
              </p>
            </div>

            {/* Organizational Hierarchy Tree */}
            <div className="flex flex-col items-center">
              {/* Tier 1: Ketua */}
              <div className="w-full max-w-md bg-[#062319] text-white rounded-2xl p-6 border border-emerald-900 shadow-lg flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-emerald-900 shrink-0 border border-amber-500/40">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC6jyHEwJVZLl-gkvoeWmdqsOaUHkdoI7zlz-wkagC3W8-bwzh5dSNB0I3JlG998WCA8J3bCulfq3HSotjqT-u1b2nZtp_OPZegmR1B9OBJFjQTQbJmr4E73JkN3jjIVAdp8ydG0cBhzyc_HEvK09rIz-eOiXBH9-3qoPl_EO00ZQ6yHEhtDiBLb-eE9uJBDs0aVL_8Ar5m7qrxI9jN7JNfwG0cCKnDUaH2Tp-A6I"
                    alt="Rusjan - Ketua KMPHP Mangrove Sari"
                  />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-amber-600 text-white text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                    Ketua KMPHP Mangrove Sari
                  </span>
                  <h3 className="text-xl font-bold text-white">Rusjan</h3>
                  <p className="text-xs text-stone-300 mt-0.5">Inisiator Pemulihan Pesisir &amp; Pengarah Strategis</p>
                </div>
              </div>

              {/* Connector */}
              <div className="w-0.5 h-8 bg-stone-300" />
              <div className="hidden md:block w-2/3 h-0.5 bg-stone-300" />

              {/* Tier 2: Sekretaris, Bendahara, Diklat/Riset */}
              <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-0">
                {CORE_LEADERS.map((core) => (
                  <div
                    key={core.role}
                    className="bg-white rounded-xl p-6 border border-stone-200 border-t-4 border-t-emerald-800 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                      {core.role}
                    </span>
                    <div className="space-y-1 mb-3">
                      {core.members.map((person) => (
                        <p key={person} className="text-base font-bold text-stone-900">
                          {person}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-stone-600 pt-3 border-t border-stone-100">{core.focus}</p>
                  </div>
                ))}
              </div>

              {/* Connector */}
              <div className="w-0.5 h-8 bg-stone-300" />

              {/* Tier 3: 9 Bidang Pelaksana Lapangan */}
              <div className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-stone-200">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                      Pelaksana Teknis &amp; Lapangan
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">Sembilan Bidang Kerja KMPHP Mangrove Sari</h3>
                  </div>
                  <span className="text-xs text-stone-500">Sesuai Bagan Struktur Resmi Desa Kaliwlingi</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {OPERATIONAL_DIVISIONS.map((div) => (
                    <div
                      key={div.title}
                      className="rounded-xl bg-[#FAF8F4] p-5 border border-stone-200/90 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-900 pb-2.5 mb-3 border-b border-stone-200">
                          {div.title}
                        </h4>
                        <ul className="space-y-1.5 text-sm text-stone-800 font-medium">
                          {div.members.map((member) => (
                            <li key={member}>{member}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. URAIAN TUGAS & TATA KERJA DIVISI (Clean White Band with border-b) */}
        <section className="py-20 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  Tanggung Jawab Operasional
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Rincian Uraian Tugas &amp; Tata Kerja Divisi
                </h2>
              </div>
              <p className="text-sm text-stone-600 max-w-md">
                Sistem pembagian kerja baku berpedoman pada AD/ART KMPHP untuk mewujudkan integritas pengawasan
                lingkungan dan kesejahteraan warga.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {DIVISION_DETAILS.map((div) => (
                <div
                  key={div.number}
                  className={`bg-[#FAF8F4] rounded-2xl p-7 border border-stone-200 shadow-xs flex flex-col justify-between ${
                    div.spanWide ? "md:col-span-2 lg:col-span-2" : ""
                  }`}>
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
                        <span className="material-symbols-outlined text-2xl">{div.icon}</span>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-700">
                        {div.number}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-emerald-800 mb-1">{div.coordinator}</p>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">{div.title}</h3>

                    <ul
                      className={
                        div.spanWide
                          ? "grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm text-stone-600"
                          : "space-y-3 text-sm text-stone-600"
                      }>
                      {div.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="material-symbols-outlined text-emerald-700 text-lg shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-stone-800">
                    <span className="material-symbols-outlined text-base text-amber-700">{div.badgeIcon}</span>
                    <span>{div.badgeText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INSTRUMEN HUKUM & DOKUMEN LEGALITAS RESMI (Warm Cream #FAF8F4 Band) */}
        <section className="py-20 sm:py-24 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  Aspek Kepatuhan Hukum
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Instrumen Hukum &amp; Dokumen Legalitas Resmi
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-stone-200 text-xs font-semibold text-stone-800">
                <span className="material-symbols-outlined text-base text-emerald-700">lock</span>
                <span>Tervalidasi &amp; Terdaftar di Kemenkumham RI</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {LEGAL_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl p-7 border border-stone-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-semibold ${
                          doc.badgeTone === "amber"
                            ? "bg-amber-600/15 text-amber-900"
                            : "bg-emerald-900/10 text-emerald-900"
                        }`}>
                        {doc.badge}
                      </span>
                      <span className="material-symbols-outlined text-xl text-stone-400">{doc.icon}</span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 leading-snug mb-2">{doc.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-5">{doc.description}</p>

                    <div className="space-y-2 pt-4 border-t border-stone-100 text-xs">
                      {doc.meta.map((row) => (
                        <div key={row.label} className="flex justify-between gap-3">
                          <span className="text-stone-500 shrink-0">{row.label}:</span>
                          <span
                            className={`text-right font-semibold ${
                              row.highlight ? "text-emerald-800" : "text-stone-900"
                            }`}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedDoc(doc)}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF8F4] hover:bg-emerald-900 text-stone-900 hover:text-white border border-stone-200 hover:border-emerald-900 text-xs font-semibold transition">
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>Rincian &amp; Verifikasi Dokumen</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Banner Kontak Sekretariat & Transparansi CSR */}
            <div className="mt-20 rounded-2xl bg-[#062319] text-white p-8 sm:p-12 border border-emerald-900 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  Keterbukaan Informasi Publik &amp; Kemitraan
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Membutuhkan Salinan Legalitas untuk Riset atau Kemitraan CSR?
                </h2>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Sekretariat KMPHP Mangrove Sari siap melayani verifikasi dokumen, penyusunan Proposal Kerjasama
                  Restorasi Pesisir, serta MoU resmi bersama institusi Anda dengan proses yang transparan dan akuntabel.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20KMPHP%20Mangrove%20Sari,%20kami%20ingin%20berkonsultasi%20mengenai%20kemitraan%20CSR%20dan%20salinan%20dokumen%20legalitas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>Hubungi Sekretariat</span>
                </a>
                <a
                  href="/documents/proposal-kemitraan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition">
                  <span className="material-symbols-outlined text-lg">download</span>
                  <span>Unduh Profil Organisasi (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* DOCUMENT VERIFICATION MODAL */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedDoc(null)}>
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  {selectedDoc.badge}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1">{selectedDoc.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="space-y-3 text-sm mb-5">
              {selectedDoc.meta.map((m) => (
                <div key={m.label} className="flex justify-between gap-4 py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">{m.label}</span>
                  <span className="font-semibold text-stone-900 text-right">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#FAF8F4] p-4 border border-stone-200 text-xs text-stone-700 leading-relaxed mb-6">
              {selectedDoc.scanNote}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  `Halo Sekretariat KMPHP Mangrove Sari, kami memohon salinan resmi dokumen: ${selectedDoc.title}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold transition">
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Minta Salinan ke Sekretariat</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#062319] text-stone-300 pt-16 pb-12 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <span className="text-lg font-bold tracking-tight text-white block mb-3">MANGROVE SARI</span>
            <p className="text-sm text-stone-400 leading-relaxed">
              Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) di Dukuh Pandansari, Desa Kaliwlingi, Kecamatan
              Brebes, Kabupaten Brebes, Jawa Tengah.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="hover:text-white transition" href="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/profil">
                  Profil &amp; Legalitas
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/sejarah">
                  Sejarah Kebangkitan
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/wardia">
                  Warta &amp; Media
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/galeri">
                  Galeri Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Program &amp; Fokus</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="hover:text-white transition" href="/ekowisata">
                  Ekowisata Pesisir
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/ekowisata#konservasi">
                  Pembibitan &amp; Konservasi
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/umkm">
                  Produk Olahan Warga
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/riset">
                  Penelitian &amp; Magang
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Sekretariat</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>Jl. Sungai Beting RT 01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah</li>
              <li className="text-stone-200 font-medium">+62 812-3456-7890</li>
              <li className="text-stone-200 font-medium">sekretariat@mangrovesari.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} KMPHP Mangrove Sari Brebes.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition" href="/privasi">
              Kebijakan Privasi
            </Link>
            <Link className="hover:text-white transition" href="/syarat">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        aria-label="Chat WhatsApp Sekretariat"
        href="https://wa.me/6281234567890"
        rel="noopener noreferrer"
        target="_blank"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg shadow-lg border border-emerald-600 transition">
        <span className="material-symbols-outlined text-lg">chat</span>
        <span className="text-sm font-semibold hidden sm:inline">Tanya Pengelola</span>
      </a>
    </div>
  );
}
