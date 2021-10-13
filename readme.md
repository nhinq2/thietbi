## Cấu trúc Website cơ bản

## Base
-	BaseController
-	Base chứa global biến cho toàn website, tất cả các controller khác kế thừa Controller này.
-	Base chứa menu và global settings từ controller Settings.
## Menu
-	MenuController
-	Model Menu: Models/menu
-	Views: resources/views/menu
-	Backend: /admin/menu
-	Frontend: xem header.balde.php
## Settings
-	SettingsController
-	Model Menu: Models/Settings
-	Views: resources/views/settings
-	Backend: /admin/settings
-	Front End: {!!@$settings['key-alias']!!} , với key-alias là một token cố định, xem footer.blade.php

## Page
-	PageController
-	Model Menu: Models/Page
-	Views: resources/views/page
-	Backend: /admin/page/list
-	Font-end: /{alias}
- 	Hình ảnh: /upload/page/[ten-hinh-anh]

## Blog
-	BlogController
-	Model Menu: Models/Blog
-	Views: resources/views/blog
-	Backend: /admin/page/list
-	Font-end: /blog , /blog/{alias}
- 	Hình ảnh: /upload/blog/[ten-hinh-anh]

## Slider
-	SliderController
-	Model Menu: Models/Slider
-	Views: resources/views/slider
-	Backend: /admin/slider/list

## Product
-	SliderController
-	Model Menu: Models/Product
-	Views: resources/views/product
-	Backend: /admin/product/list
-	Font-end: /san-pham , /san-pham/{alias}
- 	Hình ảnh: /upload/product/[ten-hinh-anh]

## HomeController
-	Controller này để load dữ liệu ra trang chủ từ nhiều models khác nhau: pages. Blog, product, slider….

## Installation
- git clone git@bitbucket.org:novaio/opic.git
- copy .env.example .env
- composer install
- php artisan migrate
- composer dump-autoload
- php artisan db:seed
- php artisan serve
- Development at http://localhost:8000

## Development
- git checkout -b YourName
- git add .
- git commit -m "your comment"
- git push origin YourName

# Pull Request
- Create a pull request
- Waiting admin merge to master

#Enjoy
