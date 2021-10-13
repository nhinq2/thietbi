@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Danh sách Slider</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <a href="/admin/slider/create" class="btn btn-sm btn-outline-secondary">Add</a>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
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
                @foreach($sliders as $key => $slider)
                <tr>
                  <td>{{$key}}</td>
                  <td>{{$slider->title}}</td>
                  <td>{{$slider->price}}</td>
                  <td>{{@$slider->category->name}}</td>
                  <td><a href="/admin/slider/{{$slider->id}}/edit">Sửa</a> / <a href="/admin/slider/{{$slider->id}}/delete">Xóa</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="Page navigation example" class="text-center">
              {{ $sliders->links() }}
            </nav>
          </div>
@endsection
