@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">
    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Enquiry List</h2>
    </div>

    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle w-100">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Message</th>
                    <th>Workshop Name</th>
                    <th>Created At</th>
                    <th style="width: 80px;">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($enquiries as $enquire)
                    <tr>
                        <td>{{ $enquire->name }}</td>
                        <td>{{ $enquire->email }}</td>
                        <td>{{ $enquire->phoneno }}</td>
                        <td>{{ \Illuminate\Support\Str::limit($enquire->message, 20, '...') }}</td>
                        <td>{{ $enquire->workshop->workshop_title ?? 'N/A' }}</td>
                        <td>{{ $enquire->created_at->format('d-m-Y H:i') }}</td>
                        <td class="text-center">
                            <div class="d-flex gap-3 justify-content-center">
                                <!-- View Button (Icon only) -->
                                <button class="icon-btn view-btn" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#enquiryModal{{ $enquire->id }}"
                                        title="View Details">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <!-- Delete Button (Icon only) -->
                                <button class="icon-btn delete-btn" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#confirmModal{{ $enquire->id }}"
                                        title="Delete">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- View Modal -->
                    <div class="modal fade" id="enquiryModal{{ $enquire->id }}" tabindex="-1" aria-labelledby="enquiryModalLabel{{ $enquire->id }}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="enquiryModalLabel{{ $enquire->id }}">Enquiry Details</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p><strong>Name:</strong> {{ $enquire->name }}</p>
                                    <p><strong>Email:</strong> {{ $enquire->email }}</p>
                                    <p><strong>Phone No:</strong> {{ $enquire->phoneno }}</p>
                                    <p><strong>Workshop:</strong> {{ $enquire->workshop->workshop_title ?? 'N/A' }}</p>
                                    <p><strong>Message:</strong><br>{{ $enquire->message }}</p>
                                    <p><strong>Submitted At:</strong> {{ $enquire->created_at->format('d-m-Y H:i') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Delete Confirmation Modal -->
                    <div class="modal fade" id="confirmModal{{ $enquire->id }}" tabindex="-1" aria-labelledby="confirmModalLabel{{ $enquire->id }}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                {{-- <div class="modal-header">
                                    <h5 class="modal-title" id="confirmModalLabel{{ $enquire->id }}">Confirm Deletion</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div> --}}
                                <div class="modal-body text-center">
                                    <i class="fas fa-exclamation-triangle text-warning" style="font-size: 3rem;"></i>
                                    <p class="mb-0 mt-3">Are you sure you want to delete enquiry from <strong>{{ $enquire->name }}</strong>?<br>This action cannot be undone.</p>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">
                                        <i class="fas fa-times me-2"></i>Cancel
                                    </button>
                                    <form action="{{ route('admin.enquires.destroy', $enquire->id) }}" method="POST" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">
                                            <i class="fas fa-trash-alt me-2"></i>Delete
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </tbody>
        </table>
    </div>

    <!-- Custom Pagination -->
    <div class="mt-3 d-flex justify-content-center">
        @if (method_exists($enquiries, 'hasPages') && $enquiries->hasPages())
            <ul class="pagination pagination-sm m-0">
                {{-- Previous Page Link --}}
                @if ($enquiries->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link"><i class="fas fa-angle-left"></i></span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $enquiries->previousPageUrl() }}" rel="prev">
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </li>
                @endif

                {{-- Pagination Elements --}}
                @foreach ($enquiries->getUrlRange(1, $enquiries->lastPage()) as $page => $url)
                    @if ($page == $enquiries->currentPage())
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">{{ $page }}</span>
                        </li>
                    @else
                        <li class="page-item">
                            <a class="page-link" href="{{ $url }}">{{ $page }}</a>
                        </li>
                    @endif
                @endforeach

                {{-- Next Page Link --}}
                @if ($enquiries->hasMorePages())
                    <li class="page-item">
                        <a class="page-link" href="{{ $enquiries->nextPageUrl() }}" rel="next">
                            <i class="fas fa-angle-right"></i>
                        </a>
                    </li>
                @else
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link"><i class="fas fa-angle-right"></i></span>
                    </li>
                @endif
            </ul>
        @endif
    </div>
</div>

<style>
    /* Icon buttons */
    .icon-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: 1.1rem;
        color: #6c757d; /* Default gray color */
        transition: all 0.2s ease;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* View button hover */
    .view-btn:hover {
        color: #0d6efd; /* Blue on hover */
        transform: scale(1.1);
    }
    
    /* Delete button hover */
    .delete-btn:hover {
        color: #dc3545; /* Red on hover */
        transform: scale(1.1);
    }
    
    /* Pagination styles */
    .pagination {
        display: flex;
        padding-left: 0;
        list-style: none;
        border-radius: 0.25rem;
        gap: 5px;
    }
    
    .page-item.active .page-link {
        z-index: 1;
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    
    .page-link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.5rem;
        line-height: 1.25;
        color: #0d6efd;
        background-color: #fff;
        border: 1px solid #dee2e6;
        text-decoration: none;
        min-width: 32px;
    }
    
    .page-link:hover {
        z-index: 2;
        color: #0a58ca;
        background-color: #e9ecef;
        border-color: #dee2e6;
    }
    
    .page-item.disabled .page-link {
        color: #6c757d;
        pointer-events: none;
        background-color: #fff;
        border-color: #dee2e6;
    }
</style>

@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
@endpush
@endsection