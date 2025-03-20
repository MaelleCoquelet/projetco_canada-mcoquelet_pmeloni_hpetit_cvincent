<script setup lang="ts">
import LogoFullLiftoff from './LogoFullLiftoff.vue';

</script>

<template>
    <footer class="bg-red-900 p-8">
        <nav class="flex flex-col gap-8 text-lg text-zinc-50 md:flex-row md:justify-center md:gap-12">
            <div class="flex justify-between md:flex-row-reverse md:items-center md:content-around md:gap-12">
                <div class="flex flex-col gap-5 md:flex-row md:gap-12">
                    <div class="flex flex-col gap-1">
                        <h3 class="uppercase font-semibold">Nos coordonnées</h3>
                        <ul class="pl-2 flex flex-col gap-2">
                            <li class="flex flex-col">4 place Lucien Tharrandin <span>25200 Montbéliard</span></li>
                            <li>03 81 99 47 34</li>
                            <li>but-mmi-montbeliard@univ-fcomte.fr</li>
                        </ul>
                        <ul class="hidden md:flex gap-2 items-center">
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
                    </div>
                    <div class="hidden flex flex-col gap-1 md:flex">
                        <h3 class="uppercase font-semibold">Navigation</h3>
                        <ul class="pl-2 flex flex-col gap-2">
                            <li><a href="/matane">Cegep Matane</a></li>
                            <li><a href="/vanier">Cegep Vanier</a></li>
                            <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                            <li><a href="/evenements">Évènements</a></li>
                            <li><a href="/temoignages">Témoignages</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h3 class="uppercase font-semibold">Plus d'infos</h3>
                        <ul class="pl-2 flex flex-col gap-2">
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/mentions-legales">Mentions légales</a></li>
                            <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
                            <li><a href="/cgu">Conditions générales d'utilisations</a></li>
                        </ul>
                    </div>
                </div>
                <div class="">
                    <a href="../">
                        <LogoFullLiftoff class="w-32 h-32" />
                    </a>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <ul class="flex gap-2 items-center md:hidden">
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
                <ul class="flex gap-3 items-center">
                    <li class="">
                        <a href="https://www.iut-nfc.univ-fcomte.fr/b-u-t-metiers-du-multimedia-et-de-linternet/"><img
                                src="../public/icons/logo_mmi_white.png" alt="Logo du département MMi"
                                class="h-16 w-auto"></a>
                    </li>
                    <li class="">
                        <a href="https://www.iut-nfc.univ-fcomte.fr/"><img src="../public/icons/logo_iut.svg"
                                alt="Logo de l'IUT" class="h-16 w-auto"></a>
                    </li>
                </ul>
            </div>
        </nav>
    </footer>
</template>