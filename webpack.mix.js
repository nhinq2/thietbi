const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.styles([
     'public/css/style.css',
     'public/css/slick.css',
     'public/css/slick-theme.css'
 ], 'public/css/site.min.css');

 mix.scripts([
   // JS Global Compulsory
   'public/js/jquery-2.2.4.min.js',
   'public/assets/vendor/bootstrap/bootstrap.min.js',
   'public/js/slick.min.js',
   'public/js/ui.js'
 ], 'public/js/site.min.js');


 mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
