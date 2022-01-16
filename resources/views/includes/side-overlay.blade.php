<aside id="side-overlay">
    {{-- Side Header --}}
    <div class="bg-image" style="background-image: url('assets/media/various/bg_side_overlay_header.jpg');">
        <div class="bg-primary-op">
            <div class="content-header">
            {{-- User Avatar --}}
            <a class="img-link me-1" href="be_pages_generic_profile.html">
                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar10.jpg" alt="">
            </a>
            {{-- User Info --}}
            <div class="ms-2">
                <a class="text-white fw-semibold" href="be_pages_generic_profile.html">George Taylor</a>
                <div class="text-white-75 fs-sm">Full Stack Developer</div>
            </div>
            {{-- Layout API, functionality initialized in Template._uiApiLayout() --}}
            <a class="ms-auto text-white" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_close">
                <i class="fa fa-times-circle"></i>
            </a>
            {{-- END Close Side Overlay --}}
            </div>
        </div>
    </div>
    {{-- END Side Header --}}

    {{-- Side Content --}}
    <div class="content-side">
    {{-- Side Overlay Tabs --}}
    <div class="block block-transparent pull-x pull-t mb-0">
        <ul class="nav nav-tabs nav-tabs-block nav-justified" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="so-settings-tab" data-bs-toggle="tab" data-bs-target="#so-settings" role="tab" aria-controls="so-settings" aria-selected="true">
            <i class="fa fa-fw fa-cog"></i>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="so-people-tab" data-bs-toggle="tab" data-bs-target="#so-people" role="tab" aria-controls="so-people" aria-selected="false">
            <i class="far fa-fw fa-user-circle"></i>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="so-profile-tab" data-bs-toggle="tab" data-bs-target="#so-profile" role="tab" aria-controls="so-profile" aria-selected="false">
            <i class="far fa-fw fa-edit"></i>
            </button>
        </li>
        </ul>
        <div class="block-content tab-content overflow-hidden">
        {{-- People --}}
        <div class="tab-pane pull-x fade fade-up" id="so-people" role="tabpanel" aria-labelledby="so-people-tab">
            <div class="block mb-0">
            {{-- Online --}}
            <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Online</span>
            </div>
            <div class="block-content">
                <ul class="nav-items">
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar3.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Amanda Powell</div>
                        <div class="fs-sm text-muted">Photographer</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar11.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Ryan Flores</div>
                        <div class="fw-normal fs-sm text-muted">Web Designer</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar6.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Melissa Rice</div>
                        <div class="fw-normal fs-sm text-muted">Web Developer</div>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            {{-- Online --}}

            {{-- Busy --}}
            <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Busy</span>
            </div>
            <div class="block-content">
                <ul class="nav-items">
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar2.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-danger"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Andrea Gardner</div>
                        <div class="fw-normal fs-sm text-muted">UI Designer</div>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            {{-- END Busy --}}

            {{-- Away --}}
            <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Away</span>
            </div>
            <div class="block-content">
                <ul class="nav-items">
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar10.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Jose Wagner</div>
                        <div class="fw-normal fs-sm text-muted">Copywriter</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar4.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Andrea Gardner</div>
                        <div class="fw-normal fs-sm text-muted">Writer</div>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            {{-- END Away --}}

            {{-- Offline --}}
            <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Offline</span>
            </div>
            <div class="block-content">
                <ul class="nav-items">
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar16.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-muted"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Jose Wagner</div>
                        <div class="fw-normal fs-sm text-muted">Teacher</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar4.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-muted"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Andrea Gardner</div>
                        <div class="fw-normal fs-sm text-muted">Photographer</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar4.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-muted"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Sara Fields</div>
                        <div class="fw-normal fs-sm text-muted">Front-end Developer</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a class="d-flex py-2" href="be_pages_generic_profile.html">
                    <div class="flex-shrink-0 mx-3 overlay-container">
                        <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar16.jpg" alt="">
                        <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-muted"></span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="fw-semibold">Jack Estrada</div>
                        <div class="fw-normal fs-sm text-muted">UX Specialist</div>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            {{-- END Offline --}}

            {{-- Add People --}}
            <div class="block-content block-content-full border-top">
                <a class="btn w-100 btn-alt-primary" href="javascript:void(0)">
                <i class="fa fa-fw fa-plus me-1 opacity-50"></i> Add People
                </a>
            </div>
            {{-- END Add People --}}
            </div>
        </div>
        {{-- END People --}}

        {{-- Profile --}}
        <div class="tab-pane pull-x fade fade-up" id="so-profile" role="tabpanel" aria-labelledby="so-profile-tab">
            <form action="be_pages_dashboard.html" method="POST" onsubmit="return false;">
            <div class="block mb-0">
                {{-- Personal --}}
                <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Personal</span>
                </div>
                <div class="block-content block-content-full">
                <div class="mb-4">
                    <label class="form-label">Username</label>
                    <input type="text" readonly class="form-control" id="so-profile-username-static" value="Admin">
                </div>
                <div class="mb-4">
                    <label class="form-label" for="so-profile-name">Name</label>
                    <input type="text" class="form-control" id="so-profile-name" name="so-profile-name" value="George Taylor">
                </div>
                <div class="mb-4">
                    <label class="form-label" for="so-profile-email">Email</label>
                    <input type="email" class="form-control" id="so-profile-email" name="so-profile-email" value="g.taylor@example.com">
                </div>
                </div>
                {{-- END Personal --}}

                {{-- Password Update --}}
                <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Password Update</span>
                </div>
                <div class="block-content block-content-full">
                <div class="mb-4">
                    <label class="form-label" for="so-profile-password">Current Password</label>
                    <input type="password" class="form-control" id="so-profile-password" name="so-profile-password">
                </div>
                <div class="mb-4">
                    <label class="form-label" for="so-profile-new-password">New Password</label>
                    <input type="password" class="form-control" id="so-profile-new-password" name="so-profile-new-password">
                </div>
                <div class="mb-4">
                    <label class="form-label" for="so-profile-new-password-confirm">Confirm New Password</label>
                    <input type="password" class="form-control" id="so-profile-new-password-confirm" name="so-profile-new-password-confirm">
                </div>
                </div>
                {{-- END Password Update --}}

                {{-- Options --}}
                <div class="block-content block-content-sm block-content-full bg-body">
                <span class="text-uppercase fs-sm fw-bold">Options</span>
                </div>
                <div class="block-content">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="so-settings-status" name="so-settings-status">
                    <label class="form-check-label fw-semibold" for="so-settings-status">Online Status</label>
                </div>
                <p class="text-muted fs-sm">
                    Make your online status visible to other users of your app
                </p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="so-settings-notifications" name="so-settings-notifications">
                    <label class="form-check-label fw-semibold" for="so-settings-notifications">Notifications</label>
                </div>
                <p class="text-muted fs-sm">
                    Receive desktop notifications regarding your projects and sales
                </p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="so-settings-updates" name="so-settings-updates">
                    <label class="form-check-label fw-semibold" for="so-settings-updates">Auto Updates</label>
                </div>
                <p class="text-muted fs-sm">
                    If enabled, we will keep all your applications and servers up to date with the most recent features automatically
                </p>
                </div>
                {{-- END Options --}}

                {{-- Submit --}}
                <div class="block-content block-content-full border-top">
                <button type="submit" class="btn w-100 btn-alt-primary">
                    <i class="fa fa-fw fa-save me-1 opacity-50"></i> Save
                </button>
                </div>
                {{-- END Submit --}}
            </div>
            </form>
        </div>
        {{-- END Profile --}}
        </div>
    </div>
    {{-- END Side Overlay Tabs --}}
    </div>
    {{-- END Side Content --}}
</aside>