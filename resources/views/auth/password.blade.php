@extends('layouts.admin')

@section('content')
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              <form class="p-4 rounded" method="POST" action="{{ route('admin.password_store') }}">
                 {{ csrf_field() }}
                 <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <label>Mật khẩu</label>
                    <input id="password" type="password" class="form-control" name="password" required placeholder="******">
                    @if ($errors->has('password'))
                    <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                 </div>
                 <button type="submit" class="btn btn-primary btn-rounded">
                 Thay đổi
                 </button>
              </form>
            </div>
          </div>
        </div>
    </div>
@endsection
