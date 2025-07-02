<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;

class WorkshopController extends Controller
{
   public function index() {
    $workshops = Workshop::paginate(5);
    return view('app.workshops.index', compact('workshops'));
}

public function create() {
    return view('app.workshops.create'); // <-- Should be 'workshops.create'
}




  public function store(Request $request)
{
    $data = $request->all();
    Workshop::create($data);
    return redirect()->route('workshops.index')->with('success', 'Workshop created successfully.');
}


    public function edit(Workshop $workshop)
    {
        return view('app.workshops.edit', compact('workshop'));
    }

    public function update(Request $request, Workshop $workshop)
    {
        $data = $request->all();
        $workshop->update($data);
        return redirect()->route('workshops.index')->with('success', 'Workshop updated successfully.');
    }

    public function destroy(Workshop $workshop)
    {
        $workshop->delete();
      return redirect()->route('workshops.index')->with('success', 'Workshop deleted successfully.');

    }
}
