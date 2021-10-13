<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sku');
            $table->string('title');
            $table->string('image_link')->nullable();
            $table->text('summary')->nullable();
            $table->text('content')->nullable();
            $table->integer('price')->nullable();
            $table->integer('category_id')->nullable();
            $table->string('slug')->nullable();
            $table->integer('is_special')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('city_id')->nullable();
            $table->integer('district_id')->nullable();
            $table->integer('ward_id')->nullable();
            $table->integer('discount')->nullable();
            $table->string('unit')->nullable();
            $table->integer('viewed')->nullable();
            $table->boolean('hot')->default(0)->nullable();
            $table->timestamp('last_seen')->nullable();
            $table->string('madein')->nullable();
            $table->integer('price2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
