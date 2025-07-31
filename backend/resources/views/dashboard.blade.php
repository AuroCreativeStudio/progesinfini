@extends('layouts.app')

@section('content')
<div class="container-fluid py-4" style="margin-top: 56px; margin-left: 250px; width: calc(100% - 250px);">
    <!-- Dashboard Header -->
    <div class="mb-4">
        <h2 class="fw-bold">Dashboard</h2>
        <p class="text-muted"> Welcome back, <strong>{{ Auth::user()->name }}</p>
        {{-- <div class="alert alert-info w-100" style="max-width: 500px;">
            Welcome back, <strong>{{ Auth::user()->name }}</strong>!
        </div> --}}
    </div>

    <!-- Summary Cards -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Enquiry Form Submission</h6>
                    <h3>{{ $enquiryCount }}</h3>
                    {{-- <p class="text-success mb-0">+55% than last week</p> --}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Contact Form Submission</h6>
                    <h3>{{ $contactCount }}</h3>
                    {{-- <p class="text-success mb-0">+3% than last month</p> --}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Total Blogs Uploaded</h6>
                    <h3>{{ $blogCount }}</h3>
                    {{-- <p class="text-danger mb-0">-2% than yesterday</p> --}}
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6 class="text-muted">Workshops</h6>
                    <h3>{{ $workshopCount }}</h3>
                    {{-- <p class="text-success mb-0">+5% than yesterday</p> --}}
                </div>
            </div>
        </div>
    </div>

<!-- Place that graph design below here-->

       <div class="row mb-4">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">Workshop <small class="text-muted">Graph title sub-title</small></h6>
                    {{-- <input type="text" class="form-control form-control-sm w-auto" value="April 10, 2019 - May 9, 2019"> --}}
                </div>
                <div class="card-body">
                    <canvas id="areaChart" height="100"></canvas>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Workshop</h6>
                </div>
                <div class="card-body">
                    @foreach(['Workshop' => 80, 'Workshop Type' => 65, 'No. of Attedence' => 45, 'Skill Gained' => 60] as $label => $value)
                        <div class="mb-2">
                            <div class="d-flex justify-content-between">
                                <span>{{ $label }}</span>
                                <span>{{ $value }}%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" style="width: {{ $value }}%;" aria-valuenow="{{ $value }}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>







    <!-- Charts Section -->
  <!-- Dropdown + Graphs -->
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

    <!-- Projects and Orders -->
    {{-- <div class="row">
        <div class="col-md-8">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h6>Projects <small class="text-muted float-end">30 done this month</small></h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Material XD Version</strong><br>
                                    <small class="text-muted">Budget: $14,000</small>
                                </div>
                                <div class="w-50">
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" style="width: 60%;">60%</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Add Progress Track</strong><br>
                                    <small class="text-muted">Budget: $3,000</small>
                                </div>
                                <div class="w-50">
                                    <div class="progress">
                                        <div class="progress-bar bg-info" style="width: 10%;">10%</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h6>Orders overview <small class="text-muted">24% this month</small></h6>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <span class="text-success">✔</span> $2400, Design changes <small class="d-block text-muted">22 DEC 7:20 PM</small>
                        </li>
                        <li class="mb-2">
                            <span class="text-danger">🔧</span> New order #1832412 <small class="d-block text-muted">21 DEC 11 PM</small>
                        </li>
                        <li>
                            <span class="text-primary">📦</span> Server payments for April <small class="d-block text-muted">21 DEC 9:34 PM</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> --}}
</div>

<!-- Chart.js -->
<!-- ... your entire HTML content ... -->

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    // Get data from backend
    const enquiryData = @json($enquiryData);
    const contactData = @json($contactData);

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

    // Initialize Enquiry Chart (Orange)
    const enquiryCtx = document.getElementById('enquiryChart').getContext('2d');
    const enquiryChart = new Chart(enquiryCtx, {
        type: 'bar',
        data: {
            labels: enquiryData.dailyLabels,
            datasets: [{
                label: 'Enquiry Submissions',
                data: enquiryData.daily,
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
            labels: contactData.dailyLabels,
            datasets: [{
                label: 'Contact Submissions',
                data: contactData.daily,
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

    // Add dropdown event listeners
    document.querySelectorAll('.enquiry-option').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const range = this.dataset.range;
            document.getElementById('enquiryLabel').innerText = this.innerText;
            updateChart(enquiryChart, range, enquiryData, '#f04e23');
        });
    });

    document.querySelectorAll('.contact-option').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const range = this.dataset.range;
            document.getElementById('contactLabel').innerText = this.innerText;
            updateChart(contactChart, range, contactData, '#f5e663');
        });
    });




      const ctx = document.getElementById('areaChart').getContext('2d');
    const areaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'],
            datasets: [
                // {
                //     label: 'Facebook Campaign',
                //     data: [70, 50, 60, 30, 110, 20],
                //     backgroundColor: 'rgba(75,192,192,0.4)',
                //     borderColor: 'rgba(75,192,192,1)',
                //     fill: true,
                //     tension: 0.4
                // },
                {
                    label: 'Twitter Campaign',
                    data: [40, 60, 30, 20, 50, 80],
                    backgroundColor: 'rgba(153,102,255,0.4)',
                    borderColor: 'rgba(153,102,255,1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
</script>
@endsection
