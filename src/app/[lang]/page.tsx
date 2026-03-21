"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Shield, Wrench, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage(props: any) {
  const lang = props?.params?.lang ?? "ru";

  const t = {
    kicker: "Медицинское оборудование • комплексные решения • сервис",
    title1: "BAS-M",
    title2: "медицинское оборудование и решения для клиник",
    desc: "Подбираем комплектации под задачи отделения, помогаем внедрять, обучаем персонал и поддерживаем в эксплуатации.",
    primary: "Перейти в каталог",
    secondary: "Запросить КП",
    blocksTitle: "Почему BAS-M",
    blocksDesc: "Закрываем весь цикл: подбор → поставка → внедрение → обучение → сервис.",
    cards: [
      { icon: "shield", title: "Подбор комплектации", desc: "Под бюджет и клинический сценарий." },
      { icon: "grad", title: "Внедрение и обучение", desc: "Инструктаж и ввод в практику." },
      { icon: "wrench", title: "Сервис и поддержка", desc: "Сопровождение на всех этапах." },
    ],
    catTitle: "Категории",
  };

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center text-white">

        {/* ФОН */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="medical"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ЗАТЕМНЕНИЕ */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>

        {/* КОНТЕНТ */}
        <div className="relative z-10 max-w-4xl text-center px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/70 mb-3"
          >
            {t.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            {t.title1} <br /> {t.title2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 mb-8"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link href={`/${lang}/catalog`}>
              <Button>
                {t.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href={`/${lang}/contacts`}>
              <Button variant="outline">
                {t.secondary}
              </Button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* WHY BAS-M */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">{t.blocksTitle}</h2>
        <p className="text-slate-600 mb-10">{t.blocksDesc}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.cards.map((c, i) => (
            <Card key={i} className="p-6 flex gap-4 items-start">
              <Icon name={c.icon} />
              <div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
<section className="max-w-6xl mx-auto px-6 pb-20">
  <h2 className="text-3xl font-bold mb-8">{t.catTitle}</h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { slug: "neuro-monitoring", title: "Нейромониторинг и эндоскопия", desc: "Системы контроля и визуализации" },
      { slug: "neuro-modulation", title: "Нейромодуляция и инструменты", desc: "Оборудование для операций" },
      { slug: "neuro-surgery", title: "Функциональная нейрохирургия", desc: "Диагностика и лечение" },
      { slug: "cranioplasty", title: "Краниопластика", desc: "Восстановление черепа" },
      { slug: "furniture", title: "Медицинская мебель", desc: "Оснащение клиник" },
      { slug: "lab", title: "Лабораторное оборудование", desc: "Решения для диагностики" },
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <Link
          href={`/${lang}/catalog/${c.slug}`}
          className="group block"
        >
          <div
  className="card-3d relative overflow-hidden p-6 bg-white rounded-2xl border"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = ((midY - y) / midY) * 8;

    e.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
    e.currentTarget.style.setProperty("--ry", `${rotateY}deg`);
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.setProperty("--rx", `0deg`);
    e.currentTarget.style.setProperty("--ry", `0deg`);
  }}
>

            {/* 💡 СВЕЧЕНИЕ */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none"></div>

            {/* КОНТЕНТ */}
            <div className="relative z-10">
              <div className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                {c.title}
              </div>

              <div className="text-sm text-slate-600">
                {c.desc}
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

function Icon({ name }: { name: "shield" | "grad" | "wrench" | string }) {
  const base = "h-5 w-5 text-slate-700";

  if (name === "shield") return <Shield className={base} />;
  if (name === "grad") return <GraduationCap className={base} />;
  if (name === "wrench") return <Wrench className={base} />;

  return <Shield className={base} />;
}