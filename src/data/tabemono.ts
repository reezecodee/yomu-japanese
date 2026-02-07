import type { WordItem } from "@/types";

// ==========================================
// 1. FOOD (MAKANAN / TABEMONO)
// ==========================================
export const FoodItems: WordItem[] = [
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
  { icon: "🍙", kanji: "おにぎり", romaji: "Onigiri", meaning: "Nasi Kepal" },
  { icon: "🥣", kanji: "味噌汁", romaji: "Misoshiru", meaning: "Sup Miso" },
  { icon: "🍲", kanji: "うどん", romaji: "Udon", meaning: "Mie Udon (Tebal)" },
  {
    icon: "🍜",
    kanji: "そば",
    romaji: "Soba",
    meaning: "Mie Soba (Gandum Hitam)",
  },
  { icon: "🥟", kanji: "餃子", romaji: "Gyouza", meaning: "Pangsit Goreng" },
  { icon: "🐙", kanji: "たこ焼き", romaji: "Takoyaki", meaning: "Bola Gurita" },
  {
    icon: "🥞",
    kanji: "お好み焼き",
    romaji: "Okonomiyaki",
    meaning: "Panekuk Jepang (Pizza Jepang)",
  },
  { icon: "🍢", kanji: "おでん", romaji: "Oden", meaning: "Rebusan" },
  {
    icon: "🍗",
    kanji: "唐揚げ",
    romaji: "Karaage",
    meaning: "Ayam Goreng Jepang",
  },
  {
    icon: "🐖",
    kanji: "豚カツ",
    romaji: "Tonkatsu",
    meaning: "Katsu Babi Goreng",
  },
  {
    icon: "🐂",
    kanji: "牛丼",
    romaji: "Gyudon",
    meaning: "Rice Bowl Daging Sapi",
  },
  {
    icon: "🐡",
    kanji: "刺身",
    romaji: "Sashimi",
    meaning: "Irisan Ikan Mentah",
  },
  {
    icon: "🥢",
    kanji: "納豆",
    romaji: "Nattou",
    meaning: "Fermentasi Kedelai",
  },
];

// ==========================================
// 2. DRINK (MINUMAN / NOMIMONO)
// ==========================================
export const DrinkItems: WordItem[] = [
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
  { icon: "🥤", kanji: "コーラ", romaji: "Koora", meaning: "Cola" },
  {
    icon: "🍂",
    kanji: "ウーロン茶",
    romaji: "Uuroncha",
    meaning: "Teh Oolong",
  },
  { icon: "♨️", kanji: "お湯", romaji: "Oyu", meaning: "Air Panas" },
  { icon: "🥛", kanji: "豆乳", romaji: "Tounyuu", meaning: "Susu Kedelai" },
  { icon: "🍾", kanji: "ワイン", romaji: "Wain", meaning: "Anggur (Wine)" },
  { icon: "🥃", kanji: "ウイスキー", romaji: "Uisukii", meaning: "Whisky" },
  {
    icon: "🍶",
    kanji: "甘酒",
    romaji: "Amazake",
    meaning: "Sake Manis (Non/Rendah Alkohol)",
  },
  { icon: "🧊", kanji: "氷", romaji: "Koori", meaning: "Es Batu" },
];

// ==========================================
// 3. TASTE (RASA / AJI)
// ==========================================
export const TasteItems: WordItem[] = [
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
