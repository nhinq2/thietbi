@extends('layouts.web')
@section('metatag')
<title>YÊU CẦU ĐẶT HÀNG</title>
<meta name="description" content="YÊU CẦU ĐẶT HÀNG">
@endsection
@section('content')

<!-- ========== MAIN CONTENT ========== -->
<main role="main" class="container">
  <div class="row">
    <div class="col-sm-12">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h4>YÊU CẦU ĐẶT HÀNG</h4>

          <form action="{{ route('send') }}" method="post">
            @csrf
            <div class="row">
              <div  class="col-sm-8">
                <div class="form-group">
                    <label class="d-block">Nội dung yêu cầu <span class="text-danger">*</span></label>
                    <textarea name="content" class="form-control" required="" placeholder="SU HÀO XANH, Sữa Bắp Non, Kiwi Vàng New Zealand"></textarea>
                </div>
                <div class="form-group">
                  <label class="d-block">Họ và tên <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="name" required="" placeholder="Nguyễn Phương Anh">
                </div>
                <div class="form-group">
                  <label class="d-block">Số điện thoại <span class="text-danger">*</span></label>
                  <input type="number" class="form-control" name="phone" required="" placeholder="0905 000 111">
                </div>
                <div class="form-group">
                  <label class="d-block">Địa chỉ <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="address" required="" placeholder="113 Điện Biên Phủ, Thanh Khê, Đà Nẵng">
                </div>
                <div class="form-group d-none">
                  <label class="d-block">Địa chỉ email</label>
                  <input type="email" class="form-control" name="email" placeholder="phuonganh@gmail.com">
                </div>
          </div>
          <div class="col-sm-4">
            <div class="my-3 p-3 bg-light rounded shadow-sm">
              <button class="btn btn-primary" type="submit">Gửi đi</button></div>
            </div>
          </div>
          </form>
      </div>
   </div>
  </div>
</main>
<!-- ========== END MAIN CONTENT ========== -->
@endsection
