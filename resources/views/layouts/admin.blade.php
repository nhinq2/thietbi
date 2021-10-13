<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('images/logo.png') }}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/font-awesome/css/all.min.css') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/summernote.css')}}">
    <link rel="stylesheet" href="{{ asset('css/nestable.css')}}">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="{{ asset('js/summernote.min.js')}}"></script>
    <script src="{{ asset('js/select2.full.min.js')}}"></script>
    <script src="{{ asset('js/admin.js')}}"></script>
</head>
<body>
    <div id="app">
      <main role="main" class="container">
      <nav class="navbar flex-md-nowrap shadow mb-2">
        <div class="navbar-brand col-sm-4 col-md-3 mr-0">
          <a class="" href="/admin"><i class="fa fa-user-shield"></i> Quản lý</a>
          <a class="ml-2" href="/"><i class="fa fa-globe-asia"></i> {{ config('app.name', 'Laravel') }}</a>
        </div>
          <form class="form-inline mt-2 mt-md-0 mr-auto" method="GET" action="/vi/search">
            @csrf
            <input class="form-control mr-sm-2 rounded-pill search-input" name="keyword" type="search" placeholder="Nhập từ khóa" aria-label="Nhập từ khóa">
            <button class="btn btn-outline-success my-2 my-sm-0 rounded-pill" type="submit">
              <span class="fa fa-search"></span> Tìm kiếm
            </button>
          </form>
          <ul class="navbar-nav px-3">
              <li class="nav-item text-nowrap">
                  <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                   document.getElementById('logout-form').submit();">Sign out</a>
              </li>
          </ul>
          <form id="logout-form" data-uid="@if(Auth::user()) Auth::user()->id @endif" action="{{ route('logout') }}"
              method="POST" style="display: none;">
              {{ csrf_field() }}
          </form>
          <button class="navbar-toggler d-block d-sm-none" type="button" data-toggle="collapse" data-target="#navbarContent"
              aria-controls="navbarContent">
              <span class="navbar-toggler-icon text-dark"><i class="fa fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse px-3" id="navbarContent">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link active" href="/admin/order/list">
                          <i class="fa fa-file-invoice"></i>
                          Đơn hàng
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/product/list">
                          <i class="fa fa-shopping-bag"></i>
                          Sản phẩm
                      </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="/admin/category/list">
                          <i class="fa fa-store"></i>
                          Danh mục
                      </a>
                  </li>
                  <li class="nav-item d-none">
                      <a class="nav-link" href="/admin/portfolio/list">
                          <span data-feather="file-text"></span>
                          Dự án
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/blog/list">
                          <i class="fa fa-rss"></i>
                          Blog
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('comments.index') }}">
                          <i class="fa fa-comments"></i>
                          Nhận xét
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/page/list">
                          <i class="fa fa-square"></i>
                          Trang
                      </a>
                  </li>
                  <li class="nav-item d-none">
                      <a class="nav-link" href="/admin/businesses/list">
                          <span data-feather="file-text"></span>
                          Logo
                      </a>
                  </li>
                  <li class="nav-item d-none">
                      <a class="nav-link" href="/admin/slider/list">
                          <span data-feather="file-text"></span>
                          Slider
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/menu">
                          <i class="fa fa-bars"></i>
                          Menu
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/settings">
                          <i class="fa fa-cog"></i>
                          Cài đặt
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/admin/password">
                          <i class="fa fa-unlock-alt"></i>
                          Mật khẩu
                      </a>
                  </li>
              </ul>

          </div>
      </nav>
      <div class="row">
        <div class="col-sm-3 d-none d-sm-block">
          <ul class="nav flex-column">
            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Quản lý</span>
            </h6>
              <li class="nav-item">
                  <a class="nav-link active" href="/admin/order/list">
                      <i class="fa fa-file-invoice"></i>
                      Đơn hàng
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/admin/product/list">
                      <i class="fa fa-shopping-bag"></i>
                      Sản phẩm
                  </a>
              </li>

              <li class="nav-item">
                  <a class="nav-link" href="/admin/category/list">
                      <i class="fa fa-store"></i>
                      Danh mục
                  </a>
              </li>
              <li class="nav-item d-none">
                  <a class="nav-link" href="/admin/portfolio/list">
                      <span data-feather="file-text"></span>
                      Dự án
                  </a>
              </li>
          </ul>

          <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Trang</span>
              <a class="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
              </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <a class="nav-link" href="/admin/blog/list">
                    <i class="fa fa-rss"></i>
                    Blog
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('comments.index') }}">
                    <i class="fa fa-comments"></i>
                    Nhận xét
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/page/list">
                    <i class="fa fa-square"></i>
                    Trang
                </a>
            </li>
            <li class="nav-item d-none">
                <a class="nav-link" href="/admin/businesses/list">
                    <span data-feather="file-text"></span>
                    Logo
                </a>
            </li>
            <li class="nav-item d-none">
                <a class="nav-link" href="/admin/slider/list">
                    <span data-feather="file-text"></span>
                    Slider
                </a>
            </li>
              <h6
                  class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Cài đặt</span>
              </h6>
              <li class="nav-item">
                  <a class="nav-link" href="/admin/menu">
                      <i class="fa fa-bars"></i>
                      Menu
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/admin/settings">
                      <i class="fa fa-cog"></i>
                      Cài đặt
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/admin/password">
                      <i class="fa fa-unlock-alt"></i>
                      Mật khẩu
                  </a>
              </li>
          </ul>
          <div class="text-center">Ngôn ngữ: {{Session::get('locale')}}</div>
        </div>
        <div class="col-sm-9">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
            @yield('content')
          </div>
       </div>
      </div>
      </main>
    </div>
</body>
</html>
