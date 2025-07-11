<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactSubmitted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class ContactControllerApi extends Controller
{
    // (Optional) For API, usually not required but can be used to send form structure or defaults
    public function create()
    {
        return response()->json([
            'message' => 'API Contact form is ready.',
            'fields' => ['name', 'email', 'phoneno', 'message']
        ]);
    }

    // Store a new contact (POST API)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phoneno' => 'nullable|string|max:20',
            'message' => 'nullable|string',
        ]);

        $contact = Contact::create($validated);
        Mail::to('auroanimate5@gmail.com')->send(new ContactSubmitted($contact));
        return response()->json([
            'success' => true,
            'message' => 'Contact submitted successfully!',
            'data' => $contact
        ], 201); // 201 = Created
    }
}
