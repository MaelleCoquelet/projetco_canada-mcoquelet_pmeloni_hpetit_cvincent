<script setup lang="ts">
const route = useRoute();
const evenementId = route.params.id; // Récupère l'ID de l'URL

// Utilise l'ID pour récupérer les données spécifiques à cet événement
const { data: evenement, status, error } = await useAsyncData(
  'evenement',
  () => $fetch(`https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/pages/${evenementId}`)
);
</script>

<template>
  <div v-if="status === 'pending'" class="text-center text-lg font-semibold">
    Chargement...
  </div>

  <div v-else-if="status === 'error'" class="text-center text-lg text-red-500 font-semibold">
    Une erreur s'est produite
  </div>

  <div v-else class="w-full grid grid-cols-12 bg-zinc-600"> <!-- w-full pour toute la largeur -->
    <div class="col-span-12 w-full"> <!-- Cette div prend toute la largeur -->
      <div v-if="evenement">
        <nav class="w-full text-white">
          <div class="items-left pt-96 pb-16">
            <h1 class="text-9xl font-bold">{{ evenement.acf.titre }}</h1> <!-- Affichage du titre -->
            <p class="text-2xl">{{ evenement.acf.intro }}</p> <!-- Affichage de l'intro -->
          </div>
        </nav>

        <div class="w-full bg-red-900 text-white">
          <div class="col-start-3 col-end-11 mt-16 mb-16">
            <p class="text-lg mt-5">{{ evenement.acf.texte_1 }}</p> <!-- Affichage du texte -->
            <div>
                <div>
                    <!-- svg -->
                    <p> {{ evenement.acf.date }}</p>
                </div>
                <div>
                    <!-- svg -->
                <div>
                    <p>IUT Nord Franche Comté, </p>
                    <p>4 Place Lucien Tharradin,</p>
                    <p>25200 Montbéliard</p>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div class="w-full bg-white">
            <ul>
                <li>
                    <h2>{{ evenement.acf.titre_2 }}</h2>
                    <p>{{ evenement.acf.texte_2 }}</p>
                </li>
            </ul>
        </div>

      </div>
    </div>
  </div>
</template>
