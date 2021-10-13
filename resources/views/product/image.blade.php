@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Nhập khẩu Hình ảnh</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            </div>
</div>
	<div class="box-typical box-typical-padding col-sm-12">
    <form class="pt-4 text-center" action="{{route('upload_image')}}" method="post"
      enctype="multipart/form-data" >
      {{csrf_field()}}
      <div class="form-group">
        <span class="btn btn-secondary btn-rounded btn-file">
            <span>Chọn tệp tin</span>
             <input required type="file" multiple name="image[]">
         </span>
          <small class="text-muted d-block">Chọn nhiều hình ảnh cùng lúc. <br> Tệp tin JPG, PNG, JPEG</small>
        </div>
          <p class="">
          <input type="submit" name="" class="btn btn-primary" value="Tải lên">
         </p>
    </form>
    <ul class="row">
      @foreach($files as $key => $file)
      <li class="col-4 my-1">
        <div class="text-dark border rounded d-flex p-1">
           <a class="text-dark" target="_blank" href="{{ asset('upload/product/'.$file->getBasename())}}">
             <img width="48" height="auto" class="mr-2" src="{{ asset('upload/product/cache/'.$file->getBasename())}}" alt="{{$file->getBasename()}}">
          </a>
          <p>{{$file->getBasename()}}</p>
        </div>
     </li>
      @endforeach
    </ul>
	</div>
	<!--.box-typical-->
@endsection
