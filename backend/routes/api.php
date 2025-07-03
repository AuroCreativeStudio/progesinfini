<?php

use App\Http\Controllers\WorkshopControllerApi;
use App\Http\Resources\WorkshopResource;
use App\Models\Workshop;
use Illuminate\Support\Facades\Route;

// All API routes should return JSON (for React frontend)

// Workshop API Routes (Full CRUD)
Route::apiResource('workshops', WorkshopControllerApi::class);


// Fallback route for API 404s
Route::fallback(function(){
    return response()->json(['message' => 'Not Found.'], 404);
});
