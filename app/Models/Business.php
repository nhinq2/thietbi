<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
        'image_link', 'name', 'represent', 'phone', 'address', 'business',
    ];

    public function photo()
    {
        if (!empty($this->image_link) && file_exists(public_path() . '/upload/business/' . $this->image_link)) {
            return '/upload/business/' . $this->image_link;
        } else {
            return '/image/logo.png';
        }
    }
}
