<div class="row">
@foreach ($products as $product)
<div class="col-6 col-md-6 col-lg-3 mb-4 px-small">
  <div class="border rounded h-100 d-flex flex-column justify-content-between pb-2">
    <a href="/san-pham/{{$product->slug}}">
      <img class="img-fluid card-img-top" width="100%" height="180" src="{{ $product->photo() }}" alt="{{ $product->title }}">
    </a>
    <h6 class="px-3 px-1-xs pt-2 text-secondary"><a class="text-dark" href="/san-pham/{{$product->slug}}">{{ $product->title }}</a></h6>
    <p class="px-3 px-1-xs text-muted">
      <span class="d-block text-danger">{{number_format(@$product->price)}}đ</span>
      <span class="d-block text-dark"><label class="text-muted p-0 m-0">Giá sỉ: </label> {{number_format(@$product->price2)}}đ</span>
      <span class="d-block text-dark"><label class="text-muted p-0 m-0">Xuất xứ: </label> {{@$product->madein}}</span>
      <span class="d-block text-dark"><label class="text-muted p-0 m-0">Đơn vị tính: </label> {{@$product->unit}}</span>
      </p>

    <span class="text-center">
      {{--<a href="{{route('addcart',['id'=>$product->id, 'qty'=>1])}}" class="btn btn-primary btn-sm" data-id="{{$product->id}}"><i class="fa fa-cart-plus"></i> Đặt hàng</a>--}}
      <a href="/san-pham/{{$product->slug}}" class="btn btn-primary btn-sm" data-id="{{$product->id}}"><i class="fa fa-eye"></i> Chi tiết</a>
    </span>
  </div>
</div>
@endforeach
</div>
