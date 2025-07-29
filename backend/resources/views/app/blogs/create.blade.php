    @extends('layouts.app')

    @section('content')
    <div>
        <h2 class="mb-4 text-center">Add New blog</h2>

    <form action="{{ route('admin.blogs.store') }}" method="POST" enctype="multipart/form-data">

            @csrf

            @include('app.blogs.form-inputs')

            {{-- Submit Button --}}
            {{-- <div class="text-center mt-4">
                <button type="submit" class="btn btn-primary btn-lg">Create </button>
                <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
            </div> --}}
        </form>
    </div>
    @endsection
