// Ulasan pembeli/wisatawan. Section "Apa Kata Mereka" di halaman UMKM hanya tampil kalau array ini terisi.
// Isi HANYA dengan ulasan asli (dengan izin orangnya). Jangan diisi karangan.
//
// Contoh bentuk data:
// { quote: "Isi ulasan...", name: "Nama Pemberi Ulasan", origin: "Wisatawan asal ...", rating: 5 }

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  rating?: number; // 1-5, opsional
};

export const TESTIMONIALS: Testimonial[] = [];
