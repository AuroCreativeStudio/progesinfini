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
    Schema::create('workshops', function (Blueprint $table) {
        $table->id();
        $table->string('workshop_title');
        $table->string('featured_image')->nullable();
        $table->string('workshop_type')->nullable();
        $table->text('about_workshop')->nullable();
        $table->text('workshop_description')->nullable();
        $table->decimal('price', 10, 2)->default(0.00);
        $table->string('format')->nullable();
        $table->integer('duration_weeks')->nullable();
        $table->string('time')->nullable();
        $table->text('skill_gained')->nullable();
        $table->text('target_audience')->nullable();
        
        $table->timestamps();

        
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workshop');
    }
};
