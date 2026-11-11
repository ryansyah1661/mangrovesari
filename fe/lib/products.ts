// Data produk UMKM. Edit di sini saja: nama, harga, deskripsi, kategori.
// PENTING: semua harga, ukuran, dan label "Best Seller" di bawah ini adalah contoh dari desain.
// Cocokkan dengan data asli dari pengelola sebelum web dipublikasikan.

export type CategoryKey = "minuman" | "makanan" | "batik" | "kriya";

export const CATEGORIES: { key: "all" | CategoryKey; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "minuman", label: "Minuman Alami" },
  { key: "makanan", label: "Makanan Olahan" },
  { key: "batik", label: "Batik Mangrove" },
  { key: "kriya", label: "Oleh-oleh & Kriya" },
];

export const CATEGORY_LABEL: Record<CategoryKey, string> = {
  minuman: "Minuman Alami",
  makanan: "Makanan Olahan",
  batik: "Batik Mangrove",
  kriya: "Oleh-oleh & Kriya",
};

export type Product = {
  id: string;
  category: CategoryKey;
  icon: string; // nama ikon Material Symbols
  title: string;
  desc: string;
  chips: string[];
  price: string;
  unit: string;
  ribbon?: { text: string; tone: "light" | "solid" };
};

export const PRODUCTS: Product[] = [
  {
    id: "sirup-bogem",
    category: "minuman",
    icon: "local_drink",
    title: "Sirup Buah Bogem (Pidada)",
    desc: "Minuman segar kaya vitamin C hasil olahan buah mangrove jenis Sonneratia alba, rasa manis asam segar alami tanpa bahan pengawet sintetis.",
    chips: ["Sonneratia alba", "Gula Murni", "350 ml"],
    price: "Rp 25.000",
    unit: "/ botol",
    ribbon: { text: "Best Seller", tone: "light" },
  },
  {
    id: "sirup-rosella",
    category: "minuman",
    icon: "water_drop",
    title: "Sirup Bunga Rosella Pesisir",
    desc: "Olahan bunga rosella merah yang dibudidayakan di pematang tambak mangrove, kaya antioksidan dan menyegarkan tubuh.",
    chips: ["Bunga Rosella Segar", "Antioksidan", "350 ml"],
    price: "Rp 22.000",
    unit: "/ botol",
  },
  {
    id: "batik-mangrove",
    category: "batik",
    icon: "palette",
    title: "Batik Tulis & Cap Mangrove",
    desc: "Kain batik khas pesisir Brebes motif flora-fauna mangrove, diwarnai secara alami menggunakan limbah propagul dan kulit kayu mangrove ramah lingkungan.",
    chips: ["Pewarna Alami", "Katun Primissima", "2 x 1.15 Meter"],
    price: "Rp 185.000",
    unit: "/ lembar",
    ribbon: { text: "Karya Seni", tone: "solid" },
  },
  {
    id: "garam-rebus",
    category: "makanan",
    icon: "grain",
    title: "Garam Rebus Tradisional Brebes",
    desc: "Garam kristal murni hasil proses perebusan air laut dengan tungku kayu tradisional, menghasilkan cita rasa gurih otentik tanpa pemutih kimia.",
    chips: ["Non-Kimia", "Tungku Tradisional", "500 gr"],
    price: "Rp 15.000",
    unit: "/ 500 gr",
  },
  {
    id: "keripik-jeruju",
    category: "makanan",
    icon: "cookie",
    title: "Keripik Daun Jeruju Gurih",
    desc: "Camilan renyah gurih berbahan dasar pucuk daun jeruju (Acanthus ilicifolius) mangrove yang dipadukan rempah tradisional pesisir.",
    chips: ["Daun Jeruju Segar", "Rempah Pesisir", "Renyah & Gurih"],
    price: "Rp 18.000",
    unit: "/ bungkus",
  },
  {
    id: "dodol-bogem",
    category: "makanan",
    icon: "bakery_dining",
    title: "Dodol Buah Bogem Khas Pandansari",
    desc: "Dodol legit kenyal dari sari buah bogem matang dengan santan kelapa murni dan gula aren pesisir.",
    chips: ["Sari Bogem", "Gula Aren Asli", "250 gr"],
    price: "Rp 20.000",
    unit: "/ kotak",
  },
  {
    id: "kopi-mangrove",
    category: "minuman",
    icon: "coffee",
    title: "Kopi Biji Mangrove (Bruguiera)",
    desc: "Racikan kopi herbal unik dari biji mangrove pilihan yang disangrai bersama biji kopi robusta lokal, kaya manfaat dan rendah kafein.",
    chips: ["Biji Bruguiera", "Rendah Kafein", "150 gr"],
    price: "Rp 35.000",
    unit: "/ 150 gr",
  },
  {
    id: "teh-mangrove",
    category: "minuman",
    icon: "emoji_food_beverage",
    title: "Teh Celup Herbal Daun Mangrove",
    desc: "Daun mangrove kering pilihan yang diproses higienis untuk menjaga kebugaran dan metabolisme tubuh.",
    chips: ["Kaya Flavonoid", "Higienis", "20 Kantong"],
    price: "Rp 25.000",
    unit: "/ pack",
  },
  {
    id: "tas-pandan",
    category: "kriya",
    icon: "shopping_bag",
    title: "Tas Anyaman Pandan Laut & Cinderamata",
    desc: "Tas jinjing ramah lingkungan karya perajin lokal, dipercantik aksen kain batik mangrove dan tag kayu khas Pandansari.",
    chips: ["Serat Pandan Laut", "Aksen Batik Mangrove", "Handmade"],
    price: "Rp 65.000",
    unit: "/ pcs",
  },
];
