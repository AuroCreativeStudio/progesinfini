@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4 text-center">Add New Workshop</h2>

    <form action="{{ route('workshops.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        @include('app.workshops.form-inputs')

        {{-- Submit Button --}}
        <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Create Workshop</button>
            <a href="{{ route('workshops.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div>
    </form>
</div>
@endsection
