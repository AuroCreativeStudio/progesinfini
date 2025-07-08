@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 24px; overflow-x: hidden;">

    <h2 class="mb-4 text-center">{{ isset($workshop) ? 'Edit' : 'Create' }} Workshop</h2>

    <form action="{{ isset($workshop) ? route('admin.workshops.update', $workshop->id) : route('admin.workshops.store') }}"
          method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
        @csrf
        @if(isset($workshop))
            @method('PUT')
        @endif

        <div class="card shadow-sm mb-5">
            <div class="card-body">
                <div class="row g-4">

                    {{-- Workshop Title --}}
                    <div class="col-md-6">
                        <label for="workshop_title" class="form-label">Workshop Title</label>
                        <input type="text" id="workshop_title" name="workshop_title" class="form-control"
                            value="{{ old('workshop_title', $workshop->workshop_title ?? '') }}" required>
                    </div>

                    {{-- Workshop Type --}}
                    <div class="col-md-6">
                        <label for="workshop_type" class="form-label">Workshop Type</label>
                        <input type="text" id="workshop_type" name="workshop_type" class="form-control"
                            value="{{ old('workshop_type', $workshop->workshop_type ?? '') }}" placeholder="Online / Offline / Hybrid" required>
                    </div>

                    {{-- Format --}}
                    <div class="col-md-6">
                        <label for="format" class="form-label">Format</label>
                        <input type="text" id="format" name="format" class="form-control"
                            value="{{ old('format', $workshop->format ?? '') }}" placeholder="Ex: Weekend / Weekday" required>
                    </div>

                    {{-- Price --}}
                    <div class="col-md-6">
                        <label for="price" class="form-label">Price (INR)</label>
                        <input type="number" step="0.01" id="price" name="price" class="form-control"
                            value="{{ old('price', $workshop->price ?? '') }}" required>
                    </div>

                    {{-- Duration --}}
                    <div class="col-md-6">
                        <label for="duration_weeks" class="form-label">Duration (Weeks)</label>
                        <input type="number" id="duration_weeks" name="duration_weeks" class="form-control"
                            value="{{ old('duration_weeks', $workshop->duration_weeks ?? '') }}" required>
                    </div>

                    {{-- Time --}}
                    <div class="col-md-6">
                        <label for="time" class="form-label">Workshop Time</label>
                        <input type="text" id="time" name="time" class="form-control"
                            value="{{ old('time', $workshop->time ?? '') }}" placeholder="Ex: 10:00 AM - 12:00 PM" required>
                    </div>

                    {{-- Skills Gained --}}
                    <div class="col-md-6">
                        <label for="skill_gained" class="form-label">Skills Gained</label>
                        <textarea class="form-control" id="skill_gained" name="skill_gained" rows="3" required>{{ old('skill_gained', $workshop->skill_gained ?? '') }}</textarea>
                    </div>

                    {{-- Target Audience --}}
                    <div class="col-md-6">
                        <label for="target_audience" class="form-label">Target Audience</label>
                        <textarea class="form-control" id="target_audience" name="target_audience" rows="3" required>{{ old('target_audience', $workshop->target_audience ?? '') }}</textarea>
                    </div>

                    {{-- About Workshop --}}
                    <div class="col-12">
                        <label for="about_workshop" class="form-label">About Workshop</label>
                        <textarea class="form-control" id="about_workshop" name="about_workshop" rows="3" required>{{ old('about_workshop', $workshop->about_workshop ?? '') }}</textarea>
                    </div>

                    {{-- Detailed Description --}}
                    <div class="col-12">
                        <label for="workshop_description" class="form-label">Detailed Description</label>
                        <textarea class="form-control" id="workshop_description" name="workshop_description" rows="5" required>{{ old('workshop_description', $workshop->workshop_description ?? '') }}</textarea>
                    </div>

                    {{-- Featured Image --}}
                    <div class="col-md-6">
                        <label for="featured_image" class="form-label">Featured Image</label>
                        <input type="file" id="featured_image" name="featured_image" class="form-control" onchange="previewImage(event)">
                        <div class="mt-2">
                            <img id="image_preview"
                                 src="{{ isset($workshop->featured_image) ? asset('storage/' . $workshop->featured_image) : '' }}"
                                 alt="Preview"
                                 class="rounded shadow-sm"
                                 style="max-width: 150px; display: {{ isset($workshop->featured_image) ? 'block' : 'none' }};">
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {{-- Submit / Cancel Buttons --}}
        <div class="text-center mb-5">
            <button type="submit" class="btn btn-lg {{ isset($workshop) ? 'btn-success' : 'btn-primary' }}">
                {{ isset($workshop) ? 'Update Workshop' : 'Create Workshop' }}
            </button>
            <a href="{{ route('admin.workshops.index') }}" class="btn btn-outline-secondary btn-lg ml-3">Cancel</a>
        </div>

    </form>
</div>

{{-- Preview Script --}}
<script>
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
@endsection
