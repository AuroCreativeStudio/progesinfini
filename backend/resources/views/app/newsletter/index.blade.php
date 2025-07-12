@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">

    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Newsletter List</h2>
    </div>

    {{-- Flash success message --}}
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle w-100">
            <thead class="table-dark">
                <tr>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($newsletters as $newsletter)
                    <tr>
                        <td>{{ $newsletter->email }}</td>
                        <td>{{ $newsletter->created_at->format('d-m-Y H:i') }}</td>
                        <td>
                            <form action="{{ route('admin.newsletters.destroy', $newsletter->id) }}" method="POST" onsubmit="return confirm('Are you sure?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    {{-- Pagination links --}}
    <div class="mt-3">
        {{ $newsletters->links() }}
    </div>
</div>
@endsection
