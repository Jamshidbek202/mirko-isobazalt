import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Политика конфиденциальности", description: "Политика обработки данных сайта MIRKO IZOBASALT." };

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="legal-page">
        <div className="legal-heading"><span className="page-index">LEGAL / 01</span><span className="eyebrow">Документ</span><h1>Политика<br />конфиденциальности</h1><p>Черновая редакция · 10 августа 2026</p></div>
        <div className="legal-content">
          <section><span>01</span><div><h2>Общие положения</h2><p>Настоящая политика описывает порядок обработки сведений, которые посетитель добровольно передаёт через сайт MIRKO IZOBASALT.</p></div></section>
          <section><span>02</span><div><h2>Какие данные используются</h2><p>Для подготовки ответа могут использоваться имя, телефон, регион, параметры объекта, текст сообщения и адрес электронной почты, если он указан пользователем.</p></div></section>
          <section><span>03</span><div><h2>Цель обработки</h2><p>Данные используются исключительно для ответа на обращение, подготовки расчёта, уточнения заказа и связи по инициативе пользователя.</p></div></section>
          <section><span>04</span><div><h2>Передача обращения</h2><p>На текущей версии сайта форма подготавливает письмо в почтовой программе пользователя. Сайт не хранит отправленные через неё сведения в собственной базе данных.</p></div></section>
          <section><span>05</span><div><h2>Отзывы</h2><p>Отзыв публикуется только после проверки. Перед публикацией компания может связаться с автором для подтверждения опыта использования продукции.</p></div></section>
          <section><span>06</span><div><h2>Контакты</h2><p>По вопросам обработки данных можно написать на <a href="mailto:mircoizobazalt@gmail.com">mircoizobazalt@gmail.com</a>.</p></div></section>
          <div className="legal-note">Юридическое наименование, точный адрес и финальная редакция документа будут обновлены после получения регистрационных данных компании.</div>
        </div>
      </section>
    </PageShell>
  );
}
