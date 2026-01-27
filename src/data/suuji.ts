import { NumberItem } from "@/types/Suuji";

// 1. Angka Dasar (1-10)
export const BasicNumbers: NumberItem[] = [
  { num: "1", kanji: "一", romaji: "Ichi" },
  { num: "2", kanji: "二", romaji: "Ni" },
  { num: "3", kanji: "三", romaji: "San" },
  { num: "4", kanji: "四", romaji: "Yon / Shi" },
  { num: "5", kanji: "五", romaji: "Go" },
  { num: "6", kanji: "六", romaji: "Roku" },
  { num: "7", kanji: "七", romaji: "Nana / Shichi" },
  { num: "8", kanji: "八", romaji: "Hachi" },
  { num: "9", kanji: "九", romaji: "Kyuu" },
  { num: "10", kanji: "十", romaji: "Juu" },
];

// 2. Ratusan (Hyaku) - Fokus ke pengecualian
export const Hundreds: NumberItem[] = [
  { num: "100", kanji: "百", romaji: "Hyaku" },
  { num: "200", kanji: "二百", romaji: "Ni-hyaku" },
  { num: "300", kanji: "三百", romaji: "San-byaku", isException: true }, // Pengecualian
  { num: "400", kanji: "四百", romaji: "Yon-hyaku" },
  { num: "500", kanji: "五百", romaji: "Go-hyaku" },
  { num: "600", kanji: "六百", romaji: "Roppyaku", isException: true }, // Pengecualian
  { num: "700", kanji: "七百", romaji: "Nana-hyaku" },
  { num: "800", kanji: "八百", romaji: "Happyaku", isException: true }, // Pengecualian
  { num: "900", kanji: "九百", romaji: "Kyuu-hyaku" },
];

// 3. Ribuan (Sen)
export const Thousands: NumberItem[] = [
  { num: "1,000", kanji: "千", romaji: "Sen / Issen" },
  { num: "3,000", kanji: "三千", romaji: "San-zen", isException: true }, // Pengecualian
  { num: "8,000", kanji: "八千", romaji: "Hassen", isException: true }, // Pengecualian
];

// 4. Angka Raksasa (Man & Oku)
export const BigNumbers: NumberItem[] = [
  { num: "10,000", kanji: "万", romaji: "Ichi-man", note: 'Bukan "Juu-sen"' },
  {
    num: "1,000,000",
    kanji: "百万",
    romaji: "Hyaku-man",
    note: "100 x 10,000",
  },
  {
    num: "100,000,000",
    kanji: "億",
    romaji: "Ichi-oku",
    note: "Level baru (100 Juta)",
  },
];
