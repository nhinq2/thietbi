@extends('layouts.admin')
@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Quản lý sản phẩm</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
</div>
	<div class="box-typical box-typical-padding col-sm-12">
		<form enctype="multipart/form-data" action="/admin/portfolio/update" method="POST">
		 {{ csrf_field() }}
			<div class="form-group row">
				<div class="col-sm-9 form-editor">
					<div class="form-group has-success">
						<input type="text" class="form-control form-control-success" autocomplete="false" id="inputTitle" value="{{$portfolio->title}}" name="title" placeholder="Title">
					</div>
					<div class="form-group">
						<textarea class="form-control" autocomplete="false" id="inputSummary" name="summary" placeholder="Summary">{{$portfolio->summary}}</textarea>
					</div>
					<div class="form-group">
						<textarea class="form-control summernote" autocomplete="false" id="inputContent" name="content" placeholder="Content">{{$portfolio->content}}</textarea>
					</div>
					<div class="form-group">
						<select class="select2" name="option_tags">
              <option value="0">-- Chọn nhóm --</option>
	                		@foreach($tags as $tag)
	                				<option @if($portfolio->tags == $tag) selected @endif value="{{$tag}}">{{$tag}}</option>
							@endforeach
						</select>
					</div>

          <div class="form-group">
            <input type="text" class="form-control" autocomplete="false" name="tags" placeholder="tags" value="">
          </div>

					<input type="hidden" name="portfolio_id" value="{{$portfolio->id}}">

					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
					  </div>
					  <div class="custom-file">
					    <input type="file" class="custom-file-input" name="image[]" multiple id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
					    <label class="custom-file-label" for="inputGroupFile01">Choose file (1200x660)</label>
					  </div>
					</div>
				</div>
				<div class="col-sm-3 px-5 form-preview">
					 <button type="submit" class="btn btn-primary">Submit</button>
				</div>
			</div>
		</form>
	</div>
	<!--.box-typical-->
@endsection
