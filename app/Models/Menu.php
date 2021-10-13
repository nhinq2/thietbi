<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Session;

class Menu extends Model
{
    protected $fillable = [
        'name', 'model_id', 'sort', 'parent_id', 'link', 'language', 'ismega',
    ];

    public function page()
    {
        return $this->belongsTo('App\Models\Page', 'model_id');
    }

    public function children()
    {
        return $this->hasMany('App\Models\Menu', 'parent_id');
    }

    public function url()
    {
        $locale = Session::get('locale');
        $slack  = '';
        if (empty($this->link)) {
            if ($this->page) {
                $this->link = $this->page->slug;
            }

            if (substr($this->link, 1) !== '/') {
                $slack = '/';
            }
        }
        return '/' . $locale . $slack . $this->link;
    }
}
