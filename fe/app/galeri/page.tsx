"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type GalleryCategory =
  | "Semua"
  | "Konservasi & Pembibitan"
  | "Ekowisata & Boardwalk"
  | "UMKM & Budaya"
  | "Riset & Kunjungan";

interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "Semua">;
  location: string;
  year: string;
  caption: string;
  image: string;
}

const CATEGORIES: GalleryCategory[] = [
  "Semua",
  "Konservasi & Pembibitan",
  "Ekowisata & Boardwalk",
  "UMKM & Budaya",
  "Riset & Kunjungan",
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Penanaman Bibit Bakau Swadaya",
    category: "Konservasi & Pembibitan",
    location: "Pesisir Dukuh Pandansari",
    year: "2025",
    caption:
      "Warga dan pengurus KMPHP Mangrove Sari bahu-membahu menanam bibit Rhizophora mucronata di zona pasang surut untuk memperkuat sabuk hijau pesisir.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c",
  },
  {
    id: "gal-2",
    title: "Hamparan Hutan Mangrove 440 Hektar",
    category: "Ekowisata & Boardwalk",
    location: "Kawasan Konservasi Kaliwlingi",
    year: "2026",
    caption:
      "Pemandangan udara rimbunnya kanopi hutan mangrove yang kini menjadi benteng alami pemecah gelombang sekaligus habitat burung air migran.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I",
  },
  {
    id: "gal-3",
    title: "Jalur Tracking Kayu Dewi Mangrove Sari",
    category: "Ekowisata & Boardwalk",
    location: "Zona Edukasi Dewi Mangrove Sari",
    year: "2026",
    caption:
      "Jembatan kayu (boardwalk) sepanjang lebih dari 720 meter membelah rimbunnya pohon bakau, memudahkan pengunjung menikmati ekosistem pesisir dengan aman.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7r30mmq4prU300WAuRAfEtRQhOT1PJhRY4BH7UaDtkwuH2c2noe5WhKybCUs68DR_TrCed3_IWeGAMCknYVQbUyloJ6fNjGqdj7xzO6eyyXgf7Q8llPZjmy9ZI5XUaQJ8Nn14puB47v5w930z4YBWM2MKHK0mGUmMojf_XbKtWxAx2d9FZxi0QkxNFoKtu9Kn0EyRdNAnRGJ-d5B-I29ZuWbVGR7qDB3wuruSdKE",
  },
  {
    id: "gal-4",
    title: "Gotong Royong Nelayan & Petani Tambak",
    category: "UMKM & Budaya",
    location: "Muara Sungai Pemali, Pandansari",
    year: "2025",
    caption:
      "Sinergi warga pesisir dalam menjaga alur perahu wisata dan kelestarian ekosistem payau sebagai penopang ekonomi keluarga.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWVgtiFQVlM9viu-VsB8GEC-f0ZCGOU0R1yKha3gTyUjod-M9HlELVCWpEL-1PDwYOclX39XFbcmZv31iVa6kEqQ9IaoGgvuBYg9l43QbcCqffQ8nYVkedUJlaF2L7mIESc-fXZXHmje7jt2MVz9Kyt05uF3-rE8cys7P9OqY5PNDR6tCCR8XteNV4-EOnFlH0LWTFoY7Te1jXx0Cbi4qVDNRLnIaxooSt57pDlsk",
  },
  {
    id: "gal-5",
    title: "Pendampingan Riset Mahasiswa & Peneliti",
    category: "Riset & Kunjungan",
    location: "Stasiun Lapangan KMPHP",
    year: "2026",
    caption:
      "Pengukuran kerapatan vegetasi, keanekaragaman biota, dan serapan karbon biru bersama mahasiswa dan akademisi dari berbagai perguruan tinggi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC8W3pFFHkKS78KhjgsN6wPxp-dpJ_MsgUx_s4R5yIgg7BfC_ORb9yfkiMNyAYIJQTOpP8sTRYYX5jT_973Kir4v3CaycPA0ljssAe9acj8FSey8-oDMosVHMJoLmUO7_BMmCKm_JwMZa0COyLTatqevezaNQZ9A0vNqjuI8vEOhzUAqvK3ysORRwscy0Vcw2N93EEH6z3tsw7Pr5Mhq9cZUDRrzJeo7d2a8lLxCw",
  },
  {
    id: "gal-6",
    title: "Alur Sungai & Zona Silvofishery",
    category: "Konservasi & Pembibitan",
    location: "Muara Sungai Beting, Kaliwlingi",
    year: "2025",
    caption:
      "Sirkulasi air payau yang terjaga mendukung pembiakan alami kepiting bakau, udang liar, serta peremajaan tegakan mangrove muda.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa0ohh9pS2mnjjJp_RTsgJvC9fxNJFH09m6S1u_93VzkRTRlmVPHmIujZxDKoJvDlfvg8HgEMejNu1G4rEHPNU8YhEmAlUEj9O5Jptcd2LmaQG5GzPQrgxURwNReucaa2cwau93R1j4uhZvIYwr7MaoXkSdACymjnYBwG2bmaFDY9sXiiSBAK3c-84t6Pn-16EECg3jaM_Cv49bEbW4AJ0hP_wAIUX8NDspMb-QeM",
  },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Semua");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "Semua" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FAF8F4] font-sans text-stone-800 antialiased min-h-screen selection:bg-emerald-900 selection:text-white">
      <SiteHeader />

      <main className="w-full">
        {/* 1. HERO HEADER */}
        <section className="bg-[#062319] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 border-b-4 border-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                Arsip Visual Kawasan · Dukuh Pandansari
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                Galeri Dokumentasi Konservasi &amp; Ekowisata
              </h1>
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed">
                Rekaman jejak gotong royong warga dalam memulihkan 440 hektar sabuk hijau pesisir Brebes, aktivitas
                ekowisata bahari, pemberdayaan UMKM, hingga kolaborasi riset lapangan.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FILTER BAR & GALLERY GRID */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-stone-200">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#062319] text-white shadow-xs"
                          : "bg-[#FAF8F4] text-stone-700 hover:bg-stone-200/70 border border-stone-200"
                      }`}>
                      {category}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-medium text-stone-500">Menampilkan {filteredItems.length} dokumentasi</span>
            </div>

            {/* Gallery Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group cursor-pointer bg-[#FAF8F4] rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-white/95 text-emerald-950 text-xs font-semibold shadow-xs">
                        {item.category}
                      </span>
                      <span className="absolute bottom-3 right-3.5 w-8 h-8 rounded-lg bg-black/50 text-white flex items-center justify-center backdrop-blur-xs opacity-90 group-hover:bg-amber-600 transition">
                        <span className="material-symbols-outlined text-base">zoom_in</span>
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-2">
                        <span>{item.location}</span>
                        <span>{item.year}</span>
                      </div>
                      <h2 className="text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-emerald-800 transition">
                        {item.title}
                      </h2>
                      <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{item.caption}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA KUNJUNGAN & DOKUMENTASI */}
        <section className="py-16 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                Kunjungan &amp; Liputan Media
              </p>
              <h3 className="text-xl font-bold text-stone-900">
                Ingin Melakukan Liputan, Riset Lapangan, atau Kunjungan Edukasi?
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#062319] hover:bg-emerald-900 text-white text-sm font-semibold transition">
                <span>Hubungi Sekretariat</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}>
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden border border-stone-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] bg-stone-900">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Tutup pratinjau"
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/65 hover:bg-black text-white flex items-center justify-center transition">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-emerald-900/10 text-emerald-900 text-xs font-semibold">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-stone-500">
                  {selectedPhoto.location} · {selectedPhoto.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{selectedPhoto.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{selectedPhoto.caption}</p>
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
                <Link className="hover:text-white transition" href="/organisasi">
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
    </div>
  );
}
