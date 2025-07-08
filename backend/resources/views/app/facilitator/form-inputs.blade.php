@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">

    <form action="{{ isset($facilitator) ? route('admin.facilitators.update', $facilitator->id) : route('admin.facilitators.store') }}" method="POST" enctype="multipart/form-data" class="bg-white p-4 rounded shadow">
        @csrf
        @if(isset($facilitator))
            @method('PUT')
            <div class="mb-3 form-group">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" name="id" value="{{ $facilitator->id }}" readonly>
            </div>
        @endif

        <div class="row">
            <div class="mb-3 col-md-6">
                <label for="name">Full Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="name" name="name"
                       value="{{ old('name', $facilitator->name ?? '') }}" required>
                @error('name') <small class="text-danger">{{ $message }}</small> @enderror
            </div>
            <div class="mb-3 col-md-6">
                <label for="designation">Designation <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="designation" name="designation"
                       value="{{ old('designation', $facilitator->designation ?? '') }}" required>
                @error('designation') <small class="text-danger">{{ $message }}</small> @enderror
            </div>
        </div>

        <div class="mb-3">
            <label for="workshop_id">Select Workshop <span class="text-danger">*</span></label>
            <select class="form-control" id="workshop_id" name="workshop_id" required>
                <option value="">-- Select Workshop --</option>
                @foreach($workshops as $workshop)
                    <option value="{{ $workshop->id }}"
                        {{ old('workshop_id', $facilitator->workshop_id ?? '') == $workshop->id ? 'selected' : '' }}>
                        {{ $workshop->workshop_title }}
                    </option>
                @endforeach
            </select>
            @error('workshop_id') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3">{{ old('description', $facilitator->description ?? '') }}</textarea>
            @error('description') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="about">About</label>
            <textarea class="form-control" id="about" name="about" rows="3">{{ old('about', $facilitator->about ?? '') }}</textarea>
            @error('about') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="short_description">Short Description</label>
            <textarea class="form-control" id="short_description" name="short_description" rows="2">{{ old('short_description', $facilitator->short_description ?? '') }}</textarea>
            @error('short_description') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="image">Image</label>
            @if(isset($facilitator) && $facilitator->image)
                <div class="mb-2">
                    <img src="{{ asset('storage/' . $facilitator->image) }}" alt="Current Image" class="img-thumbnail" style="max-width: 120px;">
                    <div class="mt-2 form-check">
                        <input class="form-check-input" type="checkbox" name="remove_image" id="remove_image">
                        <label class="form-check-label" for="remove_image">Remove current image</label>
                    </div>
                </div>
            @endif
            <input type="file" class="form-control" id="image" name="image">
            @error('image') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="video">Upload Video</label>
            @if(isset($facilitator) && $facilitator->video)
                <div class="mb-2">
                    <video width="240" height="160" controls>
                        <source src="{{ asset('storage/' . $facilitator->video) }}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="mt-2 form-check">
                        <input class="form-check-input" type="checkbox" name="remove_video" id="remove_video">
                        <label class="form-check-label" for="remove_video">Remove current video</label>
                    </div>
                </div>
            @endif
            <input type="file" class="form-control" id="video" name="video" accept="video/*">
            @error('video') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="mb-3">
            <label for="gallery">Gallery Images (Select Multiple)</label>
            <input
                type="file"
                class="form-control"
                id="gallery"
                name="gallery[]"
                multiple
                accept="image/*"
                onchange="previewImages(event)"
              >
              
            @error('gallery.*') <small class="text-danger">{{ $message }}</small> @enderror

            @php
                $galleryImages = [];
                if (isset($facilitator) && $facilitator->gallery) {
                    $galleryImages = is_array($facilitator->gallery) 
                        ? $facilitator->gallery 
                        : json_decode($facilitator->gallery, true) ?? [];
                }
            @endphp

            @if(!empty($galleryImages))
                <div class="flex-wrap gap-2 mt-2 d-flex">
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

        <div class="mb-3">
            <label>Languages</label>
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
            <small class="form-text text-muted">Select one or more languages.</small>
            @error('language') <small class="text-danger">{{ $message }}</small> @enderror
        </div>

        <div class="text-end">
            <button type="submit" class="btn btn-success">Save Facilitator</button>
        </div>
    </form>
</div>

<script>
function previewImages(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('gallery-preview');
    previewContainer.innerHTML = ''; // Clear previous previews if needed

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
    const form = container.closest('form');
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'removed_gallery[]';
    input.value = imagePath;
    form.appendChild(input);
    container.remove();
}

</script>
@endsection
