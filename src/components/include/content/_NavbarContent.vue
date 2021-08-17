<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-second">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12" style="padding-top: 10px;">
        <a href="javascript:void(0)">
          <span class="headertwo-title">
            Artikel baru {{ pa }}
            <span class="text-capitalize"> </span>
          </span>
        </a>
      </div>
      <!-- <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="navbar-text mx-auto">
          <button class="navbar-toggler navbar-toggler-second" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse second-nav"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <template v-for="(item, index) in y" :key="index">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :id="item.slugs"
                    :data-filter="item.slugs"
                    >{{ item.name }}</a
                  >
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
  <div class="grad-bar"></div>
</template>

<script>
export default {
  name: "NavbarContent",
  props: {
    y: Object,
  },
};
</script>

<style></style>
