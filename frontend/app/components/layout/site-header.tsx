import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import { contactDetails, siteNavigation } from "~/components/data/site-content";
import { cn } from "~/components/lib/utils";
import { ButtonLink } from "~/components/ui/button-link";

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whiteLogoRoutes = new Set(["/", "/nuestra-experiencia", "/como-funciona-tu-tratamiento"]);
  const desktopNavigation = siteNavigation.filter((item) => item.to !== "/contacto");
  const mobileNavigation = siteNavigation.filter((item) => item.to !== "/contacto");
  const heroHeader = whiteLogoRoutes.has(location.pathname) && !scrolled && !menuOpen;
  const useWhiteLogo = heroHeader;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/82 shadow-[0_1px_0_rgba(11,31,59,0.06)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 sm:px-8 lg:py-4">
        <Link className="group flex items-center gap-3" to="/">
          <img
            alt="VIXI"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            src={useWhiteLogo ? "/logos/vixi_logo_white.webp" : "/logos/vixi_logo.webp"}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {desktopNavigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "nav-link relative px-3 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200",
                  heroHeader
                    ? isActive
                      ? "text-white"
                      : "text-white/72 hover:text-white"
                    : isActive
                      ? "text-brand-950"
                      : "text-brand-950/50 hover:text-brand-950/80",
                )
              }
              to={item.to}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-accent-400 transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ButtonLink
              className={cn(heroHeader && "border border-white/20 bg-white/10 text-white hover:bg-white/18")}
              to="/contacto"
            >
              Contacto
            </ButtonLink>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 lg:hidden",
              heroHeader
                ? "border border-white/20 hover:bg-white/10"
                : "border border-brand-950/8 hover:bg-brand-950/5",
            )}
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            <div className="flex w-[15px] flex-col items-center gap-[5px]">
              <span
                className={cn(
                  "block h-[1.5px] w-full origin-center rounded-full transition-all duration-300",
                  heroHeader ? "bg-white" : "bg-brand-950",
                  menuOpen && "translate-y-[3.25px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full origin-center rounded-full transition-all duration-300",
                  heroHeader ? "bg-white" : "bg-brand-950",
                  menuOpen && "-translate-y-[3.25px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          aria-label="Cerrar menu"
          className={cn(
            "absolute inset-0 bg-brand-950/28 backdrop-blur-[2px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
          type="button"
        />

        <div
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-full max-w-[24rem] flex-col overflow-hidden border-l border-white/35 bg-[#f8f3ec]/96 shadow-[-24px_0_80px_rgba(11,31,59,0.2)] backdrop-blur-2xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-brand-950/8 px-6 pb-4 pt-5">
            <Link className="flex items-center" onClick={() => setMenuOpen(false)} to="/">
              <img
                alt="VIXI"
                className="h-11 w-auto"
                src="/logos/vixi_logo.webp"
              />
            </Link>

            <button
              aria-label="Cerrar menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-950/10 text-brand-950 transition-colors duration-200 hover:bg-brand-950/5"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <span className="text-xl leading-none">x</span>
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-4 pb-5 pt-4">
            <nav className="grid gap-2">
              {mobileNavigation.map((item, index) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    cn(
                      "group rounded-[24px] border px-5 py-4 transition-all duration-300",
                      menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                      isActive
                        ? "border-brand-950 bg-brand-950 text-white shadow-[0_16px_34px_rgba(11,31,59,0.18)]"
                        : "border-brand-950/8 bg-white/70 text-brand-950/78 hover:border-brand-950/14 hover:bg-white hover:text-brand-950",
                    )
                  }
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${index * 45}ms` }}
                  to={item.to}
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[15px] font-medium">{item.label}</span>
                      <span
                        className={cn(
                          "text-xs uppercase tracking-[0.24em] transition-colors duration-200",
                          isActive ? "text-white/65" : "text-brand-700/45 group-hover:text-brand-700/70",
                        )}
                      >
                        Ir
                      </span>
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>

            <div
              className={cn(
                "mt-5 rounded-[28px] bg-brand-950 px-5 py-4 text-white transition-all duration-300",
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
              )}
              style={{ transitionDelay: "180ms" }}
            >
              <div className="grid gap-3">
                <ButtonLink className="justify-center bg-white text-brand-950 hover:bg-white/92" external to={contactDetails.whatsappHref}>
                  Agendar por WhatsApp
                </ButtonLink>
                <a
                  className="flex items-center justify-center rounded-full border border-white/14 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
                  href={contactDetails.phoneHref}
                >
                  Llamar a {contactDetails.phoneDisplay}
                </a>
              </div>
            </div>

            <div
              className={cn(
                "mt-auto px-2 pt-5 text-[11px] uppercase tracking-[0.22em] text-brand-950/36 transition-all duration-300",
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
              )}
              style={{ transitionDelay: "220ms" }}
            >
              {contactDetails.hours}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
