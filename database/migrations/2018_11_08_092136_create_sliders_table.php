<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSlidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sliders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('background_image');
            $table->string('image_link');
            $table->text('summary')->nullable();
            $table->text('content')->nullable();
            $table->string('url')->nullable();
            $table->integer('sort')->default(0);
            $table->integer('is_display')->default(0);
            $table->enum('position', ['left', 'right'])->default('left');
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
        Schema::dropIfExists('sliders');
    }
}
