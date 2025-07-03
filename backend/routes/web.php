<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkshopController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FacilitatorController;

// Public Web Route (Landing page)
Route::get('/', function () {
    return view('welcome');
});

// Dashboard Route (CMS Home Page)
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Grouped Routes (CMS Admin)
Route::middleware('auth')->group(function () {

    // Profile management routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // CMS Workshop Management Routes (For Blade views)
    Route::resource('/admin/workshops', WorkshopController::class)->names('admin.workshops');
    Route::resource('/admin/facilitators', FacilitatorController::class)->names('admin.facilitators');
});

require __DIR__.'/auth.php';
