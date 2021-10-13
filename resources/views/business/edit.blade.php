@extends('layouts.admin')
@section('content')
@section('metatag')
<title>Edit business</title>
@endsection
	<div class="box-typical box-typical-padding col-sm-12">
		<form enctype="multipart/form-data" action="{{ route('admin.businesses.update', $business->id) }}" method="POST" autocomplete="off">
		 @csrf
     @method('PUT')
			<div class="form-group row">
				<div class="col-sm-12">
					<h1>Edit Business</h1>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-9 form-editor">
					<div class="form-group has-success">
            <input type="text" class="form-control form-control-success" id="inputTitle" name="name" value="{{ $business->name }}" placeholder="Tên công ty *">
					</div>
          <div class="input-group mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text">Hình ảnh</span>
           </div>
           <div class="custom-file">
             <input type="file" class="custom-file-input" name="image">
             <label class="custom-file-label" for="">Choose file (540x330)</label>
           </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="represent" value="{{ $business->represent }}" placeholder="Đại diện công ty">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="phone" value="{{ $business->phone }}" placeholder="Số điện thoại">
          </div>
					<div class="form-group">
            <input type="text" class="form-control" name="address" value="{{ $business->address }}" placeholder="Địa chỉ *">
					</div>
          <div class="form-group">
            <input type="text" class="form-control" name="business" value="{{ $business->business }}" placeholder="Ngành nghề *">
          </div>
          <button type="submit" class="btn btn-primary w-25 float-right">Sửa</button>
        </div>
			</div>
		</form>
	</div>
	<!--.box-typical-->
@endsection
