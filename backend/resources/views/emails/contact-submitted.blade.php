<!-- resources/views/emails/contact-submitted.blade.php -->

<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{ $contact->name }}</p>
<p><strong>Email:</strong> {{ $contact->email }}</p>
<p><strong>Phone:</strong> {{ $contact->phoneno ?? 'N/A' }}</p>
<p><strong>Message:</strong><br>{{ $contact->message ?? 'N/A' }}</p>

