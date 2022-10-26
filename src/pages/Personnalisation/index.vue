<script setup lang="ts">
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
    <div>
        <img src="" alt="">
        <div>
            <!-- etoile -->
        </div>
    </div>
    <div>
        <img src="" alt="">
        <div>
            <!-- etoile -->
        </div>
    </div>
    <div>
        <img src="" alt="">
        <div>
            <!-- etoile -->
        </div>
    </div>
    <div>
      <RouterLink to="/Inspirations"></RouterLink>
    </div>
  </section>
</template>
