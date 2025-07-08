<header class="header border-end position-fixed h-100" role="banner" style="z-index: 1030;">
  <h1 class="logo">
    <a href="#"></a>
  </h1>
  <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li>
          <a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'is-current' : '' }}">
            <i class="fas fa-tachometer-alt me-2"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="{{ route('admin.workshops.index') }}" class="{{ request()->routeIs('admin.workshops.*') ? 'is-current' : '' }}">
            <i class="fas fa-chalkboard-teacher me-2"></i> Workshops
          </a>
        </li>
        <li>
          <a href="{{ route('admin.facilitators.index') }}" class="{{ request()->routeIs('admin.facilitators.*') ? 'is-current' : '' }}">
            <i class="fas fa-users me-2"></i> Facilitators
          </a>
        </li>
        <li>
          <a href="{{ route('admin.enquires.index') }}" class="{{ request()->routeIs('admin.enquires.*') ? 'is-current' : '' }}">
            <i class="fas fa-file-alt me-2"></i> Enquires Form
          </a>
        </li>
        <li>
          <a href="{{ route('admin.contacts.index') }}" class="{{ request()->routeIs('admin.contacts.*') ? 'is-current' : '' }}">
            <i class="fas fa-envelope me-2"></i> Contact Form
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
