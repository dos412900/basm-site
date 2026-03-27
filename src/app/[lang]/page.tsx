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
      <section className="relative h-[680px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="medical" className="w-full h-full object-cover" />
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

        <div className="relative z-10 max-w-5xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/80 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Медицинское оборудование • комплексные решения • сервис
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl font-bold mb-6 leading-tight"
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
            className="text-lg text-white/75 mb-10 max-w-2xl mx-auto"
          >
            Подбираем комплектации под задачи отделения, помогаем внедрять, обучаем персонал и поддерживаем в эксплуатации.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Перейти в каталог
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${lang}/contacts`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              Запросить КП
            </Link>
          </motion.div>
        </div>

        {/* нижний градиент */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* СТАТИСТИКА */}
      <section className="max-w-6xl mx-auto px-6 -mt-6 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ПОЧЕМУ БАС-М */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Наши преимущества</p>
          <h2 className="text-3xl font-bold">Почему БАС-М</h2>
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
              className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Что мы предлагаем</p>
            <h2 className="text-3xl font-bold">Категории</h2>
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
                    className="card-3d relative overflow-hidden p-7 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-blue-600 rounded-3xl p-12 text-white"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-700/40 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">Готовы оснастить клинику?</h2>
              <p className="text-blue-100 max-w-lg">
                Оставьте заявку — подберём оборудование под задачи вашего отделения и рассчитаем стоимость.
              </p>
            </div>
            <Link
              href={`/${lang}/contacts`}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition shadow-lg"
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