export type Product = {
  slug: string;
  title: {
    ru: string;
    kz?: string;
    en?: string;
  };
  category: string;
  short: {
    ru: string;
    kz?: string;
    en?: string;
  };
  image?: string;
};

export type Category = {
  slug: string;
  title: { ru: string; kz?: string; en?: string };
  desc?: { ru: string; kz?: string; en?: string };
  children?: Category[];
};

export const categories: Category[] = [
  {
    slug: "furniture",
    title: { ru: "Медицинская мебель" },
    desc: { ru: "Оснащение клиник и больниц" },
  },
  {
    slug: "functional-diagnostics",
    title: { ru: "Функциональная диагностика" },
    desc: { ru: "Оборудование для диагностики" },
  },
  {
    slug: "healthy-lifestyle-models",
    title: { ru: "Демонстрационные модели ЗОЖ" },
    desc: { ru: "Модели для обучения и пропаганды здорового образа жизни" },
  },
];

export const products: Product[] = [
  // Медицинская мебель
  {
    slug: "ok-gamma-03-full",
    category: "furniture",
    title: { ru: "Стол общехирургический ОК-ГАММА 03 (полный комплект)" },
    short: {
      ru: "Стол общехирургический ОК-ГАММА 03 в комплекте со съемным приспособлением для операций с подъемом и удержанием поясничной, тазовой или грудной области тела",
    },
    image: "/ok-gamma-03-full.jpg",
  },
  {
    slug: "ok-gamma-03",
    category: "furniture",
    title: { ru: "Стол общехирургический ОК-ГАММА 03" },
    short: { ru: "Стол общехирургический ОК-ГАММА 03" },
    image: "/ok-gamma-03.jpg",
  },
  {
    slug: "ok-teta-full",
    category: "furniture",
    title: { ru: "Стол общехирургический урологический ОК-ТЕТА (полный комплект)" },
    short: {
      ru: "Стол общехирургический, урологический ОК-ТЕТА в комплекте со съемным приспособлением для операций с подъемом и удержанием поясничной, тазовой или грудной области тела",
    },
    image: "/ok-teta-full.jpg",
  },
  {
    slug: "ok-teta",
    category: "furniture",
    title: { ru: "Стол общехирургический урологический ОК-ТЕТА" },
    short: { ru: "Стол общехирургический, урологический ОК-ТЕТА" },
    image: "/ok-teta.jpg",
  },
  {
    slug: "kpp-33",
    category: "furniture",
    title: { ru: "КПП-33 Комплект хирургических держателей ног" },
    short: { ru: "Комплект хирургических держателей ног КПП-33" },
    image: "/kpp-33.jpg",
  },

  // Функциональная диагностика
  {
    slug: "entsefalan-mini",
    category: "functional-diagnostics",
    title: { ru: "Энцефалан-ЭЭГР-19/26 «Мини» (АТ-Мини)" },
    short: {
      ru: "Электроэнцефалограф-регистратор компьютеризированный портативный носимый суточной регистрации ЭЭГ в телеметрическом и автономном режиме",
    },
    image: "/entsefalan-mini.jpg",
  },
  {
    slug: "mas2-s",
    category: "functional-diagnostics",
    title: { ru: "Спирометр автономный запоминающий «МАС2-С»" },
    short: {
      ru: "Автономный запоминающий спирометр для функциональной диагностики дыхания",
    },
    image: "/mas2-s.jpg",
  },

  // Демонстрационные модели ЗОЖ
  {
    slug: "model-alcohol-abuse",
    category: "healthy-lifestyle-models",
    title: { ru: "Последствия злоупотребления алкоголем" },
    short: { ru: "Демонстрационная модель последствий злоупотребления алкоголем" },
    image: "/model-alcohol-abuse.jpg",
  },
  {
    slug: "model-liver-death",
    category: "healthy-lifestyle-models",
    title: { ru: "Смерть печени (мольберт)" },
    short: { ru: "Демонстрационная модель «Смерть печени» на мольберте" },
    image: "/model-liver-death.jpg",
  },
  {
    slug: "model-pickled-liver",
    category: "healthy-lifestyle-models",
    title: { ru: "Маринованная печень" },
    short: { ru: "Демонстрационная модель «Маринованная печень»" },
    image: "/model-pickled-liver.jpg",
  },
  {
    slug: "model-drunk-dangerous-interactive",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с интерактивными очками" },
    short: { ru: "Демонстрационная модель с интерактивными очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-glasses",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с очками" },
    short: { ru: "Демонстрационная модель с очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-glasses.jpg",
  },
  {
    slug: "model-drunk-package-interactive",
    category: "healthy-lifestyle-models",
    title: { ru: "«Пьяный и опасный — пакет» с интерактивными очками" },
    short: { ru: "Демонстрационный пакет с интерактивными очками" },
    image: "/model-drunk-package-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-cups",
    category: "healthy-lifestyle-models",
    title: { ru: "«Пьяный и Опасный» с бокалами" },
    short: { ru: "Демонстрационная модель с бокалами" },
    image: "/model-drunk-dangerous-cups.jpg",
  },
  {
    slug: "model-drunk-unclear-thinking",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивные очки «Пьяный и неспособный мыслить ясно» с кейсом" },
    short: { ru: "Демонстрационная модель с интерактивными очками в кейсе" },
    image: "/model-drunk-unclear-thinking.jpg",
  },
  {
    slug: "model-drunk-glasses-case",
    category: "healthy-lifestyle-models",
    title: { ru: "Очки «Пьяные и опасные» в футляре" },
    short: { ru: "Демонстрационные очки в футляре для показа эффектов алкоголя" },
    image: "/model-drunk-glasses-case.jpg",
  },
  {
    slug: "model-what-mama-does",
    category: "healthy-lifestyle-models",
    title: { ru: "«Что делает мама, делает и ребенок» Дисплей" },
    short: { ru: "Демонстрационная модель о влиянии алкоголя матери на ребёнка" },
    image: "/model-what-mama-does.jpg",
  },
  {
    slug: "model-body-alcohol-stand",
    category: "healthy-lifestyle-models",
    title: { ru: "Стенд «Моё тело и опасности употребления алкоголя»" },
    short: { ru: "Демонстрационный стенд о воздействии алкоголя на организм человека" },
    image: "/model-body-alcohol-stand.jpg",
  },
];

function flattenCats(list: Category[]): Category[] {
  const out: Category[] = [];
  for (const c of list) {
    out.push(c);
    if (c.children?.length) out.push(...flattenCats(c.children));
  }
  return out;
}

export const flatCategories = flattenCats(categories);

export function getCategory(slug: string) {
  return flatCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}