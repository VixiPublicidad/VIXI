import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "react-router";

import type { ReactNode } from "react";

import {
  contactDetails,
  organizationName,
  siteDescription,
  siteLanguage,
  siteName,
  siteTagline,
  siteUrl,
} from "~/components/data";
import { MarketingLayout } from "~/components/layout/marketing-layout";

import "./app.css";
import "lenis/dist/lenis.css";

export const links = () =>
  [
    { rel: "icon", href: "/favicon.ico", sizes: "any" },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ] as { rel: string; href: string; sizes?: string }[];

export function meta() {
  return [
    { title: siteName },
    { name: "application-name", content: siteName },
    { name: "format-detection", content: "telephone=no" },
    { name: "theme-color", content: "#f5efe6" },
    { httpEquiv: "content-language", content: siteLanguage },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "@id": `${siteUrl}/#medical-clinic`,
        name: organizationName,
        description: siteDescription,
        url: siteUrl,
        image: `${siteUrl}/og/og-1.png`,
        slogan: siteTagline,
        inLanguage: siteLanguage,
        telephone: contactDetails.phoneHref.replace("tel:", ""),
        email: contactDetails.email,
        priceRange: "$$",
        availableLanguage: ["es-MX"],
        areaServed: {
          "@type": "Country",
          name: "México",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: contactDetails.latitude,
          longitude: contactDetails.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: contactDetails.openingHours.days,
          opens: contactDetails.openingHours.opens,
          closes: contactDetails.openingHours.closes,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: contactDetails.streetAddress,
          postalCode: contactDetails.postalCode,
          addressLocality: contactDetails.locality,
          addressRegion: contactDetails.region,
          addressCountry: contactDetails.countryCode,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: contactDetails.phoneHref.replace("tel:", ""),
            email: contactDetails.email,
            availableLanguage: ["es-MX"],
            areaServed: "MX",
          },
        ],
      },
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: siteLanguage,
        publisher: {
          "@id": `${siteUrl}/#medical-clinic`,
        },
      },
    },
  ];
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteLanguage}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans text-brand-950 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <MarketingLayout>
      <Outlet />
    </MarketingLayout>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Algo salió mal";
  let details = "Ocurrió un error inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "La página solicitada no fue encontrada."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <MarketingLayout>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-brand-950/10 bg-white/92 p-8 shadow-[0_20px_60px_rgba(11,31,59,0.08)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Estado del sitio</p>
          <h1 className="mt-4 font-display text-6xl leading-none text-brand-950">{message}</h1>
          <p className="mt-5 text-base leading-7 text-brand-950/72">{details}</p>
          {stack ? (
            <pre className="mt-6 overflow-x-auto rounded-[24px] bg-brand-950 p-5 text-sm text-white/84">
              <code>{stack}</code>
            </pre>
          ) : null}
        </div>
      </section>
    </MarketingLayout>
  );
}
