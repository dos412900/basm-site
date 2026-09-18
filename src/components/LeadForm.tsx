"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { Send } from "lucide-react";
import type { Lang } from "@/lib/i18n";

type Labels = {
  name: string;
  phone: string;
  email: string;
  org: string;
  message: string;
  btn: string;
};

const feedback: Record<Lang, { sending: string; success: string; error: string }> = {
  ru: {
    sending: "Отправляем...",
    success: "Заявка отправлена. Мы свяжемся с вами.",
    error: "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.",
  },
  kz: {
    sending: "Жіберілуде...",
    success: "Өтінім жіберілді. Біз сізбен хабарласамыз.",
    error: "Өтінімді жіберу мүмкін болмады. Қайта көріңіз немесе бізге қоңырау шалыңыз.",
  },
  en: {
    sending: "Sending...",
    success: "Your request was sent. We’ll contact you soon.",
    error: "We couldn’t send your request. Please try again or call us.",
  },
};

export default function LeadForm({ lang, labels }: { lang: Lang; labels: Labels }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const payload = {
      name: String(fields.get("name") || "").trim(),
      phone: String(fields.get("phone") || "").trim(),
      email: String(fields.get("email") || "").trim(),
      company: String(fields.get("company") || "").trim(),
      message: String(fields.get("message") || "").trim(),
      lang,
    };

    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error("Lead request failed");

      form.reset();
      setStatus({ kind: "success", message: feedback[lang].success });
    } catch {
      setStatus({ kind: "error", message: feedback[lang].error });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={labels.name} autoComplete="name" required minLength={2} maxLength={120} />
        <Field name="phone" label={labels.phone} type="tel" autoComplete="tel" required minLength={7} maxLength={40} placeholder="+7 (701) 924 99 10" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label={labels.email} type="email" autoComplete="email" maxLength={254} placeholder="name@email.com" />
        <Field name="company" label={labels.org} autoComplete="organization" maxLength={160} />
      </div>
      <div>
        <label htmlFor="lead-message" className="text-xs font-semibold">{labels.message}</label>
        <textarea id="lead-message" name="message" maxLength={5000} className="mt-2 h-36 w-full rounded-2xl border px-4 py-3 text-base" placeholder={labels.message} />
      </div>
      <button type="submit" disabled={loading} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        {loading ? feedback[lang].sending : labels.btn}
      </button>
      {status && (
        <p role={status.kind === "error" ? "alert" : "status"} aria-live="polite" className={status.kind === "error" ? "text-sm text-red-700" : "text-sm text-emerald-700"}>
          {status.message}
        </p>
      )}
    </form>
  );
}

function Field({ name, label, type = "text", ...props }: { name: string; label: string; type?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={`lead-${name}`} className="text-xs font-semibold">{label}</label>
      <input id={`lead-${name}`} name={name} type={type} className="mt-2 w-full rounded-2xl border px-4 py-3 text-base" {...props} />
    </div>
  );
}
