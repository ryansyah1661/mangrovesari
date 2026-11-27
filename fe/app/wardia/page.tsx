import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleSearchAndFilter from "@/components/artikel/ArticleSearchAndFilter";
import ArticleNewsletter from "@/components/artikel/ArticleNewsletter";
import { ALL_CONTENT, FEATURED_CONTENT, SIDEBAR_POPULAR } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Kabar & Media | Mangrove Sari Brebes",
  description:
    "Pusat berita, liputan konservasi, cerita UMKM pesisir, dan galeri video eksklusif Mangrove Sari Kaliwlingi Brebes.",
};

interface PageProps {
  searchParams: Promise<{ kategori?: string; q?: string }>;
}

export default async function KabarMediaPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams?.kategori || "semua";
  const searchQuery = resolvedParams?.q || "";

  const filteredContent = ALL_CONTENT.filter((item) => {
    const matchCategory = currentCategory === "semua" || item.category === currentCategory;
    const term = searchQuery.trim().toLowerCase();
    const matchSearch =
      term === "" || item.title.toLowerCase().includes(term) || item.excerpt.toLowerCase().includes(term);
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-24 sm:pt-28">
        {/* 1. HERO HEADER */}
        <section className="bg-amber-50/60 py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold w-fit">
                  Pusat Informasi &amp; Publikasi
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Kabar &amp; Media Mangrove Sari
                </h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Temukan rilis artikel konservasi, kabar pemberdayaan UMKM, dan liputan video eksklusif dalam satu
                  tempat.
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900">440 Ha</span>
                  <span className="text-xs text-slate-500 font-medium">Kawasan Konservasi</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900">30+</span>
                  <span className="text-xs text-slate-500 font-medium">Artikel &amp; Video</span>
                </div>
              </div>
            </div>

            {/* Filter Interaktif */}
            <ArticleSearchAndFilter />
          </div>
        </section>

        {/* 2. FEATURED ITEM */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-7/12 relative min-h-[260px] lg:min-h-[360px] bg-slate-200">
              <img src={FEATURED_CONTENT.image} alt={FEATURED_CONTENT.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-950 text-white text-xs font-bold shadow-sm">
                {FEATURED_CONTENT.categoryLabel}
              </span>
            </div>

            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <span>{FEATURED_CONTENT.date}</span>
                  <span>•</span>
                  <span className="text-slate-500">{FEATURED_CONTENT.metaInfo}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-emerald-800 transition leading-snug">
                  <Link href={`/artikel/${FEATURED_CONTENT.slug}`}>{FEATURED_CONTENT.title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {FEATURED_CONTENT.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{FEATURED_CONTENT.author}</span>
                <Link
                  href={`/artikel/${FEATURED_CONTENT.slug}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs transition">
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MAIN CONTENT: DUA KOLOM (KONTEN & SIDEBAR) */}
        <section className="py-6 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* DAFTAR ARTIKEL & VIDEO (KIRI) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-lg font-bold text-slate-900">Rilis Terbaru</h3>
                <span className="text-xs text-slate-500">Menampilkan {filteredContent.length} Konten</span>
              </div>

              {filteredContent.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredContent.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition duration-200 flex flex-col overflow-hidden group">
                      <div className="relative h-48 bg-slate-200 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold ${item.categoryBadge}`}>
                          {item.categoryLabel}
                        </span>

                        {item.isVideo && (
                          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 text-white text-xs font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">play_circle</span>
                            {item.metaInfo}
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span>{item.date}</span>
                            <span>•</span>
                            <span>{item.author}</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition leading-snug">
                            <Link href={`/artikel/${item.slug}`}>{item.title}</Link>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{item.excerpt}</p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            href={`/artikel/${item.slug}`}
                            className="text-xs font-bold text-slate-700 hover:text-emerald-800 transition flex items-center gap-1">
                            <span>{item.isVideo ? "Tonton Video" : "Baca Artikel"}</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                  Tidak ditemukan artikel atau video untuk kategori ini.
                </div>
              )}
            </div>

            {/* SIDEBAR (KANAN) */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Widget Populer */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-800 text-lg">trending_up</span>
                  Paling Banyak Dibaca
                </h4>
                <div className="flex flex-col gap-4">
                  {SIDEBAR_POPULAR.map((pop) => (
                    <div key={pop.rank} className="flex items-start gap-3">
                      <span className="text-2xl font-extrabold text-emerald-800/40 shrink-0">{pop.rank}</span>
                      <div className="flex flex-col gap-1">
                        <Link
                          href={`/artikel/${pop.slug}`}
                          className="text-xs font-bold text-slate-800 hover:text-emerald-800 transition leading-snug line-clamp-2">
                          {pop.title}
                        </Link>
                        <span className="text-[10px] text-slate-400">{pop.views}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget Form Buletin */}
              <div className="bg-emerald-950 text-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-emerald-900">
                <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-800 flex items-center justify-center text-amber-400">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-white">Buletin Redaksi</h4>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    Dapatkan rangkuman kabar kegiatan konservasi dan liputan video langsung di email Anda.
                  </p>
                </div>
                <ArticleNewsletter />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
