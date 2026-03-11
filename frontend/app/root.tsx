import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { ReactNode } from "react";

import { siteDescription, siteName } from "~/components/data/site-content";
import { MarketingLayout } from "~/components/layout/marketing-layout";

import "./app.css";

export const links = () => [] as { rel: string; href: string }[];

export function meta() {
  return [
    { title: siteName },
    { name: "description", content: siteDescription },
  ];
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans text-brand-950 antialiased">
        {children}
        <ScrollRestoration />
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
