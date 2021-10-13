@extends('layouts.web')

@section('metatag')
<title>{{ $page->title }}</title>
<meta name="description" content="{{ $page->summary }}">
<meta itemprop="keywords" content="{{ $page->keywords }}" />
<meta itemprop="thumbnailUrl" property="og:image" content="{{ asset('upload/page/' . $page->image_link) }}" />
<meta itemprop="image" content="{{ asset('upload/page/' . $page->background_url) }}" />
<meta itemprop="url" property="og:url" content="{{ url()->full() }}" />
<meta property="article:section" content="Kinh doanh" />
<meta property="article:author" content="Opic" />
<meta property="og:type" content="article" />
<meta property="og:title" content="{{ $page->title }}" />
<meta property="og:site_name" content="OPIC & ASSOCIATES">
<meta property="og:description" content="{{ $page->summary }}" />
@endsection

@section('content')
<main role="main" class="container my-4">
  <div class="row">
    <div class="col-sm-10 mx-auto">
      <div class="p-3 bg-white rounded shadow-sm">
        <h3>{{ $page->title }}</h3>
            {!! $page->content !!}
      </div>
   </div>
  </div>
</main>

@endsection
