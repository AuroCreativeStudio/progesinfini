<?php

namespace App\Http\Controllers;

use App\Models\Facilitator;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FacilitatorControllerApi extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilitators = Facilitator::with('workshop')->get();
        
        return response()->json([
            'success' => true,
            'data' => $facilitators
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'contact_phone' => 'nullable|string|max:20',
            'contact_email' => 'nullable|email|max:255',
            'description' => 'nullable|string',
            'workshop_id' => 'required|exists:workshops,id',
            'about' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'video' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'language' => 'nullable|array',
            'language.*' => 'string|max:50',
            'gallery' => 'nullable|array',
            'gallery.*' => 'image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->except(['image', 'gallery']);

        // Handle image upload
        if ($request->hasFile('image')) {
            $data['image'] = $this->uploadFile($request->file('image'), 'facilitators');
        }

        // Handle gallery uploads
        if ($request->hasFile('gallery')) {
            $data['gallery'] = [];
            foreach ($request->file('gallery') as $file) {
                $data['gallery'][] = $this->uploadFile($file, 'facilitators/gallery');
            }
        }

        $facilitator = Facilitator::create($data);

        return response()->json([
            'success' => true,
            'data' => $facilitator,
            'message' => 'Facilitator created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $facilitator = Facilitator::with('workshop')->find($id);

        if (!$facilitator) {
            return response()->json([
                'success' => false,
                'message' => 'Facilitator not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $facilitator
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $facilitator = Facilitator::find($id);

        if (!$facilitator) {
            return response()->json([
                'success' => false,
                'message' => 'Facilitator not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'designation' => 'sometimes|string|max:255',
            'contact_phone' => 'nullable|string|max:20',
            'contact_email' => 'nullable|email|max:255',
            'description' => 'nullable|string',
            'workshop_id' => 'sometimes|exists:workshops,id',
            'about' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'video' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'language' => 'nullable|array',
            'language.*' => 'string|max:50',
            'gallery' => 'nullable|array',
            'gallery.*' => 'image|mimes:jpg,jpeg,png|max:2048',
            'remove_gallery' => 'nullable|array',
            'remove_gallery.*' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->except(['image', 'gallery', 'remove_gallery']);

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($facilitator->image) {
                Storage::disk('public')->delete($facilitator->image);
            }
            $data['image'] = $this->uploadFile($request->file('image'), 'facilitators');
        }

        // Handle gallery updates
        $currentGallery = $facilitator->gallery ?? [];

        // Remove specified images
        if ($request->has('remove_gallery')) {
            foreach ($request->input('remove_gallery') as $image) {
                Storage::disk('public')->delete($image);
                $currentGallery = array_diff($currentGallery, [$image]);
            }
            $currentGallery = array_values($currentGallery); // Reindex array
        }

        // Add new gallery images
        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $file) {
                $currentGallery[] = $this->uploadFile($file, 'facilitators/gallery');
            }
        }

        $data['gallery'] = $currentGallery;

        $facilitator->update($data);

        return response()->json([
            'success' => true,
            'data' => $facilitator,
            'message' => 'Facilitator updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $facilitator = Facilitator::find($id);

        if (!$facilitator) {
            return response()->json([
                'success' => false,
                'message' => 'Facilitator not found'
            ], 404);
        }

        // Delete associated files
        if ($facilitator->image) {
            Storage::disk('public')->delete($facilitator->image);
        }

        // Delete gallery images
        if ($facilitator->gallery) {
            foreach ($facilitator->gallery as $image) {
                Storage::disk('public')->delete($image);
            }
        }

        $facilitator->delete();

        return response()->json([
            'success' => true,
            'message' => 'Facilitator deleted successfully'
        ]);
    }

    /**
     * Helper method for file uploads
     */
    protected function uploadFile($file, $directory)
    {
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs($directory, $filename, 'public');
        return $path;
    }
}   