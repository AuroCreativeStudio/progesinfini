<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    use HasFactory;

    protected $fillable = [
        'workshop_title',
        'featured_image',
        'workshop_type',
        'about_workshop',
        'workshop_description',
        'price',
        'format',
        'duration_weeks',
        'time',
        'skill_gained',
        'target_audience',
        'no_of_attendance',
    ];
}
