@extends('layouts.web')
@section('metatag')
<title>{{$product->title}}</title>
<meta name="description" content="{{$product->summary}}">
@endsection
@section('content')
<!-- Product Description Section -->
@php
 $pictures = json_decode($product->image_link);
@endphp
<div class="container my-2">
  @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
  @endif
  <div class="row">
    <div class="col-sm-3 col-4 p-0-xs">
      @include('layouts.partials.sidebar')
    </div>
    <div class="col-sm-9 col-8 p-0-xs">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <div class="row">
          <div class="col-lg-6 mb-7 mb-lg-0">
            <!-- Red Product Gallery -->
            <div id="redShoeProduct" data-target-group="idProductSwitcher">
              <div class="row align-items-center">
                <div class="col-12">
                  <!-- Slick Carousel - Main Shop Product -->
                  <div class="js-slick-carousel slider-for u-slick">
                       @foreach($pictures as $picture)
                         <div class="js-slide">
                           <img class="img-fluid" src="{{ asset('upload/product/'.$picture)}}" alt="{{$product->title}}">
                         </div>
                       @endforeach
                  </div>
                  <!-- End Slick Carousel - Main Shop Product -->
                </div>
                <div class="col-12 mt-2">
                  <!-- Slick Carousel - Thumbnail Shop Product -->
                  <div class="js-slick-carousel slider-nav u-slick u-slick--transform-off-lg u-slick--pagination-active-border">
                       @foreach($pictures as $picture)
                         <div class="js-slide m-1">
                           <img height="48" width="32" class="img-fluid rounded shadow u-slick--pagination-active-border__item" src="{{ asset('upload/product/cache/'.$picture)}}" alt="{{$product->title}}">
                         </div>
                       @endforeach
                  </div>
                  <!-- End Slick Carousel - Thumbnail Shop Product -->
                </div>
              </div>
            </div>
            <!-- End Red Product Gallery -->
          </div>
          <div class="col-lg-6">
            <!-- Content -->
            <div class="mb-5">
              <h1 class="font-weight-normal h3">{{$product->title}}</h1>
              <span class="d-block h4 mb-2 text-danger"><label class="text-muted">Giá: </label> {{number_format(@$product->price)}}đ</span>
              <span class="d-block mb-2 text-dark"><label class="text-muted">Giá sỉ: </label> {{number_format(@$product->price2)}}đ @if($product->discount)(mua trên {{@$product->discount}} {{@$product->unit}})@endif</span>
              <span class="d-block mb-2 text-dark"><label class="text-muted">Xuất xứ: </label> {{@$product->madein}}</span>
              <span class="d-block mb-2 text-dark"><label class="text-muted">Đơn vị tính: </label> {{@$product->unit}}</span>
              <p>{!!$product->summary!!}</p>
            </div>
            <form method="POST" action="{{ route('getcart') }}">
                @csrf
                <div class="d-flex align-middle">
                  <label class="pt-1 pr-1 text-muted">SL:</label>
                  <input type="number" class="form-control mw-90p mr-2" name="qty" value="1" step=any>
                  <input type="hidden" class="form-control mw-90p" name="id" value="{{$product->id}}">
                  <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-cart-plus"></i> Đặt hàng
                  </button>
                </div>
            </form>
            <hr class="my-4">
            <p class="my-3"><span class="d-block">Chi tiết sản phẩm: </span>{!!$product->content!!}</p>
            <!-- End Content -->
          </div>
        </div>
    </div>
    {{--
    <!-- Contacts Section -->
    <div class="pb-6 pt-2">
      <div class=" no-gutters border  ">
        <div class="bg-gray-100 ">
          <!-- Contacts Form -->
          <form class="js-validate p-5 p-md-4" action="{{ route('comments.store') }}" method="post">
            @csrf
            <!-- Title -->
            <div class="mb-5">
              <h2 class="h4 font-weight-bold">Nhận xét</h2>
            </div>
            <!-- End Title -->
            <!-- Input -->
            <div class="js-form-message mb-2">
              <div class="js-focus-state input-group form form--no-brd">
                <textarea class="form-control form__input" rows="3" name="content" required="" placeholder="Nội dung"></textarea>
              </div>
            </div>
            <!-- End Input -->
            <div class="list-form row pt-3 pb-3">
              <!-- Input -->
              <div class="js-form-message col-lg-4 mb-2">
                <div class="js-focus-state input-group form form--no-brd">
                  <input class="form-control form__input" type="text" name="fullname" required="" placeholder="Họ và tên">
                </div>
              </div>
              <!-- End Input -->
              <!-- Input -->
              <div class="js-form-message col-lg-4 mb-2">
                <div class="js-focus-state input-group form form--no-brd">
                  <input class="form-control form__input" type="email" name="email" required="" placeholder="Địa chỉ Email">
                </div>
              </div>
              <!-- End Input -->
              <!-- Input -->
              <div class="js-form-message col-lg-4 mb-2">
                <div class="js-focus-state input-group form form--no-brd">
                  <input class="form-control form__input" type="number" name="phone" required="" placeholder="Số điện thoại">
                </div>
              </div>
              <!-- End Input -->
            </div>
            <input type="hidden" name="blog_id" value="{{ $product->id }}">
              <div class="row">
                  <div class="col-md-10 col-sm-12 d-flex justify-content-end">
                      <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY') }}"></div>
                  </div>
                  <div class="col-md-2 col-sm-12">
                      <div class="d-flex justify-content-end mt-3">
                          <button type="submit" class="btn btn-primary btn-wide btn-sm">Bình luận</button>
                      </div>
                  </div>
              </div>
          </form>
          <!-- End Contacts Form -->
        </div>
      </div>
    </div>
    <!-- End Contacts Section -->
    --}}
    <div class="my-3">
      <h5 class="mt-5 border-bottom border-gray mb-3 text-secondary text-uppercase">Sản phẩm khác</h5>
      @include('layouts.partials.items')
    </div>
   </div>
  </div>
</div>
<!-- End Product Description Section -->
<!-- JS Plugins Init. -->
<script>
  $(document).on('ready', function () {
    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     focusOnSelect: true
    });

  });
</script>
@endsection
