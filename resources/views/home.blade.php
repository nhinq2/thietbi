@extends('layouts.web')
@section('metatag')
<title>{{ config('app.name', 'Laravel') }}</title>
<meta name="description" content="Sản phẩm Quán cafe, Giải khát, Quán ăn, Nhà hàng">
@endsection
@section('content')
<main role="main" class="container">
  <div class="my-2">@include('layouts.partials.trends')</div>
  <div class="row">
    <div class="col-4 col-sm-3 p-0-xs">
      @include('layouts.partials.sidebar')
    </div>
    <div class="col-8 col-sm-9 p-0-xs">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <!--specials-->
        <h5 class="border-bottom border-gray mb-3 text-danger text-uppercase">Sản phẩm tiêu biểu</h5>
        @include('layouts.partials.items')
        <!--end specials-->

        <!--Top Viewed-->
        <h5 class="mt-3 border-bottom border-gray mb-3 text-danger text-uppercase">Sản phẩm được quan tâm nhiều nhất</h5>
        @include('layouts.partials.topitem')
        <!--End Top Viewed-->
      </div>
   </div>
  </div>
</main>
@endsection
