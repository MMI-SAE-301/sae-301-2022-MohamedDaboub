<script setup lang="ts">
import type { Montre, } from '@/types';
import { colors,colorsecran } from '@/types';
import { ref} from 'vue';
import { supabase } from '@/supabase';
import MontreSvg from './montreSvg.vue';
import formkitlistecolor from "./FormKitListColors.vue"
import {useRouter} from 'vue-router'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {
      RadioGroup,
      RadioGroupLabel,
      RadioGroupDescription,
      RadioGroupOption,
    } from '@headlessui/vue'
const { data: listeMateriaux, error } = await supabase
          .from("Matériel")
          .select("*");
        if (error) console.log("n'a pas pu charger la table Matériaux :", error);
        // Les convertir par map en un tableau d'objets {value, label} pour FormKit
        const optionsMateriaux = listeMateriaux?.map((Matériel) => ({
          value: Matériel.code,
          label: Matériel.Libelle,
    }))
const Montre2 = ref({});
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
const router = useRouter()
const props = defineProps<{
  data?: Montre;
  id?: string;
}>();
const montre = ref<Montre>(props.data ?? {});

//
async function upsertMontre(dataForm, node) {
  console.log("dataForm", dataForm);
  const { data, error } = await supabase.from("Montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    openModal();
  }
}
if (props.id) {
  let { data, error } = await supabase
    .from("Montre")
    .select("*")
    .eq("id", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Montre :", error);
  else montre.value = (data as any[])[0];
}
console.log(montre.value);

</script>
<template>
    <div class="flex flex-wrap justify-between md:justify-center  md:gap-20 ">
        <div>
            <div class=" w-64">
                <MontreSvg class="w-64" v-bind="montre"/>   
            </div> 
            
        </div>
        <div class="">
            <h2 class="text-2xl   pb-5">Couleur </h2>
            <FormKit type="form" v-model="montre" submit-class="bg-Color-Bluefoncé px-8 rounded-lg py-4 text-white" submit-label="Enregistrer votre Montre"   @submit="upsertMontre"  :submit-attrs="{ classes: { input: 'bg-Color-Bluefoncé px-8 rounded-lg py-4 text-white '} }"  >
                <FormKit name="ecran" label="Ecran" value="#FFFFFF" type="radio" :options="colorsecran" :sections-schema="{inner:{$el:null},decorator:{sel:null}}" input-class="peer sr-only" options-class="flex gap-10"><template #label="context"><div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{backgroundColor:context.option.value}"><span class="sr-only">{{context.option.label}}</span></div></template></FormKit>
                <formkitlistecolor name="bracelet" label="Bracelet"/>
                <formkitlistecolor name="boitier_exterieure" label="Boitier Exterieure" />
                <formkitlistecolor name="boitier_intérieur" label="Boitier Intérieur"/>
                <h2 class="text-2xl pb-5">Matériaux </h2> 
                <RadioGroup v-model="Montre2" class="mx-4">
                    <RadioGroupLabel class="sr-only ">Server size</RadioGroupLabel>
                        <div class="flex gap-10 ">
                            <RadioGroupOption class=""
                                as="template"
                                v-for="Matériel in listeMateriaux"
                                :key="Matériel.code"
                                :value="Matériel.code"
                                v-slot="{ active, checked }">
                                <div :class="[
                                  active
                                    ? 'ring-2 ring-noir'
                                    : '',
                                  checked ? 'bg-Color-Bluefoncé  text-white  ' : ' ',
                                    ]"
                                    class="cursor-pointer rounded-lg px-10 py-4 border-2 border-noir ">
                                    <div class="text-sm">
                                        <RadioGroupLabel
                                            as="p"
                                            :class="checked ? 'text-blanc' : 'text-noir '"
                                            class="font-medium ">
                                            {{ Matériel.Libelle }}
                                        </RadioGroupLabel>
                                    </div>
                                </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
                <!-- <FormKit name="Commande" label="Commande" type="checkbox" wrapper-class="w-full flex text-xl "></FormKit> -->
                <div>
                  <h3 class="md:text-2xl text-xl my-5">Tik • Tak Smart 1</h3>
                  <h2 class="md:text-2xl text-xl my-5">Prix : 300€</h2>
                </div>
            </FormKit>
            


        </div>
        <TransitionRoot appear :show="isOpen" as="template">
          <Dialog as="div" @close="closeModal" class="relative z-10 ">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div
                class="flex min-h-full items-center justify-center p-4 text-center"
              >
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
                >
                  <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-Color-Bluefoncé p-6 text-left align-middle shadow-xl transition-all"
                  >
                    <div class="mt-2">
                      <p class="text-xl text-white text-center py-5 ">
                        Votre montre a bien été enregistrée.
                      </p>
                    </div>

                    <div class="mt-4 flex gap-4">
                      <RouterLink to="/vosModèles"
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-Color-vertfoncé px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                      Voir tout mes Model
                      </RouterLink>
                      <p class="text-white">Ou</p>
                      <RouterLink to="/Payement"
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-Color-vertfoncé px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                      Passer votre commande
                      </RouterLink>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>


    </div>
</template>