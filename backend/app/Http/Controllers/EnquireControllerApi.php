<?php

namespace App\Http\Controllers;

use App\Models\Enquire;
use Illuminate\Http\Request;

class EnquireControllerApi extends Controller
{
    // List all enquiries
    public function index()
    {
        return response()->json(Enquire::all());
    }

    // Store a new enquiry
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phoneno' => 'required|string|max:20',
        'workshop_id' => 'nullable|integer|exists:workshops,id',
        'message' => 'required|string',
    ]);

    $enquire = Enquire::create($validated);

    return response()->json([
        'success' => true,
        'message' => 'Enquiry submitted successfully!',
        'data' => $enquire
    ], 201);
}
    public function show($id)
    {
        $enquire = Enquire::find($id);

        if (!$enquire) {
            return response()->json(['message' => 'Enquiry not found.'], 404);
        }

        return response()->json($enquire);
    }

}
