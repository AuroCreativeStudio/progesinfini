<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class WorkshopController extends Controller
{
   public function index() {
    $workshops = Workshop::paginate(5);
    return view('app.workshop.index', compact('workshops'));
}

public function create() {
    return view('app.workshop.create');
}




public function store(Request $request)
{
 $validated = $request->validate([
    'workshop_title' => 'required|string|max:255',
    'workshop_type' => 'required|string|max:255',
    'workshop_description' => 'required|string',
    'featured_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
    
    'about_workshop' => 'nullable|string',
    'price' => 'nullable|string',
    'format' => 'nullable|string',
    'duration_weeks' => 'nullable|integer',
    'time' => 'nullable|string',
    'skill_gained' => 'nullable|string',
    'target_audience' => 'nullable|string',
    'no_of_attendance' => 'nullable|integer',
]);


    // Handle image upload
    if ($request->hasFile('featured_image')) {
        $path = $request->file('featured_image')->store('workshops', 'public'); // stored in storage/app/public/workshops
        $validated['featured_image'] = $path; // save only the relative path to DB
    }

    Workshop::create($validated);

    return redirect()->route('admin.workshops.index')
        ->with('success', 'Workshop created successfully.');
}


    public function edit(Workshop $workshop)
    {
        return view('app.workshop.edit', compact('workshop'));
    }

public function update(Request $request, Workshop $workshop)
{
$validated = $request->validate([
    'workshop_title' => 'required|string|max:255',
    'workshop_type' => 'required|string|max:255',
    'workshop_description' => 'required|string',
    'featured_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
    
    'about_workshop' => 'nullable|string',
    'price' => 'nullable|string',
    'format' => 'nullable|string',
    'duration_weeks' => 'nullable|integer',
    'time' => 'nullable|string',
    'skill_gained' => 'nullable|string',
    'target_audience' => 'nullable|string',
    'no_of_attendance' => 'nullable|integer',
]);

    // Handle new image upload
    if ($request->hasFile('featured_image')) {
        $path = $request->file('featured_image')->store('workshops', 'public');
        $validated['featured_image'] = $path;
    }

    $workshop->update($validated);

    return redirect()->route('admin.workshops.index')
        ->with('success', 'Workshop updated successfully.');
}


    public function destroy(Workshop $workshop)
    {
        $workshop->delete();
      return redirect()->route('admin.workshops.index')->with('success', 'Workshop deleted successfully.');

    }
}
