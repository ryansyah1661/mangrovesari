<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    private array $defaults = [
        'organization_name' => 'KMPHP Mangrove Sari',
        'email' => 'sekretariat@mangrovesari.org',
        'whatsapp' => '+62 812-3456-7890',
        'operating_hours' => '06.00 - 17.30 WIB',
        'address' => 'Jl. Sungai Beting RT.01/05, Dukuh Pandansari, Desa Kaliwlingi, Brebes, Jawa Tengah 52219',
    ];

    public function index(): JsonResponse
    {
        $stored = SiteSetting::pluck('value', 'key')->toArray();

        return response()->json(array_merge($this->defaults, $stored));
    }

    public function update(Request $request): JsonResponse
    {
        $data = $request->validate([
            'organization_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'whatsapp' => 'required|string|max:50',
            'operating_hours' => 'required|string|max:100',
            'address' => 'required|string|max:500',
        ]);

        foreach ($data as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        return response()->json([
            'message' => 'Pengaturan berhasil disimpan.',
            'settings' => $data,
        ]);
    }
}
