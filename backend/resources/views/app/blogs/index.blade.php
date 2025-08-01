@extends('layouts.app')

@section('content')
<div class="position-relative" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px); padding: 20px; overflow-x: hidden;">
    <div class="mb-3 d-flex justify-content-between align-items-center">
        <h2>Blog List</h2>
        <a href="{{ route('admin.blogs.create') }}" class="btn btn-primary">
            <i class="fas fa-plus me-1"></i> Add New Blog
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
                    <th>Author</th>
                    <th>Date</th>
                    <th>Publish</th>
                    <th style="width: 90px;">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($blogs as $blog)
                    <tr>
                        <td>{{ $blog->title }}</td>
                        <td>{{ $blog->author }}</td>
                        <td>{{ \Carbon\Carbon::parse($blog->date)->format('M d, Y') }}</td>
                        <td>
                            @if($blog->publish_status)
                                <span class="badge bg-success">Published</span>
                            @else
                                <span class="badge bg-secondary">Draft</span>
                            @endif
                        </td>
                        <td>
                            <div class="d-flex gap-3 justify-content-center">
                                <!-- Edit Button -->
                                <a href="{{ route('admin.blogs.edit', $blog->id) }}" 
                                   class="action-btn edit-btn" 
                                   title="Edit">
                                    <i class="fas fa-pencil-alt"></i>
                                </a>
                                
                                <!-- Delete Button -->
                                <button class="action-btn delete-btn" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#confirmModal{{ $blog->id }}"
                                        title="Delete">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- Delete Confirmation Modal -->
                    <div class="modal fade" id="confirmModal{{ $blog->id }}" tabindex="-1" aria-labelledby="confirmModalLabel{{ $blog->id }}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                {{-- <div class="modal-header">
                                    <h5 class="modal-title" id="confirmModalLabel{{ $blog->id }}">Confirm Deletion</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div> --}}
                                <div class="modal-body text-center">
                                    <i class="fas fa-exclamation-triangle text-warning" style="font-size: 3rem;"></i>
                                    <p class="mb-0 mt-3">Are you sure you want to delete <strong>"{{ $blog->title }}"</strong>?<br>This action cannot be undone.</p>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">
                                        <i class="fas fa-times me-2"></i>Cancel
                                    </button>
                                    <form action="{{ route('admin.blogs.destroy', $blog->id) }}" method="POST" style="display: inline;">
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
        @if (method_exists($blogs, 'hasPages') && $blogs->hasPages())
            <ul class="pagination pagination-sm m-0">
                {{-- Previous Page Link --}}
                @if ($blogs->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link"><i class="fas fa-angle-left"></i></span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $blogs->previousPageUrl() }}" rel="prev">
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </li>
                @endif

                {{-- Pagination Elements --}}
                @if(method_exists($blogs, 'getUrlRange'))
                    @foreach ($blogs->getUrlRange(1, $blogs->lastPage()) as $page => $url)
                        @if ($page == $blogs->currentPage())
                            <li class="page-item active" aria-current="page">
                                <span class="page-link">{{ $page }}</span>
                            </li>
                        @else
                            <li class="page-item">
                                <a class="page-link" href="{{ $url }}">{{ $page }}</a>
                            </li>
                        @endif
                    @endforeach
                @endif

                {{-- Next Page Link --}}
                @if ($blogs->hasMorePages())
                    <li class="page-item">
                        <a class="page-link" href="{{ $blogs->nextPageUrl() }}" rel="next">
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
    /* Action buttons */
    .action-btn {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: 1.1rem;
        color: #6c757d;
        transition: all 0.2s ease;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Edit button */
    .edit-btn:hover {
        color: #ffc107; /* Yellow */
        transform: scale(1.1);
    }
    
    /* Delete button */
    .delete-btn:hover {
        color: #dc3545; /* Red */
        transform: scale(1.1);
    }
    
    /* Pagination */
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