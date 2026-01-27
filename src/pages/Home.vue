<script setup lang="ts">
import HomeLayout from '@/components/layouts/HomeLayout.vue';
import PopMenuCard from '@/components/common/card/PopMenuCard.vue';

const menuItems = [
    // ==========================================
    // SECTION 1: HURUF & ANGKA
    // ==========================================
    {
        to: '/kana/hiragana',
        icon: 'あ',
        title: 'Hiragana',
        desc: 'Huruf dasar Jepang',
        tag: 'Dasar',
        hoverColor: 'var(--color-peach-accent)',
        theme: 'rose'
    },
    {
        to: '/kana/katakana',
        icon: 'ア',
        title: 'Katakana',
        desc: 'Huruf kata asing',
        tag: 'Dasar',
        hoverColor: 'var(--color-ice-accent)',
        theme: 'teal'
    },
    {
        to: '/kana/kanji',
        icon: '山',
        title: 'Kanji',
        desc: 'Kartu N5 - N1',
        tag: 'Level Up',
        hoverColor: 'var(--color-lavender-accent)',
        theme: 'violet'
    },
    {
        to: '/kana/suuji',
        icon: '123',
        title: 'Angka',
        desc: 'Hitungan & Uang',
        tag: 'Logika',
        hoverColor: 'var(--color-vanilla-accent)',
        theme: 'amber'
    },

    // ==========================================
    // SECTION 2: KOSAKATA
    // ==========================================
    {
        to: '/vocabulary/mono',
        icon: '🍱',
        title: 'Kotoba',
        desc: 'Warna, Hari, dll',
        tag: 'Bento',
        hoverColor: 'var(--color-indigo-accent)',
        theme: 'indigo'
    },
    {
        to: '/vocabulary/doushi',
        icon: '🏃',
        title: 'Kata Kerja',
        desc: 'Doushi & Konjugasi',
        tag: 'Penting',
        hoverColor: 'var(--color-rose-accent)',
        theme: 'pink'
    },
    {
        to: '/vocabulary/keiyoushi',
        icon: '✨',
        title: 'Kata Sifat',
        desc: 'Keiyoushi (I & NA)',
        tag: 'Deskripsi',
        hoverColor: 'var(--color-aqua-accent)',
        theme: 'cyan'
    },
    {
        to: '/vocabulary/shigoto',
        icon: '💼',
        title: 'Profesi',
        desc: 'Pekerjaan atau profesi',
        tag: 'Name Tag',
        hoverColor: 'var(--color-surface-accent)',
        theme: 'blue'
    },
    {
        to: '/vocabulary/tabemono',
        icon: '🍜',
        title: 'Makanan',
        desc: 'Makanan, minuman, dan rasa',
        tag: 'Daftar',
        hoverColor: 'var(--color-apricot-accent)',
        theme: 'orange'
    },
    {
        to: '/vocabulary/doubutsu',
        icon: '🐯',
        title: 'Hewan',
        desc: 'Darat, air, dan terbang',
        tag: 'Safari',
        hoverColor: 'var(--color-safari-accent)',
        theme: 'amber'
    },
    {
        to: '/vocabulary/norimono',
        icon: '🚄',
        title: 'Transportasi',
        desc: 'Kendaraan & Lalu lintas',
        tag: 'Metro',
        hoverColor: 'var(--color-metro-accent)',
        theme: 'violet'
    },
    {
        to: '/vocabulary/tatemono',
        icon: '🏢',
        title: 'Bangunan',
        desc: 'Gedung & Fasilitas umum',
        tag: 'Kota',
        hoverColor: 'var(--color-concrete-accent)',
        theme: 'slate'
    },
    {
        to: '/vocabulary/kudamono',
        icon: '🍓',
        title: 'Buah',
        desc: 'Buah-buahan segar',
        tag: 'Segar',
        hoverColor: 'var(--color-berry-accent)',
        theme: 'pink'
    },
    {
        to: '/vocabulary/shokubutsu',
        icon: '🌿',
        title: 'Tanaman',
        desc: 'Pohon & Bunga',
        tag: 'Alam',
        hoverColor: 'var(--color-forest-accent)',
        theme: 'green'
    },

    // ==========================================
    // SECTION 3: GRAMMAR
    // ==========================================
    {
        to: '/grammar/bunpou',
        icon: '🏗️',
        title: 'Bunpou',
        desc: 'Pola Kalimat Dasar',
        tag: 'Struktur',
        hoverColor: 'var(--color-cool-dark)',
        theme: 'slate'
    },
    {
        to: '/grammar/joshi',
        icon: '🔗',
        title: 'Partikel',
        desc: 'Wa, Ga, Wo, Ni, De',
        tag: 'Joshi',
        hoverColor: 'var(--color-mint-accent)',
        theme: 'emerald'
    },
    {
        to: '/grammar/aisatsu',
        icon: '💬',
        title: 'Salam',
        desc: 'Aisatsu & Percakapan',
        tag: 'Komik',
        hoverColor: 'var(--color-sky-accent)',
        theme: 'sky'
    },
];
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
                    <PopMenuCard v-for="item in menuItems.slice(4, 14)" :key="item.title" v-bind="item" />
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
                    <PopMenuCard v-for="item in menuItems.slice(14)" :key="item.title" v-bind="item" />
                </div>
            </section>

        </main>

    </HomeLayout>
</template>