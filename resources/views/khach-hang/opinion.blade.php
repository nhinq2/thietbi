@extends('layouts.web')
@section('metatag')
<title>OPIC & ASSOCIATES - Ý kiến khách hàng</title>
<meta name="description" content="">
@endsection
@section('content')
<div class="container sp">
  <div class="breadcrumb">
    <a href="{{ route('home') }}" title="Trang chủ">Home</a>
    <a href="{{ route('khach_hang.index') }}" title="Khách hàng">Khách hàng</a>
    <a href="{{ route('khach_hang.opinion') }}" title="Ý kiến khách hàng">Ý kiến khách hàng</a>
  </div>
  <div class="d-flex justify-content-between sp_main">
    <div class=" container">
      	<!-- Testimonials Section -->
	    <div class="p-5">
	        <div class="bg-secondary shadow-lg p-5 p-md-9">
	            <div class="position-relative w-md-80 w-lg-60 text-center mx-md-auto mb-1">
	                <div class=" text-center">
	                    <h2 class="h2 font-weight-bold border-bt">KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2>
	                </div>
	                <div class="position-absolute-top-left-0--md">
	                    <!-- SVG Quote -->
	                    <!-- End SVG Quote -->
	                </div>
	                <div class="space-1-top">
	                    <!-- Slick Carousel -->
	                    <div class="js-slick-carousel u-slick" data-infinite="true" data-autoplay="true" data-speed="5000" data-fade="true" data-pagi-classes="u-slick__pagination u-slick__pagination mt-4 mb-0">
	                        @foreach ($khachhang as $page)
	                        <div class="js-slide">
	                            <!-- Testimonials -->
	                            <img class="img-nxet u-lg-avatar avatar-max rounded-circle mx-auto mb-4" src="{{ $page->photo() }}" alt="{{ $page->title }}">
	                            <blockquote class="h5 font-weight-light mb-5">“{!! $page->content !!}”</blockquote>
	                            <h3 class="h5 font-weight-bold mb-0">{{ $page->title }}</h3>
	                            <p class="d-block">{!! $page->summary !!}</p>
	                            <div class="list-star">
	                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
	                            </div>
	                            <!-- End Testimonials -->
	                        </div>
	                        @endforeach
	                    </div>
	                    <!-- End Slick Carousel -->
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- End Testimonials Section -->
    </div>
  </div>
</div>
@endsection
