<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{

    public function index()
    {
    	$categories = Category::all();
        return view('category.index',['categories'=>$categories]);
    }

    public function list()
    {
        $categories = Category::where('parent_id',0)->paginate(20);
        return view('category.list',['categories'=>$categories]);
    }

    public function create()
    {
        $categories = Category::where('parent_id',0)->orderBy('id','desc')->get();
        return view('category.create', compact('categories'));
    }


    public function store(Request $request)
    {
    	$img_name = "";
  		if ($request->hasFile('image')) {
	        $image = $request->file('image');
		    $img_name = 'category-'.time().'.'.$image->getClientOriginalExtension();
		    $image->move(public_path('upload/category/'), $img_name);
    	}

    	 $category = Category::create([
            'name' => $request->name,
            'icon' => $request->icon,
            'image_link' => $img_name,
            'sortable' => isset($request->sortable)?$request->sortable:0,
            'parent_id' => $request->parent_id
        ]);


        return redirect('/admin/category/list')->with('status','Đã thêm thành công');
    }

    public function show($slug)
    {
        $category = Category::where('slug',$slug)->first();
        return view('category.show',['category'=>$category]);
    }

    public function edit($id){
        $category = Category::find($id);
        $categories = Category::where('parent_id',0)->orderBy('id','desc')->get();
        return view('category.edit', compact('categories','category'));
    }

    public function update(Request $request)
    {
        $category = Category::find($request->category_id);
        $category->name = $request->name;
        $category->icon = $request->icon;
        $category->parent_id = $request->parent_id;
        $category->sortable = $request->sortable;

        $img_name = "";
    		if ($request->hasFile('image')) {
  	        $image = $request->file('image');
  		    $img_name = 'category-'.time().'.'.$image->getClientOriginalExtension();
  		    $image->move(public_path('upload/category/'), $img_name);
      	}

        $category->image_link = $img_name;

        $category->save();
        return redirect('/admin/category/list')->with('status','Đã sửa thành công');
    }

    public function delete($id){
        $category = Category::find($id);
        $category->delete();
        return redirect('/admin/category/list')->with('status','Đã xóa thành công');
    }
}
