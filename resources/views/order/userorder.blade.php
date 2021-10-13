@extends('layouts.web')
@section('content')
<!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Checkout Form Section -->
    <div class="container my-4">
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Đơn hàng</h1>
            <div class="btn-toolbar mb-2 mb-md-0 d-flex">
              <div class="dropdown dropleft">
                <a class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lọc
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  @foreach($days as $key => $date)
                    @if($key == $now)
                     <a class="dropdown-item font-weight-bold" href="/don-hang?date={{$key}}">{{$date}}</a>
                   @else
                     <a class="dropdown-item" href="/don-hang?date={{$key}}">{{$date}}</a>
                   @endif
                  @endforeach
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ngày tháng</th>
                  <th>Khách hàng</th>
                  <th>Địa chỉ</th>
                  <th>Tuỳ chọn</th>
                </tr>
              </thead>
              <tbody>
                @foreach($orders as $key => $order)
                @php
                  switch ($order->status) {
                    case 'shipped':
                      $status = 'Đã giao';
                      $bg = 'bg-primary';
                      $progress = '100';
                      break;
                    case 'cancel':
                      $status = 'Huỷ';
                      $bg = 'bg-danger';
                      $progress = '25';
                      break;
                    default:
                      $status = 'Mới';
                      $bg = 'bg-success';
                      $progress = '50';
                      break;
                  }
                @endphp
                <tr>
                  <td>{{$key+1}}</td>
                  <td class="align-middle"><span class="small">
                    {{\Carbon\Carbon::parse($order->created_at)->format('d/m/Y h:i')}}
                    </span>
                  </td>
                  <td class="align-middle">{{$order->lastname}} {{$order->firstname}} <br> {{$order->phone}} <br><span class="small"> {{@$order->note}}</span></td>
                  <td class="align-middle">{{@$order->address}}, {{@$order->district}}, {{@$order->city}}</td>
                  <td class="align-middle">
                    <a target="_blank" href="/upload/order/order-{{$order->id}}.pdf" class=""><i class="fa fa-print"></i> In</a>
                    <a target="_blank" href="https://zalo.me/0905141425"><img src="/images/zalo.png" width="32"></a>
                    <a class="btn btn-sm btn-primary" href="/create_order/{{$order->id}}" class=""><i class="fa fa-retweet"></i> Đặt lại</a>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="product navigation example" class="text-center">
              {{ $orders->links() }}
            </nav>
          </div>
      </div>
  </main>
@endsection
