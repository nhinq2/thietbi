@extends('layouts.admin')
@section('content')
<section class="col-sm-12 mt-5">
		<form action="/admin/settings/store" method="POST" enctype="multipart/form-data" >
			  {{csrf_field()}}
      <div class="form-group row">
          <div class="col-sm-3">Tên trường</div>
          <div class="col-sm-5">Nội dung</div>
          <div class="col-sm-2">Token</div>
      </div>
          @foreach($settings as $key => $value)
          <div class="form-group row border p-3">
           <div class="col-sm-3">
            	<input type="text" value="{{$value->name}}" class="form-control" name="name[{{$value->id}}]" placeholder="Text">
            </div>
						<div class="col-sm-5">
								<textarea name="content[{{$value->id}}]" class="form-control">
                  {{$value->content}}
                </textarea>
             </div>
             <div class="col-sm-2">
                    <input type="text" value="{{$value->key}}" class="form-control " name="key[{{$value->id}}]" readonly placeholder="Key">
             </div>
            <div class="col-sm-2">
             <div class="checkbox pt-2">
								<input type="checkbox" name="checkbox[{{$value->id}}]" value="{{$value->id}}">
								<label for="check-{{$value->id}}">Xóa</label>
							</div>
             </div>
          </div>
          @endforeach
           <div class="form-group row form-group row border p-3">
           <div class="col-sm-3">
            <input type="text" value="" class="form-control"  name="name[0]" placeholder="Thêm mới">
            </div>
						<div class="col-sm-5">
              <textarea name="content[0]" class="form-control">
              </textarea>
             </div>
            </div>
      <input type="hidden" name="sortable" id="sortable"/>
			<input type="hidden" name="locale" value="{{Session::get('locale','vi')}}"/>
			<input id="button" type="submit" value="Lưu" class="btn btn-inline btn-primary btn-sm">
		</form>
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
