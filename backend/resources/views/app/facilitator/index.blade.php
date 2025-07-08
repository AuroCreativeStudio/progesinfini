@extends('layouts.app')

@section('content')
<div class="position-relative" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">
    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Facilitator List</h2>
        <a href="{{ route('admin.facilitators.create') }}" class="btn btn-primary">Add New Facilitator</a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle w-100">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Workshop</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($facilitators as $facilitator)
                    <tr>
                        <td>{{ $facilitator->name }}</td>
                        <td>{{ $facilitator->designation }}</td>
                        <td>{{ $facilitator->workshop->workshop_title ?? 'N/A' }}</td>
                        <td>
                            <a href="{{ route('admin.facilitators.edit', $facilitator->id) }}" class="btn btn-warning btn-sm">Edit</a>
                            <form action="{{ route('admin.facilitators.destroy', $facilitator->id) }}" method="POST" style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Delete this facilitator?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
