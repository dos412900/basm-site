"use client";

import Link from "next/link";
import { ArrowRight, Shield, Wrench, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage(props: any) {
  const lang = props?.params?.lang ?? "ru";

  const cards = [
    { icon: "shield", title: "Подбор комплектации", desc: "Под бюджет и клинический сценарий." },
    { icon: "grad", title: "Внедрение и обучение", desc: "Инструктаж и ввод в практику." },
    { icon: "wrench", title: "Сервис и поддержка", desc: "Сопровождение на всех этапах." },
  ];

  const categories = [
    { slug: "furniture", title: "Медицинская мебель", desc: "Оснащение клиник и больниц", num: "01" },
    { slug: "functional-diagnostics", title: "Функциональная диагностика", desc: "Оборудование для диагностики", num: "02" },
    { slug: "healthy-lifestyle-models", title: "Демонстрационные модели ЗОЖ", desc: "Модели для обучения и пропаганды ЗОЖ", num: "03" },
  ];

  const stats = [
    { value: "2018", label: "Год основания" },
    { value: "3", label: "Категории товаров" },
    { value: "100+", label: "Клиентов" },
    { value: "全цикл", label: "Подбор → Сервис" },
  ];

  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden py-16 text-white sm:min-h-[620px] sm:py-24 lg:min-h-[680px]">
        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="Медицинское оборудование" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-blue-950/60" />

        {/* декоративная сетка */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-xs leading-snug text-white/90 backdrop-blur-sm sm:mb-6 sm:rounded-full sm:px-4 sm:text-sm"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400 animate-pulse" />
            Медицинское оборудование • комплексные решения • сервис
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-5 break-words text-3xl font-bold leading-tight sm:mb-6 sm:text-5xl lg:text-6xl"
          >
            БАС-М
            <br />
            <span className="text-blue-400">медицинское оборудование</span>
            <br />
            и решения для клиник
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:mb-10 sm:text-lg"
          >
            Подбираем комплектации под задачи отделения, помогаем внедрять, обучаем персонал и поддерживаем в эксплуатации.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              Перейти в каталог
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${lang}/contacts`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Запросить КП
            </Link>
          </motion.div>
        </div>

        {/* нижний градиент */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* СТАТИСТИКА */}
      <section className="relative z-10 mx-auto mb-14 -mt-6 max-w-6xl px-4 sm:mb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm sm:p-6">
              <div className="mb-1 break-words text-xl font-bold text-blue-600 sm:text-2xl">{s.value}</div>
              <div className="text-xs leading-snug text-slate-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ПОЧЕМУ БАС-М */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Наши преимущества</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Почему БАС-М</h2>
          <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-xl">
            Закрываем весь цикл: подбор → поставка → внедрение → обучение → сервис.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <IconComp name={c.icon} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* КАТЕГОРИИ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Что мы предлагаем</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Категории</h2>
            <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/${lang}/catalog/${c.slug}`} className="group block">
                  <div
                    className="card-3d relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl sm:p-7"
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl font-bold text-slate-100 group-hover:text-blue-100 transition">
                          {c.num}
                        </span>
                        <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                        {c.title}
                      </div>
                      <div className="text-sm text-slate-500">{c.desc}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Весь каталог <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-blue-600 p-6 text-white sm:p-12"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-700/40 blur-3xl" />

          <div className="relative z-10 flex flex-col items-stretch justify-between gap-6 lg:flex-row lg:items-center lg:gap-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Готовы оснастить клинику?</h2>
              <p className="text-blue-100 max-w-lg">
                Оставьте заявку — подберём оборудование под задачи вашего отделения и рассчитаем стоимость.
              </p>
            </div>
            <Link
              href={`/${lang}/contacts`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50 sm:px-8 sm:py-4"
            >
              Запросить КП
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

function IconComp({ name }: { name: string }) {
  const base = "h-5 w-5";
  if (name === "shield") return <Shield className={base} />;
  if (name === "grad") return <GraduationCap className={base} />;
  if (name === "wrench") return <Wrench className={base} />;
  return <Shield className={base} />;
}
