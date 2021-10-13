@component('mail::message')
# Thông tin đơn hàng

@component('mail::button', ['url' => ''])
Xem đơn hàng
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
