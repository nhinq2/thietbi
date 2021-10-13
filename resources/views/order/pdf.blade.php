<!DOCTYPE html>
<html lang="vi">
	<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta charset="UTF-8">
  <style type="text/css">
    @font-face {
       font-family: Arial;
       src: url('fonts/arial.ttf') format('truetype');
    }
    @font-face {
       font-family: Arialbd;
       src: url('fonts/arialbd.ttf') format('truetype');
    }
    *{
      font-family: 'Arial';
    }
		.h1{
			font-size: 2rem
		}
    .h3,.font-weight-bold{
      font-family: 'Arialbd';
    }
    .table {
      width: 100%;
      margin-bottom: 1rem;
      background-color: transparent;
  }
  .table th{
    font-family: 'Arial';
  }
	.table td{
    padding: 4px;
		vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  .table thead td {
    vertical-align: bottom;
    border-bottom: 1px solid #dee2e6;
  }
	.table-bordered {
    border: 1px solid #dee2e6;
	}
	.text-center{
		text-align: center;
	}
	.text-left{
		text-align: left;
	}
	.text-uppercase{
		text-transform: uppercase;
	}
	.position-relative{
		position: relative;
	}
	.mb-2{
		margin-bottom: 1rem;
	}
	.w-50{
		width: 50%;
	}
  </style>
  <title>Đơn hàng</title>
	</head>
	<body>
<div>
	<div class="text-center">
		  <div class="h3 mb-1">Dịch vụ {{ config('app.name', 'Chonhanh.net') }}</div>
			<div class="mb-1">Website: {{ config('app.url', 'chonhanh.net') }} - Đặt hàng: 086 600 2489</div>
			<div class="h1 mb-2">Thông tin đơn hàng</div>
			<div>Ngày tháng: {{@$info['date']}}</div>
			<div class="h3 mb-1 text-left">Khách hàng</div>
			<table class="table">
				<tbody>
					<tr>
						<td><label class="justify-content-start">Họ và Tên</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$info['name']}}</span></td>
					</tr>
					<tr>
						<td><label class="justify-content-start">Số điện thoại
						</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$info['phone']}}</span></td>
					</tr>
					<tr>
						<td><label class="justify-content-start">Địa chỉ
						</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$info['address']}}</span></td>
					</tr>
				</tbody>
			</table>
			<div class="h3 mb-1 text-left">Đơn hàng</div>
			<table class="table">
				<thead>
					<tr>
						<td class="font-weight-bold">Sản phẩm</td>
						<td class="font-weight-bold">ĐVT</td>
						<td class="font-weight-bold">SL</td>
						<td class="font-weight-bold">Đơn giá</td>
						<td class="font-weight-bold">Thành tiền</td>
					</tr>
				</thead>
				<tbody>
					@foreach($cartcontent as $row)
					<tr>
						<td>{{$row->name}}</td>
						<td>{{$row->id->unit}}</td>
						<td>{{$row->qty}}</td>
						<td>{{$row->price}} đ</td>
						<td>{{$row->total}} đ</td>
					</tr>
					@endforeach
					<tr>
						<td colspan="4"><label class="justify-content-start">Tổng tiền hàng</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$cartsubtotal}}đ</span></td>
					</tr>
					<tr>
						<td colspan="4"><label class="justify-content-start">Phí vận chuyển
						</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$carttax}}đ</span></td>
					</tr>
					<tr>
						<td colspan="4"><label class="justify-content-start">Tổng cộng
						</label></td>
						<td><span class="justify-content-end font-weight-bold">{{$carttotal}}đ</span></td>
					</tr>
				</tbody>
			</table>
			<div class="my-2">
				<div class="mb-1 text-left">
					<label class="h3 justify-content-start font-weight-bold font-weight-italic">Ghi chú: </label>
				  <span class="justify-content-end">{{$info['note']}}</span>
				</div>
      </div>
	</div>
</div>
</body>
</html>
