@extends('layouts.app')

@section('content')
<div>
    <h2 class="mb-4 text-center">Edit blogs</h2>

    <!-- Add this to display validation errors -->
    @if($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form id="blog-edit-form" action="{{ route('admin.blogs.update', $blog->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        @include('app.blogs.form-inputs')

        <div class="text-center mt-4">
            <button type="submit" class="btn btn-success btn-lg" id="update-button">Update blogs</button>
            <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div>
    </form>
</div>

<!-- Add this script to debug form submission -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('blog-edit-form');
        const updateButton = document.getElementById('update-button');
        
        form.addEventListener('submit', function(e) {
            console.log('Form submitted'); // Check browser console
            updateButton.disabled = true;
            updateButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Updating...';
        });
        
        // Alternative click handler for debugging
        updateButton.addEventListener('click', function(e) {
            console.log('Update button clicked');
            // form.submit(); // Uncomment to force submission
        });
    });
</script>
@endsection