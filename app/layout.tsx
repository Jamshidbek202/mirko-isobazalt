import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { LanguageProvider } from "@/components/LanguageContext";
import { SiteTranslator } from "@/components/SiteTranslator";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: { default: "MIRKO IZOBASALT", template: "%s | MIRKO IZOBASALT" },
    description: "Минеральная теплоизоляция MIRKO IZOBASALT в Узбекистане.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "MIRKO IZOBASALT",
      title: "MIRKO IZOBASALT — тепло остаётся внутри",
      description: "Минеральная теплоизоляция для проектов в Узбекистане.",
      images: [{ url: new URL("/og.png", base).toString(), width: 1200, height: 630, alt: "MIRKO IZOBASALT — тепло остаётся внутри" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "MIRKO IZOBASALT — тепло остаётся внутри",
      description: "Минеральная теплоизоляция для проектов в Узбекистане.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0d261b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="google-site-verification"
          content="xPUDT9O1q8GrfMVJodj3-45BV_fULJRi-OO2Co1qcgk"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
