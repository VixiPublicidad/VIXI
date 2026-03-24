import type { ReactNode } from "react";
import useGlobalLenis from "~/components/hooks/useGlobalLenis";
import useScrollToTop from "~/components/hooks/useScrollToTop";
import { SiteFooter } from "~/components/layout/site-footer";
import { SiteHeader } from "~/components/layout/site-header";

type MarketingLayoutProps = {
  children: ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
  useGlobalLenis();
  useScrollToTop();

  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main-content">
        Saltar al contenido
      </a>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="page-glow page-glow-left" />
        <div className="page-glow page-glow-right" />
        <SiteHeader />
        <main className="pb-8" id="main-content">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
