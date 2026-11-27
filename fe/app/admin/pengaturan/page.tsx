"use client";

export default function AdminPengaturanPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Pengaturan Website</h2>
        <p className="text-sm text-slate-500 mt-0.5">Konfigurasi informasi umum website Mangrove Sari.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 flex flex-col gap-6">
        <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">Informasi Umum</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "Nama Organisasi", value: "KMPHP Mangrove Sari", icon: "business" },
            { label: "Email Resmi", value: "sekretariat@mangrovesari.org", icon: "mail" },
            { label: "Nomor WhatsApp", value: "+62 812-3456-7890", icon: "phone" },
            { label: "Jam Operasional", value: "06.00 - 17.30 WIB", icon: "schedule" },
          ].map((field, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{field.label}</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">
                  {field.icon}
                </span>
                <input
                  type="text"
                  defaultValue={field.value}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Alamat Lengkap</label>
          <textarea
            defaultValue="Jl. Sungai Beting RT.01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah 52219"
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition resize-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Simpan Perubahan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
