export const LANGS = ["ru", "kz", "en"] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "ru";

export function isLang(value: string): value is Lang {
  return LANGS.includes(value as Lang);
}

/**
 * Универсальный переводчик
 */
export function tField(
  field: string | Partial<Record<"ru" | "kz" | "en", string>>,
  lang: "ru" | "kz" | "en"
): string {
  if (typeof field === "string") return field;

  return field[lang] || field.ru || "";
}