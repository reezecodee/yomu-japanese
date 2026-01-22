<script setup lang="ts">
import { useRoute } from 'vue-router';
import SecNavbar from '@/components/common/nav/SecNavbar.vue';
import { computed } from 'vue';

const route = useRoute();

// --- THEME CONFIGURATION ---
const themeMap: Record<string, { bg: string, hover: string }> = {
    // 1. HIRAGANA (Default)
    'peach': {
        bg: 'bg-peach',
        hover: 'group-hover:bg-peach-accent'
    },
    // 2. KATAKANA
    'ice': {
        bg: 'bg-ice',
        hover: 'group-hover:bg-ice-accent'
    },
    // 3. KANJI
    'lavender': {
        bg: 'bg-lavender',
        hover: 'group-hover:bg-lavender-accent'
    },
    // 4. SUUJI (Angka)
    'vanilla': {
        bg: 'bg-vanilla',
        hover: 'group-hover:bg-vanilla-accent'
    },
    // 5. DOUSHI (Kata Kerja)
    'rose': {
        bg: 'bg-rose',
        hover: 'group-hover:bg-rose-accent'
    },
    // 6. KEIYOUSHI (Kata Sifat)
    'aqua': {
        bg: 'bg-aqua',
        hover: 'group-hover:bg-aqua-accent'
    },
    // 7. MONO (Benda) - Pakai warna ghost/netral
    'ghost': {
        bg: 'bg-ghost',
        hover: 'group-hover:bg-loc-home' // Default orange kalau hover
    },
    // 8. SHIGOTO (Pekerjaan)
    'surface': {
        bg: 'bg-surface',
        hover: 'group-hover:bg-surface-accent'
    },
    // 9. TABEMONO (Makanan)
    'apricot': {
        bg: 'bg-apricot',
        hover: 'group-hover:bg-apricot-accent'
    },
    // 10. AISATSU (Salam)
    'sky': {
        bg: 'bg-sky',
        hover: 'group-hover:bg-sky-accent'
    },
    // 11. BUNPOU (Tata Bahasa)
    'cool': {
        bg: 'bg-cool',
        hover: 'group-hover:bg-cool-accent'
    },
    // 12. JOSHI (Partikel)
    'mint': {
        bg: 'bg-mint',
        hover: 'group-hover:bg-mint-accent'
    },
    // 13. FLASHCARD
    'indigo': {
        bg: 'bg-indigo',
        hover: 'group-hover:bg-indigo-accent'
    },

    // FALLBACK (Jaga-jaga kalau lupa set meta)
    'default': {
        bg: 'bg-peach',
        hover: 'group-hover:bg-peach-accent'
    }
};

const currentTheme = computed(() => {
    const themeName = (route.meta.bgClass as string) || 'default';
    return themeMap[themeName] || themeMap['default'];
});

const pageTitle = computed(() => (route.meta.title as string) || '');
</script>

<template>
    <div :class="['min-h-screen pb-20 transition-colors duration-300 wrapper', currentTheme.bg]">

        <SecNavbar :title="pageTitle" :hover-class="currentTheme.hover" />

        <main class="max-w-4xl mx-auto px-4">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </router-view>
        </main>

    </div>
</template>

<style scoped>
.wrapper {
    color: var(--color-dark);
    font-family: var(--font-sans);

    /* Polkadot Background Pattern */
    background-image: radial-gradient(#fff 2px, transparent 2px);
    background-size: 30px 30px;
}
</style>