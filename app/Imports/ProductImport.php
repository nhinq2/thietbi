<?php

namespace App\Imports;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Auth;

class ProductImport implements ToCollection
{

    public function collection(Collection $rows)
    {
      $i = 0;
      foreach ($rows as $row)
      {
        $i++; if($i==1) continue; //next row
        if(! empty($row[0])){
          $product = Product::where('sku', $row[1])->first();
          $images = str_replace(" ", "", @$row[6]);
          $imgs = explode("|",trim($images));
          $data = [
            'title' => (string) @$row[0],
            'sku' => (string) @$row[1],
            'content' => @$row[9],
            'summary' => '',
            'price' => (integer) $row[3] ?? str_replace(',', '', $row[3]),
            'price2' => (integer) $row[4] ?? str_replace(',', '', $row[4]),
            'madein' => (string) @$row[5],
            'category_id' => (integer) $this->get_category((string) @$row[2]),
            'image_link' => json_encode($imgs),
            'is_special' => 0,
            'discount' => (integer) @$row[7],
            'unit' => (string) @$row[8]
          ];
          //dd($data);
          if(!$product){
            $product = Product::create($data);
          }else{
            $product->update($data);
          }
        }
      }
    }

    function get_category($name){
      $category = Category::where('name', $name)->first();
      if(!$category && !empty($name)){
        $category = Category::create([
             'name' => $name,
             'icon' => 'fas fa-carrot',
             'sortable' => 0,
             'parent_id' => 0
         ]);
      }
      return @$category->id;
    }

}
