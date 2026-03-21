import Link from "next/link";
import { categories } from "@/lib/basmData";
import { tField, type Lang } from "@/lib/i18n";

export default function CatalogPage({ params }: any) {
  const lang: Lang = params?.lang || "ru";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Каталог оборудования
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/catalog/${c.slug}`}
              className="group"
            >
              <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all">

                <div className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                  {tField(c.title, lang)}
                </div>

                <div className="text-sm text-slate-600">
                  {c.desc?.[lang] || c.desc?.ru || "Оборудование"}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}