@extends('layouts.admin')
@section('content')
@section('metatag')
  <title>$comment->title</title>
@endsection
<link rel="stylesheet" href="{{ asset('css/summernote/summernote.css')}}">
<link rel="stylesheet" href="{{ asset('css/separate/blogs/editor.min.css')}}">
<link rel="stylesheet" href="{{ asset('css/font-awesome/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{ asset('css/main.css')}}">
<h1 class="h2">Chi tiết bình luận</h1>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bình luận</h5>
        <p class="card-text">
          <label for=""><strong>Họ và tên: </strong></label>
          <span>{{ $comment->fullname }}</span>
        </p>
        <p class="card-text">
          <label for=""><strong>Email: </strong></label>
          <span>{{ $comment->email }}</span>
        </p>
        <p class="card-text">
          <label for=""><strong>Số điện thoại: </strong></label>
          <span>{{ $comment->phone }}</span>
        </p>
        <p class="card-text">
          <label for=""><strong>Bình luận: </strong></label><br>
          <span>{{ $comment->content }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tin tức</h5>
        <p class="card-text">
          <label for=""><strong>Tiêu đề: </strong></label>
          <span>{{ $comment->blog->title }}</span>
        </p>
        <p class="card-text">
          <label for=""><strong>Tóm tắt: </strong></label>
          <span>{{ $comment->blog->summary }}</span>
        </p>
        <p class="card-text">
          <label for=""><strong>Nội dung: </strong></label><br>
          <span>{{ $comment->blog->content }}</span>
        </p>
      </div>
    </div>
  </div>
</div>

  <script src="{{ asset('js/summernote/summernote.min.js')}}"></script>
  <script>
    $(document).ready(function() {
      $('.summernote').summernote();
    });
  </script>
@endsection
