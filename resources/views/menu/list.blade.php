@extends('layouts.admin')
@section('content')
<section class="col-sm-12 mt-5">
	<div class="box-typical box-typical-padding">
		<form action="/admin/menu/store" method="POST" enctype="multipart/form-data" >
			  {{csrf_field()}}
      <div class="form-group row">
          <div class="col-sm-4">Tên trình đơn</div>
          <div class="col-sm-8">Các trang</div>
      </div>
			<div class="form-group">
          <div class="dd dd3-gray w-100" id="nestable9" style="max-width:100%">
            <ol class="dd-list">
          @foreach($menu as $key => $value)
          <li class="dd-item dd3-item" data-id="{{$value->id}}">
          <div class="dd-handle dd3-handle">Drag</div>
          <div class="dd3-content">
            <div class="form-group row">
           <div class="col-sm-4">
            	<input type="text" value="{{$value->name}}" class="form-control " id="inputname" name="name[{{$value->id}}]" placeholder="Text">
            </div>
            <div class="col-sm-3">
    					<select id="model" name="model[{{$value->id}}]" class="form-control">
    						<option value="0">---</option>
    						@foreach($pages as $page)
    							<option @if($value->model_id == $page->id) selected @endif value="{{ $page->id }}">{{ $page->title}}</option>
    						@endforeach
    					</select>
    				</div>
						<div class="col-sm-2">
								<input type="text" name="link[{{$value->id}}]" value="{{$value->link}}" placeholder="Link">
             </div>
            <div class="col-sm-1">
             <div class="checkbox pt-2">
								<input type="checkbox" name="checkbox[{{$value->id}}]" value="{{$value->id}}">
								<label for="check-{{$value->id}}">Xóa</label>
							</div>
             </div>
          </div>
            </div>
						@if(!empty($value->children))
						<ol class="dd-list">
							@foreach($value->children as $key => $value)
							<li class="dd-item dd3-item" data-id="{{$value->id}}">
							<div class="dd-handle dd3-handle">Drag</div>
							<div class="dd3-content">
								<div class="form-group row">
							 <div class="col-sm-5">
									<input type="text" value="{{$value->name}}" class="form-control " id="inputname" name="name[{{$value->id}}]" placeholder="Text">
								</div>
								<div class="col-sm-3">
									<select id="model" name="model[{{$value->id}}]" class="form-control">
										<option value="0">---</option>
										@foreach($pages as $page)
											<option @if($value->model_id == $page->id) selected @endif value="{{ $page->id }}">{{ $page->title}}</option>
										@endforeach
									</select>
								</div>
								<div class="col-sm-2">
										<input type="text" name="link[{{$value->id}}]" value="{{$value->link}}" placeholder="Link">
								 </div>
								<div class="col-sm-2">
								 <div class="checkbox pt-2">
										<input type="checkbox" name="checkbox[{{$value->id}}]" value="{{$value->id}}">
										<label for="check-{{$value->id}}">Xóa</label>
									</div>
								 </div>
							</div>
								</div>
								@if(!empty($value->children))
								<ol class="dd-list">
									@foreach($value->children as $key => $value)
									<li class="dd-item dd3-item" data-id="{{$value->id}}">
									<div class="dd-handle dd3-handle">Drag</div>
									<div class="dd3-content">
										<div class="form-group row">
									 <div class="col-sm-5">
											<input type="text" value="{{$value->name}}" class="form-control " id="inputname" name="name[{{$value->id}}]" placeholder="Text">
										</div>
										<div class="col-sm-3">
											<select id="model" name="model[{{$value->id}}]" class="form-control">
												<option value="0">---</option>
												@foreach($pages as $page)
													<option @if($value->model_id == $page->id) selected @endif value="{{ $page->id }}">{{ $page->title}}</option>
												@endforeach
											</select>
										</div>
										<div class="col-sm-2">
												<input type="text" name="link[{{$value->id}}]" value="{{$value->link}}" placeholder="Link">
										 </div>
										<div class="col-sm-2">
										 <div class="checkbox pt-2">
												<input type="checkbox" name="checkbox[{{$value->id}}]" value="{{$value->id}}">
												<label for="check-{{$value->id}}">Xóa</label>
											</div>
										 </div>
									</div>
										</div>
									 </li>
									@endforeach
								</ol>
								@endif
							 </li>
							@endforeach
						</ol>
						@endif
					</li>
          @endforeach
          <li class="dd-item dd3-item" data-id="999">
          <div class="dd-handle dd3-handle">Drag</div>
          <div class="dd3-content">
            <div class="form-group row">
           <div class="col-sm-5">
            <input type="text" value="" class="form-control"  name="name[0]" placeholder="Thêm mới">
            </div>
            <div class="col-sm-3">
    					<select name="model[0]" class="form-control">
    						<option value="0">---</option>
    						@foreach($pages as $page)
    							<option value="{{ $page->id }}">{{ $page->title }}</option>
    						@endforeach
    					</select>
    				</div>
						<div class="col-sm-2">
								<input type="text" name="link[0]" value="" placeholder="Link">
             </div>
          </div>
            </div>
            </li>
        </ol>
        </div>
			</div>
      <input type="hidden" name="sortable" id="sortable"/>
			<input id="button" type="submit" value="Lưu" class="btn btn-inline btn-primary btn-sm">
		</form>
	</div>
	<!--.box-typical-->
</section>
<script src="{{ asset('js/jquery.nestable.js')}}"></script>
	<script>
		$(document).ready(function(){
		var $nestable9 =	$('#nestable9');
    $nestable9.nestable();
      $($nestable9).on('change', function(){
        $('#sortable').val(JSON.stringify($nestable9.nestable('serialize')));
      });
		});
	</script>
@endsection
