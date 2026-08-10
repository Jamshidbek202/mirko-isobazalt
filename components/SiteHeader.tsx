import Link from "next/link";

const links = [
  { href: "/product", label: "Продукт" },
  { href: "/technology", label: "Технология" },
  { href: "/projects", label: "Проекты" },
  { href: "/factory", label: "О заводе" },
  { href: "/contact", label: "Контакты" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="MIRKO IZOBASALT — главная">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-name">
            <strong>MIRKO</strong>
            <em>IZOBASALT</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Выбор языка">
            <span className="is-active">RU</span>
            <span title="Перевод готовится">UZ</span>
            <span title="Translation coming soon">EN</span>
          </div>
          <Link className="button button-small button-dark" href="/contact#request">
            Получить расчёт
          </Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Открыть меню"><span /><span /></summary>
          <nav aria-label="Мобильная навигация">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="button button-green" href="/contact#request">
              Получить расчёт
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
