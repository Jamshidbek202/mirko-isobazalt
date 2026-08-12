import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Политика конфиденциальности", description: "Как сайт MIRKO IZOBASALT обрабатывает обращения и контактные данные пользователей." };

const sections = [
  { id: "general", index: "01", title: "Общие положения", text: "Политика объясняет, какие сведения посетитель добровольно передаёт через сайт MIRKO IZOBASALT и как они используются при обработке обращения." },
  { id: "data", index: "02", title: "Какие данные используются", text: "Имя, телефон, регион, параметры объекта, текст сообщения и адрес электронной почты — только если пользователь указал их самостоятельно." },
  { id: "purpose", index: "03", title: "Цель обработки", text: "Подготовка ответа, предварительного расчёта, уточнение заказа и обратная связь по инициативе пользователя. Данные не используются для автоматического профилирования." },
  { id: "transfer", index: "04", title: "Как отправляется обращение", text: "Текущая версия формы подготавливает письмо в почтовой программе пользователя. Сайт не сохраняет содержимое формы в собственной базе данных." },
  { id: "reviews", index: "05", title: "Отзывы и публикация", text: "Отзыв публикуется только после проверки. Компания может связаться с автором, чтобы подтвердить опыт использования продукта и согласовать публичное имя." },
  { id: "rights", index: "06", title: "Ваш выбор", text: "Вы можете не отправлять форму и связаться с компанией напрямую по телефону, WhatsApp, Telegram или электронной почте. Также можно запросить уточнение или удаление ранее переданной информации." },
  { id: "contact", index: "07", title: "Контакт по вопросам данных", text: "По вопросам обработки обращений напишите на mircoizobazalt@gmail.com или позвоните по номеру +998 90 531 55 53." },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="legal-hero-v2">
        <div className="legal-hero-copy">
          <span className="page-index">LEGAL / 01</span>
          <span className="eyebrow eyebrow-light">Прозрачность данных</span>
          <h1>Коротко.<br />Понятно.<br /><em>Без скрытого.</em></h1>
          <p>Мы собираем только ту информацию, которую вы сами передаёте для расчёта или ответа на вопрос.</p>
        </div>
        <aside className="legal-status-card">
          <span className="legal-status">ТЕКУЩАЯ РЕДАКЦИЯ</span>
          <strong>12.08.2026</strong>
          <p>Документ действует для контактных форм и отзывов на сайте MIRKO IZOBASALT.</p>
          <div className="legal-quick-facts"><span><i />Без регистрации</span><span><i />Без рекламной рассылки</span><span><i />Без базы заявок на сайте</span></div>
        </aside>
      </section>

      <section className="legal-overview" aria-label="Краткое описание политики">
        <article><span>01</span><strong>Что получаем</strong><p>Только данные из вашего обращения.</p></article>
        <article><span>02</span><strong>Зачем</strong><p>Чтобы ответить и подготовить расчёт.</p></article>
        <article><span>03</span><strong>Где хранится</strong><p>Письмо остаётся в почтовой переписке.</p></article>
        <article><span>04</span><strong>Как связаться</strong><p>Напишите нам по указанной почте.</p></article>
      </section>

      <section className="legal-document-v2">
        <aside className="legal-toc">
          <span className="eyebrow">Содержание</span>
          <nav aria-label="Разделы политики">
            {sections.map((section) => <a href={`#${section.id}`} key={section.id}><span>{section.index}</span>{section.title}</a>)}
          </nav>
          <a className="legal-email" href="mailto:mircoizobazalt@gmail.com"><span>Вопрос о данных</span><strong>mircoizobazalt@gmail.com</strong></a>
        </aside>
        <div className="legal-content-v2">
          {sections.map((section) => (
            <article id={section.id} key={section.id}>
              <span>{section.index}</span><div><h2>{section.title}</h2><p>{section.text}</p>{section.id === "contact" && <p><a href="mailto:mircoizobazalt@gmail.com">mircoizobazalt@gmail.com</a> · <a href="tel:+998905315553">+998 90 531 55 53</a></p>}</div>
            </article>
          ))}
          <div className="legal-note-v2"><span>Важно</span><p>Юридическое наименование и точный адрес будут добавлены после подтверждения регистрационных данных компании. До обновления документа все обращения обрабатываются через указанные прямые контакты.</p></div>
        </div>
      </section>
    </PageShell>
  );
}
