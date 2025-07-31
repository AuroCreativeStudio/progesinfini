@extends('layouts.app')

@section('content')
<div class="container-fluid py-4" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px);">
    <!-- Dashboard Header -->
    <div class="mb-4">
        <h2 class="fw-bold">Dashboard</h2>
        <p class="text-muted">Welcome back, <strong>{{ Auth::user()->name }}</strong></p>
    </div>

    <!-- Summary Cards -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Enquiry Form Submission</h6>
                    <h3>{{ $enquiryCount }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Contact Form Submission</h6>
                    <h3>{{ $contactCount }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Total Blogs Uploaded</h6>
                    <h3>{{ $blogCount }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Workshops</h6>
                    <h3>{{ $workshopCount }}</h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Workshop Section -->
   <div class="row mb-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h6 class="mb-0"><strong>Workshop</strong> <small class="text-muted">(No.of Learners Data)</small></h6>
            </div>
            <div class="card-body">
                <canvas id="workshopChart" height="250"></canvas>
            </div>
        </div>
    </div>

    
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Workshop Statistics</h6>
                </div>
                <div class="card-body">
                    @if($workshops->count() > 0)
                        @foreach($workshops as $workshop)
                            <div class="mb-2">
                                <div class="d-flex justify-content-between">
                                    <span>{{ $workshop->title }}</span>
                                    <span>{{ $workshop->no_of_attendance }} attendees</span>
                                </div>
                                <div class="progress">
                                    @php
                                        $percentage = min(100, ($workshop->no_of_attendance / $maxAttendance) * 100);
                                    @endphp
                                    <div class="progress-bar bg-info" role="progressbar" 
                                         style="width: {{ $percentage }}%;" 
                                         aria-valuenow="{{ $percentage }}" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100"></div>
                                </div>
                            </div>
                        @endforeach
                    @else
                        <div class="alert alert-info">No workshops found</div>
                    @endif
                </div>
            </div>
        </div>
    </div>




    <!-- Charts Section -->
    <div class="row mb-4">
        <!-- Enquiry Chart -->
        <div class="col-md-6">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6>Enquiry Submissions</h6>
                        <div class="dropdown">
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="enquiryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <span id="enquiryLabel">Daily</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="enquiryDropdown">
                                <li><a class="dropdown-item enquiry-option" data-range="daily" href="#">Daily</a></li>
                                <li><a class="dropdown-item enquiry-option" data-range="weekly" href="#">Weekly</a></li>
                                <li><a class="dropdown-item enquiry-option" data-range="monthly" href="#">Monthly</a></li>
                            </ul>
                        </div>
                    </div>
                    <canvas id="enquiryChart"></canvas>
                </div>
            </div>
        </div>

        <!-- Contact Chart -->
        <div class="col-md-6">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6>Contact Submissions</h6>
                        <div class="dropdown">
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="contactDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <span id="contactLabel">Daily</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="contactDropdown">
                                <li><a class="dropdown-item contact-option" data-range="daily" href="#">Daily</a></li>
                                <li><a class="dropdown-item contact-option" data-range="weekly" href="#">Weekly</a></li>
                                <li><a class="dropdown-item contact-option" data-range="monthly" href="#">Monthly</a></li>
                            </ul>
                        </div>
                    </div>
                    <canvas id="contactChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>

@php
    $wrappedTitles = $workshops->map(function($w) {
        return wordwrap($w->title, 15, "\n", true);
    })->toArray();
    
@endphp
@php
    $workshopData = $workshops->map(function($w) {
        return [
            'title' => wordwrap($w->title, 15, "\n", true),
            'full_title' => $w->title,
            'type' => $w->type,
            'attendees' => $w->no_of_attendance,
            'duration' => $w->duration_weeks
        ];
    });
@endphp


<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    // Function to update charts
    function updateChart(chart, range, data, color) {
        const labels = data[`${range}Labels`];
        const chartData = data[range];
        
        chart.data.labels = labels;
        chart.data.datasets[0].data = chartData;
        
        // Change chart type
        chart.config.type = (range === 'daily') ? 'bar' : 'line';
        
        // Update styling
        chart.data.datasets[0].backgroundColor = (range === 'daily') ? color : `rgba(${hexToRgb(color)}, 0.2)`;
        chart.data.datasets[0].borderColor = color;
        chart.data.datasets[0].pointBackgroundColor = color;
        
        // Update axis label
        chart.options.scales.x.title.text = 
            range === 'monthly' ? 'Months' : 
            range === 'weekly' ? 'Weeks' : 'Days';
        
        chart.update();
    }

    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `${r}, ${g}, ${b}`;
    }

    // Initialize Workshop Chart
  const workshopCtx = document.getElementById('workshopChart').getContext('2d');

   const wrappedLabels = @json($wrappedTitles);
    const workshopData = @json($workshopData);

    const attendeesData = @json($workshops->pluck('no_of_attendance')->toArray());

    const workshopChart = new Chart(workshopCtx, {
        type: 'line',
        data: {
            labels: wrappedLabels,
            datasets: [{
                label: 'Attendees',
                data: attendeesData,
                backgroundColor: 'rgba(106, 90, 205, 0.2)', // soft purple
                borderColor: 'rgba(106, 90, 205, 1)',
                tension: 0.4, // curve the line like a wave
                fill: true,
                pointBackgroundColor: '#6a5acd',
                pointRadius: 5,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (context) => context[0].label.replace(/\n/g, ' '),
                        label: (context) => `Attendees: ${context.raw}`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Attendees'
                    },
                    ticks: {
                        stepSize: 10
                    }
                },
                x: {
                    ticks: {
                        callback: function(value) {
                            // Show multi-line titles
                            return this.getLabelForValue(value).split('\n');
                        }
                    }
                }
            }
        }
    });

    // Initialize Enquiry Chart (Orange)
    const enquiryCtx = document.getElementById('enquiryChart').getContext('2d');
    const enquiryChart = new Chart(enquiryCtx, {
        type: 'bar',
        data: {
            labels: @json($enquiryData['dailyLabels']),
            datasets: [{
                label: 'Enquiry Submissions',
                data: @json($enquiryData['daily']),
                backgroundColor: '#f04e23',
                borderColor: '#f04e23',
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => items[0].label,
                        label: (context) => `Submissions: ${context.raw}`
                    }
                }
            },
            scales: { 
                y: { 
                    beginAtZero: true,
                    title: { display: true, text: 'Submissions' },
                    ticks: { stepSize: 1, precision: 0 }
                },
                x: {
                    title: { display: true, text: 'Days' }
                }
            }
        }
    });

    // Initialize Contact Chart (Yellow)
    const contactCtx = document.getElementById('contactChart').getContext('2d');
    const contactChart = new Chart(contactCtx, {
        type: 'bar',
        data: {
            labels: @json($contactData['dailyLabels']),
            datasets: [{
                label: 'Contact Submissions',
                data: @json($contactData['daily']),
                backgroundColor: '#f5e663',
                borderColor: '#f5e663',
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => items[0].label,
                        label: (context) => `Submissions: ${context.raw}`
                    }
                }
            },
            scales: { 
                y: { 
                    beginAtZero: true,
                    title: { display: true, text: 'Submissions' },
                    ticks: { stepSize: 1, precision: 0 }
                },
                x: {
                    title: { display: true, text: 'Days' }
                }
            }
        }
    });

    // Add event listeners for dropdown options
    document.querySelectorAll('.enquiry-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const range = this.getAttribute('data-range');
            document.getElementById('enquiryLabel').textContent = this.textContent;
            updateChart(enquiryChart, range, @json($enquiryData), '#f04e23');
        });
    });

    document.querySelectorAll('.contact-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const range = this.getAttribute('data-range');
            document.getElementById('contactLabel').textContent = this.textContent;
            updateChart(contactChart, range, @json($contactData), '#f5e663');
        });
    });
</script>
@endsection