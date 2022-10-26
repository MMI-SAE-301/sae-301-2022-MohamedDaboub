<script setup lang="ts">
import type { Montre, } from '@/types';
import { colors, } from '@/types';
import { ref} from 'vue';
import { supabase } from '@/supabase';
import MontreSvg from './montreSvg.vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const props = defineProps<{
  data?: Montre;
  id?: string;
}>();
const montre = ref<Montre>(props.data ?? {});

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("Montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "Personnalisation-edit-id", params: { id: data[0].id } });
  }
}
if (props.id) {
  let { data, error } = await supabase
    .from("Montre")
    .select("*")
    .eq("id", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Montre :", error);
  else montre.value = data[0];
}
</script>
<template>
    <div class="flex flex-wrap justify-between md:justify-center  md:gap-20 ">
        <div>
            <div class="carousel w-64">
                <MontreSvg class="carousel-item w-64" v-bind="montre" id="Profil"/>   
            </div> 
            
        </div>
        <div class="">
            <h2 class="text-2xl   pb-10">Couleur </h2>
            <FormKit type="form" v-model="montre" submit-class="" submit-label="Enregistrer votre Montre" @submit="upsertMontre"  >
                <FormKit name="ecran" label="ecran" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
                <FormKit name="bracelet" label="bracelet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
                <FormKit name="boitier_exterieure" label="boitier_exterieure" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
                <FormKit name="boitier_intérieur" label="boitier_intérieur" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
                <FormKit name="Commande" label="Commande" type="checkbox" wrapper-class="w-full flex text-xl "></FormKit>
            </FormKit>
        </div>
        <!-- <h2 class="text-2xl   pb-10">Mat </h2> 
        <FormKit type="form" v-model="montre" @submit="upsertMontre" >
            <FormKit name="ecran" label="ecran" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
            <FormKit name="bracelet" label="bracelet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
            <FormKit name="boitier_exterieure" label="boitier_exterieure" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
            <FormKit name="boitier_intérieur" label="boitier_intérieur" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
        </FormKit> -->

    </div>
</template>