import type { Shokubutsu } from "@/types/Shokubutsu";

// 1. Pohon & Kayu (Ki)
export const Trees: Shokubutsu[] = [
  { icon: "🌳", kanji: "木", romaji: "Ki", meaning: "Pohon" },
  { icon: "🌸", kanji: "桜", romaji: "Sakura", meaning: "Bunga Sakura" },
  { icon: "🎍", kanji: "竹", romaji: "Take", meaning: "Bambu" },
  { icon: "🌲", kanji: "松", romaji: "Matsu", meaning: "Pohon Pinus" },
  { icon: "🌴", kanji: "椰子", romaji: "Yashi", meaning: "Kelapa/Palem" },
  {
    icon: "🍁",
    kanji: "紅葉",
    romaji: "Momiji",
    meaning: "Maple (Musim Gugur)",
  },
  { icon: "🪵", kanji: "森", romaji: "Mori", meaning: "Hutan Lebat" },
  { icon: "🏞️", kanji: "林", romaji: "Hayashi", meaning: "Hutan Kecil/Rimba" },
];

// 2. Bunga (Hana)
export const Flowers: Shokubutsu[] = [
  {
    icon: "🌻",
    kanji: "向日葵",
    romaji: "Himawari",
    meaning: "Bunga Matahari",
  },
  { icon: "🌹", kanji: "薔薇", romaji: "Bara", meaning: "Mawar" },
  { icon: "🌷", kanji: "チューリップ", romaji: "Chuurippu", meaning: "Tulip" },
  {
    icon: "🌺",
    kanji: "ハイビスカス",
    romaji: "Haibisukasu",
    meaning: "Kembang Sepatu",
  },
  { icon: "🪷", kanji: "蓮", romaji: "Hasu", meaning: "Teratai" },
  { icon: "🌼", kanji: "菊", romaji: "Kiku", meaning: "Krisan" },
  { icon: "💐", kanji: "花束", romaji: "Hanataba", meaning: "Buket Bunga" },
  { icon: "💮", kanji: "花", romaji: "Hana", meaning: "Bunga (Umum)" },
];

// 3. Bagian Tanaman & Alam (Shizen)
export const NatureParts: Shokubutsu[] = [
  { icon: "🌿", kanji: "葉", romaji: "Ha", meaning: "Daun" },
  { icon: "🌱", kanji: "草", romaji: "Kusa", meaning: "Rumput" },
  { icon: "🫚", kanji: "根", romaji: "Ne", meaning: "Akar" },
  { icon: "🎋", kanji: "枝", romaji: "Eda", meaning: "Ranting/Cabang" },
  { icon: "🪵", kanji: "幹", romaji: "Miki", meaning: "Batang Pohon" },
  { icon: "🌰", kanji: "種", romaji: "Tane", meaning: "Biji" },
  { icon: "🪴", kanji: "植木鉢", romaji: "Uekibachi", meaning: "Pot Tanaman" },
  { icon: "🌾", kanji: "稲", romaji: "Ine", meaning: "Padi" },
];
