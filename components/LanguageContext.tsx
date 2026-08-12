"use client";

import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ru" | "uz" | "en";

const copy = {
  ru: {
    "nav.product": "Продукт", "nav.technology": "Технология", "nav.projects": "Проекты", "nav.factory": "О компании", "nav.contact": "Контакты",
    "action.quote": "Получить расчёт", "menu.open": "Открыть меню", "language.label": "Выбор языка",
    "hero.location": "ФЕРГАНА / УЗБЕКИСТАН", "hero.kicker": "Минеральная теплоизоляция нового поколения",
    "hero.line1": "Тепло", "hero.line2": "остаётся", "hero.line3": "внутри.",
    "hero.description": "Профессиональная базальтовая теплоизоляция для частных домов, коммерческих и промышленных объектов.",
    "hero.calculate": "Рассчитать проект", "hero.specs": "Характеристики", "hero.loading": "Подготавливаем продукт", "hero.drag": "Поверните модель",
    "hero.form": "Форма", "hero.formTitle1": "Продуман", "hero.formTitle2": "со всех сторон.", "hero.formText": "Изучите упаковку в 360°. Удерживайте и поворачивайте модель.",
    "hero.density": "Плотность", "hero.densityTitle1": "Одна система.", "hero.densityTitle2": "Три задачи.", "hero.densityText": "Подбираем плотность под конструкцию и условия объекта.",
    "hero.protection": "Защита", "hero.protectionTitle1": "Больше,", "hero.protectionTitle2": "чем тепло.", "hero.protectionText": "Тепловой и акустический комфорт, минеральная основа и долговечность.", "hero.technology": "Изучить технологию",
    "hero.scroll": "Листайте", "hero.mobileNote": "На мобильном — быстрая статичная версия. Интерактивная 3D-модель доступна на большом экране.", "hero.intro": "Введение", "hero.view360": "360°", "hero.mobileFacts": "Основные характеристики", "hero.alt": "Интерактивная 3D модель упаковки MIRKO IZOBASALT",
    "footer.tagline": "Минеральная теплоизоляция для тёплых, тихих и энергоэффективных зданий.", "footer.navigation": "Навигация", "footer.company": "Компания", "footer.connect": "Связаться",
    "footer.privacy": "Конфиденциальность", "footer.uzbekistan": "Узбекистан", "footer.priority": "Приоритет: Ферганская область", "footer.climate": "Сделано для климата Узбекистана",
    "form.name": "Ваше имя", "form.namePlaceholder": "Как к вам обращаться?", "form.phone": "Телефон", "form.region": "Регион", "form.regionPlaceholder": "Например, Фергана", "form.project": "Тип объекта", "form.message": "О проекте", "form.messagePlaceholder": "Площадь, сроки или другие детали", "form.submit": "Отправить заявку", "form.consent": "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.", "form.attached": "Расчёт прикреплён", "form.subject": "Заявка с сайта MIRKO IZOBASALT", "form.emailName": "Имя", "form.emailRegion": "Регион", "form.emailObject": "Объект", "form.emailComment": "Комментарий",
    "project.house": "Частный дом", "project.apartment": "Многоквартирный дом", "project.commercial": "Коммерческий объект", "project.industrial": "Промышленный объект", "project.other": "Другое",
    "calc.area": "Площадь проекта", "calc.density": "Плотность", "calc.volume": "Предварительный объём", "calc.packs": "пачек", "calc.reserve": "м² с технологическим запасом 8%", "calc.price": "Узнать стоимость", "calc.note": "Точная цена подтверждается менеджером.",
    "review.author": "Имя или компания", "review.object": "Тип объекта", "review.rating": "Оценка", "review.text": "Ваш отзыв", "review.submit": "Отправить на модерацию", "review.note": "Отзыв отправится через вашу почтовую программу и появится после проверки.", "review.subject": "Отзыв о MIRKO IZOBASALT", "review.emailAuthor": "Имя / компания", "review.emailScore": "Оценка",
  },
  uz: {
    "nav.product": "Mahsulot", "nav.technology": "Texnologiya", "nav.projects": "Loyihalar", "nav.factory": "Kompaniya", "nav.contact": "Aloqa",
    "action.quote": "Hisob-kitob olish", "menu.open": "Menyuni ochish", "language.label": "Tilni tanlash",
    "hero.location": "FARG‘ONA / O‘ZBEKISTON", "hero.kicker": "Yangi avlod mineral issiqlik izolyatsiyasi",
    "hero.line1": "Issiqlik", "hero.line2": "ichkarida", "hero.line3": "qoladi.",
    "hero.description": "Xususiy uylar, tijorat va sanoat obyektlari uchun professional bazalt issiqlik izolyatsiyasi.",
    "hero.calculate": "Loyihani hisoblash", "hero.specs": "Xususiyatlar", "hero.loading": "Mahsulot tayyorlanmoqda", "hero.drag": "Modelni aylantiring",
    "hero.form": "Shakl", "hero.formTitle1": "Har tomondan", "hero.formTitle2": "puxta o‘ylangan.", "hero.formText": "Qadoqni 360° ko‘ring. Modelni ushlab aylantiring.",
    "hero.density": "Zichlik", "hero.densityTitle1": "Bitta tizim.", "hero.densityTitle2": "Uch vazifa.", "hero.densityText": "Zichlik konstruksiya va obyekt sharoitiga qarab tanlanadi.",
    "hero.protection": "Himoya", "hero.protectionTitle1": "Faqat issiqlik", "hero.protectionTitle2": "emas.", "hero.protectionText": "Issiqlik va akustik qulaylik, mineral asos va uzoq xizmat muddati.", "hero.technology": "Texnologiyani ko‘rish",
    "hero.scroll": "Pastga", "hero.mobileNote": "Mobil qurilmada tezkor statik ko‘rinish. Interaktiv 3D model katta ekranda mavjud.", "hero.intro": "Kirish", "hero.view360": "360°", "hero.mobileFacts": "Asosiy xususiyatlar", "hero.alt": "MIRKO IZOBASALT qadoqining interaktiv 3D modeli",
    "footer.tagline": "Issiq, sokin va energiya tejamkor binolar uchun mineral izolyatsiya.", "footer.navigation": "Navigatsiya", "footer.company": "Kompaniya", "footer.connect": "Bog‘lanish",
    "footer.privacy": "Maxfiylik", "footer.uzbekistan": "O‘zbekiston", "footer.priority": "Asosiy hudud: Farg‘ona viloyati", "footer.climate": "O‘zbekiston iqlimi uchun yaratilgan",
    "form.name": "Ismingiz", "form.namePlaceholder": "Sizga qanday murojaat qilamiz?", "form.phone": "Telefon", "form.region": "Hudud", "form.regionPlaceholder": "Masalan, Farg‘ona", "form.project": "Obyekt turi", "form.message": "Loyiha haqida", "form.messagePlaceholder": "Maydon, muddat yoki boshqa tafsilotlar", "form.submit": "Ariza yuborish", "form.consent": "Tugmani bosib, maxfiylik siyosatiga rozilik bildirasiz.", "form.attached": "Hisob-kitob biriktirildi", "form.subject": "MIRKO IZOBASALT saytidan ariza", "form.emailName": "Ism", "form.emailRegion": "Hudud", "form.emailObject": "Obyekt", "form.emailComment": "Izoh",
    "project.house": "Xususiy uy", "project.apartment": "Ko‘p qavatli uy", "project.commercial": "Tijorat obyekti", "project.industrial": "Sanoat obyekti", "project.other": "Boshqa",
    "calc.area": "Loyiha maydoni", "calc.density": "Zichlik", "calc.volume": "Dastlabki hajm", "calc.packs": "qadoq", "calc.reserve": "m², 8% texnologik zaxira bilan", "calc.price": "Narxni bilish", "calc.note": "Aniq narxni menejer tasdiqlaydi.",
    "review.author": "Ism yoki kompaniya", "review.object": "Obyekt turi", "review.rating": "Baho", "review.text": "Fikringiz", "review.submit": "Tekshiruvga yuborish", "review.note": "Fikr pochta dasturingiz orqali yuboriladi va tekshiruvdan keyin chiqadi.", "review.subject": "MIRKO IZOBASALT haqida fikr", "review.emailAuthor": "Ism / kompaniya", "review.emailScore": "Baho",
  },
  en: {
    "nav.product": "Product", "nav.technology": "Technology", "nav.projects": "Projects", "nav.factory": "Company", "nav.contact": "Contact",
    "action.quote": "Request estimate", "menu.open": "Open menu", "language.label": "Choose language",
    "hero.location": "FERGANA / UZBEKISTAN", "hero.kicker": "A new generation of mineral insulation",
    "hero.line1": "Keep", "hero.line2": "the warmth", "hero.line3": "inside.",
    "hero.description": "Professional basalt thermal insulation for homes, commercial buildings and industrial facilities.",
    "hero.calculate": "Estimate my project", "hero.specs": "Specifications", "hero.loading": "Preparing product", "hero.drag": "Rotate the model",
    "hero.form": "Form", "hero.formTitle1": "Engineered", "hero.formTitle2": "from every angle.", "hero.formText": "Explore the package in 360°. Hold and rotate the model.",
    "hero.density": "Density", "hero.densityTitle1": "One system.", "hero.densityTitle2": "Three roles.", "hero.densityText": "Density is selected for the assembly and site conditions.",
    "hero.protection": "Protection", "hero.protectionTitle1": "More than", "hero.protectionTitle2": "insulation.", "hero.protectionText": "Thermal and acoustic comfort, a mineral core and long service life.", "hero.technology": "Explore technology",
    "hero.scroll": "Scroll", "hero.mobileNote": "A fast static presentation is used on mobile. Interactive 3D is available on larger screens.", "hero.intro": "Introduction", "hero.view360": "360°", "hero.mobileFacts": "Key specifications", "hero.alt": "Interactive 3D model of MIRKO IZOBASALT packaging",
    "footer.tagline": "Mineral insulation for warmer, quieter and more energy-efficient buildings.", "footer.navigation": "Navigation", "footer.company": "Company", "footer.connect": "Contact",
    "footer.privacy": "Privacy", "footer.uzbekistan": "Uzbekistan", "footer.priority": "Priority: Fergana region", "footer.climate": "Made for the climate of Uzbekistan",
    "form.name": "Your name", "form.namePlaceholder": "How should we address you?", "form.phone": "Phone", "form.region": "Region", "form.regionPlaceholder": "For example, Fergana", "form.project": "Project type", "form.message": "About the project", "form.messagePlaceholder": "Area, schedule or other details", "form.submit": "Send request", "form.consent": "By submitting, you agree to the privacy policy.", "form.attached": "Estimate attached", "form.subject": "Request from the MIRKO IZOBASALT website", "form.emailName": "Name", "form.emailRegion": "Region", "form.emailObject": "Project", "form.emailComment": "Comment",
    "project.house": "Private home", "project.apartment": "Apartment building", "project.commercial": "Commercial project", "project.industrial": "Industrial project", "project.other": "Other",
    "calc.area": "Project area", "calc.density": "Density", "calc.volume": "Preliminary volume", "calc.packs": "packs", "calc.reserve": "m² including an 8% installation reserve", "calc.price": "Request price", "calc.note": "Final pricing is confirmed by a manager.",
    "review.author": "Name or company", "review.object": "Project type", "review.rating": "Rating", "review.text": "Your review", "review.submit": "Send for review", "review.note": "Your review opens in your email app and appears after verification.", "review.subject": "MIRKO IZOBASALT review", "review.emailAuthor": "Name / company", "review.emailScore": "Rating",
  },
} as const;

type CopyKey = keyof typeof copy.ru;

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: CopyKey) => string } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("mirko-language") as Language | null;
    const timer = window.setTimeout(() => {
      if (saved && saved in copy) setLanguage(saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("mirko-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: (key: CopyKey) => copy[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className={`language-switch ${compact ? "language-switch-mobile" : ""}`} aria-label={t("language.label")}>
      {(["ru", "uz", "en"] as Language[]).map((item) => (
        <button className={language === item ? "is-active" : ""} key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item}>{item.toUpperCase()}</button>
      ))}
    </div>
  );
}
