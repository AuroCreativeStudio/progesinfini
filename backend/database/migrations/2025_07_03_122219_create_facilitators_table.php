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
            $table->id(); // Primary key
            $table->string('name'); // Facilitator name
            $table->string('designation'); // Facilitator designation
            $table->text('description'); // Facilitator description
            $table->string('contact_phone'); // Facilitator contact phone
            $table->string('contact_email'); // Facilitator contact email
            $table->unsignedBigInteger('workshop_id'); // Foreign key to workshop

            $table->foreign('workshop_id')->references('id')->on('workshops')->onDelete('cascade'); // Foreign key constraint

            $table->timestamps(); // created_at and updated_at
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
