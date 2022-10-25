<template>
    <header class="bg-Color-grisfoncé sticky top-0 z-10">
        <a href="#content" class="sr-only focus:not-sr-only text-lg text-white">Passez au contenu</a>
        <nav class="lg:flex lg:justify-between items-center">
            <div class="flex justify-between items-center">
                <RouterLink to="/">Logo du Site</RouterLink>
            </div>
            <!-- menu Mobile -->
            <ul class="lg:hidden text-xl  mx-6 py-4 text-center"  >
                <li><RouterLink to="/"></RouterLink>Accueil</li>
                <li><RouterLink to="/Personnalisation"></RouterLink>Personnalisation</li>
                <li><RouterLink to="/Inspirations"></RouterLink>Inspirations</li>
                <li><RouterLink to="/Connexion"></RouterLink>Connexion</li>
            </ul>
            <!-- menu pc  -->
            <ul>
                <li><RouterLink to="/"></RouterLink>Accueil</li>
                <li><RouterLink to="/Personnalisation"></RouterLink>Personnalisation</li>
                <li><RouterLink to="/Inspirations"></RouterLink>Inspirations</li>
                <li><RouterLink to="/Connexion"></RouterLink>Connexion</li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">

</script>
