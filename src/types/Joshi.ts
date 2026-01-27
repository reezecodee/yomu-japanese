export interface JoshiItem {
  kana: string;
  romaji: string;
  label: string;
  function: string;
  example: {
    jp: string;
    ro: string;
    id: string;
    highlight: string;
  };
}

export interface JoshiExtraItem {
  kana: string;
  romaji: string;
  desc: string;
  example: string;
}
