@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Tin tức</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <a href="/admin/blog/create" class="btn btn-sm btn-outline-secondary">Thêm mới</a>
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

                @foreach($blogs as $key => $blog)
                <tr>
                  <td>{{$key}}</td>
                  <td>{{$blog->title}}</td>
                  <td>{{$blog->price}}</td>
                  <td>{{@$blog->category->name}}</td>

                  <td>

                    <a href="/admin/blog/{{$blog->id}}/edit">Sửa</a> / <a href="/admin/blog/{{$blog->id}}/delete">Xóa</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="Page navigation example" class="text-center">
              {{ $blogs->links() }}
            </nav>
          </div>
@endsection
