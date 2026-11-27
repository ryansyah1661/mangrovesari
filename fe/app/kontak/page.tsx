"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const CONTACT_TOPICS = [
  "Kunjungan Ekowisata & Rombongan",
  "Program Penanaman CSR & Kemitraan",
  "Penelitian Akademik, KKN & Magang",
  "Pemesanan Produk UMKM & Bibit",
  "Permohonan Dokumen Legalitas / Media",
];

export default function KontakPage() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Halo Sekretariat KMPHP Mangrove Sari,",
      "",
      `Nama: ${name || "-"}`,
      `Instansi/Asal: ${institution || "-"}`,
      `Keperluan: ${topic}`,
      visitDate ? `Rencana Tanggal: ${visitDate}` : null,
      `Pesan: ${message || "-"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#FAF8F4] font-sans text-stone-800 antialiased min-h-screen selection:bg-emerald-900 selection:text-white">
      <SiteHeader />

      <main className="w-full">
        {/* 1. HERO HEADER */}
        <section className="bg-[#062319] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 border-b-4 border-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                Sekretariat KMPHP Mangrove Sari · Brebes
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                Hubungi Pengelola &amp; Rencanakan Kunjungan
              </h1>
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed">
                Sekretariat kami terbuka untuk koordinasi kunjungan wisata edukasi, penanaman bibit CSR, kegiatan
                penelitian mahasiswa maupun akademisi, serta pemesanan produk UMKM pesisir.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INFORMASI SEKRETARIAT & FORMULIR KOORDINASI */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Column: Direct Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                    Kanal Resmi Sekretariat
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                    Informasi Alamat &amp; Layanan
                  </h2>
                </div>

                <div className="bg-[#FAF8F4] rounded-2xl p-6 border border-stone-200 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">Alamat Sekretariat &amp; Dermaga</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Jl. Sungai Beting RT 01/05, Dukuh Pandansari, Desa Kaliwlingi, Kecamatan Brebes, Kabupaten
                        Brebes, Jawa Tengah 52219
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200/80 pt-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">WhatsApp &amp; Telepon Pengelola</h3>
                      <p className="text-sm font-semibold text-emerald-900">+62 812-3456-7890</p>
                      <p className="text-xs text-stone-500 mt-0.5">Respons cepat pada jam operasional kawasan</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200/80 pt-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">Surat Elektronik (Email)</h3>
                      <p className="text-sm font-semibold text-stone-800">sekretariat@mangrovesari.com</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Untuk surat resmi instansi, proposal CSR &amp; permohonan riset
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200/80 pt-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">Jam Operasional Kawasan</h3>
                      <p className="text-sm text-stone-700 font-medium">Setiap Hari: 06.00 – 17.30 WIB</p>
                      <p className="text-xs text-stone-500 mt-0.5">6°47&apos;S 109°02&apos;E · Pesisir Utara Brebes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Message Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#FAF8F4] rounded-2xl p-7 sm:p-10 border border-stone-200 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                    Formulir Koordinasi Cepat
                  </p>
                  <h2 className="text-2xl font-bold text-stone-900 mb-2">Kirim Pesan ke Sekretariat</h2>
                  <p className="text-sm text-stone-600 mb-7">
                    Isi rincian keperluan Anda di bawah ini untuk langsung terhubung dengan admin sekretariat melalui
                    WhatsApp resmi KMPHP Mangrove Sari.
                  </p>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-800 mb-1.5">
                          Nama Lengkap *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Contoh: Budi Santoso"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-institution"
                          className="block text-xs font-semibold text-stone-800 mb-1.5">
                          Instansi / Komunitas / Asal Kota
                        </label>
                        <input
                          id="contact-institution"
                          type="text"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                          placeholder="Contoh: Universitas Diponegoro / Umum"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-topic" className="block text-xs font-semibold text-stone-800 mb-1.5">
                          Topik Keperluan
                        </label>
                        <select
                          id="contact-topic"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800">
                          {CONTACT_TOPICS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-date" className="block text-xs font-semibold text-stone-800 mb-1.5">
                          Perkiraan Tanggal Kunjungan (Opsional)
                        </label>
                        <input
                          id="contact-date"
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-800 mb-1.5">
                        Rincian Pesan atau Jumlah Peserta *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tuliskan rencana kegiatan, estimasi jumlah peserta, kebutuhan perahu susur mangrove, atau pertanyaan lainnya..."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800"
                      />
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-sm transition">
                        <span className="material-symbols-outlined text-lg">chat</span>
                        <span>Kirim via WhatsApp Sekretariat</span>
                      </button>

                      <a
                        href="mailto:sekretariat@mangrovesari.com"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold text-sm transition">
                        <span className="material-symbols-outlined text-lg">mail</span>
                        <span>Kirim Email</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PETA LOKASI & PANDUAN AKSES */}
        <section className="py-16 sm:py-24 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-2">
                  Peta Kawasan &amp; Akses Rute
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                  Lokasi Dewi Mangrove Sari, Kaliwlingi
                </h2>
              </div>
              <a
                href="https://maps.google.com/?q=Dewi+Mangrove+Sari+Pandansari+Kaliwlingi+Brebes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-stone-100 text-stone-900 border border-stone-200 text-xs sm:text-sm font-semibold transition">
                <span>Buka di Google Maps</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-white">
              <div className="w-full h-[24rem] sm:h-[28rem] bg-stone-200">
                <iframe
                  title="Peta Lokasi Dewi Mangrove Sari Brebes"
                  src="https://www.google.com/maps?q=Dewi+Mangrove+Sari+Pandansari+Kaliwlingi+Brebes&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 bg-white border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-stone-900 block mb-1">Dari Pusat Kota Brebes</span>
                  <p className="text-stone-600">
                    Sekitar ±11 km ke arah utara melalui Jl. Yos Sudarso menuju Desa Kaliwlingi hingga Dermaga Sungai
                    Beting, Dukuh Pandansari.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-stone-900 block mb-1">Akses Tol Trans Jawa</span>
                  <p className="text-stone-600">
                    Keluar melalui Gerbang Tol Brebes Timur (Brexit) atau Brebes Barat, dilanjutkan perjalanan darat
                    ±25–30 menit menuju pesisir Kaliwlingi.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-stone-900 block mb-1">Penyeberangan ke Zona Hutan</span>
                  <p className="text-stone-600">
                    Dari dermaga utama Dukuh Pandansari, pengunjung menyeberang menggunakan perahu nelayan selama ±10
                    menit menuju area tracking mangrove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#062319] text-stone-300 pt-16 pb-12 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <span className="text-lg font-bold tracking-tight text-white block mb-3">MANGROVE SARI</span>
            <p className="text-sm text-stone-400 leading-relaxed">
              Kelompok Masyarakat Pelestari Hutan Pesisir (KMPHP) di Dukuh Pandansari, Desa Kaliwlingi, Kecamatan
              Brebes, Kabupaten Brebes, Jawa Tengah.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="hover:text-white transition" href="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/organisasi">
                  Profil &amp; Legalitas
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/sejarah">
                  Sejarah Kebangkitan
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/wardia">
                  Warta &amp; Media
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/galeri">
                  Galeri Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Program &amp; Fokus</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="hover:text-white transition" href="/ekowisata">
                  Ekowisata Pesisir
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/ekowisata#konservasi">
                  Pembibitan &amp; Konservasi
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/umkm">
                  Produk Olahan Warga
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/riset">
                  Penelitian &amp; Magang
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Sekretariat</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>Jl. Sungai Beting RT 01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah</li>
              <li className="text-stone-200 font-medium">+62 812-3456-7890</li>
              <li className="text-stone-200 font-medium">sekretariat@mangrovesari.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} KMPHP Mangrove Sari Brebes.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition" href="/privasi">
              Kebijakan Privasi
            </Link>
            <Link className="hover:text-white transition" href="/syarat">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
