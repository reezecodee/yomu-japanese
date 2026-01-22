<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import CharModal from '@/components/common/modal/CharModal.vue';
import { ref } from 'vue';
import { seion, dakuten, yoon } from '@/data/hiragana';

interface CharData {
    char: string;
    romaji: string;
    type?: 'empty';
    desc?: string
}

const hiraganaTabs = [
    { label: 'Dasar (Seion)', value: 'seion' },
    { label: 'Dakuten (″)', value: 'dakuten' },
    { label: 'Gabungan (Yoon)', value: 'yoon' }
]

const activeTab = ref('seion')

// -- state modal
const isModalOpen = ref(false)
const selectedChar = ref<CharData | null>(null);

const handleCardClick = (char: CharData) => {
    if (char.type === 'empty') return;
    selectedChar.value = char
    isModalOpen.value = true
}
</script>

<template>
    <TabSwitcher :tabs="hiraganaTabs" v-model="activeTab" theme="peach" />

    <div v-show="activeTab === 'seion'" class="animate-fade-in">
        <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
            <div class="grid grid-cols-5 gap-3 md:gap-4">
                <div v-for="(item, index) in seion" :key="index" @click="handleCardClick(item)" :class="[
                    'aspect-square rounded-[20px] flex flex-col items-center justify-center transition-all duration-200 group relative',
                    item.type === 'empty'
                        ? 'invisible pointer-events-none'
                        : 'bg-white border-[3px] border-slate-800 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#334155] hover:bg-[#fff5f5] hover:border-[#ff6b6b]'
                ]">
                    <span class="text-3xl md:text-5xl font-black text-slate-800 mb-1 leading-none">{{ item.char
                    }}</span>

                    <span
                        class="font-sans font-bold text-slate-400 text-sm uppercase px-3 py-0.5 border-2 border-slate-200 rounded-full transition-colors group-hover:bg-[#ff6b6b] group-hover:text-white group-hover:border-[#ff6b6b]">
                        {{ item.romaji }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div v-show="activeTab === 'dakuten'" class="animate-fade-in">
        <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
            <div class="grid grid-cols-5 gap-3 md:gap-4">
                <div v-for="(item, index) in dakuten" :key="index" @click="handleCardClick(item)" :class="[
                    'aspect-square rounded-[20px] flex flex-col items-center justify-center transition-all duration-200 group relative',
                    item.type === 'empty'
                        ? 'invisible pointer-events-none'
                        : 'bg-white border-[3px] border-slate-800 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#334155] hover:bg-[#fff5f5] hover:border-[#ff6b6b]'
                ]">
                    <span class="text-3xl md:text-5xl font-black text-slate-800 mb-1 leading-none">{{ item.char
                    }}</span>
                    <span
                        class="font-sans font-bold text-slate-400 text-sm uppercase px-3 py-0.5 border-2 border-slate-200 rounded-full transition-colors group-hover:bg-[#ff6b6b] group-hover:text-white group-hover:border-[#ff6b6b]">
                        {{ item.romaji }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div v-show="activeTab === 'yoon'" class="animate-fade-in">
        <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
            <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div v-for="(item, index) in yoon" :key="index" @click="handleCardClick(item)" :class="[
                    'aspect-auto py-6 rounded-[20px] flex flex-col items-center justify-center transition-all duration-200 group relative',
                    item.type === 'empty'
                        ? 'invisible pointer-events-none'
                        : 'bg-white border-[3px] border-slate-800 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#334155] hover:bg-[#fff5f5] hover:border-[#ff6b6b]'
                ]">
                    <span class="text-4xl md:text-6xl font-black text-slate-800 mb-1 leading-none">{{ item.char
                    }}</span>
                    <span
                        class="font-sans font-bold text-slate-400 text-sm uppercase px-3 py-0.5 border-2 border-slate-200 rounded-full transition-colors group-hover:bg-[#ff6b6b] group-hover:text-white group-hover:border-[#ff6b6b]">
                        {{ item.romaji }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <CharModal :is-open="isModalOpen" :data="selectedChar" theme="peach" @close="isModalOpen = false" />
</template>

<style scoped></style>