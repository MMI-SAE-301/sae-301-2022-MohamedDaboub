<script setup lang="ts">
import { ref} from 'vue';
import { supabase } from "@/supabase";
import Montre from "./montreSvg.vue";
const props = defineProps<{
  max?: number;
}>();
const { data: Montres, error } = await supabase
  .from("Montre")
  .select("*")
  .limit(props.max ?? 100);
if (error) {
  console.log("n'a pas pu récupérer les Montre", { error });
}
</script>
<template>
  <ul class="flex justify-between flex-wrap">
    <li v-for="Montre in Montres" :key="Montre.id">
      <router-link
        :to="{ name: 'Personnalisation-edit-id', params: { id: Montre.id } }"
      >
        <Montre class="w-64" v-bind="Montre" />
      </router-link>
    </li>
  </ul>
</template>