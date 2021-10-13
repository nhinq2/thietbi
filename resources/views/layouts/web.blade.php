<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('favicon/icon.png') }}">
    <link rel="apple-touch-icon" sizes="90x90" href="/favicon/icon.png">
    <link rel="icon" type="image/png" sizes="90x90" href="/favicon/icon.png">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('metatag')

    <!-- Scripts -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="{{ asset('js/site.min.js') }}" defer></script>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap" rel="stylesheet">

    <!-- Styles -->
    <!-- CSS Global Compulsory -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/site.min.css') }}" rel="stylesheet">
</head>
<body data-spy="scroll" data-target="#app">
  @include('layouts.partials.header')
    <div id="app" class="mt-md-4 mt-5 pt-lg pt-xs">
        <main class="py-2">
            @yield('content')
        </main>
        @include('layouts.partials.footer')
    </div>
</body>
</html>
