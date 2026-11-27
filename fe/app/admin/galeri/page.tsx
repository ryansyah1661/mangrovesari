"use client";

export default function AdminGaleriPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Galeri</h2>
          <p className="text-sm text-slate-500 mt-0.5">Upload dan kelola foto dokumentasi konservasi &amp; ekowisata.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
          <span>Upload Foto</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-1.5 hover:bg-slate-50 transition">
              <span className="material-symbols-outlined text-3xl">image</span>
              <span className="text-[11px] font-medium">Foto {i + 1}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          Galeri akan menampilkan foto yang di-upload melalui API backend.
        </p>
      </div>
    </div>
  );
}
