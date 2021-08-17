<template>
  <!-- headline -->
  <div class="row">
    <div class="col-lg-8 col-md-12 col-sm-12">
      <BigImage :a="a" />
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12">
      <SmallImage :a="a" />
    </div>
  </div>
  <!-- headline -->
</template>

<script>
import BigImage from "@/components/include/content/Home/include/Headline/_BigImage";
import SmallImage from "@/components/include/content/Home/include/Headline/_SmallImage";

import Repository from "@/repositories/RepositoryFactory";
const Headline = Repository.get("artikel");
export default {
  components: {
    BigImage,
    SmallImage,
  },
  async setup() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(Headline.get());
      }, 3000);
    });
    const datas = await promise;
    const a = datas.data.data;
    return { a };
  },
};
</script>

<style>
.card-big,
.card-small {
  border: none;
}
.ribbon {
  background: #e73c7e;
  height: 56px;
  width: auto;
  display: inline-block;
  padding: 0 40px 0 0;
  margin: auto;
  position: relative;
  color: #fff;
  line-height: 60px;
  font-size: 26px;
  text-align: center;
  z-index: 1;
}
.ribbon:before {
  content: "";
  border: 28px solid #e73c7e;
  border-left-color: transparent;
  border-left-width: 12px;
  position: absolute;
  top: 0;
  left: -39px;
}
.ribbon:after {
  content: "";
  border: 28px solid transparent;
  border-left-color: #e73c7e;
  border-left-width: 12px;
  position: absolute;
  top: 0;
  right: -39px;
}

.bottom-left {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0));
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding-left: 20px;
  padding-bottom: 10px;
}

.container {
  position: relative;
  z-index: 1;
}

.card-small {
  min-height: 175px;
  overflow: hidden;
}

.card-big {
  overflow: hidden;
}

.card-small > img {
  object-fit: cover;
  width: 100%;
}

.card img {
  transition: transform 1s;
}

.card:hover img {
  transform: scale(1.2);
}

.text-link {
  text-decoration: none;
  font-weight: 600;
  color: white;
  cursor: pointer;
}

.text-link:hover {
  color: #e73c7e;
  transition: 0.5s ease-in;
}

@media only screen and (max-width: 720px) {
}
</style>
