<script setup lang="ts">
import HomeLayout from '@/components/layouts/HomeLayout.vue';
import PopMenuCard from '@/components/common/card/PopMenuCard.vue';
import { menuItems } from '@/data/home-routes';
</script>

<template>
    <HomeLayout>

        <header class="relative pt-16 pb-12 px-4 text-center">
            <div class="max-w-4xl mx-auto relative z-10">
                <div
                    class="inline-block transform -rotate-2 hover:rotate-0 transition duration-300 mb-4 cursor-default">
                    <span
                        class="bg-[var(--color-vanilla)] text-slate-800 border-4 border-white px-6 py-2 rounded-2xl font-extrabold text-lg shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
                        PORTAL BELAJAR JEPANG
                    </span>
                </div>

                <h1
                    class="text-6xl md:text-8xl font-black text-slate-800 leading-tight tracking-tight mb-4 drop-shadow-sm">
                    YOMU <span class="text-white"
                        style="-webkit-text-stroke: 3px var(--color-peach-accent);">JAPANESE!</span>
                </h1>

                <p class="text-xl font-bold text-slate-500 max-w-2xl mx-auto">
                    Pilih topik belajarmu dan mulailah petualangan bahasa Jepang sekarang juga!
                </p>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 space-y-16">

            <section>
                <div class="flex items-center gap-3 mb-6">
                    <span class="text-3xl">✍️</span>
                    <h2
                        class="text-2xl font-black text-slate-700 uppercase tracking-wider border-b-4 border-white pb-1">
                        Huruf & Angka</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PopMenuCard v-for="item in menuItems.slice(0, 4)" :key="item.title" v-bind="item" />
                </div>
            </section>

            <section>
                <div class="flex items-center gap-3 mb-6">
                    <span class="text-3xl">📚</span>
                    <h2
                        class="text-2xl font-black text-slate-700 uppercase tracking-wider border-b-4 border-white pb-1">
                        Kosakata (Vocabulary)</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PopMenuCard v-for="item in menuItems.slice(4, 15)" :key="item.title" v-bind="item" />
                </div>
            </section>

            <section>
                <div class="flex items-center gap-3 mb-6">
                    <span class="text-3xl">🧩</span>
                    <h2
                        class="text-2xl font-black text-slate-700 uppercase tracking-wider border-b-4 border-white pb-1">
                        Tata Bahasa</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PopMenuCard v-for="item in menuItems.slice(15)" :key="item.title" v-bind="item" />
                </div>
            </section>

        </main>

    </HomeLayout>
</template>