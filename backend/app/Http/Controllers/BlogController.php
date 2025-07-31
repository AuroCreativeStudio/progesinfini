<?php
namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

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
        // Temporarily increase PHP limits for this request
        ini_set('post_max_size', '20M');
        ini_set('upload_max_filesize', '10M');
        ini_set('memory_limit', '128M');

        $validator = Validator::make($request->all(), $this->validationRules());

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        $validated = $validator->validated();

        try {
            // Handle file uploads
            foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
                if ($request->hasFile($field)) {
                    $validated[$field] = $request->file($field)->store('blogs', 'public');
                }
            }

            Blog::create($validated);

            return redirect()->route('admin.blogs.index')
                ->with('success', 'Blog created successfully.');
                
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->with('error', 'Error creating blog: ' . $e->getMessage());
        }
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
        // Temporarily increase PHP limits for this request
        ini_set('post_max_size', '20M');
        ini_set('upload_max_filesize', '10M');
        ini_set('memory_limit', '128M');

        $validator = Validator::make($request->all(), $this->validationRules($blog));

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        $validated = $validator->validated();

        try {
            // Handle image updates
            foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
                if ($request->hasFile($field)) {
                    // Delete old image if it exists
                    if ($blog->$field) {
                        Storage::disk('public')->delete($blog->$field);
                    }
                    $validated[$field] = $request->file($field)->store('blogs', 'public');
                } elseif (isset($blog->$field)) {
                    // Keep existing image if not updating
                    $validated[$field] = $blog->$field;
                }
            }

            $blog->update($validated);

            return redirect()->route('admin.blogs.index')
                ->with('success', 'Blog updated successfully.');
                
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->with('error', 'Error updating blog: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
{
    try {
        // Delete associated images
        foreach (['author_img', 'feature_img', 'img_1', 'img_2'] as $field) {
            if ($blog->$field) {
                Storage::disk('public')->delete($blog->$field);
            }
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog deleted successfully.');
            
    } catch (\Exception $e) {
        return back()
            ->with('error', 'Error deleting blog: ' . $e->getMessage());
    }
}

    /**
     * Define validation rules for blog
     */
    protected function validationRules(Blog $blog = null)
    {
        $rules = [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:blogs,slug' . ($blog ? ',' . $blog->id : ''),
            'author' => 'required|string|max:255',
            'short_description' => 'nullable|string|max:5000',
            'date' => 'nullable|date',
            'description1' => 'nullable|string|max:20000',
            'description2' => 'nullable|string|max:20000',
            'description3' => 'nullable|string|max:20000',
            'about' => 'nullable|string|max:5000',
            'publish_status' => 'boolean',
            'alt_image' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'meta_description' => 'required|string|max:500',
            'author_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'feature_img' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_1' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'img_2' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ];

        return $rules;
    }
}