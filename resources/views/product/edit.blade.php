@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">{{$product->title}}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">

            </div>
</div>
	<div class="box-typical box-typical-padding col-sm-12">
		<form enctype="multipart/form-data" action="/admin/product/update" method="POST">
		 {{ csrf_field() }}
			<div class="form-group row">
				<div class="col-sm-9 form-editor">
          <div class="row">
  					<div class="form-group has-success col-sm-9">
  						<input type="text" class="form-control form-control-success"  id="inputTitle" value="{{$product->title}}" name="title" placeholder="Title">
  					</div>
  					<div class="form-group has-success col-sm-3">
  						<input type="text" class="form-control form-control-success"  id="inputSku" name="sku" placeholder="Mã SP">
  					</div>
          </div>
					<div class="form-group">
						<select class="select2 w-100 form-control" id="category_id" name="category_id">
                      		<option value="0">-- Chọn nhóm --</option>
	                		@foreach($categories as $category)
	                				<option @if($product->category_id == $category->id) selected @endif value="{{$category->id}}">{{$category->name}}</option>
									@foreach($category->subCategories as $subCategory)
									<option value="{{$subCategory->id}}" @if($product->category_id == $subCategory->id) selected @endif data-icon="glyphicon glyphicon-minus"> - {{$subCategory->name}}</option>
									@endforeach
							@endforeach
						</select>
					</div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">Hình ảnh</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" name="image[]" multiple id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
              <label class="custom-file-label" for="inputGroupFile01">Chọn ảnh (1024x768)</label>
            </div>
          </div>
					<div class="form-group">
						<textarea class="form-control"  id="inputSummary" name="summary" placeholder="Mô tả">{{$product->summary}}</textarea>
					</div>
					<div class="form-group">
						<textarea class="form-control summernote"  id="inputContent" name="content" placeholder="Nội dung">{{$product->content}}</textarea>
					</div>


					<input type="hidden" name="product_id" value="{{$product->id}}">


				</div>
				<div class="col-sm-3 form-preview">
          <div class="form-group">
            <label class="d-block">Giá</label>
            <div class="input-group">
  						<input type="number" class="form-control"  id="inputPrice" name="price" placeholder="18000" value="{{$product->price}}">
              <div class="input-group-append">đ</div>
            </div>
					</div>
          <div class="form-group">
            <label class="d-block">Giá sỉ</label>
            <div class="input-group">
  						<input type="number" class="form-control" id="inputPrice2" name="price2" placeholder="12000" value="{{$product->price2}}">
              <div class="input-group-append">đ</div>
            </div>
					</div>
          <div class="form-group">
            <label class="d-block">Mức bán sỉ</label>
            <input type="number" class="form-control"  id="inputDiscount" name="discount" placeholder="10" value="{{$product->discount}}">
          </div>
          <div class="form-group">
            <label class="d-block">Đơn vị tính</label>
            <input type="text" class="form-control" autocomplete="true" id="inputUnit" name="unit" placeholder="Hộp" value="{{$product->unit}}">
					</div>
          <div class="form-group">
            <label class="d-block">Xuất xứ</label>
						<input type="text" class="form-control"  id="inputMadein" name="madein" placeholder="Đà Nẵng" value="{{$product->madein}}">
					</div>
          <div class="form-check">
            <input type="checkbox" name="is_special" class="form-check-input" value="1" id="defaultCheck1" @if($product->is_special == 1) checked="checked" @endif>
            <label class="form-check-label" for="defaultCheck1">
              SP Tiêu biểu
            </label>
          </div>
          <div class="form-group">
            <label class="d-block">Thứ tự(bé đến lớn)</label>
            <input type="text" class="form-control" name="index" placeholder="1" value="{{$product->index}}">
          </div>
           <input type="hidden" name="city_id" value="3">
           <input type="hidden" name="district_id" value="62">
           <button type="submit" class="btn btn-primary mt-2">Cập nhật</button>

				</div>
			</div>
		</form>
	</div>
	<!--.box-typical-->
@endsection
