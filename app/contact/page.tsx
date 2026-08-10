import type { Metadata } from "next";
import { Suspense } from "react";
import { LeadForm } from "@/components/LeadForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Контакты", description: "Связаться с MIRKO IZOBASALT: телефон, WhatsApp, Telegram и заявка на расчёт." };

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-hero">
        <span className="page-index">05 / КОНТАКТЫ</span><span className="eyebrow eyebrow-light">На связи</span><h1>Расскажите<br />о вашем<br /><em>объекте.</em></h1><p>Ответим на вопросы, рассчитаем количество и подготовим предложение.</p>
      </section>
      <section className="contact-layout" id="request">
        <div className="contact-methods">
          <span className="eyebrow">Прямые контакты</span>
          <a href="tel:+998905315553"><span>Телефон</span><strong>+998 90 531 55 53</strong><i>↗</i></a>
          <a href="https://wa.me/998905315553"><span>WhatsApp</span><strong>Написать в WhatsApp</strong><i>↗</i></a>
          <a href="https://t.me/uygun0"><span>Telegram</span><strong>@uygun0</strong><i>↗</i></a>
          <a href="mailto:mircoizobazalt@gmail.com"><span>Электронная почта</span><strong>mircoizobazalt@gmail.com</strong><i>↗</i></a>
          <div className="location-card"><span>Зона поставок</span><strong>Узбекистан</strong><p>Приоритетное направление — Ферганская область. Точный адрес компании будет добавлен после подтверждения.</p></div>
        </div>
        <div className="request-panel"><span className="eyebrow">Заявка на расчёт</span><h2>Начнём<br />с нескольких деталей.</h2><Suspense fallback={<div className="form-loading">Форма загружается…</div>}><LeadForm /></Suspense></div>
      </section>
    </PageShell>
  );
}
