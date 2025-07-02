@extends('layouts.app')

@section('content')
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Workshop List</h2>
        <a href="{{ route('workshops.create') }}" class="btn btn-primary">Add New Workshop</a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($workshops as $workshop)
                <tr>
                    <td>{{ $workshop->workshop_title }}</td>
                    <td>{{ $workshop->price }}</td>
                    <td>
                        <a href="{{ route('workshops.edit', $workshop->id) }}" class="btn btn-warning btn-sm">Edit</a>
                        <form action="{{ route('workshops.destroy', $workshop->id) }}" method="POST" style="display:inline;">
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
