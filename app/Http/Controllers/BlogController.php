<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use File;
use Illuminate\Http\Request;
use Session;

class BlogController extends BaseController
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

    public function index()
    {
        $locale = Session::get('locale');
        $blogs  = Blog::where('language', $locale)->paginate(6);

        return view('blog.index', [
            'active_menu' => 'tin-tuc',
            'blogs'       => $blogs,
        ]);
    }

    public function category($slug)
    {
        $category = Category::where('slug', $slug)->first();
        $blogs    = Blog::where('language', $locale)->where('category_id', $category->id)->paginate(6);
        return view('blog.index', [
            'active_menu' => 'tin-tuc',
            'blogs'       => $blogs,
        ]);
    }

    public function create()
    {
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        return view('blog.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $img_name = "";
        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'blog-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/blog/'), $img_name);
        }

        $blog = Blog::create([
            'title'       => Request('title'),
            'content'     => Request('content'),
            'summary'     => Request('summary'),
            'youtube'     => Request('youtube'),
            'author'      => Request('author'),
            'category_id' => Request('category_id'),
            'keywords'    => $request->keywords,
            'updated_at'  => date('Y-m-d H:i:s'),
            'created_at'  => date('Y-m-d H:i:s'),
            'image_link'  => $img_name,
        ]);

        return redirect('/blog/' . $blog->slug);
    }

    function list() {
        $blogs = Blog::paginate(10);
        return view('blog.list', compact('blogs'));
    }

    public function show($slug)
    {
        $blog  = Blog::where('slug', $slug)->first();
        $blogs = Blog::where('slug', '!=', $slug)
            ->whereLanguage($blog->language)
            ->orderBy('id')->limit(5)->get();

        return view('blog.show', [
            'blog'  => $blog,
            'blogs' => $blogs,
        ]);
    }

    public function edit($id)
    {
        $blog       = Blog::find($id);
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        return view('blog.edit', ['blog' => $blog, 'categories' => $categories]);
    }

    public function update(Request $request)
    {
        $blog              = Blog::find($request->blog_id);
        $blog->title       = $request->title;
        $blog->content     = $request->content;
        $blog->summary     = $request->summary;
        $blog->youtube     = $request->youtube;
        $blog->keywords    = $request->keywords;
        $blog->category_id = $request->category_id;

        $img_name = null;
        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'blog-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/blog/'), $img_name);

            $del_image  = $blog->image_link;
            $image_path = public_path("upload/blog/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
            $blog->image_link = $img_name;
        }
        $blog->save();
        return back()->with('notifi', 'Đã sửa thành công');
    }
    public function delete($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        return back()->with('notifi', 'Đã xóa thành công');
    }
}
