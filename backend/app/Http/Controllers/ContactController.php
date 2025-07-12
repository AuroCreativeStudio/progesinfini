<?php

namespace App\Http\Controllers;

use App\Mail\ContactSubmitted;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    // List all contacts with pagination
    public function index()
    {
        $contacts = Contact::paginate(10); 
        return view('app.contact.index', compact('contacts'));
    }

    // Store a new contact
   public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phoneno' => 'nullable|string|max:20',
        'message' => 'required|string',
    ]);

    $contact = Contact::create($validated); // ✅ Save to DB

    Mail::to('auroanimate8@gmail.com')->send(new ContactSubmitted($contact)); // ✅ Send mail

    return response()->json(['message' => 'Contact form submitted successfully.']);
}
    // Delete a contact
  public function destroy($id)
{
    $contact = Contact::findOrFail($id);
    
    
    $contact->delete(); 

    return redirect()->back()->with('success', 'Contact deleted successfully!');
}

}
