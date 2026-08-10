import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Технология",
  description: "Как минеральная волокнистая структура MIRKO IZOBASALT помогает работать с теплом, акустикой и безопасностью здания.",
};

const benefits = [
  ["01", "Тепловой комфорт", "Структура материала помогает замедлять передачу тепла через ограждающие конструкции."],
  ["02", "Акустический комфорт", "Переплетение волокон помогает рассеивать звуковую энергию внутри материала."],
  ["03", "Высокие температуры", "Заявленная температурная стойкость составляет 600–800°C и уточняется по типу изделия."],
  ["04", "Энергоэффективность", "Правильно рассчитанный теплоизоляционный контур помогает снижать нагрузку на отопление и охлаждение."],
];

export default function TechnologyPage() {
  return (
    <PageShell>
      <section className="inner-hero technology-page-hero">
        <div className="inner-hero-copy"><span className="page-index">02 / ТЕХНОЛОГИЯ</span><span className="eyebrow eyebrow-light">Больше, чем теплоизоляция</span><h1>Теплее.<br />Тише.<br /><em>Разумнее.</em></h1><p>Технологии IZOBASALT помогают создавать тёплые, безопасные, тихие и энергоэффективные здания.</p></div>
        <div className="thermal-disc" aria-hidden="true"><span>800</span><i>°C</i><div /></div>
      </section>

      <section className="section science-section">
        <div className="section-heading heading-row"><div><span className="eyebrow">Принцип работы</span><h2>Воздух внутри.<br />Комфорт вокруг.</h2></div><p>Тонкие минеральные волокна формируют сложную структуру с множеством воздушных пространств. Именно эта структура определяет ключевые свойства материала.</p></div>
        <div className="science-diagram">
          <div className="science-layer hot"><span>Снаружи</span><strong>Жара / холод</strong></div>
          <div className="science-core">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}<span>Волокнистый слой</span></div>
          <div className="science-layer calm"><span>Внутри</span><strong>Комфорт</strong></div>
        </div>
      </section>

      <section className="benefit-stack">
        {benefits.map(([index, title, text]) => <article key={index}><span>{index}</span><h2>{title}</h2><p>{text}</p><i /></article>)}
      </section>

      <section className="section document-callout">
        <div><span className="eyebrow">Техническая честность</span><h2>Характеристики<br />должны быть доказаны.</h2></div>
        <div><p>Финальные значения теплопроводности, влагопоглощения, горючести, прочности и допустимого применения будут опубликованы после получения сертификатов и паспортов продукции.</p><Link className="button button-dark" href="/contact">Запросить документы <span>↗</span></Link></div>
      </section>
    </PageShell>
  );
}
