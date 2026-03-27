export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, products } from "@/lib/basmData";
import { DEFAULT_LANG, isLang, type Lang, tField } from "@/lib/i18n";

interface Props {
  params: {
    lang: string;
    category: string;
  };
  searchParams: {
    q?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {

  const { lang: rawLang = "ru", category: slug } = await params;
const lang: Lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;

  if (!slug) return notFound();

  const category = categories.find((c) => c.slug === slug);
  if (!category) return notFound();

  const query = searchParams.q?.toLowerCase() || "";

  const items = products.filter((p) => {
    const inCategory = p.category === slug;

    const title = p.title?.ru?.toLowerCase() || "";
    const short = p.short?.ru?.toLowerCase() || "";

    const match =
      !query ||
      title.includes(query) ||
      short.includes(query);

    return inCategory && match;
  });

  return (
    <div className="bg-white text-slate-900">

      {/* 🔥 HERO */}
      <section className="relative h-[320px] flex items-center overflow-hidden">

  <div className="absolute inset-0 z-0">
    <img
      src="/catalog-bg.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
    <h1 className="text-4xl font-bold">
      {tField(category.title, lang)}
    </h1>
  </div>

</section>

      {/* 📦 КОНТЕНТ */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* 🔎 ПОИСК */}
        <form
          action={`/${lang}/catalog/${slug}`}
          className="mb-10"
        >
          <input
            name="q"
            placeholder="Поиск по каталогу..."
            defaultValue={query}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none shadow-sm focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </form>

        {/* ❌ ПУСТО */}
        {items.length === 0 ? (
          <div className="text-slate-500 text-lg">
            Ничего не найдено
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/${lang}/catalog/${slug}/${p.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* картинка */}
<div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden">
  {p.image ? (
    <img
      src={p.image}
      alt={tField(p.title, lang)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
      Нет фото
    </div>
  )}
</div>

                {/* название */}
                <div className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition">
                  {tField(p.title, lang)}
                </div>

                {/* описание */}
                <div className="text-sm text-slate-600 mb-3">
                  {tField(p.short, lang)}
                </div>

                {/* кнопка */}
                <div className="text-sm font-medium text-blue-600">
                  Подробнее →
                </div>
              </Link>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}