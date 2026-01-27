import type { Kudamono } from "@/types/Kudamono";

// 1. Buah Umum (Kudamono)
export const CommonFruits: Kudamono[] = [
  { icon: "🍎", kanji: "林檎", romaji: "Ringo", meaning: "Apel" },
  { icon: "🍌", kanji: "バナナ", romaji: "Banana", meaning: "Pisang" },
  { icon: "🍊", kanji: "蜜柑", romaji: "Mikan", meaning: "Jeruk" },
  { icon: "🍇", kanji: "葡萄", romaji: "Budou", meaning: "Anggur" },
  { icon: "🍍", kanji: "パイナップル", romaji: "Painappuru", meaning: "Nanas" },
  { icon: "🍈", kanji: "メロン", romaji: "Meron", meaning: "Melon" },
  { icon: "🍋", kanji: "レモン", romaji: "Remon", meaning: "Lemon" },
  { icon: "🥭", kanji: "マンゴー", romaji: "Mangoo", meaning: "Mangga" },
];

// 2. Buah Musiman & Berries (Kisetsu no Kudamono)
export const SeasonalFruits: Kudamono[] = [
  { icon: "🍓", kanji: "苺", romaji: "Ichigo", meaning: "Stroberi" },
  { icon: "🍑", kanji: "桃", romaji: "Momo", meaning: "Persik (Peach)" },
  { icon: "🍉", kanji: "西瓜", romaji: "Suika", meaning: "Semangka" },
  { icon: "🍒", kanji: "さくらんぼ", romaji: "Sakuranbo", meaning: "Ceri" },
  { icon: "🍐", kanji: "梨", romaji: "Nashi", meaning: "Pir Jepang" },
  { icon: "🥝", kanji: "キウイ", romaji: "Kiui", meaning: "Kiwi" },
  {
    icon: "🫐",
    kanji: "ブルーベリー",
    romaji: "Buruuberii",
    meaning: "Blueberry",
  },
  { icon: "🥥", kanji: "ココナッツ", romaji: "Kokonattsu", meaning: "Kelapa" },
];

// 3. Sayuran (Yasai) - Bonus Tab
export const Vegetables: Kudamono[] = [
  { icon: "🥕", kanji: "人参", romaji: "Ninjin", meaning: "Wortel" },
  { icon: "🥔", kanji: "ジャガイモ", romaji: "Jagaimo", meaning: "Kentang" },
  { icon: "🥒", kanji: "胡瓜", romaji: "Kyuuri", meaning: "Timun" },
  { icon: "🧅", kanji: "玉ねぎ", romaji: "Tamanegi", meaning: "Bawang Bombay" },
  { icon: "🍅", kanji: "トマト", romaji: "Tomato", meaning: "Tomat" },
  { icon: "🍆", kanji: "茄子", romaji: "Nasu", meaning: "Terong" },
  { icon: "🥬", kanji: "キャベツ", romaji: "Kyabetsu", meaning: "Kubis/Kol" },
  {
    icon: "🥦",
    kanji: "ブロッコリー",
    romaji: "Burokkorii",
    meaning: "Brokoli",
  },
];
