interface CharData {
  char: string;
  romaji: string;
  type?: "empty";
  desc?: string;
}

// --- 1. DATA SEION (Huruf Dasar) ---
export const seion: CharData[] = [
  // A - O
  { char: "あ", romaji: "a", desc: "Arigatou (Terima Kasih)" },
  { char: "い", romaji: "i", desc: "Inu (Anjing)" },
  { char: "う", romaji: "u", desc: "Umi (Laut)" },
  { char: "え", romaji: "e", desc: "Eki (Stasiun)" },
  { char: "お", romaji: "o", desc: "Onigiri (Nasi Kepal)" },

  // Ka - Ko
  { char: "か", romaji: "ka", desc: "Kasa (Payung)" },
  { char: "き", romaji: "ki", desc: "Ki (Pohon)" },
  { char: "く", romaji: "ku", desc: "Kuma (Beruang)" },
  { char: "け", romaji: "ke", desc: "Keshigomu (Penghapus)" },
  { char: "こ", romaji: "ko", desc: "Kodomo (Anak)" },

  // Sa - So
  { char: "さ", romaji: "sa", desc: "Sakura (Bunga Sakura)" },
  { char: "し", romaji: "shi", desc: "Shimbun (Koran)" },
  { char: "す", romaji: "su", desc: "Sushi (Sushi)" },
  { char: "せ", romaji: "se", desc: "Sensei (Guru)" },
  { char: "そ", romaji: "so", desc: "Sora (Langit)" },

  // Ta - To
  { char: "た", romaji: "ta", desc: "Tamago (Telur)" },
  { char: "ち", romaji: "chi", desc: "Chizu (Peta)" },
  { char: "つ", romaji: "tsu", desc: "Tsukue (Meja)" },
  { char: "て", romaji: "te", desc: "Tegami (Surat)" },
  { char: "と", romaji: "to", desc: "Tokei (Jam)" },

  // Na - No
  { char: "な", romaji: "na", desc: "Natsu (Musim Panas)" },
  { char: "に", romaji: "ni", desc: "Niku (Daging)" },
  { char: "ぬ", romaji: "nu", desc: "Nuno (Kain)" },
  { char: "ね", romaji: "ne", desc: "Neko (Kucing)" },
  { char: "の", romaji: "no", desc: "Nomimono (Minuman)" },

  // Ha - Ho
  { char: "は", romaji: "ha", desc: "Hana (Bunga)" },
  { char: "ひ", romaji: "hi", desc: "Hikouki (Pesawat)" },
  { char: "ふ", romaji: "fu", desc: "Fune (Kapal)" },
  { char: "へ", romaji: "he", desc: "Heya (Kamar)" },
  { char: "ほ", romaji: "ho", desc: "Hoshi (Bintang)" },

  // Ma - Mo
  { char: "ま", romaji: "ma", desc: "Mado (Jendela)" },
  { char: "み", romaji: "mi", desc: "Mizu (Air)" },
  { char: "む", romaji: "mu", desc: "Mushi (Serangga)" },
  { char: "め", romaji: "me", desc: "Megane (Kacamata)" },
  { char: "も", romaji: "mo", desc: "Momo (Persik)" },

  // Ya - Yo
  { char: "や", romaji: "ya", desc: "Yama (Gunung)" },
  { char: "", romaji: "", type: "empty" },
  { char: "ゆ", romaji: "yu", desc: "Yuki (Salju)" },
  { char: "", romaji: "", type: "empty" },
  { char: "よ", romaji: "yo", desc: "Yoru (Malam)" },

  // Ra - Ro
  { char: "ら", romaji: "ra", desc: "Raion (Singa)" },
  { char: "り", romaji: "ri", desc: "Ringo (Apel)" },
  { char: "る", romaji: "ru", desc: "Rusuban (Jaga Rumah)" },
  { char: "れ", romaji: "re", desc: "Reizouko (Kulkas)" },
  { char: "ろ", romaji: "ro", desc: "Rousoku (Lilin)" },

  // Wa - Wo - N
  { char: "わ", romaji: "wa", desc: "Watashi (Saya)" },
  { char: "", romaji: "", type: "empty" },
  { char: "", romaji: "", type: "empty" },
  { char: "", romaji: "", type: "empty" },
  { char: "を", romaji: "wo", desc: "Partikel Objek" },

  // N
  { char: "ん", romaji: "n", desc: "Hon (Buku)" },
];

// --- 2. DATA DAKUTEN  ---
export const dakuten: CharData[] = [
  // Ga - Go
  { char: "が", romaji: "ga", desc: "Gakusei (Murid)" },
  { char: "ぎ", romaji: "gi", desc: "Ginko (Bank)" },
  { char: "ぐ", romaji: "gu", desc: "Gun (Tentara)" },
  { char: "げ", romaji: "ge", desc: "Genki (Sehat)" },
  { char: "ご", romaji: "go", desc: "Gohan (Nasi)" },

  // Za - Zo
  { char: "ざ", romaji: "za", desc: "Zasshi (Majalah)" },
  { char: "じ", romaji: "ji", desc: "Jisho (Kamus)" },
  { char: "ず", romaji: "zu", desc: "Zubon (Celana)" },
  { char: "ぜ", romaji: "ze", desc: "Zero (Nol)" },
  { char: "ぞ", romaji: "zo", desc: "Zou (Gajah)" },

  // Da - Do
  { char: "だ", romaji: "da", desc: "Daigaku (Universitas)" },
  { char: "ぢ", romaji: "ji", desc: "Jarang Dipakai" },
  { char: "づ", romaji: "zu", desc: "Jarang Dipakai" },
  { char: "で", romaji: "de", desc: "Denwa (Telepon)" },
  { char: "ど", romaji: "do", desc: "Doa (Pintu)" },

  // Ba - Bo
  { char: "ば", romaji: "ba", desc: "Banana (Pisang)" },
  { char: "び", romaji: "bi", desc: "Byouin (Rumah Sakit)" },
  { char: "ぶ", romaji: "bu", desc: "Buta (Babi)" },
  { char: "べ", romaji: "be", desc: "Benkyou (Belajar)" },
  { char: "ぼ", romaji: "bo", desc: "Boushi (Topi)" },

  // Pa - Po (Handakuten)
  { char: "ぱ", romaji: "pa", desc: "Pan (Roti)" },
  { char: "ぴ", romaji: "pi", desc: "Piano (Piano)" },
  { char: "ぷ", romaji: "pu", desc: "Puuru (Kolam Renang)" },
  { char: "ぺ", romaji: "pe", desc: "Pen (Pena)" },
  { char: "ぽ", romaji: "po", desc: "Poketto (Saku)" },
];

// --- 3. DATA YOON  ---
export const yoon: CharData[] = [
  { char: "きゃ", romaji: "kya", desc: "Kyaku (Tamu)" },
  { char: "きゅ", romaji: "kyu", desc: "Kyuuri (Timun)" },
  { char: "きょ", romaji: "kyo", desc: "Kyoushitsu (Kelas)" },

  { char: "しゃ", romaji: "sha", desc: "Shashin (Foto)" },
  { char: "しゅ", romaji: "shu", desc: "Shumi (Hobi)" },
  { char: "しょ", romaji: "sho", desc: "Shokudou (Kantin)" },

  { char: "ちゃ", romaji: "cha", desc: "Chairo (Coklat)" },
  { char: "ちゅ", romaji: "chu", desc: "Chuugoku (China)" },
  { char: "ちょ", romaji: "cho", desc: "Chou (Kupu-kupu)" },

  { char: "にゃ", romaji: "nya", desc: "Nyanko (Kucing)" },
  { char: "にゅ", romaji: "nyu", desc: "Nyuumon (Masuk)" },
  { char: "にょ", romaji: "nyo", desc: "Nyoubou (Istri)" },

  { char: "ひゃ", romaji: "hya", desc: "Hyaku (Seratus)" },
  { char: "ひゅ", romaji: "hyu", desc: "Hyuu (Suara Angin)" },
  { char: "ひょ", romaji: "hyo", desc: "Hyou (Macan Tutul)" },

  { char: "みゃ", romaji: "mya", desc: "Myaku (Denyut Nadi)" },
  { char: "みゅ", romaji: "myu", desc: "Myuujikku (Musik)" },
  { char: "みょ", romaji: "myo", desc: "Myouji (Nama Marga)" },

  { char: "りゃ", romaji: "rya", desc: "Ryaku (Singkatan)" },
  { char: "りゅ", romaji: "ryu", desc: "Ryuu (Naga)" },
  { char: "りょ", romaji: "ryo", desc: "Ryokou (Traveling)" },

  { char: "ぎゃ", romaji: "gya", desc: "Gyaku (Kebalikan)" },
  { char: "ぎゅ", romaji: "gyu", desc: "Gyuunyuu (Susu Sapi)" },
  { char: "ぎょ", romaji: "gyo", desc: "Kingyo (Ikan Mas)" },

  { char: "じゃ", romaji: "ja", desc: "Jama (Gangguan)" },
  { char: "じゅ", romaji: "ju", desc: "Juudo (Judo)" },
  { char: "じょ", romaji: "jo", desc: "Jouzu (Pintar/Jago)" },

  { char: "びゃ", romaji: "bya", desc: "Sambyaku (Tiga Ratus)" },
  { char: "びゅ", romaji: "byu", desc: "Intabyuu (Wawancara)" },
  { char: "びょ", romaji: "byo", desc: "Byouin (Rumah Sakit)" },

  { char: "ぴゃ", romaji: "pya", desc: "Roppyaku (Enam Ratus)" },
  { char: "ぴゅ", romaji: "pyu", desc: "Konpyuuta (Komputer)" },
  { char: "ぴょ", romaji: "pyo", desc: "Happyou (Presentasi)" },
];
