<script setup lang="ts">
const route = useRoute();
const temoignageId = route.params.id; // Récupère l'ID de l'URL

// Utilise l'ID pour récupérer les données spécifiques à cet événement
const { data: temoignage, status, error } = await useAsyncData(
  'temoignage',
  () => $fetch(`https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/posts/${temoignageId}`)
);
</script>

<template>
  <div v-if="status === 'pending'" class="text-center text-lg font-semibold">
    Chargement...
  </div>

  <div v-else-if="status === 'error'" class="text-center text-lg text-red-900 font-semibold">
    Une erreur s'est produite
  </div>

  <div v-else class="w-full  bg-zinc-600"> 
    <div class="col-span-12 w-full "> 
      <div v-if="temoignage">
        <nav class="w-full text-white">
          <div class="items-left pt-96 pb-16">
            <h1 class="text-9xl font-bold">{{ temoignage.acf.nom_prenom }}</h1>
            <p class="text-2xl">{{ temoignage.acf.date_echanges_scolaire}}</p>
          </div>
        </nav>
        <div class=" bg-white texte-black"  >
        <h3 class="font-bold text-xl" >Qu'est-ce qui vous a motivé à choisir le Québec pour votre échange universitaire ?</h3>
        <p>{{ temoignage.acf.question1 }}</p>
        
        <h3 class="font-bold text-xl" >Quelles différences culturelles vous ont le plus marqué en arrivant au Québec ? </h3>
        <p>{{ temoignage.acf.question2 }}</p>
        <h3 class="font-bold text-xl" >Quelles sont les différences entre le système universitaire québécois et celui français ?</h3>
        <p>{{ temoignage.acf.question3 }}</p>
        <h3 class="font-bold text-xl" >Y a-t-il une tradition ou un aspect de la culture québécoise qui vous a particulièrement plu ?  </h3>
        <p>{{ temoignage.acf.question4 }}</p>
        <h3 class="font-bold text-xl" >Y a-t-il des astuces ou des choses à savoir pour réussir son intégration, sur le plan académique ou personnel ? </h3>
        <p>{{ temoignage.acf.question5 }}</p>
        <h3 class="font-bold text-xl" >Pouvez-vous partager une anecdote marquante ou drôle qui illustre votre vie au Québec ? </h3>
        <p>{{ temoignage.acf.question6 }}</p>
        <h3 class="font-bold text-xl" >Avez-vous rencontré des difficultés particulières pendant votre séjour, si oui, voulez-vous en parler ?</h3>
        <p>{{ temoignage.acf.question7 }}</p>
        <h3 class="font-bold text-xl" >Avec le recul, souhaitez-vous réitérer cette expérience ? Si oui, changeriez-vous quelque chose ?</h3>
        <p>{{ temoignage.acf.question8 }}</p>
       </div>

       </div>
       
    </div>
    
</div>
</template>