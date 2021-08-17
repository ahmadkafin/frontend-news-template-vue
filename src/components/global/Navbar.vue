<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <img src="../../assets/ihf_logo.png" alt="" width="150" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMobile()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <Suspense>
            <template #default> <Navbar /> </template>
            <template #fallback> <NavbarSkeleton /></template>
          </Suspense>
        </ul>
      </div>
      <span class="navbar-text">
        <a href="#"><i class="fab fa-facebook mx-2"></i></a>
        <a href="#"><i class="fab fa-twitter mx-2"></i></a>
        <a href="#"><i class="fab fa-instagram mx-2"></i></a>
        <a href="#"><i class="fab fa-google-plus mx-2"></i></a>
      </span>
    </nav>
    <div class="grad-bar"></div>
  </div>
</template>

<script>
import Navbar from "@/components/include/content/_Navbar";
import NavbarSkeleton from "@/components/include/skeleton/_NavbarSkeleton";
export default {
  components: {
    Navbar,
    NavbarSkeleton,
  },
};
</script>

<style>
nav.navbar {
  font-weight: 600;
  font-size: 0.9rem;
}

.grad-bar {
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  -moz-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
}

.navbar-text a {
  font-size: 1rem;
}
.nav-item:hover a.nav-link,
.navbar-text a:hover {
  color: #e73c7e !important;
}

@media only screen and (max-width: 720px) {
  .navbar-collapse {
    margin-top: 20px;
    transition: 0.5s ease-in;
  }
}
</style>
