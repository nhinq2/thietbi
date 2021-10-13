<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Image;
use DB;
use File;

class ProductController extends Controller
{

   function api_post(Request $request){

         $data = $request->only(
             'title', 'sku', 'content', 'summary', 'price', 'price2', 'madein', 'category_id', 'image_link', 'is_special', 'discount', 'unit', 'user_id', 'city_id', 'district_id', 'ward_id', 'index'
         );
         $data['sku']        = $request->sku ? $request->sku : str_random(5);
         $data['price']      = $request->price ? str_replace(',', '', $request->price) : 0;
         $data['price2']     = $request->price2 ? str_replace(',', '', $request->price2) : 0;

         $image = $request->image;
         if(is_array($image)){
           $image = array_shift($image);
           if(!is_array($image)){
             $image = array($image);
           }
         }
         $image = json_encode($image);
         $data['image_link'] = $image;
         $product = [];
         if($request->id){
           $product = DB::table('products')->where('id', $request->id)->update($data);
         }else {
            $product = Product::create($data);
         }
         return $product;
    }

    public function api_all(Request $request)
    {
        $filter['city_id'] = $request->city_id;
        $filter['district_id'] = $request->district_id;

        $category = Category::where('parent_id',0)->get();
        $products = [];
        foreach ($category as $value) {
          $product = Product::where('category_id',$value->id)
          ->when($filter, function($query, $filter) {
              if($filter['city_id']) {
                $query->where('city_id', $filter['city_id']);
              }
              if($filter['district_id']) {
                $query->where('district_id', $filter['district_id']);
              }
            })
          ->orderBy('index', 'asc')
          ->orderBy('created_at', 'desc')
          ->limit(100)->get();
          $value->products = $product;
          $products[] = $value;
        }
        return $products;
    }

    public function api_list(Request $request)
    {
        $filter['city_id'] = $request->city_id;
        $filter['district_id'] = $request->district_id;
        $filter['user_id'] = $request->user_id;
        $filter['category_id'] = $request->category_id;
        $filter['keyword'] = $request->keyword;
        return Product::orderBy('index', 'asc')
        ->orderBy('created_at', 'desc')
        ->when($filter, function($query, $filter) {
            if($filter['category_id']) {
              $query->where('category_id', $filter['category_id']);
            }
            if($filter['city_id']) {
              $query->where('city_id', $filter['city_id']);
            }
            if($filter['district_id']) {
              $query->where('district_id', $filter['district_id']);
            }
            if($filter['user_id']) {
              $query->where('user_id', $filter['user_id']);
            }
            if($filter['user_id']) {
              $query->where('user_id', $filter['user_id']);
            }

            if($filter['user_id'] && $filter['keyword']) {
              $query->where('user_id', $filter['user_id']);
              $query->where('title', 'like', "%" . $filter['keyword'] . "%");
            }

            if($filter['user_id'] && $filter['category_id']) {
              $query->where('user_id', $filter['user_id']);
              $query->where('category_id', $filter['category_id']);
            }

          })
          ->paginate(100);
    }

    public function api_search(Request $request)
    {
       $filter['city_id'] = $request->city_id;
       $filter['district_id'] = $request->district_id;
        $keyword = $request->keyword;
        if ($keyword) {
          return Product::where('title', 'like', "%" . $keyword . "%")
          ->when($filter, function($query, $filter) {
              if($filter['city_id']) {
                $query->where('city_id', $filter['city_id']);
              }
              if($filter['district_id']) {
                $query->where('district_id', $filter['district_id']);
              }
            })->paginate(100);
          //->orWhere('summary', 'like', "%" . $keyword . "%")
        }else {
          return [];
        }
    }

    function api_upload(Request $request){
      $imgs = "";
      $path = $request->path;
      $path_dir = "upload/".$path."/";
      if ($request->hasFile('file')) {
        $image = $request->file('file');
        $img_name = $request->name;
        $image->move(public_path($path_dir), $img_name);
        $imgs = $img_name;
        $mp3 = substr($img_name, 0, -3).'mp3';
        if($request->audio){
          $ffmpeg = \FFMpeg\FFMpeg::create(array(
            'ffmpeg.binaries'  => '/usr/bin/ffmpeg',
            'ffprobe.binaries' => '/usr/bin/ffprobe',
          ));
          $video = $ffmpeg->open($path_dir.$img_name);
          // Set an audio format
          $audio_format = new \FFMpeg\Format\Audio\Mp3();
          // Extract the audio into a new file as mp3
          $video->save($audio_format, $path_dir.$mp3);

          if (file_exists($path_dir.$img_name)) {
              File::delete($path_dir.$img_name);
          }
          return json_encode($mp3);
        }else {
          // open file a image resource
          $img = Image::make( public_path($path_dir.$img_name) , 75);
          $imgOrigin = Image::make( public_path($path_dir.$img_name) , 75);
          // crop image
          $img->resize(200, null, function ($constraint) {
              $constraint->aspectRatio();
          });
          $img->crop(200, 142, null, null);
          $img->save(public_path($path_dir."cache/".$img_name));

          //Image 2
          $imgOrigin->resize(1200, null, function ($constraint) {
              $constraint->aspectRatio();
          });
          $imgOrigin->save(public_path($path_dir.$img_name));
        }
      }
      return json_encode($imgs);
    }

    function api_delete(Request $request){
        DB::table('products')->where('id', $request->id)->delete();
    }

}
