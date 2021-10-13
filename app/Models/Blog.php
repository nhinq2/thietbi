<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use DB;
use App\Models\Blog;
use App\Models\Comment;

class Blog extends Model
{
    use Sluggable;
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true
            ]
        ];
    }

    protected $fillable = [
        'title',
        'content',
        'summary',
        'image_link',
        'keywords',
        'author',
        'youtube',
        'language'
    ];

    public function photo()
    {
        if (file_exists(public_path() . '/upload/blog/' . $this->image_link)) {
            return '/upload/blog/' . $this->image_link;
        } else {
            return '/image/logo.png';
        }
    }

    public function comments() {
      return $this->hasMany('App\Models\Comment');
    }

    public function source()
    {
        return DB::table('translates')
        ->where('trans_id',$this->id)
        ->where('app','blog')->value('app_id');
    }

    public function translate($language)
    {
        if($this->language == $language){
          return $this;
        }else{
          $source_entry = DB::table('translates')
          ->where('app_id',$this->id)
          ->where('language', $language)
          ->where('app','blog')->first();

          if(!empty($source_entry->trans_id)){
            $source_language = DB::table('translates')
            ->where('trans_id',$source_entry->trans_id)
            ->where('language', $language)
            ->where('app','blog')->first();
            if($source_language){
              return Blog::where('id',$source_language->trans_id)->first();
            }
          }else{
            $target_entry = DB::table('translates')
            ->where('trans_id',$this->id)
            ->where('app','blog')->first();
            if($target_entry){
              if($language == 'vi'){
                return Blog::where('id',$target_entry->app_id)->first();
              }else{
                $source_language = DB::table('translates')
                ->where('app_id', $target_entry->app_id)
                ->where('language', $language)
                ->where('app','blog')->first();
                if($source_language){
                  return Blog::where('id',$source_language->trans_id)->first();
                }
              }
            }
          }

        }
    }
}
