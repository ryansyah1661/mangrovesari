<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    private function uniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($name) ?: 'produk';
        $slug = $base;
        $counter = 1;

        while (
            Product::where('slug', $slug)
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
        return response()->json(Product::orderByDesc('id')->get());
    }

    public function index(): JsonResponse
    {
        return response()->json(Product::orderByDesc('id')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'price' => 'required|integer|min:0',
            'stock' => 'required|integer|min:0',
            'unit' => 'required|string|max:30',
            'status' => 'nullable|in:Tersedia,Habis',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
        ]);

        $data['slug'] = $this->uniqueSlug($data['name']);
        $data['status'] = $data['status'] ?? ($data['stock'] > 0 ? 'Tersedia' : 'Habis');

        $product = Product::create($data);

        return response()->json($product, 201);
    }

    public function update(Request $request, Product $product): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'price' => 'required|integer|min:0',
            'stock' => 'required|integer|min:0',
            'unit' => 'required|string|max:30',
            'status' => 'nullable|in:Tersedia,Habis',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
        ]);

        if ($data['name'] !== $product->name) {
            $data['slug'] = $this->uniqueSlug($data['name'], $product->id);
        }

        $data['status'] = $data['status'] ?? ($data['stock'] > 0 ? 'Tersedia' : 'Habis');

        $product->update($data);

        return response()->json($product);
    }

    public function destroy(Product $product): JsonResponse
    {
        $product->delete();

        return response()->json(['message' => 'Produk berhasil dihapus.']);
    }
}
