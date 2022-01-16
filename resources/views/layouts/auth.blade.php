<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @include('includes.head')
    <body>
        <div id="page-container">
            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="bg-image" style="background-image: url(@yield('image'));">
                    <div class="row g-0 bg-primary-op">
                        <!-- Main Section -->
                        <div class="hero-static col-md-6 d-flex align-items-center bg-body-extra-light">
                            <div class="p-3 w-100">
                                <!-- Header -->
                                @yield('header')
                                <!-- Form -->
                                <div class="row g-0 justify-content-center">
                                    <div class="col-sm-8 col-xl-6">
                                        @yield('form')
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Meta Info Section -->
                        <div class="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div class="p-3">
                                <p class="display-4 fw-bold text-white mb-3">
                                    Welcome to the future
                                </p>
                                <p class="fs-lg fw-semibold text-white-75 mb-0">
                                    Copyright &copy; <span data-toggle="year-copy"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </body>
</html>
