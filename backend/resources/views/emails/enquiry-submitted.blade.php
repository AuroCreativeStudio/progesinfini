<h2>New Enquiry Submission</h2>

<p><strong>Name:</strong> {{ $enquire->name }}</p>
<p><strong>Email:</strong> {{ $enquire->email }}</p>
<p><strong>Phone:</strong> {{ $enquire->phoneno ?? 'N/A' }}</p>
@if($enquire->workshop)
<p><strong>Workshop:</strong> {{ $enquire->workshop->workshop_title ?? 'N/A' }}</p>
@endif
<p><strong>Message:</strong><br>{{ $enquire->message ?? 'N/A' }}</p>