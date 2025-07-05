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
    public function index()
    {
        $facilitators = Facilitator::with('workshop')->get();

        return response()->json([
            'success' => true,
            'data' => $facilitators
        ]);
    }

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
            'video' => 'nullable|file|mimes:mp4,avi,mov,wmv|max:51200',
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

        $data = $request->except(['image', 'gallery', 'video']);

        // Handle image upload
        if ($request->hasFile('image')) {
            $data['image'] = $this->uploadFile($request->file('image'), 'facilitators');
        }

        // Handle video upload
        if ($request->hasFile('video')) {
            $data['video'] = $this->uploadFile($request->file('video'), 'facilitators/videos');
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
            'video' => 'nullable|file|mimes:mp4,avi,mov,wmv|max:51200',
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

        $data = $request->except(['image', 'gallery', 'remove_gallery', 'video']);

        // Handle image upload
        if ($request->hasFile('image')) {
            if ($facilitator->image) {
                Storage::disk('public')->delete($facilitator->image);
            }
            $data['image'] = $this->uploadFile($request->file('image'), 'facilitators');
        }

        // Handle video upload
        if ($request->hasFile('video')) {
            if ($facilitator->video) {
                Storage::disk('public')->delete($facilitator->video);
            }
            $data['video'] = $this->uploadFile($request->file('video'), 'facilitators/videos');
        }

        // Handle gallery updates
        $currentGallery = $facilitator->gallery ?? [];

        if ($request->has('remove_gallery')) {
            foreach ($request->input('remove_gallery') as $image) {
                Storage::disk('public')->delete($image);
                $currentGallery = array_diff($currentGallery, [$image]);
            }
            $currentGallery = array_values($currentGallery);
        }

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

    public function destroy(string $id)
    {
        $facilitator = Facilitator::find($id);

        if (!$facilitator) {
            return response()->json([
                'success' => false,
                'message' => 'Facilitator not found'
            ], 404);
        }

        if ($facilitator->image) {
            Storage::disk('public')->delete($facilitator->image);
        }

        if ($facilitator->video) {
            Storage::disk('public')->delete($facilitator->video);
        }

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

    protected function uploadFile($file, $directory)
    {
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs($directory, $filename, 'public');
        return $path;
    }
}
