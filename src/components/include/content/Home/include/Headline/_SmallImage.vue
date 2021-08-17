<template>
  <template v-for="(item, index) in a" :key="index">
    <template v-if="item.head_pos === 'small'">
      <div class="card text-white card-big mb-3">
        <img class="card-img" :src="item.image" alt="Card image" />
        <div class="bottom-left">
          <h5 class="card-title">
            <a href="javascript:void(0)" class="text-link">
              {{ item.title }}
            </a>
          </h5>
          <p class="card-text">{{ item.created }}</p>
        </div>
      </div>
    </template>
  </template>
</template>

<script>
export default {
  name: "SmallImage",
  props: {
    a: Object,
  },
};
</script>

<style></style>
