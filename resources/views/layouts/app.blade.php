<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	@include('includes.head')
	<body>
		{{--
		Available classes for #page-container:
		GENERIC
			'remember-theme'							Remembers active color theme and dark mode between pages using localStorage when set through
														- Theme helper buttons [data-toggle="theme"],
														- Layout helper buttons [data-toggle="layout" data-action="dark_mode_[on/off/toggle]"]
														- ..and/or Dashmix.layout('dark_mode_[on/off/toggle]')
		SIDEBAR & SIDE OVERLAY
			'sidebar-r'								 Right Sidebar and left Side Overlay (default is left Sidebar and right Side Overlay)
			'sidebar-mini'							  Mini hoverable Sidebar (screen width > 991px)
			'sidebar-o'								 Visible Sidebar by default (screen width > 991px)
			'sidebar-o-xs'							  Visible Sidebar by default (screen width < 992px)
			'sidebar-dark'							  Dark themed sidebar
			'side-overlay-hover'						Hoverable Side Overlay (screen width > 991px)
			'side-overlay-o'							Visible Side Overlay by default
			'enable-page-overlay'					   Enables a visible clickable Page Overlay (closes Side Overlay on click) when Side Overlay opens
			'side-scroll'							   Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (screen width > 991px)
		HEADER
			''										  Static Header if no class is added
			'page-header-fixed'						 Fixed Header
		FOOTER
			''										  Static Footer if no class is added
			'page-footer-fixed'						 Fixed Footer (please have in mind that the footer has a specific height when is fixed)
		HEADER STYLE
			''										  Classic Header style if no class is added
			'page-header-dark'						  Dark themed Header
			'page-header-glass'						 Light themed Header with transparency by default
														(absolute position, perfect for light images underneath - solid light background on scroll if the Header is also set as fixed)
			'page-header-glass page-header-dark'		 Dark themed Header with transparency by default
														(absolute position, perfect for dark images underneath - solid dark background on scroll if the Header is also set as fixed)
		MAIN CONTENT LAYOUT
			''										  Full width Main Content if no class is added
			'main-content-boxed'						Full width Main Content with a specific maximum width (screen width > 1200px)
			'main-content-narrow'					   Full width Main Content with a percentage width (screen width > 1200px)
		DARK MODE
			'sidebar-dark page-header-dark dark-mode'   Enable dark mode (light sidebar/header is not supported with dark mode)
		--}}
        {{-- Page Container --}}
		<div id="page-container" class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow">
			{{-- Side Overlay--}}
			@include('includes.side-overlay')
			{{-- Sidebar --}}
			@include('includes.sidebar')
			{{-- Header --}}
			@include('includes.header')
			{{-- Main Container --}}
			<main id="main-container">
                {{-- Hero --}}
				<div class="content">
					<div class="d-md-flex justify-content-md-between align-items-md-center py-3 pt-md-3 pb-md-0 text-center text-md-start">
					  	<div>
							<h1 class="h3 mb-1">
								{{-- Page Title --}}
								@yield('page-name')
							</h1>
							<p class="fw-medium mb-0 text-muted">
								{{-- Page Subtitle --}}
								@yield('page-subtitle')
							</p>
						</div>
						<div class="mt-4 mt-md-0">
							@yield('toolset')
						</div>
					</div>
				</div>
				{{-- Page Content --}}
				<div class="content">
					@yield('content')
				</div>
			</main>
			{{-- Footer --}}
			@include("includes.footer")
		</div>
	</body>
</html>
