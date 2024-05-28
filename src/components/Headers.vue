<template>
  <div class="header">

    <div class="header-left active">
        <a href="#" class="logo logo-normal">
            <img src="/src/assets/img/sec5.png" alt="">
        </a>
        <a href="index.html" class="logo logo-white">
            <img src="/src/assets/img/logo-white.png"  alt="">
        </a>
        <a href="index.html" class="logo-small">
            <img src="/src/assets/img/logo-small.png"  alt="">
        </a>
        <a id="toggle_btn" href="javascript:void(0);">
            <i data-feather="chevrons-left" class="feather-16"></i>
        </a>
    </div>

    <a id="mobile_btn" class="mobile_btn" href="#sidebar">
        <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </a>

    <ul class="nav user-menu">
      <li class="nav-item nav-searchinputs">
          <div class="top-nav-search">
          </div>
      </li>

      <li class="nav-item dropdown has-arrow flag-nav nav-item-box">
          <div class="dropdown-menu dropdown-menu-right">
          </div>
      </li>

      <li class="nav-item dropdown has-arrow main-drop">
          <a href="javascript:void(0);" class="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
          <span class="user-info">
              <span class="user-letter">
              <img src="/src/assets/img/profiles/userprof.png" alt="" class="img-fluid">
              </span>
              <span class="user-detail">
              <span class="user-name"></span>
              </span>
          </span>
          </a>
          <div class="dropdown-menu menu-drop-user">
          <div class="profilename">
              <a class="dropdown-item logout pb-0"><img src="/src/assets/img/icons/log-out.svg" class="me-2" alt="img">Logout</a>
          </div>
          </div>
      </li>
    </ul>

    <div class="dropdown mobile-user-menu">
      <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
      <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">Logout</a>
      </div>
    </div>

  </div>
</template>