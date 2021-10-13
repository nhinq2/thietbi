@extends('layouts.web')
@section('metatag')
<title>Đơn hàng #{{$order->id}}</title>
<meta name="description" content="">
@endsection
@section('content')
<!-- ========== MAIN CONTENT ========== -->
<main role="main" class="container">

 <h5 class="border-bottom border-gray mb-3 text-uppercase">Đơn hàng #{{$order->id}}</h5>
  <div class="row">
    <div class="col-sm-8">
			<div class="alert alert-success my-3" role="alert">
			 	 Đơn hàng thành công!
			</div>
      <a class="mb-3 mb-sm-0 btn btn-success" href="/san-pham">
        <span class="fa fa-arrow-left mr-2"></span>
        Tiếp tục mua
      </a>

      <a class="mb-3 mb-sm-0 btn btn-primary" href="/create_order/{{$order->id}}">
        <span class="fa fa-retweet mr-2"></span>
        Đặt lại đơn hàng
      </a>
    </div>
    <div class="col-sm-4">
      <div class="my-3 p-3 bg-light rounded shadow-sm">
        <a href="/upload/order/order-{{$order->id}}.pdf" class="btn btn-secondary mt-2"><i class="fa fa-print"></i> Xem đơn và In</a>
      </div>
   </div>
  </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
@endsection
