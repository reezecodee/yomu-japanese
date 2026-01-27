<script setup lang="ts">
import type { JoshiItem } from '@/types/Joshi';

defineProps<{
    item: JoshiItem;
}>();
</script>

<template>
    <div class="particle-card h-full">

        <div class="card-header">
            <div class="text-4xl md:text-5xl font-black">{{ item.kana }}</div>
            <div class="text-right">
                <div class="text-lg md:text-xl font-bold uppercase tracking-wide">{{ item.romaji }}</div>
                <div
                    class="text-xs font-bold opacity-80 uppercase tracking-widest bg-white/20 px-2 rounded mt-1 inline-block">
                    {{ item.label }}
                </div>
            </div>
        </div>

        <div class="p-6 flex-grow flex flex-col gap-4">

            <div>
                <h3 class="font-bold text-mint-dark mb-1 flex items-center gap-2">
                    <span class="text-lg">💡</span> Fungsi:
                </h3>
                <p class="text-sm text-slate-600 font-medium leading-relaxed">
                    {{ item.function }}
                </p>
            </div>

            <div class="example-bubble mt-auto">
                <p class="font-black text-lg text-mint-dark mb-1">
                    <span
                        v-html="item.example.jp.replace(item.example.highlight, `<span class='text-mint-accent'>${item.example.highlight}</span>`)"></span>
                </p>
                <p class="text-sm font-bold text-slate-500 italic mb-1">
                    {{ item.example.ro }}
                </p>
                <p class="text-sm font-bold text-slate-800 border-t border-dashed border-green-200 pt-1 mt-1">
                    {{ item.example.id }}
                </p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.particle-card {
    background: white;
    border: 4px solid var(--color-mint-dark);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}

.particle-card:hover {
    transform: translateY(-4px);
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
}

.card-header {
    background: var(--color-mint-accent);
    color: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid var(--color-mint-dark);
}

.example-bubble {
    background: var(--color-mint);
    border: 2px dashed var(--color-mint-accent);
    border-radius: 16px;
    padding: 1rem;
}
</style>