@extends('layouts.web')
@section('metatag')
    <meta name="description" content="{!!@$settings['X5PxGhYCv2Jx0B6BNpdD']!!} - {!!@$settings['7SZlRqBm5ON1NjUDz9Qt']!!}">
    <title>Blog's {!!@$settings['7SZlRqBm5ON1NjUDz9Qt']!!}</title>
@endsection
@section('content')
<!-- ========== MAIN CONTENT ========== -->
<div class="container sp">
  <div class="breadcrumb">
    <a href="{{ route('home') }}" title="Trang chủ">Home</a>
    <a href="{{ route('blog.index') }}" title="">Tin tức</a>
  </div>
  <div class="d-flex justify-content-between sp_main">
    <div class=" container">
      <div class="row list-30 mb-9 mt-2">
        @foreach ($blogs as $blog)
          <!--- col --->
          <div class="col-6 col-lg-6 p-lg-4 mb-lg-0 p-5">
            <div class="card-body row align-items-stretch no-gutters p-0">
              <!-- News Blog Card -->
              <div class="col-7 border border-right-0 rounded-left">
                <div class="p-5">
                  <h2 class="h6 font-weight-n mb-1 ">
                    <a href="{{ route('blog.show', $blog->slug) }}">{{ $blog->title }}</a>
                  </h2>
                  <p class="mb-0 smin">{{ $blog->summary }}</p>
                </div>
              </div>
              <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="{{ $blog->photo() }}" style="background-image: url('{{ $blog->image_link }}');"></div>
            </div>
          </div>
          <!---end code --->
        @endforeach
      </div>
    </div>
  </div>
</div>
<!-- End Hero Section -->
@endsection
