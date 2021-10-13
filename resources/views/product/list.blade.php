@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Sản phẩm</h1>
            <div class="btn-toolbar mb-2 mb-md-0 d-flex">
              <div class="btn-group mr-2">
                <a href="/admin/product/create" class="btn btn-sm btn-outline-secondary">Thêm mới</a>
                <a href="/admin/product/import" class="btn btn-sm btn-outline-secondary">Nhập sản phẩm</a>
                <a href="/admin/product/upload" class="btn btn-sm btn-outline-secondary">Nhập Hình ảnh</a>
              </div>
              <div class="dropdown dropleft">
                <a class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lọc
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  @foreach($categories as $key => $cate)
                   <a class="dropdown-item" href="/admin/product/list?category_id={{$cate->id}}">{{$cate->name}}</a>
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
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Thể loại</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                @foreach($products as $key => $product)
                <tr>
                  <td>{{$key+1}}</td>
                  <td><div class="d-flex"><img class="img-fluid bd-placeholder-img mr-2 rounded" width="48" height="48" src="{{ $product->photo(true) }}" alt="{{$product->summary}}"> <a target="_blank" href="/san-pham/{{$product->slug}}">{{$product->title}}</a></div></td>
                  <td>{{$product->price}}</td>
                  <td>{{@$product->category->parent->name}} - {{@$product->category->name}}</td>

                  <td><a href="/admin/product/{{$product->id}}/edit">Sửa</a> / <a href="/admin/product/{{$product->id}}/delete">Xóa</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="product navigation example" class="text-center">
              {{ $products->links() }}
            </nav>
          </div>
@endsection
