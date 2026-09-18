"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { categories } from "@/lib/basmData";
import { cn } from "@/lib/cn";
import { DEFAULT_LANG, isLang, type Lang, tField } from "@/lib/i18n";

interface HeaderProps {
  lang?: Lang;
}

export default function Header({ lang: propLang }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const parts = pathname.split("/").filter(Boolean);
  const lang: Lang =
    propLang ?? (parts[0] && isLang(parts[0]) ? parts[0] : DEFAULT_LANG);

  const [mobile, setMobile] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);

  const cats = useMemo(() => categories, []);

  const text = {
    navCatalog: { ru: "Каталог", kz: "Каталог", en: "Catalog" },
    navService: { ru: "Сервис", kz: "Сервис", en: "Service" },
    navNews: { ru: "Новости", kz: "Жаңалықтар", en: "News" },
    navAbout: { ru: "О нас", kz: "Біз туралы", en: "About" },
    navContacts: { ru: "Контакты", kz: "Байланыс", en: "Contacts" },
    search: { ru: "Поиск...", kz: "Іздеу...", en: "Search..." },
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t)) setOpenCat(false);
      if (langRef.current && !langRef.current.contains(t)) setOpenLang(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobile(false);
        setOpenCat(false);
        setOpenLang(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpenCat(false);
    setOpenLang(false);
  }, [pathname]);

  function buildPath(nextLang: Lang) {
    const p = pathname.split("/").filter(Boolean);
    const rest = p.length && isLang(p[0]) ? p.slice(1) : p;
    const tail = rest.length ? `/${rest.join("/")}` : "";
    return `/${nextLang}${tail}`;
  }

  function setLang(nextLang: Lang) {
    document.cookie = `lang=${nextLang}; path=/; max-age=31536000`;
    router.push(buildPath(nextLang));
    setOpenLang(false);
  }

  return (
    <header
  className={cn(
    "sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl",
    scrolled
      ? "bg-white shadow-sm border-b border-slate-200"
      : "bg-white"
  )}
>
      
      {/* TOP */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-700">
          <div>bas-m.kz</div>
          <div className="flex gap-4">
            <a href="mailto:info@bas-m.kz" className="hidden sm:inline hover:text-blue-600">info@bas-m.kz</a>
            <a href="tel:+77001100631" className="hover:text-blue-600">+7 (700) 110 0631</a>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">

        {/* LOGO */}
        <Link
  href={`/${lang}`}
  className="group flex min-w-0 items-center gap-2 sm:gap-3"
>
  <div
    className={cn(
      "transition-all duration-300",
      scrolled ? "scale-90" : "scale-100"
    )}
  >
    <Image
      src="/logo.png"
      alt="БАС-М"
      width={200}
      height={80}
      className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10"
    />
  </div>

  <div className="hidden leading-tight sm:block">
    <div className="text-sm font-semibold text-slate-900">
      БАС-М
    </div>
    <div className="text-xs text-slate-500">
      medical solutions
    </div>
  </div>
</Link>

        {/* DESKTOP */}
        <div className="ml-2 hidden min-w-0 flex-1 items-center gap-4 xl:flex">

          {/* CATALOG */}
          <div className="relative" ref={panelRef}>
            <button
              onClick={() => setOpenCat(!openCat)}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm text-slate-900 shadow-sm hover:shadow-md transition"
            >
              {tField(text.navCatalog, lang)}
              <ChevronDown className="h-4 w-4" />
            </button>

            {openCat && (
  <div className="absolute left-0 mt-3 w-[700px] rounded-2xl border bg-white shadow-xl p-4">
    <div className="grid grid-cols-2 gap-3">
      {cats.map((c) => (
        <Link
          key={c.slug}
          href={`/${lang}/catalog/${c.slug}`}
          onClick={() => setOpenCat(false)}
          className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 transition"
        >
          {tField(c.title, lang)}
        </Link>
      ))}
    </div>
  </div>
)}
          </div>

          {/* SEARCH */}
          <form
            action={`/${lang}/catalog`}
            className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500/40"
          >
            <Search className="h-4 w-4 text-slate-500" />
            <input
              name="q"
              className="min-w-0 w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-500"
              placeholder={tField(text.search, lang)}
            />
          </form>

          {/* NAV */}
          <nav className="flex shrink-0 gap-4 text-sm text-slate-900">
  <Link href={`/${lang}/service`} className="hover:text-blue-600">
    {tField(text.navService, lang)}
  </Link>
  <Link href={`/${lang}/news`} className="hover:text-blue-600">
    {tField(text.navNews, lang)}
  </Link>
  <Link href={`/${lang}/about`} className="hover:text-blue-600">
    {tField(text.navAbout, lang)}
  </Link>
  <Link href={`/${lang}/contacts`} className="hover:text-blue-600">
    {tField(text.navContacts, lang)}
  </Link>
</nav>

          {/* LANG */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setOpenLang(!openLang)}
              className="rounded-xl bg-white/70 px-3 py-2 text-xs text-slate-800 hover:bg-white transition"
            >
              {lang.toUpperCase()}
            </button>

            {openLang && (
  <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg overflow-hidden">
    {(["ru", "kz", "en"] as Lang[]).map((l) => (
      <button
        key={l}
        onClick={() => setLang(l)}
        className="block w-full px-4 py-2 text-left text-slate-900 hover:bg-slate-100 transition"
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
)}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Закрыть меню" : "Открыть меню"}
          aria-controls="mobile-navigation"
          aria-expanded={mobile}
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-900 xl:hidden"
        >
          {mobile ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobile && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-104px)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-5 pt-4 shadow-lg xl:hidden">
          <div className="mx-auto max-w-6xl space-y-4">
            <form action={`/${lang}/catalog`} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:ring-2 focus-within:ring-blue-500/40">
              <Search className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
              <input name="q" type="search" aria-label={tField(text.search, lang)} placeholder={tField(text.search, lang)} className="h-12 min-w-0 w-full bg-transparent text-base text-slate-900 outline-none" />
            </form>
            <nav className="grid gap-1 text-base font-medium text-slate-900" aria-label="Основная навигация">
              {[
                ["catalog", text.navCatalog],
                ["service", text.navService],
                ["news", text.navNews],
                ["about", text.navAbout],
                ["contacts", text.navContacts],
              ].map(([segment, label]) => (
                <Link key={segment as string} href={`/${lang}/${segment}`} onClick={() => setMobile(false)} className="rounded-xl px-3 py-3 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                  {tField(label as typeof text.navCatalog, lang)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 border-t border-slate-200 pt-4" aria-label="Язык сайта">
              {(["ru", "kz", "en"] as Lang[]).map((l) => (
                <button key={l} type="button" onClick={() => { setLang(l); setMobile(false); }} aria-current={lang === l ? "true" : undefined} className={cn("min-h-11 rounded-xl px-4 text-sm font-semibold", lang === l ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800")}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
