"use client";

import Link from "next/link";
import { type CSSProperties, type PointerEvent, useEffect, useRef, useState } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function HeroExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    let target = 0;
    let current = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      current += (target - current) * (reduced ? 1 : 0.12);
      if (Math.abs(target - current) < 0.0005) current = target;
      setProgress(current);
      frame = current === target ? 0 : window.requestAnimationFrame(animate);
    };

    const measure = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      target = clamp(-rect.top / travel);
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const phase = progress < 0.23 ? 0 : progress < 0.49 ? 1 : progress < 0.74 ? 2 : 3;
  const unwrap = clamp((progress - 0.15) / 0.25);
  const separate = clamp((progress - 0.38) / 0.35);
  const shield = clamp((progress - 0.66) / 0.24);

  const style = {
    "--hx-progress": progress,
    "--hx-rotate-x": `${-7 + progress * 18 - pointer.y * 4}deg`,
    "--hx-rotate-y": `${-27 + progress * 128 + pointer.x * 9}deg`,
    "--hx-rotate-z": `${-2 + Math.sin(progress * Math.PI) * 4}deg`,
    "--hx-lift": `${-8 - Math.sin(progress * Math.PI) * 34}px`,
    "--hx-scale": 1.02 - progress * 0.12,
    "--hx-pack-opacity": 1 - unwrap,
    "--hx-pack-shift": `${-190 * unwrap}px`,
    "--hx-layer-gap": `${10 + separate * 58}px`,
    "--hx-layer-opacity": separate,
    "--hx-shield-opacity": shield,
    "--hx-stage-x": `${64 - shield * 27}%`,
    "--hx-pointer-x": pointer.x,
    "--hx-pointer-y": pointer.y,
  } as CSSProperties;

  function movePointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: clamp((event.clientX - rect.left) / rect.width, 0, 1) * 2 - 1,
      y: clamp((event.clientY - rect.top) / rect.height, 0, 1) * 2 - 1,
    });
  }

  return (
    <section
      className="hero-experience"
      data-phase={phase}
      ref={sectionRef}
      onPointerMove={movePointer}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      aria-labelledby="hero-title"
    >
      <div className="hero-experience-sticky" style={style}>
        <div className="hx-atmosphere" aria-hidden="true">
          <div className="hx-grid" />
          <div className="hx-aura" />
          <div className="hx-house-line"><i /><i /><i /></div>
          {Array.from({ length: 15 }).map((_, index) => <span className={`hx-particle particle-${index + 1}`} key={index} />)}
        </div>

        <div className="hx-wordmark" aria-hidden="true">
          <span>MIRKO</span>
          <strong>IZOBASALT</strong>
        </div>

        <div className="hx-product-stage" aria-label="Трёхмерная плита MIRKO IZOBASALT, раскрывающая свою структуру при прокрутке">
          <div className="hx-product-rig">
            <div className="hx-thermal-ring ring-one" />
            <div className="hx-thermal-ring ring-two" />
            <div className="hx-block">
              <div className="hx-face hx-front"><span className="hx-fiber-window" /></div>
              <div className="hx-face hx-back" />
              <div className="hx-face hx-right" />
              <div className="hx-face hx-left" />
              <div className="hx-face hx-top" />
              <div className="hx-face hx-bottom" />
              <div className="hx-package-panel">
                <span className="hx-package-band">МИНЕРАЛЬНЫЙ УТЕПЛИТЕЛЬ</span>
                <strong><i>MIRKO</i> IZOBASALT</strong>
                <small>ТЕПЛО В ВАШЕМ ДОМЕ</small>
                <b>80 · 100 · 120</b>
              </div>
            </div>
            <div className="hx-slice slice-one" />
            <div className="hx-slice slice-two" />
            <div className="hx-slice slice-three" />
            <div className="hx-object-shadow" />
          </div>

          <div className="hx-dimension dimension-width"><span>1200 мм</span></div>
          <div className="hx-dimension dimension-height"><span>600 мм</span></div>
          <div className="hx-material-tag tag-density"><span>ρ</span><strong>80–120</strong><small>кг/м³</small></div>
          <div className="hx-material-tag tag-pack"><span>□</span><strong>5.04</strong><small>м² / пачка</small></div>
        </div>

        <div className="hx-copy-layer">
          <div className="hx-beat hx-intro">
            <span className="eyebrow eyebrow-light">Минеральная теплоизоляция · Узбекистан</span>
            <h1 id="hero-title">Тепло<br />остаётся<br /><em>внутри.</em></h1>
            <p>Базальтовая теплоизоляция для тёплых, тихих и энергоэффективных зданий.</p>
            <div className="hx-actions">
              <Link className="button button-green" href="/contact#request">Рассчитать проект <span>↗</span></Link>
              <Link className="hx-ghost-link" href="/product">Изучить продукт <span>→</span></Link>
            </div>
          </div>

          <div className="hx-beat hx-inside">
            <span className="hx-beat-index">01 / СТРУКТУРА</span>
            <h2>Смотрим<br /><em>глубже.</em></h2>
            <p>Упаковка исчезает. Остаётся волокнистое минеральное ядро, которое работает внутри конструкции.</p>
          </div>

          <div className="hx-beat hx-density">
            <span className="hx-beat-index">02 / ПЛОТНОСТЬ</span>
            <div className="hx-big-number">80<small>100</small><b>120</b></div>
            <h2>Три варианта.<br /><em>Одна система.</em></h2>
          </div>

          <div className="hx-beat hx-shield">
            <span className="hx-beat-index">03 / ЗАЩИТА</span>
            <div className="hx-temperature">600<span>–800°C*</span></div>
            <h2>Больше, чем<br />просто тепло.</h2>
            <p>*Точное значение зависит от типа изделия и подтверждается технической документацией.</p>
            <Link className="button button-light" href="/technology">Как это работает <span>→</span></Link>
          </div>
        </div>

        <div className="hx-hud" aria-hidden="true">
          <span>FERGANA / UZ</span>
          <div className="hx-progress"><i style={{ transform: `scaleX(${progress})` }} /></div>
          <span>{String(phase + 1).padStart(2, "0")} / 04</span>
        </div>
        <div className="hx-scroll-cue"><span>Прокрутите</span><i>↓</i></div>
      </div>
    </section>
  );
}
