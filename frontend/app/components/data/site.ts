import type { FooterLinkGroup, NavItem } from "~/components/data/types";

export const siteName = "VIXI";
export const siteTagline = "Ciencia y experiencia dando vida.";

const configuredSiteUrl =
  typeof process !== "undefined" && process.env?.SITE_URL
    ? process.env.SITE_URL
    : undefined;

export const siteUrl = configuredSiteUrl?.replace(/\/+$/, "") ?? "https://vixireproduccion.mx";
export const defaultOgImage = "/og/og-1.png";
export const siteLocale = "es_MX";
export const siteLanguage = "es-MX";
export const siteDescription =
  "Clínica de fertilidad con un enfoque cálido, personalizado y respaldado por tecnología avanzada dentro de un hospital de prestigio.";
export const organizationName = "VIXI Reproducción";

export const siteNavigation: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Experiencia", to: "/nuestra-experiencia" },
  { label: "Tratamientos", to: "/tratamientos" },
  { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
  { label: "Foráneos", to: "/pacientes-foraneos" },
  { label: "FAQ", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Quiénes somos", to: "/quienes-somos" },
      { label: "Experiencia", to: "/nuestra-experiencia" },
      { label: "Tratamientos", to: "/tratamientos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Proceso", to: "/como-funciona-tu-tratamiento" },
      { label: "Foráneos", to: "/pacientes-foraneos" },
      { label: "FAQ", to: "/preguntas-frecuentes" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];
