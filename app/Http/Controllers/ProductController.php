<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use File;
use Illuminate\Http\Request;
use Image;
use App\Imports\ProductImport;
use Maatwebsite\Excel\Facades\Excel;
use Auth;

class ProductController extends BaseController
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
        $categories = Category::where('parent_id', 0)->with('subCategories')->orderBy('sortable', 'asc')->get();
        $products   = Product::paginate(9);
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('product.index', compact('products', 'categories', 'recently'));
    }

    function list(Request $request) {

        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'desc')->get();
        $ids        = [];
        if ($request->category_id) {
            $parent = Category::where('id', $request->category_id)->first();
            foreach ($parent->subCategories as $key => $value) {
                $ids[] = $value->id;
            }
            if (empty($ids)) {
                $ids = $parent->id;
            }
        }
        $products = Product::when($ids, function ($query, $ids) {
            if (is_array($ids)) {
                $query->whereIn('category_id', $ids);
            } else {
                $query->where('category_id', $ids);
            }
        })
            ->orderBy('created_at', 'desc')->paginate(15);

        $products->withPath($request->fullUrl());

        return view('product.list', compact('products', 'categories'));
    }

    public function productshow($slug)
    {
        $categories       = Category::where('parent_id', 0)->with('subCategories')->orderBy('sortable', 'asc')->get();
        $current_category = Category::where('slug', $slug)->first();

        $parent_id = 0;
        $subs      = $ids      = [];
        if ($current_category->parent_id == 0) {
            $parent_id = $current_category->id;
            $parent    = Category::where('id', $parent_id)->first();
            $subs      = $parent->subCategories;
            $ids[]     = $current_category->id;
        } else {
            $parent_id = $current_category->parent_id;
            $parent    = Category::where('id', $parent_id)->first();
            $ids       = $current_category->id;
        }

        foreach ($subs as $key => $value) {
            $ids[] = $value->id;
        }

        if ($ids) {
            $products = Product::when($ids, function ($query, $ids) {
                if (is_array($ids)) {
                    $query->whereIn('category_id', $ids);
                } else {
                    $query->where('category_id', $ids);
                }
            })
                ->paginate(9);
        } else {
            $products = [];
        }
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('product.index', compact('categories', 'products', 'product_by_new', 'parent', 'current_category','recently'));
    }

    public function create()
    {
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'desc')->get();
        return view('product.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $data = $request->only(
            'title', 'sku', 'content', 'summary', 'price', 'price2', 'madein', 'category_id', 'image_link', 'is_special', 'discount', 'unit', 'user_id', 'index'
        );
        $data['sku']        = $request->sku ? $request->sku : str_random(5);
        $data['price']      = $request->price ? str_replace(',', '', $request->price) : 0;
        $data['price2']     = $request->price2 ? str_replace(',', '', $request->price2) : 0;
        $data['user_id']    = Auth::id();
        $product            = Product::create($data);

        $imgs = [];
        $slug = $product->slug;
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $key => $image) {
                $img_name = $slug . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('upload/product/'), $img_name);
                $imgs[] = $img_name;

                // open file a image resource
                $img = Image::make( public_path('upload/product/'.$img_name) , 75);
                $imgOrigin = Image::make( public_path('upload/product/'.$img_name) , 75);
                // crop image
                $img->resize(200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $img->crop(200, 142, null, null);
                $img->save(public_path('upload/product/cache/'.$img_name));

                //Image 2
                $imgOrigin->resize(1200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $imgOrigin->save(public_path('upload/product/'.$img_name));
            }
        }
        $data['image_link'] = json_encode($imgs);
        $product->update($data);

        return redirect('/san-pham/' . $product->slug);
    }

    public function show($slug)
    {
        $product      = Product::where('slug', $slug)->first();
        $products = Product::where('id', '!=', $product->id)
            ->where('category_id', $product->category_id)
            ->limit(4)
            ->get();

        $product->update(['last_seen' => now()]);
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        $product->update(['last_seen' => now(), 'viewed' => $product->viewed + 1]);
        $recently   = Product::orderBy('last_seen', 'desc')->limit(3)->get();
        return view('product.show', compact('product', 'products','categories','recently'));
    }

    public function edit($id)
    {
        $categories = Category::where('parent_id', 0)->orderBy('sortable', 'asc')->get();
        $product    = Product::find($id);
        return view('product.edit', compact('categories', 'product'));
    }

    public function update(Request $request)
    {
        $product = Product::find($request->product_id);
        $data    = $request->only(
            'title', 'sku', 'content', 'summary', 'price', 'madein', 'category_id', 'image_link', 'is_special', 'discount', 'unit', 'user_id', 'city_id', 'district_id',  'index'
        );
        $data['sku']   = $request->sku ? $request->sku : str_random(5);
        $data['price'] = $request->price ? str_replace(',', '', $request->price) : 0;
        $data['price2']      = $request->price2 ? str_replace(',', '', $request->price2) : 0;
        $data['user_id']    = Auth::id();
        $product->update($data);


        $imgs = [];
        $slug = $product->slug;
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $key => $image) {
                $img_name = $slug . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('upload/product/'), $img_name);
                $imgs[] = $img_name;
                // open file a image resource
                $img = Image::make( public_path('upload/product/'.$img_name) , 75);
                $imgOrigin = Image::make( public_path('upload/product/'.$img_name) , 75);
                // crop image
                $img->resize(200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $img->crop(200, 142, null, null);
                $img->save(public_path('upload/product/cache/'.$img_name));

                //Image 2
                $imgOrigin->resize(1200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $imgOrigin->save(public_path('upload/product/'.$img_name));

                //delete
                /*$del_images = json_decode($product->image_link);
                foreach ($del_images as $key => $del_image) {
                    $image_path = public_path("upload/product/" . $del_image);
                    if (file_exists($image_path)) {
                        File::delete($image_path);
                    }
                }*/
            }
            $data['image_link'] = json_encode($imgs);
            $product->update($data);
        }
        return redirect('admin/product/list')->with('notifi', 'Đã sửa thành công');
    }

    function import_form()
    {
        return view('product.import');
    }

    function import_product(Request $request){
      if ($request->hasFile('file_upload')) {
        Excel::toArray(new ProductImport, $request->file('file_upload'));
      }
      return redirect()->back()->with('status', 'Nhập khẩu thành công');
    }

    function upload_form()
    {
        $files = File::files(public_path('upload/product/cache'));
        return view('product.image', compact('files'));
    }

    function upload_image(Request $request)
    {

        $imgs = [];
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $key => $image) {
                $img_name = $image->getClientOriginalName();
                $image->move(public_path('upload/product/'), $img_name);
                $imgs[] = $img_name;
                // open file a image resource
                $img = Image::make( public_path('upload/product/'.$img_name) , 75);
                $imgOrigin = Image::make( public_path('upload/product/'.$img_name) , 75);
                // crop image
                $img->resize(200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $img->crop(200, 142, null, null);
                $img->save(public_path('upload/product/cache/'.$img_name));

                //Image 2
                $imgOrigin->resize(1200, null, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $imgOrigin->save(public_path('upload/product/'.$img_name));
            }
        }

        return redirect()->back()->with('status', 'Nhập khẩu thành công');
    }

    public function delete($id)
    {
        $product = Product::find($id);
        $product->delete();
        return back()->with('notifi', 'Đã xóa thành công');
    }
}
