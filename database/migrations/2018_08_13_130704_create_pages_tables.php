<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->enum('type', ['base', 'banner', 'solution', 'service']);
            $table->string('image_link')->nullable();
            $table->text('summary')->nullable();
            $table->text('content')->nullable();
            $table->string('slug')->nullable();
            $table->string('attachs')->nullable();
            $table->integer('parent_id')->default(0);
            $table->string('youtube')->nullable();
            $table->string('background_url')->nullable();
            $table->string('float')->nullable();
            $table->integer('is_front')->default(0);
            $table->string('keywords')->nullable();
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
        Schema::dropIfExists('pages');
    }
}
