<?php

use App\Http\Controllers\BlogControllerApi;
use App\Http\Controllers\ContactControllerApi;
use App\Http\Controllers\EnquireControllerApi;
use App\Http\Controllers\WorkshopControllerApi;
use App\Http\Controllers\FacilitatorControllerApi;
use App\Http\Resources\WorkshopResource;
use App\Models\Workshop;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsletterControllerApi;

// All API routes should return JSON (for React frontend)

// Workshop API Routes (Full CRUD)
Route::apiResource('workshops', WorkshopControllerApi::class);
Route::apiResource('facilitator', FacilitatorControllerApi::class);
Route::apiResource('enquires', EnquireControllerApi::class);
Route::apiResource('contacts', ContactControllerApi::class);
Route::apiResource('blogs', BlogControllerApi::class);
Route::post('/contacts', [ContactController::class, 'store']);

Route::post('/newsletters', [NewsletterControllerApi::class, 'store']);
Route::fallback(function(){
    return response()->json(['message' => 'Not Found.'], 404);
});
