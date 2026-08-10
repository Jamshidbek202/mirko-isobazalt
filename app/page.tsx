import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BasaltScene } from "@/components/BasaltScene";
import { MaterialCalculator } from "@/components/MaterialCalculator";
import { PageShell } from "@/components/PageShell";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "MIRKO IZOBASALT — минеральная теплоизоляция в Узбекистане",
  description: "Базальтовая теплоизоляция MIRKO IZOBASALT для жилых, коммерческих и промышленных объектов. Приоритет поставок — Ферганская область.",
};

const facts = [
  ["80 · 100 · 120", "кг/м³ — варианты плотности"],
  ["600 × 1200", "мм — размер плиты"],
  ["5.04", "м² в одной пачке"],
  ["20+", "сотрудников компании"],
];

const applications = [
  { index: "01", title: "Фасады", text: "Тепловой контур для наружных стен и фасадных систем." },
  { index: "02", title: "Кровли", text: "Решения для утепления скатных и плоских кровель." },
  { index: "03", title: "Стены", text: "Комфорт внутри частных, коммерческих и общественных зданий." },
  { index: "04", title: "Перекрытия", text: "Тепло- и звукоизоляционный слой между помещениями." },
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-copy">
          <span className="eyebrow">Минеральная теплоизоляция · Узбекистан</span>
          <h1>Тепло<br />остаётся <em>внутри.</em></h1>
          <p>Базальтовые плиты MIRKO IZOBASALT помогают создавать тёплые, тихие и энергоэффективные здания.</p>
          <div className="hero-actions">
            <Link className="button button-green" href="/contact#request">Рассчитать проект <span>↗</span></Link>
            <Link className="text-link" href="/product">Изучить продукт <span>→</span></Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Упаковка теплоизоляции MIRKO IZOBASALT">
          <div className="hero-image-frame">
            <Image src="/assets/product-side.jpg" alt="Упакованная базальтовая теплоизоляция MIRKO IZOBASALT" fill sizes="(max-width: 820px) 95vw, 44vw" priority unoptimized />
          </div>
          <div className="hero-stamp">
            <span>Сделано для</span><strong>UZ</strong><span>климата</span>
          </div>
          <div className="hero-caption"><span>01</span> Надёжная оболочка здания</div>
        </div>

        <div className="hero-bottom">
          <span>Для проектов в Ферганской области</span>
          <span className="hero-scroll">Листайте, чтобы увидеть материал <i>↓</i></span>
        </div>
      </section>

      <section className="fact-strip" aria-label="Основные показатели">
        {facts.map(([value, label]) => (
          <div key={value}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <BasaltScene />

      <section className="section product-intro">
        <div className="section-heading">
          <span className="eyebrow">Один продукт · разные задачи</span>
          <h2>Точный формат.<br />Понятные характеристики.</h2>
        </div>
        <div className="product-intro-grid">
          <div className="product-photo-card">
            <Image src="/assets/product-packaging.jpg" alt="Пачки минеральной теплоизоляции MIRKO IZOBASALT" fill sizes="(max-width: 820px) 100vw, 55vw" unoptimized />
            <span className="photo-index">01 / PRODUCT</span>
          </div>
          <div className="spec-list">
            <div><span>Плотность</span><strong>80 / 100 / 120</strong><em>кг/м³</em></div>
            <div><span>Размер плиты</span><strong>600 × 1200</strong><em>мм</em></div>
            <div><span>Площадь пачки</span><strong>5.04</strong><em>м²</em></div>
            <div><span>Температурная стойкость</span><strong>600–800</strong><em>°C*</em></div>
            <p>*Точное значение зависит от типа изделия и подтверждается технической документацией.</p>
            <Link className="button button-outline" href="/product">Все характеристики <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section applications-section">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Области применения</span><h2>Один материал.<br />Весь контур здания.</h2></div>
          <p>Подбираем плотность и объём под задачу проекта. Окончательное применение подтверждается специалистом.</p>
        </div>
        <div className="application-grid">
          {applications.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <div className={`application-shape shape-${item.index}`} aria-hidden="true"><i /></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-teaser">
        <div className="technology-number">600<span>–800°C</span></div>
        <div>
          <span className="eyebrow eyebrow-light">Технология</span>
          <h2>Тепло — только<br />начало истории.</h2>
          <p>Волокнистая минеральная структура помогает одновременно работать с теплом, акустикой и пожарной безопасностью здания.</p>
          <Link className="text-link text-link-light" href="/technology">Как это работает <span>→</span></Link>
        </div>
        <div className="technology-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="section calculator-section" id="calculator">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Калькулятор материала</span><h2>Сколько нужно<br />для вашего объекта?</h2></div>
          <p>Укажите площадь и плотность. Мы рассчитаем ориентировочное количество пачек с технологическим запасом.</p>
        </div>
        <MaterialCalculator />
      </section>

      <section className="section projects-teaser">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Практика</span><h2>Проекты,<br />которые говорят сами.</h2></div>
          <Link className="text-link" href="/projects">Все проекты <span>→</span></Link>
        </div>
        <div className="project-preview-grid">
          {["01", "02", "03"].map((number) => (
            <article key={number}>
              <div className="project-placeholder"><span>{number}</span><i /></div>
              <div><strong>Кейс в подготовке</strong><span>Фото и параметры объекта будут добавлены</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-teaser">
        <div className="factory-logo-card">
          <Image src="/assets/mirko-logo.jpg" alt="Логотип MIRKO IZOBASALT" fill sizes="(max-width: 820px) 100vw, 50vw" unoptimized />
        </div>
        <div className="factory-copy">
          <span className="eyebrow eyebrow-light">MIRKO · 2025</span>
          <h2>Локальная команда.<br />Большая задача.</h2>
          <p>Мы развиваем доступность современной минеральной теплоизоляции в Узбекистане, уделяя особое внимание Ферганской области.</p>
          <div className="factory-stats"><div><strong>20+</strong><span>сотрудников</span></div><div><strong>UZ</strong><span>география поставок</span></div></div>
          <Link className="button button-light" href="/factory">О компании <span>→</span></Link>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Отзывы</span><h2>Опыт строителей<br />и владельцев.</h2></div>
          <p>Первые подтверждённые отзывы появятся здесь после модерации. Уже работали с MIRKO IZOBASALT? Поделитесь опытом.</p>
        </div>
        <div className="reviews-grid">
          <div className="reviews-empty">
            <span>“</span><strong>Здесь будет ваш<br />подтверждённый отзыв.</strong><p>Мы публикуем только реальные истории с понятным типом объекта.</p>
          </div>
          <ReviewForm />
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow eyebrow-light">Начнём с расчёта</span>
        <h2>Ваш объект.<br /><em>Наше тепло.</em></h2>
        <p>Расскажите о проекте — поможем определить объём материала и подготовим предложение.</p>
        <Link className="button button-light button-large" href="/contact#request">Обсудить проект <span>↗</span></Link>
        <div className="cta-wordmark">IZOBASALT</div>
      </section>
    </PageShell>
  );
}
