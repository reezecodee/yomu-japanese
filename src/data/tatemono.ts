import type { Tatemono } from "@/types/Tatemono";

// 1. Fasilitas Umum (Koukyou Shisetsu)
export const PublicBuildings: Tatemono[] = [
  { icon: "🏫", kanji: "学校", romaji: "Gakkou", meaning: "Sekolah" },
  { icon: "🏥", kanji: "病院", romaji: "Byouin", meaning: "Rumah Sakit" },
  { icon: "📮", kanji: "郵便局", romaji: "Yuubinkyoku", meaning: "Kantor Pos" },
  { icon: "📚", kanji: "図書館", romaji: "Toshokan", meaning: "Perpustakaan" },
  { icon: "🏦", kanji: "銀行", romaji: "Ginkou", meaning: "Bank" },
  { icon: "👮", kanji: "交番", romaji: "Kouban", meaning: "Pos Polisi" },
  { icon: "⛲", kanji: "公園", romaji: "Kouen", meaning: "Taman" },
  { icon: "🏢", kanji: "会社", romaji: "Kaisha", meaning: "Perusahaan" },
];

// 2. Toko & Komersial (Mise)
export const Shops: Tatemono[] = [
  { icon: "🛒", kanji: "スーパー", romaji: "Suupaa", meaning: "Supermarket" },
  { icon: "🏪", kanji: "コンビニ", romaji: "Konbini", meaning: "Minimarket" },
  {
    icon: "🏬",
    kanji: "デパート",
    romaji: "Depaato",
    meaning: "Mall/Dept Store",
  },
  { icon: "🍞", kanji: "パン屋", romaji: "Panya", meaning: "Toko Roti" },
  { icon: "💐", kanji: "花屋", romaji: "Hanaya", meaning: "Toko Bunga" },
  { icon: "🍽️", kanji: "レストラン", romaji: "Resutoran", meaning: "Restoran" },
  { icon: "☕", kanji: "喫茶店", romaji: "Kissaten", meaning: "Kafe" },
  { icon: "💊", kanji: "薬局", romaji: "Yakkyoku", meaning: "Apotek" },
];

// 3. Rumah & Bagiannya (Ie)
export const Housing: Tatemono[] = [
  { icon: "🏠", kanji: "家", romaji: "Ie", meaning: "Rumah" },
  { icon: "🏢", kanji: "アパート", romaji: "Apaato", meaning: "Apartemen" },
  { icon: "🚪", kanji: "部屋", romaji: "Heya", meaning: "Kamar" },
  { icon: "🍳", kanji: "台所", romaji: "Daidokoro", meaning: "Dapur" },
  { icon: "🚽", kanji: "トイレ", romaji: "Toire", meaning: "Toilet" },
  { icon: "🛁", kanji: "お風呂", romaji: "Ofuro", meaning: "Kamar Mandi" },
  { icon: "🌳", kanji: "庭", romaji: "Niwa", meaning: "Halaman" },
  { icon: "🪜", kanji: "階段", romaji: "Kaidan", meaning: "Tangga" },
];
