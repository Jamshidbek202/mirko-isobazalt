import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "О компании и производстве", description: "MIRKO IZOBASALT — команда из 20+ сотрудников, развивающая минеральную теплоизоляцию в Узбекистане." };

export default function FactoryPage() {
  return (
    <PageShell>
      <section className="inner-hero factory-hero">
        <div className="inner-hero-copy"><span className="page-index">04 / О КОМПАНИИ</span><span className="eyebrow eyebrow-light">MIRKO · 2025</span><h1>Производим<br />тепло<br /><em>здесь.</em></h1><p>Молодая команда с практичной целью: сделать современную минеральную теплоизоляцию доступнее для проектов в Узбекистане.</p></div>
        <div className="factory-hero-logo"><Image src="/assets/mirko-logo.jpg" alt="MIRKO IZOBASALT" fill sizes="(max-width: 820px) 100vw, 50vw" priority unoptimized /></div>
      </section>
      <section className="company-stats"><div><strong>2025</strong><span>год основания</span></div><div><strong>20+</strong><span>сотрудников</span></div><div><strong>UZ</strong><span>страна поставок</span></div><div><strong>3</strong><span>варианта плотности</span></div></section>
      <section className="section company-story"><div className="section-heading"><span className="eyebrow">Зачем мы здесь</span><h2>Фергане нужен<br />свой сильный материал.</h2></div><div className="story-columns"><p>Строительный рынок региона растёт, а качественный тепловой контур становится базовой необходимостью — летом и зимой.</p><p>MIRKO IZOBASALT сосредоточен на понятном продукте, стабильной поставке и прямом общении с теми, кто проектирует и строит.</p></div></section>
      <section className="process-section"><div className="section-heading"><span className="eyebrow eyebrow-light">Подход к качеству</span><h2>От партии<br />до объекта.</h2></div><div className="process-list"><div><span>01</span><strong>Параметры</strong><p>Плотность, формат и комплектация фиксируются для заказа.</p></div><div><span>02</span><strong>Упаковка</strong><p>Материал защищён для хранения и перевозки.</p></div><div><span>03</span><strong>Расчёт</strong><p>Количество подбирается под площадь и запас проекта.</p></div><div><span>04</span><strong>Связь</strong><p>Команда остаётся доступной на этапе поставки.</p></div></div></section>
      <section className="section factory-note"><div><span className="eyebrow">Данные дополняются</span><h2>Покажем производство<br />без лишних слов.</h2></div><div><p>Точный адрес, фотографии площадки, информация о производственной линии и документация будут добавлены после подтверждения компанией.</p><Link className="button button-dark" href="/contact">Связаться с командой <span>↗</span></Link></div></section>
    </PageShell>
  );
}
