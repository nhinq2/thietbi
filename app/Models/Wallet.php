<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Wallet extends Model
{
    protected $guarded = [];

    protected $appends = [
        'user'
    ];

    public function getUserAttribute()
    {
        return DB::table('users')
              ->select('id', 'name', 'phone', 'device', 'money')
              ->where('id', $this->user_id)
              ->first();
    }
}
