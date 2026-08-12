import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialCalculator } from "@/components/MaterialCalculator";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Базальтовая плита",
  description: "Характеристики базальтовой теплоизоляции MIRKO IZOBASALT: толщина 50 мм, срок службы 50 лет, плотность 80, 100 и 120 кг/м³.",
};

const specs = [
  ["Плотность", "80 / 100 / 120 кг/м³"],
  ["Формат плиты", "600 × 1200 мм"],
  ["Площадь пачки", "5.04 м²"],
  ["Толщина плиты", "50 мм"],
  ["Срок службы", "50 лет"],
  ["Температурная стойкость", "600–800°C*"],
  ["Цена", "По запросу"],
];

export default function ProductPage() {
  return (
    <PageShell>
      <section className="inner-hero product-hero">
        <div className="inner-hero-copy">
          <span className="page-index">01 / ПРОДУКТ</span>
          <span className="eyebrow">Минеральная теплоизоляция</span>
          <h1>Плита,<br />которая держит<br /><em>контур.</em></h1>
          <p>Один продукт в трёх вариантах плотности — для подбора под конкретную задачу здания.</p>
          <Link className="button button-green" href="#calculate">Рассчитать количество <span>↓</span></Link>
        </div>
        <div className="product-hero-visual">
          <Image src="/assets/product-six-views.jpg" alt="Упаковка MIRKO IZOBASALT со всех сторон" fill sizes="(max-width: 820px) 100vw, 50vw" priority unoptimized />
          <div className="floating-spec spec-one"><strong>80–120</strong><span>кг/м³</span></div>
          <div className="floating-spec spec-two"><strong>5.04</strong><span>м² / пачка</span></div>
        </div>
      </section>

      <section className="section product-details">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Спецификация</span><h2>Главное —<br />в цифрах.</h2></div>
          <p>Собрали основные параметры в одном месте. Точная цена и рекомендации по применению подтверждаются специалистом под конкретный объект.</p>
        </div>
        <div className="spec-table">
          {specs.map(([name, value], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{value}</em></div>)}
        </div>
        <p className="technical-note">*Температурная стойкость зависит от типа изделия. Финальное значение проверяется по сертификату и паспорту конкретной партии.</p>
      </section>

      <section className="product-cutaway">
        <div className="cutaway-copy"><span className="eyebrow eyebrow-light">Структура</span><h2>Миллионы волокон.<br />Одна цель.</h2><p>Минеральная волокнистая структура удерживает воздух внутри материала и помогает замедлять передачу тепла.</p></div>
        <div className="fiber-field" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <i key={index} />)}</div>
      </section>

      <section className="section use-cases">
        <div className="section-heading"><span className="eyebrow">Применение</span><h2>Для основных частей здания.</h2></div>
        <div className="use-case-list">
          <div><span>01</span><strong>Наружные стены и фасады</strong><p>Формирование непрерывного теплоизоляционного слоя.</p></div>
          <div><span>02</span><strong>Кровля и чердачные зоны</strong><p>Снижение теплопотерь через верхний контур здания.</p></div>
          <div><span>03</span><strong>Перегородки и перекрытия</strong><p>Дополнительная работа с теплом и акустическим комфортом.</p></div>
          <div><span>04</span><strong>Технические решения</strong><p>Применение подтверждается проектировщиком под условия объекта.</p></div>
        </div>
      </section>

      <section className="section calculator-section calculator-on-page" id="calculate">
        <div className="section-heading heading-row"><div><span className="eyebrow">Расчёт</span><h2>От площади<br />к количеству.</h2></div><p>Расчёт включает 8% запаса и помогает подготовить первичную заявку.</p></div>
        <MaterialCalculator />
      </section>
    </PageShell>
  );
}
