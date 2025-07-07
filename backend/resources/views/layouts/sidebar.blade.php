<header class="header" role="banner">
  {{-- <h1 class="logo">
    <a href="#">CMS</a>
  </h1> --}}
  <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li><a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'is-current' : '' }}">Dashboard</a></li>
        <li><a href="{{ route('admin.workshops.index') }}" class="{{ request()->routeIs('admin.workshops.*') ? 'is-current' : '' }}">Workshops</a></li>
        <li><a href="{{ route('admin.facilitators.index') }}" class="{{ request()->routeIs('admin.facilitators.*') ? 'is-current' : '' }}">Facilitators</a></li>
        <li><a href="{{ route('admin.enquires.index')}}" class="{{ request()->routeIs('admin.enquires.*') ? 'is-current' : '' }}">Enquires</a></li>
      </ul>
    </nav>
  </div>
</header>
