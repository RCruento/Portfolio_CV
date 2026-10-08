import { en } from "./locales/en";
import { fr } from "./locales/fr";
import type { Locale } from "./routing";

export const dictionaries = {
  en,
  fr,
} as const;

export type TranslationDictionary = typeof en;

export function getDictionary(locale: Locale): TranslationDictionary {
  return dictionaries[locale] || dictionaries.en;
}
