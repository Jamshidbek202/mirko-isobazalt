import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children, headerOverlay = false }: { children: ReactNode; headerOverlay?: boolean }) {
  return (
    <>
      <SiteHeader overlay={headerOverlay} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
