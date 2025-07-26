@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">
    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Contact List</h2>
    </div>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle w-100">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($contacts as $contact)
                    <tr>
                        <td>{{ $contact->name }}</td>
                        <td>{{ $contact->email }}</td>
                        <td>{{ $contact->phoneno }}</td>
                        <td>{{ $contact->created_at->format('d-m-Y H:i') }}</td>
                        <td class="d-flex gap-2">
                            <!-- View Button -->
                            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#contactModal{{ $contact->id }}">
                                View
                            </button>

                            <!-- Delete Button -->
                            <form action="{{ route('admin.contacts.destroy', $contact->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this contact?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>

                    <!-- Modal -->
                    <div class="modal fade" id="contactModal{{ $contact->id }}" tabindex="-1" aria-labelledby="contactModalLabel{{ $contact->id }}" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="contactModalLabel{{ $contact->id }}">Contact Details</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p><strong>Name:</strong> {{ $contact->name }}</p>
                                    <p><strong>Email:</strong> {{ $contact->email }}</p>
                                    <p><strong>Phone No:</strong> {{ $contact->phoneno }}</p>
                                    <p><strong>Message:</strong> {{ $contact->message }}</p>
                                    <p><strong>Submitted At:</strong> {{ $contact->created_at->format('d-m-Y H:i') }}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </tbody>
        </table>
    </div>

    <!-- Single Compact Pagination -->
    <div class="mt-3 d-flex justify-content-center">
        <style>
            .pagination {
                font-size: 0.75rem;
                flex-wrap: nowrap;
                margin: 0;
            }
            .pagination .page-link {
                padding: 0.15rem 0.35rem;
                min-width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px !important;
            }
            .pagination .page-item:first-child .page-link,
            .pagination .page-item:last-child .page-link {
                min-width: 28px;
            }
            .pagination .page-item.active .page-link {
                font-weight: bold;
            }
        </style>
        {{ $contacts->onEachSide(1)->links() }}
    </div>
</div>
@endsection