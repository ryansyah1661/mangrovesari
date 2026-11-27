import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ALL_ARTICLES, getArticleBySlug } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Artikel Tidak Ditemukan | Mangrove Sari" };
  }
  return {
    title: `${article.title} | Mangrove Sari Brebes`,
    description: article.excerpt,
  };
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const sameCategory = ALL_ARTICLES.filter(
    (item) => item.slug !== article.slug && item.category === article.category
  );
  const otherArticles = ALL_ARTICLES.filter(
    (item) => item.slug !== article.slug && item.category !== article.category
  );
  const related = [...sameCategory, ...otherArticles].slice(0, 4);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-28 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wardia"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-600 transition mb-6">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Kembali ke Warta &amp; Media</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Kiri: Konten Utama Artikel */}
            <article className="lg:col-span-8">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${article.categoryBadge}`}>
                  {article.categoryLabel}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7">{article.excerpt}</p>

              <div className="relative rounded-2xl overflow-hidden bg-slate-200 shadow-md mb-8 aspect-[16/9]">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                {article.isVideo && (
                  <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl">play_arrow</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Dokumentasi Video ({article.metaInfo})
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm flex flex-col gap-6">
                {article.body.map((paragraph, index) => (
                  <p key={index} className="text-slate-700 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {article.quote && (
                  <blockquote className="my-2 pl-5 border-l-4 border-amber-600 bg-amber-50/60 py-4 pr-4 rounded-r-xl text-slate-800 font-medium italic leading-relaxed">
                    “{article.quote}”
                  </blockquote>
                )}
              </div>
            </article>

            {/* Kanan: Sidebar Info Tanggal & Artikel Terkait */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              {/* Card Informasi Publikasi */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-700 text-lg">info</span>
                  <span>Informasi Warta</span>
                </h2>

                <dl className="divide-y divide-slate-100 text-sm">
                  <div className="py-3 first:pt-0 flex items-center justify-between gap-4">
                    <dt className="text-slate-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-slate-400">calendar_today</span>
                      <span>Tanggal Terbit</span>
                    </dt>
                    <dd className="font-semibold text-slate-900 text-right">{article.date}</dd>
                  </div>
                  <div className="py-3 flex items-center justify-between gap-4">
                    <dt className="text-slate-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-slate-400">person</span>
                      <span>Penulis</span>
                    </dt>
                    <dd className="font-semibold text-slate-900 text-right">{article.author}</dd>
                  </div>
                  <div className="py-3 flex items-center justify-between gap-4">
                    <dt className="text-slate-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-slate-400">schedule</span>
                      <span>{article.isVideo ? "Durasi" : "Waktu Baca"}</span>
                    </dt>
                    <dd className="font-semibold text-slate-900 text-right">{article.metaInfo}</dd>
                  </div>
                  <div className="py-3 last:pb-0 flex items-center justify-between gap-4">
                    <dt className="text-slate-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-slate-400">sell</span>
                      <span>Kategori</span>
                    </dt>
                    <dd className="font-semibold text-emerald-800 text-right">{article.categoryLabel}</dd>
                  </div>
                </dl>
              </div>

              {/* Card Warta & Media Terkait */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-600 text-lg">article</span>
                    <span>Warta Terkait</span>
                  </h2>
                  <Link href="/wardia" className="text-xs font-bold text-emerald-800 hover:text-emerald-600 transition">
                    Semua →
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      href={`/artikel/${item.slug}`}
                      className="group flex gap-3.5 items-start p-2 -mx-2 rounded-xl hover:bg-slate-50 transition">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                        {item.isVideo && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">play_arrow</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-medium text-slate-400 block mb-1">
                          {item.date} • {item.categoryLabel}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
