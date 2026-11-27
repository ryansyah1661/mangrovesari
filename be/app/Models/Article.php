<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'category_label',
        'excerpt',
        'body',
        'quote',
        'image',
        'author',
        'meta_info',
        'is_video',
        'status',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'body' => 'array',
            'is_video' => 'boolean',
            'published_at' => 'date:Y-m-d',
        ];
    }
}
