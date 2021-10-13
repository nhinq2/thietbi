<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Page;
use DB;

class MenuController extends Controller
{
  function list(){
    $locale = \Session::get('locale', 'vi');
    $menu = Menu::where('parent_id',0)->whereLanguage($locale)->orderBy('sort')->get();
    $pages = Page::all();
    return view('menu.list', compact('menu', 'pages'));
   }

   function api_list(Request $request) {
     $menu = menu::orderBy('sort','asc')->get();
     return $menu;
   }

   function store(Request $request) {
    $i = 0;
    $tree = json_decode($request->sortable);
    $model = $request->model;
    $language = \Session::get('locale', 'vi');
    $link = $request->link;
    $checks = $request->checkbox;
    foreach ($request->name as $menu_id => $value) {
      $menu = Menu::find($menu_id);
      if($menu){
        $page_link = Page::find($model[$menu_id]);
        $menu->update([
          'name' => $value,
          'model_id' => $model[$menu_id],
          'sort' => $i,
          'language' => $language,
          'link' => $page_link?'/'.$page_link->slug:$link[$menu_id],
        ]);
      }else{
        if($value != null && ($model[0] >0 || $link[0] != null)){
        $page_link = Page::find($model[0]);
        $menu = Menu::create([
            'name' => $value,
            'model_id' => $model[0],
            'sort' => $i,
            'language' => $language,
            'link' => $page_link?'/'.$page_link->slug:$link[0]
          ]);
        }
      }
      $i++;
      //Process parent children for menu
      if(!empty($tree[$i])){
          if(array_key_exists('children', $tree[$i])){
            $this->process_children($tree[$i]);
          }else{
            $this->update_children($tree[$i]);
          }
      }

    }
    if(is_array($checks)){
        foreach ($checks as $id => $value) {
          $menu = Menu::find($id);
          $menu->delete();
        }
    }
    return redirect('admin/menu');
   }

   function process_children($tree) {
     $id = $tree->id;
     foreach ($tree->children as $key => $value) {
        $menu = Menu::find($value->id);
        $menu->update([
            'parent_id' => $tree->id,
          ]);
          //level 2
          if(array_key_exists('children', $value)){
            foreach ($value->children as $key => $value1) {
               $menu = Menu::find($value1->id);
               $menu->update([
                   'parent_id' => $value->id,
                 ]);
               //make parent level 0 is Mega
               $mega = Menu::find($id);
               $mega->update(['ismega' => true]);
             }
           }
      }
    }

    function update_children($tree) {
         $menu = Menu::find($tree->id);
         if(isset($menu->parent_id) && $menu->parent_id > 0){
           $menu->update([
               'parent_id' => 0,
             ]);
         }
    }
}
