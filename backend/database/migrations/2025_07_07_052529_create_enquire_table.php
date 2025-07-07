<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enquires', function (Blueprint $table) {
              
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phoneno')->nullable();
            $table->text('message')->nullable();
            $table->unsignedBigInteger('workshop_id')->nullable(); 
            $table->timestamps();

            $table->foreign('workshop_id')->references('id')->on('workshops')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquires');
    }
};
