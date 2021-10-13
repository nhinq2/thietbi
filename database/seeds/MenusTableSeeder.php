<?php

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Main menu
        Menu::create([
            'name'      => 'Giải pháp nhà thông minh',
            'parent_id' => 0,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Sản phẩm dịch vụ',
            'parent_id' => 0,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Tư vấn hỗ trợ',
            'parent_id' => 0,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Liên hệ Smartmep',
            'parent_id' => 0,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Giải pháp nhà thông minh
        Menu::create([
            'name'      => 'Biệt thự',
            'parent_id' => 1,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Nhà phố',
            'parent_id' => 1,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Chung cư',
            'parent_id' => 1,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Sản phẩm dịch vụ
        Menu::create([
            'name'      => 'ABB',
            'parent_id' => 2,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Camera',
            'parent_id' => 2,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Cổng tự động',
            'parent_id' => 2,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Chuông cửa màn hình',
            'parent_id' => 2,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Tư vấn hỗ trợ
        Menu::create([
            'name'      => 'Câu hỏi thường gặp',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Tài liệu hướng dẫn',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Chính sách bảo hành',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Bảng giá sản phẩm',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Giải pháp',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hỗ trợ sau mua hàng',
            'parent_id' => 3,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Biệt thự
        Menu::create([
            'name'      => 'Chiếu sáng thông minh',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Âm thanh đa vùng',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống an ninh',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống camera giám sát',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống rèm cửa',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống đa phương tiện',
            'parent_id' => 5,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Nhà phố
        Menu::create([
            'name'      => 'Chiếu sáng thông minh',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Âm thanh đa vùng',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống an ninh',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống camera giám sát',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống rèm cửa',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống đa phương tiện',
            'parent_id' => 6,
            'sort'      => 0,
            'link'      => '/',
        ]);

        //Chung cư
        Menu::create([
            'name'      => 'Chiếu sáng thông minh',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Âm thanh đa vùng',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống an ninh',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống camera giám sát',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống rèm cửa',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);

        Menu::create([
            'name'      => 'Hệ thống đa phương tiện',
            'parent_id' => 7,
            'sort'      => 0,
            'link'      => '/',
        ]);
    }
}
