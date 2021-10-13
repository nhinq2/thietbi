<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Page;
use App\Models\Product;
use App\Models\Translate;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class PageController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function getTypes()
    {
        return [
            'base'            => 'Trang cơ bản',
            'banner'          => 'Gallery',
            'system_solution' => 'Hỗ trợ tư vấn',
            'solution'        => 'Giải pháp',
            'service'         => 'Sản phẩm dịch vụ',
        ];
    }

    public function index()
    {
        $pages = Page::all();
        return view('page.index', ['pages' => $pages]);
    }

    public function create()
    {
        $types = $this->getTypes();
        $pages = Page::orderBy('title')->get();

        return view('page.create', [
            'types' => $types,
            'pages' => $pages,
        ]);
    }

    public function dashboard()
    {
        $products = Product::all();
        return view('dashboard', ['products' => $products]);
    }

    public function home()
    {
        $categories = Category::where('parent_id', 0)->orderBy('id', 'desc')->get();
        $colors     = array('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark');
        $specials   = Product::where('is_special', 1)->limit(6)->get();
        $products   = Product::inRandomOrder()->limit(3)->get();
        return view('index', compact('colors', 'categories', 'products', 'specials'));
    }

    function list(Request $request) {
        $type  = $request->type ?? 'base';
        $types = $this->getTypes();

        $pages = Page::whereType($type)->paginate(25);

        return view('page.list', [
            'current_type' => $type,
            'types'        => $types,
            'pages'        => $pages,
        ]);
    }

    public function search(Request $request)
    {
        $keyword = $request->keyword;
        if (!$keyword) {
            $products = Product::paginate(15);
        } else {
            $products = Product::where('title', 'like', "%" . $keyword . "%")
                ->orWhere('summary', 'like', "%" . $keyword . "%")->paginate(15);
        }
        $categories = Category::where('parent_id', 0)->orderBy('id', 'desc')->get();
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('product.search', compact('products','categories','recently', 'keyword'));
    }

    public function read(Request $request)
    {
        if ($request->write) {
            $pages = Page::all();
            foreach ($pages as $key => $value) {
                foreach (Redis::keys('ngocbich:pages:' . $value->id . ':*') as $key) {
                    $json          = Redis::get($key);
                    $customfield[] = array($value->id, json_decode($json));
                }
            }
            $jsons = json_encode($customfield);

            $data = Storage::put('redis/pages.json', $jsons);
        }
        $jsons = json_decode(Storage::get('redis/pages.json'));
        foreach ($jsons as $json) {
            $value = $json[1];
            $data  = array(
                'name'    => $value->name,
                'key'     => $value->key,
                'sort'    => @$value->sort,
                'content' => $value->content,
            );
            Redis::set('ngocbich:pages:' . $json[0] . ':' . $value->key, json_encode($data));
        }
    }

    public function store(Request $request)
    {
        $lang     = \Session::get('locale', 'vi');
        $slug     = Str::slug($request->title, '-');
        $img_name = "";
        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'img-' . $slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/page/'), $img_name);
        }

        $background_url = "";
        if ($request->hasFile('background_url')) {
            $image          = $request->file('background_url');
            $background_url = 'bg-' . $slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/page/'), $background_url);
        }
        $data = $request->only('title', 'content', 'summary', 'youtube', 'float', 'author', 'parent_id', 'image_link', 'keywords', 'background_url', 'is_front', 'attachs', 'field_name', 'field_content', 'field_checkbox', 'field_sort', 'clone', 'type');
        if ($lang != 'vi') {
            $data['title'] .= '(' . $lang . ')';
        }
        $data['image_link']     = $img_name;
        $data['background_url'] = $background_url;
        $data['is_front']       = $request->is_front ? $request->is_front : 0;
        $data['language']       = $lang;
        $page                   = Page::create($data);

        return redirect('admin/page/list');
    }

    public function show(Request $request, $slug)
    {
        $page = Page::where('slug', $slug)->first();
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        if ($page) {
            $type = $page->type;
                    return view('page.show', [
                        'page' => $page,
                        'categories' => $categories,
                        'recently' => $recently,
                    ]);

        }

        return view('page.404');
        abort(404);
    }

    public function edit($id)
    {
        $clone   = '';
        $current = url()->current();
        $url     = explode('/', $current);
        $clone   = @$url[6];
        $page    = Page::find($id);
        $pages   = Page::orderBy('title')->get();
        $types   = $this->getTypes();

        return view('page.edit', compact('page', 'customfield', 'pages', 'clone', 'types'));
    }

    public function update(Request $request)
    {
        $page             = Page::find($request->page_id);
        $data             = $request->only('title', 'content', 'summary', 'youtube', 'float', 'author', 'parent_id', 'image_link', 'keywords', 'background_url', 'is_front', 'attachs', 'field_name', 'field_content', 'field_checkbox', 'field_sort', 'clone', 'type');
        $data['is_front'] = $request->is_front ? $request->is_front : 0;
        $img_name         = null;
        if ($request->hasFile('background_url')) {
            $image    = $request->file('background_url');
            $img_name = 'bg-' . $page->slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/page/'), $img_name);

            $del_image  = $page->background_url;
            $image_path = public_path("upload/page/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
            $data['background_url'] = $img_name;
        }

        $img_name = "";
        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'img-' . $page->slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/page/'), $img_name);
            $data['image_link'] = $img_name;
        }

        if ($request->background_remove) {
            $data['background_url'] = null;
            $del_image              = $page->background_url;
            $image_path             = public_path("upload/page/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
        }
        if ($request->image_remove) {
            $data['image_link'] = null;
            $del_image          = $page->image_link;
            $image_path         = public_path("upload/page/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
        }

        $page->update($data);
        return back()->with('notifi', 'Đã sửa thành công');
    }

    public function apiImageUpload(Request $request)
    {
        $img_name = "";
        $url      = URL::to('/');
        $random   = Str::random(25);
        if ($request->hasFile('file')) {
            $image    = $request->file('file');
            $img_name = $random . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/images/'), $img_name);
            return $url . '/upload/images/' . $img_name;
        }
    }

    public function delete($id)
    {
        $page      = Page::find($id);
        $translate = Translate::whereTransId($page->id)->first();
        if ($translate) {
            Translate::whereTransId($page->id)->first()->delete();
        }
        $page->delete();

        return back()->with('notifi', 'Đã xóa thành công');
    }
}
