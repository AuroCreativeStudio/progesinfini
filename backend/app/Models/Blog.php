<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
      use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'author',
        'short_description',
        'date',
        'author_img',
        'description1',
        'description2',
        'description3',
        'about',
        'publish_status',
        'feature_img',
        'img_1',
        'img_2',
    ];
}
