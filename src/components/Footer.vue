<template>
    <footer class="bg-Color-grisfoncé bg-Color-footer pt-10 sm:mt-10">
    <div class="max-w-7xl m-auto  flex flex-wrap justify-left text-white">
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="xl:text-2xl text-lg uppercase  font-bold mb-6">
                LIEN
            </div>
                <RouterLink to="/Personnalisation" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2 font-normal duration-700">
                    Personnalisation
                </RouterLink>
                <RouterLink to="/Inspirations" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    Inspirations
                </RouterLink>
                <RouterLink to="" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    À propos
                </RouterLink>
                <RouterLink v-if="user" to="/vosModèles" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    Votre sélection
                </RouterLink>
        </div>
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="xl:text-2xl text-lg uppercase  font-bold mb-6">
                INFORMATION
            </div>
                <a href="#" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    Mentions légales
                </a>
                <a href="#" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    Gestion des cookies
                </a>
                <a href="#" class="my-3 block  hover:text-gray-100 lg:text-xl text-base lg:mx-4 mx-2  font-normal duration-700">
                    CGU/CGV
                </a>
        </div>
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="xl:text-2xl text-lg uppercase  font-bold mb-6">
                SUIVEZ-NOUS
            </div>
            <div class="flex md:gap-4 gap-1 flex-wrap ">
                <facebook/> 
                <instagram/> 
                <twitter/>
            </div>
        </div>
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="uppercase xl:text-2xl text-lg   font-bold mb-6">
                Où nous trouver
            </div>
            <img src="/img/Maps.png" alt="">
        </div>
            
    </div>
    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 border-t border-t-Color-vertfoncé text-white text-base  flex-col md:flex-row  lg:flex lg:justify-between sm:justify-center ">
            <div class="mt-2 text-center px-10">
                ©2022 TiK•TaK. All rights reserved
            </div>
            <div class="justify-center ">
                <p>Projet réalisé dans le cadre d’un exercice pédagogique au <a class="border-b-2 border-solid border-white" href=""> département MMi de Montbéliard. </a></p>
            </div>
        </div>
    </div>
</footer>
</template>
<script setup lang="ts">
import { user} from "../supabase";
import facebook from "./Icons/Facebook.vue";
import instagram from "./Icons/Instagram.vue";
import twitter from "./Icons/Twitter.vue";
</script>
