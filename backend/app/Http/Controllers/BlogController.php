<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $blogs = Blog::latest()->get();
    return view('app.blogs.index', compact('blogs'));
}


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('app.blogs.create');
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:blogs,slug',
            'author' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'date' => 'nullable|date',
            'description1' => 'nullable|string',
            'description2' => 'nullable|string',
            'description3' => 'nullable|string',
            'about' => 'nullable|string',
            'publish_status' => 'boolean',
            'alt_image' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'meta_description' => 'required',
            'author_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'feature_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_1' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_2' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Handle file uploads
        foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
            if ($request->hasFile($field)) {
                $validated[$field] = $request->file($field)->store('blogs', 'public');
            }
        }

        $blog = Blog::create($validated);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return view('admin.blogs.show', compact('blog'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return view('app.blogs.edit', compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:blogs,slug,' . $blog->id,
            'author' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'date' => 'nullable|date',
            'description1' => 'nullable|string',
            'description2' => 'nullable|string',
            'description3' => 'nullable|string',
            'about' => 'nullable|string',
            'publish_status' => 'boolean',
            'alt_image' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'meta_description' => 'required',
            'author_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'feature_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_1' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_2' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Handle image updates
        foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
            if ($request->hasFile($field)) {
                // Optional: delete old image
                if ($blog->$field) {
                    Storage::disk('public')->delete($blog->$field);
                }
                $validated[$field] = $request->file($field)->store('blogs', 'public');
            }
        }

        $blog->update($validated);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        // Optional: delete associated images
        foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
            if ($blog->$field) {
                Storage::disk('public')->delete($blog->$field);
            }
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')->with('success', 'Blog deleted successfully.');
    }
}
