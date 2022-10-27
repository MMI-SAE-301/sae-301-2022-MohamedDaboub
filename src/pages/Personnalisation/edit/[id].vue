<script setup lang="ts">
import FormMontre from "../../../components/FormMontre.vue";
const props = defineProps<{
  id: string;
}>();
console.log("props.id", props.id);

</script>
<template>
  <FormMontre id="abcd" />
</template>