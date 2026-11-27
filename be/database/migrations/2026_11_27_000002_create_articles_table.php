<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category')->default('konservasi'); // konservasi | umkm | riset | video
            $table->string('category_label')->default('KONSERVASI');
            $table->text('excerpt')->nullable();
            $table->json('body')->nullable();
            $table->text('quote')->nullable();
            $table->text('image')->nullable();
            $table->string('author')->default('Editorial Team');
            $table->string('meta_info')->default('5 min baca');
            $table->boolean('is_video')->default(false);
            $table->string('status')->default('Terbit'); // Terbit | Draft
            $table->date('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
