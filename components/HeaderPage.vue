<script setup lang="ts"></script>
<template>
    <header class="bg-red-900 text-zinc-50 text-[28px] p-8">
        <div class="flex justify-between items-center">
            <a href="../"><img src="../public/icons/logo_liftoff.svg" alt="Logo de LiftOff Mmi"></a>
            <a href="../" class="hidden"><img src=" ../public/icons/logo_mmi_white.png"
                    alt="Logo de LiftOff Mmi" class="h-[50px]"></a>
            <div>*</div>
        </div>
        <nav class="hidden pt-24">
            <ul class="flex flex-col gap-28 text-right items-end *:*:*:border-b-2 *:*:*:border-zinc-50">
                <div class="flex flex-col gap-8">
                    <li><a href="">CEGEP Matane</a></li>
                    <li><a href="/vanier">CEGEP Vanier</a></li>
                    <li><a href="">Préparer son départ</a></li>
                    <li><a href="">Évènements</a></li>
                    <li><a href="">Témoignages</a></li>
                </div>
                <div>
                    <li><a href="">Contact</a></li>
                </div>
            </ul>
        </nav>

    </header>
</template>