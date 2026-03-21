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
  image?: string; // ✅ ВОТ ЭТО ДОБАВЬ
};

export const categories: Category[] = [
  {
    slug: "neuro-monitoring",
    title: { ru: "Нейромониторинг" },
  },
  {
    slug: "neuro-modulation",
    title: { ru: "Нейромодуляция" },
  },
  {
    slug: "neuro-surgery",
    title: { ru: "Функциональная нейрохирургия" },
  },
  {
    slug: "cranioplasty",
    title: { ru: "Краниопластика" },
  },
  {
    slug: "furniture",
    title: { ru: "Медицинская мебель" },
  },
  {
    slug: "lab",
    title: { ru: "Лабораторное оборудование" },
  },
];

export const products: Product[] = [
  {
    slug: "neuromonitor-x1",
    category: "neuro-monitoring",
    title: { ru: "Нейромонитор X1" },
    short: { ru: "Система интраоперационного мониторинга" },
  },
  {
    slug: "stimulator-pro",
    category: "neuro-modulation",
    title: { ru: "Нейростимулятор Pro" },
    short: { ru: "Для функциональной терапии" },
  },
  {
    slug: "surgery-kit",
    category: "neuro-surgery",
    title: { ru: "Хирургический набор" },
    short: { ru: "Инструменты для нейрохирургии" },
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