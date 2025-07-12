<?php

namespace App\Http\Controllers;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $newsletters = Newsletter::paginate(10); // ✅ this enables pagination
    return view('app.newsletter.index', compact('newsletters'));
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletter,email',
        ]);

        $newsletter = Newsletter::create([
            'email' => $request->email,
        ]);

        return response()->json(['message' => 'Subscribed successfully', 'data' => $newsletter]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
  public function destroy($id)
{
    $newsletter = Newsletter::findOrFail($id);
    $newsletter->delete();

    return redirect()->route('admin.newsletters.index')
                     ->with('success', 'Unsubscribed successfully');
}


}
