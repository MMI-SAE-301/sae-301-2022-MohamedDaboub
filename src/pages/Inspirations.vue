<script setup lang="ts">
import star from "../components/Icons/Star.vue"
</script>

<template>
    <section>
        <h1 class=" text-3xl md:text-4xl lg:text-5xl py-10 px-5 ">Exemples de Montre</h1>
        <div class=" grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mx-5 md:mx-10">
            <div class="bg-Color-Bluefoncé rounded-xl" >
                <img src="/public/img/Montre1.png" class="flex justify-center m-auto " alt="">
                <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                </div>
            </div>
            <div class="bg-Color-Bluefoncé rounded-xl" >
                <img src="/public/img/Montre2.png" class="flex justify-center m-auto sm:h-[385px]" alt="">
                <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                </div>
            </div>
            <div class="bg-Color-Bluefoncé rounded-xl" >
                <img src="/public/img/Montre3.png" class="flex justify-center m-auto sm:h-[385px] " alt="">
                <div class="flex md:gap-6 gap-2  lg:gap-3 py-4  justify-center ">
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                    <star class=" w-8 md:w-6  lg:w-12"></star>
                </div>
            </div>
        </div>
    </section>
</template>