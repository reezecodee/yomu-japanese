import { NumberItem } from "@/types";

// 1. Angka Dasar (1-10)
export const BasicNumbers: NumberItem[] = [
  { num: "1", kanji: "一", furigana: "いち", romaji: "Ichi" },
  { num: "2", kanji: "二", furigana: "に", romaji: "Ni" },
  { num: "3", kanji: "三", furigana: "さん", romaji: "San" },
  { num: "4", kanji: "四", furigana: "よん / し", romaji: "Yon / Shi" },
  { num: "5", kanji: "五", furigana: "ご", romaji: "Go" },
  { num: "6", kanji: "六", furigana: "ろく", romaji: "Roku" },
  { num: "7", kanji: "七", furigana: "なな / しち", romaji: "Nana / Shichi" },
  { num: "8", kanji: "八", furigana: "はち", romaji: "Hachi" },
  { num: "9", kanji: "九", furigana: "きゅう", romaji: "Kyuu" },
  { num: "10", kanji: "十", furigana: "じゅう", romaji: "Juu" },
];

// 2. Ratusan (Hyaku)
export const Hundreds: NumberItem[] = [
  { num: "100", kanji: "百", furigana: "ひゃく", romaji: "Hyaku" },
  { num: "200", kanji: "二百", furigana: "に.ひゃく", romaji: "Ni-hyaku" },
  {
    num: "300",
    kanji: "三百",
    furigana: "さん.びゃく",
    romaji: "San-byaku",
    isException: true,
  },
  { num: "400", kanji: "四百", furigana: "よん.ひゃく", romaji: "Yon-hyaku" },
  { num: "500", kanji: "五百", furigana: "ご.ひゃく", romaji: "Go-hyaku" },
  {
    num: "600",
    kanji: "六百",
    furigana: "ろっ.ぴゃく",
    romaji: "Roppyaku",
    isException: true,
  },
  { num: "700", kanji: "七百", furigana: "なな.ひゃく", romaji: "Nana-hyaku" },
  {
    num: "800",
    kanji: "八百",
    furigana: "はっ.ぴゃく",
    romaji: "Happyaku",
    isException: true,
  },
  {
    num: "900",
    kanji: "九百",
    furigana: "きゅう.ひゃく",
    romaji: "Kyuu-hyaku",
  },
];

// 3. Ribuan (Sen)
export const Thousands: NumberItem[] = [
  {
    num: "1,000",
    kanji: "千",
    furigana: "せん / いっ.せん",
    romaji: "Sen / Issen",
  },
  {
    num: "3,000",
    kanji: "三千",
    furigana: "さん.ぜん",
    romaji: "San-zen",
    isException: true,
  },
  {
    num: "8,000",
    kanji: "八千",
    furigana: "はっ.せん",
    romaji: "Hassen",
    isException: true,
  },
];

// 4. Angka Raksasa (Man & Oku)
export const BigNumbers: NumberItem[] = [
  {
    num: "10,000",
    kanji: "万",
    furigana: "いち.まん",
    romaji: "Ichi-man",
    note: 'Bukan "Juu-sen"',
  },
  {
    num: "1,000,000",
    kanji: "百万",
    furigana: "ひゃく.まん",
    romaji: "Hyaku-man",
    note: "100 x 10,000",
  },
  {
    num: "100,000,000",
    kanji: "億",
    furigana: "いち.おく",
    romaji: "Ichi-oku",
    note: "Level baru (100 Juta)",
  },
];
