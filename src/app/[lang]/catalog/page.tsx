"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { tField, type Lang } from "@/lib/i18n";
import { categories } from "@/lib/basmData";

export default function CatalogPage({ params }: any) {
  const lang: Lang = params?.lang || "ru";

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-3">
            Каталог оборудования
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Категории
          </h1>
          <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/${lang}/catalog/${c.slug}`} className="group block">
                <div
                  className="card-3d relative overflow-hidden p-6 bg-white rounded-2xl border"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const midX = rect.width / 2;
                    const midY = rect.height / 2;
                    e.currentTarget.style.setProperty("--rx", `${((midY - y) / midY) * 8}deg`);
                    e.currentTarget.style.setProperty("--ry", `${((x - midX) / midX) * 8}deg`);
                    e.currentTarget.style.setProperty("--x", `${x}px`);
                    e.currentTarget.style.setProperty("--y", `${y}px`);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--rx", "0deg");
                    e.currentTarget.style.setProperty("--ry", "0deg");
                  }}
                >
                  {/* Свечение */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none" />

                  {/* Контент */}
                  <div className="relative z-10">
                    <div className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                      {tField(c.title, lang)}
                    </div>
                    <div className="text-sm text-slate-500">
                      {c.desc?.[lang] || c.desc?.ru || "Оборудование"}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}