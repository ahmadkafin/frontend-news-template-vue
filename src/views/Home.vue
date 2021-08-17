<template>
  <div class="container mt-5">
    <div class="my-3">
      <div class="ribbon">
        Headline
      </div>
    </div>
    <HeadlineContent />
    <NewArtikel />
  </div>
</template>

<script>
// @ is an alias to /src
import HeadlineContent from "@/components/include/content/Home/_Headline";
import NewArtikel from "@/components/include/content/Home/_NewArtikel";

export default {
  name: "Home",
  components: {
    HeadlineContent,
    NewArtikel,
  },
};
</script>
