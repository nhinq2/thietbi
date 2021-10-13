@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Nhập khẩu Sản phẩm</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            </div>
</div>
	<div class="box-typical box-typical-padding col-sm-12">
    <form class="pt-4 text-center" action="{{route('import_product')}}" method="post"
      enctype="multipart/form-data" >
      {{csrf_field()}}
      <div class="form-group">
        <span class="btn btn-secondary btn-rounded btn-file">
            <span>Chọn tệp tin</span>
             <input required type="file" name="file_upload">
         </span>
          <small class="text-muted d-block">Tệp tin XLSX, XLS</small>
        </div>
          <p class="">
          <input type="submit" name="" class="btn btn-primary" value="Tải lên">
         </p>
    </form>
	</div>
	<!--.box-typical-->
@endsection
