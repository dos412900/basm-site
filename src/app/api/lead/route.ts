import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Expected JSON" }, { status: 415 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = readField(body.name, 120);
  const phone = readField(body.phone, 40);
  const email = readField(body.email, 254);
  const company = readField(body.company, 160);
  const message = readField(body.message, 5000);
  const submittedLang = readField(body.lang, 2);
  const lang = submittedLang || "ru";

  if (
    name === null || phone === null || email === null || company === null || submittedLang === null ||
    message === null || name.length < 2 || phone.replace(/\D/g, "").length < 7 ||
    (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
    !["ru", "kz", "en"].includes(lang)
  ) {
    return NextResponse.json({ ok: false, error: "Invalid lead details" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY?.trim();
  const to = process.env.LEADS_TO_EMAIL?.trim();
  const from = process.env.LEADS_FROM_EMAIL?.trim();
  if (!key || !to || !from) {
    console.error("Lead email service is not configured");
    return NextResponse.json({ ok: false, error: "Mail service unavailable" }, { status: 503 });
  }

  const lines = [
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Email: ${email || "—"}`,
    `Компания: ${company || "—"}`,
    `Язык: ${lang}`,
    "",
    `Сообщение: ${message || "—"}`,
  ];

  try {
    const { data, error } = await new Resend(key).emails.send({
      from,
      to,
      subject: "Новая заявка с сайта BAS-M",
      text: lines.join("\n"),
      html: `
        <h2>Новая заявка с сайта BAS-M</h2>
        <p><b>Имя:</b> ${escapeHtml(name)}</p>
        <p><b>Телефон:</b> ${escapeHtml(phone)}</p>
        <p><b>Email:</b> ${escapeHtml(email || "—")}</p>
        <p><b>Компания:</b> ${escapeHtml(company || "—")}</p>
        <p><b>Язык:</b> ${escapeHtml(lang)}</p>
        <hr />
        <p><b>Сообщение:</b><br />${escapeHtml(message || "—").replace(/\n/g, "<br />")}</p>
      `,
      replyTo: email || undefined,
    });

    if (error || !data?.id) {
      console.error("Lead email was rejected", error?.name, error?.message);
      return NextResponse.json({ ok: false, error: "Mail service rejected request" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead email request failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ ok: false, error: "Mail service unavailable" }, { status: 502 });
  }
}

function readField(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string" || value.length > maxLength) return null;
  return value.trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
