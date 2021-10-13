<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call([
            MenusTableSeeder::class,
            // PagesTableSeeder::class,
            UsersTableSeeder::class,
            // SlidersTableSeeder::class,
            // BlogsTableSeeder::class,
            // CategoriesTableSeeder::class,
            // BusinessesTableSeeder::class,
        ]);
    }
}
