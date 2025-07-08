@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">

    {{-- Workshop Details --}}
    <div class="card mb-4">
        <div class="card-header bg-primary text-white">Workshop Details</div>
        <div class="card-body row">
            <div class="form-group col-md-6 mb-3">
                <label for="workshop_title">Workshop Title</label>
                <input type="text" class="form-control" id="workshop_title" name="workshop_title"
                    value="{{ old('workshop_title', $workshop->workshop_title ?? '') }}" placeholder="Enter workshop title" required>
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="featured_image">Featured Image</label>
                <input type="file" class="form-control" id="featured_image" name="featured_image">
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="workshop_type">Workshop Type</label>
                <input type="text" class="form-control" id="workshop_type" name="workshop_type"
                    value="{{ old('workshop_type', $workshop->workshop_type ?? '') }}" placeholder="Online / Offline / Hybrid" required>
            </div>
        </div>
    </div>

    {{-- About Workshop --}}
    <div class="card mb-4">
        <div class="card-header bg-success text-white">About Workshop</div>
        <div class="card-body row">
            <div class="form-group col-md-12 mb-3">
                <label for="about_workshop">About Workshop</label>
                <textarea class="form-control" id="about_workshop" name="about_workshop" rows="3" placeholder="Brief description about the workshop" required>{{ old('about_workshop', $workshop->about_workshop ?? '') }}</textarea>
            </div>

            <div class="form-group col-md-12 mb-3">
                <label for="workshop_description">Detailed Description</label>
                <textarea class="form-control" id="workshop_description" name="workshop_description" rows="5" placeholder="Detailed workshop description" required>{{ old('workshop_description', $workshop->workshop_description ?? '') }}</textarea>
            </div>
        </div>
    </div>

    {{-- Pricing and Schedule --}}
    <div class="card mb-4">
        <div class="card-header bg-warning text-white">Pricing & Schedule</div>
        <div class="card-body row">
            <div class="form-group col-md-6 mb-3">
                <label for="price">Price (INR)</label>
                <input type="number" step="0.01" class="form-control" id="price" name="price"
                    value="{{ old('price', $workshop->price ?? '') }}" placeholder="Enter price" required>
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="format">Format</label>
                <input type="text" class="form-control" id="format" name="format"
                    value="{{ old('format', $workshop->format ?? '') }}" placeholder="Ex: Weekend / Weekday" required>
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="duration_weeks">Duration (Weeks)</label>
                <input type="number" class="form-control" id="duration_weeks" name="duration_weeks"
                    value="{{ old('duration_weeks', $workshop->duration_weeks ?? '') }}" placeholder="Enter duration in weeks" required>
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="time">Workshop Time</label>
                <input type="text" class="form-control" id="time" name="time"
                    value="{{ old('time', $workshop->time ?? '') }}" placeholder="Ex: 10:00 AM - 12:00 PM" required>
            </div>
        </div>
    </div>

    {{-- Additional Information --}}
    <div class="card mb-4">
        <div class="card-header bg-info text-white">Additional Information</div>
        <div class="card-body row">
            <div class="form-group col-md-6 mb-3">
                <label for="skill_gained">Skills Gained</label>
                <textarea class="form-control" id="skill_gained" name="skill_gained" rows="3" placeholder="List of skills gained" required>{{ old('skill_gained', $workshop->skill_gained ?? '') }}</textarea>
            </div>

            <div class="form-group col-md-6 mb-3">
                <label for="target_audience">Target Audience</label>
                <textarea class="form-control" id="target_audience" name="target_audience" rows="3" placeholder="Who is this workshop for?" required>{{ old('target_audience', $workshop->target_audience ?? '') }}</textarea>
            </div>
        </div>
    </div>

</div>
@endsection
