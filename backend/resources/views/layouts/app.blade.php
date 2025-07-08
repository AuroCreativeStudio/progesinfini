<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workshop App</title>

    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <!-- MDB CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.css" rel="stylesheet">

<!-- MDB JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"></script>

<!-- Font Awesome CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">


</head>
<body>
    @include('layouts.navbar')
    <div class="d-flex">
        @include('layouts.sidebar')
        <div class="flex-grow-1 p-4 main-content">
            @yield('content')
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const currentLink = document.querySelector('.is-current');
            if (currentLink) {
                // No animation on initial load, just set the state
                currentLink.classList.add('is-current');
            }

            const sidebarLinks = document.querySelectorAll('.list-hover-slide a');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.href;
                    const currentActive = document.querySelector('.is-current');

                    // If there's an active link and it's not the one we're clicking
                    if (currentActive && currentActive !== this) {
                        currentActive.classList.add('animate-out');
                        currentActive.classList.remove('is-current', 'animate-in');
                    }
                    
                    // Add animating class to the new link
                    this.classList.add('is-current', 'animate-in');

                    setTimeout(() => {
                        window.location.href = href;
                    }, 350); // Match this to your CSS transition time
                });
            });
        });
    </script>
</body>
</html>
