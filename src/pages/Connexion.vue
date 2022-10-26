<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
async function signIn(data, node) {
  const { user, error } = await ( nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    :  supabase.auth.signIn(data));
    console.log(user, error);
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}
const nvlUtilisateur = ref(false);
</script>
<template>
    <h1 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5 text-center">Se connecter</h1>
    <div class="flex flex-wrap gap-y-6 justify-center gap-x-10">
      <div>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white rounded-lg" v-if="user" @pointerdown="supabase.auth.signOut()">
            <img src="" alt="">
          Se déconnecter ({{user.email}})
        </button>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white rounded-lg" v-else @pointerdown="supabase.auth.signIn({provider: 'google'})">
            <img src="" alt="">
            Se connecter avec Google
        </button>
      </div>
      <div>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white rounded-lg" v-if="user" @pointerdown="supabase.auth.signOut()">
            <img src="" alt="">
          Se déconnecter ({{user.email}})
        </button>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white rounded-lg" v-else @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
            <img src="" alt="">
            Se connecter avec Facebook
        </button>
      </div>
    </div>
  <div class="bg-Color-Bluefoncé flex justify-center my-10 mx-[10%] md:mx-[30%] lg:mx-[35%] rounded-xl text-white ">
    <div>
        <h2 class="font-bold text-2xl py-5">Connecter avec Mail</h2>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{ user.email }})
        </button>
        <FormKit
        v-else
        type="form"
        :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
        @submit="signIn"
        :submit-attrs="{ classes: { input: 'bg-blue-900 px-6 justify-center w-full   py-4 text-white flex my-4 centre rounded' }}">
        <FormKit name="email" label="Votre email" type="email" wrapper-class="text-xl w-full " />
        <FormKit name="password" label="Mot de passe" type="password" wrapper-class="text-xl w-full " />
        <formKit
            label="Nouvel utilisateur ?"
            name="nvlUtilisateur"
            type="checkbox"
            v-model="nvlUtilisateur"
            wrapper-class="w-full flex py-4 text-xl "
        />
        </FormKit>
    </div>
  </div>
  
</template>