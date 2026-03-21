import { getProduct, products } from "@/lib/basmData";
import { DEFAULT_LANG, isLang, type Lang, tField } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string; lang?: string } }) {
  const lang: Lang = isLang(params.lang ?? "") ? (params.lang as Lang) : DEFAULT_LANG;

  const p = getProduct(params.slug);
  if (!p) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="text-sm text-slate-500">BAS-M</div>
        <h1 className="mt-1 text-2xl font-semibold">{tField(p.title, lang)}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{tField(p.short, lang)}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contacts" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
            Запросить КП / консультацию
          </Link>
          <Link href="/catalog" className="rounded-xl border bg-white px-5 py-3 text-sm font-medium">
            Назад в каталог
          </Link>
        </div>
      </div>
    </div>
  );
}