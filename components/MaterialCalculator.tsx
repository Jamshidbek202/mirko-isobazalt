"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function MaterialCalculator({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const [area, setArea] = useState(50);
  const [density, setDensity] = useState("100");
  const packs = useMemo(() => Math.max(1, Math.ceil((Math.max(0, area) * 1.08) / 5.04)), [area]);
  const coverage = (packs * 5.04).toFixed(2);
  const quoteHref = `/contact?area=${encodeURIComponent(area)}&density=${density}&packs=${packs}#request`;

  return (
    <div className={`calculator ${compact ? "calculator-compact" : ""}`}>
      <div className="calculator-form">
        <label>
          <span>{t("calc.area")}</span>
          <span className="input-with-unit">
            <input type="number" min="1" max="100000" value={area} onChange={(event) => setArea(Number(event.target.value))} />
            <em>м²</em>
          </span>
        </label>
        <label>
          <span>{t("calc.density")}</span>
          <select value={density} onChange={(event) => setDensity(event.target.value)}>
            <option value="80">80 кг/м³</option>
            <option value="100">100 кг/м³</option>
            <option value="120">120 кг/м³</option>
          </select>
        </label>
      </div>
      <div className="calculator-result">
        <span>{t("calc.volume")}</span>
        <strong>{packs}<small> {t("calc.packs")}</small></strong>
        <p>{coverage} {t("calc.reserve")}</p>
        <a className="button button-green" href={quoteHref}>{t("calc.price")} <span>↗</span></a>
        <small className="result-note">{t("calc.note")}</small>
      </div>
    </div>
  );
}
