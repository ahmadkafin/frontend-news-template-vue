<template>
  <NavbarContent :y="y" />
  <div class="row mb-3">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12 artikel-terbaru">
          <NewArtikelBigCard :x="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarContent from "@/components/include/content/_NavbarContent";
import NewArtikelBigCard from "@/components/include/content/Home/include/NewArtikel/_NewArtikelBigCard";

import Repository from "@/repositories/RepositoryFactory";
const Categories = Repository.get("categories");
const Artikel = Repository.get("artikel");

export default {
  name: "NewArtikelContent",
  components: {
    NavbarContent,
    NewArtikelBigCard,
  },
  async setup() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(Categories.get());
      }, 3000);
    });
    const promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Artikel.get());
      }, 3000);
    });
    const datas = await promise;
    const artikels = await promises;
    const y = datas.data.data;
    const x = artikels.data.data;
    return {
      y: y,
      x: x,
    };
  },
};
</script>

<style></style>
