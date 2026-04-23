# VIXI Frontend

> Public-facing SSR site for VIXI, built as an editorial marketing website with reusable content modules, route-level SEO metadata, Motion-based animation, smooth scrolling via Lenis, and a server-side contact flow backed by Resend.

---

## Overview

This app is the public website for **VIXI Reproduccion**.

It is built around a few clear responsibilities:

- Present the clinic, treatments, process, team, and patient experience.
- Drive conversions through WhatsApp, phone, email, and a contact form.
- Keep content centralized in typed data modules.
- Serve SEO metadata, JSON-LD, OG tags, `robots.txt`, and `sitemap.xml`.
- Render with SSR using React Router 7.

The codebase is intentionally split into:

- `routes/` for page entry points and route metadata.
- `components/` for page sections and shared UI.
- `components/data/` for reusable content and site configuration.
- `components/lib/` for motion, metadata, Lenis helpers, and small utilities.

---

## Stack

### Runtime

- `React 19`
- `React Router 7`
- `TypeScript`
- `Vite`
- `Tailwind CSS 4`

### UI and behavior

- `motion` for reveal/stagger/parallax animation and reduced-motion-aware transitions
- `lenis` for smooth scrolling on the client
- `react-icons` for selective icon usage

### Delivery

- SSR enabled through `react-router.config.ts`
- Contact form submission sent server-side to the Resend HTTP API
- Multi-stage `Dockerfile` for production builds

---

## Scripts

Run these from `[frontend/](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend)`.

```bash
npm install
npm run dev
```

Available scripts:

- `npm run dev` starts the React Router dev server.
- `npm run typecheck` runs route type generation and TypeScript.
- `npm run generate:sitemap` writes `public/sitemap.xml`.
- `npm run build` generates the sitemap and builds the app.
- `npm run start` serves the production server from `build/server/index.js`.

There is currently no `test` or `lint` script in `package.json`.

---

## Environment

### Required for site configuration

- `SITE_URL`

Used for:

- canonical URLs
- Open Graph metadata
- Twitter metadata
- JSON-LD IDs and URLs
- sitemap generation

Fallback if missing:

- `https://vixireproduccion.mx`

### Required for contact form delivery

- `RESEND_API_KEY`
- `CONTACT_FORM_TO_EMAIL`

Optional:

- `CONTACT_FORM_FROM_EMAIL`

Fallback if missing:

- `VIXI Contacto <noreply@vixireproduccion.mx>`

If `RESEND_API_KEY` or `CONTACT_FORM_TO_EMAIL` is missing, the contact route returns a controlled form error and does not attempt delivery.

---

## Route Map

Declared in `[app/routes.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/routes.ts)`.

Public routes:

- `/`
- `/quienes-somos`
- `/nuestra-experiencia`
- `/tratamientos`
- `/como-funciona-tu-tratamiento`
- `/pacientes-foraneos`
- `/preguntas-frecuentes`
- `/contacto`

Route files are intentionally thin. Most of them:

- export `meta()`
- call `buildMeta()`
- render a composed page component from `components/`

The only route with a server-side `action()` today is `[contacto.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/routes/contacto.tsx)`.

---

## How It Works

### App shell

`[root.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/root.tsx)` is the global document shell. It is responsible for:

- base HTML structure
- favicon links
- top-level metadata
- JSON-LD for `MedicalClinic` and `WebSite`
- mounting the global motion provider
- rendering the shared `MarketingLayout`

`[marketing-layout.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/layout/marketing-layout.tsx)` mounts:

- `SiteHeader`
- `SiteFooter`
- the main content outlet
- global Lenis initialization
- scroll-to-top behavior on route changes

### Content model

Most site copy and structured content lives in `[components/data/](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data)`.

Current modules:

- `[site.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/site.ts)` for branding, URL config, navigation, footer links, and site-level metadata values
- `[contact.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/contact.ts)` for phone, WhatsApp, email, address, coordinates, and hours
- `[home.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/home.ts)` for homepage hero, images, actions, stats, pillars, and audience content
- `[about.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/about.ts)` for team and experience content
- `[services.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/services.ts)` for treatment categories, treatment journey, and out-of-town support
- `[care.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/care.ts)` for multidisciplinary team data
- `[faq.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/faq.ts)` for FAQ items
- `[types.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/types.ts)` for shared content contracts

This is the first place to change site copy, reusable CTAs, and clinic contact details.

### UI composition

The UI is organized by domain:

- `components/home/`
- `components/about/`
- `components/services/`
- `components/contact/`
- `components/shared/`
- `components/ui/`

Shared primitives worth knowing:

- `[section-heading.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/ui/section-heading.tsx)` for heading variants
- `[button-link.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/ui/button-link.tsx)` for branded CTA links
- `[feature-card.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/ui/feature-card.tsx)` for animated content cards
- `[image-card.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/ui/image-card.tsx)` for media blocks

### Animation and scrolling

Animation is centralized in `[motion.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/lib/motion.tsx)`.

Current motion setup:

- `MotionProvider` wraps the app with `LazyMotion`
- Motion components are loaded from `motion/react-m`
- `MotionConfig reducedMotion="user"` enforces user preference globally
- shared helpers create reveal and stagger variants
- text reveal helpers split words and characters into animated wrappers
- parallax behavior is based on `useScroll` and `useTransform`

Smooth scrolling is handled by `[useGlobalLenis.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/hooks/useGlobalLenis.ts)`.

Important behavior:

- Lenis runs only on the client
- it is disabled when `prefers-reduced-motion` is enabled
- route changes call a dedicated scroll-to-top helper

### SEO

SEO is split across a few focused layers:

- `[root.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/root.tsx)` for global metadata and JSON-LD
- `[meta.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/lib/meta.ts)` for route-level metadata generation
- route files for page-specific `meta()`
- `[generate-sitemap.mjs](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/scripts/generate-sitemap.mjs)` for sitemap generation
- `public/robots.txt` and `public/og/*` for crawl directives and OG assets

Each public route calls `buildMeta()` with a title, description, path, and optional image/keywords.

### Contact flow

The contact experience is split between UI composition and the server action:

- `[contact-page.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/contact/contact-page.tsx)`
- `[contact-form-section.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/contact/contact-form-section.tsx)`
- `[contacto.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/routes/contacto.tsx)`

Submission flow:

1. The form posts `name`, `email`, `phone`, `reason`, `message`, and the honeypot field `company`.
2. The route action short-circuits to a silent success if the honeypot is filled.
3. The action validates the fields server-side.
4. Validation errors are returned as structured `errors` and `values`.
5. If env vars are missing, the action returns a user-facing form error.
6. If valid, the server sends an HTTP request to `https://api.resend.com/emails`.
7. The message is sent as both plain text and HTML, with `reply_to` set to the submitted email.

The contact UI also includes:

- a custom reason dropdown
- embedded Google Maps iframe
- motion-based open/close and reveal states

---

## Folder Structure

```text
frontend/
  app/
    components/
      about/
      contact/
      data/
      home/
      hooks/
      layout/
      lib/
      services/
      shared/
      ui/
    routes/
    welcome/
    app.css
    root.tsx
    routes.ts
  build/
  fonts/
  public/
    gallery/
    heroes/
    logos/
    og/
    pillars/
    favicon.ico
    robots.txt
    sitemap.xml
  scripts/
    generate-sitemap.mjs
  Dockerfile
  package.json
  react-router.config.ts
  vite.config.ts
```

Notes:

- `app/welcome/` is scaffold residue and is not part of the public route map.
- `build/` exists only after a production build.
- `public/` contains the static media and crawl assets used by the site.

---

## Maintenance Guide

### To add or change a page

1. Update `[app/routes.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/routes.ts)`.
2. Create or update the route file in `[app/routes/](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/routes)`.
3. Add page metadata with `[buildMeta()](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/lib/meta.ts)`.
4. Compose the page from existing section components or add new ones under the relevant domain folder.
5. Update navigation or footer links in `[site.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/site.ts)` if needed.
6. Run `npm run generate:sitemap` or `npm run build`.

### To update content

Start in these files:

- `[site.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/site.ts)`
- `[contact.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/contact.ts)`
- `[home.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/home.ts)`
- `[about.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/about.ts)`
- `[services.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/services.ts)`
- `[care.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/care.ts)`
- `[faq.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/data/faq.ts)`

### To update motion behavior

Start in:

- `[motion.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/lib/motion.tsx)`
- `[section-heading.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/ui/section-heading.tsx)`

### To update SEO

Start in:

- `[root.tsx](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/root.tsx)`
- `[meta.ts](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/app/components/lib/meta.ts)`
- `[generate-sitemap.mjs](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/scripts/generate-sitemap.mjs)`

---

## Docker

`[Dockerfile](C:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/Dockerfile)` uses a multi-stage build:

- install full dependencies
- install production dependencies separately
- run `npm run build`
- copy the production server and production dependencies into the final image
- start with `npm run start`

---

## Reality Check

This README reflects the codebase as it exists now:

- Motion is used.
- Lenis is the current smooth-scroll implementation.
- content lives in `components/data/*.ts`, not a different CMS layer
- the contact form posts to Resend through the route `action()`
- SSR is enabled

If the code changes materially, update this file in the same PR instead of letting it drift again.