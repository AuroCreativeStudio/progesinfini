<?php

namespace App\Http\Controllers;
use App\Models\Newsletter;

use Illuminate\Http\Request;

class NewsletterControllerApi extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
{
    // Validate the email
    $validated = $request->validate([
        'email' => 'required|email|unique:newsletters,email',
    ]);

    // Store the subscription
    $newsletter = Newsletter::create([
        'email' => $validated['email'],
    ]);

    // Return JSON response
    return response()->json([
        'message' => 'Subscribed successfully',
        'data' => $newsletter,
    ], 201);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
