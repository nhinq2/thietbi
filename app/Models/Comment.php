<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'fullname',
        'email',
        'phone',
        'content',
        'blog_id',
    ];

    public function blog()
    {
        return $this->belongsTo('App\Models\Blog', 'blog_id');
    }
}
