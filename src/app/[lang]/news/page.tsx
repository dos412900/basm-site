"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NEWS = [
  {
    slug: "new-equipment-2025",
    category: "Продукты",
    date: "15 марта 2025",
    title: "Новое оборудование для функциональной диагностики",
    desc: "Пополнили каталог современными спирометрами и электроэнцефалографами для клиник и диагностических центров.",
    image: "/hero.jpg",
  },
  {
    slug: "training-almaty-2025",
    category: "Обучение",
    date: "2 марта 2025",
    title: "Обучение персонала в клиниках Алматы",
    desc: "Провели серию практических занятий по работе с хирургическими столами серии ОК-ГАММА для медицинского персонала.",
    image: "/hero.jpg",
  },
  {
    slug: "exhibition-2025",
    category: "События",
    date: "18 февраля 2025",
    title: "БАС-М на медицинской выставке MedExpo 2025",
    desc: "Приняли участие в крупнейшей медицинской выставке Казахстана. Представили новинки оборудования и провели переговоры с партнёрами.",
    image: "/hero.jpg",
  },
  {
    slug: "service-contract-2025",
    category: "Сервис",
    date: "5 февраля 2025",
    title: "Расширение сервисного обслуживания",
    desc: "Заключили договоры на техническое обслуживание с 12 новыми клиниками по всему Казахстану.",
    image: "/hero.jpg",
  },
  {
    slug: "healthy-lifestyle-models",
    category: "Продукты",
    date: "20 января 2025",
    title: "Демонстрационные модели ЗОЖ в каталоге",
    desc: "Добавили линейку демонстрационных моделей для пропаганды здорового образа жизни и профилактики алкогольной зависимости.",
    image: "/hero.jpg",
  },
  {
    slug: "partnership-2025",
    category: "События",
    date: "10 января 2025",
    title: "Новые партнёрства с производителями",
    desc: "Подписали соглашения о партнёрстве с ведущими европейскими производителями медицинского оборудования.",
    image: "/hero.jpg",
  },
];

const CATEGORIES = ["Все", "Продукты", "Обучение", "События", "Сервис"];

export default function NewsPage() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все"
    ? NEWS
    : NEWS.filter((n) => n.category === active);

  return (
    <div className="bg-white text-slate-900 min-h-screen">

      {/* HERO */}
      <section className="relative h-[280px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/catalog-bg.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-white/60 mb-3"
          >
            БАС-М
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Новости
          </motion.h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* ФИЛЬТР */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* КАРТОЧКИ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((n, i) => (
            <motion.div
              key={n.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={`/ru/news/${n.slug}`} className="group block h-full">
                <div className="h-full rounded-2xl border border-slate-100 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* картинка */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* контент */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                        {n.category}
                      </span>
                      <span className="text-xs text-slate-400">{n.date}</span>
                    </div>

                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition leading-snug">
                      {n.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {n.desc}
                    </p>

                    <div className="mt-4 text-sm font-medium text-blue-600">
                      Читать →
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-slate-400 py-20 text-lg">
            Новостей в этой категории пока нет
          </div>
        )}

      </section>
    </div>
  );
}