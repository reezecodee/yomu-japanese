import type { FlashcardItem } from "@/types/Flashcard";

// Deck 1: Hiragana (Tipe: CHAR)
export const HiraganaDeck: FlashcardItem[] = [
  {
    front: "あ",
    romaji: "a",
    meaning: "Huruf A",
    example: "Ari (Semut)",
    tag: "Hiragana",
    type: "char", 
  },
  {
    front: "い",
    romaji: "i",
    meaning: "Huruf I",
    example: "Inu (Anjing)",
    tag: "Hiragana",
    type: "char",
  },
];

// Deck 2: Vocabulary N5 (Tipe: WORD)
export const VocabDeck: FlashcardItem[] = [
  {
    front: "食べる",
    frontSub: "Taberu", 
    romaji: "Taberu",
    meaning: "Makan",
    example: "Gohan o tabemasu (Makan nasi)",
    tag: "Vocab",
    type: "word", 
  },
  {
    front: "先生",
    frontSub: "Sensei",
    romaji: "Sensei",
    meaning: "Guru",
    tag: "Vocab",
    type: "word", 
  },
];

// Deck 3: Phrases/Aisatsu (Tipe: SENTENCE)
export const PhraseDeck: FlashcardItem[] = [
  {
    front: "おはようございます",
    romaji: "Ohayou Gozaimasu",
    meaning: "Selamat Pagi",
    tag: "Salam",
    type: "sentence", 
  },
  {
    front: "お元気ですか？",
    romaji: "Ogenki desu ka?",
    meaning: "Apa kabar?",
    example: "Jawaban: Hai, genki desu.",
    tag: "Salam",
    type: "sentence",
  },
];
