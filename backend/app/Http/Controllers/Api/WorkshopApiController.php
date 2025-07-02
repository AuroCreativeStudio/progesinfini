<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;

class WorkshopApiController extends Controller
{
    public function index()
    {
        $workshops = Workshop::all();
        return response()->json($workshops);
    }

    public function store(Request $request)
    {
        $workshop = Workshop::create($request->all());
        return response()->json($workshop, 201);
    }

    public function show($id)
    {
        $workshop = Workshop::findOrFail($id);
        return response()->json($workshop);
    }

    public function update(Request $request, $id)
    {
        $workshop = Workshop::findOrFail($id);
        $workshop->update($request->all());
        return response()->json($workshop);
    }

    public function destroy($id)
    {
        $workshop = Workshop::findOrFail($id);
        $workshop->delete();
        return response()->json(null, 204);
    }
}
