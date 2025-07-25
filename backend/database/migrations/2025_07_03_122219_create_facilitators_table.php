<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
     public function up()
    {
        Schema::create('facilitators', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('designation');
    $table->text('description')->nullable();
    $table->string('contact_phone');
    $table->string('contact_email');
    $table->foreignId('workshop_id')->constrained()->onDelete('cascade');
    $table->text('about')->nullable();
    $table->string('image')->nullable();
    $table->string('video')->nullable();
    $table->text('short_description')->nullable();
    $table->json('language')->nullable();
    $table->json('gallery')->nullable();
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilitators');
    }
};
