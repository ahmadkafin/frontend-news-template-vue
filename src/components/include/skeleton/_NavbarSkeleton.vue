<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon nav-item-skeleton"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link nav-item-skeleton" href="#">&nbsp; </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item-skeleton" href="#">&nbsp;</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link nav-item-skeleton" href="#">
              &nbsp;
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link nav-item-skeleton" href="#">
              &nbsp;
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link nav-item-skeleton" href="#">
              &nbsp;
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link nav-item-skeleton" href="#">
              &nbsp;
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link nav-item-skeleton" href="#">
              &nbsp;
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarSkeleton",
};
</script>

<style>
.navbar .img-loading {
  height: 30px;
  width: 90px;
  justify-self: start;
  margin-left: 20px;
  background: rgb(165 165 165 / 63%);
}

.navbar .nav-item-skeleton {
  width: 50px;
  height: 30px;
  background: rgb(165 165 165 / 63%);
}

.navbar .nav-item-skeleton,
.navbar .img-loading {
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
