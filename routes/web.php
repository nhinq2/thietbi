<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::get('language/{locale}', 'TranslateController@locale');

Route::get('/mp3', function () {
    $ffmpeg = \FFMpeg\FFMpeg::create(array(
      'ffmpeg.binaries'  => '/usr/bin/ffmpeg',
      'ffprobe.binaries' => '/usr/bin/ffprobe',
  ));
  $video = $ffmpeg->open('./QVzoIBS4LC.mp4');
  // Set an audio format
  $audio_format = new \FFMpeg\Format\Audio\Mp3();
  // Extract the audio into a new file as mp3
  $video->save($audio_format, './audio.mp3');
});


Auth::routes();
//Route::group(['prefix' => 'admin/'], function () {
Route::group(['prefix' => 'admin/', 'middleware' => 'auth'], function () {
    Route::get('/', 'OrderController@list');

    Route::get('/translate/{app}/{app_id}/{language}', 'TranslateController@create');

    Route::prefix('/menu')->group(function () {
        Route::get('/', 'MenuController@list');
        Route::post('/store', 'MenuController@store');
    });

    Route::prefix('/password')->group(function () {
        Route::get('/', 'SettingsController@password');
        Route::post('/store', 'SettingsController@password_store')->name('admin.password_store');
    });

    Route::prefix('/settings')->group(function () {
        Route::get('/', 'SettingsController@list');
        Route::get('/read', 'SettingsController@read');
        Route::get('/write', 'SettingsController@write');
        Route::post('/store', 'SettingsController@store');
    });

    Route::prefix('/blog')->group(function () {
        Route::get('/create', 'BlogController@create');
        Route::get('/{id}/edit', 'BlogController@edit');
        Route::get('/{id}/delete', 'BlogController@delete');
        Route::post('/store', 'BlogController@store');
        Route::post('/update', 'BlogController@update');
        Route::get('/list', 'BlogController@list');
    });

    Route::prefix('/comments')->group(function () {
        Route::get('/', 'CommentController@index')->name('comments.index');
        Route::get('/{comment}', 'CommentController@show')->name('comments.show');
        Route::get('/{comment}/delete', 'CommentController@destroy')->name('comments.delete');
    });

    Route::prefix('/page')->group(function () {
        Route::get('/create', 'PageController@create');
        Route::get('/{id}/edit', 'PageController@edit');
        Route::get('/{id}/clone', 'PageController@edit');
        Route::get('/{id}/delete', 'PageController@delete');
        Route::post('/store', 'PageController@store');
        Route::post('/update', 'PageController@update');
        Route::get('/list', 'PageController@list');
        Route::get('/read', 'PageController@read');
    });

    Route::prefix('/businesses')->group(function () {
        Route::get('/list', 'BusinessController@list')->name('admin.businesses.list');
        Route::get('/create', 'BusinessController@create')->name('admin.businesses.create');
        Route::post('/', 'BusinessController@store')->name('admin.businesses.store');
        Route::get('/{business}/edit', 'BusinessController@edit')->name('admin.businesses.edit');
        Route::put('/{business}', 'BusinessController@update')->name('admin.businesses.update');
        Route::delete('/{business}', 'BusinessController@destroy')->name('admin.businesses.delete');
    });

    Route::prefix('/product')->group(function () {
        Route::get('/create', 'ProductController@create');
        Route::get('/{id}/edit', 'ProductController@edit');
        Route::get('/{id}/delete', 'ProductController@delete');
        Route::post('/store', 'ProductController@store');
        Route::post('/update', 'ProductController@update');
        Route::get('/list', 'ProductController@list');
        Route::get('/load', 'ProductController@loadproduct');
        Route::get('/import', 'ProductController@import_form')->name('import_product');
        Route::post('/import', 'ProductController@import_product');
        Route::get('/upload', 'ProductController@upload_form')->name('upload_image');
        Route::post('/upload', 'ProductController@upload_image');
    });

    Route::prefix('/category')->group(function () {
        Route::get('/create', 'CategoryController@create');
        Route::get('/{id}/edit', 'CategoryController@edit');
        Route::get('/{id}/delete', 'CategoryController@delete');
        Route::post('/store', 'CategoryController@store');
        Route::post('/update', 'CategoryController@update');
        Route::get('/list', 'CategoryController@list');
        Route::get('/load', 'CategoryController@loadcatagory');
    });

    Route::prefix('/slider')->group(function () {
        Route::get('/create', 'SliderController@create');
        Route::post('/', 'SliderController@store');
        Route::get('/{id}/edit', 'SliderController@edit');
        Route::get('/{id}/delete', 'SliderController@delete');
        Route::post('/update', 'SliderController@update');
        Route::get('/list', 'SliderController@list');
    });

    Route::prefix('/portfolio')->group(function () {
        Route::get('/create', 'PortfolioController@create');
        Route::get('/{id}/edit', 'PortfolioController@edit');
        Route::get('/{id}/delete', 'PortfolioController@delete');
        Route::post('/store', 'PortfolioController@store');
        Route::post('/update', 'PortfolioController@update');
        Route::get('/list', 'PortfolioController@list');
        Route::get('/load', 'PortfolioController@loadportfolio');
    });

    Route::prefix('/order')->group(function () {
        Route::get('/list', 'OrderController@list');
    });

});

Route::get('/print', 'OrderController@printBill');

Route::get('/', function () {
    return redirect(Session::get('locale', 'vi'));
});

Route::get('/home', function () {
    return redirect('admin');
});

    Route::get('/', 'HomeController@app')->name('home');
    Route::get('/app', 'HomeController@app')->name('app');

    Route::get('lien-he', 'HomeController@contact')->name('contact');

    Route::group(['prefix' => 'blog'], function () {
        Route::get('/', 'BlogController@index')->name('blog.index');
        Route::get('{alias}', 'BlogController@show')->name('blog.show');
    });

    Route::group(['prefix' => 'blogs'], function () {
        Route::get('/{alias}', 'BlogController@category')->name('category.show');
    });

    Route::group(['prefix' => 'comments'], function () {
        Route::post('store', 'CommentController@store')->name('comments.store');
    });

    Route::group(['prefix' => 'san-pham/'], function () {
        Route::get('/', 'ProductController@index');
        Route::get('/{alias}', 'ProductController@show')->name('product.show');
    });

    Route::group(['prefix' => 'portfolio/'], function () {
        Route::get('/', 'PortfolioController@index');
        Route::get('/{alias}', 'PortfolioController@show');
    });

    Route::group(['prefix' => 'danh-muc/'], function () {
        Route::get('/', 'CategoryController@index');
        Route::get('/{slug}', 'ProductController@productshow');
    });

    Route::group(['prefix' => 'search/'], function () {
        Route::get('/', 'PageController@search');
    });

    Route::group(['prefix' => 'gio-hang/'], function () {
        Route::get('/', 'OrderController@cart')->name('cart');
    });


    Route::get('/don-hang', 'OrderController@user_order');
    Route::get('/create_order/{id}', 'OrderController@create_order');
    Route::post('/user_order_phone', 'OrderController@user_order_phone')->name('user_order_phone');


    Route::get('/cart', 'OrderController@addCart')->name('addcart');
    Route::post('/updatecart', 'OrderController@updateCart')->name('updatecart');
    Route::post('/getcart', 'OrderController@addCart')->name('getcart');
    Route::get('/removecart', 'OrderController@removeCart')->name('removecart');

    Route::group(['prefix' => 'thanh-toan/'], function () {
        Route::get('/', 'OrderController@checkout');
        Route::get('/pdf', 'OrderController@order')->name('order.pdf');
        Route::post('/complete', 'OrderController@order')->name('order');
        Route::get('/show/{id}', 'OrderController@show')->name('order.show');
    });

    Route::group(['prefix' => '/'], function () {
        Route::get('{alias}', 'PageController@show')->name('pages.show');
    });


Route::post('/send', 'HomeController@send')->name('send');
