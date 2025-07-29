@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-left: 250px; margin-top: 56px; padding: 20px; max-width: calc(100% - 250px); overflow-x: hidden;">
    <form method="POST" action="{{ isset($workshop) ? route('admin.workshops.update', $workshop->id) : route('admin.workshops.store') }}" enctype="multipart/form-data" class="needs-validation" novalidate>
        @csrf
        @if(isset($workshop))
            @method('PUT')
        @endif

        <div class="mb-4 d-flex justify-content-between align-items-center">
            <label class="form-label mb-0">Workshop Title</label>
            {{-- <button type="submit" class="btn btn-primary">
                {{ isset($workshop) ? 'Update' : 'Save' }}
            </button> --}}
        </div>

        <div class="mb-4">
            <input type="text" name="workshop_title" value="{{ old('workshop_title', $workshop->workshop_title ?? '') }}" class="form-control" required />
        </div>

        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs mb-3" id="workshopTabs">
            <li class="nav-item">
                <span class="nav-link active" data-tab="basic">Basic Information</span>
            </li>
            <li class="nav-item">
                <span class="nav-link" data-tab="details">Details</span>
            </li>
        </ul>

        <!-- Basic Info Tab -->
        <div id="basic-tab" class="tab-content active">
            <!-- Workshop Settings Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Workshop Settings</h5>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Workshop Type</label>
                                <!-- Changed from select to text input -->
                                <input type="text" name="workshop_type" class="form-control"
                                    value="{{ old('workshop_type', $workshop->workshop_type ?? '') }}" 
                                    placeholder="Online / Offline / Hybrid" required>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Format</label>
                                <!-- Changed from select to text input -->
                                <input type="text" name="format" class="form-control"
                                    value="{{ old('format', $workshop->format ?? '') }}" 
                                    placeholder="Ex: Weekend / Weekday" required>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Price (INR)</label>
                                <div class="input-group">
                                    <span class="input-group-text">₹</span>
                                    <input type="number" step="0.01" name="price" class="form-control"
                                        value="{{ old('price', $workshop->price ?? '') }}" required>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Duration (Weeks)</label>
                                <input type="number" name="duration_weeks" class="form-control"
                                    value="{{ old('duration_weeks', $workshop->duration_weeks ?? '') }}" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label">Workshop Time</label>
                        <input type="text" name="time" class="form-control"
                            value="{{ old('time', $workshop->time ?? '') }}" placeholder="Ex: 10:00 AM - 12:00 PM" required>
                    </div>
                </div>
            </div>
            
            <!-- Featured Image Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Featured Image</h5>
                    <div class="mb-3">
                        <input type="file" name="featured_image" class="form-control" onchange="previewImage(event)">
                        @if(!empty($workshop->featured_image))
                            <img src="{{ asset('storage/' . $workshop->featured_image) }}" class="img-thumbnail mt-2" style="max-width: 150px;" />
                        @endif
                        <div class="mt-2">
                            <img id="image_preview"
                                 src="{{ isset($workshop->featured_image) ? asset('storage/' . $workshop->featured_image) : '' }}"
                                 alt="Preview"
                                 class="img-thumbnail"
                                 style="max-width: 150px; display: {{ isset($workshop->featured_image) ? 'block' : 'none' }};">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Details Tab -->
        <div id="details-tab" class="tab-content">
            <!-- Skills & Audience Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Workshop Content</h5>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Skills Gained</label>
                                <textarea name="skill_gained" class="form-control" rows="5" required>{{ old('skill_gained', $workshop->skill_gained ?? '') }}</textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Target Audience</label>
                                <textarea name="target_audience" class="form-control" rows="5" required>{{ old('target_audience', $workshop->target_audience ?? '') }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- About Workshop Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">About Workshop</h5>
                    <div class="mb-3">
                        <textarea name="about_workshop" class="form-control" rows="5" required>{{ old('about_workshop', $workshop->about_workshop ?? '') }}</textarea>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Description Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Detailed Description</h5>
                    <div class="mb-3">
                        <textarea name="workshop_description" id="workshop_description" class="form-control" rows="8" required>{{ old('workshop_description', $workshop->workshop_description ?? '') }}</textarea>
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

        // Initialize CKEditor for detailed description
        if (document.getElementById('workshop_description')) {
            ClassicEditor
                .create(document.getElementById('workshop_description'))
                .catch(error => {
                    console.error(error);
                });
        }
    });

    function previewImage(event) {
        const input = event.target;
        const preview = document.getElementById('image_preview');
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
        display: none;
        padding: 1.5rem 0;
    }
    .tab-content.active {
        display: block;
    }
    textarea.form-control {
        min-height: 100px;
    }
    #workshop_description {
        min-height: 200px;
    }
    .card {
        margin-bottom: 1.5rem;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 0.25rem;
    }
    .card-body {
        padding: 1.25rem;
    }
    .card-title {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: 500;
    }
    .img-thumbnail {
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
    }
</style>

<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Include CKEditor -->
<script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
@endsection