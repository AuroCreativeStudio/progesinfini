<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facilitator extends Model
{
    use HasFactory;

    // Specify the table name if it's not the plural of the model name
    protected $table = 'facilitators';

    // Specify the fields that are mass assignable
    protected $fillable = [
        'name',
        'designation',
        'description',
        'contact_phone',
        'contact_email',
        'workshop_id',
    ];

    /**
     * Relationship: A facilitator belongs to a workshop.
     */
    public function workshop()
    {
        return $this->belongsTo(Workshop::class);
    }
}
