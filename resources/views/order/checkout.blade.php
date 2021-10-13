@extends('layouts.web')
@section('metatag')
<title>Thông tin đặt hàng</title>
<meta name="description" content="">
@endsection
@section('content')
<!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Checkout Form Section -->
    <div class="container my-4">
      <div class="row">
        <div class="col-lg-4 order-lg-2 mb-9 mb-lg-0 d-none d-sm-block">
          <!-- Order Summary -->
          <div class="bg-light border rounded p-3">
            <!-- Title -->
            <h2 class="h5 mb-0 p-0">Tổng đơn hàng</h2>
            <!-- End Title -->

            <hr class="my-4">
            @foreach($cartcontent as $row)
            <!-- Product -->
            <div class="media mb-4">
              <div class="d-flex position-relative mr-3">
                <img width="64" src="{{$row->id->photo()}}">
              </div>
              <div class="media-body">
                <h4 class="h6 mb-0">{{$row->name}}</h4>
                <small class="d-block text-secondary">Số lượng: {{$row->qty}}</small>
                <small class="d-block text-secondary">Giá: {{$row->price}} đ</small>
                <small class="d-block text-secondary">Thành tiền: {{$row->total}} đ</small>
              </div>
            </div>
            <!-- End Product -->
            @endforeach

            <hr class="my-4">
            {{--
            <!-- Title -->
            <div class="mb-3">
              <h4 class="h6 mb-0">Have a voucher?</h4>
              <small class="text-secondary">Apply your voucher below.</small>
            </div>
            <!-- End Title -->

            <!-- Input -->
            <form class="js-focus-state input-group input-group-sm form form--sm">
              <input type="search" class="form-control "
                     placeholder="Voucher"
                     aria-label="Voucher">
              <div class="input-group-append">
                <button type="button" class="btn btn-sm btn-primary">Apply</button>
              </div>
            </form>
            <!-- End Input -->

            <hr class="my-4">
            --}}

            <!-- Total -->
            <div class="media align-items-center mb-2">
              <div class="mr-3">
                <h4 class="h6 text-muted font-weight-normal mb-0">Tổng tiền hàng</h4>
              </div>
              <div class="media-body text-right">
                <span>{{$cartsubtotal}}</span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="mr-3">
                <h4 class="h6 text-muted font-weight-normal mb-0">Phí vận chuyển</h4>
              </div>
              <div class="media-body text-right">
                <span>{{$carttax}}</span>
              </div>
            </div>
            <!-- End Total -->

            <hr class="my-4">

            <!-- Total -->
            <div class="media align-items-center">
              <div class="mr-3">
                <h4 class="h6">Tổng cộng</h4>
              </div>
              <div class="media-body text-right">
                <span class="font-weight-medium">{{$carttotal}}</span>
              </div>
            </div>
            <!-- End Total -->
          </div>
          <!-- End Order Summary -->
        </div>

        <div class="col-lg-8 order-lg-1">
          <!-- Checkout Form -->
          <form method="POST" action="{{route('order')}}">
            @csrf
            <!-- Step Form Content -->
            <div id="stepFormContent">
              <!-- Customer Info -->
              <div id="customerInfoStep" class="active">
                <!-- Title -->
                <div class="mb-4">
                  <h1 class="h4">Thông tin đơn hàng</h1>
                </div>
                <!-- End Title -->

                <!-- Billing Form -->
                <div class="row">
                  <div class="col-md-6">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Họ và Tên
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " type="text" name="firstname" required
                               placeholder="Nguyễn Phương Anh" value="{{@$order->firstname}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>

                  <div class="col-md-6 d-none">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Họ
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " name="lastname" type="text"
                               placeholder="Nguyễn Phương" value="{{@$order->lastname}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>

                  <div class="w-100"></div>

                  <div class="col-md-6">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Điện thoại
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " name="phone" type="number" required
                               placeholder="0905 000 111" value="{{@$order->phone}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>

                  <div class="col-md-6 d-none">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Email
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " type="email" name="email"
                               placeholder="phuonganh@gmail.com" value="{{@$order->email}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="w-100"></div>
                  <div class="col-md-12">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Địa chỉ
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " type="text" name="address" required
                               placeholder="113 Điện Biên Phủ" value="{{@$order->address}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>

                  <div class="w-100"></div>

                  <div class="col-md-6 d-none">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Quận huyện
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " name="district" type="text"
                               placeholder="Thanh Khê" value="{{@$order->district}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>

                  <div class="col-md-6 d-none">
                    <!-- Input -->
                    <div class="js-form-message mb-4 form-row">
                      <label class="h6 small d-block text-uppercase col-3 col-md-12">
                        Thành phố
                        <span class="text-danger">*</span>
                      </label>

                      <div class="js-focus-state input-group form col-9 col-md-12">
                        <input class="form-control " type="text" name="city"
                               placeholder="Đà Nẵng" value="{{@$order->city}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="w-100"></div>
                  <div class="col-md-10">
                    <!-- Input -->
                    <div class="js-form-message mb-4">
                      <label class="h6 small d-block text-uppercase">
                        Giờ nhận hàng / Ghi chú
                      </label>

                      <div class="js-focus-state input-group form">
                        <input class="form-control " type="text" name="note"
                               placeholder="Chỉ nhận hàng vào sáng thứ 7" value="{{@$order->note}}">
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                </div>
                <!-- End Billing Form -->

                <!-- Buttons -->
                <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
                  <a class="d-block mb-3 mb-sm-0" href="/san-pham">
                    <span class="fa fa-arrow-left mr-2"></span>
                    Tiếp tục mua
                  </a>
                  @if(count($cartcontent) > 0)<button type="submit" class="btn btn-primary">Xác nhận Đặt hàng</button>@endif
                </div>
                <!-- End Buttons -->

                <hr class="my-9">
                <div class="w-100"></div>
                <!-- Info -->
                <div class="media">
                  <img class="align-self-center mr-3" src="../../assets/svg/components/secure-checkout.svg" alt="Cho hang moi">
                  <div class="media-body mt-5">
                    <!-- Icon Block -->
                    <h3 class="h6 mb-1">Dịch vụ giao hàng nhanh</h3>
                    <p class="text-muted">Giao hàng nhanh trong nội thành</p>
                    <!-- End Icon Block -->
                  </div>
                </div>
                <!-- End Info -->
              </div>
              <!-- End Customer Info -->
            </div>
            <!-- End Step Form Content -->
          </form>
          <!-- End Checkout Form -->
        </div>
      </div>
    </div>
    <!-- End Checkout Form Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
@endsection
