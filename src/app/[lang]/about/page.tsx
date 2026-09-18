"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Users, Target } from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Профессионализм",
      desc: "Глубокая экспертиза и индивидуальный подход к каждому проекту.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Надёжность",
      desc: "Выполнение обязательств и долгосрочные партнёрские отношения.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Ориентация на клиента",
      desc: "Подбор решений под реальные задачи и потребности.",
    },
  ];

  const stats = [
    { value: "2018", label: "Год основания" },
    { value: "3", label: "Направления работы" },
    { value: "100+", label: "Клиентов" },
    { value: "12+", label: "Сервисных договоров" },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">

      {/* HERO */}
      <section className="relative flex min-h-[220px] items-center overflow-hidden py-10 sm:min-h-[280px]">
        <div className="absolute inset-0">
          <img src="/catalog-bg.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-white sm:px-6">
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
            className="text-3xl font-bold sm:text-4xl"
          >
            О компании
          </motion.h1>
        </div>
      </section>

      {/* ОСНОВНОЙ ТЕКСТ */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-3">Кто мы</p>
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">О компании БАС-М</h2>
            <div className="h-[3px] w-12 bg-blue-600 rounded-full mb-8" />

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                ТОО «БАС-М» — динамично развивающаяся компания, основанная в 2018 году и работающая
                на рынке Казахстана.
              </p>
              <p>
                Мы специализируемся на поставке и внедрении современного оборудования и решений,
                ориентированных на повышение эффективности работы медицинских учреждений и бизнеса
                в целом.
              </p>
              <p>
                Наша миссия — предоставлять клиентам качественные, надёжные и технологичные решения,
                соответствующие международным стандартам и современным требованиям отрасли.
              </p>
              <p>
                Мы стремимся не просто поставлять оборудование, а быть полноценным партнёром для
                наших клиентов, сопровождая проекты на всех этапах — от подбора и поставки до
                внедрения и дальнейшей поддержки.
              </p>
              <p className="font-medium text-slate-800">
                БАС-М — это сочетание гибкости, ответственности и стремления к развитию.
              </p>
            </div>
          </motion.div>

          {/* СТАТИСТИКА */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-6"
              >
                <div className="mb-1 break-words text-2xl font-bold text-blue-600 sm:text-3xl">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ПРИНЦИПЫ */}
      <section className="bg-slate-50 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Наши ценности</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Ключевые принципы</h2>
            <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-stretch justify-between gap-6 rounded-3xl bg-blue-600 p-6 text-white sm:p-10 lg:flex-row lg:items-center"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Хотите стать нашим партнёром?</h2>
            <p className="text-blue-100 text-sm">Свяжитесь с нами — обсудим задачи и подберём решение.</p>
          </div>
          
            <Link
            href="/ru/contacts"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 sm:px-8"
          >
            Связаться с нами
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
