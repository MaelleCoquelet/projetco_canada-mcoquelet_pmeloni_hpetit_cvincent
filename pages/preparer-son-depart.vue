<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <section class="col-span-12 grid grid-cols-12 bg-[url(/img/depart.jpg)]">
        <nav class="w-full text-white col-start-2 col-end-8">
            <div class="items-left pt-96 pb-16 flex flex-col gap-8">
                <h1 class="text-8xl font-bold">Préparer son départ</h1>
                <h3 class="text-2xl">Vous trouverez sur cette page tout ce qu’il faut prévoir pour
                    un voyage serein.</h3>
            </div>
        </nav>
    </section>
    <section class="col-span-12 grid grid-cols-12 text-white bg-red-900">
        <div class="col-start-3 col-end-11 mt-16 mb-16">
            <h4 class="text-3xl font-semibold">Pourquoi prévoir son départ ?</h4>
            <p class="text-lg mt-5">Un départ à l’étranger dans un cadre universitaire demande une préparation
                rigoureuse pour garantir une expérience réussie. Les démarches administratives, comme le visa ou
                l’assurance santé, doivent être anticipées pour éviter des complications. </p>

            <p class="text-lg mt-5">Comprendre le mode de vie local et le système éducatif aide à s’adapter plus
                facilement et à maximiser les opportunités. Une planification financière est essentielle pour gérer les
                frais du séjour, tandis que se préparer au choc culturel et émotionnel permet de mieux vivre
                l’éloignement. </p>

            <!-- Cards (ça prend de la place avec les svg sorry) -->

            <h4 class="text-3xl font-semibold mt-10">Que faut-il prévoir ?</h4>
            <div class=" flex p-6 items-center rounded-lg mt-5">
                <IconCheck />
                <p class=" text-xl ml-9 font-semibold text-left">Son passeport</p>
            </div>


            <div class=" flex p-6 items-center rounded-lg mt-5">
                <IconCheck />
                <p class=" text-xl ml-9 font-semibold text-left">Un budget d’un minimum de 4000€</p>
            </div>


            <div class=" flex p-6 items-center rounded-lg mt-5">
                <IconCheck />
                <p class=" text-xl ml-9 font-semibold text-left">Des vêtements chauds</p>
            </div>

        </div>
    </section>

    <section class="col-span-12 grid grid-cols-12">
        <div class="col-start-3 col-end-11 mt-16 mb-16">
        <h2 class="text-2xl font-bold mb-8">Les documents à avoir</h2>
        <div>
            <div>
                <h3>Documents académiques</h3>
                <ul>
                    <li>Lettre d'acceptation</li>
                    <li>Relevé de notes (à partir de la terminale)</li>
                    <li>Certification d'inscription</li>
                    <li>Lettre de motivation</li>
                    <li>Contrat pédagogique</li>
                </ul>
            </div>
            <div>
                <h3>Documents administratifs</h3>
                <ul>
                    <li>Passeport valide</li>
                    <li>AVE (Autorisation de Voyage Electronique, frais de 7€)</li>
                    <li>Formulaire de preuve d'assurance en France (SE-402)</li>
                    <li>Preuve de moyens financiers (à récupérer auprès de votre banque)</li>
                </ul>
            </div>
            <div>
                <h3>À récupérer sur place</h3>
                <ul>
                    <li>Carte d’assurance maladie (sinon frais à payer à l’école)</li>
                    <li>Carte étudiante à récupérer auprès de l’établissement</li>
                </ul>
            </div>
            <div>
                <h3>Autre</h3>
                <ul>
                    <li>Carte bancaire internationale (attention aux taxes)</li>
                    <li>Forfait internet international</li>
                    <li>Billet d’avion</li>
                    <li>Adaptateur de prise</li>
                </ul>
            </div></div>
        </div>
        </section>
    <section class="bg-red-900 text-white">
        <h2 class="text-2xl font-bold mb-8">Chronologiquement</h2>
        <div>
            <div>
                <h3>Préparer le premier dossier pour l’IUT</h3>
                <p>(passeport, relevé de notes de terminale, etc...)</p>
            </div>
            <div>
                <h3>Commencer les démarches les plus longues</h3>
                <p>(assurance, billets d’avion à l’avance, logement)</p>
            </div>
            <div>
                <h3>Préparer son départ</h3>
                <p>(AVE, forfait de téléphone, adaptateur, etc...)</p>
            </div>
            <div>
                <h3>Récupérer les documents sur place</h3>
                <p>(carte étudiante, carte d’assurance maladie)</p>
            </div>
            <div>
                <h3>Profiter</h3>
            </div>
        </div>
    </section>

    <section>
        <h2 class="text-2xl font-bold mb-8">Conseils importants</h2>
        <div>
            <div>
                <h3>Faites les démarches liées à l’assurance maladie le plus tôt possible</h3>
                <p>En France comme au Québec, les démarches peuvent être longues, et si vous ne récupérez pas votre
                    carte
                    d’assurance maladie au Québec, c’est l’école qui vous assurera et vous réclamera 325$ de frais.</p>
            </div>
            <div>
                <h3>N’ayez pas peur de chercher des logements en dehors de Airbnb</h3>
                <p>La solution de logement la plus simple est Airbnb, mais la location d’appartement au Québec ne
                    requiert
                    pas d’état des lieu ou de bail. Vous pouvez donc vous tourner vers d’autres agences de logement.</p>
            </div>
            <div>
                <h3>Entrez en contact avec d’autres étudiants déjà partis</h3>
                <p>Ce sont eux qui connaissent le mieux le sujet, et vous allez probablement avoir des problèmes qu’ils
                    ont
                    eux aussi affronté. N’hésitez pas à demander de l’aide.</p>
            </div>
        </div>
        <p>Vous pouvez télécharger une infographie regroupant toutes étapes et documents nécéssaires, dans l’ordre
            chronologique, en cliquant sur le bouton ci-dessous ↓</p>
            <a href="" download="InfographieCanada.pdf">Téléchargez l'infographie ici</a>
    </section>


</template>