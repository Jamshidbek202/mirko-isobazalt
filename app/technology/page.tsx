import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Технология",
  description: "Как волокнистая структура MIRKO IZOBASALT работает с теплом, звуком и температурной нагрузкой.",
};

const benefits = [
  { index: "01", label: "Тепловой контур", title: "Меньше теплопотерь", text: "Воздух между минеральными волокнами замедляет теплообмен через стены, кровлю и перекрытия.", metric: "50 мм", note: "толщина плиты" },
  { index: "02", label: "Акустика", title: "Тише внутри", text: "Разнонаправленная структура волокон рассеивает часть звуковой энергии внутри материала и дополняет конструкцию перегородки.", metric: "3×", note: "варианта плотности" },
  { index: "03", label: "Температура", title: "Минеральная основа", text: "Материал рассчитан на работу при повышенной температуре. Допустимый режим всегда сверяется с паспортом конкретной партии.", metric: "600–800°C*", note: "заявленный диапазон" },
  { index: "04", label: "Ресурс", title: "Расчёт на годы", text: "При корректном проектировании, монтаже и защите конструкции заявленный срок службы материала составляет 50 лет.", metric: "50 лет", note: "срок службы" },
];

export default function TechnologyPage() {
  return (
    <PageShell>
      <section className="inner-hero technology-page-hero technology-page-hero-v2">
        <div className="inner-hero-copy">
          <span className="page-index">02 / ТЕХНОЛОГИЯ</span>
          <span className="eyebrow eyebrow-light">Инженерия минеральных волокон</span>
          <h1>Тепло<br />под<br /><em>контролем.</em></h1>
          <p>Не магия и не абстракция: волокнистая структура удерживает воздух, снижает передачу тепла и помогает конструкции работать с шумом.</p>
        </div>
        <div className="thermal-lab" aria-hidden="true">
          <div className="thermal-lab-ring ring-one" /><div className="thermal-lab-ring ring-two" />
          <div className="thermal-lab-core"><span>600</span><small>–800°C*</small></div>
          <div className="thermal-lab-caption">Заявленная температурная стойкость<br />уточняется по паспорту изделия</div>
        </div>
      </section>

      <section className="section science-section science-section-v2">
        <div className="section-heading heading-row">
          <div><span className="eyebrow">Как работает плита</span><h2>Три слоя<br />одного процесса.</h2></div>
          <p>Изоляция не создаёт тепло. Она замедляет его передачу между улицей и помещением, помогая зданию дольше сохранять рассчитанный микроклимат.</p>
        </div>

        <div className="science-diagram science-diagram-v2">
          <article className="science-step science-outside">
            <span className="science-step-index">01 / СНАРУЖИ</span>
            <div className="temperature-scale"><i /><i /><i /><i /><i /></div>
            <strong>Жара<br />или холод</strong>
            <p>Температурная нагрузка действует на внешний контур здания.</p>
          </article>
          <article className="science-step science-fibers">
            <span className="science-step-index">02 / ВНУТРИ ПЛИТЫ</span>
            <div className="fiber-network" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} />)}</div>
            <strong>Волокна +<br />неподвижный воздух</strong>
            <p>Сложная структура формирует множество малых воздушных пространств и замедляет перенос тепла.</p>
            <div className="science-core-spec"><span>50</span><small>мм</small></div>
          </article>
          <article className="science-step science-inside">
            <span className="science-step-index">03 / ВНУТРИ</span>
            <div className="comfort-pulse"><i /><i /><i /></div>
            <strong>Стабильнее<br />и тише</strong>
            <p>Помещение медленнее теряет тепло зимой и нагревается летом.</p>
          </article>
        </div>
        <p className="science-caption">Схема объясняет принцип работы материала и не заменяет теплотехнический расчёт конструкции.</p>
      </section>

      <section className="technology-benefits">
        <div className="technology-benefits-heading"><span className="eyebrow eyebrow-light">Что получает проект</span><h2>Понятные свойства.<br />Понятная роль.</h2></div>
        <div className="technology-benefit-grid">
          {benefits.map((item) => (
            <article key={item.index}>
              <div className="benefit-card-top"><span>{item.index}</span><small>{item.label}</small></div>
              <strong className="benefit-metric">{item.metric}</strong><small className="benefit-note">{item.note}</small>
              <div className="benefit-card-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-spec-band" aria-label="Ключевые характеристики">
        <div><span>Толщина</span><strong>50 мм</strong></div>
        <div><span>Срок службы</span><strong>50 лет</strong></div>
        <div><span>Плотность</span><strong>80 / 100 / 120</strong><small>кг/м³</small></div>
        <div><span>Формат</span><strong>600 × 1200</strong><small>мм</small></div>
      </section>

      <section className="section document-callout document-callout-v2">
        <div><span className="eyebrow">Проектная точность</span><h2>Подбираем<br />не на глаз.</h2></div>
        <div><p>Плотность и область применения определяются конструкцией объекта. Для финального решения запросите паспорт партии, сертификаты и консультацию специалиста.</p><Link className="button button-dark" href="/contact">Запросить консультацию <span>↗</span></Link></div>
      </section>
    </PageShell>
  );
}
