<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use DB;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source'   => 'title',
                'onUpdate' => true,
            ],
        ];
    }

    protected $appends = [
        'user'
    ];

    protected $guarded = [];

    public function photo($cache = false)
    {
      $image = json_decode($this->image_link);
      if($image != [] && !empty($image[0])){
        if ($cache || file_exists(public_path() . '/upload/product/cache/' . $image[0])) {
            return '/upload/product/cache/' . $image[0];
        }else {
            return '/upload/product/' . $image[0];
        }
      }else{
          return '/images/logo.png';
      }
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }

    public function getUserAttribute()
    {
        return DB::table('users')
              ->select('id', 'name', 'image', 'location', 'payment', 'role', 'device', 'notify')
              ->where('id', $this->user_id)
              ->first();
    }

    public function source()
    {
        return DB::table('translates')
            ->where('trans_id', $this->id)
            ->where('app', 'product')->value('app_id');
    }

    public function translate($language)
    {
        if ($this->language == $language) {
            return $this;
        } else {
            $source_entry = DB::table('translates')
                ->where('app_id', $this->id)
                ->where('language', $language)
                ->where('app', 'product')->first();

            if (!empty($source_entry->trans_id)) {
                $source_language = DB::table('translates')
                    ->where('trans_id', $source_entry->trans_id)
                    ->where('language', $language)
                    ->where('app', 'product')->first();
                if ($source_language) {
                    return Product::where('id', $source_language->trans_id)->first();
                }
            } else {
                $target_entry = DB::table('translates')
                    ->where('trans_id', $this->id)
                    ->where('app', 'product')->first();
                if ($target_entry) {
                    if ($language == 'vi') {
                        return Product::where('id', $target_entry->app_id)->first();
                    } else {
                        $source_language = DB::table('translates')
                            ->where('app_id', $target_entry->app_id)
                            ->where('language', $language)
                            ->where('app', 'product')->first();
                        if ($source_language) {
                            return Product::where('id', $source_language->trans_id)->first();
                        }
                    }
                }
            }

        }
    }
}
