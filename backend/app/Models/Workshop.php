<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    protected $table = 'workshop';

    protected $fillable = [
        'workshop_title',
        'workshop_type',
        'workshop_description',
        'workshop_duration',
        'target_audience',
        'number_of_attendees',
        'workshop_price'
    ];
}
