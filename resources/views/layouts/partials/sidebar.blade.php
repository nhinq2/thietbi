<div class="my-3 p-2 bg-white rounded shadow-sm">
  <h6 class="border-bottom border-gray pb-2 mb-0 text-uppercase">Mặt hàng chính</h6>
  <nav class="main-nav">
      @if (count($categories))
      <ul class="nav flex-column">
          @foreach ($categories as $category)
          @if (count($category->subCategories))
          <li class="has-sub nav-item"><a href="#" class="text-uppercase text-gray-dark">{{ $category->name }} <span class="sub-arrow"></span></a>
              <ul>
                  @foreach ($category->subCategories as $subCategory)
                  <li class="nav-item"><a class="nav-link p-0-xs small-xs text-uppercase" href="/danh-muc/{{ $subCategory->slug }}">{{ $subCategory->name }}</a></li>
                  @endforeach
              </ul>
          </li>
          @else
          <li class="nav-item my-1"><a class="text-uppercase btn btn-sm nav-link p-0-xs small-xs font-weight-bold text-left @if($category->id == @$current_category->id) btn-warning @else btn-light @endif" href="/danh-muc/{{ $category->slug }}"> <i class="fas fa-{{ $category->icon ?? 'fa-carrot' }} text-success pl-1"></i> {{ $category->name}}</a>
          </li>
          @endif
          @endforeach
      </ul>
      @endif
  </nav>
  @if(count($recently))
 <h6 class="mt-5 border-bottom border-gray pb-2 mb-0 text-uppercase">Sản phẩm bạn đã xem</h6>
 @php
  $color = ['e83e8c','6f42c1', '007bff'];
 @endphp
  @foreach($recently as $k => $product)
    <div class="media media-xs text-muted pt-3">
      <img class="img-fluid bd-placeholder-img mr-2 rounded" width="48" height="48" src="{{ $product->photo(true) }}" alt="{{$product->summary}}">
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark"><a style="color:#{{$color[$k]}}" href="/san-pham/{{$product->slug}}">{{$product->title}}</a></strong>
        <span>{{ $product->summary }}</span>
        <span class="lead d-block">{{number_format(@$product->price)}}đ</span>
      </p>
    </div>

   @endforeach
   @endif
  <small class="d-block text-right mt-3">
    <a class="text-muted" href="/san-pham">Tất cả sản phẩm <i class="fa fa-arrow-right fa-sm"></i></a>
  </small>
</div>
