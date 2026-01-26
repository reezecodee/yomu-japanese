<script setup lang="ts">
import JobCard from '@/components/common/card/JobCard.vue';
import { ShigotoItems } from '@/data/shigoto'
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-7">
            <JobCard v-for="(job, index) in ShigotoItems" :key="index" :item="job" />
        </div>

        <div class="mt-12 bg-white border-4 border-surface-dark rounded-[32px] p-6 md:p-8 shadow-card text-center">
            <h3 class="text-2xl font-black text-surface-dark mb-4">Memperkenalkan Pekerjaan</h3>

            <div class="bg-surface rounded-2xl p-6 border-2 border-dashed border-slate-300">
                <p class="text-slate-500 font-bold mb-2 uppercase text-xs tracking-widest">RUMUS</p>
                <p class="text-xl md:text-2xl font-black text-surface-dark">
                    Watashi wa <span class="text-surface-accent border-b-4 border-surface-accent">[ PEKERJAAN ]</span>
                    desu.
                </p>
                <p class="mt-4 text-slate-600 font-bold">
                    Contoh: <br>
                    <span class="text-surface-dark">Watashi wa <span class="text-surface-accent">Gakusei</span>
                        desu.</span>
                    <span class="block text-sm text-slate-400 font-normal mt-1">(Saya adalah seorang pelajar.)</span>
                </p>
            </div>
        </div>

    </div>
</template>