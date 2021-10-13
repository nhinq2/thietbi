@extends('layouts.web')
@section('metatag')
<title>{{$portfolio->title}}</title>
<meta name="description" content="{{$portfolio->summary}}">
@endsection
@section('content')
<!-- Product Description Section -->
@php
 $pictures = json_decode($portfolio->image_link);
@endphp
<!-- ========== MAIN CONTENT ========== -->
 <main id="content" role="main">
   <!-- Description Section -->
   <div class="container space-1 space-3--md">
     <div class="row">
       <div class="col-md-7 mb-7 mb-md-0">
         <!-- Cubeportfolio -->
         <div class="cbp"
              data-layout="grid"
              data-animation="quicksand"
              data-x-gap="32"
              data-y-gap="32"
              data-media-queries='[
               {"width": 300, "cols": 1}
             ]'>
             @foreach($pictures as $picture)
               <!-- Item -->
               <div class="cbp-item">
                 <div class="cbp-caption">
                   <img src="{{ asset('upload/portfolio/'.$picture)}}" alt="{{$portfolio->title}}">
                 </div>
               </div>
               <!-- End Item -->
             @endforeach
         </div>
         <!-- End Cubeportfolio -->
       </div>

       <div id="stickyBlockStartPoint" class="col-md-5">
         <!-- Sticky Block -->
         <div class="js-sticky-block pl-lg-4"
              data-sticky-view="md"
              data-start-point="#stickyBlockStartPoint"
              data-end-point="#stickyBlockEndPoint"
              data-offset-top="80"
              data-offset-bottom="130">
           <div class="mb-6">
               <h1 class="font-weight-normal">{{$portfolio->title}}</h1>
               <p class="mb-0">{!!$portfolio->summary!!}</p>
           </div>

           <hr class="my-5">

           <!-- List -->
           <ul class="list-unstyled mb-0">
             <li class="">
               <div class="min-width-35">
                 <h4 class="h6">Thông tin công trình </h4>
               </div>
                 <small class="d-block text-muted">
                   {!!$portfolio->content!!}
                 </small>
             </li>
           </ul>
           <!-- End List -->

           <hr class="my-5">

           <div class="media">
             <div class="min-width-35">
               <h4 class="h6">Share</h4>
             </div>
             <div class="media-body">
               <!-- Social Networks -->
               <ul class="list-inline mb-0">
                 <li class="list-inline-item">
                   <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                     <span class="fab fa-facebook-f u-icon__inner"></span>
                   </a>
                 </li>
                 <li class="list-inline-item">
                   <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                     <span class="fab fa-google u-icon__inner"></span>
                   </a>
                 </li>
                 <li class="list-inline-item">
                   <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                     <span class="fab fa-twitter u-icon__inner"></span>
                   </a>
                 </li>
                 <li class="list-inline-item">
                   <a class="u-icon u-icon--secondary u-icon--sm" href="#">
                     <span class="fab fa-github u-icon__inner"></span>
                   </a>
                 </li>
               </ul>
               <!-- End Social Networks -->
             </div>
           </div>
         </div>
         <!-- End Sticky Block -->
       </div>
     </div>
   </div>
   <!-- End Description Section -->

   <!-- Sticky Block End Point -->
   <div id="stickyBlockEndPoint"></div>

   <!-- Pagination -->
   <div class="container space-2-bottom">
     <nav aria-label="Page navigation example">
       <ul class="pagination justify-content-between">
             @foreach($portfolio_next as $portfolio)
             @php
              $pictures = json_decode($portfolio->image_link);
              $picture = @$pictures[0];
             @endphp
             <li class="page-item col">
               <a class="d-block border text-dark text-center" href="/portfolio/{{$portfolio->slug}}">
               {{$portfolio->title}} </a>
               </li>
              @endforeach

       </ul>
     </nav>
   </div>
   <!-- End Pagination -->
 </main>
 <!-- ========== END MAIN CONTENT ========== -->
@endsection
