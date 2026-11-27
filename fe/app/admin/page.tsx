"use client";

import { useEffect, useState } from "react";

const stats = [
  { icon: "article", label: "Total Artikel", value: "24", change: "+3 bulan ini", bg: "bg-emerald-100 text-emerald-800" },
  { icon: "shopping_bag", label: "Produk UMKM", value: "18", change: "+2 bulan ini", bg: "bg-amber-100 text-amber-800" },
  { icon: "photo_library", label: "Foto Galeri", value: "86", change: "+12 bulan ini", bg: "bg-blue-100 text-blue-800" },
  { icon: "visibility", label: "Kunjungan", value: "5.2k", change: "+18% dari bulan lalu", bg: "bg-purple-100 text-purple-800" },
];

const recentActivities = [
  { icon: "edit", text: "Artikel 'Revitalisasi 440 Hektar' diperbarui", time: "2 jam lalu", color: "text-emerald-700" },
  { icon: "add_photo_alternate", text: "5 foto baru ditambahkan ke galeri", time: "5 jam lalu", color: "text-blue-700" },
  { icon: "shopping_bag", text: "Produk 'Sirup Bogem' stok diperbarui", time: "1 hari lalu", color: "text-amber-700" },
  { icon: "person_add", text: "Admin baru 'Sugiarto' terdaftar", time: "2 hari lalu", color: "text-purple-700" },
];

export default function AdminDashboard() {
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUserName(JSON.parse(stored).name || "Admin");
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Selamat datang, {userName}! 👋</h2>
        <p className="text-sm text-slate-500 mt-1">
          Kelola konten website Mangrove Sari dari sini. Berikut ringkasan data terkini.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-xl">{s.icon}</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">{s.change}</span>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Log */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Aktivitas Terakhir</h3>
            <span className="text-[11px] font-medium text-slate-400">7 hari terakhir</span>
          </div>
          <div className="divide-y divide-slate-100">
            {recentActivities.map((act, i) => (
              <div key={i} className="px-6 py-3.5 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <span className={`material-symbols-outlined text-[18px] ${act.color}`}>{act.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 font-medium truncate">{act.text}</p>
                  <p className="text-[11px] text-slate-400">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col gap-4">
          <h3 className="text-base font-bold text-slate-900">Aksi Cepat</h3>
          <div className="flex flex-col gap-2">
            {[
              { icon: "edit_note", label: "Tulis Artikel Baru", href: "/admin/artikel", color: "bg-emerald-700 hover:bg-emerald-600" },
              { icon: "add_shopping_cart", label: "Tambah Produk", href: "/admin/produk", color: "bg-amber-700 hover:bg-amber-600" },
              { icon: "add_photo_alternate", label: "Upload Foto", href: "/admin/galeri", color: "bg-blue-700 hover:bg-blue-600" },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-sm ${action.color} transition shadow-sm`}>
                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                <span>{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
