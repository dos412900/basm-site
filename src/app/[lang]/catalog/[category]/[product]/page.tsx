import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, products } from "@/lib/basmData";
import { DEFAULT_LANG, isLang, type Lang, tField } from "@/lib/i18n";

interface Props {
  params: Promise<{
    lang: string;
    category: string;
    product: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { lang: rawLang, category, product: productSlug } = await params;

  const lang: Lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;

  const categoryObj = categories.find((c) => c.slug === category);
  if (!categoryObj) return notFound();

  const product = products.find(
    (p) => p.slug === productSlug && p.category === category
  );

  if (!product) return notFound();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* хлебные крошки */}
        <div className="text-sm text-slate-500 mb-6">
          <Link href={`/${lang}`} className="hover:underline">
            Главная
          </Link>{" "}
          /{" "}
          <Link
            href={`/${lang}/catalog/${categoryObj.slug}`}
            className="hover:underline"
          >
            {tField(categoryObj.title, lang)}
          </Link>{" "}
          / {tField(product.title, lang)}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* КАРТИНКА */}
          <div className="rounded-2xl overflow-hidden bg-slate-100">
            {product.image ? (
              <img
                src={product.image}
                alt={tField(product.title, lang)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-[400px] flex items-center justify-center text-slate-400 text-sm">
                Нет фото
              </div>
            )}
          </div>

          {/* ИНФО */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              {tField(product.title, lang)}
            </h1>

            <p className="text-slate-600 mb-6">
              {tField(product.short, lang)}
            </p>

            <div className="space-y-2 mb-8 text-sm text-slate-600">
              <div>✔ Официальные поставки</div>
              <div>✔ Гарантия и сервис</div>
              <div>✔ Обучение персонала</div>
            </div>

            {/* кнопки */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={`https://wa.me/77001100631?text=${encodeURIComponent(
                  `Здравствуйте! Интересует товар: ${tField(
                    product.title,
                    lang
                  )}. Прошу предоставить информацию о цене и наличии.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition font-medium"
              >
                Купить в WhatsApp
              </a>

              <Link
                href={`/${lang}/catalog/${categoryObj.slug}`}
                className="px-6 py-3 rounded-xl border hover:bg-slate-100 transition"
              >
                Назад
              </Link>
            </div>
          </div>
        </div>

        {/* ДОП описание */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-4">Оборудование</h2>

          <p className="text-slate-600 leading-7 max-w-3xl">
            Это оборудование используется в клинической практике для диагностики и лечения.
            Мы помогаем подобрать оптимальную конфигурацию под задачи вашей клиники,
            обеспечиваем внедрение и дальнейшее сопровождение.
          </p>
        </div>
      </div>
    </div>
  );
}