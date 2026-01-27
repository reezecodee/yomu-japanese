<script setup lang="ts">
import ParticleCard from '@/components/common/card/ParticleCard.vue';
import ParticleListItem from '@/components/common/card/ParticleListItem.vue';
import { MainParticles, ExtraParticles } from '@/data/joshi';
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <div class="text-center mb-10 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-black text-[var(--color-mint-dark)] mb-2">Penghubung Kalimat</h2>
            <p class="font-bold text-slate-500">Partikel ibarat "lem" yang menyatukan kata-kata menjadi kalimat utuh.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ParticleCard v-for="(p, i) in MainParticles" :key="i" :item="p" />
        </div>

        <div class="bg-white border-4 border-[var(--color-mint-dark)] rounded-[32px] p-6 md:p-8 shadow-card">
            <h3 class="text-2xl font-black text-[var(--color-mint-dark)] mb-6 border-b-2 border-slate-100 pb-4">
                Partikel Penting Lainnya
            </h3>
            <div class="grid gap-4">
                <ParticleListItem v-for="(p, i) in ExtraParticles" :key="i" :item="p" />
            </div>
        </div>

    </div>
</template>