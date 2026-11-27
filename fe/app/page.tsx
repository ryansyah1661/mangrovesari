import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

interface ProgramCard {
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
}

interface PillarGroup {
  cluster: string;
  accent: string;
  items: {
    num: string;
    title: string;
    detail: string;
  }[];
}

interface Stat {
  figure: string;
  label: string;
  context: string;
}

interface TeamMember {
  name: string;
  role: string;
  since: string;
  focus: string;
}

interface NewsItem {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
  href: string;
}

const PROGRAMS: ProgramCard[] = [
  {
    category: "Ekowisata Pesisir",
    title: "Ragam Aktivitas Ekowisata Mangrove",
    description:
      "Jelajahi keindahan Mangrove Sari melalui berbagai aktivitas menarik. Nikmati pengalaman menyusuri hutan mangrove, naik speed boat, belajar membatik, budidaya kepiting, hingga menikmati tarian dan kuliner khas lokal.",
    cta: "Eksplorasi Kawasan Ekowisata",
    href: "/ekowisata",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I",
  },
  {
    category: "Ekonomi Warga",
    title: "Produk Unggulan UMKM Lokal",
    description:
      "Kenali beragam produk kreatif hasil pemberdayaan UMKM Mangrove Sari. Temukan produk olahan, kerajinan, dan berbagai karya masyarakat lokal sebagai bentuk dukungan terhadap ekonomi masyarakat pesisir.",
    cta: "Telusuri Produk UMKM",
    href: "/umkm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c",
  },
  {
    category: "Kelembagaan",
    title: "Profil Organisasi Mangrove Sari",
    description:
      "Kenali lebih dekat Kelompok Masyarakat Pelestari Hutan Pesisir Mangrove Sari. Pelajari struktur organisasi, pembagian peran, serta upaya bersama dalam menjaga kelestarian ekosistem mangrove.",
    cta: "Lihat Struktur & Legalitas",
    href: "/profil",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I",
  },
];

const STORY_HIGHLIGHTS = [
  "Restorasi 440+ hektar lahan bekas tambak terabrasi",
  "250+ warga lokal terlibat langsung dalam pengelolaan",
  "Stasiun riset lapangan & KKN perguruan tinggi nasional",
  "Penerima penghargaan lingkungan hidup Kalpataru",
];

const PILLAR_GROUPS: PillarGroup[] = [
  {
    cluster: "Ekologi & Pemulihan Pesisir",
    accent: "border-t-emerald-800",
    items: [
      {
        num: "01",
        title: "Rehabilitasi & Reboisasi",
        detail: "Penanaman 4.479.500 batang dari 26 jenis mangrove di hamparan pesisir seluas 440 hektar.",
      },
      {
        num: "02",
        title: "Pemulihan Habitat Satwa",
        detail: "Kembalinya koloni burung air migran, bangau, serta ekosistem biota laut di sela akar bakau.",
      },
      {
        num: "03",
        title: "Inovasi Tata Air Pesisir",
        detail: "Pengelolaan ekosistem payau yang memadukan sabuk hijau pelindung pantai dengan zona edukasi.",
      },
    ],
  },
  {
    cluster: "Ekonomi & Kemandirian Warga",
    accent: "border-t-amber-600",
    items: [
      {
        num: "04",
        title: "Pelatihan Pangan Olahan",
        detail: "Pemanfaatan buah mangrove bogem menjadi sirup, dodol, dan camilan bernilai jual.",
      },
      {
        num: "05",
        title: "Peningkatan Tangkapan Nelayan",
        detail: "Melimpahnya populasi udang liar, kepiting bakau, dan ikan di sekitar perakaran mangrove.",
      },
      {
        num: "06",
        title: "Penyerapan 250 Tenaga Kerja",
        detail: "Membuka lapangan kerja langsung bagi warga Dukuh Pandansari dan desa penyangga.",
      },
    ],
  },
  {
    cluster: "Usaha Rakyat & Budaya",
    accent: "border-t-teal-800",
    items: [
      {
        num: "07",
        title: "30 Unit Usaha Masyarakat",
        detail: "Tumbuhnya usaha mikro mandiri mulai dari warung kuliner laut, perahu susur sungai, hingga batik.",
      },
      {
        num: "08",
        title: "Kampanye Kebudayaan",
        detail: "Edukasi isu perubahan iklim dan penyelamatan pesisir melalui pentas seni dan tradisi lokal.",
      },
      {
        num: "09",
        title: "Kemandirian Komunitas",
        detail: "Operasional kawasan dibiayai secara swadaya dengan prinsip tata kelola transparan.",
      },
    ],
  },
  {
    cluster: "Jejaring & Pengetahuan",
    accent: "border-t-stone-800",
    items: [
      {
        num: "10",
        title: "70 Mitra Dalam & Luar Negeri",
        detail: "Kolaborasi aktif bersama NGO, korporasi, dan instansi pemerintah dalam program konservasi.",
      },
      {
        num: "11",
        title: "Kunjungan 30 Negara",
        detail: "Menjadi rujukan studi banding dan edukasi pesisir bagi delegasi mancanegara.",
      },
      {
        num: "12",
        title: "35 Publikasi Ilmiah",
        detail: "Laboratorium alam yang melahirkan puluhan jurnal riset akademisi dan mahasiswa.",
      },
    ],
  },
];

const STATS: Stat[] = [
  { figure: "440 Ha", label: "Luas Kawasan", context: "Hutan mangrove terjaga" },
  { figure: "4,47 Jt", label: "Batang Ditanam", context: "26 spesies mangrove" },
  { figure: "250+", label: "Warga Terlibat", context: "Pengelola & pekerja lokal" },
  { figure: "30", label: "UMKM Aktif", context: "Usaha olahan & jasa" },
  { figure: "70", label: "Mitra Kerja", context: "NGO, kampus & CSR" },
  { figure: "35", label: "Kajian Ilmiah", context: "Jurnal & riset akademis" },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rusjan",
    role: "Ketua Pengelola",
    since: "Penggerak sejak 2005",
    focus: "Inisiator pemulihan pesisir Pandansari dan koordinator utama gotong royong warga.",
  },
  {
    name: "Sugiarto",
    role: "Koordinator Lapangan",
    since: "Operasional Kawasan",
    focus: "Mengawasi perawatan jalur boardwalk kayu, kesiapan armada perahu, serta keselamatan pengunjung.",
  },
  {
    name: "Mashadi",
    role: "Divisi Pembibitan & Riset",
    since: "Konservasi & Edukasi",
    focus: "Mengelola kebun bibit mangrove dan mendampingi peneliti maupun mahasiswa di lapangan.",
  },
  {
    name: "Supardi",
    role: "Bendahara Organisasi",
    since: "Tata Kelola Keuangan",
    focus: "Menjaga pencatatan kas kawasan, alokasi dana program CSR, serta pembagian hasil usaha warga.",
  },
  {
    name: "Abdul Kamid",
    role: "Humas & Kemitraan",
    since: "Hubungan Kelembagaan",
    focus: "Menjembatani komunikasi dengan pemerintah daerah, akademisi, media, dan mitra lembaga.",
  },
  {
    name: "Jarodin",
    role: "Pengembangan Usaha",
    since: "Ekowisata & UMKM",
    focus: "Mengembangkan jalur edukasi susur sungai, standar kuliner pesisir, serta pemasaran produk UMKM.",
  },
];

const NEWS_LIST: NewsItem[] = [
  {
    tag: "Kegiatan Lapangan",
    date: "18 Februari 2026",
    title: "Pelepasliaran 500 Bibit Kepiting Bakau Bersama Mahasiswa",
    excerpt:
      "Upaya menjaga keseimbangan rantai makanan ekosistem rawa pasang surut sekaligus mendukung produktivitas tangkapan nelayan setempat.",
    href: "/wardia",
  },
  {
    tag: "Fasilitas Kawasan",
    date: "10 Februari 2026",
    title: "Perbaikan Jalur Boardwalk Kayu Sepanjang 800 Meter Rampung",
    excerpt:
      "Akses menyusuri rimbunnya hutan bakau kini lebih kokoh dan aman dilalui rombongan pelajar maupun keluarga.",
    href: "/wardia",
  },
  {
    tag: "Kabar UMKM",
    date: "28 Januari 2026",
    title: "Sirup Bogem Olahan Ibu-Ibu Pandansari Raih Apresiasi Daerah",
    excerpt:
      "Minuman olahan alami dari buah mangrove karya kelompok perempuan tani resmi masuk jaringan pemasaran kabupaten.",
    href: "/wardia",
  },
];

const PARTNERS = [
  "Kementerian LHK",
  "Pemprov Jawa Tengah",
  "Universitas Diponegoro",
  "IPB University",
  "Pertamina Foundation",
  "USAID Indonesia",
  "BPDAS Pemali Jratun",
  "Yayasan KEHATI",
];

function SectionDivider({ number, label }: { number: string; label: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-700" />
          <span>
            {number} · {label}
          </span>
        </span>
        <div className="h-px flex-1 bg-stone-200" />
        <span className="text-[11px] font-medium text-stone-400 hidden sm:inline">KMPHP Mangrove Sari</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-stone-800 antialiased min-h-screen selection:bg-emerald-900 selection:text-white">
      <SiteHeader />

      <main className="w-full">
        {/* FULL-BLEED HERO */}
        <section className="relative min-h-[88vh] flex items-end bg-emerald-950 text-white pt-28 pb-16 sm:pb-20 overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I"
            alt="Hamparan hutan mangrove Desa Kaliwlingi Brebes"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062319] via-[#062319]/75 to-[#062319]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062319]/90 via-[#062319]/45 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
                Dukuh Pandansari · Desa Kaliwlingi, Brebes
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.15] mb-6">
                Mangrove Sari, Menjaga Alam dan Kehidupan Pesisir
              </h1>

              <p className="text-base sm:text-lg text-stone-200 max-w-2xl leading-relaxed mb-9 font-normal">
                Melestarikan Ekosistem Mangrove, Memberdayakan Masyarakat, Membangun Masa Depan Berkelanjutan.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#kisah"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-lg transition">
                  <span>Telusuri Kisah Kami</span>
                </a>
                <Link
                  href="/ekowisata"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-sm transition">
                  <span>Jelajahi Kawasan</span>
                </Link>
              </div>
            </div>

            {/* Bottom Key Facts Strip */}
            <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 text-sm">
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                <div>
                  <span className="block text-xl font-bold text-white">440 Ha</span>
                  <span className="text-xs text-stone-300">Hutan Mangrove Terjaga</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-white">250+ Warga</span>
                  <span className="text-xs text-stone-300">Pengelola &amp; Pelaku UMKM</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-white">Sejak 2005</span>
                  <span className="text-xs text-stone-300">KMPHP Berbadan Hukum</span>
                </div>
              </div>
              <span className="text-xs font-medium text-amber-300/90 hidden md:inline">
                6°47&apos;S 109°02&apos;E · Pesisir Utara Jawa Tengah
              </span>
            </div>
          </div>
        </section>

        {/* THREE CORE PROGRAMS */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  01 · Ruang Gerak Kawasan
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Tiga Pilar Desa Wisata Mangrove Sari
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PROGRAMS.map((item) => (
                <article
                  key={item.title}
                  className="group bg-stone-50/70 rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition duration-300 flex flex-col">
                  <Link href={item.href} className="relative block aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-white/95 text-emerald-950 text-xs font-semibold uppercase tracking-wider shadow-xs">
                      {item.category}
                    </span>
                  </Link>

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-stone-900 mb-3 leading-snug group-hover:text-emerald-800 transition">
                        <Link href={item.href}>{item.title}</Link>
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-6">{item.description}</p>
                    </div>

                    <div className="pt-4 border-t border-stone-200/80">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-amber-700 transition">
                        <span>{item.cta}</span>
                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider number="02" label="Jejak Konservasi" />

        {/* STORY SECTION */}
        <section id="kisah" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                  <img
                    className="w-full h-[25rem] sm:h-[31rem] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c"
                    alt="Warga menanam bibit mangrove di pesisir Brebes"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
                  Kisah Kebangkitan
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight mb-5">
                  Dari Tambak Terabrasi Menjadi Sabuk Hijau Pesisir Brebes
                </h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Pada awal tahun 2000-an, abrasi laut menggerus ratusan hektar tambak warga di Dukuh Pandansari, Desa
                  Kaliwlingi. Alih-alih meninggalkan kampung halaman, warga berinisiatif menanam kembali pohon bakau
                  untuk menahan gelombang pasang.
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Dua dekade berselang, hutan yang tumbuh rapat itu tidak hanya menyelamatkan daratan, tetapi juga
                  menghidupkan kembali ekosistem kepiting, udang, serta membuka ruang wisata edukasi Dewi Mangrove Sari.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-stone-50/70 p-6 rounded-xl border border-stone-200 mb-8">
                  {STORY_HIGHLIGHTS.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-stone-800 font-medium">
                      <span className="material-symbols-outlined text-emerald-700 text-lg shrink-0">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/sejarah"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm transition">
                  <span>Baca Sejarah Kebangkitan</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAND (Kontras Gelap) */}
        <section className="bg-[#062319] text-stone-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight mb-2">{s.figure}</span>
                  <div>
                    <span className="block text-sm font-semibold text-white">{s.label}</span>
                    <span className="block text-xs text-stone-400 mt-0.5">{s.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12 PILLARS */}
        <section id="pilar" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  03 · Capaian &amp; Fokus Kerja
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Pilar Keberhasilan Pengelolaan <span className="whitespace-nowrap">Mangrove Sari</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PILLAR_GROUPS.map((group) => (
                <div
                  key={group.cluster}
                  className={`bg-stone-50/60 rounded-2xl p-7 sm:p-8 shadow-xs border border-stone-200 border-t-4 ${group.accent}`}>
                  <h3 className="text-lg font-bold tracking-tight text-stone-900 pb-4 mb-6 border-b border-stone-200">
                    {group.cluster}
                  </h3>
                  <div className="space-y-6">
                    {group.items.map((p) => (
                      <div key={p.num} className="flex items-start gap-4">
                        <span className="text-xs font-bold px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-700 shrink-0 mt-0.5">
                          {p.num}
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-stone-900 mb-1">{p.title}</h4>
                          <p className="text-sm text-stone-600 leading-relaxed">{p.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEKAPUR SIRIH SECTION (Framed Container Card di atas White) */}
        <section className="py-6 sm:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-stone-50/80 border border-stone-200 p-8 sm:p-12 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Kolom Kiri: Foto Pengelola / Aktivitas Kawasan */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c"
                        alt="Pengurus dan warga KMPHP Mangrove Sari di kawasan konservasi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Kolom Kanan: Naskah Lengkap Sekapur Sirih */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-0.5 w-8 bg-emerald-800" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                      04 · Sambutan &amp; Komitmen Kami
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-snug mb-6">
                    Sekapur Sirih
                  </h2>

                  <div className="space-y-5 text-stone-600 leading-relaxed">
                    <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
                      Mangrove Sari adalah Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) yang berada di Desa
                      Kaliwlingi, Kecamatan Brebes, Jawa Tengah. Kami berdiri atas inisiatif masyarakat setempat untuk
                      memulihkan dan melestarikan hutan mangrove di wilayah kami, sekaligus mengembangkan kawasan ini
                      menjadi wisata edukasi Dewi Mangrove Sari.
                    </p>

                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      KMPHP Mangrove Sari memiliki visi untuk menjaga ekosistem daerah aliran sungai dan pesisir dalam
                      kerangka peningkatan kesejahteraan masyarakat sebagai wadah usaha bersama dengan prinsip
                      demokrasi, transparan, dan mengedepankan kegiatan berbasis konservasi.
                    </p>

                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      Rehabilitasi di lingkungan pesisir, sungai, muara sungai, dan daerah aliran sungai sejak tahun
                      2005 ini terus berkembang melalui inovasi pemanfaatan potensi sumber daya alam serta kolaborasi
                      dengan segenap elemen—mulai dari pemerintah, LSM nasional maupun internasional, perguruan tinggi,
                      komunitas, seniman dan budayawan, hingga media massa.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-stone-700">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                        Swadaya Masyarakat
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                        Demokratis &amp; Transparan
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                        Berbasis Konservasi
                      </span>
                    </div>

                    <Link
                      href="/profil"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-amber-700 transition">
                      <span>Profil &amp; Legalitas Organisasi</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  05 · Penggerak Lapangan
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900">
                  Tim Inti Pengelola Kawasan
                </h2>
              </div>
              <p className="text-sm text-stone-600 max-w-md">
                Tokoh warga lokal yang mengoordinasikan pembibitan, operasional kawasan, keuangan, hingga kemitraan
                riset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((m) => (
                <div
                  key={m.name}
                  className="bg-stone-50/70 rounded-xl p-6 border border-stone-200 shadow-xs hover:border-emerald-700/50 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#062319] text-amber-400 font-bold text-sm flex items-center justify-center shrink-0">
                        {m.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-medium text-stone-600 bg-white border border-stone-200 px-2.5 py-1 rounded">
                        {m.since}
                      </span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">{m.role}</p>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">{m.name}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{m.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider number="06" label="Kolaborasi & Kabar Pesisir" />

        {/* CTA PARTNERSHIP & NEWS SECTION */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CTA Partnership Banner */}
            <div className="rounded-2xl bg-[#062319] text-white p-8 sm:p-12 border border-emerald-900 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  Kolaborasi &amp; Penelitian
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Program Penanaman CSR, Riset Akademik, &amp; Studi Banding
                </h2>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Kami mendampingi lembaga, perusahaan, maupun perguruan tinggi yang ingin melaksanakan penanaman bibit
                  terukur, penelitian ekosistem mangrove, atau kunjungan edukasi lapangan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition">
                  Hubungi Sekretariat
                </Link>
                <a
                  href="/documents/proposal-kemitraan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition">
                  <span className="material-symbols-outlined text-lg">download</span>
                  <span>Unduh Profil (PDF)</span>
                </a>
              </div>
            </div>

            {/* News Header */}
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold text-emerald-800 uppercase tracking-widest mb-1">Kabar Terbaru</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">Catatan dari Pesisir</h2>
              </div>
              <Link
                href="/wardia"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 hover:text-emerald-800 transition">
                <span>Semua Warta</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {NEWS_LIST.map((n) => (
                <article
                  key={n.title}
                  className="bg-stone-50/70 rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition flex flex-col group">
                  <Link href={n.href} className="block relative overflow-hidden bg-stone-200 aspect-[16/10]">
                    {n.image ? (
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        src={n.image}
                        alt={n.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#062319] to-emerald-900 flex flex-col items-center justify-center text-emerald-200/70 p-6 text-center">
                        <span className="material-symbols-outlined text-3xl mb-1 text-amber-400/80">forest</span>
                        <span className="text-[11px] uppercase tracking-widest font-medium">Dokumentasi Lapangan</span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-stone-900/85 text-white text-xs font-medium backdrop-blur-xs">
                      {n.tag}
                    </span>
                  </Link>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <time className="text-xs text-stone-500 block mb-2">{n.date}</time>
                      <h3 className="text-lg font-bold tracking-tight text-stone-900 leading-snug mb-2 group-hover:text-emerald-800 transition">
                        <Link href={n.href}>{n.title}</Link>
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4">{n.excerpt}</p>
                    </div>
                    <Link
                      href={n.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-700 pt-3 border-t border-stone-200/80">
                      <span>Baca Catatan</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION (Framed Container Card di atas White) */}
        <section className="pb-20 sm:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-stone-50/80 border border-stone-200 p-7 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-7">
                <p className="text-xs font-semibold text-stone-700 uppercase tracking-widest">
                  07 · Mitra Pendukung &amp; Jejaring Riset
                </p>
                <span className="text-xs text-stone-500">Bagian dari 70+ lembaga mitra sejak 2005</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PARTNERS.map((name) => (
                  <div
                    key={name}
                    className="bg-white border border-stone-200 rounded-lg px-4 py-3.5 text-sm font-semibold text-stone-800 flex items-center justify-between">
                    <span>{name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
