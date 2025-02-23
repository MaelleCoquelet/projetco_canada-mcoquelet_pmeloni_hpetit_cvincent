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

<template>
    <header class="bg-red-900 text-zinc-50 text-[28px] p-8">
        <div class="flex justify-between items-center">
            <a href="../"><img src="../public/icons/logo_liftoff.svg" alt="Logo de LiftOff Mmi"></a>
            <a href="../" class="hidden"><img src=" ../public/icons/logo_mmi_white.png"
                    alt="Logo de LiftOff Mmi" class="h-[50px]"></a>
            <div @click="toggleMenu" class="cursor-pointer menu-toggle">☰</div>
        </div>
        <nav :class="{'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen}" class="fixed top-0 right-0 h-full w-full bg-red-900 text-white transform transition-transform duration-300 ease-in-out pt-24 md:w-2/3 md:pt-0">
            <div @click="closeMenu" class="absolute top-4 right-4 cursor-pointer">X</div>
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