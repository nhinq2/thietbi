@extends('layouts.web')
@section('metatag')
    <meta name="description" content="Tìm kiếm">
    <title>Tìm kiếm</title>
@endsection
@section('content')
<main id="content" role="main">
      <div class="container my-3">
          <div class="row">
              <div class="col-lg-3 col-md-3">
                   @include('layouts.partials.sidebar')
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="my-3 p-3 bg-white rounded shadow-sm">
                  <h4 class="border-bottom border-gray mb-3 text-muted">Từ khoá: <i>{{ $keyword }}</i></h4>
                      @include('layouts.partials.items')

                      <!-- Pagination -->
                      <nav aria-label="Page navigation">
                        {{ $products->links() }}
                      </nav>
                      <!-- End Pagination -->
              </div>
            </div>
          </div>
      </div>
</main>
@endsection
