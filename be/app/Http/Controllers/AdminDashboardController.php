<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\GalleryPhoto;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class AdminDashboardController extends Controller
{
    public function stats(): JsonResponse
    {
        $recentArticles = Article::latest('updated_at')->take(3)->get()->map(fn ($a) => [
            'icon' => 'edit',
            'text' => "Artikel '{$a->title}' ({$a->status})",
            'time' => $a->updated_at?->diffForHumans() ?? 'Baru saja',
            'color' => 'text-emerald-700',
            'timestamp' => $a->updated_at?->timestamp ?? 0,
        ]);

        $recentProducts = Product::latest('updated_at')->take(2)->get()->map(fn ($p) => [
            'icon' => 'shopping_bag',
            'text' => "Produk '{$p->name}' ({$p->stock} {$p->unit})",
            'time' => $p->updated_at?->diffForHumans() ?? 'Baru saja',
            'color' => 'text-amber-700',
            'timestamp' => $p->updated_at?->timestamp ?? 0,
        ]);

        $recentPhotos = GalleryPhoto::latest('updated_at')->take(2)->get()->map(fn ($g) => [
            'icon' => 'add_photo_alternate',
            'text' => "Foto '{$g->title}' di galeri {$g->category}",
            'time' => $g->updated_at?->diffForHumans() ?? 'Baru saja',
            'color' => 'text-blue-700',
            'timestamp' => $g->updated_at?->timestamp ?? 0,
        ]);

        $activities = collect()
            ->merge($recentArticles)
            ->merge($recentProducts)
            ->merge($recentPhotos)
            ->sortByDesc('timestamp')
            ->take(6)
            ->values()
            ->map(fn ($item) => collect($item)->except('timestamp'));

        return response()->json([
            'counts' => [
                'articles' => Article::count(),
                'published_articles' => Article::where('status', 'Terbit')->count(),
                'products' => Product::count(),
                'available_products' => Product::where('status', 'Tersedia')->count(),
                'gallery' => GalleryPhoto::count(),
                'users' => User::count(),
            ],
            'recent_activities' => $activities,
        ]);
    }
}
