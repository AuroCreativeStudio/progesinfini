@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-left: 250px; margin-top: 56px; padding: 20px; max-width: calc(100% - 250px); overflow-x: hidden;">
    <form id="facilitatorForm" action="{{ isset($facilitator) ? route('admin.facilitators.update', $facilitator->id) : route('admin.facilitators.store') }}" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
        @csrf
        @if(isset($facilitator))
            @method('PUT')
        @endif

        <div class="mb-4 d-flex justify-content-between align-items-center">
            <label class="form-label mb-0">Facilitator Name</label>
            {{-- <button type="submit" class="btn btn-primary">
                {{ isset($facilitator) ? 'Update' : 'Save' }}
            </button> --}}
        </div>

        <div class="mb-4">
            <input type="text" name="name" value="{{ old('name', $facilitator->name ?? '') }}" 
                   class="form-control" placeholder="Enter facilitator's full name" required />
        </div>

        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs mb-3" id="facilitatorTabs">
            <li class="nav-item">
                <span class="nav-link active" data-tab="basic">Basic Information</span>
            </li>
            <li class="nav-item">
                <span class="nav-link" data-tab="details">Details</span>
            </li>
        </ul>

        <!-- Basic Info Tab -->
        <div id="basic-tab" class="tab-content active">
            <div class="row">
                <div class="col-md-6">
                    <!-- Designation -->
                    <div class="mb-4">
                        <label for="designation" class="form-label">Designation</label>
                        <input type="text" id="designation" name="designation" class="form-control"
                            value="{{ old('designation', $facilitator->designation ?? '') }}" required>
                    </div>

                    <!-- Workshop Selection -->
                    <div class="mb-4">
                        <label for="workshop_id" class="form-label">Select Workshop</label>
                        <select class="form-control" id="workshop_id" name="workshop_id" required>
                            <option value="">-- Select Workshop --</option>
                            @foreach($workshops as $workshop)
                                <option value="{{ $workshop->id }}"
                                    {{ old('workshop_id', $facilitator->workshop_id ?? '') == $workshop->id ? 'selected' : '' }}>
                                    {{ $workshop->workshop_title }}
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Short Description -->
                    <div class="mb-4">
                        <label for="short_description" class="form-label">Short Description</label>
                        <textarea class="form-control" id="short_description" name="short_description" rows="3">{{ old('short_description', $facilitator->short_description ?? '') }}</textarea>
                    </div>
                </div>

                <div class="col-md-6">
                    <!-- Image -->
                    <div class="mb-4">
                        <label for="image" class="form-label">Profile Image</label>
                        <input type="file" class="form-control" id="image" name="image" onchange="previewImage(event, 'image_preview')">
                        
                        @if(isset($facilitator) && $facilitator->image)
                            <div class="mt-2">
                                <img id="image_preview"
                                    src="{{ asset('storage/' . $facilitator->image) }}"
                                    alt="Current Image"
                                    class="img-thumbnail"
                                    style="max-width: 150px;">
                                <div class="mt-2 form-check">
                                    <input class="form-check-input" type="checkbox" name="remove_image" id="remove_image">
                                    <label class="form-check-label" for="remove_image">Remove current image</label>
                                </div>
                            </div>
                        @else
                            <div class="mt-2">
                                <img id="image_preview"
                                    src=""
                                    alt="Preview"
                                    class="img-thumbnail"
                                    style="max-width: 150px; display: none;">
                            </div>
                        @endif
                    </div>

                    <!-- Video -->
                    <div class="mb-4">
                        <label for="video" class="form-label">Intro Video</label>
                        <input type="file" class="form-control" id="video" name="video" accept="video/*">
                        
                        @if(isset($facilitator) && $facilitator->video)
                            <div class="mt-2">
                                <video width="240" height="160" controls class="img-thumbnail">
                                    <source src="{{ asset('storage/' . $facilitator->video) }}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                <div class="mt-2 form-check">
                                    <input class="form-check-input" type="checkbox" name="remove_video" id="remove_video">
                                    <label class="form-check-label" for="remove_video">Remove current video</label>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>

            <!-- Languages -->
            <div class="mb-4">
                <label class="form-label">Languages</label>
                <div class="dropdown">
                    <button class="form-control text-start dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        @php
                            $selectedLanguages = old('language', isset($facilitator) ? ($facilitator->language ?? []) : []);
                            echo count($selectedLanguages) ? implode(', ', $selectedLanguages) : 'Select Languages';
                        @endphp
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="languageDropdown" style="max-height:200px;overflow:auto;">
                        @foreach(['English', 'Tamil', 'Hindi', 'French', 'German'] as $lang)
                            <li>
                                <label class="dropdown-item">
                                    <input type="checkbox" name="language[]" value="{{ $lang }}"
                                        {{ in_array($lang, $selectedLanguages) ? 'checked' : '' }}>
                                    {{ $lang }}
                                </label>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>

        <!-- Details Tab -->
        <div id="details-tab" class="tab-content">
            <!-- Description -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Description</h5>
                    <div class="mb-3">
                        <textarea class="form-control" id="description" name="description" rows="5">{{ old('description', $facilitator->description ?? '') }}</textarea>
                    </div>
                </div>
            </div>

            <!-- About -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">About</h5>
                    <div class="mb-3">
                        <textarea class="form-control" id="about" name="about" rows="5">{{ old('about', $facilitator->about ?? '') }}</textarea>
                    </div>
                </div>
            </div>

            <!-- Gallery -->
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Gallery Images</h5>
                    <div class="mb-3">
                        <input type="file" class="form-control" id="gallery" name="gallery[]" multiple accept="image/*" onchange="previewImages(event)">
                        
                        @php
                            $galleryImages = [];
                            if (isset($facilitator) && $facilitator->gallery) {
                                $galleryImages = is_array($facilitator->gallery) 
                                    ? $facilitator->gallery 
                                    : json_decode($facilitator->gallery, true) ?? [];
                            }
                        @endphp

                        @if(!empty($galleryImages))
                            <div class="flex-wrap gap-2 mt-2 d-flex" id="existing-gallery">
                                @foreach($galleryImages as $index => $img)
                                    @if(is_string($img))
                                        <div class="position-relative" style="display: inline-block;">
                                            <img src="{{ asset('storage/' . $img) }}" class="img-thumbnail" style="max-width: 80px;">
                                            <input type="hidden" name="existing_gallery[]" value="{{ $img }}">
                                            <button type="button" class="top-0 p-0 btn btn-sm btn-danger position-absolute end-0" 
                                                    style="width: 20px; height: 20px; line-height: 20px;"
                                                    onclick="removeGalleryImage(this, '{{ $img }}')">
                                                ×
                                            </button>
                                        </div>
                                    @endif
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <div id="gallery-preview" class="flex-wrap gap-2 mt-2 d-flex"></div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between mt-4">
            <a href="{{ route('admin.facilitators.index') }}" class="btn btn-outline-secondary">
                <i class="fas fa-arrow-left me-2"></i>Cancel
            </a>
            <button type="submit" class="btn {{ isset($facilitator) ? 'btn-success' : 'btn-primary' }}">
                <i class="fas {{ isset($facilitator) ? 'fa-save' : 'fa-plus' }} me-2"></i>
                {{ isset($facilitator) ? 'Update Facilitator' : 'Create Facilitator' }}
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

        // Update dropdown text
        document.querySelectorAll('input[name="language[]"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateLanguageDropdown);
        });
        
        function updateLanguageDropdown() {
            const selected = Array.from(document.querySelectorAll('input[name="language[]"]:checked'))
                .map(checkbox => checkbox.parentElement.textContent.trim());
                
            const button = document.getElementById('languageDropdown');
            button.textContent = selected.length ? selected.join(', ') : 'Select Languages';
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

    function previewImages(event) {
        const files = event.target.files;
        const previewContainer = document.getElementById('gallery-preview');
        previewContainer.innerHTML = '';

        Array.from(files).forEach((file) => {
            if (!file.type.startsWith('image/')) return;

            const reader = new FileReader();
            reader.onload = function (e) {
                const wrapper = document.createElement('div');
                wrapper.classList.add('position-relative', 'me-2', 'mb-2');
                wrapper.style.display = 'inline-block';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('img-thumbnail');
                img.style.maxWidth = '80px';
                img.style.maxHeight = '80px';

                wrapper.appendChild(img);
                previewContainer.appendChild(wrapper);
            };

            reader.readAsDataURL(file);
        });
    }

    function removeGalleryImage(button, imagePath) {
        const container = button.parentElement;
        const form = document.getElementById('facilitatorForm');
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'removed_gallery[]';
        input.value = imagePath;
        form.appendChild(input);
        container.remove();
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
    .form-control {
        padding: 0.5rem 1rem;
    }
    textarea.form-control {
        min-height: 100px;
    }
</style>

<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
@endsection