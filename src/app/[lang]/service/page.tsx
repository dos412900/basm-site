"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Settings, GraduationCap, HeadphonesIcon, CheckCircle } from "lucide-react";

export default function ServicePage() {
  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Техническое обслуживание",
      desc: "Плановое и внеплановое обслуживание медицинского оборудования. Проводим диагностику, регулировку и профилактику для обеспечения бесперебойной работы.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Ремонт и восстановление",
      desc: "Устранение неисправностей любой сложности. Используем только оригинальные запчасти от производителей.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Обучение персонала",
      desc: "Проводим инструктаж и практическое обучение медицинского персонала работе с оборудованием на базе клиники.",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Техническая поддержка",
      desc: "Консультации по телефону и выезд специалиста. Оперативное решение вопросов в течение рабочего дня.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Заявка",
      desc: "Вы оставляете заявку по телефону, email или через форму на сайте.",
    },
    {
      number: "02",
      title: "Диагностика",
      desc: "Специалист выезжает на объект и проводит первичную диагностику оборудования.",
    },
    {
      number: "03",
      title: "Согласование",
      desc: "Составляем смету и согласовываем объём работ и сроки с заказчиком.",
    },
    {
      number: "04",
      title: "Выполнение",
      desc: "Проводим техническое обслуживание, ремонт или обучение персонала.",
    },
    {
      number: "05",
      title: "Сдача",
      desc: "Подписываем акт выполненных работ и передаём оборудование в эксплуатацию.",
    },
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
            Сервис и поддержка
          </motion.h1>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Что мы делаем</p>
          <h2 className="text-3xl font-bold">Наши услуги</h2>
          <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Как мы работаем</p>
            <h2 className="text-3xl font-bold">Этапы работы</h2>
            <div className="mt-4 h-[3px] w-12 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="relative">
            {/* соединительная линия */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-slate-200 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-600 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-blue-600 font-bold text-lg">{s.number}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-2xl font-bold mb-2">Нужна помощь с оборудованием?</h2>
            <p className="text-blue-100 text-sm">Оставьте заявку — свяжемся в течение рабочего дня.</p>
          </div>
          
            <Link
            href="/ru/contacts"
            className="shrink-0 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
          >
            Оставить заявку
          </Link>
        </motion.div>
      </section>

    </div>
  );
}