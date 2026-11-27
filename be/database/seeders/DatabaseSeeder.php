<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\GalleryPhoto;
use App\Models\Product;
use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@mangrovesari.org'],
            [
                'name' => 'Admin Utama',
                'role' => 'Super Admin',
                'password' => 'password123',
            ]
        );

        User::updateOrCreate(
            ['email' => 'rusjan@mangrovesari.org'],
            [
                'name' => 'Rusjan',
                'role' => 'Pengelola',
                'password' => 'password123',
            ]
        );

        User::updateOrCreate(
            ['email' => 'sugiarto@mangrovesari.org'],
            [
                'name' => 'Sugiarto',
                'role' => 'Editor',
                'password' => 'password123',
            ]
        );

        $articles = [
            [
                'title' => 'Revitalisasi 440 Hektar Hutan Mangrove: Sinergi Karbon Biru dan Nelayan Kaliwlingi',
                'slug' => 'revitalisasi-440-hektar-hutan-mangrove',
                'category' => 'konservasi',
                'category_label' => 'SOROTAN UTAMA',
                'excerpt' => 'Melalui kolaborasi lebih dari 20 tahun, warga pesisir Dukuh Pandansari tidak hanya membentengi daratan dari abrasi tetapi juga menciptakan kemandirian ekonomi.',
                'body' => [
                    'Kawasan pesisir Dukuh Pandansari, Desa Kaliwlingi, Brebes, pernah menghadapi tekanan abrasi yang menggerus ratusan hektar tambak produktif warga. Sejak 2005, inisiatif swadaya masyarakat yang tergabung dalam KMPHP Mangrove Sari mulai menanam bibit Rhizophora dan Avicennia secara bertahap di sepanjang garis pantai.',
                    'Kini, lebih dari 4,4 juta batang mangrove telah tumbuh membentuk benteng hijau seluas 440 hektar. Pemulihan ini bukan hanya mengembalikan daratan yang sempat terendam pasang surut, tetapi juga menghidupkan kembali ekosistem muara sebagai tempat pemijahan alami ikan, udang, dan kepiting bakau.',
                ],
                'quote' => 'Ketika sabuk hijau bakau kembali rapat, ombak mereda, kepiting dan udang kembali berbiak, dan warga memiliki harapan baru di tanah kelahirannya.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I',
                'author' => 'Editorial Team',
                'meta_info' => '6 min baca',
                'is_video' => false,
                'status' => 'Terbit',
                'published_at' => '2026-02-20',
            ],
            [
                'title' => 'Sentra Produksi Sirup Bogem: Dari Buah Bakau Liar Menjadi Olahan Khas',
                'slug' => 'sentra-produksi-sirup-bogem',
                'category' => 'umkm',
                'category_label' => 'ARTIKEL UMKM',
                'excerpt' => 'Kelompok Wanita Tani Sari Mulya membuktikan bahwa konservasi dapat berjalan seiring dengan peningkatan pendapatan keluarga.',
                'body' => [
                    'Buah pidada atau bogem (Sonneratia caseolaris) tumbuh melimpah di kawasan hutan mangrove Pandansari. Melalui pendampingan pengolahan pangan, Kelompok Wanita Tani mengolah buah matang yang dipanen secara selektif menjadi sirup alami tinggi vitamin C.',
                    'Proses produksi dilakukan secara higienis tanpa bahan pengawet sintetis, mulai dari penyortiran buah, ekstraksi sari, hingga pemasakan bersama gula tebu.',
                ],
                'quote' => 'Buah bogem yang dulu hanya jatuh di lumpur kini diolah menjadi sirup segar khas pesisir yang menopang ekonomi ibu-ibu Pandansari.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJQAWDPu3Rgs2G8IqQJSMSGBHeAzWmm6-NDKa6VGW3MVA-O2pvWH9Dy_PqMoY_7k8DPFUnjYIaCgGd5u67j5XhmvyKpet2ryMneVXdQWISRmTbQ56ctxlNWe33BZVnb1aoX96rcLOIPXarg81yQBgxVPQ34BWPM_9E9cs_krkRloGVfQb9eH6o0drVQqdDtZJQ-1Fz9qBruc0NHwNcrvvQl07RxdPyoY4JCOxSMPY',
                'author' => 'Editorial Team',
                'meta_info' => '4 min baca',
                'is_video' => false,
                'status' => 'Terbit',
                'published_at' => '2026-02-15',
            ],
            [
                'title' => 'Pengukuran Cadangan Karbon Biru di Tanah Lumpur Pandansari',
                'slug' => 'pengukuran-cadangan-karbon-biru',
                'category' => 'riset',
                'category_label' => 'RISET',
                'excerpt' => 'Hasil uji laboratorium menunjukkan ekosistem mangrove Pandansari memiliki daya serap karbon tinggi yang sangat signifikan.',
                'body' => [
                    'Kolaborasi penelitian bersama akademisi dari berbagai perguruan tinggi mengukur simpanan karbon pada biomassa pohon dan sedimen lumpur di kawasan konservasi Mangrove Sari.',
                ],
                'quote' => null,
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-fa4TQxdF9wDEd-tiPyg3B0xjrY-pXuNN4V-WS41GrPXfiXE9M-Q2otTvgUSwmcUEROuB0Ggj3qaysiMAqP8x5TeHQ5F9S39bPBgEZlvJlZOBkwBU8a-pBvjSl8bZrnvmd1S3wtdu09PJkh0JoGRfuP_2swdOnrFvEo63zxO14OUEQr-DQVOEgH4B94bknzTUAUY8oWIYUxZ7b3LdTuVzXEv-jLu9g9NyEYAbFUg',
                'author' => 'Tim Riset',
                'meta_info' => '7 min baca',
                'is_video' => false,
                'status' => 'Draft',
                'published_at' => '2026-02-10',
            ],
        ];

        foreach ($articles as $item) {
            Article::updateOrCreate(['slug' => $item['slug']], $item);
        }

        $products = [
            ['name' => 'Sirup Buah Bogem', 'slug' => 'sirup-buah-bogem', 'category' => 'Minuman', 'price' => 35000, 'stock' => 120, 'unit' => 'botol', 'status' => 'Tersedia', 'description' => 'Sirup alami dari buah pidada/bogem segar tanpa pengawet.'],
            ['name' => 'Keripik Daun Mangrove', 'slug' => 'keripik-daun-mangrove', 'category' => 'Makanan Ringan', 'price' => 25000, 'stock' => 85, 'unit' => 'bungkus', 'status' => 'Tersedia', 'description' => 'Keripik renyah olahan daun mangrove pilihan khas pesisir.'],
            ['name' => 'Dodol Bogem', 'slug' => 'dodol-bogem', 'category' => 'Makanan Ringan', 'price' => 20000, 'stock' => 0, 'unit' => 'kotak', 'status' => 'Habis', 'description' => 'Kudapan manis kenyal dari sari buah bogem asli Pandansari.'],
            ['name' => 'Batik Pewarna Mangrove', 'slug' => 'batik-pewarna-mangrove', 'category' => 'Kriya', 'price' => 150000, 'stock' => 12, 'unit' => 'lembar', 'status' => 'Tersedia', 'description' => 'Kain batik motif pesisir dengan pewarna alami ekstrak propagul.'],
            ['name' => 'Garam Rebus Tradisional', 'slug' => 'garam-rebus-tradisional', 'category' => 'Bahan Pangan', 'price' => 15000, 'stock' => 200, 'unit' => 'bungkus', 'status' => 'Tersedia', 'description' => 'Garam konsumsi bersih hasil olahan tradisional warga Kaliwlingi.'],
            ['name' => 'Madu Mangrove', 'slug' => 'madu-mangrove', 'category' => 'Minuman', 'price' => 85000, 'stock' => 0, 'unit' => 'botol', 'status' => 'Habis', 'description' => 'Madu hutan alami dari nektar bunga mangrove pesisir.'],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(['slug' => $product['slug']], $product);
        }

        if (GalleryPhoto::count() === 0) {
            GalleryPhoto::insert([
                [
                    'title' => 'Sabuk Hijau Pesisir Pandansari',
                    'category' => 'Konservasi',
                    'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdEbPhvsbUDkbZ68DcHRDDRpVWMmWvKUdFSmGYTBDEv-nax1R5z3Rieyme9ZhcM6Q6NViYlfOFnTcrVI6hRKi6Q_9Ps71n2S0XGK_3vaqM4x0gDHTfM7h6qtwEmKktwRDIugC6wjt3-wHjy_hs2kqQOZ-pXyYIQ5H6hTSBQo2zT6dXjtIPqCbYsfNxzqnufi1VjYOE9zlbWwCujRyboqeJo_iK37G2ea77KHcxt3I',
                    'caption' => 'Hamparan 440 hektar mangrove yang menjaga garis pantai Brebes.',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Produksi Sirup & Olahan UMKM',
                    'category' => 'UMKM',
                    'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJQAWDPu3Rgs2G8IqQJSMSGBHeAzWmm6-NDKa6VGW3MVA-O2pvWH9Dy_PqMoY_7k8DPFUnjYIaCgGd5u67j5XhmvyKpet2ryMneVXdQWISRmTbQ56ctxlNWe33BZVnb1aoX96rcLOIPXarg81yQBgxVPQ34BWPM_9E9cs_krkRloGVfQb9eH6o0drVQqdDtZJQ-1Fz9qBruc0NHwNcrvvQl07RxdPyoY4JCOxSMPY',
                    'caption' => 'Kelompok Wanita Tani Sari Mulya mengolah hasil mangrove.',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Susur Perahu Ekowisata',
                    'category' => 'Ekowisata',
                    'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP-ThHIXoIPV_Yi91CjjG2OPvtFQyQ_De6aT-FKeiBoQ2uia11FCVljJiwhTWe127uzif58mPVpobdkIJj0jLXYeP-FF8z5hd9sHP0SdQOxeWmIowAL6nKeG9WbPFmCKKS2ogDJENE41956yjCwRhvmZXw9WgzEkuIItY4ywxeNqacFRtWY3d1lK5f6OmgXrhi8Afz46CcUMLYkfpzvmk1rJwoN-i6T3wrTBwhfwE',
                    'caption' => 'Wisata edukasi menyusuri muara Sungai Beting.',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }

        $settings = [
            'organization_name' => 'KMPHP Mangrove Sari',
            'email' => 'sekretariat@mangrovesari.org',
            'whatsapp' => '+62 812-3456-7890',
            'operating_hours' => '06.00 - 17.30 WIB',
            'address' => 'Jl. Sungai Beting RT.01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah 52219',
        ];

        foreach ($settings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
