@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Danh mục</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <a href="/admin/category/create" class="btn btn-sm btn-outline-secondary">Thêm mới</a>
              </div>
            </div>
</div>

          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên </th>
                  <th>Link </th>
                  <th>Sắp xếp</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                @foreach($categories as $key => $category)
                <tr>
                  <td>{{$category->id}}</td>
                  <td><a href="/blogs/{{$category->slug}}">{{$category->name}}</a> </td>
                  <td>/blogs/{{$category->slug}}</td>
                  <td>{{$category->sortable}}</td>
                  <td><a href="/admin/category/{{$category->id}}/edit">Sửa</a> / <a href="/admin/category/{{$category->id}}/delete">Xóa</a></td>
                </tr>
                  @foreach($category->subCategories as $subCategory)
                  <tr class="cate-sub">
                    <td>{{$subCategory->id}}</td>
                    <td class="pl-4">{{$subCategory->name}}</td>
                    <td>{{$subCategory->sortable}}</td>
                    <td><a href="/admin/category/{{$subCategory->id}}/edit">Sửa</a> / <a href="/admin/category/{{$subCategory->id}}/delete">Xóa</a></td>
                  </tr>
                  @endforeach
                @endforeach
              </tbody>
            </table>
              <nav aria-label="Page navigation example" class="text-center">
                {{ $categories->links() }}
              </nav>
          </div>
@endsection
