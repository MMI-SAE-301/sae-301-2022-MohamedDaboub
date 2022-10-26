<template>
  <section class="bg-Color-Marronfoncé text-white ">
    <h1 class="text-2xl p-5 ">
      TiK•Tak le site où vous pouvez personnaliser votre <br/> montre comme vous le désirez
    </h1>
    <img src="../assets/image1Main.png" class="lg:w-[1250px] lg:h-[400px] mt-20" alt=" Montre Intéligente">
    <div  class="flex justify-center pb-10" >
    <RouterLink class="bg-Color-Bluefoncé px-8 py-4" to="/Personnalisation">Personnalisation</RouterLink>
    </div>
  </section>
  <section>
    <div>
      <h2>Histoire de la marque</h2>
      <div>
        <!-- icon montre -->
        <div>
          <p>Tik Tak est une société qui propose à ses clients d’acheter sa propre Montre Tik Tak Smart 1 totalement personnalisable. Nous offrons la possibilité de choisir la couleur de chaque composant de la montre.</p>
          <p>Tik Tak  vous pousse à affirmer votre personnalité en portant les couleurs que vous souhaitez. Faites preuve d’imagination pour personnaliser vos montres qui vous ressemblent. Votre montre sera aussi unique que vous.</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2>Inspirations</h2>
    <div>
      <!-- fleéche gauche -->
      <div>
        <!-- carousel montre -->
      </div>
      <!-- fleéche droite -->
    </div>
    <div>
      <RouterLink to="/Inspirations"></RouterLink>
    </div>
  </section>
  <section>
    <h2 >Témoignages</h2>
    <div class="flex flex-wrap gap-y-10 text-white justify-between gap-10  mx-4 md:mx-8 lg:mx-24">
      <div class="bg-Color-Bluefoncé md:w-[550px] rounded-xl">
        <img src="" alt="">
        <p class="py-10 px-4 text-center">"Les montres sont d'excellente qualité et leur personnalisation est simple."</p>
        <h3 class="py-5 px-4">- Jade Berger</h3>
      </div>
      <div class="bg-Color-Bluefoncé md:w-[550px] rounded-xl">
        <img src="" alt="">
        <p class="py-10 px-4 text-center">"La personnalisation encourage la créativité et vous permet d'avoir des Montres qui vous sont uniques." "J'adore vraiment !"</p>
        <h3 class="py-5 px-4">- Raphaël Simon</h3>
      </div>
    </div>
  </section>
</template>