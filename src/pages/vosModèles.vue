<script setup lang="ts">
import ListeMontre from "../components/ListeMontre.vue";
</script>
<template>
  <div class="p-2">
    <h2 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5 text-center font-syncopate">vos Modèles</h2>
    <p class="py-5 md:py-10 md:mx-10 lg:text-textPC">Ici vous trouve tout les model que vous avez enregistrée</p>
    <div>
        <ListeMontre />
    </div>
  </div>
</template>