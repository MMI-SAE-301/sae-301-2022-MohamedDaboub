<template>
    <header>
        <a href="#content">Passez au contenu</a>
    
        <nav>
            <div>
                <RouterLink to="">Logo du Site</RouterLink>
            </div>
            <!-- menu Mobile -->
            <ul>
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
