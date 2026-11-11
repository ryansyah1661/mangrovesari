"use client";

import { useState } from "react";
import { CATEGORIES, CATEGORY_LABEL, PRODUCTS, type CategoryKey } from "@/lib/products";
import { waLink } from "@/lib/site";

// Warna panel produk per kategori (pengganti foto).
const CATEGORY_STYLE: Record<CategoryKey, { panel: string; icon: string; badge: string }> = {
  minuman: {
    panel: "from-secondary-container to-primary-fixed",
    icon: "text-secondary",
    badge: "bg-surface-container-lowest/80 text-primary",
  },
  makanan: {
    panel: "from-tertiary-fixed to-secondary-container",
    icon: "text-tertiary-container",
    badge: "bg-surface-container-lowest/80 text-primary",
  },
  batik: {
    panel: "from-tertiary-fixed to-tertiary-fixed-dim",
    icon: "text-tertiary",
    badge: "bg-tertiary-fixed text-tertiary",
  },
  kriya: {
    panel: "from-primary-fixed to-secondary-fixed-dim",
    icon: "text-primary",
    badge: "bg-surface-container-lowest/80 text-primary",
  },
};

const chipActive = "bg-primary text-on-primary shadow-sm";
const chipIdle = "bg-surface-container-high text-on-surface hover:bg-surface-container-highest";

export default function ProductCatalog() {
  const [active, setActive] = useState<"all" | CategoryKey>("all");
  const visible = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section className="w-full bg-background px-space-md lg:px-margin py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-surface-container-highest/60">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Kategori produk">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={active === c.key}
                onClick={() => setActive(c.key)}
                className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all duration-200 ${
                  active === c.key ? chipActive : chipIdle
                }`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col text-left md:text-right">
            <span className="font-title-md text-title-md text-primary font-semibold" aria-live="polite">
              Menampilkan {visible.length} Produk Unggulan Komunitas
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Karya Ibu-Ibu &amp; Pemuda Dukuh Pandansari
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p) => {
            const style = CATEGORY_STYLE[p.category];
            return (
              <article
                key={p.id}
                className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className={`relative w-full h-44 overflow-hidden bg-gradient-to-br ${style.panel}`}>
                  <div className="absolute -right-10 -bottom-12 w-44 h-44 rounded-full bg-surface-container-lowest/30 blur-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`material-symbols-outlined text-[72px] ${style.icon} opacity-80 group-hover:scale-110 transition-transform duration-500`}>
                      {p.icon}
                    </span>
                  </div>
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full ${style.badge} font-label-sm text-label-sm backdrop-blur-sm`}>
                    {CATEGORY_LABEL[p.category]}
                  </span>
                  {p.ribbon && (
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full font-label-sm text-label-sm shadow-sm ${
                        p.ribbon.tone === "solid"
                          ? "bg-secondary text-on-secondary"
                          : "bg-surface-container-lowest/90 text-primary"
                      }`}>
                      {p.ribbon.text}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h2 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">
                      {p.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 border-t border-surface-container-high">
                    <div className="flex items-baseline justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Harga</span>
                      <span className="font-headline-sm text-headline-sm font-bold text-primary">
                        {p.price}{" "}
                        <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">{p.unit}</span>
                      </span>
                    </div>
                    <a
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-tertiary-container hover:bg-tertiary text-on-tertiary font-title-md text-title-md transition-all duration-200 shadow-sm hover:shadow"
                      href={waLink(`Halo Admin Mangrove Sari, saya ingin memesan ${p.title}`)}
                      rel="noopener noreferrer"
                      target="_blank">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                      Pesan via WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
