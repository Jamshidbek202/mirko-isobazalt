"use client";

import { type FormEvent } from "react";
import { useLanguage } from "./LanguageContext";

export function ReviewForm() {
  const { t } = useLanguage();
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
        <label><span>{t("review.author")}</span><input required name="author" placeholder={t("form.namePlaceholder")} /></label>
        <label><span>{t("review.object")}</span><input name="project" placeholder={t("project.house")} /></label>
      </div>
      <label><span>{t("review.rating")}</span><select name="rating" defaultValue="5"><option value="5">5 / 5</option><option value="4">4 / 5</option><option value="3">3 / 5</option><option value="2">2 / 5</option><option value="1">1 / 5</option></select></label>
      <label><span>{t("review.text")}</span><textarea required name="review" rows={5} placeholder={t("review.text")} /></label>
      <button className="button button-dark" type="submit">{t("review.submit")} <span>↗</span></button>
      <small>{t("review.note")}</small>
    </form>
  );
}
