"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface Article {
  id: number;
  title: string;
  slug: string;
  category: "konservasi" | "umkm" | "riset" | "video";
  category_label: string;
  excerpt: string | null;
  body: string[] | null;
  quote: string | null;
  image: string | null;
  author: string;
  meta_info: string;
  is_video: boolean;
  status: "Terbit" | "Draft";
  published_at: string | null;
}

const emptyForm = {
  title: "",
  category: "konservasi" as Article["category"],
  excerpt: "",
  bodyText: "",
  quote: "",
  image: "",
  author: "Editorial Team",
  meta_info: "5 min baca",
  status: "Terbit" as Article["status"],
  published_at: new Date().toISOString().slice(0, 10),
};

export default function AdminArtikelPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Article | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<Article[]>("/admin/articles");
      setArticles(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm, published_at: new Date().toISOString().slice(0, 10) });
    setModalOpen(true);
  };

  const openEdit = (article: Article) => {
    setEditing(article);
    setForm({
      title: article.title,
      category: article.category,
      excerpt: article.excerpt || "",
      bodyText: (article.body || []).join("\n\n"),
      quote: article.quote || "",
      image: article.image || "",
      author: article.author || "Editorial Team",
      meta_info: article.meta_info || "5 min baca",
      status: article.status,
      published_at: article.published_at ? article.published_at.slice(0, 10) : new Date().toISOString().slice(0, 10),
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: form.title,
      category: form.category,
      excerpt: form.excerpt,
      body: form.bodyText
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean),
      quote: form.quote || null,
      image: form.image || null,
      author: form.author,
      meta_info: form.meta_info,
      is_video: form.category === "video",
      status: form.status,
      published_at: form.published_at,
    };

    try {
      if (editing) {
        await apiFetch(`/admin/articles/${editing.id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/admin/articles", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      setModalOpen(false);
      await loadArticles();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (article: Article) => {
    if (!confirm(`Hapus artikel "${article.title}"?`)) return;
    try {
      await apiFetch(`/admin/articles/${article.id}`, { method: "DELETE" });
      await loadArticles();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Artikel</h2>
          <p className="text-sm text-slate-500 mt-0.5">Buat, edit, dan hapus artikel serta video Warta &amp; Media.</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Artikel Baru</span>
        </button>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">{error}</div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari judul atau kategori artikel..."
            className="w-full sm:max-w-xs px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

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
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                    Memuat data artikel...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                    Belum ada artikel.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition">
                    <td className="px-6 py-4 font-medium text-slate-800 max-w-xs truncate">{row.title}</td>
                    <td className="px-6 py-4 text-slate-600 capitalize">{row.category}</td>
                    <td className="px-6 py-4 text-slate-500">{row.published_at || "—"}</td>
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
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => openEdit(row)}
                        className="text-slate-400 hover:text-emerald-700 transition cursor-pointer"
                        title="Edit">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(row)}
                        className="text-slate-400 hover:text-red-600 transition ml-2 cursor-pointer"
                        title="Hapus">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Create/Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900">
                {editing ? "Edit Artikel" : "Tambah Artikel Baru"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Judul Artikel</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase">Kategori</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value as Article["category"] })}
                    className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <option value="konservasi">Konservasi</option>
                    <option value="umkm">UMKM</option>
                    <option value="riset">Riset</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value as Article["status"] })}
                    className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <option value="Terbit">Terbit</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase">Tanggal Terbit</label>
                  <input
                    type="date"
                    value={form.published_at}
                    onChange={(e) => setForm({ ...form, published_at: e.target.value })}
                    className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase">Penulis</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase">Waktu Baca / Durasi</label>
                  <input
                    type="text"
                    value={form.meta_info}
                    onChange={(e) => setForm({ ...form, meta_info: e.target.value })}
                    placeholder="5 min baca"
                    className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">URL Gambar Cover</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Ringkasan (Excerpt)</label>
                <textarea
                  rows={2}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">
                  Isi Artikel (Pisahkan paragraf dengan baris kosong)
                </label>
                <textarea
                  rows={5}
                  value={form.bodyText}
                  onChange={(e) => setForm({ ...form, bodyText: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Kutipan / Quote (Opsional)</label>
                <input
                  type="text"
                  value={form.quote}
                  onChange={(e) => setForm({ ...form, quote: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer">
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold disabled:opacity-60 cursor-pointer">
                  {saving ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
