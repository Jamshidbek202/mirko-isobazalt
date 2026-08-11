import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroExperience } from "@/components/HeroExperience";
import { MaterialCalculator } from "@/components/MaterialCalculator";
import { PageShell } from "@/components/PageShell";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "MIRKO IZOBASALT — минеральная теплоизоляция в Узбекистане",
  description: "Базальтовая теплоизоляция MIRKO IZOBASALT для жилых, коммерческих и промышленных объектов. Приоритет поставок — Ферганская область.",
};

const facts = [
  ["2025", "год основания в Узбекистане"],
  ["20+", "специалистов в команде"],
  ["3", "плотности под разные задачи"],
  ["FGR", "приоритетный регион поставок"],
];

const applications = [
  { index: "01", title: "Фасады", text: "Тепловой контур для наружных стен и фасадных систем." },
  { index: "02", title: "Кровли", text: "Решения для утепления скатных и плоских кровель." },
  { index: "03", title: "Стены", text: "Комфорт внутри частных, коммерческих и общественных зданий." },
  { index: "04", title: "Перекрытия", text: "Тепло- и звукоизоляционный слой между помещениями." },
];

export default function Home() {
  return (
    <PageShell headerOverlay>
      <HeroExperience />

      <section className="fact-strip" aria-label="Основные показатели">
        {facts.map(([value, label]) => (
          <div key={value}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="product-reveal" id="product-study">
        <div className="product-reveal-heading">
          <div>
            <span className="eyebrow">Один продукт · разные задачи</span>
            <h2>Точность<br /><em>в каждой грани.</em></h2>
          </div>
          <p>Упаковка защищает минеральные плиты при хранении и перевозке. Все рабочие параметры — без лишнего шума, на одном продукте.</p>
        </div>

        <div className="product-views-card">
          <div className="product-views-image">
            <Image src="/assets/product-six-views.jpg" alt="MIRKO IZOBASALT со всех сторон: спереди, сзади, сверху, снизу, слева и справа" fill sizes="100vw" priority unoptimized />
          </div>
          <span className="views-caption views-caption-top">PRODUCT STUDY / 06 VIEWS</span>
          <span className="views-caption views-caption-bottom">MIRKO IZOBASALT · FERGANA / UZ</span>
        </div>

        <div className="product-data-grid">
          <article><span>01 / Плотность</span><strong>80 · 100 · 120</strong><small>кг/м³</small></article>
          <article><span>02 / Формат</span><strong>600 × 1200</strong><small>мм</small></article>
          <article><span>03 / В пачке</span><strong>5.04</strong><small>м²</small></article>
          <article className="product-data-action"><p>Подробные характеристики, области применения и рекомендации по подбору.</p><Link className="button button-dark" href="/product">Открыть продукт <span>↗</span></Link></article>
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

      <section className="project-journal">
        <div className="project-journal-image">
          <Image src="/assets/product-side.jpg" alt="Упакованная теплоизоляция MIRKO IZOBASALT на производственной площадке" fill sizes="(max-width: 820px) 100vw, 56vw" unoptimized />
          <span>FIELD NOTES · 01</span>
        </div>
        <div className="project-journal-copy">
          <span className="eyebrow eyebrow-light">Практика</span>
          <h2>Материал для<br /><em>реальных объектов.</em></h2>
          <p>Формируем библиотеку объектов с фотографиями, задачами, плотностью материала и фактическим объёмом поставки.</p>
          <Link className="button button-light" href="/projects">Открыть проекты <span>→</span></Link>
          <div className="journal-meta"><span>Фасады</span><span>Кровли</span><span>Стены</span><span>Перекрытия</span></div>
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
