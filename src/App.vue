<script setup>
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";

const route = useRoute();

watchEffect(() => {
  document.title = route.meta.title;
});
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>

<style>
.box {
  border-radius: 10px;
  box-shadow: 0 5px 10px -3px rgba(0,0,0,0.1);
}
</style>