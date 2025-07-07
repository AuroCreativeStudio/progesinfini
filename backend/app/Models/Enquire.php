<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enquire extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phoneno',
        'message',
        'workshop_id',
    ];

    // Optional: Relationship to Workshop (if you have a Workshop model)
    public function workshop()
    {
        return $this->belongsTo(Workshop::class);
    }
}
