@extends('layouts.web')
@section('metatag')
<title>Công trình</title>
<meta name="description" content="Công trình đã thực hiện">
@endsection
@section('content')
<!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="gradient-half-primary-v1">
      <div class="bg-img-hero" style="background-image: url(../../assets/img/bg/bg2.png);">
        <div class="container space-2 space-4-top--lg space-3-bottom--lg">
          <div class="w-md-80 w-lg-60 text-center mx-auto">
            <!-- Title -->
            <div class="mb-5">
              <h1 class="display-4 font-size-48--md-down text-white">Công trình đã thực hiện</h1>
              <p class="lead text-white">Một số công trình tiêu biểu đã thi công.</p>
            </div>
            <!-- End Title -->

            <!-- Buttons -->
            <a class="btn btn-light btn-wide mb-2 mb-md-0 mr-sm-2" href="/gioi-thieu">Giới thiệu</a>
            <a class="btn btn-dark btn-wide mb-2 mb-md-0" href="/lien-he">Liên hệ</a>
            <!-- End Buttons -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Cubeportfolio -->
    <div class="container u-cubeportfolio space-2 space-3--lg">
      <!-- Filter -->
      <ul id="filterControls" class="list-inline cbp-l-filters-alignCenter mb-5">
        <li class="list-inline-item cbp-filter-item cbp-filter-item-active u-cubeportfolio__item" data-filter="*">Tất cả</li>
          @foreach($tags  as $tag)
            <li class="list-inline-item cbp-filter-item u-cubeportfolio__item" data-filter=".{{\Illuminate\Support\Str::slug($tag, '-')}}">{{$tag}}</li>
          @endforeach
      </ul>
      <!-- End Filter -->

      <!-- Content -->
      <div class="cbp mb-9"
            data-controls="#filterControls"
            data-animation="quicksand"
            data-caption-animation="zoom"
            data-x-gap="30"
            data-y-gap="30"
            data-media-queries='[
              {"width": 1500, "cols": 3},
              {"width": 1100, "cols": 3},
              {"width": 800, "cols": 3},
              {"width": 580, "cols": 2},
              {"width": 300, "cols": 1}
            ]'>
        @foreach($portfolios  as $portfolio)
        @php
         $pictures = json_decode($portfolio->image_link);
         $picture = @$pictures[0];
        @endphp

    <!-- Item -->
    <div class="cbp-item {{\Illuminate\Support\Str::slug($portfolio->tags, '-')}}">
      <div class="cbp-caption">
        <div class="cbp-caption-defaultWrap">
          <img src="{{ asset('upload/portfolio/'.$picture)}}" alt="{{$portfolio->title}}">
        </div>
        <div class="cbp-caption-activeWrap">
          <div class="cbp-l-caption-alignCenter d-flex align-items-end">
            <ul class="list-inline ml-auto p-3 mb-0">
              <li class="list-inline-item">
                <a class="u-icon u-icon--primary rounded-circle" href="/portfolio/{{$portfolio->slug}}">
                  <span class="fa fa-link u-icon__inner"></span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="{{ asset('upload/portfolio/'.$picture)}}">
                  <span class="fa fa-images u-icon__inner"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h2 class="h5 mb-0">{!!str_limit($portfolio->title, 30, '...')!!}</h2>
        <p class="small mb-0">{!!str_limit($portfolio->summary, 80, '...')!!}</p>
      </div>
    </div>
    <!-- End Item -->
    @endforeach
  </div>
      <!-- End Content -->

      <!-- Pagination -->
      <nav aria-label="Page navigation">
        @if( !empty( $portfolios )  )
        {{ $portfolios->links() }}
        @endif
      </nav>
      <!-- End Pagination -->
    </div>
    <!-- End Cubeportfolio -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
@endsection
