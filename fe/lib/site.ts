// Data situs yang dipakai bersama (header, footer, tombol WhatsApp).
// TODO: ganti nomor, email, dan link sosmed dengan data asli sebelum rilis.

export const WA_NUMBER = "6281234567890";

export function waLink(text?: string) {
  return `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export const SITE = {
  name: "MANGROVE SARI",
  tagline: "Ekowisata & Konservasi Pesisir Brebes",
  phone: "+62 812-3456-7890",
  email: "sekretariat@mangrovesari.org",
  address: "Jl. Sungai Beting RT.01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah 52219",
  hours: "Setiap Hari: 06.00 - 17.30 WIB",
  facebook: "https://www.facebook.com/Dewimangrovesari",
  instagram: "https://www.instagram.com/dewimangrovesari",
  youtube: "#",
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Majalah", href: "/majalah" },
  {
    label: "Profile",
    children: [
      { label: "Organisasi", href: "/organisasi" },
      { label: "Sejarah", href: "/sejarah" },
    ],
  },
  { label: "Artikel", href: "/artikel" },
  { label: "Ekowisata", href: "/ekowisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Video", href: "/video" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];
