@extends('layouts.web')
@section('metatag')
     <meta name="description" content="Phần mềm Marketing và Bán hàng, giúp doanh nghiệp tạo mối quan hệ với khách hàng; Tự động hóa khâu chăm sóc khách hàng; Và kết nối phòng ban công ty làm việc cùng nhau.">
      <meta name="keywords" content="phần mềm quản lý công việc, phần mềm quản lý bán hàng, phần mềm marketing,">
      <title>Phần mềm bán hàng | SalesFlow</title>
@endsection     
@section('content')

<div class="container pt-5">
	<div class="row mb-5">
		<div class="col-lg-12">
			<h4>Blog</h4>
		</div>
	</div>
	<div class="row">
			@foreach($blogs  as $blog)
			<div class="col-lg-6 mb-7">
				<article>
		            <div class="mb-5">
		              <!-- Image -->
		              <a href="blog/{{$blog->alias}}">
			              <img class="img-fluid w-100 mh-200 rounded" src="{{ asset('upload/blog/'.$blog->image_link)}}" alt="{{$blog->title}}">
			          </a>
		              <!-- End Image -->
		            </div>
		            <small class="d-block text-muted mb-3 mt-2">{{ date('d/m/Y', strtotime($blog->created_at))}}</small>
		            <h2 class="h5">
		                <a href="blog/{{$blog->alias}}">{{$blog->title}}</a>
		            </h2>
		            <p>{{$blog->summary}}</p>
		        </article>
		     </div>
		    @endforeach      
	</div>
</div>

@endsection