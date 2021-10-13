@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Bình luận</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Lọc
              </button>
            </div>
</div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Bình luận</th>
                  <th>Tin tức</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                @foreach($comments as $key => $comment)
                <tr>
                  <td>{{ $key }}</td>
                  <td class="w-50"><a href="{{ route('comments.show', $comment->id) }}">{{ $comment->content }}</a></td>
                  <td>{{ $comment->blog->title }}</td>
                  <td><a href="{{ route('comments.delete', $comment->id) }}">Xóa</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
            <nav aria-label="Page navigation example" class="text-center">
              {{ $comments->links() }}
            </nav>
          </div>
@endsection
