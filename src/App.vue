<template>
  <header1/>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view id="content"  />
  </Suspense>
</template>

<script setup lang="ts">
import header1 from "./components/header.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
