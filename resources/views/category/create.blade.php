@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Thêm danh mục</h1>
            <div class="btn-toolbar mb-2 mb-md-0">

            </div>
</div>
	<div class="box-typical box-typical-padding col-sm-12">
		<form enctype="multipart/form-data" action="/admin/category/store" method="POST">
		 {{ csrf_field() }}
			<div class="form-group row">
				<div class="col-sm-10">
					Thêm mới
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-9 form-editor">
					<div class="form-group has-success">
            <label class="d-block">Tên phân loại</label>
						<input type="text" class="form-control form-control-success" autocomplete="false" id="inputName" name="name" placeholder="Name">
					</div>
					<div class="form-group">
            <label class="d-block">Thứ tự</label>
						 <input type="text" class="form-control form-control-success" autocomplete="false" id="inputsortable" name="sortable" value="0" placeholder="1">
					</div>
          <div class="form-group">
             <label class="d-block">Icon</label>
						 <input type="text" value="carrot" class="form-control form-control-success" autocomplete="false" id="inputicon" name="icon" placeholder="carrot">
					</div>
          <div class="form-group">
						<select class="select2 form-control" name="parent_id">
                      		<option value="0">-- Chọn nhóm --</option>
	                		@foreach($categories as $category)
	                				<option data-icon="glyphicon glyphicon-plus" value="{{$category->id}}">{{$category->name}}</option>
							@endforeach
						</select>
					</div>

					<input type="file" name="image"> <span class="small">540x330</span>
				</div>
				<div class="col-sm-3 px-5 form-preview">
					 <button type="submit" class="btn btn-primary">Tạo mới</button>
				</div>
			</div>
		</form>
	</div>
	<!--.box-typical-->
	<script src="{{ asset('js/lib/jquery/jquery.min.js')}}"></script>
	<script src="{{ asset('js/lib/tether/tether.min.js')}}"></script>
	<script src="{{ asset('js/lib/bootstrap/bootstrap.min.js')}}"></script>
	<script src="{{ asset('js/lib/summernote/summernote.min.js')}}"></script>
	<script src="{{ asset('js/lib/select2/select2.full.min.js')}}"></script>
	<script src="{{ asset('js/main.js')}}"></script>
	<script>
		$(document).ready(function() {
			$('.summernote').summernote();
		});
	</script>
@endsection
