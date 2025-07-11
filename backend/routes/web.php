<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EnquireController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkshopController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FacilitatorController;
use App\Http\Controllers\NewsletterController;

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
    Route::resource('/admin/enquires',  EnquireController::class)->names('admin.enquires');
    Route::resource('/admin/contacts', ContactController::class)->names('admin.contacts');
    Route::resource('/admin/blogs', BlogController::class)->names('admin.blogs');
    Route::resource('/admin/newsletters', NewsletterController::class)->names('admin.newsletters');

});

require __DIR__.'/auth.php';
