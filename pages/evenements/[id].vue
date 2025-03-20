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

  <div v-else class="w-full bg-zinc-600"> <!-- w-full pour toute la largeur -->
    <div class="w-full"> <!-- Cette div prend toute la largeur -->
      <div v-if="evenement">
        <section class="relative w-full  flex items-center justify-center bg-cover bg-center text-white"
               :style="`background-image: url(${evenement.acf.image})`">
        <div class="p-6 ">
          <h1 class="text-9xl font-bold">{{ evenement.acf.titre }}</h1>
          <p class="text-2xl mt-4">{{ evenement.acf.intro }}</p>
        </div>
      </section>

        <section class="bg-red-900 text-white py-16 px-8">
        <div class="max-w-4xl mx-auto">
          <p class="text-lg">{{ evenement.acf.texte_1 }}</p>
          <div class="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div class="flex items-center gap-2">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8v8h12V8H4z"></path>
              </svg>
              <p class="text-lg">{{ evenement.acf.date }}</p>
            </div>
            <div class="flex items-center gap-2">
              <div>
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 3.866 6 10 6 10s6-6.134 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clip-rule="evenodd"></path>
              </svg>
              </div>
              <div>
              <p>IUT Nord Franche Comté</p>
              <p>4 Place Lucien Tharradin</p>
              <p>25200 Montbéliard</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Infos Supplémentaires -->
      <section class="bg-white py-16 px-8">
        <div class="max-w-4xl mx-auto ">
          <h2 class="text-3xl font-bold text-gray-900">{{ evenement.acf.titre_2 }}</h2>
          <p class="text-lg text-gray-700 mt-4">{{ evenement.acf.texte_2 }}</p>
        </div>
      </section>

      </div>
    </div>
  </div>
</template>
