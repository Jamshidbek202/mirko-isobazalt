"use client";

import Link from "next/link";
import Image from "next/image";
import { type CSSProperties, type ElementType, useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (from: number, to: number, amount: number) => from + (to - from) * amount;

function orbitAngle(progress: number) {
  if (progress < 0.24) return mix(192, 130, progress / 0.24);
  if (progress < 0.5) return mix(130, 78, (progress - 0.24) / 0.26);
  if (progress < 0.76) return mix(78, 192, (progress - 0.5) / 0.26);
  return mix(192, 266, (progress - 0.76) / 0.24);
}

export function HeroExperience() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const modelRef = useRef<HTMLElement>(null);
  const wheelLockRef = useRef(false);
  const wheelUnlockTimerRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [modelReady, setModelReady] = useState(false);
  const [interactive3D, setInteractive3D] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const update = () => {
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      setInteractive3D(desktop.matches && !connection?.saveData);
    };
    update();
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!interactive3D) return;
    let active = true;
    const model = modelRef.current as (HTMLElement & { loaded?: boolean }) | null;
    const markReady = () => {
      if (active) setModelReady(true);
    };
    model?.addEventListener("load", markReady);
    void import("@google/model-viewer").then(() => {
      if (model?.loaded) markReady();
    });
    return () => {
      active = false;
      model?.removeEventListener("load", markReady);
    };
  }, [interactive3D]);

  useEffect(() => {
    const heroSection = sectionRef.current;

    let frame = 0;
    let target = 0;
    let current = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      current += (target - current) * (reduced ? 1 : 0.1);
      if (Math.abs(target - current) < 0.0004) current = target;
      setProgress(current);
      frame = current === target ? 0 : window.requestAnimationFrame(animate);
    };

    const measure = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      target = clamp(-rect.top / Math.max(1, rect.height - window.innerHeight));
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    const chapterStops = [0, 0.255, 0.515, 0.775, 1];
    const releaseWheelLockAfterGesture = () => {
      if (wheelUnlockTimerRef.current) window.clearTimeout(wheelUnlockTimerRef.current);
      wheelUnlockTimerRef.current = window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 220);
    };

    const navigateChapter = (event: WheelEvent) => {
      const section = heroSection;
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      if (!section || reduced || !finePointer || Math.abs(event.deltaY) < 4) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const sectionTop = window.scrollY + rect.top;
      const currentProgress = clamp((window.scrollY - sectionTop) / distance);
      const direction = Math.sign(event.deltaY);
      const leavingStart = direction < 0 && currentProgress <= 0.015;
      const leavingEnd = direction > 0 && currentProgress >= 0.985;

      if (leavingStart || leavingEnd) return;

      event.preventDefault();
      releaseWheelLockAfterGesture();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const targetProgress = direction > 0
        ? chapterStops.find((stop) => stop > currentProgress + 0.045)
        : chapterStops.findLast((stop) => stop < currentProgress - 0.045);

      if (targetProgress === undefined) {
        wheelLockRef.current = false;
        return;
      }

      window.scrollTo({
        top: sectionTop + targetProgress * distance,
        behavior: "smooth",
      });
    };

    heroSection?.addEventListener("wheel", navigateChapter, { passive: false });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      heroSection?.removeEventListener("wheel", navigateChapter);
      if (wheelUnlockTimerRef.current) window.clearTimeout(wheelUnlockTimerRef.current);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const phase = progress < 0.24 ? 0 : progress < 0.5 ? 1 : progress < 0.76 ? 2 : 3;
  const theta = orbitAngle(progress);
  const phi = 76 - Math.sin(progress * Math.PI) * 11;
  const radius = 92 - Math.sin(progress * Math.PI) * 9;

  const style = {
    "--mv-progress": progress,
  } as CSSProperties;

  const ModelViewer = "model-viewer" as ElementType;

  return (
    <section
      className="model-hero"
      data-phase={phase}
      ref={sectionRef}
      aria-labelledby="hero-title"
    >
      <div className="model-hero-sticky" style={style}>
        <div className="mv-atmosphere" aria-hidden="true">
          <div className="mv-aurora" />
          <div className="mv-grid" />
          <div className="mv-house"><i /><i /><i /></div>
          {Array.from({ length: 18 }, (_, index) => <i className={`mv-dust mv-dust-${index + 1}`} key={index} />)}
        </div>

        <div className="mv-topline" aria-hidden="true">
          <span><i /> {t("hero.location")}</span>
          <span>INTERACTIVE PRODUCT STUDY · 01</span>
        </div>

        <div className={`mv-stage ${modelReady ? "is-ready" : ""} ${interactive3D ? "has-interactive-model" : "uses-static-model"}`}>
          <div className="mv-halo" aria-hidden="true"><i /><i /><i /></div>
          <div className="mv-static-product" aria-hidden="true"><Image src="/assets/product-six-views.jpg" alt="" fill sizes="(max-width: 820px) 92vw, 46vw" priority unoptimized /></div>
          {interactive3D && <>
            <div className="mv-loader" aria-hidden="true"><span>M</span><small>{t("hero.loading")}</small></div>
            <ModelViewer
              ref={modelRef}
              className="mv-model"
              src="/assets/mirko-izobasalt-product.glb"
              poster="/assets/product-six-views.jpg"
              alt="Интерактивная 3D модель упаковки MIRKO IZOBASALT"
              camera-controls=""
              disable-pan=""
              disable-zoom=""
              auto-rotate=""
              auto-rotate-delay="900"
              rotation-per-second="16deg"
              camera-orbit={`${theta}deg ${phi}deg ${radius}%`}
              field-of-view="29deg"
              min-field-of-view="23deg"
              max-field-of-view="36deg"
              interaction-prompt="none"
              touch-action="pan-y"
              shadow-intensity="1.85"
              shadow-softness="0.48"
              environment-image="neutral"
              tone-mapping="commerce"
              exposure="1.08"
              loading="eager"
              reveal="auto"
              onLoad={() => setModelReady(true)}
            />
          </>}
          <div className="mv-platform" aria-hidden="true" />
          <div className="mv-scanline" aria-hidden="true" />
          <div className="mv-drag-cue" aria-hidden="true"><span>360°</span><small>{t("hero.drag")}</small></div>
          <div className="mv-spec-tag mv-spec-density"><span>ρ</span><strong>80 / 100 / 120</strong><small>кг/м³</small></div>
          <div className="mv-spec-tag mv-spec-size"><span>↔</span><strong>600 × 1200</strong><small>мм</small></div>
          <div className="mv-mobile-facts" aria-label="Основные характеристики"><span><strong>50</strong> мм</span><span><strong>50</strong> лет</span><span><strong>5.04</strong> м²</span></div>
        </div>

        <div className="mv-copy">
          <div className="mv-beat mv-intro">
            <span className="mv-kicker">{t("hero.kicker")}</span>
            <h1 id="hero-title">{t("hero.line1")}<br />{t("hero.line2")}<br /><em>{t("hero.line3")}</em></h1>
            <p>{t("hero.description")}</p>
            <div className="mv-actions">
              <Link className="button button-green" href="/contact#request">{t("hero.calculate")} <span>↗</span></Link>
              <Link className="mv-text-link" href="/product">{t("hero.specs")} <span>→</span></Link>
            </div>
            <small className="mv-mobile-note">{t("hero.mobileNote")}</small>
          </div>

          <div className="mv-beat mv-perspective">
            <span className="mv-beat-index">01 / {t("hero.form")}</span>
            <h2>{t("hero.formTitle1")}<br /><em>{t("hero.formTitle2")}</em></h2>
            <p>{t("hero.formText")}</p>
          </div>

          <div className="mv-beat mv-density-copy">
            <span className="mv-beat-index">02 / {t("hero.density")}</span>
            <div className="mv-density-numbers"><strong>80</strong><span>100</span><em>120</em></div>
            <h2>{t("hero.densityTitle1")}<br />{t("hero.densityTitle2")}</h2>
            <p>{t("hero.densityText")}</p>
          </div>

          <div className="mv-beat mv-protection">
            <span className="mv-beat-index">03 / {t("hero.protection")}</span>
            <div className="mv-heat-number">600<span>–800°C*</span></div>
            <h2>{t("hero.protectionTitle1")}<br /><em>{t("hero.protectionTitle2")}</em></h2>
            <p>{t("hero.protectionText")}</p>
            <Link className="button button-light" href="/technology">{t("hero.technology")} <span>→</span></Link>
          </div>
        </div>

        <div className="mv-footer-nav" aria-hidden="true">
          <span className={phase === 0 ? "is-active" : ""}>00 / Введение</span>
          <span className={phase === 1 ? "is-active" : ""}>01 / 360°</span>
          <span className={phase === 2 ? "is-active" : ""}>02 / Плотность</span>
          <span className={phase === 3 ? "is-active" : ""}>03 / Защита</span>
          <div><i style={{ transform: `scaleX(${progress})` }} /></div>
        </div>
        <div className="mv-scroll-cue" aria-hidden="true"><span>{t("hero.scroll")}</span><i>↓</i></div>
      </div>
    </section>
  );
}
