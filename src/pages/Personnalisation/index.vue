<script setup lang="ts">
// @ts-nocheck
import star from "../../components/Icons/Star.vue"
import starvide from "../../components/Icons/Starvi.vue"
import montreavec from "../../components/FormMontre.vue"
import montresans from "../../components/montreSvg.vue"
import type { Montre } from "../../types"; 
import { supabase } from "../../supabase";
const exemples: Montre = [{
  ecran : "#BBE9E9",
  bracelet : "#363553",
  boitier_exterieure :"#363553",
  boitier_intérieur :"#BBAE6A",
},
{
  ecran : "#ffffff",
  bracelet : "#B7B6BD",
  boitier_exterieure :"#BBAE6A",
  boitier_intérieur :"#BBAE6A",
},
{
  ecran : "white",
  bracelet : "#609677",
  boitier_exterieure :"#434750",
  boitier_intérieur :"#434750",
},
];
</script>

<template>
    <h1 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5 text-center font-syncopate">Personnaliser</h1>  
    <div>
        <montreavec/>
    </div>  
    <section>
    <h2 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5">Inspirations</h2>
      <div>
        <div class="flex flex-wrap justify-center  gap-10 ">
          <div class="w-64   " v-for="exemple in exemples " :key="exemple">
            <montresans class="w-64" v-bind="exemple" /> 
          </div>
        </div>
      </div>
  </section>
  <section>
    <h2 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5">Les modèles les mieux notés</h2>
    <div class=" grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mx-5 md:mx-10 my-10">
      <div class="bg-Color-Bluefoncé rounded-xl" >
          <img src="/public/img/Montre1.png" class="flex justify-center m-auto " alt="">
          <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <starvide class=" w-8 md:w-6  lg:w-12 "></starvide>
          </div>
      </div>
      <div class="bg-Color-Bluefoncé rounded-xl" >
          <img src="/public/img/Montre2.png" class="flex justify-center m-auto sm:h-[385px]" alt="">
          <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <starvide class=" w-8 md:w-6  lg:w-12"></starvide>
          </div>
      </div>
      <div class="bg-Color-Bluefoncé rounded-xl" >
          <img src="/public/img/Montre3.png" class="flex justify-center m-auto sm:h-[385px] " alt="">
          <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <star class=" w-8 md:w-6  lg:w-12"></star>
              <starvide class=" w-8 md:w-6  lg:w-12"></starvide>
          </div>
      </div>
    </div>
      <div class="flex justify-center my-10 ">
        <RouterLink class="bg-Color-Bluefoncé px-8 rounded-lg py-4 text-white " to="/Inspirations">Voir Plus</RouterLink>
      </div>
  </section>
</template>
