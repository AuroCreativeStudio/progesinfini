<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Editor</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- CKEditor -->
    <script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
    <style>
        .ck-editor__editable {
            min-height: 200px;
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
        }
        .nav-tabs .nav-link {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container-fluid" style="margin-left: 250px; margin-top: 56px; padding: 20px; max-width: calc(100% - 250px); overflow-x: hidden;">
        <form method="POST" action="{{ isset($blog) ? route('blogs.update', $blog->id) : route('blogs.store') }}" enctype="multipart/form-data">
            @csrf
            @if(isset($blog))
                @method('PUT')
            @endif

            <div class="mb-4 d-flex justify-content-between align-items-center">
                <label class="form-label mb-0">Title</label>
                <button type="submit" class="btn btn-primary">
                    {{ isset($blog) ? 'Update' : 'Save' }}
                </button>
            </div>

            <div class="mb-4">
                <input type="text" name="title" value="{{ old('title', $blog->title ?? '') }}" class="form-control" required />
            </div>

            <!-- Tabs Navigation -->
            <ul class="nav nav-tabs mb-3" id="blogTabs">
                <li class="nav-item">
                    <span class="nav-link active" data-tab="content">Content</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" data-tab="meta">Meta</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" data-tab="publish">Publish</span>
                </li>
            </ul>

            <!-- Content Tab -->
            <div id="content-tab" class="tab-content active">
                <!-- Section 1 -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Section 1</h5>
                        <div class="mb-3">
                            <textarea name="description1" id="editor1" class="form-control" placeholder="Enter your first description here...">{{ old('description1', $blog->description1 ?? '') }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Image 1</label>
                            <input type="file" name="img_1" class="form-control" />
                            @if(!empty($blog->img_1))
                                <img src="{{ asset('storage/' . $blog->img_1) }}" class="img-thumbnail mt-2" style="max-width: 150px;" />
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Section 2 -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Section 2</h5>
                        <div class="mb-3">
                            <textarea name="description2" id="editor2" class="form-control" placeholder="Enter your second description here...">{{ old('description2', $blog->description2 ?? '') }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Image 2</label>
                            <input type="file" name="img_2" class="form-control" />
                            @if(!empty($blog->img_2))
                                <img src="{{ asset('storage/' . $blog->img_2) }}" class="img-thumbnail mt-2" style="max-width: 150px;" />
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Section 3 -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Section 3</h5>
                        <div class="mb-3">
                            <textarea name="description3" id="editor3" class="form-control" placeholder="Enter your third description here...">{{ old('description3', $blog->description3 ?? '') }}</textarea>
                        </div>
                    </div>
                </div>

                <!-- Featured Image -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Featured Image</h5>
                        <div class="mb-3">
                            <input type="file" name="feature_img" class="form-control" />
                            @if(!empty($blog->feature_img))
                                <img src="{{ asset('storage/' . $blog->feature_img) }}" class="img-thumbnail mt-2" style="max-width: 150px;" />
                            @endif
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Alt Text for Image</label>
                            <input type="text" name="alt_image" value="{{ old('alt_image', $blog->alt_image ?? '') }}" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Meta Tab -->
            <div id="meta-tab" class="tab-content">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Meta Information</h5>
                        <div class="mb-3">
                            <label class="form-label">Meta Description</label>
                            <textarea name="meta_description" id="editor4" class="form-control">{{ old('meta_description', $blog->meta_description ?? '') }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Meta Keywords</label>
                            <input type="text" name="meta_keyword" value="{{ old('meta_keyword', $blog->meta_keyword ?? '') }}" class="form-control" />
                            <div class="form-text">Separate keywords with commas</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Publish Tab -->
            <div id="publish-tab" class="tab-content">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Publishing</h5>
                        <div class="mb-3">
                            <label class="form-label">Slug</label>
                            <input type="text" name="slug" value="{{ old('slug', $blog->slug ?? '') }}" class="form-control" />
                        </div>

                        <!-- Hidden field to always send false if unchecked -->
                        <input type="hidden" name="publish_status" value="0">

                        <!-- Actual toggle checkbox -->
                        <div class="form-check form-switch mb-3">
                            <input type="checkbox" name="publish_status" value="1" class="form-check-input" id="publishSwitch"
                                @if(old('publish_status', $blog->publish_status ?? false)) checked @endif>
                            <label class="form-check-label" for="publishSwitch">Publish this blog</label>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Publish Date</label>
                            <input type="date" name="date" value="{{ old('date', isset($blog->date) ? \Carbon\Carbon::parse($blog->date)->format('Y-m-d') : '') }}" class="form-control" />
                        </div>
                        
                        <!-- Author -->
                        <div class="mb-4">
                            <label class="form-label">Author</label>
                            <input type="text" name="author" value="{{ old('author', $blog->author ?? '') }}" class="form-control" required />
                        </div>

                        <!-- Short Description -->
                        <div class="mb-4">
                            <label class="form-label">Short Description</label>
                            <textarea name="short_description" id="editor5" class="form-control">{{ old('short_description', $blog->short_description ?? '') }}</textarea>
                        </div>

                        <!-- About -->
                        <div class="mb-4">
                            <label class="form-label">About</label>
                            <textarea name="about" id="editor6" class="form-control">{{ old('about', $blog->about ?? '') }}</textarea>
                        </div>

                        <!-- Author Image -->
                        <div class="mb-4">
                            <label class="form-label">Author Image</label>
                            <input type="file" name="author_img" class="form-control" />
                            @if(!empty($blog->author_img))
                                <img src="{{ asset('storage/' . $blog->author_img) }}" class="img-thumbnail mt-2" style="max-width: 150px;" />
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Tab switching functionality
            const tabs = document.querySelectorAll('[data-tab]');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs and content
                    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    this.classList.add('active');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                });
            });

            // Initialize all CKEditor instances
            const editors = [
                'editor1', 'editor2', 'editor3', 'editor4', 'editor5', 'editor6'
            ];

            editors.forEach(editorId => {
                if (document.getElementById(editorId)) {
                    ClassicEditor
                        .create(document.getElementById(editorId))
                        .catch(error => {
                            console.error(error);
                        });
                }
            });

            // Slug generation
            const titleInput = document.querySelector('input[name="title"]');
            const slugInput = document.querySelector('input[name="slug"]');

            if (titleInput && slugInput) {
                titleInput.addEventListener('input', function () {
                    let slug = titleInput.value
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .replace(/^-+|-+$/g, '');

                    slugInput.value = slug;
                });
            }
        });
    </script>
</body>
</html>