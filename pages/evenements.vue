<script setup lang="ts">
const route = useRoute();
const { data: pages, pending, error } = useFetch('https://liftoff-mmi.chloe-vct.fr/wp-json/wp/v2/pages');
</script>

<template>
    <section class="col-span-12 grid grid-cols-12 bg-zinc-600">
        <nav class="w-full text-white col-start-2 col-end-8">
            <div class="items-left pt-96 pb-16">
                <h1 class="text-9xl font-bold ">Événements</h1>
                <p class="text-2xl" >Nous organisons différents évènements pour vous permettre d’entrer en contact avec d’anciens étudiants déjà partis.</p>
            </div>
        </nav>
    </section>
    <section class="col-span-12 grid grid-cols-12 text-white bg-red-900">
        <div class="col-start-3 col-end-11 mt-16 mb-16" >
            <p class="text-lg mt-5" >La journée portes ouvertes 2025 du département MMI Montbéliard vous invite à découvrir l'univers du multimédia et de la communication numérique. Au programme, des ateliers interactifs, des démonstrations de projets étudiants et des échanges avec nos enseignants et étudiants passionnés. Vous pourrez explorer nos formations innovantes, qui allient création, technique et stratégie digitale, pour préparer les métiers de demain.</p>
            <p class="text-lg mt-5"  >Cet événement est une occasion unique de plonger dans l'ambiance dynamique de notre département et d'obtenir des réponses à toutes vos questions. Que vous soyez curieux, futur étudiant ou simplement intéressé par le monde du digital, venez vivre une journée riche en découvertes et en inspirations dans un cadre convivial et stimulant.</p>
        </div>
    </section>
    <section class="col-span-12 grid grid-cols-12 text-white bg-blue-900">
    <div class="col-start-3 col-end-11 mt-16 mb-16">
        <h2 class="text-4xl font-bold">Pages dynamiques</h2>
        
        <div v-if="pending">Chargement...</div>
        <div v-else-if="error">Une erreur s'est produite</div>
        <ul v-else>
            <li v-for="page in pages" :key="page.id" class="mt-5">
                <h3 class="text-2xl font-semibold">{{ page.titre.rendered }}</h3>
                <p class="text-lg" v-html="page.intro.rendered"></p>
            </li>
        </ul>
    </div>
</section>

</template>