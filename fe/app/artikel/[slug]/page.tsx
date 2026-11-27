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

  const related = ALL_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen">
      <SiteHeader />

      <main className="w-full pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wardia"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-600 transition mb-6">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Kembali ke Warta &amp; Media</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className={`px-3 py-1 rounded-full font-bold tracking-wide ${article.categoryBadge}`}>
              {article.categoryLabel}
            </span>
            <span className="text-slate-500">{article.date}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">{article.metaInfo}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">{article.author}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{article.excerpt}</p>

          <div className="relative rounded-2xl overflow-hidden bg-slate-200 shadow-md mb-10 aspect-[16/9]">
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

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Warta &amp; Media Lainnya</h2>
            <Link href="/wardia" className="text-xs font-bold text-emerald-800 hover:text-emerald-600 transition">
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col group">
                <div className="relative h-44 bg-slate-200 overflow-hidden">
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
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-1.5">{item.date}</span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition leading-snug">
                      <Link href={`/artikel/${item.slug}`}>{item.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href={`/artikel/${item.slug}`}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-600 inline-flex items-center gap-1">
                    <span>{item.isVideo ? "Tonton Video" : "Baca Artikel"}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
