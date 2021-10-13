@extends('layouts.web')

@section('metatag')
<title>Sản phẩm {{@$parent->name}} {{@$category->name}}</title>
<meta name="description" content="{{@$category->name}}">
@endsection

@section('content')
<main id="content" role="main">
        <div class="container my-2">
            <div class="row">
                <div class="col-4 col-lg-3 col-md-3 p-0-xs">
                     @include('layouts.partials.sidebar')
                </div>
                <div class="col-8 col-lg-9 col-md-9 p-0-xs">
                  <div class="my-3 p-3 bg-white rounded shadow-sm">
                    <h4 class="border-bottom border-gray text-secondary mb-3 text-uppercase">{{ $current_category->name ?? 'Sản phẩm' }}</h4>
                        @include('layouts.partials.items')

                        <!-- Pagination -->
                        {{ $products->links() }}
                        <!-- End Pagination -->

                </div>
              </div>
            </div>
        </div>
</main>
@endsection

@section('js')
<script type="text/javascript">
    $(document).ready(function (e) {
        $('.has-sub').click(function () {
            $(this).toggleClass('tap');
        });
    });
</script>
@endsection
