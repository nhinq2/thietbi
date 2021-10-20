<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//auth
Route::group(['middleware' => 'guest:api'], function () {

  Route::post('product/post', 'Api\ProductController@api_post');
  Route::post('product/upload', 'Api\ProductController@api_upload');
  Route::get('product_all', 'Api\ProductController@api_all');
  Route::get('products', 'Api\ProductController@api_list');
  Route::get('search', 'Api\ProductController@api_search');
  Route::post('product/delete', 'Api\ProductController@api_delete');

  Route::get('categories', 'Api\CategoryController@api_list');
  Route::get('category/{id}', 'Api\CategoryController@api_sublist');

  Route::post('order', 'Api\OrderController@api_post');
  Route::post('order/update', 'Api\OrderController@api_update');
  Route::get('orders', 'Api\OrderController@api_list');

  Route::post('wallet', 'Api\WalletController@api_post');
  Route::get('wallet', 'Api\WalletController@api_list');

  Route::post('user', 'Api\UserController@api_post');
  Route::get('user', 'Api\UserController@api_user');
  Route::post('user/device', 'Api\UserController@api_device');

});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Api\UserController@login')->name('login');
    Route::post('register', 'Api\UserController@api_post')->name('register');
    Route::post('social/login', 'Auth\LoginController@socialLogin')->name('socialLogin');

    Route::post('password/email', 'Api\UserController@sendResetLinkEmail');
    Route::post('password/reset', 'Api\UserController@reset');

    Route::get('email/search', 'Api\UserController@email');
    Route::post('user/password', 'Api\UserController@password');
    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});

Route::post('image_upload', 'PageController@apiImageUpload');
Route::get('addcart', 'ProductController@addCart');
