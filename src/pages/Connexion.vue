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
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white flex rounded-lg items-center gap-2 mx-2" v-if="user" @pointerdown="supabase.auth.signOut()">
            <img class=" w-2/12 " src="../assets/Google.png" alt="">
          Se déconnecter ({{user.email}})
        </button>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white flex rounded-lg items-center gap-2 mx-2" v-else @pointerdown="supabase.auth.signIn({provider: 'google'})">
            <img class="md:w-2/12 w-2/12 " src="../assets/Google.png" alt="">
            Se connecter avec Google
        </button>
      </div>
      <div>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white flex rounded-lg items-center gap-2 mx-2" v-if="user" @pointerdown="supabase.auth.signOut()">
            <img class=" w-2/12 " src="../assets/Facebook.png" alt="">
          Se déconnecter ({{user.email}})
        </button>
        <button class="bg-Color-Bluefoncé px-8 py-4 text-white flex rounded-lg items-center gap-2 mx-2" v-else @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
            <img class=" w-2/12 " src="../assets/Facebook.png" alt="">
            Se connecter avec Facebook
        </button>
      </div>
    </div>
  <div class="bg-Color-Bluefoncé  flex justify-center my-10 mx-[5%] md:mx-[30%] lg:mx-[35%] rounded-xl text-white ">
    <div>
        <h2 class="font-bold text-center text-2xl py-5">Connecter avec Mail</h2>
        <button class="py-5" v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{ user.email }})
        </button>
        <FormKit
        v-else
        type="form"
        :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
        @submit="signIn"
        :submit-attrs="{ classes: { input: 'bg-Color-vertfoncé px-6  justify-center w-full   py-4 text-white flex my-4 centre rounded' }}">
        <FormKit name="email" label="Votre email" type="email" wrapper-class="text-xl w-full  " />
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