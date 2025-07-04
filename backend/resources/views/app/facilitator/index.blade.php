@extends('layouts.app')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <h2>Workshop List</h2>
 <a href="{{ route('admin.facilitators.create') }}" class="btn btn-primary">Add New Workshop</a>


</div>

@if(session('success'))
    <div class="alert alert-success">{{ session('success') }}</div>
@endif

<table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Description</th>
           
            <th>Workshop</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($facilitators as $facilitator)
            <tr>
                <td>{{ $facilitator->name }}</td>
                <td>{{ $facilitator->designation }}</td>
                <td>{{ $facilitator->description }}</td>
                
                <td>{{ $facilitator->workshop->workshop_title ?? 'N/A' }}</td>
                <td>
                    <a href="{{ route('admin.facilitators.edit', $facilitator->id) }}" class="btn btn-warning btn-sm">Edit</a>
                    <form action="{{ route('admin.facilitators.destroy', $facilitator->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Delete this workshop?')">Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
@endsection
