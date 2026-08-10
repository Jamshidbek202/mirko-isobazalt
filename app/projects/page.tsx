import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Проекты", description: "Будущая библиотека реализованных объектов с теплоизоляцией MIRKO IZOBASALT." };

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="inner-hero projects-hero">
        <div className="inner-hero-copy"><span className="page-index">03 / ПРОЕКТЫ</span><span className="eyebrow">Опыт на объектах</span><h1>Результат<br />виден в<br /><em>деталях.</em></h1><p>Здесь появятся реальные кейсы с фотографиями, задачами, выбранной плотностью и объёмом материала.</p></div>
        <div className="blueprint" aria-hidden="true"><i /><i /><i /><span>CASE STUDIES</span></div>
      </section>
      <section className="section case-library">
        <div className="section-heading heading-row"><div><span className="eyebrow">Библиотека кейсов</span><h2>Первые проекты<br />готовятся к публикации.</h2></div><p>Мы не используем вымышленные объекты. Раздел будет наполнен после получения фотографий и подтверждённых данных.</p></div>
        <div className="case-grid">
          {["01", "02", "03", "04"].map((number) => <article key={number}><div className="case-placeholder"><span>{number}</span><i /><b>Фото проекта</b></div><div><span>Объект будет добавлен</span><strong>Кейс в подготовке</strong><p>Регион · тип конструкции · объём</p></div></article>)}
        </div>
      </section>
      <section className="project-submit"><div><span className="eyebrow eyebrow-light">Уже использовали IZOBASALT?</span><h2>Покажите свой объект.</h2><p>Отправьте фотографии и краткое описание. После проверки мы оформим проект как полноценный кейс.</p></div><Link className="button button-light" href="mailto:mircoizobazalt@gmail.com?subject=Проект%20MIRKO%20IZOBASALT">Отправить материалы <span>↗</span></Link></section>
    </PageShell>
  );
}
