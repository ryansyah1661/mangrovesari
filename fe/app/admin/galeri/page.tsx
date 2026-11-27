"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  image_url: string;
  caption: string | null;
}

export default function AdminGaleriPage() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Konservasi");
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch<GalleryPhoto[]>("/admin/gallery");
      setPhotos(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  const openModal = () => {
    setTitle("");
    setCategory("Konservasi");
    setCaption("");
    setImageUrl("");
    setImageFile(null);
    setModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      if (caption) formData.append("caption", caption);
      if (imageFile) {
        formData.append("image", imageFile);
      } else if (imageUrl) {
        formData.append("image_url", imageUrl);
      }

      await apiFetch("/admin/gallery", {
        method: "POST",
        body: formData,
      });

      setModalOpen(false);
      await loadPhotos();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (photo: GalleryPhoto) => {
    if (!confirm(`Hapus foto "${photo.title}"?`)) return;
    try {
      await apiFetch(`/admin/gallery/${photo.id}`, { method: "DELETE" });
      await loadPhotos();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Galeri</h2>
          <p className="text-sm text-slate-500 mt-0.5">Upload dan kelola foto dokumentasi konservasi &amp; ekowisata.</p>
        </div>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
          <span>Upload Foto</span>
        </button>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">{error}</div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
        {loading ? (
          <div className="py-12 text-center text-sm text-slate-400">Memuat galeri foto...</div>
        ) : photos.length === 0 ? (
          <div className="py-12 text-center text-sm text-slate-400">Belum ada foto di galeri.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-xl border border-slate-200 overflow-hidden bg-slate-100 flex flex-col">
                <div className="aspect-square relative overflow-hidden bg-slate-200">
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <button
                    onClick={() => handleDelete(photo)}
                    title="Hapus Foto"
                    className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-black/60 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-semibold">
                    {photo.category}
                  </span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs font-bold text-slate-800 truncate">{photo.title}</p>
                  {photo.caption && <p className="text-[11px] text-slate-500 truncate mt-0.5">{photo.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900">Upload Foto Galeri</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Judul Foto</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                  <option value="Konservasi">Konservasi</option>
                  <option value="Ekowisata">Ekowisata</option>
                  <option value="UMKM">UMKM</option>
                  <option value="Kegiatan">Kegiatan</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Upload File Gambar (Maks 5MB)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="mt-1 w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Atau URL Gambar</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase">Keterangan (Opsional)</label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
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
                  className="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold disabled:opacity-60 cursor-pointer">
                  {saving ? "Mengupload..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
