@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-left: 250px; margin-top: 56px; padding: 20px; max-width: calc(100% - 250px); overflow-x: hidden;">
    <form method="POST" action="{{ isset($workshop) ? route('admin.workshops.update', $workshop->id) : route('admin.workshops.store') }}" enctype="multipart/form-data" id="workshop-form" class="needs-validation" novalidate>
        @csrf
        @if(isset($workshop))
            @method('PUT')
        @endif

        <div class="mb-4 d-flex justify-content-between align-items-center">
            <label for="workshop_title" class="form-label mb-0">Workshop Title</label>
        </div>

        <div class="mb-4">
            <input type="text" id="workshop_title" name="workshop_title" value="{{ old('workshop_title', $workshop->workshop_title ?? '') }}" class="form-control" required />
        </div>

        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs mb-3" id="workshopTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="basic-tab-btn" data-bs-toggle="tab" data-bs-target="#basic-tab-content" type="button" role="tab">Basic Information</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="details-tab-btn" data-bs-toggle="tab" data-bs-target="#details-tab-content" type="button" role="tab">Details</button>
            </li>
        </ul>

        <!-- Tab Contents -->
        <div class="tab-content" id="workshopTabContent">
            <!-- Basic Info Tab -->
            <div class="tab-pane fade show active" id="basic-tab-content" role="tabpanel" aria-labelledby="basic-tab-btn">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="workshop_type" class="form-label">Workshop Type</label>
                                    <input type="text" id="workshop_type" name="workshop_type" class="form-control"
                                        value="{{ old('workshop_type', $workshop->workshop_type ?? '') }}" 
                                        placeholder="Online / Offline / Hybrid" required>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="format" class="form-label">Format</label>
                                    <input type="text" id="format" name="format" class="form-control"
                                        value="{{ old('format', $workshop->format ?? '') }}" 
                                        placeholder="Ex: Weekend / Weekday" required>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="price" class="form-label">Price (INR)</label>
                                    <div class="input-group">
                                        <span class="input-group-text">₹</span>
                                        <input type="number" step="0.01" id="price" name="price" class="form-control"
                                            value="{{ old('price', $workshop->price ?? '') }}" required>
                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="duration_weeks" class="form-label">Duration (Weeks)</label>
                                    <input type="number" id="duration_weeks" name="duration_weeks" class="form-control"
                                        value="{{ old('duration_weeks', $workshop->duration_weeks ?? '') }}" required>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="time" class="form-label">Workshop Time</label>
                            <input type="text" id="time" name="time" class="form-control"
                                value="{{ old('time', $workshop->time ?? '') }}" placeholder="Ex: 10:00 AM - 12:00 PM" required>
                        </div>

                        <div class="mb-3">
                            <label for="featured_image" class="form-label">Featured Image</label>
                            <input type="file" id="featured_image" name="featured_image" class="form-control" onchange="previewImage(event, 'featured_image_preview')">
                            
                            @if(!empty($workshop->featured_image))
                                <div class="mt-2">
                                    <img id="featured_image_preview"
                                        src="{{ asset('storage/' . $workshop->featured_image) }}"
                                        alt="Current Featured Image"
                                        class="img-thumbnail"
                                        style="max-width: 150px;">
                                    <div class="mt-2 form-check">
                                        <input class="form-check-input" type="checkbox" name="remove_featured_image" id="remove_featured_image">
                                        <label class="form-check-label" for="remove_featured_image">Remove current image</label>
                                    </div>
                                </div>
                            @else
                                <div class="mt-2">
                                    <img id="featured_image_preview"
                                        src=""
                                        alt="Preview"
                                        class="img-thumbnail"
                                        style="max-width: 150px; display: none;">
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <!-- Details Tab -->
            <div class="tab-pane fade" id="details-tab-content" role="tabpanel" aria-labelledby="details-tab-btn">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="skill_gained" class="form-label">Skills Gained</label>
                                    <textarea id="skill_gained" name="skill_gained" class="form-control" rows="5" required>{{ old('skill_gained', $workshop->skill_gained ?? '') }}</textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="target_audience" class="form-label">Target Audience</label>
                                    <textarea id="target_audience" name="target_audience" class="form-control" rows="5" required>{{ old('target_audience', $workshop->target_audience ?? '') }}</textarea>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="about_workshop" class="form-label">About Workshop</label>
                            <textarea id="about_workshop" name="about_workshop" class="form-control" rows="5" required>{{ old('about_workshop', $workshop->about_workshop ?? '') }}</textarea>
                        </div>

                        <div class="mb-3">
                            <label for="workshop_description" class="form-label">Detailed Description</label>
                            <textarea id="workshop_description" name="workshop_description" class="form-control" rows="8" required>{{ old('workshop_description', $workshop->workshop_description ?? '') }}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between mt-4">
            <a href="{{ route('admin.workshops.index') }}" class="btn btn-outline-secondary">
                <i class="fas fa-arrow-left me-2"></i>Cancel
            </a>
            <button type="submit" class="btn {{ isset($workshop) ? 'btn-success' : 'btn-primary' }}">
                <i class="fas {{ isset($workshop) ? 'fa-save' : 'fa-plus' }} me-2"></i>
                {{ isset($workshop) ? 'Update Workshop' : 'Create Workshop' }}
            </button>
        </div>
    </form>
</div>

@push('scripts')
<script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize Bootstrap tabs
        const tabElms = document.querySelectorAll('button[data-bs-toggle="tab"]');
        tabElms.forEach(tabEl => {
            tabEl.addEventListener('click', function (event) {
                event.preventDefault();
                const tab = new bootstrap.Tab(this);
                tab.show();
            });
        });

        // Initialize CKEditor instances
        ['workshop_description', 'about_workshop'].forEach(id => {
            const el = document.getElementById(id);
            if (el) ClassicEditor.create(el).catch(console.error);
        });

        // Form validation
        const form = document.getElementById('workshop-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                if (!form.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        }
    });

    function previewImage(event, previewId) {
        const input = event.target;
        const preview = document.getElementById(previewId);
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
@endpush

@push('styles')
<style>
    /* Tab styling */
    .nav-tabs {
        border-bottom: 1px solid #dee2e6;
    }
    .nav-tabs .nav-link {
        color: #495057;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid transparent;
        padding: 0.75rem 1.25rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    .nav-tabs .nav-link:hover {
        border-bottom-color: #dee2e6;
    }
    .nav-tabs .nav-link.active {
        color: #0d6efd;
        background-color: transparent;
        border-bottom: 2px solid #0d6efd;
    }
    .tab-content {
        padding: 1.5rem 0;
    }
    .card {
        margin-bottom: 1.5rem;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 0.25rem;
    }
    .card-body {
        padding: 1.25rem;
    }
    .img-thumbnail {
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
    }
    .form-control {
        padding: 0.5rem 1rem;
    }
    textarea.form-control {
        min-height: 100px;
    }
    .ck-editor__editable {
        min-height: 200px;
    }
</style>
@endpush

<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<!-- Include Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
@endsection