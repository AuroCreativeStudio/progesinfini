@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4 text-center">Edit Workshop</h2>

    <form action="{{ route('admin.workshops.update', $workshop->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        @include('app.workshop.form-inputs')

        <div class="text-center">
            <button type="submit" class="btn btn-success btn-lg">Update Workshop</button>
            <a href="{{ route('admin.workshops.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div>
    </form>
</div>
@endsection
