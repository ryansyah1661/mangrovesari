<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    private function defaultCategoryLabel(string $category): string
    {
        return match ($category) {
            'umkm' => 'ARTIKEL UMKM',
            'riset' => 'RISET',
            'video' => 'VIDEO',
            default => 'KONSERVASI',
        };
    }

    private function uniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($title) ?: 'artikel';
        $slug = $base;
        $counter = 1;

        while (
            Article::where('slug', $slug)
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = "{$base}-{$counter}";
            $counter++;
        }

        return $slug;
    }

    public function publicIndex(): JsonResponse
    {
        $articles = Article::where('status', 'Terbit')
            ->orderByDesc('published_at')
            ->orderByDesc('id')
            ->get();

        return response()->json($articles);
    }

    public function publicShow(string $slug): JsonResponse
    {
        $article = Article::where('slug', $slug)->where('status', 'Terbit')->firstOrFail();

        return response()->json($article);
    }

    public function index(): JsonResponse
    {
        $articles = Article::orderByDesc('published_at')
            ->orderByDesc('id')
            ->get();

        return response()->json($articles);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:konservasi,umkm,riset,video',
            'category_label' => 'nullable|string|max:50',
            'excerpt' => 'nullable|string',
            'body' => 'nullable|array',
            'body.*' => 'string',
            'quote' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
            'author' => 'nullable|string|max:120',
            'meta_info' => 'nullable|string|max:60',
            'is_video' => 'boolean',
            'status' => 'required|in:Terbit,Draft',
            'published_at' => 'nullable|date',
        ]);

        $data['slug'] = $this->uniqueSlug($data['title']);
        $data['category_label'] = $data['category_label'] ?: $this->defaultCategoryLabel($data['category']);
        $data['author'] = $data['author'] ?: ($request->user()?->name ?? 'Editorial Team');
        $data['meta_info'] = $data['meta_info'] ?: ($data['category'] === 'video' ? '05:00 min' : '5 min baca');
        $data['is_video'] = $data['is_video'] ?? ($data['category'] === 'video');
        $data['published_at'] = $data['published_at'] ?? now()->toDateString();
        $data['body'] = $data['body'] ?? [];

        $article = Article::create($data);

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:konservasi,umkm,riset,video',
            'category_label' => 'nullable|string|max:50',
            'excerpt' => 'nullable|string',
            'body' => 'nullable|array',
            'body.*' => 'string',
            'quote' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
            'author' => 'nullable|string|max:120',
            'meta_info' => 'nullable|string|max:60',
            'is_video' => 'boolean',
            'status' => 'required|in:Terbit,Draft',
            'published_at' => 'nullable|date',
        ]);

        if ($data['title'] !== $article->title) {
            $data['slug'] = $this->uniqueSlug($data['title'], $article->id);
        }

        $data['category_label'] = $data['category_label'] ?: $this->defaultCategoryLabel($data['category']);
        $data['is_video'] = $data['is_video'] ?? ($data['category'] === 'video');

        $article->update($data);

        return response()->json($article);
    }

    public function destroy(Article $article): JsonResponse
    {
        $article->delete();

        return response()->json(['message' => 'Artikel berhasil dihapus.']);
    }
}
