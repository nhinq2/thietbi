@extends('layouts.web')

@section('metatag')
<title>OPIC & ASSOCIATES - Kết nối giao thương</title>
<meta name="description" content="">
@endsection

@section('content')
<div class="container sp">
    <div class="breadcrumb">
        <a href="{{ route('home') }}" title="Trang chủ">Home</a>
        <a href="{{ route('giao_thuong.index') }}" title="">Kết nối giao thương</a>
    </div>
    <div class="container">
        <div class="text-center card-group my-5">
            @foreach ($giaothuong as $business)
            <div class="col-xs-12 col-md-4 mb-3">
                <div class="card" style="height: 100%">
                    <div class="p-3" style="height: 200px">
                        <img class="img-fluid border-ra" style="width: 100%; height: 100%; object-fit: contain"
                            src="{{ $business->photo() }}" alt="{{ $business->name }}">
                    </div>
                    <div class="card-body p-3">
                        <h3 class="font-weight-bold">{{ $business->name }}</h3>
                        <p class="small">
                            Địa chỉ: {{ $business->address }} <br>
                            Ngành nghề: {{ $business->business }}
                        </p>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        <div>
            {{ $giaothuong->links() }}
            <style>
                .pagination {
                    justify-content: center;
                }

                .page-item.active .page-link {
                    z-index: 1;
                    color: #fff;
                    background-color: #EEA81B;
                    border-color: #EEA81B;
                }
            </style>
        </div>
    </div>
</div>
@endsection
