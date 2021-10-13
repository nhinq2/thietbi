@extends('layouts.admin')
@section('content')
@section('metatag')
<title>admin page</title>
@endsection
<div class="box-typical box-typical-padding col-sm-12">
    <form enctype="multipart/form-data" @if($clone=='clone' ) action="/admin/page/store" @else
        action="/admin/page/update" @endif method="POST">
        {{ csrf_field() }}
        <div class="form-group row">
            <div class="col-sm-10">
                Edit Page
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 form-editor">
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false" id="inputTitle"
                        name="title" @if($clone=='clone' ) value="Copy {{$page->title}}" @else value="{{$page->title}}"
                        @endif placeholder="Title">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Hình ảnh chính</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="background_url" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file (1200x660)</label>
                    </div>
                    @if($page->background_url)
                    <div class="form-check ml-2">
                        <input class="form-check-input" name="background_remove" type="checkbox" value="1"
                            id="defaultCheck2">
                        <label class="form-check-label" for="defaultCheck2">
                            Xóa {{$page->background_url}}
                        </label>
                    </div>
                    @endif
                </div>
                <div class="form-group">
                    <textarea class="form-control" autocomplete="false" id="inputSummary" name="summary"
                        placeholder="Summary">{{$page->summary}}</textarea>
                </div>
                <div class="form-group">
                    <input type="text" value="{{$page->youtube}}" class="form-control" autocomplete="false"
                        name="youtube" placeholder="Youtube">
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote" autocomplete="false" id="inputContent" name="content"
                        placeholder="Content">{{$page->content}}</textarea>
                </div>
                <div class="form-group">
                    <input type="text" value="{{$page->attachs}}" class="form-control" autocomplete="false"
                        name="attachs" placeholder="Link bên ngoài">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon02">Hình đại diện</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="image" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon02">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file (540x330)</label>
                    </div>
                    @if($page->image_link)
                    <div class="form-check ml-2">
                        <input class="form-check-input" name="image_remove" type="checkbox" value="1"
                            id="defaultCheck3">
                        <label class="form-check-label" for="defaultCheck3">
                            Xóa {{$page->image_link}}
                        </label>
                    </div>
                    @endif
                </div>
                <div class="form-group">
                    <input type="text" value="{{ $page->keywords }}" class="form-control" autocomplete="false"
                        name="keywords" placeholder="Từ khóa...">
                </div>
                <input type="hidden" name="page_id" value="{{$page->id}}">
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label>Cấp cha</label>
                    <select class="form-control" name="parent_id">
                        <option value="0">--</option>
                        @foreach($pages as $key => $value)
                        <option @if($value->id == $page->parent_id) selected @endif
                            value="{{$value->id}}">{{$value->title}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Kiểu dữ liệu</label>
                    <select class="form-control" name="type">
                        @foreach($types as $key => $type)
                        <option @if($key==$page->type) selected @endif value="{{ $key }}">{{ $type }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Hiển thị ảnh</label>
                    <select class="form-control" name="float">
                        <option @if($page->float=='left') selected @endif value="left">Bên trái</option>
                        <option @if($page->float=='right') selected @endif value="right">Bên phải</option>
                    </select>
                </div>
                <div class="form-check">
                    <input class="form-check-input" @if($page->is_front == 1) checked="checked" @endif name="is_front"
                    type="checkbox" value="1" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Hiện trang chủ
                    </label>
                </div>
                <div class="col-sm-3 px-5 form-preview">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>

        </div>
    </form>
</div>
<!--.box-typical-->
@endsection
