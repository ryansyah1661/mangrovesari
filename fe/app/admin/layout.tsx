"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface User {
  name: string;
  email: string;
}

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard", href: "/admin" },
  { icon: "article", label: "Artikel", href: "/admin/artikel" },
  { icon: "shopping_bag", label: "Produk UMKM", href: "/admin/produk" },
  { icon: "photo_library", label: "Galeri", href: "/admin/galeri" },
  { icon: "group", label: "Pengguna", href: "/admin/pengguna" },
  { icon: "settings", label: "Pengaturan", href: "/admin/pengaturan" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    fetch(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.replace("/login");
      });
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
    } catch {
      // ignore
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/login");
  };

  const isActive = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-4xl text-emerald-700 animate-spin">progress_activity</span>
          <span className="text-sm text-slate-500 font-medium">Memuat dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#062319] text-stone-200 flex flex-col border-r border-white/10 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="h-16 px-5 flex items-center gap-3 border-b border-white/10 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-900/80 border border-emerald-500/25 flex items-center justify-center">
            <span className="material-symbols-outlined text-amber-400 text-[18px]">forest</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm text-white tracking-tight">MANGROVE SARI</span>
            <span className="text-[9px] font-medium text-emerald-300/60 uppercase tracking-widest">Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-white/15 text-white font-semibold"
                  : "text-stone-300/80 hover:bg-white/8 hover:text-white"
              }`}>
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-300/80 hover:bg-red-900/20 hover:text-red-200 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition cursor-pointer"
              onClick={() => setSidebarOpen(true)}>
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
            <h1 className="text-sm font-bold text-slate-800 capitalize">
              {pathname === "/admin" ? "Dashboard" : pathname.replace("/admin/", "")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-slate-500 hover:text-emerald-700 font-medium transition">
              ← Kembali ke Website
            </Link>
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <span className="text-sm font-semibold text-slate-700 hidden sm:block">{user?.name || "Admin"}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
