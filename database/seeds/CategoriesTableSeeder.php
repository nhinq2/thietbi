<?php

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            "name"      => "Tin tức",
            "parent_id" => 0,
        ]);

        Category::create([
            "name"      => "Sự kiện",
            "parent_id" => 0,
        ]);
    }
}
