<script setup lang="ts">
import ChatBubble from '@/components/common/card/ChatBubble.vue';
import { DailyGreetings, HomeGreetings, GratitudeGreetings, IntroGreetings, PartingGreetings } from '@/data/aisatsu';
</script>

<template>
    <div class="max-w-5xl mx-auto px-4">
        <div class="space-y-6 mb-7">
            <div class="text-center">
                <span
                    class="uppercase bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-black border-2 border-orange-300 shadow-sm text-sm">
                    {{ $t('common.dictionary.aisatsu.daily_greetings') }}
                </span>
            </div>
            <ChatBubble v-for="(chat, i) in DailyGreetings" :key="i" :item="chat" />
        </div>

        <div class="space-y-6 mb-7">
            <div class="text-center">
                <span
                    class="uppercase bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-black border-2 border-orange-300 shadow-sm text-sm">
                    {{ $t('common.dictionary.aisatsu.at_home') }}
                </span>
            </div>
            <ChatBubble v-for="(chat, i) in HomeGreetings" :key="i" :item="chat" />
        </div>

        <div class="space-y-6 mb-7">
            <div class="text-center">
                <span
                    class="uppercase bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-black border-2 border-orange-300 shadow-sm text-sm">
                    {{ $t('common.dictionary.aisatsu.thanks') }}
                </span>
            </div>
            <ChatBubble v-for="(chat, i) in GratitudeGreetings" :key="i" :item="chat" />
        </div>

        <div class="space-y-6 mb-7">
            <div class="text-center">
                <span
                    class="uppercase bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-black border-2 border-orange-300 shadow-sm text-sm">
                    {{ $t('common.dictionary.aisatsu.introduction') }}
                </span>
            </div>
            <ChatBubble v-for="(chat, i) in IntroGreetings" :key="i" :item="chat" />
        </div>

        <div class="space-y-6 mb-7">
            <div class="text-center">
                <span
                    class="uppercase bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-black border-2 border-orange-300 shadow-sm text-sm">
                    {{ $t('common.dictionary.aisatsu.farewell') }}
                </span>
            </div>
            <ChatBubble v-for="(chat, i) in PartingGreetings" :key="i" :item="chat" />
        </div>

        <div class="bg-white/80 border-4 border-dashed border-sky-300 rounded-3xl p-6 text-center mt-4">
            <p class="font-bold text-slate-500">
                💡 Tips: Orang Jepang sering membungkuk (ojigi) saat mengucapkan salam ini sebagai tanda hormat.
            </p>
        </div>
    </div>
</template>