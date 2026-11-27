"use client";

export default function AdminArtikelPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Artikel</h2>
          <p className="text-sm text-slate-500 mt-0.5">Buat, edit, dan hapus artikel serta video Warta &amp; Media.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Artikel Baru</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-3.5">Judul</th>
                <th className="px-6 py-3.5">Kategori</th>
                <th className="px-6 py-3.5">Tanggal</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { title: "Revitalisasi 440 Hektar Hutan Mangrove", category: "Konservasi", date: "20 Feb 2026", status: "Terbit" },
                { title: "Sentra Produksi Sirup Bogem", category: "UMKM", date: "15 Feb 2026", status: "Terbit" },
                { title: "Pengukuran Cadangan Karbon Biru", category: "Riset", date: "10 Feb 2026", status: "Draft" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4 font-medium text-slate-800 max-w-xs truncate">{row.title}</td>
                  <td className="px-6 py-4 text-slate-600">{row.category}</td>
                  <td className="px-6 py-4 text-slate-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        row.status === "Terbit"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
                      }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-emerald-700 transition cursor-pointer">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="text-slate-400 hover:text-red-600 transition ml-2 cursor-pointer">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
