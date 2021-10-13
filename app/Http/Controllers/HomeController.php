<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Page;
use App\Models\Slider;
use App\Models\Product;
use App\Models\Category;
use App\Models\Setting;
use Illuminate\Http\Request;
use App\Notifications\ContactSend;
use Notification;
use Session;

class HomeController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        //$this->middleware('auth');
        $locale = Session::get('locale', 'vi');
        $setting  = Setting::where('key','admin-email-'.$locale)->first();
        $this->email = @$setting->content;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lang = 'vi';
        Session::put('locale', $lang);

        $sliders = Slider::inRandomOrder()->limit(4)->get();
        $banner  = Page::where([
            ['language', $lang],
            ['type', 'banner'],
        ])->first();
        $solutions = Page::where([
            ['language', $lang],
            ['type', 'system_solution'],
        ])->orderBy('id')->limit(4)->get();
        $blogs    = Blog::where('language', $lang)->where('image_link', '!=', null)->orderBy('id', 'desc')->limit(3)->get();
        $services = Page::where([
            ['language', $lang],
            ['type', 'service'],
        ])->orderBy('id', 'desc')->limit(4)->get();
        $products = Product::where([
            ['language', $lang],
        ])->orderBy('id', 'desc')->limit(4)->get();
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('index', [
            'sliders'   => $sliders,
            'products' => $products,
            'blogs'     => $blogs,
            'services'  => $services,
            'recently' => $recently,
        ]);
    }

    public function contact()
    {   $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('contact', [
            'active_menu' => 'lien-he',
            'categories' => $categories,
            'recently' => $recently,
        ]);
    }

    public function app()
    {
        $products = Product::where([
            ['language', 'vi'],
        ])->where('is_special', 1)->orderBy('created_at', 'desc')->limit(4)->get();
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        $viewedproduct = Product::orderBy('viewed', 'desc')->limit(4)->get();
        return view('home', ['products' => $products, 'categories' => $categories, 'recently' => $recently, 'viewedproduct' => $viewedproduct]);
    }

    public function send(Request $request)
    {
        $to = $this->email ?? "nhicloud@gmail.com";
        if (filter_var($to, FILTER_VALIDATE_EMAIL)) {
          Notification::route('mail', $to)
                ->notify(new ContactSend($request));
        }
        return redirect()->back();
    }

}
