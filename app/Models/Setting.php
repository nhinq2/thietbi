<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use Sluggable;
    public function sluggable()
    {
        return [
            'key' => [
                'source'   => 'name',
                'unique'   => false,
                'onUpdate' => false,
            ],
        ];
    }

    protected $fillable = [
        'name', 'key', 'content', 'language',
    ];
}
