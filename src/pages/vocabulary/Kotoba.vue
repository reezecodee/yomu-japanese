<script setup lang="ts">
import BentoCard from '@/components/common/card/BentoCard.vue';
import { colors, days, months, nature, seasons } from '@/data/kotoba';
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] grid-flow-dense">

            <BentoCard theme="hero" col-span="md:col-span-2" class="text-white justify-center">
                <span class="bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold mb-2 border border-white/30">
                    VOCABULARY LIST
                </span>
                <h2 class="text-4xl font-black mb-1 text-white">言葉 (Kotoba)</h2>
                <p class="font-bold opacity-80 text-sm text-white">Kumpulan kosakata penting sehari-hari.</p>
                <div class="absolute -right-4 -bottom-4 text-8xl opacity-10 font-black rotate-12 text-white">辞書</div>
            </BentoCard>

            <BentoCard theme="youbi" title="Hari (Youbi)" icon="📅" row-span="md:row-span-2" col-span="md:col-span-1">
                <div class="space-y-2 flex-grow overflow-y-auto pr-1 text-sm mt-2 scrollbar-hide">
                    <div v-for="(d, i) in days" :key="i"
                        class="flex justify-between items-center border-b border-yellow-200 pb-1 last:border-0">
                        <div :class="d.special">
                            <div class="font-black text-base">{{ d.kanji }}</div>
                            <div class="font-bold text-xs uppercase opacity-70">{{ d.romaji }}</div>
                        </div>
                        <div class="font-bold text-slate-500 text-xs">{{ d.mean }}</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="season" title="Musim" icon="🍂">
                <div class="grid grid-cols-2 gap-2 mt-auto">
                    <div v-for="s in seasons" :key="s.romaji"
                        :class="[s.bg, 'p-1 rounded-lg border border-opacity-20 border-black text-center']">
                        <div class="text-xl">{{ s.kanji }}</div>
                        <div :class="[s.color, 'font-bold text-[10px] uppercase']">{{ s.romaji }}</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="iro" title="Warna (Iro)" icon="🎨" col-span="md:col-span-2">
                <div class="flex flex-wrap gap-4 justify-around items-center h-full">
                    <div v-for="c in colors" :key="c.name" class="text-center group cursor-pointer">
                        <div class="w-10 h-10 rounded-full border-4 border-slate-800 shadow-sm mx-auto transition-transform group-hover:scale-110"
                            :class="c.color"></div>
                        <p class="font-bold text-xs mt-1 text-slate-600">{{ c.name }}</p>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="dir" class="items-center justify-center relative p-1">
                <h3 class="text-lg font-black text-blue-800 absolute top-3 left-4 z-10">🧭 Arah</h3>
                <div class="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full pt-8">
                    <div></div>
                    <div class="flex flex-col items-center justify-center"><span
                            class="text-lg font-black text-slate-700">北</span><span
                            class="text-[9px] font-bold text-blue-600">KITA</span></div>
                    <div></div>
                    <div class="flex flex-col items-center justify-center"><span
                            class="text-lg font-black text-slate-700">西</span><span
                            class="text-[9px] font-bold text-blue-600">NISHI</span></div>
                    <div class="flex items-center justify-center">
                        <div class="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <div class="flex flex-col items-center justify-center"><span
                            class="text-lg font-black text-slate-700">東</span><span
                            class="text-[9px] font-bold text-blue-600">HIGASHI</span></div>
                    <div></div>
                    <div class="flex flex-col items-center justify-center"><span
                            class="text-lg font-black text-slate-700">南</span><span
                            class="text-[9px] font-bold text-blue-600">MINAMI</span></div>
                    <div></div>
                </div>
            </BentoCard>

            <BentoCard theme="family" title="Keluarga (Kazoku)" icon="🏠" subTitle="Saya vs Orang"
                col-span="md:col-span-2">
                <div class="grid grid-cols-2 gap-4 h-full items-center mt-2">
                    <div class="bg-white p-3 rounded-xl border-2 border-pink-100 h-full flex flex-col justify-center">
                        <p
                            class="text-[10px] font-bold text-slate-400 uppercase mb-2 text-center tracking-widest border-b border-pink-50 pb-1">
                            Saya</p>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between"><span class="font-bold text-slate-700">Chichi</span> <span
                                    class="text-xs text-slate-400">Ayah</span></div>
                            <div class="flex justify-between"><span class="font-bold text-slate-700">Haha</span> <span
                                    class="text-xs text-slate-400">Ibu</span></div>
                            <div class="flex justify-between"><span class="font-bold text-slate-700">Ani</span> <span
                                    class="text-xs text-slate-400">Kakak</span></div>
                        </div>
                    </div>
                    <div class="bg-white p-3 rounded-xl border-2 border-pink-100 h-full flex flex-col justify-center">
                        <p
                            class="text-[10px] font-bold text-slate-400 uppercase mb-2 text-center tracking-widest border-b border-pink-50 pb-1">
                            Orang</p>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between"><span class="font-bold text-pink-600">Otousan</span> <span
                                    class="text-xs text-slate-400">Ayah</span></div>
                            <div class="flex justify-between"><span class="font-bold text-pink-600">Okaasan</span> <span
                                    class="text-xs text-slate-400">Ibu</span></div>
                            <div class="flex justify-between"><span class="font-bold text-pink-600">Oniisan</span> <span
                                    class="text-xs text-slate-400">Kakak</span></div>
                        </div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="nature" title="Alam" icon="🌳">
                <div class="grid grid-cols-2 gap-2 mt-auto">
                    <div v-for="n in nature" :key="n.romaji"
                        class="bg-white p-2 rounded-lg border border-green-200 text-center flex flex-col justify-center h-full">
                        <div class="text-xl leading-none mb-1">{{ n.kanji }}</div>
                        <div class="text-[9px] font-bold text-green-700 uppercase leading-none">{{ n.romaji }}</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="month" title="Nama Bulan (Tsuki)" icon="📅" subTitle="Angka + Gatsu"
                col-span="md:col-span-2">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    <div v-for="m in months" :key="m.num"
                        class="bg-white px-2 py-1 rounded-lg border border-purple-100 flex justify-between items-center">
                        <span class="font-bold text-slate-700 text-sm">{{ m.num }}</span>
                        <span class="text-[10px] font-bold" :class="m.warn ? 'text-red-500' : 'text-purple-600'">{{
                            m.romaji
                            }}</span>
                    </div>
                </div>
            </BentoCard>

        </div>
    </div>
</template>