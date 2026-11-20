import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCatalog from "@/components/umkm/ProductCatalog";
import { TESTIMONIALS } from "@/lib/testimonials";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produk UMKM Pesisir | Mangrove Sari Brebes",
  description: "Katalog olahan pangan, kerajinan, dan produk khas buatan warga Dukuh Pandansari, Kaliwlingi, Brebes.",
};

const HERO_PILLS = [
  { icon: "verified_user", text: "100% Karya Warga Pandansari" },
  { icon: "compost", text: "Bahan Olahan & Pewarna Alami" },
  { icon: "local_shipping", text: "Siap Kirim ke Seluruh Indonesia" },
];

const STATS = [
  { value: "30+", title: "Kelompok Usaha", note: "Binaan warga lokal", valueColor: "text-emerald-800" },
  { value: "85+", title: "Anggota Aktif", note: "Kelompok wanita tani & nelayan", valueColor: "text-emerald-800" },
  { value: "100%", title: "Bahan Alami", note: "Tanpa bahan kimia berbahaya", valueColor: "text-amber-700" },
];

const PARTNER_BENEFITS = [
  { icon: "tune", text: "Jumlah Pemesanan Fleksibel" },
  { icon: "draw", text: "Dukungan Kustom Label & Kemasan" },
  { icon: "receipt_long", text: "Nota & Kuitansi Resmi Pengelola KMPHP" },
];

const AVATAR_TONES = ["bg-emerald-100 text-emerald-800", "bg-amber-100 text-amber-800", "bg-teal-100 text-teal-800"];

export default function UmkmPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-20">
        {/* 1. HERO SECTION */}
        <section className="bg-emerald-950 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300/80">
              <Link className="hover:text-white transition flex items-center gap-1" href="/">
                <span className="material-symbols-outlined text-base">home</span>
                Beranda
              </Link>
              <span className="material-symbols-outlined text-xs text-emerald-600">chevron_right</span>
              <span className="text-white font-medium">UMKM Pesisir</span>
            </nav>

            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm font-medium">
                <span className="material-symbols-outlined text-base">eco</span>
                <span>Pemberdayaan Ekonomi Warga Pandansari</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Produk UMKM Pesisir
              </h1>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                Setiap pembelian produk mendukung langsung pendapatan keluarga nelayan serta operasional pemeliharaan
                hutan mangrove Pandansari.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {HERO_PILLS.map((p) => (
                  <div
                    key={p.text}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-800 text-emerald-200 text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-base text-amber-400">{p.icon}</span>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCT CATALOG COMPONENT */}
        <ProductCatalog />

        {/* 3. COMMUNITY STORY SECTION */}
        <section className="py-20 bg-slate-100 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-emerald-900 flex flex-col justify-end p-6 border border-emerald-800">
                <span className="material-symbols-outlined absolute -right-6 -top-6 text-[180px] text-white/5 pointer-events-none select-none">
                  diversity_3
                </span>
                <div className="relative z-10 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Koperasi Komunitas
                  </span>
                  <p className="text-lg font-bold mt-0.5">Dukuh Pandansari, Kaliwlingi, Brebes</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-xl shadow-md border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">diversity_3</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">KMPHP Mangrove Sari</p>
                  <p className="text-xs text-slate-500">Kelompok Sadar Wisata &amp; UMKM</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 lg:pl-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase w-fit">
                <span className="material-symbols-outlined text-sm">groups</span>
                <span>Kemandirian Warga</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Inovasi Lokal dari Hasil Olahan Pesisir
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Kelompok Wanita Tani (KWT) dan pemuda nelayan Pandansari mengolah potensi sekitar lingkungan mereka
                menjadi produk bernilai guna, mulai dari sirup buah pidada/bogem, keripik daun mangrove, hingga pewarna
                alami kain batik.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Seluruh proses panen bahan baku dilakukan tanpa mengganggu keberlanjutan ekosistem hutan mangrove yang
                dilindungi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {STATS.map((s) => (
                  <div
                    key={s.title}
                    className="p-4 rounded-xl bg-white shadow-sm border border-slate-200/80 flex flex-col gap-0.5">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${s.valueColor}`}>{s.value}</span>
                    <span className="text-sm font-bold text-slate-900">{s.title}</span>
                    <span className="text-xs text-slate-500">{s.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. TESTIMONIALS SECTION */}
        {TESTIMONIALS.length > 0 && (
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                  Ulasan Pembeli
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Pengalaman Membeli Produk Mangrove Sari
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      {t.rating ? (
                        <div className="flex text-amber-500 gap-0.5" aria-label={`Rating ${t.rating} dari 5`}>
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <span key={s} className="material-symbols-outlined text-lg fill-current">
                              star
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <p className="text-sm text-slate-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                          AVATAR_TONES[i % AVATAR_TONES.length]
                        }`}>
                        {t.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{t.name}</span>
                        <span className="text-xs text-slate-500">{t.origin}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. CTA B2B / KEMITRAAN */}
        <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-900">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="material-symbols-outlined text-base">handshake</span>
              <span>Pemesanan Jumlah Besar &amp; Souvenir</span>
            </div>

            <div className="flex flex-col gap-3 max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Pemesanan Paket Souvenir &amp; Kemitraan
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Kami melayani pesanan paket souvenir kantor, hampers acara, serta penyediaan oleh-oleh khas untuk
                instansi atau rombongan kunjungan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shadow-sm"
                href={waLink(
                  "Halo Pengelola Mangrove Sari, kami tertarik untuk kemitraan dan pemesanan massal produk UMKM",
                )}
                rel="noopener noreferrer"
                target="_blank">
                <span className="material-symbols-outlined text-xl">forum</span>
                <span>Pesan via WhatsApp</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 text-white font-semibold text-sm border border-emerald-700/60 transition"
                href={waLink("Halo Admin Mangrove Sari, boleh minta info katalog produk UMKM terbaru?")}
                rel="noopener noreferrer"
                target="_blank">
                <span className="material-symbols-outlined text-xl">description</span>
                <span>Minta Info Katalog</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-800/60 w-full max-w-3xl">
              {PARTNER_BENEFITS.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center justify-center gap-2 text-emerald-200 text-xs sm:text-sm font-medium">
                  <span className="material-symbols-outlined text-lg text-amber-400">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
