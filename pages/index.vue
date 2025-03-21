<script setup lang="ts">
import { formatDate } from '~/utils/dateUtils';
const route = useRoute()
import '../styles/styles.css';

const { data: pages, status, error, refresh, clear } = await useAsyncData(
  'pages',
  () => $fetch('https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/pages')
)
console.log(status.value)
</script>

<template>
  <div>
    <section
      class=" col-span-12 text-white grid grid-cols-12 bg-[url(/img/mainphoto.jpg)] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <h1 class="col-span-12 text-6xl md:text-8xl font-bold mt-14 sm:mt-14 md:mt-24 col-start-1 col-end-10">
        Dépassez vos limites et prenez votre envol</h1>
      <p class="col-span-12 text-lg md:text-xl col-start-1 col-end-9 mt-8 sm:mt-14">Osez franchir un nouveau cap dans
        votre parcours académique et personnel. L'échange universitaire au Canada est
        une opportunité unique d’élargir vos horizons, de découvrir de nouvelles méthodes d’enseignement, et de vivre
        une
        expérience inoubliable.</p>
      <p class="col-span-12 text-lg md:text-xl col-start-1 col-end-9 mt-4 sm:mt-5">Envie d’en savoir plus sur cette
        aventure ? Explorez ce que ces cégeps canadiens peuvent vous offrir et comment
        vous pouvez en faire partie !</p>
      <button class="bg-red-700 text-white py-2 px-4 rounded mt-12 col-start-1 col-end-3 mb-10">
        <a href="/vanier">Découvrir le parcours</a>
      </button>
    </section>

    <section class="bg-red-900 col-span-12 grid grid-cols-12">
      <div class="col-span-12 mt-14 flex justify-center">
        <img src="/public/img/map.png" alt="Carte du monde" class=" object-contain md:object-cover" />
      </div>
      <div class="col-span-12">
        <div id="stats" class="py-8 sm:py-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="sm:text-3xl leading-7 text-white">MMI déjà partis</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                  <span
                    class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)]">
                    <span class="sr-only"></span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="sm:text-3xl leading-7 text-white">étudiants partent chaque année</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                  <span
                    class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)]">
                    <span class="sr-only"></span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="sm:text-3xl leading-7 text-white">années d'histoire</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                  <span
                    class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                    <span class="sr-only"></span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <p class=" sm:text-xl font-bold text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20"> Un échange riche en
          kilomètres… et en poutines !
          En 15 ans d’échanges, nos étudiants ont parcouru 495 630 km.
          Avec 7 étudiants qui partent chaque année, ça fait déjà 142 étudiants qui ont découvert les joies de la vie
          canadienne grâce à MMI.</p>
      </div>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <div class="aspect-w-16 aspect-h-9">
        <iframe class="w-full h-full" width="560" height="315"
          src="https://www.youtube.com/embed/iHKhxctLsLk?si=PtB23zi6yHMxxeiV" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-4">Entre découvertes, rencontres et apprentissages : la vie au Canada</h2>
        <p class="mt-5">La vie au Canada implique un changement de culture. Plongez vous dans une ambiance chaleureuse,
          riche en
          rencontres et en expériences. Découvrez la culture québécoise au travers du sport universitaire et
          d'évènements
          sportifs typiques.</p>
        <p class="mt-5">Enrichissez votre parcours avec de nouvelles compétences, et profitez de la liberté offerte
          par
          les cursus de Matane et Vanier. Entre ville et nature, explorez de nouveaux horizons et ouvrez vous à de
          nouvelles
          expériences.</p>
        <p class="mt-5">Partagez votre savoir-faire et profitez des talents des équipes québécoises. Pendant votre
          séjour,
          expérimentez, apprenez et découvrez.</p>
      </div>
    </section>
    <section class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <h2 class="text-center font-bold text-3xl py-8">Suivez les actualités</h2>
      <div>
        <div class="col-start-3 col-end-11 mb-9 ">
          <div v-if="status === 'pending'" class="text-center text-lg font-semibold">Chargement...</div>
          <div v-else-if="status === 'error'" class="text-center text-lg text-red-500 font-semibold">Une erreur s'est
            produite</div>
          <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li v-for="page in pages" :key="page.id"
              class="bg-red-900 text-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition duration-300 ">
              <NuxtLink :to="`/evenements/${page.id}`">
                <h3 class="text-2xl font-semibold mb-2">{{ page.acf.titre }}</h3>
                <p class="text-lg text-gray-300 mb-2">{{ formatDate(page.acf.date) }}</p>
                <p class="text-sm">{{ page.acf.texte_1.length > 250 ? page.acf.texte_1.substring(0, 250) + '...' :
                  page.acf.texte_1 }}</p>

                <button
                  class="px-6 py-3 mt-5 bg-white text-red-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition">En
                  savoir plus ></button>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
