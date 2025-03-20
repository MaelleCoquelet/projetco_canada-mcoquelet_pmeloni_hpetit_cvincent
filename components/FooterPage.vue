<script setup lang="ts">
import LogoFullLiftoff from './LogoFullLiftoff.vue';

</script>

<template>
    <footer class="bg-red-900">
        <nav class="flex flex-col p-6 gap-8 text-lg text-zinc-50">
            <div class="grid grid-col-4">
                <div class="col-span-2">
                    <div>
                        <h3>Nos coordonnées</h3>
                        <ul class="">
                            <li class="flex flex-col">4 place Lucien Tharrandin <span>25200 Montbéliard</span></li>
                            <li>03 81 99 47 34</li>
                            <li>but-mmi-montbeliard@univ-fcomte.fr</li>
                        </ul>
                    </div>
                    <div class="hidden">
                        <h3>Navigation</h3>
                        <ul class="">
                            <li><a href="/matane">Cegep Matane</a></li>
                            <li><a href="/vanier">Cegep Vanier</a></li>
                            <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                            <li><a href="/evenements">Évènements</a></li>
                            <li><a href="/temoignages">Témoignages</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Plus d'infos</h3>
                        <ul class="">
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/mentions-legales">Mentions légales</a></li>
                            <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
                            <li><a href="/cgu">Conditions générales d'utilisations</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-start-3">
                    <div class="w-16 h-16">
                        <a href="../">
                            <LogoFullLiftoff />
                        </a>
                    </div>
                </div>
            </div>
            <ul class="flex gap-2 items-center">
                <li><a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR">
                        <IconFacebook />
                    </a></li>
                <li><a href="https://www.instagram.com/mmi_montbeliard?igsh=Y2oza3N6bTY0OTBt">
                        <IconInstagram />
                    </a></li>
                <li><a href="https://www.linkedin.com/school/mmimontbeliard">
                        <IconLinkedin />
                    </a></li>
            </ul>
            <ul class="flex gap-3">
                <li class="w-16 h-16">
                    <a href="../"><img src="../public/icons/logo_mmi_white.png" alt="Logo du département MMi"></a>
                </li>
                <li class="w-16 h-16">
                    <a href="../"><img src="../public/icons/logo_iut.svg" alt="Logo de l'IUT"></a>
                </li>
            </ul>
        </nav>
    </footer>
</template>