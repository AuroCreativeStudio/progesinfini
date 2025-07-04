@extends('layouts.app')

@section('content')
<div>
    <h2 class="mb-4 text-center">Add New Facilitator</h2>

   <form action="{{ route('admin.facilitators.store') }}" method="POST" enctype="multipart/form-data">

        @csrf

        @include('app.facilitator.form-inputs')

        {{-- Submit Button --}}
        <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Create </button>
            <a href="{{ route('admin.facilitators.index') }}" class="btn btn-outline-secondary btn-lg ml-2">Cancel</a>
        </div>
    </form>
</div>
@endsection
