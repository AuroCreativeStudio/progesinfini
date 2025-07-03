<?php

namespace App\Http\Controllers;

use App\Models\Facilitator;
use Illuminate\Http\Request;

class FacilitatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilitators = Facilitator::all();
        return view('app.facilitators.index', compact('facilitators'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('facilitators.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'description' => 'nullable|string',
            'contact_phone' => 'required|string|max:20',
            'contact_email' => 'required|email|max:255',
            'workshop_id' => 'required|exists:workshops,id',
        ]);

        Facilitator::create($validated);

        return redirect()->route('facilitators.index')->with('success', 'Facilitator created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Facilitator $facilitator)
    {
        return view('facilitators.show', compact('facilitator'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facilitator $facilitator)
    {
        return view('facilitators.edit', compact('facilitator'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Facilitator $facilitator)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'description' => 'nullable|string',
            'contact_phone' => 'required|string|max:20',
            'contact_email' => 'required|email|max:255',
            'workshop_id' => 'required|exists:workshops,id',
        ]);

        $facilitator->update($validated);

        return redirect()->route('facilitators.index')->with('success', 'Facilitator updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Facilitator $facilitator)
    {
        $facilitator->delete();

        return redirect()->route('facilitators.index')->with('success', 'Facilitator deleted successfully.');
    }
}
