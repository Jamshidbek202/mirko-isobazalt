"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

const phases = [
  { number: "01", title: "Сохраняет тепло", text: "Помогает удерживать комфортную температуру внутри здания." },
  { number: "02", title: "Создаёт тишину", text: "Волокнистая структура помогает снижать передачу шума." },
  { number: "03", title: "Работает безопасно", text: "Минеральная основа рассчитана на высокие температуры." },
];

export function BasaltScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const next = Math.min(1, Math.max(0, -rect.top / distance));
      setProgress(reduced ? 0.48 : next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activePhase = Math.min(2, Math.floor(progress * 3));
  const style = {
    "--scene-progress": progress,
    "--rotate-x": `${-10 + progress * 19}deg`,
    "--rotate-y": `${-24 + progress * 76}deg`,
    "--object-lift": `${Math.sin(progress * Math.PI) * -28}px`,
    "--slice-gap": `${8 + progress * 35}px`,
  } as CSSProperties;

  return (
    <section className="product-story" ref={sectionRef} aria-labelledby="product-story-title">
      <div className="product-story-sticky" style={style}>
        <div className="story-copy">
          <span className="eyebrow eyebrow-light">Материал изнутри</span>
          <h2 id="product-story-title">Больше, чем<br />теплоизоляция</h2>
          <div className="story-phases" aria-live="polite">
            {phases.map((phase, index) => (
              <article className={index === activePhase ? "is-active" : ""} key={phase.number}>
                <span>{phase.number}</span>
                <div><strong>{phase.title}</strong><p>{phase.text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="scene-stage" aria-label="Интерактивная трёхмерная модель базальтовой плиты">
          <div className="scene-orbit orbit-one" />
          <div className="scene-orbit orbit-two" />
          <div className="product-object">
            <div className="basalt-core">
              <div className="core-face core-front"><span>MIRKO</span><strong>IZOBASALT</strong><small>80 · 100 · 120</small></div>
              <div className="core-face core-back" />
              <div className="core-face core-right" />
              <div className="core-face core-left" />
              <div className="core-face core-top" />
              <div className="core-face core-bottom" />
            </div>
            <div className="material-slice slice-a" />
            <div className="material-slice slice-b" />
            <div className="material-slice slice-c" />
          </div>
          <span className="scene-note note-density">80–120<small>кг/м³</small></span>
          <span className="scene-note note-size">600 × 1200<small>мм</small></span>
          <span className="scene-note note-pack">5.04<small>м² / пачка</small></span>
          <div className="scroll-meter"><span style={{ transform: `scaleX(${progress})` }} /></div>
        </div>
      </div>
    </section>
  );
}
