import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function SejarahPage() {
  return (
    <div className="bg-[#FAF8F4] font-sans text-stone-800 antialiased min-h-screen selection:bg-emerald-900 selection:text-white">
      <SiteHeader />

      <main className="w-full pt-20">
        {/* 1. HERO HEADER (Left-aligned in max-w-7xl) */}
        <section className="bg-[#062319] text-white py-16 sm:py-20 border-b-4 border-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-300 mb-6">
              <Link className="hover:text-amber-400 transition flex items-center gap-1" href="/">
                <span className="material-symbols-outlined text-sm">home</span>
                <span>Beranda</span>
              </Link>
              <span className="material-symbols-outlined text-xs text-stone-500">chevron_right</span>
              <span className="text-stone-400">Profil</span>
              <span className="material-symbols-outlined text-xs text-stone-500">chevron_right</span>
              <span className="text-amber-400 font-semibold">Sejarah</span>
            </nav>

            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                Jejak Langkah &amp; Transformasi Pesisir · Sejak 2005
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                Dari Tambak Terpuruk Menuju Desa Wisata Inspiratif: Kisah Kebangkitan Dewi Mangrove Sari Brebes
              </h1>
              <p className="text-sm sm:text-base text-stone-300">
                Dukuh Pandansari, Desa Kaliwlingi, Kecamatan Brebes, Kabupaten Brebes
              </p>
            </div>
          </div>
        </section>

        {/* 2. ARTIKEL NARATIF UTUH (Left-aligned in max-w-7xl) */}
        <article className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Foto Utama Dokumentasi Kawasan */}
              <figure className="mb-12 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-[#FAF8F4]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I"
                    alt="Kawasan Ekowisata Dewi Mangrove Sari di Dukuh Pandansari, Brebes"
                  />
                </div>
                <figcaption className="px-6 py-3.5 text-xs text-stone-600 bg-[#FAF8F4] border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                  <span>Hamparan kawasan konservasi dan ekowisata Dewi Mangrove Sari, Dukuh Pandansari.</span>
                  <span className="font-semibold text-emerald-800">Desa Kaliwlingi, Brebes</span>
                </figcaption>
              </figure>

              {/* Isi Artikel Mengalir */}
              <div className="space-y-12 text-stone-700 leading-relaxed">
                {/* Pembuka */}
                <section className="space-y-4">
                  <p className="text-lg sm:text-xl font-medium text-stone-900 leading-relaxed">
                    Desa Wisata Mangrove Dukuh Pandansari—yang dikenal luas dengan nama Dewi Mangrove Sari—di Desa
                    Kaliwlingi, Kecamatan Brebes, menjadi cermin nyata bagaimana solidaritas warga lokal sanggup
                    membalik keterpurukan ekologis menjadi sumber penghidupan baru. Berawal dari krisis lingkungan dan
                    runtuhnya ekonomi tambak, kawasan pesisir ini kini tumbuh sebagai ruang belajar konservasi sekaligus
                    destinasi wisata berbasis masyarakat.
                  </p>
                </section>

                <hr className="border-stone-200" />

                {/* Sub-bab 1 */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    Masa Keemasan yang Berujung Bencana Ekologis
                  </h2>
                  <p className="text-base leading-relaxed">
                    Dengan total wilayah 1.627 hektar yang didominasi lahan pertambakan seluas 780 hektar, Desa
                    Kaliwlingi pernah menikmati masa kejayaan budidaya udang windu sejak awal 1980-an. Khususnya di
                    Dukuh Pandansari yang berhadapan langsung dengan Laut Jawa, tingginya permintaan ekspor hingga ke
                    Jepang dan Tiongkok mendorong pembukaan hutan bakau seluas 1.100 hektar menjadi sekitar 400 hektar
                    petak tambak produktif.
                  </p>
                  <p className="text-base leading-relaxed">
                    Namun kemakmuran tersebut tidak bertahan lama. Memasuki kurun 1985 hingga 1995, pemakaian pupuk urea
                    dan bahan kimia secara berlebihan untuk mengejar hasil panen justru merusak kesuburan perairan.
                    Kualitas udang menurun akibat kontaminasi hingga akhirnya ditolak pasar ekspor.
                  </p>
                  <p className="text-base leading-relaxed">
                    Kondisi semakin berat karena keterbatasan infrastruktur dasar di Dukuh Pandansari saat itu—mulai
                    dari jalan berbatu yang lumpuh saat hujan, ketiadaan jaringan listrik PLN sehingga warga bergantung
                    pada genset, hingga terhambatnya akses pendidikan dan aktivitas ekonomi warga.
                  </p>
                </section>

                <hr className="border-stone-200" />

                {/* Sub-bab 2 */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    Tekanan Alam dan Sosial: Dampak Alih Fungsi Lahan
                  </h2>
                  <p className="text-base leading-relaxed">
                    Runtuhnya usaha tambak memicu dampak berantai. Petambak kehilangan modal dan meninggalkan lahan
                    mereka, sementara hilangnya sabuk alami pohon bakau membuat garis pantai tak lagi memiliki pelindung
                    dari gempuran ombak. Sepanjang periode 1963 hingga 2009, abrasi menggerus daratan Kaliwlingi hingga
                    seluas 812 hektar.
                  </p>
                  <p className="text-base leading-relaxed">
                    Setiap musim angin barat dan angin timur antara Februari hingga Agustus, banjir rob kerap merendam
                    permukiman dan merusak rumah warga. Di sisi lain, lahan pertanian seperti bawang merah, padi, dan
                    cabai mengalami gagal panen akibat intrusi air asin. Tekanan ekonomi ini turut berdampak pada sektor
                    pendidikan, di mana banyak anak terpaksa berhenti sekolah setelah lulus SD untuk ikut melaut
                    membantu keluarga.
                  </p>
                </section>

                <hr className="border-stone-200" />

                {/* Sub-bab 3 */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    Titik Balik: Reboisasi dan KMPHP Mangrove Sari
                  </h2>
                  <p className="text-base leading-relaxed">
                    Di tengah situasi sulit tersebut, kesadaran untuk menyelamatkan kampung halaman mulai tumbuh pada
                    tahun 2005 seiring menguatnya perhatian terhadap isu perubahan iklim. Warga Dukuh Pandansari
                    kemudian berhimpun membentuk Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) Mangrove Sari.
                  </p>
                  <p className="text-base leading-relaxed">
                    Gerakan awal dilakukan secara swadaya dengan menanam 15.000 bibit <em>Rhizophora mucronata</em> di
                    lahan seluas 1 hektar. Upaya penyadaran warga dijalankan secara konsisten melalui pendekatan seni
                    budaya, kampanye lingkungan, dan publikasi media, hingga perlahan melahirkan kader-kader pelestari
                    pesisir yang tangguh.
                  </p>
                  <p className="text-base leading-relaxed">
                    Ketekunan warga menarik perhatian dan dukungan dari berbagai mitra, seperti Yayasan KEHATI, IPPHTI
                    yang memperkenalkan budidaya padi tahan salinitas, instansi pemerintah, serta kalangan akademisi
                    dari UNDIP dan UGM. Kerja keras kolektif ini membuahkan pengakuan nasional, mulai dari Juara III
                    Kelompok Tani Hutan (2012), penghargaan Kalpataru 2015 kategori Penyelamat Lingkungan, hingga
                    Kalpataru 2016 kategori Pengabdi Lingkungan Juara 1 Nasional yang diterima oleh tokoh penggerak
                    setempat, Mashadi.
                  </p>
                </section>

                <hr className="border-stone-200" />

                {/* Sub-bab 4 */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    Lahirnya Dewi Mangrove Sari
                  </h2>
                  <p className="text-base leading-relaxed">
                    Memasuki tahun 2016, upaya penanaman berkelanjutan berhasil memulihkan kembali 280 hektar hutan
                    mangrove. Berdasarkan kajian akademik mahasiswa Universitas Diponegoro, sekitar 15 hektar di
                    antaranya dinilai sangat potensial dikembangkan sebagai kawasan wisata edukasi tanpa mengganggu
                    fungsi konservasinya.
                  </p>
                  <p className="text-base leading-relaxed">
                    Pada 30 April 2016, Desa Wisata Mangrove Sari (Dewi Mangrove Sari) resmi diluncurkan dengan dukungan
                    Dinas Pariwisata Kabupaten Brebes serta Dinas Kelautan dan Perikanan melalui pembangunan jalur{" "}
                    <em>tracking</em> kayu sepanjang 720 meter, menara pandang, musala, dan gazebo.
                  </p>
                  <p className="text-base leading-relaxed">
                    Di bawah pengelolaan Pokdarwis Dewi Mangrove Sari, masyarakat mengembangkan beragam layanan dan
                    produk berbasis kearifan lokal:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base text-stone-700">
                    <li>
                      Penyediaan akomodasi <em>homestay</em> warga sebanyak 15 unit.
                    </li>
                    <li>Sentra kuliner pesisir dan oleh-oleh yang melibatkan 30 warung masyarakat.</li>
                    <li>
                      Wisata edukasi dan produk kreatif warga, meliputi pengolahan garam rebus tradisional, batik
                      pewarna alami mangrove, budidaya kepiting soka, bandeng cabut duri, hingga rengginang udang.
                    </li>
                  </ul>
                  <p className="text-base leading-relaxed">
                    Dalam perkembangannya pada periode 2016–2020, pengelolaan ekowisata ini mampu menyerap puluhan
                    tenaga kerja lokal dan membuka sumber pendapatan baru bagi warga Dukuh Pandansari. Kisah kebangkitan
                    Desa Kaliwlingi menjadi bukti bahwa konsistensi menjaga ekosistem pesisir bukan hanya meredam
                    ancaman abrasi, tetapi juga menjadi fondasi kesejahteraan masyarakat secara berkelanjutan.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
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
