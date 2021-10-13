<?php

use Illuminate\Database\Seeder;
use App\Models\Slider;

class SlidersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Slider::create([
        	'title' => 'slider1',
        	'image_link' => '/image/hero_home_slider_01.jpg',
        ]);

        Slider::create([
        	'title' => 'slider2',
        	'image_link' => '/image/hero_home_slider_02.jpg',
        ]);

        Slider::create([
        	'title' => 'slider3',
        	'image_link' => '/image/hero_home_slider_03.jpg',
        ]);
    }
}
