<header class="header border-end position-fixed h-100" role="banner" style="z-index: 1030;">
  <h1 class="logo">
    <a href="#"></a>
  </h1>
  <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li>
          <a href="{{ route('dashboard') }}" 
             class="{{ request()->routeIs('dashboard') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-tachometer-alt me-2"></i> Dashboard
          </a>
        </li>

        <li>
          <a href="{{ route('admin.enquires.index') }}" 
             class="{{ request()->routeIs('admin.enquires.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-file-signature me-2"></i> Enquiry Form
          </a>
        </li>

        <li>
          <a href="{{ route('admin.contacts.index') }}" 
             class="{{ request()->routeIs('admin.contacts.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-address-book me-2"></i> Contact Form
          </a>
        </li>

        <li>
          <a href="{{ route('admin.newsletters.index') }}" 
             class="{{ request()->routeIs('admin.newsletters.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-newspaper me-2"></i> Newsletter
          </a>
        </li>

        <li>
          <a href="{{ route('admin.workshops.index') }}" 
             class="{{ request()->routeIs('admin.workshops.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-chalkboard-teacher me-2"></i> Workshops
          </a>
        </li>

        <li>
          <a href="{{ route('admin.facilitators.index') }}" 
             class="{{ request()->routeIs('admin.facilitators.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-user-friends me-2"></i> Facilitators
          </a>
        </li>

        <li>
          <a href="{{ route('admin.blogs.index') }}" 
             class="{{ request()->routeIs('admin.blogs.*') ? 'is-current' : '' }}" 
             style="text-transform: none;">
            <i class="fas fa-blog me-2"></i> Blogs
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
