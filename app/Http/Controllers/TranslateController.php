<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Page;
use App\Models\Product;
use App\Models\Translate;
use App;
use Session;
use DB;

class TranslateController extends Controller
{
  public function locale($locale){
     Session::put('locale', $locale);
     $path = url()->previous();
     $url = explode('/', $path);
     $new_url = null;

     if(isset($url[4]) && ($url[4] == 'san-pham' || $url[4] == 'blog' || $url[4] == 'lien-he')){
       return redirect($url[4]);
     }
     //check page
     if(!empty($url[4])){
       switch ($url[4]) {
         case 'blog':
           $entry = Blog::where('slug',@$url[5])->first();
           if($entry){
             $translate = $entry->translate($locale);
             if(!empty($translate->id)){
               $new_url = '/blog/'.$translate->slug;
             }
           }
           break;
         case 'san-pham':
           $entry = Product::where('slug',@$url[5])->first();
           if($entry){
             $translate = $entry->translate($locale);
             if(!empty($translate->id)){
               $new_url = '/san-pham/'.$translate->slug;
             }
           }
           break;
         default:
         $entry = Page::where('slug',@$url[4])->first();
         if($entry){
           $translate = $entry->translate($locale);
           if(!empty($translate->id)){
              $new_url = $translate->slug;
           }
         }
         break;
       }
     }
     if(!empty($new_url)){
       return redirect($new_url);
     }
     return redirect($locale);

  }

  public function create($app, $app_id, $language)
  {

    switch ($app) {
      case 'page':
        $entry = Page::find($app_id);
        break;
      case 'blog':
        $entry = Blog::find($app_id);
        break;
      case 'product':
        $entry = Product::find($app_id);
        break;
      default:
        $entry = null;
        break;
  }

  if($entry->id){
    $source_language = $entry->language;
    $entry->title = $entry->title .'('. $language.')';
    $entry->language = $language;
    $clone = $entry->replicate();
    $clone->push();
    $clone->save();

    Translate::create([
      'app'=>$app,
      'app_id'=>$app_id,
      'trans_id'=>$clone->id,
      'language'=>$language
    ]);
    return redirect('admin/'.$app.'/'.$clone->id.'/edit');
  }else{
    return redirect('admin/'.$app);
  }

  }
}
