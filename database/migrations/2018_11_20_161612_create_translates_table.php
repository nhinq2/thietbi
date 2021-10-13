<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('translates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('language');
            $table->string('app');
            $table->unsignedInteger('app_id');
            $table->unsignedInteger('trans_id');
            $table->timestamps();
        });
        Schema::table('blogs', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
       Schema::table('pages', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
       Schema::table('products', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
       Schema::table('categories', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
       Schema::table('menus', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
       Schema::table('sliders', function (Blueprint $table) {
           $table->string('language')->default('vi');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('translates');
    }
}
