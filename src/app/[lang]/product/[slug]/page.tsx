import { products } from "@/lib/basmData";

export default function ProductPage({ params }: any) {
  const lang = params?.lang || "ru";
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <div>Товар не найден</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">
        {product.title.ru}
      </h1>

      <p className="mt-4 text-slate-600">
        {product.short.ru}
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl">
        Запросить КП
      </button>
    </div>
  );
}