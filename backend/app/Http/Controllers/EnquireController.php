<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Enquire;
use Illuminate\Http\Request;

class EnquireController extends Controller
{
    // List all enquiries
    public function index()
    {
       $enquiries = Enquire::with('workshop')->latest()->paginate(10);

        return view('app.enquire.index', compact('enquiries'));
    }

    // Store (if you need for frontend form submission)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phoneno' => 'nullable|string|max:20',
            'message' => 'nullable|string',
            'workshop_id' => 'nullable|exists:workshops,id',
        ]);

        Enquire::create($validated);

        return redirect()->back()->with('success', 'Your enquiry has been submitted successfully.');
    }

    public function destroy(Enquire $enquire)
{
    $enquire->delete();

    return redirect()->route('admin.enquires.index')->with('success', 'Enquiry deleted successfully.');
}

}
