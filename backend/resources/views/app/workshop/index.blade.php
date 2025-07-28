@extends('layouts.app')

@section('content')
<div class="position-relative" style="margin-top: 56px; margin-left: 250px; padding: 20px;">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Workshop List</h2>
        <a href="{{ route('admin.workshops.create') }}" class="btn btn-primary">
            <i class="fas fa-plus"></i> Add New Workshop
        </a>
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
                    <th>Title</th>
                    <th>Price</th>
                    <th>Primary Audience</th>
                    <th>Duration</th>
                    <th style="width: 100px;">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($workshops as $workshop)
                    <tr>
                        <td>{{ $workshop->workshop_title }}</td>
                        <td>{{ $workshop->price }}</td>
                        <td>{{ $workshop->target_audience }}</td>
                        <td>{{ $workshop->duration_weeks }} weeks</td>
                        <td>
                            <div class="d-flex gap-2 justify-content-center">
                                <!-- Edit Button (Icon only) -->
                                <a href="{{ route('admin.workshops.edit', $workshop->id) }}" 
                                   class="icon-btn edit-btn" 
                                   title="Edit">
                                    <i class="fas fa-pencil-alt"></i>
                                </a>
                                
                                <!-- Delete Button (Icon only) -->
                                <form action="{{ route('admin.workshops.destroy', $workshop->id) }}" 
                                      method="POST" 
                                      class="d-inline"
                                      onsubmit="return confirm('Delete this workshop?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="icon-btn delete-btn" title="Delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <!-- Custom Pagination with Icons -->
    <div class="mt-3 d-flex justify-content-center">
        @if ($workshops->hasPages())
            <ul class="pagination pagination-sm m-0">
                {{-- Previous Page Link --}}
                @if ($workshops->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link"><i class="fas fa-angle-left"></i></span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $workshops->previousPageUrl() }}" rel="prev">
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </li>
                @endif

                {{-- Pagination Elements --}}
                @foreach ($workshops->getUrlRange(1, $workshops->lastPage()) as $page => $url)
                    @if ($page == $workshops->currentPage())
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
                @if ($workshops->hasMorePages())
                    <li class="page-item">
                        <a class="page-link" href="{{ $workshops->nextPageUrl() }}" rel="next">
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
    
    /* Edit button hover */
    .edit-btn:hover {
        color: #ffc107; /* Yellow color on hover */
        transform: scale(1.1);
    }
    
    /* Delete button hover */
    .delete-btn:hover {
        color: #dc3545; /* Red color on hover */
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