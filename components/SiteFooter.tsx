import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-inverse" href="/">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-name"><strong>MIRKO</strong><em>IZOBASALT</em></span>
          </Link>
          <p>Минеральная теплоизоляция для тёплых, тихих и энергоэффективных зданий.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Навигация</span>
            <Link href="/product">Продукт</Link>
            <Link href="/technology">Технология</Link>
            <Link href="/projects">Проекты</Link>
          </div>
          <div>
            <span className="footer-label">Компания</span>
            <Link href="/factory">О заводе</Link>
            <Link href="/contact">Контакты</Link>
            <Link href="/privacy">Конфиденциальность</Link>
          </div>
          <div>
            <span className="footer-label">Связаться</span>
            <a href="tel:+998905315553">+998 90 531 55 53</a>
            <a href="mailto:mircoizobazalt@gmail.com">mircoizobazalt@gmail.com</a>
            <span>Узбекистан</span>
            <span>Приоритет: Ферганская область</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MIRKO IZOBASALT</span>
        <span>Сделано для климата Узбекистана</span>
      </div>
    </footer>
  );
}
