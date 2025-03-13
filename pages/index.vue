<script setup lang="ts">
const route = useRoute()
import '../styles/styles.css';

</script>

<template>
  <div>
    <section class="col-span-12 text-white grid grid-cols-12 bg-[url(/img/mainphoto.jpg)] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <h1 class="col-span-12 text-6xl sm:text-8xl md:text-8xl font-bold mt-14 sm:mt-14 md:mt-24 col-start-1 col-end-10">Dépassez vos limites et prenez votre envol</h1>
      <p class="col-span-12 text-lg sm:text-xl col-start-1 col-end-9 mt-8 sm:mt-14">Osez franchir un nouveau cap dans votre parcours académique et personnel. L'échange universitaire au Canada est
        une opportunité unique d’élargir vos horizons, de découvrir de nouvelles méthodes d’enseignement, et de vivre
        une
        expérience inoubliable.</p>
      <p class="col-span-12 text-lg sm:text-xl col-start-1 col-end-9 mt-4 sm:mt-5">Envie d’en savoir plus sur cette aventure ? Explorez ce que ces cégeps canadiens peuvent vous offrir et comment
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
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)]">
                    <span class="sr-only">142</span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="sm:text-3xl leading-7 text-white">étudiants partent chaque année</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)]">
                    <span class="sr-only"></span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="sm:text-3xl leading-7 text-white">années d'histoire</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                    <span class="sr-only">15</span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <p class=" sm:text-xl font-bold text-white px-64 mb-10 mt-10"> Un échange riche en kilomètres… et en poutines ! En 45 ans d’échanges, nos étudiants ont parcouru 495 630 km.
          Avec 7 étudiants qui partent chaque année, ça fait déjà 315 étudiants qui ont découvert les joies de la vie
          canadienne grâce à MMI.</p>
      </div>
    </section>
    <section>
      <video src=""></video>
      <h2>Entre découvertes, rencontres et apprentissages : la vie au Canada</h2>
      <p>La vie au Canada implique un changement de culture. Plongez vous dans une ambiance chaleureuse, riche en
        rencontres et en expériences. Découvrez la culture québécoise au travers du sport universitaire et d'évènements
        sportifs typiques. Enrichissez votre parcours avec de nouvelles compétences, et profitez de la liberté offerte
        par
        les cursus de Matane et Vanier. Entre ville et nature, explorez de nouveaux horizons et ouvrez vous à de
        nouvelles
        expériences. Partagez votre savoir-faire et profitez des talents des équipes québécoises. Pendant votre séjour,
        expérimentez, apprenez et découvrez.</p>
    </section>
    <section>
      <h2>Suivez les actualités</h2>
      <div>
        <h3>Journée portes ouvertes</h3>
        <p>1er février 2026 - de 8h à 17h</p>
        <p>Venez rencontrer nos étudiants actuels et anciens lors de notre Journée Portes Ouvertes ! Une occasion unique
          de découvrir le département MMI. Profitez de cette journée pour poser vos questions, échanger avec les
          intervenants et vous inspirer de leurs expériences.</p>
      </div>
    </section>
  </div>
</template>
