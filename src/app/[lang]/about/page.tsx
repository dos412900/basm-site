// src/app/[lang]/about/page.tsx
import React from 'react';
import { Metadata } from 'next';

// Тип пропсов страницы
interface PageProps {
  params: {
    lang: string;
  };
}

// Доступные языки
const SUPPORTED_LANGS = ['en', 'kk', 'ru'] as const;

// Генерация статических параметров
export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

// Динамические метаданные страницы
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = SUPPORTED_LANGS.includes(params.lang as any) ? params.lang : 'en';
  return {
    title: `О сайте (About) - язык ${lang}`,
    description: `Описание страницы About на языке ${lang}`,
  };
}

// Основная страница
export default async function AboutPage({ params }: PageProps) {
  const lang = SUPPORTED_LANGS.includes(params.lang as any) ? params.lang : 'en';

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Страница About</h1>
      <p>Текущий язык: {lang}</p>
      <p>Здесь можно добавить информацию о компании или проекте.</p>

      <ul>
        {SUPPORTED_LANGS.map((l) => (
          <li key={l}>
            <a href={`/${l}/about`}>Перейти на About ({l})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}