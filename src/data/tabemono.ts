import type { MenuItem } from "@/types/Tabemono";

// ==========================================
// 1. FOOD (MAKANAN / TABEMONO)
// ==========================================
export const FoodItems: MenuItem[] = [
  { icon: "🍚", kanji: "ご飯", romaji: "Gohan", meaning: "Nasi" },
  { icon: "🍞", kanji: "パン", romaji: "Pan", meaning: "Roti" },
  { icon: "🍖", kanji: "肉", romaji: "Niku", meaning: "Daging" },
  { icon: "🐟", kanji: "魚", romaji: "Sakana", meaning: "Ikan" },
  { icon: "🥚", kanji: "卵", romaji: "Tamago", meaning: "Telur" },
  { icon: "🥗", kanji: "野菜", romaji: "Yasai", meaning: "Sayuran" },
  { icon: "🍎", kanji: "果物", romaji: "Kudamono", meaning: "Buah" },
  { icon: "🍱", kanji: "お弁当", romaji: "Obentou", meaning: "Kotak Bekal" },
  { icon: "🍜", kanji: "ラーメン", romaji: "Raamen", meaning: "Mie Ramen" },
  { icon: "🍣", kanji: "寿司", romaji: "Sushi", meaning: "Sushi" },
  { icon: "🍤", kanji: "天ぷら", romaji: "Tenpura", meaning: "Tempura" },
  { icon: "🍛", kanji: "カレー", romaji: "Karee", meaning: "Kari" },
];

// ==========================================
// 2. DRINK (MINUMAN / NOMIMONO)
// ==========================================
export const DrinkItems: MenuItem[] = [
  { icon: "💧", kanji: "水", romaji: "Mizu", meaning: "Air Putih" },
  { icon: "🍵", kanji: "お茶", romaji: "Ocha", meaning: "Teh Jepang (Hijau)" },
  { icon: "🫖", kanji: "紅茶", romaji: "Koucha", meaning: "Teh Hitam" },
  { icon: "☕", kanji: "コーヒー", romaji: "Koohii", meaning: "Kopi" },
  { icon: "🥛", kanji: "牛乳", romaji: "Gyuunyuu", meaning: "Susu Sapi" },
  { icon: "🧃", kanji: "ジュース", romaji: "Juusu", meaning: "Jus" },
  { icon: "🍺", kanji: "ビール", romaji: "Biiru", meaning: "Bir" },
  {
    icon: "🍶",
    kanji: "お酒",
    romaji: "Osake",
    meaning: "Minuman Beralkohol (Sake)",
  },
];

// ==========================================
// 3. TASTE (RASA / AJI)
// ==========================================
export const TasteItems: MenuItem[] = [
  { icon: "😋", kanji: "美味しい", romaji: "Oishii", meaning: "Enak / Lezat" },
  { icon: "🤢", kanji: "不味い", romaji: "Mazui", meaning: "Tidak Enak" },
  { icon: "🍰", kanji: "甘い", romaji: "Amai", meaning: "Manis" },
  { icon: "🌶️", kanji: "辛い", romaji: "Karai", meaning: "Pedas" },
  { icon: "🍋", kanji: "酸っぱい", romaji: "Suppai", meaning: "Asam" },
  { icon: "☕", kanji: "苦い", romaji: "Nigai", meaning: "Pahit" },
  { icon: "🧂", kanji: "塩辛い", romaji: "Shiokarai", meaning: "Asin" },
  {
    icon: "🥶",
    kanji: "冷たい",
    romaji: "Tsumetai",
    meaning: "Dingin (Benda/Minuman)",
  },
  {
    icon: "🥵",
    kanji: "熱い",
    romaji: "Atsui",
    meaning: "Panas (Benda/Minuman)",
  },
];
