export interface ContentItem {
  id: string;
  category: "konservasi" | "umkm" | "riset" | "video";
  categoryLabel: string;
  categoryBadge: string;
  metaInfo: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  isVideo?: boolean;
  quote?: string;
  body: string[];
}

export const FEATURED_CONTENT: ContentItem = {
  id: "feat-1",
  category: "konservasi",
  categoryLabel: "SOROTAN UTAMA",
  categoryBadge: "bg-emerald-950 text-white",
  metaInfo: "6 min baca",
  date: "20 Februari 2026",
  author: "Editorial Team",
  title: "Revitalisasi 440 Hektar Hutan Mangrove: Sinergi Karbon Biru dan Nelayan Kaliwlingi",
  excerpt:
    "Melalui kolaborasi lebih dari 20 tahun, warga pesisir Dukuh Pandansari tidak hanya membentengi daratan dari abrasi tetapi juga menciptakan kemandirian ekonomi.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I",
  slug: "revitalisasi-440-hektar-hutan-mangrove",
  quote:
    "Ketika sabuk hijau bakau kembali rapat, ombak mereda, kepiting dan udang kembali berbiak, dan warga memiliki harapan baru di tanah kelahirannya.",
  body: [
    "Kawasan pesisir Dukuh Pandansari, Desa Kaliwlingi, Brebes, pernah menghadapi tekanan abrasi yang menggerus ratusan hektar tambak produktif warga. Sejak 2005, inisiatif swadaya masyarakat yang tergabung dalam KMPHP Mangrove Sari mulai menanam bibit Rhizophora dan Avicennia secara bertahap di sepanjang garis pantai.",
    "Kini, lebih dari 4,4 juta batang mangrove telah tumbuh membentuk benteng hijau seluas 440 hektar. Pemulihan ini bukan hanya mengembalikan daratan yang sempat terendam pasang surut, tetapi juga menghidupkan kembali ekosistem muara sebagai tempat pemijahan alami ikan, udang, dan kepiting bakau.",
    "Sinergi antara riset karbon biru dan pemberdayaan ekonomi lokal menjadi kunci keberlanjutan kawasan. Melalui ekowisata susur sungai, jalur boardwalk kayu, serta pengolahan hasil mangrove oleh kelompok wanita tani, masyarakat memperoleh nilai tambah langsung dari menjaga kelestarian hutan.",
  ],
};

export const ALL_CONTENT: ContentItem[] = [
  {
    id: "1",
    category: "video",
    categoryLabel: "VIDEO",
    categoryBadge: "bg-purple-700 text-white",
    metaInfo: "05:24 min",
    date: "18 Februari 2026",
    author: "Tim Dokumentasi",
    title: "Video Dokumenter: Transformasi Pandansari dari Ancaman Abrasi Menjadi Ekowisata",
    excerpt:
      "Tayangan eksklusif perjalanan warga memulihkan garis pantai Brebes yang kini menjadi salah satu destinasi ekowisata unggulan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP-ThHIXoIPV_Yi91CjjG2OPvtFQyQ_De6aT-FKeiBoQ2uia11FCVljJiwhTWe127uzif58mPVpobdkIJj0jLXYeP-FF8z5hd9sHP0SdQOxeWmIowAL6nKeG9WbPFmCKKS2ogDJENE41956yjCwRhvmZXw9WgzEkuIItY4ywxeNqacFRtWY3d1lK5f6OmgXrhi8Afz46CcUMLYkfpzvmk1rJwoN-i6T3wrTBwhfwE",
    slug: "video-transformasi-pandansari",
    isVideo: true,
    body: [
      "Dokumenter berdurasi lima menit ini merekam kesaksian langsung para perintis konservasi di Dukuh Pandansari yang memulai penanaman bakau saat sebagian besar tambak warga mulai tenggelam oleh banjir rob.",
      "Dalam tayangan ini, pengunjung dapat melihat bagaimana gotong royong warga membangun pembibitan mandiri, merawat anakan mangrove di lumpur pasang surut, hingga membuka jalur wisata edukasi berbasis masyarakat.",
    ],
  },
  {
    id: "2",
    category: "umkm",
    categoryLabel: "ARTIKEL UMKM",
    categoryBadge: "bg-amber-700 text-white",
    metaInfo: "4 min baca",
    date: "15 Februari 2026",
    author: "Editorial Team",
    title: "Sentra Produksi Sirup Bogem: Dari Buah Bakau Liar Menjadi Olahan Khas",
    excerpt:
      "Kelompok Wanita Tani Sari Mulya membuktikan bahwa konservasi dapat berjalan seiring dengan peningkatan pendapatan keluarga.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJQAWDPu3Rgs2G8IqQJSMSGBHeAzWmm6-NDKa6VGW3MVA-O2pvWH9Dy_PqMoY_7k8DPFUnjYIaCgGd5u67j5XhmvyKpet2ryMneVXdQWISRmTbQ56ctxlNWe33BZVnb1aoX96rcLOIPXarg81yQBgxVPQ34BWPM_9E9cs_krkRloGVfQb9eH6o0drVQqdDtZJQ-1Fz9qBruc0NHwNcrvvQl07RxdPyoY4JCOxSMPY",
    slug: "sentra-produksi-sirup-bogem",
    quote:
      "Buah bogem yang dulu hanya jatuh di lumpur kini diolah menjadi sirup segar khas pesisir yang menopang ekonomi ibu-ibu Pandansari.",
    body: [
      "Buah pidada atau bogem (Sonneratia caseolaris) tumbuh melimpah di kawasan hutan mangrove Pandansari. Melalui pendampingan pengolahan pangan, Kelompok Wanita Tani mengolah buah matang yang dipanen secara selektif menjadi sirup alami tinggi vitamin C.",
      "Proses produksi dilakukan secara higienis tanpa bahan pengawet sintetis, mulai dari penyortiran buah, ekstraksi sari, hingga pemasakan bersama gula tebu. Produk ini kini menjadi buah tangan unggulan bagi wisatawan yang berkunjung ke Dewi Mangrove Sari.",
    ],
  },
  {
    id: "3",
    category: "riset",
    categoryLabel: "RISET",
    categoryBadge: "bg-blue-700 text-white",
    metaInfo: "7 min baca",
    date: "10 Februari 2026",
    author: "Tim Riset",
    title: "Pengukuran Cadangan Karbon Biru di Tanah Lumpur Pandansari",
    excerpt:
      "Hasil uji laboratorium menunjukkan ekosistem mangrove Pandansari memiliki daya serap karbon tinggi yang sangat signifikan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fa4TQxdF9wDEd-tiPyg3B0xjrY-pXuNN4V-WS41GrPXfiXE9M-Q2otTvgUSwmcUEROuB0Ggj3qaysiMAqP8x5TeHQ5F9S39bPBgEZlvJlZOBkwBU8a-pBvjSl8bZrnvmd1S3wtdu09PJkh0JoGRfuP_2swdOnrFvEo63zxO14OUEQr-DQVOEgH4B94bknzTUAUY8oWIYUxZ7b3LdTuVzXEv-jLu9g9NyEYAbFUg",
    slug: "pengukuran-cadangan-karbon-biru",
    body: [
      "Kolaborasi penelitian bersama akademisi dari berbagai perguruan tinggi mengukur simpanan karbon pada biomassa pohon dan sedimen lumpur di kawasan konservasi Mangrove Sari.",
      "Hasil pengamatan lapangan memperlihatkan bahwa substrat lumpur estuari yang terjaga mampu mengunci karbon dalam jangka panjang jauh lebih besar dibandingkan hutan daratan biasa, sekaligus menjadi benteng alami perubahan iklim di pesisir utara Jawa.",
    ],
  },
  {
    id: "4",
    category: "video",
    categoryLabel: "VIDEO",
    categoryBadge: "bg-purple-700 text-white",
    metaInfo: "08:12 min",
    date: "05 Februari 2026",
    author: "Tim Dokumentasi",
    title: "Lebih dari 3 Juta Mangrove! Kisah Perjuangan Warga Pandansari",
    excerpt:
      "Dokumentasi gotong royong warga Pandansari menanam jutaan bibit bakau demi menyelamatkan pemukiman dari banjir rob.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNmST2QppswG4sX7fNkqDfJrhmPjWWSGgh5o0iwiStMPVBNXGSmChgdUvP-nyn6_kf82bRi97hzZ5xzzaGiiVE1QYK_pIl0TWLwo7FeOkhBmXwcHCDIb9xEQj5sVUgvivqTzBXnz0Fue9cr_h69RhXM6iy3sB0_0qw-lZyGS2Jm_PXHoVGrYWpJjcjbFTWzRbu1O9-Xih0mMvs0hdRGoFUQJhCVM7V0S_d2OlQu5c",
    slug: "video-kisah-3-juta-mangrove",
    isVideo: true,
    body: [
      "Liputan mendalam mengenai perjalanan panjang masyarakat nelayan dan petambak Kaliwlingi yang menanam jutaan batang bakau secara konsisten selama dua dekade.",
      "Video ini juga menampilkan kembalinya koloni burung migran serta meningkatnya hasil tangkapan kepiting soka dan udang di sekitar sabuk hijau mangrove.",
    ],
  },
  {
    id: "5",
    category: "umkm",
    categoryLabel: "ARTIKEL UMKM",
    categoryBadge: "bg-amber-700 text-white",
    metaInfo: "5 min baca",
    date: "28 Januari 2026",
    author: "Editorial Team",
    title: "Batik Pewarna Alami Propagul: Kriya Pesisir Ramah Lingkungan",
    excerpt: "Pemanfaatan ekstrak buah bakau matang menjadi pewarna alami kain batik khas nelayan Kaliwlingi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZpVh1Wutou4cm_7uSUKV0PX91KLPBZ-vNF5Yju2J7ykqNzSb4ISR22KUYWmiFOXeRypHOvg_1ESRDefiXWmigxh3FL7MwakdxRFmZlhTWurJCHCI9xaifK3t4SDGAXdFxxmnKGMpKNLIBnInAebFVvVbbHxniqx8ZOb1ScZCLM5SWAigbeSJLKKwMrhGTKILaWTzPaw9hFF_nECDZVD9TswKvUB81L__u2zkSoVs",
    slug: "batik-pewarna-alami-propagul",
    body: [
      "Pengrajin batik di Dukuh Pandansari memanfaatkan propagul mangrove yang telah jatuh alami sebagai sumber zat warna cokelat keemasan dan terakota yang khas tanpa mencemari perairan tambak.",
      "Setiap lembar kain batik bermotif akar bakau dan biota pesisir dikerjakan dengan teknik tulis maupun cap, serta dapat dipelajari langsung oleh wisatawan melalui paket lokakarya membatik.",
    ],
  },
];

export const SIDEBAR_POPULAR = [
  {
    rank: "01",
    title: "Jejak 20 Tahun Rusjan: Dari Tambak Tenggelam Menuju Hutan Lestari",
    views: "14.2k pembaca",
    slug: "jejak-20-tahun-ruslan",
  },
  {
    rank: "02",
    title: "Panduan Wisata Susur Perahu & Waktu Terbaik Melihat Burung Migran",
    views: "9.5k pembaca",
    slug: "panduan-wisata-susur-perahu",
  },
  {
    rank: "03",
    title: "Resep Tradisional Sirup & Dodol Buah Bogem Tanpa Pengawet",
    views: "7.8k pembaca",
    slug: "resep-tradisional-sirup-dodol-bogem",
  },
];

const EXTRA_ARTICLES: ContentItem[] = [
  {
    id: "pop-1",
    category: "konservasi",
    categoryLabel: "KISAH INSPIRATIF",
    categoryBadge: "bg-emerald-950 text-white",
    metaInfo: "6 min baca",
    date: "12 Januari 2026",
    author: "Editorial Team",
    title: "Jejak 20 Tahun Rusjan: Dari Tambak Tenggelam Menuju Hutan Lestari",
    excerpt:
      "Kisah ketekunan penggerak awal konservasi pesisir Pandansari dalam mengembalikan sabuk hijau pantai utara Brebes.",
    image: FEATURED_CONTENT.image,
    slug: "jejak-20-tahun-ruslan",
    body: [
      "Pada pertengahan tahun 2000-an, abrasi laut Jawa menenggelamkan sebagian besar lahan tambak di Dukuh Pandansari. Di tengah situasi sulit tersebut, inisiatif menanam bibit mangrove dimulai secara swadaya meski sempat diragukan.",
      "Ketekunan merawat ribuan bibit dari tahun ke tahun akhirnya membuahkan hasil. Sabuk hijau mangrove tumbuh lebat, meredam hantaman ombak, dan menginspirasi ratusan warga lain untuk bergabung dalam pengelolaan kawasan lestari.",
    ],
  },
  {
    id: "pop-2",
    category: "konservasi",
    categoryLabel: "PANDUAN WISATA",
    categoryBadge: "bg-emerald-800 text-white",
    metaInfo: "5 min baca",
    date: "08 Januari 2026",
    author: "Tim Ekowisata",
    title: "Panduan Wisata Susur Perahu & Waktu Terbaik Melihat Burung Migran",
    excerpt:
      "Tips berkunjung ke Ekowisata Dewi Mangrove Sari agar pengalaman susur sungai dan pengamatan burung pesisir lebih maksimal.",
    image: ALL_CONTENT[0].image,
    slug: "panduan-wisata-susur-perahu",
    body: [
      "Waktu terbaik untuk menyusuri muara Sungai Beting dengan perahu motor adalah pagi hari antara pukul 06.30 hingga 09.00 WIB atau menjelang sore saat udara teduh dan satwa pesisir aktif mencari makan.",
      "Pada musim tertentu, kawanan burung air dan burung migran kerap terlihat bertengger di tajuk mangrove bagian luar. Pengunjung disarankan membawa kamera berlensa tele serta menjaga ketenangan selama menyusuri alur sungai.",
    ],
  },
  {
    id: "pop-3",
    category: "umkm",
    categoryLabel: "ARTIKEL UMKM",
    categoryBadge: "bg-amber-700 text-white",
    metaInfo: "4 min baca",
    date: "03 Januari 2026",
    author: "KWT Sari Mulya",
    title: "Resep Tradisional Sirup & Dodol Buah Bogem Tanpa Pengawet",
    excerpt:
      "Mengenal proses pengolahan buah bogem oleh ibu-ibu Pandansari menjadi minuman segar dan kudapan manis khas pesisir.",
    image: ALL_CONTENT[1].image,
    slug: "resep-tradisional-sirup-dodol-bogem",
    body: [
      "Buah bogem memiliki aroma segar dan rasa asam manis yang khas. Setelah dicuci bersih dan disaring bijinya, sari buah dimasak perlahan bersama gula pasir alami hingga mengental menjadi sirup atau diolah lanjut menjadi dodol.",
      "Tanpa tambahan pengawet maupun pewarna buatan, olahan bogem menjadi simbol bahwa menjaga hutan mangrove memberi manfaat pangan sekaligus ekonomi bagi keluarga pesisir.",
    ],
  },
];

export const ALL_ARTICLES: ContentItem[] = [FEATURED_CONTENT, ...ALL_CONTENT, ...EXTRA_ARTICLES];

export function getArticleBySlug(slug: string): ContentItem | undefined {
  return ALL_ARTICLES.find((item) => item.slug === slug);
}
