import type { WordItem } from "@/types";

// 1. Transportasi Darat (Riku)
export const LandTransport: WordItem[] = [
  { icon: "🚗", kanji: "車", romaji: "Kuruma", meaning: "Mobil" },
  { icon: "🚃", kanji: "電車", romaji: "Densha", meaning: "Kereta" },
  { icon: "🚲", kanji: "自転車", romaji: "Jitensha", meaning: "Sepeda" },
  { icon: "🚌", kanji: "バス", romaji: "Basu", meaning: "Bus" },
  { icon: "🚕", kanji: "タクシー", romaji: "Takushii", meaning: "Taksi" },
  { icon: "🏍️", kanji: "バイク", romaji: "Baiku", meaning: "Motor" },
  {
    icon: "🚄",
    kanji: "新幹線",
    romaji: "Shinkansen",
    meaning: "Kereta Peluru",
  },
  { icon: "🚇", kanji: "地下鉄", romaji: "Chikatetsu", meaning: "Subway" },
  {
    icon: "🚒",
    kanji: "消防車",
    romaji: "Shoubousha",
    meaning: "Pemadam Kebakaran",
  },
  { icon: "🚑", kanji: "救急車", romaji: "Kyuukyuusha", meaning: "Ambulans" },
  { icon: "🚓", kanji: "パトカー", romaji: "Patokaa", meaning: "Mobil Polisi" },
  { icon: "🚚", kanji: "トラック", romaji: "Torakku", meaning: "Truk" },
];

// 2. Transportasi Udara (Sora)
export const AirTransport: WordItem[] = [
  { icon: "✈️", kanji: "飛行機", romaji: "Hikouki", meaning: "Pesawat" },
  {
    icon: "🚁",
    kanji: "ヘリコプター",
    romaji: "Herikoputaa",
    meaning: "Helikopter",
  },
  { icon: "🚀", kanji: "ロケット", romaji: "Roketto", meaning: "Roket" },
  { icon: "🎈", kanji: "気球", romaji: "Kikyuu", meaning: "Balon Udara" },
  {
    icon: "🛩️",
    kanji: "ジェット機",
    romaji: "Jettoki",
    meaning: "Pesawat Jet",
  },
];

// 3. Transportasi Laut (Umi)
export const SeaTransport: WordItem[] = [
  { icon: "🚢", kanji: "船", romaji: "Fune", meaning: "Kapal Laut" },
  { icon: "⛵", kanji: "ヨット", romaji: "Yotto", meaning: "Perahu Layar" },
  { icon: "🚤", kanji: "ボート", romaji: "Booto", meaning: "Perahu Motor" },
  { icon: "⛴️", kanji: "フェリー", romaji: "Ferii", meaning: "Kapal Feri" },
  { icon: "🛥️", kanji: "潜水艦", romaji: "Sensuikan", meaning: "Kapal Selam" },
];
