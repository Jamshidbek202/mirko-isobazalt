"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { useLanguage } from "./LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-inverse" href="/">
            <BrandMark />
            <span className="brand-name"><strong>MIRKO</strong><em>IZOBASALT</em></span>
          </Link>
          <p>{t("footer.tagline")}</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">{t("footer.navigation")}</span>
            <Link href="/product">{t("nav.product")}</Link>
            <Link href="/technology">{t("nav.technology")}</Link>
            <Link href="/projects">{t("nav.projects")}</Link>
          </div>
          <div>
            <span className="footer-label">{t("footer.company")}</span>
            <Link href="/factory">{t("nav.factory")}</Link>
            <Link href="/contact">{t("nav.contact")}</Link>
            <Link href="/privacy">{t("footer.privacy")}</Link>
          </div>
          <div>
            <span className="footer-label">{t("footer.connect")}</span>
            <a href="tel:+998905315553">+998 90 531 55 53</a>
            <a href="mailto:mircoizobazalt@gmail.com">mircoizobazalt@gmail.com</a>
            <span>{t("footer.uzbekistan")}</span>
            <span>{t("footer.priority")}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MIRKO IZOBASALT</span>
        <span>{t("footer.climate")}</span>
      </div>
    </footer>
  );
}
