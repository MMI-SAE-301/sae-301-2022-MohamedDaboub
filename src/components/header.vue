<template>
    <header class="bg-Color-grisfoncé bg-Color-header sticky top-0  z-10 text-white">
        <a href="#content" class="sr-only focus:not-sr-only text-lg text-white">Passez au contenu</a>
        <nav class="lg:flex lg:justify-between items-center">
            <div class="flex justify-between items-center">
            <RouterLink to="/">
                <img class="w-1/2 mx-4 my-2" src="./Logo-Site-Montre.png" alt="Logo du site">
            </RouterLink>
                <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mx-4  ">
                    <Bars3Icon @click="menuOuvert = !menuOuvert" class=" text-white "  >
                    </Bars3Icon>
                    <span class="sr-only ">Menu</span>
                </span>
            </div>
            <!-- menu Mobile -->
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
            <ul :class="{hidden:menuOuvert}" class="lg:hidden text-xl h-full    text-center"  >
                <li class="my-5"><RouterLink to="/">Accueil</RouterLink></li>
                <li class="my-5"><RouterLink to="/Personnalisation">Personnalisation</RouterLink></li>
                <li class="my-5"><RouterLink to="/Inspirations">Inspirations</RouterLink></li>
                <li class="my-5"><RouterLink v-if="user" to="/vosModèles" class="">Votre sélection</RouterLink></li>
                <li class=" bg-Color-Bluefoncé  py-6 px-6 "><RouterLink to="/Connexion">Connexion</RouterLink></li>
            </ul>
            </transition>
            <!-- menu pc  -->
            <ul class="lg:flex  gap-6 lg:items-center text-text text-xl  hidden">
                <li ><RouterLink to="/">Accueil</RouterLink></li>
                <li ><RouterLink to="/Personnalisation">Personnalisation</RouterLink></li>
                <li ><RouterLink to="/Inspirations">Inspirations</RouterLink></li>
                <li><RouterLink v-if="user" to="/vosModèles" class="">Votre sélection</RouterLink></li>
                <li class="bg-Color-Bluefoncé  py-10 px-5 "><RouterLink to="/Connexion">Connexion</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">
// @ts-ignore
import { user} from "../supabase";
import { Bars3Icon } from '@heroicons/vue/20/solid'
import {ref} from 'vue'
const menuOuvert = ref(false)
</script>
