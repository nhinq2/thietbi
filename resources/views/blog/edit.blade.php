@extends('layouts.admin')
@section('content')
@section('metatag')
<title>admin blog</title>
@endsection
<div class="box-typical box-typical-padding col-sm-12">
    <form enctype="multipart/form-data" action="/admin/blog/update" method="POST">
        {{ csrf_field() }}
        <div class="form-group row">
            <div class="col-sm-10">
                Edit Blog
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 form-editor">
                <div class="form-group has-success">
                    <input type="text" class="form-control form-control-success" autocomplete="false" id="inputTitle"
                        name="title" value="{{$blog->title}}" placeholder="Title">
                </div>
                <div class="form-group">
                    <textarea class="form-control" autocomplete="false" id="inputSummary" name="summary"
                        placeholder="Summary">{{$blog->summary}}</textarea>
                </div>
                <div class="form-group">
                    <textarea class="form-control summernote" autocomplete="false" id="inputContent" name="content"
                        placeholder="Content">{{$blog->content}}</textarea>
                </div>
                <div class="form-group">
                    <select class="select2" id="category_id" name="category_id">
                        <option value="0">-- Chọn nhóm --</option>
                        @foreach($categories as $category)
                        <option @if($category->id == $blog->category_id) selected @endif
                            value="{{$category->id}}">{{$category->name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" value="{{$blog->author}}" class="form-control" autocomplete="false"
                        id="inputAuthor" name="author" placeholder="Author">
                </div>
                <div class="form-group">
                    <label>Video youtube</label>
                    <input type="text" value="{{$blog->youtube}}" class="form-control" id="inputAuthor" name="youtube"
                        placeholder="8hHuPo6trDk">
                </div>
                <input type="file" name="image"> <span class="small">540x330</span>
                <input type="hidden" name="blog_id" value="{{$blog->id}}">
                <div class="form-group mt-3">
                    <input type="text" value="{{ $blog->keywords }}" class="form-control" autocomplete="false"
                        name="keywords" placeholder="Từ khóa...">
                </div>
            </div>
            <div class="col-sm-3 px-5 form-preview">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</div>
@endsection
