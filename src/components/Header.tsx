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
          <div className="hidden sm:flex gap-4">
            <span>info@bas-m.kz</span>
            <span>+7 (700) 110 0631</span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">

        {/* LOGO */}
        <Link
  href={`/${lang}`}
  className="flex items-center gap-3 group"
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
      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="leading-tight">
    <div className="text-sm font-semibold text-slate-900">
      БАС-М
    </div>
    <div className="text-xs text-slate-500">
      medical solutions
    </div>
  </div>
</Link>

        {/* DESKTOP */}
        <div className="ml-2 hidden md:flex flex-1 items-center gap-4">

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
            className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500/40"
          >
            <Search className="h-4 w-4 text-slate-500" />
            <input
              name="q"
              className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-500"
              placeholder={tField(text.search, lang)}
            />
          </form>

          {/* NAV */}
          <nav className="flex gap-4 text-sm text-slate-900">
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
          onClick={() => setMobile(!mobile)}
          className="ml-auto md:hidden"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobile && (
        <div className="md:hidden border-t bg-white p-4 space-y-2">
          <Link href={`/${lang}/catalog`} className="block">
            {tField(text.navCatalog, lang)}
          </Link>
          <Link href={`/${lang}/service`} className="block">
            {tField(text.navService, lang)}
          </Link>
          <Link href={`/${lang}/contacts`} className="block">
            {tField(text.navContacts, lang)}
          </Link>
        </div>
      )}
    </header>
  );
}