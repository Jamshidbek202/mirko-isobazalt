"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { LanguageSwitch, useLanguage } from "./LanguageContext";

const links = [
  { href: "/product", key: "nav.product" as const },
  { href: "/technology", key: "nav.technology" as const },
  { href: "/projects", key: "nav.projects" as const },
  { href: "/factory", key: "nav.factory" as const },
  { href: "/contact", key: "nav.contact" as const },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { t } = useLanguage();
  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="MIRKO IZOBASALT — главная">
          <BrandMark />
          <span className="brand-name">
            <strong>MIRKO</strong>
            <em>IZOBASALT</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitch />
          <Link className="button button-small button-dark" href="/contact#request">
            {t("action.quote")}
          </Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label={t("menu.open")}><span /><span /></summary>
          <nav aria-label="Мобильная навигация">
            <LanguageSwitch compact />
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {t(link.key)}
              </Link>
            ))}
            <Link className="button button-green" href="/contact#request">
              {t("action.quote")}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
