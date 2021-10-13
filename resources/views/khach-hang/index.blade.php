@extends('layouts.web')
@section('metatag')
<title>OPIC & ASSOCIATES - Ý kiến khách hàng</title>
<meta name="description" content="">
@endsection
@section('content')
<div class="container sp">
    <div class="breadcrumb">
        <a href="{{ route('home') }}" title="Trang chủ">Home</a>
        <a href="{{ route('khach_hang.index') }}" title="Khách hàng">Khách hàng</a>
    </div>
    <div class="text-center card-group my-5">
        @foreach ($customers as $customer)
        <div class="col-xs-12 col-md-4 mb-3">
            <div class="card" style="height: 100%">
                <div class="p-3" style="height: 200px">
                    <img class="img-fluid border-ra" style="width: 100%; height: 100%; object-fit: contain"
                        src="{{ $customer->photo() }}" alt="{{ $customer->title }}">
                </div>
                <div class="card-body p-3">
                    <h3 class="font-weight-bold">{{ $customer->title }}</h3>
                    <p class="small">{{ $customer->summary }}</p>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection
