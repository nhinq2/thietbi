<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
   function api_post(Request $request){
     	 $category = Category::create([
             'name' => $request->name,
             'icon' => $request->icon,
              'sortable' => isset($request->sortable)?$request->sortable:0,
              'parent_id' => $request->parent_id
         ]);

         return $category;
    }

    public function api_list()
    {
        return Category::where('parent_id',0)->paginate(10);
    }
   
    public function api_sublist($id)
    {
        return Category::where('parent_id',$id)->paginate(20);
    }


}
