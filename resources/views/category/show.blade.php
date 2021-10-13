@extends('layouts.web')
@section('metatag')
     <meta name="description" content="{{$category->summary}}">
      <meta name="keywords" content="phần mềm quản lý công việc, phần mềm quản lý bán hàng, phần mềm marketing,">
      <title>{{$category->name}}</title>
@endsection     
@section('content')

<div class="container pt-5">
	<div class="row">
		<div class="col-lg-3 order-lg-1">
			 
		</div>
		<div class="col-lg-9 order-lg-2 mb-9 mb-lg-0">
			 <div class="w-lg-60 mx-auto pb-3">
			 	<img class="img-fluid" src="{{ asset('upload/category/'.$category->image_link)}}">
			 </div>
        <div class="mb-4">
          <span class="text-muted">{{ date('d/m/Y', strtotime($category->created_at))}}</span>
        </div>

        <div class="mb-5">
           <h2 class="h5 mb-3">{{$category->name}}</h2>
          <p>{{$category->summary}}</p>
        </div>

        <p>{!!$category->content!!}</p>
        <p>- <em>{{$category->author}}</em></p>
      </div>
		</div>
	</div>
</div>

@endsection