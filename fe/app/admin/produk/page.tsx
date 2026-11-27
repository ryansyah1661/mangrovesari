"use client";

export default function AdminProdukPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Produk UMKM</h2>
          <p className="text-sm text-slate-500 mt-0.5">Tambah dan kelola produk olahan warga Pandansari.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Produk Baru</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Sirup Buah Bogem", price: "Rp 35.000", stock: "120 botol", status: "Tersedia" },
          { name: "Keripik Daun Mangrove", price: "Rp 25.000", stock: "85 bungkus", status: "Tersedia" },
          { name: "Dodol Bogem", price: "Rp 20.000", stock: "0", status: "Habis" },
          { name: "Batik Pewarna Mangrove", price: "Rp 150.000", stock: "12 lembar", status: "Tersedia" },
          { name: "Garam Rebus Tradisional", price: "Rp 15.000", stock: "200 bungkus", status: "Tersedia" },
          { name: "Madu Mangrove", price: "Rp 85.000", stock: "0", status: "Habis" },
        ].map((product, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-700 text-xl">inventory_2</span>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                  product.status === "Tersedia"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-red-100 text-red-700"
                }`}>
                {product.status}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{product.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Stok: {product.stock}</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-sm font-bold text-amber-700">{product.price}</span>
              <div className="flex items-center gap-1.5">
                <button className="text-slate-400 hover:text-emerald-700 transition cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
                <button className="text-slate-400 hover:text-red-600 transition cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
