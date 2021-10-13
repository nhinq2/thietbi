<nav class="navbar navbar-expand-md navbar-light fixed-top bg-light py-0 border-bottom">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">
          <div class="text-wrap text-success d-flex align-middle">
            <img class="mt-1 d-none d-sm-block" src="{{ asset('images/logo.png') }}" width="48"/>
            <span class="d-block d-sm-none">
              <img class="mt-1" src="{{ asset('images/logo.png') }}" width="38"/>
            </span>
            <div class="ml-4">
              <span class="d-block mt-1-xs">{{ config('app.name', 'Laravel') }}</span>
              <span class="small text-dark d-none d-sm-block">{!! @$settings['slogan-'.$locale] !!}</span>
            </div>
          </div>
        </a>
        <button class="navbar-toggler d-none" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent">
            <span class="fa -fa-search text-dark"></span>
        </button>

        <div class="navbar-collapse" id="navbarContent">
            <!-- Left Side Of Navbar -->

          <form class="form-inline mt-2 mt-md-0 w-50 d-none d-sm-block" method="GET" action="/search">
            @csrf
            <div class="input-group rounded-pill border bg-white">
              <input class="form-control border-0 search-input w50-xs ml-2 rounded-pill" name="keyword" type="search" placeholder="Nhập từ khóa" aria-label="Nhập từ khóa" aria-describedby="basic-addon1">
              <div class="input-group-apppend">
                <button class="btn border-0" id="basic-addon1" type="submit">
                  <span class="fa fa-search text-secondary"></span>
                </button>
              </div>
            </div>
          </form>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto align-middle flex-row d-flex justify-content-between">
                <!-- Authentication Links -->
                    <li class="nav-item w50-xs lead">
                        <a class="nav-link font-weight-bold text-danger" href="/gio-hang"><i class="fa fa-cart-arrow-down fa-w-18 fs-4 font-weight-bold"></i> Giỏ hàng <span class="badge badge-secondary">
                          <label class="display-6 mb-0">{{\Cart::instance('shopping')->total()}}đ</label>
                        </span></a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link text-center" href="tel:{!! @$settings['hotline-'.$locale] !!}"><i class="fa fa-phone fa-w-18 fs-4"></i> {!! @$settings['hotline-'.$locale] !!} <span class="small text-secondary d-block">({!! @$settings['time-'.$locale] !!})</span></a>

                    </li>
                <li class="nav-item pl-2 d-block d-sm-none mt-2 pull-right">
                  <a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fas fa-search"></i>
                  </a>
                </li>
            </ul>
            <form id="collapseExample" class="collapse form-inline mt-2 mt-md-0 mr-auto" method="GET" action="/vi/search">
              @csrf
              <div class="input-group rounded-pill border bg-white">
                <input class="form-control border-0 search-input w50-xs ml-2 rounded-pill" name="keyword" type="search" placeholder="Nhập từ khóa" aria-label="Nhập từ khóa" aria-describedby="basic-addon1">
                <div class="input-group-apppend">
                  <button class="btn border-0" id="basic-addon1" type="submit">
                    <span class="fa fa-search text-secondary"></span>
                  </button>
                </div>
              </div>
            </form>
        </div>
    </div>
</nav>
