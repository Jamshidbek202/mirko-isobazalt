"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { useLanguage } from "./LanguageContext";

export function LeadForm() {
  const { language, t } = useLanguage();
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
        <label><span>{t("form.name")}</span><input name="name" required placeholder={t("form.namePlaceholder")} /></label>
        <label><span>{t("form.phone")}</span><input name="phone" required type="tel" placeholder="+998 __ ___ __ __" /></label>
        <label><span>{t("form.region")}</span><input name="region" placeholder={t("form.regionPlaceholder")} /></label>
        <label><span>{t("form.project")}</span><select key={language} name="project" defaultValue={t("project.house")}><option>{t("project.house")}</option><option>{t("project.apartment")}</option><option>{t("project.commercial")}</option><option>{t("project.industrial")}</option><option>{t("project.other")}</option></select></label>
      </div>
      <label><span>{t("form.message")}</span><textarea name="message" rows={4} placeholder={t("form.messagePlaceholder")} /></label>
      <div className="form-submit">
        <button className="button button-green" type="submit">{t("form.submit")} <span>↗</span></button>
        <p><a href="/privacy">{t("form.consent")}</a></p>
      </div>
    </form>
  );
}
