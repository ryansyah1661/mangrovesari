"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
const BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.errors?.email?.[0] || "Email atau password salah.");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/admin");
    } catch {
      setError("Tidak dapat terhubung ke server backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-[#062319] font-sans text-slate-900 flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Background Foto Kawasan + Overlay */}
      <img
        src={BG_IMAGE}
        alt="Kawasan Konservasi Mangrove Sari Brebes"
        className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#062319]/80 via-[#062319]/75 to-[#041811]/95" />
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card Utama di Tengah */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-black/30 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-500" />

          <div className="p-7 sm:p-9">
            {/* Brand Pill */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-[#062319] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-amber-400 text-xl">forest</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-[#062319] tracking-tight">MANGROVE SARI</span>
                <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-widest mt-1">
                  Panel Administrasi
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">Autentikasi Admin</span>
              <h1 className="text-2xl font-bold text-slate-900 mt-1">Masuk ke Dashboard</h1>
              <p className="text-sm text-slate-500 mt-1">
                Masukkan kredensial pengelola untuk mengakses panel admin.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base shrink-0">error</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Alamat Email
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@mangrovesari.org"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700/25 focus:border-emerald-700 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">
                    lock
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700/25 focus:border-emerald-700 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full py-3.5 rounded-xl bg-[#062319] hover:bg-emerald-900 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                {loading ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Panel Admin</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between text-xs text-emerald-100/70 px-1">
          <Link href="/" className="hover:text-white font-medium transition inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Kembali ke Beranda</span>
          </Link>
          <span>© {new Date().getFullYear()} KMPHP Mangrove Sari</span>
        </div>
      </div>
    </div>
  );
}
