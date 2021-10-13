<footer class="">
    <div class="container">
        <hr class="border mb-5">
        <div class="row justify-content-md-between">
            <div class="col-lg-7 order-lg-2 mb-7 mb-lg-0">
                <h3 class="h6 text-secondary mb-3">Thông tin hữu ích</h3>
                <ul class="nav">
                  @foreach ($menus as $menu)
                  <li class="nav-item">
                    <a class="nav-link ml-0 pl-0" href="{{ $menu->link }}">{{ $menu->name }}</a>
                  </li>
                  @endforeach
                </ul>
            </div>
            <div class="col-md-1 align-middle">
              <img class="mt-1" src="{{ asset('images/logo.png') }}" width="70" />
            </div>
            <div class="col-lg-4 order-lg-1 d-flex align-items-start flex-column">
                <div class="row ml-1 mt-2">
                    <!-- List -->
                    <div class=" list-group-flush list-group-transparent">
                        <a class="" href="#">
                            <span class="fab fa-facebook-f min-width-3 text-center mr-2"></span>

                        </a>
                        <a class="" href="#">
                            <span class="fab fa-twitter min-width-3 text-center mr-2"></span>

                        </a>
                        <a class="" href="#">
                            <span class="fab fa-dribbble min-width-3 text-center mr-2"></span>

                        </a>
                        <a class="" href="#">
                            <span class="fab fa-github min-width-3 text-center mr-2"></span>

                        </a>
                    </div>
                    <!-- End List -->
                </div>

                <p class="small text-muted">Copyright 2019 All Right Reserved {{ config('app.name', 'Laravel') }}.</p>
            </div>
        </div>
    </div>
</footer>
