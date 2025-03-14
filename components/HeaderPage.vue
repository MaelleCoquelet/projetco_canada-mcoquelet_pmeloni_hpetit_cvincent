<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
    const menu = document.querySelector('nav');
    const toggleButton = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(event.target as Node) && toggleButton && !toggleButton.contains(event.target as Node)) {
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<!--
<template>
    <header class="sticky top-0 flex items-center justify-between text-zinc-50 text-[28px] p-8 h-24 bg-transparent">
        <div class="flex justify-between items-center">
            <a href="../"><img src="../public/icons/logo_liftoff.svg" alt="Logo de LiftOff Mmi"></a>
        </div>
        <nav class="hidden md:flex gap-4 text-lg">
            <ul class="flex gap-4">
                <li><a href="/matane">CEGEP Matane</a></li>
                <li><a href="/vanier">CEGEP Vanier</a></li>
                <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                <li><a href="">Évènements</a></li>
                <li><a href="">Témoignages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <button
            class="relative z-10 flex h-4 w-6 flex-col justify-between md:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300 menu-toggle"
            @click="toggleMenu">
            <span :class="{ 'translate-y-[6px] rotate-45': isMenuOpen }"></span>
            <span :class="{ 'opacity-0': isMenuOpen }"></span>
            <span :class="{ '-translate-y-[8px] -rotate-45': isMenuOpen }"></span>
        </button>

        <nav :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
            class="fixed top-0 right-0 h-full w-full bg-red-900 text-white transform transition-transform duration-300 ease-in-out pt-24 md:hidden">
            <ul class="flex flex-col gap-8 text-center md:text-right md:items-end border-b-2 border-zinc-50">
                <li><a href="/matane">CEGEP Matane</a></li>
                <li><a href="/vanier">CEGEP Vanier</a></li>
                <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                <li><a href="">Évènements</a></li>
                <li><a href="">Témoignages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>
-->

<template>
    <header class="sticky top-0 flex items-center justify-between text-zinc-50 text-[28px] p-8 h-24 bg-red-900 bg-opacity-80">
        <div class="flex justify-between items-center w-16 h-16">
            <a href="../" :class="{ 'hidden': isMenuOpen }"><img src="../public/icons/logo_liftoff.svg"
                    alt="Logo de LiftOff Mmi"></a>
        </div>
        <a href="../" class="opacity-0 absolute z-10 md:hidden"
            :class="{ 'opacity-100 transform transition duration-500': isMenuOpen }"><img
                src=" ../public/icons/logo_mmi_white.png" alt="Logo de LiftOff Mmi" class="h-[50px]"></a>
        <button
            class="relative z-10 flex h-4 w-6 flex-col justify-between md:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300"
            @click="toggleMenu">
            <span :class="{ 'translate-y-[6px] rotate-45': isMenuOpen }"></span>
            <span :class="{ 'opacity-0': isMenuOpen }"></span>
            <span :class="{ '-translate-y-[8px] -rotate-45': isMenuOpen }"></span>
        </button>

        <nav :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
            class="fixed top-0 right-0 h-full w-full bg-red-900 text-white transform transition-transform duration-300 ease-in-out pt-24 md:hidden">
            <ul class="flex flex-col gap-8 text-right px-8 *:*:border-b-2 *:*:border-zinc-50 *:*:pb-1">
                <li><a href="/matane">CEGEP Matane</a></li>
                <li><a href="/vanier">CEGEP Vanier</a></li>
                <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                <li><a href="">Évènements</a></li>
                <li><a href="">Témoignages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        <nav class="hidden md:flex gap-4 text-lg">
            <ul class="flex gap-4">
                <li><a href="/matane">CEGEP Matane</a></li>
                <li><a href="/vanier">CEGEP Vanier</a></li>
                <li><a href="/preparer-son-depart">Préparer son départ</a></li>
                <li><a href="">Évènements</a></li>
                <li><a href="">Témoignages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>