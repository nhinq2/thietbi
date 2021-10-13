<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Menu;
use App\Models\Setting;
use Session;
use View;
use Cart;

class BaseController extends Controller
{
    public function __construct()
    {
        $locale = Session::get('locale', 'vi');

        $menus        = Menu::where('parent_id', 0)->where('language', $locale)->with('children.children')->orderBy('sort')->get();
        $blogs_footer = BLog::orderBy('id', 'desc')->limit(3)->get();

        $settings = [];
        $setting  = Setting::whereLanguage($locale)->get();

        foreach ($setting as $value) {
            $settings[$value->key] = $value->content;
        }
        View::share([
            'locale'       => $locale,
            'menus'        => $menus,
            'blogs_footer' => $blogs_footer,
            'settings'     => $settings
        ]);
    }
}
