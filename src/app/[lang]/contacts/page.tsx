import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { DEFAULT_LANG, isLang, type Lang } from "@/lib/i18n";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function ContactsPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;

  const t = {
    ru: {
      title: "Контакты",
      subtitle:
        "Оставьте заявку — подберём комплектацию и подготовим коммерческое предложение.",
      blocks: {
        phone: "Телефон",
        email: "Email",
        hours: "График",
        address: "Адрес",
      },
      hoursLines: ["Пн–Пт 09:00–18:00"],
      addressLines: ["г.Алматы, мкр.10А, д.13, оф.1"],
      formTitle: "Заявка",
      name: "Имя",
      phone: "Телефон",
      email: "Email",
      org: "Компания / клиника",
      message: "Комментарий (что нужно подобрать)",
      btn: "Отправить заявку",
      note:
        "Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.",
    },
    kz: {
      title: "Байланыс",
      subtitle:
        "Өтінім қалдырыңыз — комплектация ұсынып, коммерциялық ұсыныс дайындаймыз.",
      blocks: {
        phone: "Телефон",
        email: "Email",
        hours: "Жұмыс уақыты",
        address: "Мекенжай",
      },
      hoursLines: ["Дс–Жм 09:00–18:00"],
      addressLines: ["Алматы қ. ,10А шағын ауданы, оф. 1"],
      formTitle: "Өтінім",
      name: "Аты-жөні",
      phone: "Телефон",
      email: "Email",
      org: "Компания / клиника",
      message: "Комментарий (не таңдау керек)",
      btn: "Өтінім жіберу",
      note:
        "«Жіберу» батырмасын басу арқылы деректерді өңдеуге келісесіз.",
    },
    en: {
      title: "Contacts",
      subtitle:
        "Leave a request — we’ll suggest a configuration and prepare a quote.",
      blocks: {
        phone: "Phone",
        email: "Email",
        hours: "Hours",
        address: "Address",
      },
      hoursLines: ["Mon–Fri 09:00–18:00"],
      addressLines: ["Almaty city, 10A microdistrict, office 1"],
      formTitle: "Request",
      name: "Name",
      phone: "Phone",
      email: "Email",
      org: "Company / clinic",
      message: "Message (what do you need?)",
      btn: "Send request",
      note:
        "By clicking “Send”, you consent to processing of personal data.",
    },
  }[lang];

  return (
    <div className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Card className="p-6">
              <div className="grid gap-4">
                <InfoRow icon={<Phone className="h-5 w-5" />} title={t.blocks.phone}>
                  <a className="font-semibold hover:underline" href="tel:+77019249910">
                    +7 (700) 110 0631
                  </a>
                </InfoRow>

                <Divider />

                <InfoRow icon={<Mail className="h-5 w-5" />} title={t.blocks.email}>
                  <a className="font-semibold hover:underline" href="mailto:basm.company@mail.ru">
                    info@bas-m.kz
                  </a>
                </InfoRow>

                <Divider />

                <InfoRow icon={<Clock className="h-5 w-5" />} title={t.blocks.hours}>
                  {t.hoursLines.map((x) => (
                    <div key={x}>{x}</div>
                  ))}
                </InfoRow>

                <Divider />

                <InfoRow icon={<MapPin className="h-5 w-5" />} title={t.blocks.address}>
                  {t.addressLines.map((x) => (
                    <div key={x}>{x}</div>
                  ))}
                </InfoRow>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6">
              <div className="text-sm font-semibold">{t.formTitle}</div>

              <form className="mt-4 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.name} placeholder={t.name} />
                  <Field label={t.phone} placeholder="+7 (701) 924 99 10" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.email} placeholder="name@email.com" type="email" />
                  <Field label={t.org} placeholder={t.org} />
                </div>

                <div>
                  <label className="text-xs font-semibold">{t.message}</label>
                  <textarea
                    className="mt-2 h-36 w-full rounded-2xl border px-4 py-3 text-sm"
                    placeholder={t.message}
                  />
                </div>

                <Button href={`/${lang}/contacts`}>
                  <span className="inline-flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t.btn}
                  </span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-slate-200" />;
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase">{title}</div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm"
      />
    </div>
  );
}