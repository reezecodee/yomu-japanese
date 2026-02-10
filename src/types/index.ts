// ==========================================
// 1. CORE VOCABULARY (Kosa Kata Umum)
// ==========================================

export interface WordItem {
  icon: string;
  kanji: string;
  romaji: string;
  furigana: string;
  meaning: string;
}

export interface ShigotoItem {
  icon: string;
  kanji: string;
  romaji: string;
  furigana: string;
  meaning: string;
  category: string;
  note?: string;
}

// ==========================================
// 2. SCRIPTS & KANJI (Huruf & Sistem Tulis)
// ==========================================

export interface CharData {
  char: string;
  romaji: string;
  word: string;
  wordRomaji: string;
  meaningId: string;
  meaningEn: string;
  type?: "empty";
}

export interface ExampleWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiData {
  char: string;
  level: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  examples: ExampleWord[];
}

// ==========================================
// 3. ADJECTIVES (Kata Sifat)
// ==========================================

export type AdjectiveGroup = "i" | "na";

export type AdjectiveDetail = {
  icon: string;
  word: string;
  kana: string;
  romaji: string;
  furigana: string;
  meaning: string;
  group: AdjectiveGroup;
};

export type AdjectivePair = {
  top: AdjectiveDetail;
  bottom: AdjectiveDetail;
};

// ==========================================
// 4. GRAMMAR & VERBS (Tata Bahasa & Kerja)
// ==========================================

export interface JoshiItem {
  kana: string;
  romaji: string;
  label: string;
  function: string;
  example: {
    jp: string;
    ro: string;
    id: string;
    highlight: string;
  };
}

export interface JoshiExtraItem {
  kana: string;
  romaji: string;
  desc: string;
  example_jp: string;
  example_ro: string;
  example_meaning: string;
}

export type VerbConjugation = {
  icon: string;
  rule: string;
  meaning: string;
  dictionary_form: string;
  furigana: string;
  romaji: string;
  masu_form: string;
  masu_furigana: string;
  masu_romaji: string;
};

export type GrammarBlockType =
  | "noun"
  | "verb"
  | "particle"
  | "adj"
  | "desu"
  | "text"
  | "highlight";

// ==========================================
// 5. NUMBERS (Angka)
// ==========================================

export interface NumberItem {
  num: string;
  kanji: string;
  romaji: string;
  furigana: string;
  isException?: boolean;
  note?: string;
}

// ==========================================
// 6. CONVERSATION (Percakapan & Salam)
// ==========================================

export type BubbleAlign = "left" | "right";

export interface AisatsuItem {
  kana: string;
  romaji: string;
  meaning: string;
  align: BubbleAlign;
  situation?: string;
}

// ==========================================
// 7. STUDY TOOLS (Flashcards)
// ==========================================

export type FlashcardType = "char" | "word" | "sentence";

export interface FlashcardItem {
  // front
  front: string;
  frontSub?: string;

  // back
  romaji: string;
  meaning: string;
  example?: string;

  // Meta Data
  tag: string;
  type?: FlashcardType;
}
