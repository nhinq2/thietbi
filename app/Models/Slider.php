<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $fillable = [
        'title',
        'sort',
        'content',
        'summary',
        'background_image',
        'image_link',
        'url',
        'is_display',
        'position',
    ];
}
