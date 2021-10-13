<div class="container-fluid space-1 bg-gray-100">
    <!-- Title -->
    <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-4">
        <span class="u-label u-label--sm u-label--purple mb-3">TIN TỨC MỚI NHẤT</span>
        <h2 class="section-title section-title-center"  >
              TIN TỨC
        </h2>
    </div>
    <!-- End Title -->

    <!-- Gallery -->

    <!-- Features Section -->
    <div class="bg-gray-100">
        <div class="container space-1-bottom">
            <div class="card-deck d-block d-md-flex">
                @foreach ($blogs as $blog)
                <!-- Card -->
                <article class="card border-0 mb-5">
                <div class="card-body row align-items-stretch no-gutters p-0">
                  <!-- News Blog Card -->
                  <div class="col-7 border border-right-0 rounded-left">
                    <div class="p-5">
                      <h3 class="h4"><a class="btn btn-sm btn-primary" href="{{ route('blog.show', $blog->slug) }}">{{ $blog->title }}</a></h3>
                      <p>{{ $blog->summary }}</p>
                    </div>
                  </div>
                  <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="{{ asset($blog->photo()) }}"></div>
                </div>
                <!-- End News Blog Card -->
              </article>
                <!-- End Card -->
                @endforeach
            </div>
        </div>
    </div>
    <!-- End Features Section -->

    <!-- End Gallery -->
</div>
