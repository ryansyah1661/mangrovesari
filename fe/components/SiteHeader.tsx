"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
      <nav className="w-full flex justify-center z-50 pt-3 sm:pt-4 px-4">
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible
            bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full
            w-[95%] h-16 sm:h-18 px-5 sm:px-7
            ${scrolled ? "max-w-5xl shadow-md border-slate-300" : "max-w-7xl shadow-sm"}`}>
          {/* Group Kiri (Logo + Navigasi) */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group whitespace-nowrap">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <span className="material-symbols-outlined text-emerald-700 text-[18px]">forest</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">{SITE.name}</span>
                <span className="text-[8px] font-semibold text-emerald-700 uppercase tracking-widest mt-0.5 hidden sm:block">
                  Ekowisata &amp; Konservasi Brebes
                </span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-1 text-xs sm:text-sm font-bold whitespace-nowrap">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group whitespace-nowrap">
                    <button
                      type="button"
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer hover:text-emerald-700 ${
                        item.children.some((c) => isActive(c.href)) ? "text-emerald-700" : "text-slate-700"
                      }`}>
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-[15px] transition-transform duration-300 group-hover:rotate-180 shrink-0">
                        expand_more
                      </span>
                    </button>

                    <div className="absolute left-0 top-full pt-2 w-48 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <div className="flex flex-col p-1.5 bg-white border border-slate-200 rounded-2xl shadow-md gap-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                              isActive(c.href)
                                ? "bg-emerald-50 text-emerald-700"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            }`}>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    aria-current={isActive(item.href!) ? "page" : undefined}
                    className={`px-3 py-1.5 rounded-lg transition-colors flex items-center whitespace-nowrap hover:text-emerald-700 ${
                      isActive(item.href!) ? "text-emerald-700" : "text-slate-700"
                    }`}>
                    <span>{item.label}</span>
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Group Kanan (Mobile Toggle) */}
          <div className="flex xl:hidden items-center gap-2 shrink-0 whitespace-nowrap">
            <button
              aria-label="Menu Utama"
              aria-expanded={mobileOpen}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}>
              <span className="material-symbols-outlined text-[20px]">{mobileOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto xl:hidden w-[92%] max-w-5xl mt-2 bg-white/95 backdrop-blur-xl px-3 py-3 rounded-2xl flex flex-col gap-1 border border-slate-200 shadow-lg">
          {NAV.flatMap((item) => (item.children ? item.children : [{ label: item.label, href: item.href! }])).map(
            (l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive(l.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}>
                {l.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
