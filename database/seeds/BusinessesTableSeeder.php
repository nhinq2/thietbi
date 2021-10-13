<?php

use App\Models\Business;
use Illuminate\Database\Seeder;

class BusinessesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Business::create([
            "image_link" => "t1.jpg",
            "name"       => "Công Ty TNHH EMPORIO",
            "address"    => "218 Minh Khai, Hoàng Mai, Hai Bà Trưng, Hà Nội",
            "business"   => "Khách sạn đầu tư nước ngoài",
        ]);

        Business::create([
            "image_link" => "t2.jpg",
            "name"       => "Công Ty TNHH Dịch Vụ VietTime",
            "address"    => "218 Minh Khai, Hoàng Mai, Hai Bà Trưng, Hà Nội",
            "business"   => "Khách sạn đầu tư nước ngoài",
        ]);

        Business::create([
            "image_link" => "t3.jpg",
            "name"       => "Công Ty TNHH EMPORIO",
            "address"    => "218 Minh Khai, Hoàng Mai, Hai Bà Trưng, Hà Nội",
            "business"   => "Khách sạn đầu tư nước ngoài",
        ]);

        Business::create([
            "image_link" => "t3.jpg",
            "name"       => "Công Ty TNHH EMPORIO",
            "address"    => "218 Minh Khai, Hoàng Mai, Hai Bà Trưng, Hà Nội",
            "business"   => "Khách sạn đầu tư nước ngoài",
        ]);
    }
}
