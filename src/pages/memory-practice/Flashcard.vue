<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import FlashCard from '@/components/common/card/FlashCard.vue';
import { HiraganaDeck, VocabDeck, PhraseDeck } from '@/data/flashcard';

// --- DATABASE DECK ---
const decks: any = {
    hiragana: HiraganaDeck,
    vocab: VocabDeck,
    phrase: PhraseDeck
};

// --- STATE ---
const currentDeckName = ref('hiragana');
const currentIndex = ref(0);
const isFlipped = ref(false);

// --- COMPUTED ---
const activeDeck = computed(() => decks[currentDeckName.value]);
const currentCard = computed(() => activeDeck.value[currentIndex.value]);

// --- ACTIONS ---
const switchDeck = (deckKey: string) => {
    currentDeckName.value = deckKey;
    currentIndex.value = 0; 
    isFlipped.value = false; 
};

const toggleFlip = () => {
    isFlipped.value = !isFlipped.value;
};

const nextCard = () => {
    isFlipped.value = false;
    setTimeout(() => {
        if (currentIndex.value < activeDeck.value.length - 1) {
            currentIndex.value++;
        } else {
            currentIndex.value = 0;
        }
    }, 150);
};

const prevCard = () => {
    isFlipped.value = false;
    setTimeout(() => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        } else {
            currentIndex.value = activeDeck.value.length - 1;
        }
    }, 150);
};

// --- KEYBOARD SHORTCUTS ---
const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
    }
    if (e.code === 'ArrowRight') nextCard();
    if (e.code === 'ArrowLeft') prevCard();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
    <div class="max-w-xl mx-auto px-4 pb-12 flex flex-col items-center">

        <div
            class="flex gap-2 mb-6 bg-white/50 p-2 rounded-2xl border-2 border-white/50 overflow-x-auto w-full justify-center">
            <button @click="switchDeck('hiragana')" class="deck-btn"
                :class="{ 'active': currentDeckName === 'hiragana' }">
                Hiragana
            </button>
            <button @click="switchDeck('vocab')" class="deck-btn" :class="{ 'active': currentDeckName === 'vocab' }">
                Vocab
            </button>
            <button @click="switchDeck('phrase')" class="deck-btn" :class="{ 'active': currentDeckName === 'phrase' }">
                Frasa
            </button>
        </div>

        <div class="w-full flex justify-between items-end mb-6 px-4 max-w-[400px]">
            <span class="font-black text-indigo-dark text-xl">
                {{ currentIndex + 1 }} / {{ activeDeck.length }}
            </span>
            <div class="flex gap-1">
                <span v-for="(_, i) in activeDeck" :key="i" class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="i === currentIndex ? 'bg-indigo-dark w-4' : 'bg-indigo-accent/30'"></span>
            </div>
        </div>

        <FlashCard :item="currentCard" :is-flipped="isFlipped" @toggle="toggleFlip" />

        <div class="grid grid-cols-3 gap-4 w-full max-w-[400px] mt-10">
            <button @click="prevCard" class="ctrl-btn group">
                <span class="group-hover:-translate-x-1 block transition-transform">← Prev</span>
            </button>

            <button @click="toggleFlip" class="ctrl-btn primary text-xl shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                ↺ FLIP
            </button>

            <button @click="nextCard" class="ctrl-btn group">
                <span class="group-hover:translate-x-1 block transition-transform">Next →</span>
            </button>
        </div>

        <p class="mt-8 text-xs text-slate-400 font-bold text-center opacity-60">
            Tips: Gunakan Spasi (Flip) dan Panah Kanan/Kiri (Navigasi)
        </p>

    </div>
</template>

<style scoped>
.deck-btn {
    padding: 8px 16px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.85rem;
    border: 2px solid transparent;
    color: var(--color-indigo-dark);
    white-space: nowrap;
    transition: all 0.2s;
    cursor: pointer;
}

.deck-btn.active {
    background: var(--color-indigo-dark);
    color: white;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.deck-btn:not(.active):hover {
    background: rgba(255, 255, 255, 0.5);
    border-color: var(--color-indigo-dark);
}

/* STYLE KONTROL */
.ctrl-btn {
    background: white;
    border: 3px solid var(--color-indigo-dark);
    border-radius: 16px;
    padding: 12px;
    font-weight: 800;
    color: var(--color-indigo-dark);
    box-shadow: 4px 4px 0px var(--color-indigo-dark);
    transition: all 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ctrl-btn:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-indigo-dark);
}

.ctrl-btn.primary {
    background: #facc15;
    color: var(--color-indigo-dark);
}
</style>