@extends('layouts.admin')
@section('content')
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
                     <a class="dropdown-item font-weight-bold" href="/admin/order/list?date={{$key}}">{{$date}}</a>
                   @else
                     <a class="dropdown-item" href="/admin/order/list?date={{$key}}">{{$date}}</a>
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
                  <th>Khách hàng</th>
                  <th>Địa chỉ</th>
                  <th>Ghi chú</th>
                  <th>Trạng thái</th>
                  <th></th>
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
                  <td>{{$order->id}}</td>
                  <td class="align-middle">{{$order->lastname}} {{$order->firstname}} <br> {{$order->phone}}</td>
                  <td class="align-middle">{{@$order->address}}, {{@$order->district}}, {{@$order->city}}</td>
                  <td class="align-middle">{{@$order->note}}</td>
                  <td class="text-center align-middle"><div class="progress">
                  <div class="progress-bar progress-bar-striped {{$bg}}" role="progressbar" style="width: {{$progress}}%" aria-valuenow="{{$progress}}" aria-valuemin="0" aria-valuemax="100">{{@$status}}</div>
                </div></td>
                  <td class="align-middle"><a target="_blank" href="/upload/order/order-{{$order->id}}.pdf" class=""><i class="fa fa-print"></i></a> <a target="_blank" href="mailto:{{$order->email}}"><i class="fa fa-envelope"></i></a>
                    <a href="tel:{{$order->phone}}"><i class="fa fa-phone"></i></a>
                    <a target="_blank" href="https://zalo.me/{{$order->phone}}"><img src="/images/zalo.png" width="32"></a>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="product navigation example" class="text-center">
              {{ $orders->links() }}
            </nav>
          </div>
@endsection
