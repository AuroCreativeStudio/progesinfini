<?php

namespace App\Http\Controllers;

use App\Models\Facilitator;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FacilitatorController extends Controller
{
    public function index()
    {
        $facilitators = Facilitator::with('workshop')->get();
        return view('app.facilitator.index', compact('facilitators'));
    }

    public function create()
    {
        $workshops = Workshop::all();
        return view('app.facilitator.create', compact('workshops'));
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequest($request);

        // Handle image upload
        if ($request->hasFile('image')) {
            $validated['image'] = $this->uploadImage($request->file('image'));
        }

        // Handle video upload
        if ($request->hasFile('video')) {
            $validated['video'] = $this->uploadVideo($request->file('video'));
        }

        // Handle gallery uploads
        if ($request->hasFile('gallery')) {
            $validated['gallery'] = $this->uploadGallery($request->file('gallery'));
        } else {
            $validated['gallery'] = [];
        }

        // Handle language array
        $validated['language'] = $request->input('language', []);

        Facilitator::create($validated);

        return redirect()->route('admin.facilitators.index')
            ->with('success', 'Facilitator created successfully.');
    }

    public function show(Facilitator $facilitator)
    {
        return view('app.facilitator.show', compact('facilitator'));
    }

    public function edit(Facilitator $facilitator)
    {
        $workshops = Workshop::all();
        return view('app.facilitator.edit', compact('facilitator', 'workshops'));
    }

    public function update(Request $request, Facilitator $facilitator)
    {
        $validated = $this->validateRequest($request);

        // Handle image upload
        if ($request->hasFile('image')) {
            if ($facilitator->image) {
                Storage::disk('public')->delete($facilitator->image);
            }
            $validated['image'] = $this->uploadImage($request->file('image'));
        }

        // Handle video upload
        if ($request->hasFile('video')) {
            if ($facilitator->video) {
                Storage::disk('public')->delete($facilitator->video);
            }
            $validated['video'] = $this->uploadVideo($request->file('video'));
        }

        // Handle language array
        $validated['language'] = $request->input('language', []);

        // Handle image removal checkbox
        if ($request->has('remove_image')) {
            if ($facilitator->image) {
                Storage::disk('public')->delete($facilitator->image);
            }
            $validated['image'] = null;
        }

        $facilitator->update($validated);

        return redirect()->route('admin.facilitators.index')
            ->with('success', 'Facilitator updated successfully.');
    }

    public function destroy(Facilitator $facilitator)
    {
        // Delete associated image
        if ($facilitator->image) {
            Storage::disk('public')->delete($facilitator->image);
        }

        // Delete associated video
        if ($facilitator->video) {
            Storage::disk('public')->delete($facilitator->video);
        }

        // Delete gallery images
        if ($facilitator->gallery) {
            $gallery = json_decode($facilitator->gallery, true);
            foreach ($gallery as $image) {
                Storage::disk('public')->delete($image);
            }
        }

        $facilitator->delete();

        return redirect()->route('admin.facilitators.index')
            ->with('success', 'Facilitator deleted successfully.');
    }

    protected function validateRequest(Request $request)
    {
        return $request->validate([
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
            'language.*' => 'string',
            'gallery.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);
    }

    protected function uploadImage($file)
    {
        return $file->store('facilitators', 'public');
    }

    protected function uploadVideo($file)
    {
        return $file->store('facilitators/videos', 'public');
    }

    protected function uploadGallery($files)
    {
        $paths = [];
        foreach ($files as $file) {
            $paths[] = $file->store('facilitators/gallery', 'public');
        }
        return $paths;
    }
}
