<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;

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
    $data = $request->all();
    Workshop::create($data);
    return redirect()->route('admin.workshops.index')->with('success', 'Workshop created successfully.');
}


    public function edit(Workshop $workshop)
    {
        return view('app.workshop.edit', compact('workshop'));
    }

    public function update(Request $request, Workshop $workshop)
    {
        $data = $request->all();
        $workshop->update($data);
        return redirect()->route('admin.workshops.index')->with('success', 'Workshop updated successfully.');
    }

    public function destroy(Workshop $workshop)
    {
        $workshop->delete();
      return redirect()->route('admin.workshops.index')->with('success', 'Workshop deleted successfully.');

    }
}
