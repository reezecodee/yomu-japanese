export type FlashcardType = "char" | "word" | "sentence";

export interface FlashcardItem {
  // Sisi Depan
  front: string;
  frontSub?: string;

  // Sisi Belakang
  romaji: string;
  meaning: string;
  example?: string;

  // Meta Data
  tag: string;
  type?: FlashcardType;
}
