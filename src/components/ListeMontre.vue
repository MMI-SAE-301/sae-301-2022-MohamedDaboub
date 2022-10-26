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
  <ul class="flex gap-10 justify-center flex-wrap">
    <li v-for="Montre in Montres" :key="Montre.id">
      <Montre class="w-64" v-bind="Montre" />
      <div class="my-10 gap-5 flex justify-between">
        <router-link class="bg-Color-Bluefoncé px-8 rounded-lg py-4 text-white "
          :to="{ name: 'Payement', params: { id: Montre.id } }"
        >
        Payer 
        </router-link>
        <router-link class="border-Color-Bluefoncé border-2 text-Color-Bluefoncé px-8 rounded-lg py-4 "
          :to="{ name: 'Personnalisation-edit-id', params: { id: Montre.id } }"
        >
        Modifier 
        </router-link>
      </div>
    </li>
  </ul>
</template>