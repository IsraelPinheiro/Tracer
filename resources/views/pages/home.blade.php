@extends('layouts.app')
@section('title-complement', "Home")
@section('page-name')
    Home
@endsection
@section('page-subtitle')
    Welcome, admin! You have <a class="fw-medium" href="javascript:void(0)">8 new notifications</a>.
@endsection
@section('toolset')
    <a class="btn btn-alt-primary" href="javascript:void(0)">
        <i class="fa fa-cog"></i>
    </a>
    <div class="dropdown-menu dropdown-menu-end fs-sm" aria-labelledby="dropdown-analytics-overview">
        <a class="dropdown-item" href="javascript:void(0)">This Week</a>
        <a class="dropdown-item" href="javascript:void(0)">Previous Week</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0)">This Month</a>
        <a class="dropdown-item" href="javascript:void(0)">Previous Month</a>
    </div>
@endsection
@section('content')

@endsection
