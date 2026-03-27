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
            О компании
          </motion.h1>
        </div>
      </section>

      {/* ОСНОВНОЙ ТЕКСТ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-3">Кто мы</p>
            <h2 className="text-3xl font-bold mb-6">О компании БАС-М</h2>
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:mt-16"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ПРИНЦИПЫ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Наши ценности</p>
            <h2 className="text-3xl font-bold">Ключевые принципы</h2>
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
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Хотите стать нашим партнёром?</h2>
            <p className="text-blue-100 text-sm">Свяжитесь с нами — обсудим задачи и подберём решение.</p>
          </div>
          
            <Link
            href="/ru/contacts"
            className="shrink-0 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
          >
            Связаться с нами
          </Link>
        </motion.div>
      </section>

    </div>
  );
}