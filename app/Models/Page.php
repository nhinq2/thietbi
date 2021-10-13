<?php

namespace App\Models;

use App\Models\Page;
use App\Models\Translate;
use Cviebrock\EloquentSluggable\Sluggable;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class Page extends Model
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

    protected $fillable = [
        'title',
        'content',
        'summary',
        'image_link',
        'keywords',
        'background_url',
        'youtube',
        'float',
        'attachs',
        'language',
        'parent_id',
        'is_front',
        'type',
    ];

    public function photo()
    {
        if (!empty($this->image_link) && file_exists(public_path() . '/upload/page/' . $this->image_link)) {
            return '/upload/page/' . $this->image_link;
        } else {
            return '/image/logo.png';
        }
    }

    public function shortenContent($length)
    {
        $content = $this->content;
        $content = strip_tags($content);
        $content = str_limit($content, $length);

        return $content;
    }

    public function children()
    {
        return $this->hasMany($this, 'parent_id');
    }

    public function source()
    {
        return DB::table('translates')
            ->where('trans_id', $this->id)
            ->where('app', 'page')->value('app_id');
    }

    public function hasLanguage($language)
    {
        return Translate::where('app_id', $this->id)->where('language', $language)->first();
    }

    public function customfield()
    {
        foreach (Redis::keys('panna:pages:' . $this->id . ':*') as $key) {
            $json          = Redis::get($key);
            $customfield[] = json_decode($json);
        }
        $customfield = collect($customfield)->sortBy('sort');
        return $customfield;
    }

    public function translate($language)
    {
        if ($this->language == $language) {
            return $this;
        } else {
            $source_entry = DB::table('translates')
                ->where('app_id', $this->id)
                ->where('language', $language)
                ->where('app', 'page')->first();

            if (!empty($source_entry->trans_id)) {
                $source_language = DB::table('translates')
                    ->where('trans_id', $source_entry->trans_id)
                    ->where('language', $language)
                    ->where('app', 'page')->first();
                if ($source_language) {
                    return Page::where('id', $source_language->trans_id)->first();
                }
            } else {
                $target_entry = DB::table('translates')
                    ->where('trans_id', $this->id)
                    ->where('app', 'page')->first();
                if ($target_entry) {
                    if ($language == 'vi') {
                        return Page::where('id', $target_entry->app_id)->first();
                    } else {
                        $source_language = DB::table('translates')
                            ->where('app_id', $target_entry->app_id)
                            ->where('language', $language)
                            ->where('app', 'page')->first();
                        if ($source_language) {
                            return Page::where('id', $source_language->trans_id)->first();
                        }
                    }
                }
            }
        }
    }
}
