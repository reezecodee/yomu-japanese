<script setup lang="ts">
import type { MenuItem } from '@/types/Tabemono';

defineProps<{
    item: MenuItem;
}>();
</script>

<template>
    <div class="menu-card group">

        <div class="emoji-icon group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out">
            {{ item.icon }}
        </div>

        <h3
            class="text-2xl font-black text-slate-700 mb-1 leading-tight group-hover:text-apricot-dark transition-colors">
            {{ item.kanji }}
        </h3>

        <p class="text-sm font-extrabold text-apricot-accent uppercase tracking-widest">
            {{ item.romaji }}
        </p>

        <p class="text-xs font-bold text-slate-400 mt-1">
            {{ item.meaning }}
        </p>

    </div>
</template>

<style scoped>
.menu-card {
    background: white;
    border: 3px solid var(--color-apricot-dark);
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 100%;
    /* Agar tinggi kartu seragam di grid */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    border-color: var(--color-apricot-accent);
}

.emoji-icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    filter: drop-shadow(0 4px 0 rgba(0, 0, 0, 0.05));
}
</style>