<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	{{-- CSRF Token --}}
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>{{ config('app.name', 'Laravel') }}</title>
	<meta name="description" content="A small, but reliable, bugs and tasks tracking system, with some project management features">
	<meta name="author" content="Israel R Pinheiro">
	<meta name="robots" content="noindex, nofollow">
	{{-- Icons --}}
	<link rel="icon" type="image/svg+xml" href="{{asset('favicon.svg')}}">
    <link rel="alternate icon" href="{{asset('favicon.png')}}">
	{{-- Styles Package --}}
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	{{-- Scripts Package --}}
	<script src="{{ asset('js/app.js') }}" defer></script>
</head> 