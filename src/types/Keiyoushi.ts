export type AdjectiveGroup = 'i' | 'na';

export type AdjectiveDetail = {
  icon: string;
  word: string;
  kana: string;
  romaji: string;
  meaning: string;
  group: AdjectiveGroup;
};

export type AdjectivePair = {
  top: AdjectiveDetail;    // Kata Sifat Utama
  bottom: AdjectiveDetail; // Lawan Katanya
};