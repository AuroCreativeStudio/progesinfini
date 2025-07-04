@extends('layouts.app')

@section('content')
<div>
    <h2 class="mb-4 text-center">Edit facilitator</h2>

    <form action="{{ route('admin.facilitators.update', $facilitator->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        @include('app.facilitator.form-inputs')

        <div class="text-center">
            <button type="submit" class="btn btn-success btn-lg">Update Facilitator</button>
            <a href="{{ route('admin.facilitators.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div>
    </form>
</div>
@endsection
