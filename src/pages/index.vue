<script  setup lang="ts">
import montresans from "../components/montreSvg.vue"
import type { Montre } from "../types"; 
import { supabase } from "../supabase";
const exemples: Montre = [{
  ecran : "#fff00",
  bracelet : "White",
  boitier_exterieure :"White",
  boitier_intérieur :"White",
},
{
  ecran : "White",
  bracelet : "White",
  boitier_exterieure :"White",
  boitier_intérieur :"White",
},];
</script>

<template>
  <section class="bg-Color-Marronfoncé text-white ">
    <h1 class="text-2xl p-5 ">
      TiK•Tak le site où vous pouvez personnaliser votre <br/> montre comme vous le désirez
    </h1>
    <img src="/img/image1Main.png" class="lg:w-[1250px] lg:h-[400px] mt-20" alt=" Montre Intéligente">
    <div  class="flex justify-center pb-10" >
    <RouterLink class="bg-Color-Bluefoncé px-8 py-4 " to="/Personnalisation">Personnalisation</RouterLink>
    </div>
  </section>
  <section>
    <div>
      <h2 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5 font-syncopate">Histoire de la marque</h2>
      <div class="flex flex-wrap md:flex-nowrap md:justify-between items-center gap-10  mx-[10%]">
        <montresans class="lg:w-2/3 w-64 "></montresans>
        <div class="mx-4 md:mx-10">
          <p class="py-5 md:py-10 md:mx-10 lg:text-textPC">Tik Tak est une société qui propose à ses clients d’acheter sa propre Montre Tik Tak Smart 1 totalement personnalisable. Nous offrons la possibilité de choisir la couleur de chaque composant de la montre.</p>
          <p class="py-5 md:py-10 md:mx-10 lg:text-textPC">Tik Tak  vous pousse à affirmer votre personnalité en portant les couleurs que vous souhaitez. Faites preuve d’imagination pour personnaliser vos montres qui vous ressemblent. Votre montre sera aussi unique que vous.</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2 class=" md:text-4xl lg:text-TitrePC py-10 px-5 font-syncopate text-2xl ">Inspirations</h2>
    <div>
      <!-- fleéche gauche -->
      <div class="flex justify-center flex-wrap gap-2 ">
        <div class="w-64" v-for="exemple in exemples " :key="exemple">
            <montresans class="w-64" v-bind="exemple" />
        </div>
      </div>
      <!-- fleéche droite -->
    </div>
    <div>
      <RouterLink to="/Inspirations"></RouterLink>
    </div>
  </section>
  <section>
    <h2 class=" md:text-4xl lg:text-TitrePC py-10 px-5 font-syncopate text-2xl ">Témoignages</h2>
    <div class="flex flex-wrap gap-y-10 text-white sm:justify-center  gap-10   mx-4 md:mx-8 xl:mx-32 mb-10">
      <div class="bg-Color-Bluefoncé sm:w-1/3 rounded-xl">
        <img src="/img/imageuser1.png" class="w-1/4 my-5 rounded-full flex justify-center m-auto" alt="">
        <p class="py-10 px-4 text-center text-base md:text-CardText">"Les montres sont d'excellente qualité et leur personnalisation est simple."</p>
        <h3 class="py-5 px-4">- Jade Berger</h3>
      </div>
      <div class="bg-Color-Bluefoncé sm:w-1/3 rounded-xl">
        <img src="/img/imageuser2.png" class="w-1/4 my-5 rounded-full flex justify-center m-auto" alt="">
        <p class="py-10 px-4 text-center text-base md:text-CardText">"La personnalisation encourage la créativité et vous permet d'avoir des Montres qui vous sont uniques." "J'adore vraiment !"</p>
        <h3 class="py-5 px-4">- Raphaël Simon</h3>
      </div>
    </div>
  </section>
</template>