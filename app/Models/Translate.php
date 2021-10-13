<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translate extends Model
{
    protected $fillable = ['app_id', 'language', 'app', 'trans_id'];
}
