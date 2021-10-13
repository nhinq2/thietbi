@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Danh sách trang</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
            <a href="/admin/page/create" class="btn btn-sm btn-outline-secondary">Thêm mới</a>
        </div>
        <select name="type" class="btn btn-sm btn-outline-secondary dropdown-toggle" onchange="window.location.href = `?type=${this.value}`">
            @foreach ($types as $key => $type)
            <option value="{{ $key }}" {{ $current_type == $key ? 'selected' : '' }}>{{ $type }}</option>
            @endforeach
        </select>
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
            @foreach($pages as $key => $page)
            <tr>
                <td>{{$key}}</td>
                <td><a target="_blank" href="/{{$page->slug}}">{{$page->title}}</a></td>
                <td>
                    <a href="/admin/page/{{$page->id}}/edit">Sửa</a>
                    /
                    <a href="/admin/page/{{$page->id}}/delete">Xóa</a>
                    /
                    <a href="/admin/page/{{$page->id}}/clone">Nhân bản</a>
                    @if (!$page->source())
                    @if (!$page->hasLanguage('en'))
                    /
                    <a href="/admin/translate/page/{{ $page->id }}/en">EN</a>
                    @endif
                    @if (!$page->hasLanguage('cn'))
                    /
                    <a href="/admin/translate/page/{{ $page->id }}/cn">CN</a>
                    @endif
                    @endif
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <nav aria-label="Page navigation example" class="text-center">
        {{ $pages->links() }}
    </nav>
</div>
@endsection
