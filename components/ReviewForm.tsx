"use client";

import { type FormEvent } from "react";

export function ReviewForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Отзыв о MIRKO IZOBASALT");
    const body = encodeURIComponent([
      `Имя / компания: ${data.get("author")}`,
      `Объект: ${data.get("project")}`,
      `Оценка: ${data.get("rating")} из 5`,
      "",
      String(data.get("review")),
    ].join("\n"));
    window.location.href = `mailto:mircoizobazalt@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="review-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Имя или компания</span><input required name="author" placeholder="Ваше имя" /></label>
        <label><span>Тип объекта</span><input name="project" placeholder="Например, частный дом" /></label>
      </div>
      <label><span>Оценка</span><select name="rating" defaultValue="5"><option value="5">5 — отлично</option><option value="4">4 — хорошо</option><option value="3">3 — нормально</option><option value="2">2 — есть замечания</option><option value="1">1 — плохо</option></select></label>
      <label><span>Ваш отзыв</span><textarea required name="review" rows={5} placeholder="Расскажите, где использовали материал и что было важно" /></label>
      <button className="button button-dark" type="submit">Отправить на модерацию <span>↗</span></button>
      <small>Отзыв отправится через вашу почтовую программу и появится на сайте после проверки.</small>
    </form>
  );
}
