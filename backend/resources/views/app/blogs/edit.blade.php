@extends('layouts.app')

@section('content')
<div>
    <h2 class="mb-4 text-center">Edit Blog</h2>

    <form action="{{ route('admin.blogs.update', $blog->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        @include('app.blogs.form-inputs')

        {{-- <div class="text-center">
            <button type="submit" class="btn btn-success btn-lg">Update</button>
            <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div> --}}
    </form>
</div>
@endsection
