<script setup lang="ts">
const route = useRoute()
import '../styles/styles.css';

</script>

<template>
  <div>
    <section class="col-span-12 grid grid-cols-12 bg-zinc-600">
      <img src="" alt="Image chouette" class="col-span-12">
      <h1 class="col-span-12">Dépassez vos limites et prenez votre envol</h1>
      <p class="col-span-12">Osez franchir un nouveau cap dans votre parcours académique et personnel. L'échange universitaire au Canada est
        une opportunité unique d’élargir vos horizons, de découvrir de nouvelles méthodes d’enseignement, et de vivre
        une
        expérience inoubliable.</p>
      <p class="col-span-12">Envie d’en savoir plus sur cette aventure ? Explorez ce que ces cégeps canadiens peuvent vous offrir et comment
        vous pouvez en faire partie !</p>
      <a href="/vanier" class="col-span-12"></a>
    </section>



    <section class="bg-red-900 col-span-12 grid grid-cols-12">
      <div class="col-span-12">
        <div id="stats" class="py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-conée1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
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
        <p class=" sm:text-xl font-bold text-white px-64"> Un échange riche en kilomètres… et en poutines ! En 45 ans d’échanges, nos étudiants ont parcouru 495 630 km.
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
