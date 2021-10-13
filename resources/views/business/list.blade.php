@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Danh sách công ty</h1>
  <div class="btn-toolbar mb-2 mb-md-0">
    <div class="btn-group mr-2">
      <a href="{{ route('admin.businesses.create') }}" class="btn btn-sm btn-outline-secondary">Add</a>
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
        <th>Tên tiêu đề</th>
        <th>Tùy chọn</th>
      </tr>
    </thead>
    <tbody>
      @foreach($businesses as $key => $business)
      <tr>
        <td>{{ $key }}</td>
        <td>{{ $business->name }}</td>
        <td>
          <a href="{{ route('admin.businesses.edit', $business->id) }}">Sửa</a>
          /
          <form class="d-inline" action="{{ route('admin.businesses.delete', $business->id) }}" method="post">
            @csrf
            @METHOD('DELETE')
            <button type="submit" class="btn btn-link" style="padding: 0!important; vertical-align: unset!important; font-size: unset!important;">Xóa</button>
          </form>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
  <nav aria-label="Page navigation example" class="text-center">
    {{ $businesses->links() }}
  </nav>
</div>
@endsection
