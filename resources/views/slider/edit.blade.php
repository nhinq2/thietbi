@extends('layouts.admin')

@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Sửa slider</h1>
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
    <form enctype="multipart/form-data" action="/admin/slider/update" method="POST">
        {{ csrf_field() }}
        <div class="form-group row">
            <div class="col-sm-9 form-editor">
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false"
                        value="{{$slider->title}}" name="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" autocomplete="false" id="inputPrice" name="url"
                        placeholder="Liên kết" value="{{$slider->url}}">
                </div>
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false" name="summary"
                        value="{{$slider->summary}}" placeholder="Mô tả">
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote" autocomplete="false" id="inputContent" name="content"
                        placeholder="Content">{{$slider->content}}</textarea>
                </div>
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false" name="sort"
                        value="{{$slider->sort}}" placeholder="Sắp xếp">
                </div>
                <input type="hidden" name="slider_id" value="{{$slider->id}}">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Hình nền</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="background_image" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file...</label>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Hình ảnh</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="image" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file...</label>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            @if ($slider->is_display == 1)
                            <input id="is_display" name="is_display" checked="" type="checkbox" aria-label="">
                            @else
                            <input id="is_display" name="is_display" type="checkbox" aria-label="">
                            @endif
                        </div>
                    </div>
                    <label class="form-control" for="is_display">Hiển thị tên</label>
                </div>
                <div class="form-group">
                    <label>Vị trí hiển thị</label>
                    <select class="form-control" name="position">
                        @foreach (['left' => 'Trái', 'right' => 'Phải'] as $key => $position)
                        <option value="{{ $key }}" @if ($key==$slider->position) {{ 'selected' }} @endif>{{ $position }}
                        </option>
                        @endforeach
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</div>
<!--.box-typical-->
@endsection
