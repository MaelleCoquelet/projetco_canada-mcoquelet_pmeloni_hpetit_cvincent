<script setup lang="ts">
const route = useRoute();
const { data: pages, status, error, refresh, clear } = await useAsyncData(
  'posts',
  () => $fetch('https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/posts')
)
</script>

<template>
    <section class="col-span-12 grid grid-cols-12 bg-[url(/img/plageMatane_ashChloeLouise.jpg)] bg-cover opacity-80">
        <nav class="w-full text-white col-start-2 col-end-8">
            <div class="items-left pt-96 pb-16">
                <h1 class="text-5xl md:text-9xl font-bold ">Témoignages</h1>
                <p class="text-xl md:text-2xl mt-6" >Retrouvez ici, les témoignages d’anciens étudiants ayant déjà réalisé l’échange au Canada.</p>
            </div>
        </nav>
    </section>
    <section class="md:col-span-12 md:grid md:grid-cols-12 text-white bg-red-900">
        <div class="md:col-start-3 md:col-end-11 md:pt-16 md:pb-16 px-6 py-10" >
            <p class="text-lg" >Nous comprenons à quel point il est essentiel, tant pour les étudiants que pour leurs parents, de savoir à quoi s'attendre afin de préparer au mieux cette aventure. C'est pourquoi nous avons recueilli les témoignages de plusieurs anciens participants ayant déjà vécu cet échange avec succès.</p>
            <p class="text-lg"  >Grâce à ces récits écrits et vidéos, vous découvrirez les défis auxquels vous pourriez être confrontés et obtiendrez des conseils précieux pour vous y préparer sereinement.</p>
        </div>
    </section>
    <section class="md:col-span-12 md:grid md:grid-cols-12 text-black bg-white px-6 py-10">
    <div class="md:col-start-3 md:col-end-11 my-9">
        <div v-if="status === 'pending'" class="text-center text-lg font-semibold">Chargement...</div>
        <div v-else-if="status === 'error'" class="text-center text-lg text-red-900 font-semibold">Une erreur s'est produite</div>
        <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
            <li v-for="page in pages" :key="page.id" class=" text-black shadow-lg rounded-xl p-6 flex flex-col justify-between hover:scale-110 transform transition duration-300">
                <NuxtLink :to="`/temoignages/${page.id}`">
                <i class="text-sm">{{ page.acf.texte_intro.length > 250 ? page.acf.texte_intro.substring(0, 250) + '...' : page.acf.texte_intro }}</i>
                <div class="text-right mt-5">
                <h3 class="text-lg font-bold mb-2">{{ page.acf.nom_prenom }}</h3>
                <p class="text-sm text-gray-500 mb-2">{{ page.acf.date_echanges_scolaire }}</p>
                <button class="px-6 py-3 bg-red-900 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 transition">En savoir plus ></button>
                
            </div>
        </NuxtLink>
            </li>
        </ul>
    </div>
</section>
</template>