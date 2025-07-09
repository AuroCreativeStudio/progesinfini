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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id(); // Id
            $table->string('title'); 
            $table->string('slug')->unique(); 
            $table->string('author'); 
            $table->text('short_description')->nullable(); 
            $table->date('date')->nullable(); 
            $table->string('author_img')->nullable(); 

            $table->longText('description1')->nullable(); 
            $table->longText('description2')->nullable(); 
            $table->longText('description3')->nullable(); 

            $table->text('about')->nullable(); 
            $table->boolean('publish_status')->default(false); 

            $table->string('feature_img')->nullable(); 
            $table->string('img_1')->nullable(); 
            $table->string('img_2')->nullable(); 

            $table->timestamps(); 
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
