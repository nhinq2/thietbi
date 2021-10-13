@extends('layouts.web')

@section('metatag')
<title>{{$blog->title}}</title>
<meta name="description" content="{{$blog->summary}}">
<meta itemprop="keywords" content="{{ $blog->keywords }}" />
<meta itemprop="thumbnailUrl" property="og:image" content="{{ asset('upload/blog/' . @$blog->image_link) }}" />
<meta itemprop="image" content="{{ asset('upload/blog/' .@$blog->image_link) }}" />
<meta itemprop="url" property="og:url" content="{{url()->full()}}" />
<meta property="article:section" content="Kinh doanh" />
<meta property="article:author" content="Opic" />
<meta property="og:type" content="article" />
<meta property="og:title" content="{{$blog->title}}" />
<meta property="og:site_name" content="OPIC & ASSOCIATES">
<meta property="og:description" content="{{$blog->summary}}" />
@endsection

@section('content')
<main id="content" role="main">
    <!-- Hero Section -->
    <div class="js-slick-carousel u-slick" data-infinite="true" data-autoplay="true" data-speed="7000" data-fade="true"
        data-adaptive-height="true"
        data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
        data-arrow-left-classes="fa fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4"
        data-arrow-right-classes="fa fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4"
        data-numbered-pagination="#slickPaging">
        <!-- Slide #1 -->
        <div class="js-slide">
            <div class="d-md-flex align-items-md-center height-100vh--lg gradient-overlay-half-dark-v2 bg-img-hero img-responsive"
                style="background:url('{{ $blog->photo() }}')no-repeat;
                    background-size:100%;
                    height: 500px;
                    display:block;
                    padding:0 !important;
                    margin:0;">
                <div class="container text-center space-2-top">
                    <!-- Description -->
                    <div class="w-lg-80 mx-lg-auto mb-3">
                        <h1 class="display-3 font-size-48--md-down font-weight-medium text-white mb-3">
                            {{ $blog->title }}
                        </h1>
                    </div>
                    <div class="w-lg-50 mx-lg-auto mb-7">
                        <p class="lead text-warning text-uppercase" id="bietthu1" style="font-weight: 700;"
                            data-scs-animation-in="fadeInUp" data-scs-animation-delay="200">
                            {{ $blog->summary }}</p>
                    </div>
                    <div data-scs-animation-in="fadeInUp" data-scs-animation-delay="400">
                        <a class="btn btn-light" href="/lien-he">Liên hệ</a>
                    </div>
                    <!-- End Description -->
                </div>
            </div>
        </div>
        <!-- End Slide #1 -->
    </div>
    <!-- End Hero Section -->

    <section class="py-5 bg_xam">
        <div class="container">
            <div class="row bg_trang py-3">
                <div class="col-md-12">
                    {!! $blog->content !!}
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    @include('layouts.partials.feedback')
    <!-- End CTA -->
</main>
@endsection
