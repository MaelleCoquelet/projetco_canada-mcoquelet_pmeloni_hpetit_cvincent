<script setup lang="ts">
const route = useRoute();
const temoignageId = route.params.id; // Récupère l'ID du témoignage

// Récupère les données du témoignage
const { data: temoignage, status, error } = await useAsyncData(
  `temoignage-${temoignageId}`,
  () => $fetch(`https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/posts/${temoignageId}`)
);

// Variable pour stocker l’URL de l’image
const imageUrl = ref<string | null>(null);

// Récupère l'URL de l’image si c’est un ID
watchEffect(async () => {
  if (temoignage.value?.acf?.['image-bg']) {
    const imageId = temoignage.value.acf['image-bg'];

    // Vérifie si c'est un nombre (au lieu d'une URL directe)
    if (typeof imageId === "number") {
      const imageData = await $fetch(`https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/media/${imageId}`);
      imageUrl.value = imageData.source_url;
    } else {
      imageUrl.value = imageId; // Si c'est déjà une URL, l'utiliser directement
    }
  }
});

useSeoMeta({
  title: 'LiftOff MMI, découvrez ce témoignages d un anciens étudiants',
  ogTitle: 'LiftOff MMI, découvrez ce témoignages d un anciens étudiants',
  description: 'Avec LiftOff MMI, découvrez les témoignages d’anciens étudiants ayant déjà réalisé l’échange au Canada.',
  ogDescription: 'Avec LiftOff MMI, découvrez les témoignages d’anciens étudiants ayant déjà réalisé l’échange au Canada.',

})

</script>

<template>

  <div v-if="status === 'pending'" class="text-center text-lg font-semibold">
    Chargement...
  </div>

  <div v-else-if="status === 'error'" class="text-center text-lg text-red-900 font-semibold">
    Une erreur s'est produite
  </div>

  <!-- Div principale avec l'image en background -->
  <div class="w-full min-h-screen bg-cover lg:bg-center bg-no-repeat bg-top pb-24"
    :style="{ 
      backgroundImage: imageUrl ? `url(${imageUrl})` : '',
      backgroundSize: 'cover',
      backgroundPosition: 'top 30% center' 
    }">
    <div class="col-span-12 w-full">
      <div v-if="temoignage">
        <nav class="w-full text-white">
          <div class="items-left pt-96 pb-16   bg-black bg-opacity-50">
            <h1 class="text-6xl md:text-9xl font-bold mx-16">{{ temoignage.acf.nom_prenom }}</h1>
            <p class="text-xl md:text-2xl mx-16 mt-6">{{ temoignage.acf.date_echanges_scolaire }}</p>
          </div>
        </nav>

        <div class="bg-white text-black p-4 sm:p-8 md:p-16 mx-8 md:mx-16 flex flex-col gap-4 md:gap-8">
          <div>
            <h3 class="font-bold text-xl">Quelles différences culturelles vous ont le plus marqué en arrivant au Québec
              ?</h3>
            <p>{{ temoignage.acf.question2 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Quelles sont les différences entre le système universitaire québécois et celui
              français ?</h3>
            <p>{{ temoignage.acf.question3 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Y a-t-il une tradition ou un aspect de la culture québécoise qui vous a
              particulièrement plu ?</h3>
            <p>{{ temoignage.acf.question4 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Y a-t-il des astuces ou des choses à savoir pour réussir son intégration, sur
              le
              plan académique ou personnel ?</h3>
            <p>{{ temoignage.acf.question5 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Pouvez-vous partager une anecdote marquante ou drôle qui illustre votre vie au
              Québec ?</h3>
            <p>{{ temoignage.acf.question6 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Avez-vous rencontré des difficultés particulières pendant votre séjour, si
              oui,
              voulez-vous en parler ?</h3>
            <p>{{ temoignage.acf.question7 }}</p>
          </div>

          <div>
            <h3 class="font-bold text-xl">Avec le recul, souhaitez-vous réitérer cette expérience ? Si oui,
              changeriez-vous quelque chose ?</h3>
            <p>{{ temoignage.acf.question8 }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>