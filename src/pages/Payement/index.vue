<script setup lang="ts">
import Formpaye from "../../components/Formpaye.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <Formpaye :id="id" />
</template>