@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Danh sách sản phẩm</h1>
            <div class="btn-toolbar mb-2 mb-md-0 d-flex">
              <div class="btn-group mr-2">
                <a href="/admin/portfolio/create" class="btn btn-sm btn-outline-secondary">Add</a>

              </div>
              <div class="dropdown dropleft">
                <a class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lọc
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  @foreach($tags as $key => $tag)
                   <a class="dropdown-item" href="/admin/portfolio/list?tag={{$tag}}">{{$tag}}</a>
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
                  <th>Thể loại</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                @foreach($portfolios as $key => $portfolio)
                <tr>
                  <td>{{$key}}</td>
                  <td>{{$portfolio->title}}</td>
                  <td>{{@$portfolio->tags}}</td>
                  <td><a href="/admin/portfolio/{{$portfolio->id}}/edit">Sửa</a> / <a href="/admin/portfolio/{{$portfolio->id}}/delete">Xóa</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="portfolio navigation example" class="text-center">
              {{ $portfolios->links() }}
            </nav>
          </div>
@endsection
