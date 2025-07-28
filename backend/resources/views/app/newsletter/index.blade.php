@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">
    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Newsletter List</h2>
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
                    <th>Email</th>
                    <th>Created At</th>
                    <th style="width: 60px;">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($newsletters as $newsletter)
                    <tr>
                        <td>{{ $newsletter->email }}</td>
                        <td>{{ $newsletter->created_at->format('d-m-Y H:i') }}</td>
                        <td class="text-center">
                            <form action="{{ route('admin.newsletters.destroy', $newsletter->id) }}" 
                                  method="POST" 
                                  onsubmit="return confirm('Are you sure you want to delete this newsletter?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="icon-btn delete-btn" title="Delete">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <!-- Custom Pagination with Icons -->
    <div class="mt-3 d-flex justify-content-center">
        @if ($newsletters->hasPages())
            <ul class="pagination pagination-sm m-0">
                {{-- Previous Page Link --}}
                @if ($newsletters->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link"><i class="fas fa-angle-left"></i></span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $newsletters->previousPageUrl() }}" rel="prev">
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </li>
                @endif

                {{-- Pagination Elements --}}
                @foreach ($newsletters->getUrlRange(1, $newsletters->lastPage()) as $page => $url)
                    @if ($page == $newsletters->currentPage())
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
                @if ($newsletters->hasMorePages())
                    <li class="page-item">
                        <a class="page-link" href="{{ $newsletters->nextPageUrl() }}" rel="next">
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
    /* Icon button styling */
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Delete button hover effect */
    .delete-btn:hover {
        color: #dc3545; /* Red color on hover */
        transform: scale(1.1);
    }
    
    /* Pagination styling */
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