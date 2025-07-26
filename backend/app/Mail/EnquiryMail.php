<?php

namespace App\Mail;

use App\Models\Enquire;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EnquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    public $enquire;

    public function __construct(Enquire $enquire)
    {
        $this->enquire = $enquire;
    }

    public function build()
    {
        return $this->subject('New Enquiry Submission')
                   ->view('emails.enquiry-submitted');
    }
}