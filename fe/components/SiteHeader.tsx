"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE, waLink } from "@/lib/site";

const linkBase =
  "px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary transition-all";
const linkActive =
  "px-space-md py-space-sm rounded-full bg-secondary text-on-secondary font-label-md text-label-md shadow-[0_2px_8px_rgba(0,0,0,0.12)]";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_12px_32px_-4px_rgba(31,77,58,0.18)]">
      <div className="h-20 w-full px-space-md lg:px-margin flex items-center justify-between gap-space-md">
        <Link href="/" className="flex items-center gap-space-md flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">forest</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-primary leading-tight font-bold tracking-tight">
              {SITE.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-primary-container tracking-wider uppercase hidden sm:block">
              {SITE.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-xs">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className={`${
                    item.children.some((c) => isActive(c.href)) ? linkActive : linkBase
                  } flex items-center gap-1`}>
                  {item.label}
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col w-48 bg-primary rounded-xl shadow-[0_12px_32px_-4px_rgba(31,77,58,0.25)] p-space-xs z-50">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-primary-container hover:bg-primary-container hover:text-on-primary transition-all">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={isActive(item.href!) ? linkActive : linkBase}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div className="hidden md:flex items-center gap-space-xs">
            <a
              aria-label="Facebook Mangrove Sari"
              className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
              href={SITE.facebook}
              rel="noopener noreferrer"
              target="_blank">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a
              aria-label="Instagram Mangrove Sari"
              className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
              href={SITE.instagram}
              rel="noopener noreferrer"
              target="_blank">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
          </div>
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all font-label-md text-label-md shadow-[0_4px_20px_-2px_rgba(31,77,58,0.12)]"
            href={waLink()}
            rel="noopener noreferrer"
            target="_blank">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
          <button
            aria-label="Menu Utama"
            className="xl:hidden p-2 rounded-lg text-on-primary hover:bg-surface-container-lowest/10"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined text-[24px]">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-primary p-space-md flex flex-col gap-space-xs border-t border-surface-container-lowest/10">
          {NAV.flatMap((item) => (item.children ? item.children : [{ label: item.label, href: item.href! }])).map(
            (l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`px-space-md py-space-sm rounded-lg ${
                  isActive(l.href)
                    ? "bg-secondary text-on-secondary"
                    : "text-on-primary-container hover:text-on-primary"
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
