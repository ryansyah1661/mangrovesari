"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface FilterOption {
  label: string;
  count: number;
  slug: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: "Semua", count: 34, slug: "semua" },
  { label: "Artikel Konservasi", count: 18, slug: "konservasi" },
  { label: "Inovasi UMKM", count: 6, slug: "umkm" },
  { label: "Edukasi & Riset", count: 5, slug: "riset" },
  { label: "Video & Liputan", count: 5, slug: "video" },
];

export default function ArticleSearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("kategori") || "semua";
  const currentSearch = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(currentSearch);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm.trim()) {
      params.set("q", searchTerm.trim());
    } else {
      params.delete("q");
    }
    router.push(`/artikel?${params.toString()}`);
  };

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "semua") {
      params.delete("kategori");
    } else {
      params.set("kategori", slug);
    }
    router.push(`/artikel?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="relative w-full flex items-center">
        <span className="material-symbols-outlined absolute left-4 text-slate-400 text-xl pointer-events-none">
          search
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari artikel, riset, atau berita pesisir..."
          className="w-full pl-12 pr-28 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-emerald-700 shadow-2xs"
        />
        <button
          type="submit"
          className="absolute right-1.5 px-5 py-2.5 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs transition flex items-center gap-1 shadow-2xs">
          <span>Cari</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </form>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTER_OPTIONS.map((opt) => {
          const isActive = currentCategory === opt.slug;
          return (
            <button
              key={opt.slug}
              type="button"
              onClick={() => handleCategoryChange(opt.slug)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                isActive
                  ? "bg-emerald-950 text-white shadow-2xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}>
              <span>{opt.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-emerald-800 text-emerald-100" : "bg-slate-100 text-slate-500"
                }`}>
                ({opt.count})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
