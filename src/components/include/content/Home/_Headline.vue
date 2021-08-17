<template>
  <Suspense>
    <template #default>
      <Headline />
    </template>
    <template #fallback>
      <HeadlineSkeleton />
    </template>
  </Suspense>
</template>

<script>
// @ is an alias to /src
import Headline from "@/components/include/content/Home/content/_HeadlineContent";
import HeadlineSkeleton from "@/components/include/skeleton/_HeadlineSkeleton";

export default {
  name: "Home",
  components: {
    Headline,
    HeadlineSkeleton,
  },
};
</script>
