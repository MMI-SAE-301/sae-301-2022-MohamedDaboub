<script setup lang="ts">
import Formpaye from "../../components/Formpaye.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <FormMontre :id="id" />
</template>