"use client";

import React, { useState } from "react";

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
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Majalah
            </a>
            <div className="relative group">
              <button
                className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all flex items-center gap-1"
                type="button">
                Profile
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col w-48 bg-primary rounded-xl shadow-[0_12px_32px_-4px_rgba(31,77,58,0.25)] p-space-xs z-50">
                <a
                  className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-primary-container hover:bg-primary-container hover:text-on-primary transition-all"
                  href="#">
                  Organisasi
                </a>
                <a
                  className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-primary-container hover:bg-primary-container hover:text-on-primary transition-all"
                  href="#">
                  Sejarah
                </a>
              </div>
            </div>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Artikel
            </a>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Ekowisata
            </a>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              UMKM
            </a>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Video
            </a>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Galeri
            </a>
            <a
              className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all"
              href="#">
              Kontak
            </a>
          </nav>

          <div className="flex items-center gap-space-sm">
            <div className="hidden md:flex items-center gap-space-xs">
              <a
                aria-label="Facebook Mangrove Sari"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
                href="#">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Instagram Mangrove Sari"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
                href="#">
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
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Majalah
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Artikel
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Ekowisata
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              UMKM
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Video
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Galeri
            </a>
            <a className="px-space-md py-space-sm rounded-lg text-on-primary-container hover:text-on-primary" href="#">
              Kontak
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <section className="relative w-full -mt-20 overflow-hidden bg-primary text-on-primary min-h-[942px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover object-center scale-105 duration-1000 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I"
                alt="Mangrove Forest"
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
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[28px] text-secondary">sailing</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                    Ekowisata Pesisir
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    Aneka Ragam Jelajah Hutan Mangrove
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Tracking mangrove di atas jembatan kayu sepanjang estuari, sensasi susur perahu tradisional, belajar
                    membatik mangrove, budidaya kepiting soka, pentas tarian lokal, serta kuliner pesisir khas Brebes.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container">
                  <a
                    className="inline-flex items-center gap-1 font-title-md text-title-md text-secondary hover:text-primary transition-colors group"
                    href="#">
                    <span>Pelajari Selengkapnya</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary mb-space-xs">
                    <span className="material-symbols-outlined text-[28px] text-tertiary-container">shopping_bag</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider">
                    Pemberdayaan Warga
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">Paket UMKM Spesial Untuk Anda</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Produk unik hasil karya tangan dan pemberdayaan masyarakat Dukuh Pandansari seperti sirup buah
                    pidada/bogem kaya vitamin, keripik daun mangrove renyah, kopi mangrove, serta suvenir ramah
                    lingkungan.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container">
                  <a
                    className="inline-flex items-center gap-1 font-title-md text-title-md text-tertiary-container hover:text-tertiary transition-colors group"
                    href="#">
                    <span>Katalog Produk UMKM</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[28px] text-primary">verified_user</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Akuntabilitas &amp; Legalitas
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    Legalitas Badan Usaha &amp; Organisasi
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Tata kelola transparan di bawah Kelompok Masyarakat Pengawas Hutan Pesisir (KMPHP) Mangrove Sari,
                    memiliki SK resmi desa &amp; kementerian, kemitraan BUMN, struktur kepengurusan terpadu, dan SOP
                    keamanan perahu.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container">
                  <a
                    className="inline-flex items-center gap-1 font-title-md text-title-md text-primary hover:text-secondary transition-colors group"
                    href="#">
                    <span>Struktur &amp; Dokumen</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 3. STORY SECTION */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-background" id="kisah">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(31,77,58,0.12)]">
                  <img
                    className="w-full h-[460px] object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c"
                    alt="Planting mangroves"
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
                  menenggelamkan ratusan hektar tambak bandeng dan merobohkan rumah warga.
                </p>
                <div className="grid grid-cols-2 gap-space-md pt-space-xs font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    <span className="font-semibold text-primary">Restorasi 440+ Ha Lahan Rusak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    <span className="font-semibold text-primary">Mandiri Ekonomi Berbasis UMKM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PILAR KEBERHASILAN */}
          <section className="w-full py-space-xl px-space-md lg:px-margin bg-surface-container-low" id="pilar">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-xs">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Komitmen &amp; Rekam Jejak
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                  Pilar Keberhasilan Mangrove Sari
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px] text-secondary">park</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                    01. Rehabilitasi Hutan
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">4.479.500 Batang di 440 Ha</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Pemulihan sabuk hijau pesisir membentang melindungi pemukiman warga dari ancaman abrasi rob Laut
                    Jawa.
                  </p>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[26px] text-tertiary-container">school</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider">
                    02. Pelatihan &amp; Keterampilan
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    Olahan Pangan &amp; Hasil Hutan
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Pemberdayaan ibu-ibu pesisir dalam mengolah buah bogem menjadi sirup, dodol, dan keripik daun bakau.
                  </p>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px] text-primary">theater_comedy</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    03. Seni Kebudayaan
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">Kampanye Seni Budaya Pesisir</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Pementasan tari tradisi pesisir, teater rakyat anak nelayan, dan festival tahunan.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-primary-container text-on-primary px-space-md lg:px-margin pt-space-xl pb-space-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-space-md font-body-sm text-body-sm text-on-primary-container">
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
        <span className="material-symbols-outlined text-[20px]">forum</span>
        <span className="font-title-md text-title-md font-bold">Konsultasi Wisata</span>
      </a>
    </div>
  );
}
