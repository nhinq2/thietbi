@extends('layouts.admin')
@section('content')
@section('metatag')
<title>Add blog</title>
@endsection
<div class="box-typical box-typical-padding col-sm-12">
    <form enctype="multipart/form-data" action="/admin/page/store" method="POST">
        {{ csrf_field() }}
        <div class="form-group row">
            <div class="col-sm-10">
                Add Page
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 form-editor">
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false" id="inputTitle"
                        name="title" placeholder="Title">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Hình nền</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="background_url" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file (1200x660)</label>
                    </div>
                </div>
                <div class="form-group">
                    <textarea class="form-control" autocomplete="false" id="inputSummary" name="summary"
                        placeholder="Summary"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" value="" class="form-control" autocomplete="false" name="youtube"
                        placeholder="Youtube">
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote" autocomplete="false" id="inputContent" name="content"
                        placeholder="Content"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" value="" class="form-control" autocomplete="false" name="attachs"
                        placeholder="Link bên ngoài">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon02">Hình ảnh</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="image" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon02">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file (540x330)</label>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" value="" class="form-control" autocomplete="false" name="keywords"
                        placeholder="Từ khóa...">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label>Cấp cha</label>
                    <select class="form-control" name="parent_id">
                        <option value="0">--</option>
                        @foreach($pages as $key => $value)
                        <option value="{{$value->id}}">{{$value->title}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Kiểu dữ liệu</label>
                    <select class="form-control" name="type">
                        @foreach($types as $key => $type)
                        <option value="{{ $key }}">{{ $type }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Hiển thị ảnh</label>
                    <select class="form-control" name="float">
                        <option value="left">Bên trái</option>
                        <option value="right">Bên phải</option>
                    </select>
                </div>

                <div class="form-check">
                    <input class="form-check-input" name="is_front" type="checkbox" value="1" id="defaultCheck1">
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
@endsection
