@extends('layouts.admin')
@section('content')
@section('metatag')
<title>Add blog</title>
@endsection
<div class="box-typical box-typical-padding col-sm-12">
    <form enctype="multipart/form-data" action="/admin/blog/store" method="POST">
        {{ csrf_field() }}
        <div class="form-group row">
            <div class="col-sm-10">
                Add blog
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 form-editor">
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" id="inputTitle" name="title"
                        placeholder="Title">
                </div>
                <div class="form-group">
                    <textarea class="form-control" autocomplete="false" id="inputSummary" name="summary"
                        placeholder="Summary"></textarea>
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote" id="inputContent" name="content"
                        placeholder="Content"></textarea>
                </div>
                <div class="form-group">
                    <select class="select2" id="category_id" name="category_id">
                        <option value="0">-- Chọn nhóm --</option>
                        @foreach($categories as $category)
                        <option value="{{$category->id}}">{{$category->name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" value="Admin" class="form-control" id="inputAuthor" name="author"
                        placeholder="Author">
                </div>
                <div class="form-group">
                    <label>Video youtube</label>
                    <input type="text" value="" class="form-control" id="inputAuthor" name="youtube"
                        placeholder="8hHuPo6trDk">
                </div>
                <input type="file" name="image"> <span class="small">540x330</span>
                <div class="form-group mt-3">
                    <input type="text" value="" class="form-control" autocomplete="false" name="keywords"
                        placeholder="Từ khóa...">
                </div>
            </div>
            <div class="col-sm-3 px-5 form-preview">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</div>
@endsection
