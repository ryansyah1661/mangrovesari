import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ekowisata Dewi Mangrove Sari Brebes",
  description:
    "Nikmati keindahan bentang pesisir utara Brebes sambil belajar konservasi hutan bakau bersama warga Dukuh Pandansari.",
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCP-ThHIXoIPV_Yi91CjjG2OPvtFQyQ_De6aT-FKeiBoQ2uia11FCVljJiwhTWe127uzif58mPVpobdkIJj0jLXYeP-FF8z5hd9sHP0SdQOxeWmIowAL6nKeG9WbPFmCKKS2ogDJENE41956yjCwRhvmZXw9WgzEkuIItY4ywxeNqacFRtWY3d1lK5f6OmgXrhi8Afz46CcUMLYkfpzvmk1rJwoN-i6T3wrTBwhfwE";

const HERO_METRICS = [
  { value: "440+ Ha", label: "Area Konservasi", wide: false },
  { value: "1,2 Km", label: "Jalur Boardwalk Kayu", wide: false },
  { value: "100%", label: "Kelola Swadaya Komunitas", wide: true },
];

const INTRO_BADGES = [
  { icon: "park", text: "440 Hektar Hutan Bakau" },
  { icon: "directions_walk", text: "Jalur Boardwalk Rindang" },
  { icon: "family_restroom", text: "Fasilitas Ramah Keluarga" },
];

const PILLARS = [
  {
    icon: "school",
    bg: "bg-emerald-100 text-emerald-800",
    title: "Edukasi Vegetasi Pesisir",
    text: "Mengenal jenis mangrove Rhizophora dan Avicennia serta fungsinya menahan abrasi pantai dan menjadi rumah biota laut.",
  },
  {
    icon: "volunteer_activism",
    bg: "bg-teal-100 text-teal-800",
    title: "Aksi Tanam Bibit",
    text: "Pengunjung dapat ikut serta menanam bibit bakau langsung di area restorasi lumpur pesisir.",
  },
  {
    icon: "groups_3",
    bg: "bg-amber-100 text-amber-800",
    title: "Interaksi Sosial Warga",
    text: "Melihat langsung aktivitas warga lokal dalam pembuatan garam rebus tradisional, budidaya kepiting, dan batik mangrove.",
  },
];

const TAG_PRIMARY = "bg-emerald-800 text-white";
const TAG_SECONDARY = "bg-amber-700 text-white";

const ACTIVITIES = [
  {
    tag: "Trekking",
    tagStyle: TAG_PRIMARY,
    duration: "± 1 - 2 Jam",
    title: "Trekking Boardwalk",
    desc: "Menyusuri jembatan kayu di bawah rimbunnya kanopi hutan mangrove, dilengkapi area menara pandang dan spot foto.",
    foot: "Rute 1.200 Meter",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtNGO3TbqVYhKojymYs_aM8BirwbqZQRRUzuSHpOCgsZ86bjX65gvL1Uz_NjQer42kWCgSQiXppI1N3E5p1TPv8aUzhCoy9D0hFNnPw4TdeCbbQZsbjmKw9ZUdXhVEyjwGJIcoijbLmiD4OI1Qgwd3sdHCY_X112YTnB2NR21Xo5bWT2yt_X_H6d8nrZV1CRUps58XYJkHS7NwHQG4i9X_T1DCdpd3nHGC4cPC2f4",
    alt: "Pengunjung berjalan di atas jembatan kayu hutan bakau",
  },
  {
    tag: "Susur Sungai",
    tagStyle: TAG_SECONDARY,
    duration: "± 45 Menit",
    title: "Susur Perahu Muara",
    desc: "Perjalanan perahu motor menyusuri muara Sungai Beting menuju muara laut Jawa didampingi pengemudi lokal.",
    foot: "Termasuk Pelampung Keselamatan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqojvuPRtffrzloQr_-vfQPcgrOQbbBswXKSRhA1T6VrlhM5in9MMxV51GrMsPI8NajjFpKnlDbsEBFFaQdQTD3TNjdNJZSaO20fIL_pJBzIWfQjngjs-JNXLY5wlUZU12V9SziKS_w2A9enQ6cN0sMxMfpxRPJ6AFrXVBx6tjgivAr-LtRZtpb4eGcZlv8M6Qdo7WSKVxptbpQnsXVlNlSh8HNMe9kOvRny39SU",
    alt: "Perahu motor menyusuri alur sungai bakau",
  },
  {
    tag: "Workshop",
    tagStyle: TAG_PRIMARY,
    duration: "± 1,5 Jam",
    title: "Batik Pewarna Mangrove",
    desc: "Belajar teknik mencanting batik pesisir dengan ekstrak alami dari buah dan kulit mangrove bersama pengrajin lokal.",
    foot: "Hasil Kain Dibawa Pulang",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJQAWDPu3Rgs2G8IqQJSMSGBHeAzWmm6-NDKa6VGW3MVA-O2pvWH9Dy_PqMoY_7k8DPFUnjYIaCgGd5u67j5XhmvyKpet2ryMneVXdQWISRmTbQ56ctxlNWe33BZVnb1aoX96rcLOIPXarg81yQBgxVPQ34BWPM_9E9cs_krkRloGVfQb9eH6o0drVQqdDtZJQ-1Fz9qBruc0NHwNcrvvQl07RxdPyoY4JCOxSMPY",
    alt: "Proses pembuatan batik pewarna alami",
  },
  {
    tag: "Budidaya",
    tagStyle: TAG_SECONDARY,
    duration: "± 1 Jam",
    title: "Budidaya Kepiting Soka",
    desc: "Melihat metode silvofishery dalam budidaya kepiting lunak yang ramah lingkungan di area tambak bakau.",
    foot: "Praktik Lapangan Tambak",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApdZXtbLuWhQEivvTxZL47bdUCd1UrRV2VT2rknpaq8ePft8tEZ1FXwaIx3i5UhB5VQVkv-dR3wqaPghydnQzPCnklV59g_wjCHPxJ5rAgACuSB5pwgAV5ONjtBBHict-BIYhiZ_WC9ACuGANXoKUW9kan4xbRngjp2uqdNGX5JM2Jvf_4FCFOrZ6hLPUAMGYs7DpXocRsnZ5UGfJw_lVuoA9T3D850nXQ2RdIXvI",
    alt: "Petambak menunjukkan hasil kepiting soka",
  },
  {
    tag: "Seni Budaya",
    tagStyle: TAG_PRIMARY,
    duration: "± 45 Menit",
    title: "Kesenian Tari Pesisir",
    desc: "Pertunjukkan tari tradisional warga nelayan Pandansari untuk menyambut kunjungan rombongan.",
    foot: "Khusus Reservasi Rombongan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMJa0aaJ5bmwYc0ok89jq6UmZe9AEq8zLIpkm3QMMhv8KT_V4vHoQ88RgL033xZkYpEAh89gt7G9zR7s_PUBVLwmX3wpHmwLohcl-kisW_d6-6NaPJbWFNAS1JVdoQblQMskKNBzHXCDYN-XDqKowG5wI1_LkLxFZsUIjUqaF47gttRw3ggavv8VyxcHnmwUq2hlK_yScOnGl2XE7bwkXkYtgv9T3oCTQhXwhupoE",
    alt: "Penari tradisional tampil di panggung kayu",
  },
  {
    tag: "Kuliner",
    tagStyle: TAG_SECONDARY,
    duration: "Santap Siang",
    title: "Kuliner Laut Pesisir",
    desc: "Sajian olahan ikan segar, kepiting, dan hidangan seafood khas Kaliwlingi dilengkapi minuman segar sirup buah bogem.",
    foot: "Tangkapan Segar Nelayan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOb6UaVQtG6gZ_j1uM9769riFFq71pkXQNKjwgWsqEfoZSvSibwvDaJwYha7fm5gylJmkFsJftO0IXvkZJUu-9wrGOHgmzdSypfItP4dIuIVprCr8Z6f43c3B7vJY8kJO9bihkIwlXZ67xpbGlFc2e67oe1FTcNzATCFdP4P-fOVZG2bQKAWayhTLPEOhBRHcwRpfHaCABuPmFvstbuJaCg2wVpHGWG_dvLgdfao",
    alt: "Sajian kuliner ikan bakar khas pesisir Brebes",
  },
  {
    tag: "Edukasi Tradisi",
    tagStyle: TAG_PRIMARY,
    duration: "± 1 Jam",
    title: "Proses Garam Rebus",
    desc: "Melihat dari dekat kearifan pengolahan garam rebus tradisional Brebes menggunakan tungku tanah liat dan kayu bakar.",
    foot: "Kunjungan Sentra Pengrajin",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZpVh1Wutou4cm_7uSUKV0PX91KLPBZ-vNF5Yju2J7ykqNzSb4ISR22KUYWmiFOXeRypHOvg_1ESRDefiXWmigxh3FL7MwakdxRFmZlhTWurJCHCI9xaifK3t4SDGAXdFxxmnKGMpKNLIBnInAebFVvVbbHxniqx8ZOb1ScZCLM5SWAigbeSJLKKwMrhGTKILaWTzPaw9hFF_nECDZVD9TswKvUB81L__u2zkSoVs",
    alt: "Proses pemrosesan garam rebus tradisional",
  },
  {
    tag: "Konservasi",
    tagStyle: TAG_SECONDARY,
    duration: "± 1,5 Jam",
    title: "Penanaman Bibit Bakau",
    desc: "Aksi tanam bibit Rhizophora langsung di lokasi pasang surut bersama pendamping dari pengelola kawasan.",
    foot: "Termasuk Bibit & Sertifikat",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fa4TQxdF9wDEd-tiPyg3B0xjrY-pXuNN4V-WS41GrPXfiXE9M-Q2otTvgUSwmcUEROuB0Ggj3qaysiMAqP8x5TeHQ5F9S39bPBgEZlvJlZOBkwBU8a-pBvjSl8bZrnvmd1S3wtdu09PJkh0JoGRfuP_2swdOnrFvEo63zxO14OUEQr-DQVOEgH4B94bknzTUAUY8oWIYUxZ7b3LdTuVzXEv-jLu9g9NyEYAbFUg",
    alt: "Pengunjung menanam bibit mangrove di area lumpur",
  },
];

const AMENITIES = [
  "Tiket Masuk Kawasan",
  "Perahu Jelajah Muara",
  "Makan Siang Seafood",
  "Bibit & Sertifikat Tanam",
  "Pemandu Lokal Terlatih",
  "Pelampung Keselamatan",
];

const RUNDOWN = [
  {
    sesi: "SESI PAGI",
    time: "08.00 - 11.30 WIB",
    title: "Penyambutan & Edukasi Batik Alami",
    desc: "Penyambutan peserta dengan welcome drink sirup buah mangrove, pengenalan sejarah pemulihan kawasan oleh pengelola, dilanjutkan praktik membatik pewarna mangrove.",
  },
  {
    sesi: "SESI SIANG",
    time: "11.30 - 13.30 WIB",
    title: "Makan Siang & Observasi Garam Rebus",
    desc: "Istirahat dan makan siang hidangan laut khas pesisir. Dilanjutkan kunjungan ke sentra pembuat garam rebus tradisional untuk melihat proses kristalisasi.",
  },
  {
    sesi: "SESI SORE",
    time: "13.30 - 16.30 WIB",
    title: "Aksi Tanam, Tambak Soka & Susur Muara",
    desc: "Penanaman bibit bakau di lahan restorasi, observasi tambak kepiting soka, dan diakhiri perjalanan perahu motor menyusuri muara pantai.",
  },
];

const VISIT_TIPS = [
  { icon: "check", color: "text-emerald-700", text: "Gunakan pakaian santai berbahan katun dan alas kaki nyaman." },
  { icon: "check", color: "text-emerald-700", text: "Disarankan membawa topi, kacamata hitam, dan tabir surya." },
  { icon: "check", color: "text-emerald-700", text: "Bawa baju ganti dan handuk jika mengikuti sesi penanaman bibit." },
  {
    icon: "do_not_disturb",
    color: "text-red-600",
    text: "Dilarang membuang sampah sembarangan di seluruh area hutan mangrove.",
  },
];

export default function EkowisataPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative w-full bg-emerald-950 text-white min-h-[520px] flex items-center py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30"
              src={HERO_IMAGE}
              alt="Kawasan ekowisata Dewi Mangrove Sari"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300/80">
              <Link className="hover:text-white transition flex items-center gap-1" href="/">
                <span className="material-symbols-outlined text-base">home</span>
                Beranda
              </Link>
              <span className="material-symbols-outlined text-xs text-emerald-600">chevron_right</span>
              <span className="text-white font-medium">Ekowisata</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Destinasi Ekowisata Pesisir Brebes</span>
            </div>

            <div className="max-w-3xl flex flex-col gap-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ekowisata Dewi Mangrove Sari
              </h1>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                Menikmati keindahan alam pesisir utara Brebes, mempelajari konservasi hutan bakau, dan berinteraksi
                langsung dengan warga Dukuh Pandansari.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full max-w-2xl">
              {HERO_METRICS.map((m) => (
                <div
                  key={m.label}
                  className={`${
                    m.wide ? "col-span-2 sm:col-span-1 " : ""
                  }p-4 rounded-xl bg-emerald-900/60 border border-emerald-800 backdrop-blur-sm`}>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block mb-0.5">{m.value}</span>
                  <span className="text-xs text-emerald-200">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                <span>Konsep Ekowisata</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Wisata Alam yang Berdampak Langsung Bagi Masyarakat
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Ekowisata Dewi Mangrove Sari menggabungkan pengalaman wisata alam dengan pemberdayaan masyarakat lokal.
                Pengunjung diajak menyusuri jembatan kayu ulin sepanjang hutan bakau yang dulunya merupakan area
                terdampak abrasi.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Setiap kunjungan mendukung keberlanjutan usaha warga lokal—mulai dari pengrajin batik pewarna alami,
                petambak kepiting soka, hingga pembuat garam rebus tradisional.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {INTRO_BADGES.map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                    <span className="material-symbols-outlined text-base text-emerald-700">{b.icon}</span>
                    {b.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[460px] flex flex-col gap-4 shrink-0">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AKTIVITAS WAKTU VISITAS */}
        <section className="py-20 bg-slate-100 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                  Pilihan Kegiatan
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">Ragam Aktivitas Ekowisata</h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold w-fit">
                Buka Setiap Hari
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACTIVITIES.map((a) => (
                <article
                  key={a.title}
                  className="group flex flex-col rounded-2xl bg-white overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition duration-200">
                  <div className="relative w-full h-48 bg-slate-200">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      src={a.img}
                      alt={a.alt}
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${a.tagStyle}`}>
                      {a.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-medium flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {a.duration}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition mb-1">
                        {a.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                      <span>{a.foot}</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PAKET UNGGULAN & RUNDOWN */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-emerald-950 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <span className="material-symbols-outlined text-amber-400 text-base">star</span>
                <span>PAKET WISATA FAVORIT ROMBONGAN</span>
              </div>
              <span className="text-xs text-emerald-300">Konfirmasi Jadwal via WhatsApp</span>
            </div>

            <div className="p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-5/12 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    Paket Terpadu
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    One Day Tour: Eksplorasi &amp; Edukasi Pesisir
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Paket perjalanan harian lengkap yang mencakup trekking bakau, aksi tanam bibit, kunjungan sentra
                    olahan warga, hingga makan siang seafood.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Biaya Paket</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">Rp 100.000</span>
                      <span className="text-sm text-slate-600">/ orang</span>
                    </div>
                    <p className="text-xs text-slate-500 pt-1">*Minimal pemesanan rombongan 10 orang.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    {AMENITIES.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shadow-sm"
                    href={waLink(
                      "Halo Pengelola Dewi Mangrove Sari, saya ingin reservasi One Day Tour Eksplorasi Pesisir",
                    )}
                    rel="noopener noreferrer"
                    target="_blank">
                    <span className="material-symbols-outlined text-xl">chat</span>
                    <span>Reservasi Paket via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-7/12 flex flex-col gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h4 className="text-base font-bold text-slate-900">Rundown Perjalanan</h4>
                  <span className="text-xs font-semibold text-emerald-700">Durasi: ± 8,5 Jam</span>
                </div>
                <div className="flex flex-col gap-6 relative before:absolute before:top-3 before:bottom-3 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  {RUNDOWN.map((r, i) => (
                    <div key={r.sesi} className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-xs">
                        {i + 1}
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{r.sesi}</span>
                          <span className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs">
                            {r.time}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-emerald-800">{r.title}</h5>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INFORMASI PRAKTIS */}
        <section className="py-20 bg-slate-100 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                Panduan Kunjungan
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">Informasi Praktis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lokasi */}
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">distance</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Lokasi &amp; Akses</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Dukuh Pandansari, Desa Kaliwlingi, Kecamatan Brebes, Kabupaten Brebes, Jawa Tengah 52219.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dapat diakses kendaraan roda 2, mobil pribadi, maupun bus pariwisata medium (jarak ±15 menit dari
                    Alun-alun Brebes).
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">local_parking</span>
                  <span>Tersedia Area Parkir Kendaraan</span>
                </div>
              </div>

              {/* Jam operasional */}
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">schedule</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Jam Operasional</h3>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 mb-3">
                    <span className="text-xs font-bold text-emerald-800 block mb-0.5">Buka Setiap Hari</span>
                    <span className="text-lg font-bold text-slate-900">06.00 - 17.30 WIB</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Waktu Terbaik:</strong> Pagi hari (06.30 - 10.00 WIB) untuk mengamati burung pesisir, atau
                    sore hari (15.00 - 17.15 WIB) untuk melihat pemandangan matahari terbenam.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">wb_twilight</span>
                  <span>Spot Pemandangan Sunset</span>
                </div>
              </div>

              {/* Tips */}
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">lightbulb</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tips Berkunjung</h3>
                  <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600">
                    {VISIT_TIPS.map((t) => (
                      <li key={t.text} className="flex items-start gap-2">
                        <span className={`material-symbols-outlined text-base ${t.color} shrink-0 mt-0.5`}>
                          {t.icon}
                        </span>
                        <span>{t.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">eco</span>
                  <span>Kawasan Konservasi Hijau</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION */}
        <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
            <div className="w-14 h-14 rounded-full bg-emerald-900 border border-emerald-700/60 flex items-center justify-center text-amber-400">
              <span className="material-symbols-outlined text-3xl">forest</span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Rencanakan Kunjungan Ekowisata Anda
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Konsultasikan jadwal kedatangan, jumlah rombongan, atau penyesuaian paket acara bersama tim pengelola
                kawasan Mangrove Sari.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shadow-sm"
                href={waLink("Halo Pengelola Dewi Mangrove Sari, saya ingin konsultasi paket ekowisata")}
                rel="noopener noreferrer"
                target="_blank">
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>Hubungi via WhatsApp</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 text-white font-semibold text-sm border border-emerald-700/60 transition"
                href="/documents/brosur-ekowisata.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">download</span>
                <span>Unduh Brosur Paket (PDF)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-emerald-300/80">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-amber-400">support_agent</span>
                Respon Cepat 07.00 - 20.00 WIB
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-amber-400">diversity_3</span>
                Kapasitas Rombongan Hingga 200 Orang
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
