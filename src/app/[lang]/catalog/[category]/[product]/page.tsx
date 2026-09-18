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
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        {/* хлебные крошки */}
        <div className="mb-6 break-words text-sm leading-relaxed text-slate-500">
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

        <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-10">
          {/* КАРТИНКА */}
          <div className="aspect-square min-w-0 overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[4/3]">
            {product.image ? (
              <img
                src={product.image}
                alt={tField(product.title, lang)}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-400">
                Нет фото
              </div>
            )}
          </div>

          {/* ИНФО */}
          <div className="min-w-0">
            <h1 className="mb-4 break-words text-2xl font-bold text-slate-900 sm:text-3xl">
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
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={`https://wa.me/77001100631?text=${encodeURIComponent(
                  `Здравствуйте! Интересует товар: ${tField(
                    product.title,
                    lang
                  )}. Прошу предоставить информацию о цене и наличии.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-center font-medium text-white transition hover:bg-green-600"
              >
                Купить в WhatsApp
              </a>

              <Link
                href={`/${lang}/catalog/${categoryObj.slug}`}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border px-6 py-3 transition hover:bg-slate-100"
              >
                Назад
              </Link>
            </div>
          </div>
        </div>

        {/* ДОП описание */}
        <div className="mt-10 sm:mt-16">
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
