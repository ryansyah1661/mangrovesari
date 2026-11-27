<?php

namespace App\Http\Controllers;

use App\Models\GalleryPhoto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function publicIndex(): JsonResponse
    {
        return response()->json(GalleryPhoto::orderByDesc('id')->get());
    }

    public function index(): JsonResponse
    {
        return response()->json(GalleryPhoto::orderByDesc('id')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'caption' => 'nullable|string|max:500',
            'image_url' => 'nullable|string|max:2048',
            'image' => 'nullable|image|max:5120',
        ]);

        $imageUrl = $data['image_url'] ?? null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery', 'public');
            $imageUrl = asset('storage/' . $path);
        }

        if (! $imageUrl) {
            return response()->json(['message' => 'Pilih file gambar atau masukkan URL gambar.'], 422);
        }

        $photo = GalleryPhoto::create([
            'title' => $data['title'],
            'category' => $data['category'],
            'caption' => $data['caption'] ?? null,
            'image_url' => $imageUrl,
        ]);

        return response()->json($photo, 201);
    }

    public function destroy(GalleryPhoto $galleryPhoto): JsonResponse
    {
        $appUrl = rtrim(config('app.url'), '/');
        if ($galleryPhoto->image_url && str_starts_with($galleryPhoto->image_url, $appUrl . '/storage/')) {
            $relative = str_replace($appUrl . '/storage/', '', $galleryPhoto->image_url);
            Storage::disk('public')->delete($relative);
        }

        $galleryPhoto->delete();

        return response()->json(['message' => 'Foto berhasil dihapus.']);
    }
}
