"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";

export function LeadForm() {
  const searchParams = useSearchParams();
  const projectHint = useMemo(() => {
    const area = searchParams.get("area");
    const density = searchParams.get("density");
    const packs = searchParams.get("packs");
    return area && density && packs ? `Площадь: ${area} м²; плотность: ${density} кг/м³; ориентир: ${packs} пачек.` : "";
  }, [searchParams]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Заявка с сайта MIRKO IZOBASALT");
    const body = encodeURIComponent([
      `Имя: ${data.get("name")}`,
      `Телефон: ${data.get("phone")}`,
      `Регион: ${data.get("region")}`,
      `Объект: ${data.get("project")}`,
      `Комментарий: ${data.get("message")}`,
      projectHint,
    ].filter(Boolean).join("\n"));
    window.location.href = `mailto:mircoizobazalt@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      {projectHint && <div className="form-hint">Расчёт прикреплён: {projectHint}</div>}
      <div className="form-grid">
        <label><span>Ваше имя</span><input name="name" required placeholder="Как к вам обращаться?" /></label>
        <label><span>Телефон</span><input name="phone" required type="tel" placeholder="+998 __ ___ __ __" /></label>
        <label><span>Регион</span><input name="region" placeholder="Например, Фергана" /></label>
        <label><span>Тип объекта</span><select name="project" defaultValue="Частный дом"><option>Частный дом</option><option>Многоквартирный дом</option><option>Коммерческий объект</option><option>Промышленный объект</option><option>Другое</option></select></label>
      </div>
      <label><span>О проекте</span><textarea name="message" rows={4} placeholder="Площадь, нужная толщина, сроки или другие детали" /></label>
      <div className="form-submit">
        <button className="button button-green" type="submit">Отправить заявку <span>↗</span></button>
        <p>Нажимая кнопку, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a>.</p>
      </div>
    </form>
  );
}
