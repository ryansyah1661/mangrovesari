"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface DashboardStats {
  counts: {
    articles: number;
    published_articles: number;
    products: number;
    available_products: number;
    gallery: number;
    users: number;
  };
  recent_activities: {
    icon: string;
    text: string;
    time: string;
    color: string;
  }[];
}

export default function AdminDashboard() {
  const [userName, setUserName] = useState("Admin");
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUserName(JSON.parse(stored).name || "Admin");
      } catch {
        // ignore
      }
    }

    apiFetch<DashboardStats>("/admin/stats")
      .then((data) => setStats(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      icon: "article",
      label: "Total Artikel",
      value: stats ? String(stats.counts.articles) : "—",
      change: stats ? `${stats.counts.published_articles} terbit` : "Memuat...",
      bg: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: "shopping_bag",
      label: "Produk UMKM",
      value: stats ? String(stats.counts.products) : "—",
      change: stats ? `${stats.counts.available_products} tersedia` : "Memuat...",
      bg: "bg-amber-100 text-amber-800",
    },
    {
      icon: "photo_library",
      label: "Foto Galeri",
      value: stats ? String(stats.counts.gallery) : "—",
      change: "Dokumentasi aktif",
      bg: "bg-blue-100 text-blue-800",
    },
    {
      icon: "group",
      label: "Pengguna Admin",
      value: stats ? String(stats.counts.users) : "—",
      change: "Akun pengelola",
      bg: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Selamat datang, {userName}!</h2>
        <p className="text-sm text-slate-500 mt-1">
          Kelola konten website Mangrove Sari dari sini. Berikut ringkasan data terkini dari database.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          Gagal memuat statistik: {error}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-xl">{s.icon}</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">{s.change}</span>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900">{loading ? "..." : s.value}</p>
              <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Aktivitas Terakhir</h3>
            <span className="text-[11px] font-medium text-slate-400">Pembaruan database</span>
          </div>
          <div className="divide-y divide-slate-100">
            {loading ? (
              <div className="px-6 py-8 text-center text-sm text-slate-400">Memuat aktivitas...</div>
            ) : stats?.recent_activities?.length ? (
              stats.recent_activities.map((act, i) => (
                <div key={i} className="px-6 py-3.5 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <span className={`material-symbols-outlined text-[18px] ${act.color}`}>{act.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 font-medium truncate">{act.text}</p>
                    <p className="text-[11px] text-slate-400">{act.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-sm text-slate-400">Belum ada aktivitas tercatat.</div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-900">Aksi Cepat</h3>
          <div className="flex flex-col gap-2">
            {[
              { icon: "edit_note", label: "Kelola Artikel", href: "/admin/artikel", color: "bg-emerald-700 hover:bg-emerald-600" },
              { icon: "add_shopping_cart", label: "Kelola Produk UMKM", href: "/admin/produk", color: "bg-amber-700 hover:bg-amber-600" },
              { icon: "add_photo_alternate", label: "Upload Foto Galeri", href: "/admin/galeri", color: "bg-blue-700 hover:bg-blue-600" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-sm ${action.color} transition shadow-sm`}>
                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                <span>{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
