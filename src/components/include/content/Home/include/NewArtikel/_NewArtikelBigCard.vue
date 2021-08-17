<template>
  <template v-for="(item, index) in x" :key="index">
    <template v-if="index < 15">
      <template v-if="item.head_pos === null">
        <div class="card float-right card-bottom my-3">
          <div class="row">
            <div class="col-sm-5">
              <div class="img-frame">
                <img
                  class="d-block w-100"
                  :src="item.image"
                  :alt="item.title"
                />
              </div>
            </div>
            <div class="col-sm-7 px-4 mt-2">
              <div class="card-block">
                <h5>{{ item.title }}.</h5>
                <span
                  v-html="truncate(item.body, 100)"
                  class="second-body-text"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </template>
</template>

<script>
export default {
  name: "NewArtikelBigCard",
  props: {
    x: Object,
  },
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    truncate: function (data, num) {
      let reqdString = data.substring(num, length);
      reqdString = reqdString.replace(/.$/, ".....");
      return reqdString;
    },
  },
};
</script>

<style></style>
