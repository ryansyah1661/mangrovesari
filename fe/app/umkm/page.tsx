import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCatalog from "@/components/umkm/ProductCatalog";
import { TESTIMONIALS } from "@/lib/testimonials";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paket UMKM Spesial | Mangrove Sari",
  description:
    "Beli dan berdayakan! Produk olahan mangrove, batik, dan kriya karya warga Dukuh Pandansari, Kaliwlingi, Brebes.",
};

const heroPills = [
  { icon: "verified_user", text: "100% Produk Warga Lokal" },
  { icon: "compost", text: "Pewarna & Bahan Alami Berkelanjutan" },
  { icon: "local_shipping", text: "Pengiriman Seluruh Indonesia" },
];

const stats = [
  { value: "30+", title: "Kelompok Usaha", note: "Binaan terpadu warga desa", valueColor: "text-primary" },
  { value: "85+", title: "Ibu Rumah Tangga", note: "Berdaya & mandiri finansial", valueColor: "text-primary" },
  { value: "100%", title: "Bahan Ramah Alam", note: "Bebas bahan kimia berbahaya", valueColor: "text-secondary" },
];

const partnerBenefits = [
  { icon: "tune", text: "Minimal order fleksibel" },
  { icon: "draw", text: "Kustomisasi label/kemasan" },
  { icon: "receipt_long", text: "Faktur & nota resmi pengelola KMPHP" },
];

const avatarTones = [
  "bg-secondary-container text-primary",
  "bg-primary-fixed text-primary",
  "bg-tertiary-fixed text-tertiary",
];

export default function UmkmPage() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* 1. HERO */}
          <section className="relative w-full bg-surface-container-low px-space-md lg:px-margin pt-10 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Beranda
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
                <span className="text-primary font-semibold">UMKM Pesisir</span>
              </nav>

              <div className="flex flex-col gap-4 max-w-4xl">
                <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-secondary-container/60 text-primary">
                  <span className="material-symbols-outlined text-[18px]">eco</span>
                  <span className="font-label-md text-label-md">
                    Pemberdayaan Ekonomi Lokal &amp; Konservasi Terpadu
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                  Paket UMKM Spesial
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Beli dan berdayakan! Setiap pembelian mendukung langsung kemandirian ekonomi keluarga nelayan dan
                  pelestarian 440 hektar hutan mangrove di pesisir Brebes.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {heroPills.map((p) => (
                    <div
                      key={p.text}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-primary shadow-sm font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[18px] text-secondary">{p.icon}</span>
                      <span>{p.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
          </section>

          {/* 2. KATALOG (filter + produk) */}
          <ProductCatalog />

          {/* 3. CERITA KOMUNITAS */}
          <section className="w-full bg-surface-container-low px-space-md lg:px-margin py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-primary-container to-secondary">
                  <span className="material-symbols-outlined absolute -right-6 -top-6 text-[220px] text-on-primary/10">
                    diversity_3
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                    <span className="font-label-sm text-label-sm tracking-wider uppercase opacity-90">
                      Koperasi Komunitas Pesisir
                    </span>
                    <p className="font-title-md text-title-md font-semibold mt-1">
                      Dukuh Pandansari, Kaliwlingi, Brebes
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-surface-container-lowest p-4 rounded-2xl shadow-lg border border-surface-container-high flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">diversity_3</span>
                  </div>
                  <div>
                    <p className="font-title-lg text-title-lg font-bold text-primary">KMPHP</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Kelompok Sadar Wisata &amp; UMKM
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
                <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-secondary-container/50 text-primary">
                  <span className="material-symbols-outlined text-[16px]">groups</span>
                  <span className="font-label-sm text-label-sm">Kemandirian Ekonomi Komunitas</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                  30 Usaha Masyarakat dalam Berbagai Jenis: Menghidupkan Tradisi, Memulihkan Ekosistem
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Kisah kelompok wanita tani (KWT) dan pemuda nelayan Dukuh Pandansari yang mentransformasikan hasil
                  pesisir menjadi berkah ekonomi berkelanjutan. Dari tambak abrasi yang dulu terancam, kini lahir ragam
                  inovasi pangan, sandang, dan kriya bernilai tinggi.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Setiap produk dihasilkan dengan prinsip sirkular ekonomi: pemanfaatan limbah propagul untuk pewarna
                  alami kain batik, pengelolaan buah bogem tanpa merusak pohon induk, hingga pengolahan garam laut
                  bersahabat dengan api kayu lestari.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {stats.map((s) => (
                    <div
                      key={s.title}
                      className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                      <span className={`font-display-lg text-headline-lg ${s.valueColor} font-bold`}>{s.value}</span>
                      <span className="font-title-md text-title-md font-semibold text-on-surface">{s.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{s.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. ULASAN: hanya tampil kalau lib/testimonials.ts berisi ulasan asli */}
          {TESTIMONIALS.length > 0 && (
            <section className="w-full bg-background px-space-md lg:px-margin py-16">
              <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
                    Apresiasi &amp; Ulasan
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary">
                    Apa Kata Mereka tentang Produk Mangrove Sari
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((t, i) => (
                    <div
                      key={t.name}
                      className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-6 border border-surface-container-high/50">
                      <div className="flex flex-col gap-4">
                        {t.rating ? (
                          <div
                            className="flex text-tertiary-container gap-0.5"
                            aria-label={`Rating ${t.rating} dari 5`}>
                            {Array.from({ length: t.rating }).map((_, s) => (
                              <span
                                key={s}
                                className="material-symbols-outlined text-[18px]"
                                style={{ fontVariationSettings: "'FILL' 1" }}>
                                star
                              </span>
                            ))}
                          </div>
                        ) : null}
                        <p className="font-body-md text-body-md text-on-surface-variant italic">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            avatarTones[i % avatarTones.length]
                          }`}>
                          {t.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md font-semibold text-primary">{t.name}</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">{t.origin}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 5. CTA KEMITRAAN */}
          <section className="w-full bg-primary-container text-on-primary px-space-md lg:px-margin py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">handshake</span>
                <span className="font-label-md text-label-md">Program Kemitraan &amp; Pengadaan B2B / Komunitas</span>
              </div>
              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary font-bold tracking-tight">
                  Ingin Bermitra atau Pesan dalam Jumlah Besar?
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                  Kami melayani pesanan paket souvenir pernikahan, bingkisan ramah lingkungan (eco-hampers) perusahaan,
                  maupun pengadaan oleh-oleh untuk studi tiru dan instansi.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-tertiary-container hover:bg-tertiary text-on-tertiary font-title-lg text-title-lg transition-all duration-300 shadow-md hover:scale-105"
                  href={waLink(
                    "Halo Pengelola Mangrove Sari, kami tertarik untuk kemitraan dan pemesanan massal produk UMKM",
                  )}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[22px]">forum</span>
                  <span>Hubungi Layanan Kemitraan (WhatsApp)</span>
                </a>
                {/* Belum ada file katalog PDF, jadi tombol ini meminta katalog lewat WhatsApp.
                    Kalau sudah ada, ganti href ke file di /public dan teksnya jadi "Unduh Katalog Produk PDF". */}
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent hover:bg-surface-container-lowest/10 text-on-primary font-title-lg text-title-lg transition-all duration-200 border-2 border-on-primary-container/40"
                  href={waLink("Halo Admin Mangrove Sari, boleh minta katalog produk UMKM terbaru?")}
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="material-symbols-outlined text-[22px]">description</span>
                  <span>Minta Katalog Produk</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-on-primary-container/20 w-full max-w-4xl">
                {partnerBenefits.map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center justify-center gap-2 text-on-primary-container font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">{b.icon}</span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
          </section>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
