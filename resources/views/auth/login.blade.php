@extends('layouts.auth')
@section('title-complement', "Login")
@section('header')
	<div class="mb-3 text-center">
		<a class="link-fx fw-bold fs-1" href="index.html">
			{{-- Tracer --}}
			<span class="text-dark">Tr</span><span class="text-primary">ace</span><span class="text-dark">r</span>
		</a>
		<p class="text-uppercase fw-bold fs-sm text-muted">{{ __('Login') }}</p>
	</div>
@endsection

@section('form')
	<form class="js-validation-signin" method="post" action="{{ route('login') }}">
		@csrf
		<div class="py-3">
			<div class="mb-4">
				<input type="text" class="form-control form-control-lg form-control-alt" id="email" name="email" placeholder="{{ __('E-mail') }}">
			</div>
			<div class="mb-4">
				<input type="password" class="form-control form-control-lg form-control-alt" id="password" name="password" placeholder="{{ __('Password') }}">
			</div>
		</div>
		<div class="mb-4">
			<button type="submit" class="btn w-100 btn-lg btn-hero btn-primary">
				<i class="fa fa-fw fa-sign-in-alt opacity-50 me-1"></i> {{ __('Login') }}
			</button>
			<p class="mt-3 mb-0 d-lg-flex justify-content-lg-between">
				@if (Route::has('password.request'))
					<a class="btn btn-sm btn-alt-secondary d-block d-lg-inline-block mb-1" href="{{ route('password.request') }}">
						<i class="fa fa-exclamation-triangle opacity-50 me-1"></i> {{ __('Forgot Your Password ?') }}
					</a>
				@endif
				@if (Route::has('register'))
					<a class="btn btn-sm btn-alt-secondary d-block d-lg-inline-block mb-1" href="{{ route('register') }}">
						<i class="fa fa-plus opacity-50 me-1"></i> {{ __('Create Account') }}
					</a>
				@endif
			</p>
		</div>
	</form>
@endsection