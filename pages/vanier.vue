<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <section class="col-span-12 grid grid-cols-12 bg-[url(/img/vanier.jpg)]">
        <nav class="w-full text-white col-start-2 col-end-8">
            <div class="items-left pt-96 pb-16">
                <h1 class="text-6xl md:text-9xl font-bold">VANIER</h1>
                <h2 class="text-3xl md:text-6xl font-bold">CEGEP/COLLEGE</h2>
                <h3 class="text-xl md:text-2xl"> Montréal, QC, Canada</h3>
            </div>
        </nav>
    </section>
    <section class="col-span-12 grid grid-cols-12 text-white bg-red-900">
        <div class="col-start-3 col-end-11 mt-16 mb-16">
            <h4 class="text-3xl font-semibold">Qu'est-ce que le Cegep de Vanier ?</h4>
            <p class="text-lg mt-5">Vanier College est l'un des 48 cégeps au Québec, fondé en 1970 dans le quartier
                Saint-Laurent à Montréal. Il tire son nom de Georges-Philias Vanier, un Canadien de renom qui fut le
                premier gouverneur général francophone du Canada. Son histoire est profondément ancrée dans l'objectif
                de promouvoir l'éducation bilingue, la diversité et l'ouverture culturelle, des valeurs qui restent au
                cœur de sa mission aujourd'hui.</p>

            <p class="text-lg mt-5">L'IUT de Nord Franche-Comté et Vanier College collaborent dans le cadre d'échanges
                académiques internationaux. Ce partenariat permet aux étudiants d'élargir leurs compétences, de
                découvrir des approches pédagogiques différentes, et de développer une ouverture culturelle. Il favorise
                également les échanges dans les domaines de la communication, du multimédia, et de la programmation.</p>

            <!-- Cards (ça prend de la place avec les svg sorry) -->

            <h4 class="text-3xl font-semibold mt-10">Pourquoi on aime tant Vanier ?</h4>
            <div class=" flex p-6 bg-white/10 items-center rounded-lg mt-5">

                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-5V16c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v5.25zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
                        clip-rule="evenodd" />
                    <path fill="currentColor"
                        d="M8 4.5c.943 0 1.414 0 1.707.293S10 5.557 10 6.5v1.792q.234.114.414.294c.404.404.53.978.569 1.914V12c-1.874 0-2.813.002-3.397.586C7 13.172 7 14.114 7 16v5.25H3V12c0-1.886 0-2.828.586-3.414A1.5 1.5 0 0 1 4 8.292V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h.25V3a.75.75 0 0 1 1.5 0v1.5zm12.644.747c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12c1.886 0 2.828 0 3.414.586S17 14.114 17 16v5.25h4V7.772c0-1.34 0-2.011-.356-2.525"
                        opacity="0.5" />
                </svg>

                <p class=" text-xl ml-9 font-semibold text-left">Situé dans un environnement urbain dynamique proposant
                    un large
                    panel d’activités culturelles.</p>
            </div>


            <div class=" flex p-6 bg-white/10 items-center rounded-lg mt-5">

                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 512">
                    <path fill="currentColor"
                        d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32m360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8m137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32 32 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63M320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80s80 35.82 80 80s-35.82 80-80 80m288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32" />
                </svg>

                <p class=" text-xl ml-9 font-semibold text-left">Un campus et des installations dédiés au multimédia et
                    situés juste
                    à côté du métro. </p>
            </div>


            <div class=" flex p-6 bg-white/10 items-center rounded-lg mt-5">

                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M21 16v-5.9l-8.05 4.375q-.45.25-.95.25t-.95-.25l-8.45-4.6q-.275-.15-.388-.375T2.1 9t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16m-9.95 4.475l-5-2.7q-.5-.275-.775-.75T5 16v-3.8l6.05 3.275q.45.25.95.25t.95-.25L19 12.2V16q0 .55-.275 1.025t-.775.75l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188" />
                </svg>
                <p class=" text-xl ml-9 font-semibold text-left">Aborde de nombreux sujets tels que l’animation, le
                    développement de jeux, ou le design du son. </p>
            </div>

        </div>
    </section>

    <!-- Temoignages -->

    <section class="col-span-12 grid grid-cols-12 text-black bg-red-100">
        <div class="col-start-3 col-end-11 mt-16 mb-16 -z-10">
            <h5 class="text-2xl font-bold mb-8">Qu’en disent les étudiants ?</h5>
            <div class="relative">


                <p class="text-9xl absolute top-0 left-0 text-red-900 opacity-25">“</p>
                <p class="ml-16 text-lg">Le système Canadien est centré autour de la pratique, on ne fait que des
                    projets. La notation est gentille ce qui permet de se concentrer sur notre travail et le mettre dans
                    notre portfolio.
                    La relation avec les professeurs est aussi beaucoup moins “scolaire”, on peut organiser des sorties
                    avec eux si on le souhaite.”</p>
                <p class="ml-16 font-bold text-right">Hugo PETIT</p>
                <p class="ml-16 text-right">échange de août à décembre 2024</p>
            </div>


            <div class="relative mt-10">
                <p class="text-9xl absolute top-0 left-0 text-red-900 opacity-25">“</p>
                <p class="ml-16 text-lg">C’était mon rêve d’aller au Canada parce que depuis petite je veux vivre dans
                    un pays anglophone [...] financièrement c’était compliqué mais j’ai adoré être au Canada. [...] Les
                    profs sont vraiment trop sympas et on a pu remplir notre portfolio à fond.”</p>
                <p class="ml-16 font-bold text-right">Paola MELONI</p>
                <p class="ml-16 text-right">échange de août à décembre 2024</p>
            </div>
        </div>
    </section>
    <section class="bg-red-100 flex justify-center">
        <a href="/temoignages"
            class="text-white flex bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Voir
            plus de témoignages</a>
    </section>
</template>