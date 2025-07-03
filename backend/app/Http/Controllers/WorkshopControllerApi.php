<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkshopResource;
use App\Models\Workshop;
use Illuminate\Http\Request;

class WorkshopControllerApi extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return WorkshopResource::collection(Workshop::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'workshop_title' => 'required|string|max:255',
            'workshop_type' => 'required|string|max:255',
            'workshop_description' => 'required|string',
        ]);

        $workshop = Workshop::create($validatedData);

        return new WorkshopResource($workshop);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new WorkshopResource(Workshop::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $workshop = Workshop::findOrFail($id);

        $validatedData = $request->validate([
            'workshop_title' => 'sometimes|required|string|max:255',
            'workshop_type' => 'sometimes|required|string|max:255',
            'workshop_description' => 'sometimes|required|string',
        ]);

        $workshop->update($validatedData);

        return new WorkshopResource($workshop);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $workshop = Workshop::findOrFail($id);
        $workshop->delete();

        return response()->json(null, 204);
    }
}
