import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ekowisata Dewi Mangrove Sari | Mangrove Sari",
  description:
    "Nikmati keindahan bentang pesisir utara Brebes sambil belajar konservasi dan berdaya bersama warga Dukuh Pandansari.",
};

// Foto masih memakai URL sementara dari Stitch. Unduh ke /public/ekowisata lalu ganti path-nya.
const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCP-ThHIXoIPV_Yi91CjjG2OPvtFQyQ_De6aT-FKeiBoQ2uia11FCVljJiwhTWe127uzif58mPVpobdkIJj0jLXYeP-FF8z5hd9sHP0SdQOxeWmIowAL6nKeG9WbPFmCKKS2ogDJENE41956yjCwRhvmZXw9WgzEkuIItY4ywxeNqacFRtWY3d1lK5f6OmgXrhi8Afz46CcUMLYkfpzvmk1rJwoN-i6T3wrTBwhfwE";

const heroMetrics = [
  { value: "440+ Ha", label: "Kawasan Konservasi Aktif", wide: false },
  { value: "1,2 Km", label: "Jalur Boardwalk Alami", wide: false },
  { value: "100%", label: "Dikelola Komunitas Lokal", wide: true },
];

const introBadges = [
  { icon: "park", text: "440 Hektar Kawasan Hijau" },
  { icon: "directions_walk", text: "Jalur Boardwalk Kayu Rindang" },
  { icon: "family_restroom", text: "Ramah Keluarga & Pelajar" },
];

const pillars = [
  {
    icon: "school",
    bg: "bg-secondary-container/40",
    title: "Edukasi Hayati",
    text: "Memahami peranan vital vegetasi mangrove Rhizophora & Avicennia sebagai benteng pesisir dan habitat biota laut langka.",
  },
  {
    icon: "volunteer_activism",
    bg: "bg-primary-fixed/40",
    title: "Konservasi Nyata",
    text: "Terlibat langsung dalam penanaman bibit pohon bakau, pemantauan sedimentasi lumpur, dan restorasi pesisir pantai.",
  },
  {
    icon: "groups_3",
    bg: "bg-secondary-fixed/50",
    title: "Kearifan Lokal Pesisir",
    text: "Menyatu dengan dinamika kehidupan nelayan Kaliwlingi, kearifan garam rebus, dan tradisi membatik ramah lingkungan.",
  },
];

const tagPrimary = "bg-primary/80 text-on-primary";
const tagSecondary = "bg-secondary/90 text-on-secondary";

const activities = [
  {
    tag: "Eksplorasi",
    tagStyle: tagPrimary,
    duration: "± 1 - 2 Jam",
    title: "Tracking Mangrove",
    desc: "Jelajah jembatan kayu sepanjang hutan mangrove rimbun, spot foto estetik menara pandang, serta menikmati kicauan burung pesisir yang asri.",
    foot: "Jalur Sepanjang 1.200 M",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtNGO3TbqVYhKojymYs_aM8BirwbqZQRRUzuSHpOCgsZ86bjX65gvL1Uz_NjQer42kWCgSQiXppI1N3E5p1TPv8aUzhCoy9D0hFNnPw4TdeCbbQZsbjmKw9ZUdXhVEyjwGJIcoijbLmiD4OI1Qgwd3sdHCY_X112YTnB2NR21Xo5bWT2yt_X_H6d8nrZV1CRUps58XYJkHS7NwHQG4i9X_T1DCdpd3nHGC4cPC2f4",
    alt: "Pengunjung berjalan di jembatan kayu di antara kanopi hutan mangrove",
  },
  {
    tag: "Air & Muara",
    tagStyle: tagSecondary,
    duration: "± 45 Menit",
    title: "Speed Boat & Susur Sungai",
    desc: "Menyusuri aliran muara Sungai Beting menuju bibir pantai laut Jawa dengan perahu nelayan bermesin aman yang dinakhodai pemandu lokal terlatih.",
    foot: "Termasuk Pelampung Aman",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqojvuPRtffrzloQr_-vfQPcgrOQbbBswXKSRhA1T6VrlhM5in9MMxV51GrMsPI8NajjFpKnlDbsEBFFaQdQTD3TNjdNJZSaO20fIL_pJBzIWfQjngjs-JNXLY5wlUZU12V9SziKS_w2A9enQ6cN0sMxMfpxRPJ6AFrXVBx6tjgivAr-LtRZtpb4eGcZlv8M6Qdo7WSKVxptbpQnsXVlNlSh8HNMe9kOvRny39SU",
    alt: "Perahu bermesin membawa wisatawan menyusuri sungai di antara akar mangrove",
  },
  {
    tag: "Workshop Budaya",
    tagStyle: tagPrimary,
    duration: "± 1,5 Jam",
    title: "Belajar Membatik Mangrove",
    desc: "Workshop edukasi membatik motif khas pesisir Brebes menggunakan pewarna alami dari ekstrak buah serta kulit kayu mangrove yang ramah lingkungan.",
    foot: "Bawa Pulang Hasil Kain",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJQAWDPu3Rgs2G8IqQJSMSGBHeAzWmm6-NDKa6VGW3MVA-O2pvWH9Dy_PqMoY_7k8DPFUnjYIaCgGd5u67j5XhmvyKpet2ryMneVXdQWISRmTbQ56ctxlNWe33BZVnb1aoX96rcLOIPXarg81yQBgxVPQ34BWPM_9E9cs_krkRloGVfQb9eH6o0drVQqdDtZJQ-1Fz9qBruc0NHwNcrvvQl07RxdPyoY4JCOxSMPY",
    alt: "Pengrajin perempuan mengajarkan teknik canting batik dengan pewarna alami mangrove",
  },
  {
    tag: "Silvofishery",
    tagStyle: tagSecondary,
    duration: "± 1 Jam",
    title: "Budidaya Kepiting Soka",
    desc: "Mengenal teknik budidaya kepiting cangkang lunak metode silvofishery yang bersinergi dengan ekosistem mangrove serta cara pemanenannya yang aman.",
    foot: "Praktik Langsung di Tambak",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApdZXtbLuWhQEivvTxZL47bdUCd1UrRV2VT2rknpaq8ePft8tEZ1FXwaIx3i5UhB5VQVkv-dR3wqaPghydnQzPCnklV59g_wjCHPxJ5rAgACuSB5pwgAV5ONjtBBHict-BIYhiZ_WC9ACuGANXoKUW9kan4xbRngjp2uqdNGX5JM2Jvf_4FCFOrZ6hLPUAMGYs7DpXocRsnZ5UGfJw_lVuoA9T3D850nXQ2RdIXvI",
    alt: "Petambak memperlihatkan kepiting soka di tambak silvofishery",
  },
  {
    tag: "Seni Tradisi",
    tagStyle: tagPrimary,
    duration: "± 45 Menit",
    title: "Kesenian Lokal Pesisir",
    desc: "Pementasan seni tari khas pesisiran dan pertunjukan kearifan lokal yang sarat nilai gotong royong warga Dukuh Pandansari menyambut tamu.",
    foot: "Khusus Reservasi Grup",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMJa0aaJ5bmwYc0ok89jq6UmZe9AEq8zLIpkm3QMMhv8KT_V4vHoQ88RgL033xZkYpEAh89gt7G9zR7s_PUBVLwmX3wpHmwLohcl-kisW_d6-6NaPJbWFNAS1JVdoQblQMskKNBzHXCDYN-XDqKowG5wI1_LkLxFZsUIjUqaF47gttRw3ggavv8VyxcHnmwUq2hlK_yScOnGl2XE7bwkXkYtgv9T3oCTQhXwhupoE",
    alt: "Penari tradisional pesisir tampil di panggung kayu di tepi perairan",
  },
  {
    tag: "Gastronomi",
    tagStyle: tagSecondary,
    duration: "Santap Siang",
    title: "Kuliner Khas Pesisir",
    desc: "Menikmati santapan ikan bakar segar, kepiting saus gurih, sambal terasi khas Kaliwlingi, dan segarnya minuman herbal sirup buah bogem mangrove.",
    foot: "Hasil Laut Tangkapan Segar",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOb6UaVQtG6gZ_j1uM9769riFFq71pkXQNKjwgWsqEfoZSvSibwvDaJwYha7fm5gylJmkFsJftO0IXvkZJUu-9wrGOHgmzdSypfItP4dIuIVprCr8Z6f43c3B7vJY8kJO9bihkIwlXZ67xpbGlFc2e67oe1FTcNzATCFdP4P-fOVZG2bQKAWayhTLPEOhBRHcwRpfHaCABuPmFvstbuJaCg2wVpHGWG_dvLgdfao",
    alt: "Hidangan hasil laut di atas daun pisang dan minuman sirup mangrove",
  },
  {
    tag: "Edukasi Tradisi",
    tagStyle: tagPrimary,
    duration: "± 1 Jam",
    title: "Garam Rebus Tradisional",
    desc: "Melihat langsung kearifan turun-temurun pengolahan garam rebus Brebes menggunakan tungku tanah liat dan kayu bakar otentik yang khas.",
    foot: "Warisan Pesisir Langka",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZpVh1Wutou4cm_7uSUKV0PX91KLPBZ-vNF5Yju2J7ykqNzSb4ISR22KUYWmiFOXeRypHOvg_1ESRDefiXWmigxh3FL7MwakdxRFmZlhTWurJCHCI9xaifK3t4SDGAXdFxxmnKGMpKNLIBnInAebFVvVbbHxniqx8ZOb1ScZCLM5SWAigbeSJLKKwMrhGTKILaWTzPaw9hFF_nECDZVD9TswKvUB81L__u2zkSoVs",
    alt: "Pengrajin garam rebus menjaga tungku perebusan air laut",
  },
  {
    tag: "Aksi Nyata",
    tagStyle: tagSecondary,
    duration: "± 1,5 Jam",
    title: "Susur & Tanam Bibit",
    desc: "Aksi nyata pelestarian dengan menanam bibit bakau Rhizophora langsung di areal restorasi lumpur pesisir didampingi pemandu dan relawan desa.",
    foot: "Sertifikat Adopsi Pohon",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fa4TQxdF9wDEd-tiPyg3B0xjrY-pXuNN4V-WS41GrPXfiXE9M-Q2otTvgUSwmcUEROuB0Ggj3qaysiMAqP8x5TeHQ5F9S39bPBgEZlvJlZOBkwBU8a-pBvjSl8bZrnvmd1S3wtdu09PJkh0JoGRfuP_2swdOnrFvEo63zxO14OUEQr-DQVOEgH4B94bknzTUAUY8oWIYUxZ7b3LdTuVzXEv-jLu9g9NyEYAbFUg",
    alt: "Pengunjung dan warga menanam bibit mangrove di lumpur pesisir",
  },
];

const amenities = [
  "Tiket Masuk Kawasan",
  "Perahu Jelajah Muara",
  "Makan Siang Seafood",
  "Bibit & Sertifikat",
  "Pemandu Edukasi Lokal",
  "Alat Pelampung & P3K",
];

const rundown = [
  {
    sesi: "SESI PAGI",
    time: "08.00 - 11.30 WIB",
    title: "Penyambutan & Belajar Batik Alami",
    desc: "Penyambutan hangat dengan welcome drink khas sirup buah mangrove dan teh rosella segar. Briefing pelestarian lingkungan dari tetua warga Pandansari, dilanjutkan sesi membatik dengan pewarna alami ekstrak mangrove.",
  },
  {
    sesi: "SESI SIANG",
    time: "11.30 - 13.30 WIB",
    title: "Santap Bahari & Observasi Garam Rebus",
    desc: "Istirahat, ibadah, dan makan siang bersama dengan menu laut segar khas pesisir Brebes. Setelah itu mengunjungi pondok pengrajin garam rebus tradisional untuk melihat proses kristalisasi garam dengan tungku kayu.",
  },
  {
    sesi: "SESI SORE",
    time: "13.30 - 16.30 WIB",
    title: "Aksi Tanam Bibit, Kepiting Soka & Susur Muara",
    desc: "Aksi nyata penanaman bibit mangrove di areal pasang surut, mempelajari tambak kepiting soka ramah lingkungan, dan diakhiri dengan susur perahu perairan muara menuju bibir laut menyongsong matahari terbenam.",
  },
];

const visitTips = [
  { icon: "check", color: "text-secondary", text: "Gunakan pakaian katun santai, alas kaki nyaman atau sandal anti-selip." },
  { icon: "check", color: "text-secondary", text: "Bawa topi lebar, kacamata hitam, dan tabir surya pelindung cuaca pesisir." },
  { icon: "check", color: "text-secondary", text: "Siapkan pakaian ganti dan handuk kecil jika mengikuti agenda tanam bibit bakau." },
  { icon: "do_not_disturb", color: "text-error", text: "Wajib menjaga kebersihan dan tidak membuang sampah plastik di hutan mangrove." },
];

const cardShadow = "shadow-[0_4px_20px_-2px_rgba(31,77,58,0.05)]";

export default function EkowisataPage() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* 1. HERO */}
          <section className="relative w-full -mt-20 overflow-hidden bg-primary">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-45 scale-105"
              style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
              role="img"
              aria-label="Panorama kawasan Dewi Mangrove Sari dengan jembatan kayu di antara hutan mangrove"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/80" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-space-md lg:px-margin pt-36 pb-space-xl flex flex-col items-start gap-space-md">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm">
                <Link className="hover:text-on-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Beranda
                </Link>
                <span className="material-symbols-outlined text-[14px] opacity-60">chevron_right</span>
                <span className="text-on-primary font-semibold">Ekowisata</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 backdrop-blur-md text-secondary-fixed font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Destinasi Ekowisata Pesisir Edukatif &amp; Berkelanjutan</span>
              </div>

              <div className="max-w-4xl flex flex-col gap-space-sm">
                <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary leading-tight font-bold tracking-tight">
                  Ekowisata Dewi Mangrove Sari
                </h1>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed max-w-3xl">
                  Menikmati Keindahan Bentang Pesisir Utara Brebes Sambil Belajar Konservasi dan Berdaya Bersama
                  Warga Pandansari.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-md w-full max-w-2xl">
                {heroMetrics.map((m) => (
                  <div
                    key={m.label}
                    className={`${
                      m.wide ? "col-span-2 sm:col-span-1 " : ""
                    }flex flex-col gap-0.5 p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md`}>
                    <span className="font-display-lg text-headline-md text-secondary-fixed">{m.value}</span>
                    <span className="font-label-sm text-label-sm text-on-primary-container">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full overflow-hidden leading-none z-10">
              <svg
                className="block w-full h-8 sm:h-12 text-surface-container-low"
                preserveAspectRatio="none"
                viewBox="0 0 1200 120">
                <path
                  d="M0,0 C300,90 600,110 900,45 C1050,15 1150,55 1200,80 L1200,120 L0,120 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </section>

          {/* 2. INTRO */}
          <section className="w-full bg-surface-container-low py-space-xl px-space-md lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-space-xl items-center">
              <div className="flex-1 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md tracking-wider uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  Kearifan Pesisir Berdaya
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary leading-tight font-bold">
                  Bukan Sekadar Berlibur, Tetapi Bertumbuh Bersama Komunitas
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Di Dewi Mangrove Sari, setiap langkah yang Anda jejaki di atas papan kayu ulin merupakan kisah
                  panjang perjuangan warga Dukuh Pandansari dalam membendung abrasi laut Jawa. Kami
                  mengintegrasikan pariwisata ramah lingkungan dengan kemandirian ekonomi desa, menyuguhkan
                  perjalanan yang menyentuh hati dan membuka wawasan.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Pengunjung diajak berinteraksi langsung dengan para perajin batik pewarna mangrove, petambak
                  kepiting soka, serta pengolah garam rebus tradisional. Pengalaman ini dirancang untuk seluruh
                  kalangan—mulai dari rombongan keluarga, komunitas pecinta alam, hingga institusi pendidikan.
                </p>
                <div className="flex flex-wrap gap-space-sm pt-space-xs">
                  {introBadges.map((b) => (
                    <span
                      key={b.text}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-secondary">{b.icon}</span>
                      {b.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[480px] grid grid-cols-1 gap-space-sm flex-shrink-0">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className={`p-space-md rounded-2xl bg-surface-container-lowest ${cardShadow} flex items-start gap-space-md transition-all hover:shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] hover:-translate-y-0.5`}>
                    <div
                      className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center text-primary flex-shrink-0`}>
                      <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-lg text-title-lg text-primary font-semibold">{p.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. AKTIVITAS */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-space-md lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs max-w-2xl">
                  <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                    Aktivitas Unggulan
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-bold">
                    8 Pengalaman Otentik Dewi Mangrove Sari
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Setiap aktivitas dipandu oleh fasilitator dan warga lokal yang berpengalaman, memberikan
                    kenyamanan, keamanan, serta edukasi berharga.
                  </p>
                </div>
                <div className="flex items-center gap-space-xs flex-shrink-0">
                  <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                    Tersedia Setiap Hari
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {activities.map((a) => (
                  <article
                    key={a.title}
                    className={`group flex flex-col rounded-2xl bg-surface-container-low overflow-hidden ${cardShadow} hover:shadow-[0_12px_32px_-4px_rgba(31,77,58,0.12)] transition-all duration-300 hover:-translate-y-1`}>
                    <div className="relative w-full h-52 overflow-hidden bg-surface-container-high">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={a.img}
                        alt={a.alt}
                        loading="lazy"
                      />
                      <div
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full ${a.tagStyle} backdrop-blur-md font-label-sm text-label-sm`}>
                        {a.tag}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {a.duration}
                      </div>
                    </div>
                    <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-title-lg text-title-lg text-primary font-semibold group-hover:text-secondary transition-colors">
                          {a.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{a.desc}</p>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                        <span>{a.foot}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. PAKET UNGGULAN */}
          <section className="w-full bg-surface-container-low py-space-xl px-space-md lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="w-full rounded-3xl bg-surface-container-lowest shadow-[0_12px_32px_-4px_rgba(31,77,58,0.08)] overflow-hidden">
                <div className="bg-primary text-on-primary px-space-md lg:px-space-xl py-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">star</span>
                    <span className="font-bold tracking-wide">PAKET TERFAVORIT ROMBONGAN &amp; EDUKASI</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary-fixed">
                    Reservasi Cepat &amp; Fasilitas Lengkap
                  </span>
                </div>

                <div className="p-space-md lg:p-space-xl flex flex-col lg:flex-row gap-space-xl">
                  <div className="w-full lg:w-5/12 flex flex-col justify-between gap-space-lg">
                    <div className="flex flex-col gap-space-md">
                      <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        Paket Wisata Terintegrasi
                      </span>
                      <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-bold leading-tight">
                        One Day Tour: Eksplorasi Pesisir &amp; Kearifan Lokal
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Rangkaian kegiatan harian komprehensif yang memadukan petualangan susur hutan bakau, aksi
                        konservasi tanam bibit, hingga menyelami tradisi kultural warga pesisir Kaliwlingi.
                      </p>

                      <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Investasi Edukasi
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display-lg text-headline-lg text-primary font-bold">Rp 100.000</span>
                          <span className="font-body-md text-body-md text-on-surface-variant font-medium">
                            / orang
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                          *Minimal pemesanan rombongan 10 orang.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-on-surface font-label-sm text-label-sm">
                        {amenities.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-space-xs">
                      <a
                        className="w-full inline-flex items-center justify-center gap-3 px-space-lg py-4 rounded-full bg-tertiary-container hover:bg-[#8f3b00] text-on-tertiary font-title-md text-title-md font-bold shadow-[0_12px_24px_-4px_rgba(117,48,0,0.3)] hover:scale-[1.02] active:scale-[0.99] transition-all"
                        href={waLink("Halo Pengelola Dewi Mangrove Sari, saya ingin reservasi One Day Tour Eksplorasi Pesisir")}
                        rel="noopener noreferrer"
                        target="_blank">
                        <span className="material-symbols-outlined text-[22px]">chat</span>
                        <span>Pesan via WhatsApp (Konsultasi Jadwal)</span>
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12 flex flex-col gap-space-md bg-surface-container-low p-space-md lg:p-space-lg rounded-2xl">
                    <div className="flex items-center justify-between">
                      <h4 className="font-title-lg text-title-lg text-primary font-bold">
                        Rundown Perjalanan Edukasi
                      </h4>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">
                        Total Durasi: ± 8,5 Jam
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-lg relative before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-outline-variant">
                      {rundown.map((r, i) => (
                        <div key={r.sesi} className="relative flex items-start gap-space-md pl-2">
                          <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-label-sm flex-shrink-0 z-10 shadow-sm">
                            {i + 1}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-label-md text-label-md font-bold text-primary">{r.sesi}</span>
                              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm">
                                {r.time}
                              </span>
                            </div>
                            <h5 className="font-title-md text-title-md text-secondary font-semibold">{r.title}</h5>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                              {r.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. INFO PRAKTIS */}
          <section className="w-full bg-surface py-space-xl px-space-md lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs text-center items-center max-w-2xl mx-auto">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                  Panduan Wisatawan
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-bold">
                  Informasi Praktis Kunjungan
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Hal penting yang perlu dipersiapkan agar perjalanan Anda ke pesisir Kaliwlingi berjalan nyaman,
                  aman, dan berkesan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* Lokasi */}
                <div
                  className={`p-space-lg rounded-2xl bg-surface-container-lowest ${cardShadow} flex flex-col gap-space-md`}>
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">distance</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">Lokasi &amp; Akses</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Dukuh Pandansari, Desa Kaliwlingi, Kecamatan Brebes, Kabupaten Brebes, Jawa Tengah 52219.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Dapat diakses dengan mudah menggunakan kendaraan roda 2 maupun roda 4 (mobil pribadi &amp; bus
                      pariwisata medium), berjarak ±15 menit dari pusat Alun-alun Kota Brebes.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">local_parking</span>
                      Area Parkir Luas &amp; Aman
                    </span>
                  </div>
                </div>

                {/* Jam operasional */}
                <div
                  className={`p-space-lg rounded-2xl bg-surface-container-lowest ${cardShadow} flex flex-col gap-space-md`}>
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">schedule</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">Jam Operasional</h3>
                    <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        Buka Setiap Hari Termasuk Hari Libur
                      </span>
                      <span className="font-title-md text-title-md text-primary font-bold">06.00 - 17.30 WIB</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      <strong>Waktu Terbaik:</strong> Pagi hari (06.30 - 10.00 WIB) untuk mengamati kawanan burung
                      pesisir, atau sore hari (15.00 - 17.15 WIB) untuk menikmati panorama matahari terbenam di
                      muara.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">wb_twilight</span>
                      Pemandangan Sunset Terbaik
                    </span>
                  </div>
                </div>

                {/* Tips */}
                <div
                  className={`p-space-lg rounded-2xl bg-surface-container-lowest ${cardShadow} flex flex-col gap-space-md`}>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">lightbulb</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-title-lg text-title-lg text-primary font-bold">Tips Berkunjung</h3>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                      {visitTips.map((t) => (
                        <li key={t.text} className="flex items-start gap-2">
                          <span className={`material-symbols-outlined text-[16px] ${t.color} mt-0.5`}>{t.icon}</span>
                          <span>{t.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">eco</span>
                      Kawasan Ramah Lingkungan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. CTA */}
          <section className="w-full bg-primary text-on-primary relative overflow-hidden py-space-xl px-space-md lg:px-margin">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="w-full h-full" fill="none" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-space-lg">
              <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[32px]">forest</span>
              </div>
              <div className="flex flex-col gap-space-sm">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary font-bold leading-tight">
                  Siap Menjelajah Hutan Mangrove dan Belajar Bersama Warga?
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
                  Dukung pelestarian bentang pesisir Brebes sekaligus rasakan hangatnya keramahan warga Dukuh
                  Pandansari. Reservasi sekarang untuk keluarga, instansi, atau komunitas Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-space-lg py-4 rounded-full bg-tertiary-container hover:bg-[#8f3b00] text-on-tertiary font-title-md text-title-md font-bold shadow-[0_12px_24px_-4px_rgba(117,48,0,0.35)] hover:scale-105 active:scale-95 transition-all"
                  href={waLink("Halo Pengelola Dewi Mangrove Sari, saya ingin konsultasi paket ekowisata")}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                  <span>Hubungi Pengelola via WhatsApp</span>
                </a>
                {/* TODO: ganti href dengan file brosur PDF di /public */}
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-4 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-title-md text-title-md font-medium transition-all"
                  href="#">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  <span>Unduh Brosur Paket (PDF)</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-on-primary-container font-label-sm text-label-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">support_agent</span>
                  Respon Cepat 07.00 - 20.00 WIB
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">diversity_3</span>
                  Kapasitas Rombongan hingga 200 Orang
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
