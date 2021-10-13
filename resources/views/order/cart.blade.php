@extends('layouts.web')
@section('metatag')
<title>Giỏ hàng</title>
<meta name="description" content="">
@endsection
@section('content')
<!-- ========== MAIN CONTENT ========== -->
<main role="main" class="container my-4">

 <h5 class="border-bottom border-gray mb-3 text-uppercase">Giỏ hàng</h5>
  <div class="row">
    <div class="col-sm-8">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <form method="POST" action="{{ route('updatecart') }}">
        @csrf
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">ĐVT</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thành tiền</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            @foreach($cartcontent as $row)
            <tr>
              <td class="align-middle"><div class="d-flex"><img class="d-none d-sm-block" width="64" src="{{$row->id->photo()}}"> <span class="ml-1">{{$row->name}}</span></div></td>
              <td class="align-middle">{{$row->id->unit}}</td>
              <td>{{number_format(@$row->price)}}đ <br> @if($row->id->discount)({{$row->id->price2}}đ nếu mua {{@$row->id->discount}} {{@$row->id->unit}})@endif</td>
              <td>
                <input type="text" class="form-control mw-90p" name="qty[{{$row->rowId}}]" value="{{$row->qty}}">
                <input type="hidden" class="form-control mw-90p" name="id[{{$row->rowId}}]" value="{{$row->id->id}}">
                <input type="hidden" class="form-control mw-90p" name="discount[{{$row->rowId}}]" value="{{$row->id->discount}}">
              </td>
              <td>{{number_format(@$row->total)}}đ</td>
              <td><a href="{{route('removecart',['id'=>$row->rowId])}}" class="link">xóa</a></td>
            </tr>
            @endforeach
            <tr><td></td><td></td><td></td><td>{{$cartsubtotal}}đ</td><td></td></tr>
          </tbody>
        </table>
        <div  class="text-right">
        @if(count($cartcontent))<button type="submit" class="btn btn-warning text-white">Cập nhật</button>@else <a class="d-block mb-3 mb-sm-0" href="/san-pham">
          <span class="fa fa-arrow-left mr-2"></span>
          Vui lòng đặt hàng
        </a> @endif
        </div>
      </form>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="my-3 p-3 bg-light rounded shadow-sm">
        <div class="d-flex">
          <label class="justify-content-start w-50 font-weight-bold">Tạm tính</label>
          <span class="justify-content-end w-50">{{$cartsubtotal}}đ</span>
        </div>
        <div class="d-flex">
          <label class="justify-content-start w-50 font-weight-bold">Thành tiền</label>
          <span class="justify-content-end w-50 lead text-danger font-weight-bold">{{$carttotal}}đ</span>
        </div>

        @if(count($cartcontent) > 0)<a href="/thanh-toan" class="btn btn-primary mt-4">Đặt hàng</a>@endif

      </div>
   </div>
  </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
@endsection
