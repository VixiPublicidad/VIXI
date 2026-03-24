# VIXI Frontend

Frontend SSR del sitio publico de VIXI. El proyecto esta construido con React Router 7, React 19, TypeScript, Vite y Tailwind CSS 4, y esta orientado a un marketing site editorial con animacion avanzada, SEO tecnico y un formulario de contacto server-side.

## Objetivo del sitio

El sitio actual esta pensado para:

- presentar la propuesta de valor de VIXI;
- explicar tratamientos, proceso clinico, experiencia del paciente y perfil del equipo;
- captar contactos por WhatsApp, llamada, correo y formulario;
- sostener una base SEO consistente con metadatos, Open Graph, JSON-LD, robots y sitemap.

## Stack actual

- `React Router 7` para rutas, SSR, `meta()` por pagina y `action()` server-side.
- `React 19` para la UI.
- `TypeScript` para tipado.
- `Vite` como bundler de desarrollo y build.
- `Tailwind CSS 4` para estilos.
- `GSAP` y `@gsap/react` para reveals, split text, parallax, scroll smoothing y microinteracciones.
- `react-icons` para iconografia puntual.
- Integracion con `Resend` via `fetch` HTTP directo desde servidor. No se usa el SDK oficial.

## Requisitos locales

- `Node.js 20+` recomendado.
- `npm` para instalar dependencias y ejecutar scripts.

## Como correr el proyecto

### Instalar dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El entorno queda disponible en `http://localhost:5173`.

### Typecheck

```bash
npm run typecheck
```

### Build

```bash
npm run build
```

Antes de compilar, el build genera `public/sitemap.xml`.

### Servir produccion

```bash
npm run start
```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo de React Router.
- `npm run typecheck`: genera tipos de rutas y ejecuta TypeScript.
- `npm run generate:sitemap`: genera `public/sitemap.xml` leyendo `app/routes.ts`.
- `npm run build`: genera sitemap y compila cliente y servidor.
- `npm run start`: sirve `build/server/index.js`.

Nota: hoy no hay scripts de `test` ni `lint` en `package.json`. La validacion automatizada disponible es `typecheck`.

## Variables de entorno

### SEO y URLs

- `SITE_URL`: URL canonica del sitio. Se usa en canonicals, Open Graph, JSON-LD y sitemap.

Si no existe, el proyecto usa `https://vixireproduccion.mx` como fallback.

### Formulario de contacto

- `RESEND_API_KEY`: token privado para autenticar con Resend.
- `CONTACT_FORM_TO_EMAIL`: correo que recibe los leads.
- `CONTACT_FORM_FROM_EMAIL`: remitente opcional. Si falta, se usa `VIXI Contacto <noreply@vixireproduccion.mx>`.

Si faltan `RESEND_API_KEY` o `CONTACT_FORM_TO_EMAIL`, la accion de contacto devuelve un error controlado y no intenta enviar correo.

## Funcionamiento actual

### 1. Rutas y rendering

- El proyecto corre con SSR habilitado en `react-router.config.ts`.
- `app/routes.ts` declara las rutas publicas.
- Cada archivo en `app/routes/*.tsx` suele hacer dos cosas: definir `meta()` y renderizar un page component.
- La unica ruta con `action()` es `/contacto`.

Rutas publicas actuales:

- `/`
- `/quienes-somos`
- `/nuestra-experiencia`
- `/tratamientos`
- `/como-funciona-tu-tratamiento`
- `/pacientes-foraneos`
- `/preguntas-frecuentes`
- `/contacto`

### 2. Layout global

`app/root.tsx` define:

- shell HTML global;
- favicon;
- metadatos base;
- JSON-LD para `MedicalClinic` y `WebSite`;
- `MarketingLayout` como contenedor comun de todo el sitio.

`MarketingLayout` monta:

- `SiteHeader`;
- `SiteFooter`;
- wrapper global de scroll suave;
- animaciones GSAP ligadas al contenido de cada pagina;
- `useScrollToTop()` al cambiar de ruta.

### 3. Sistema visual y animacion

La experiencia visual actual depende de:

- `app/app.css` para fuentes custom (`Corbel` y `Glancyr`), tema y utilidades;
- `app/components/lib/gsap.ts` para registrar `ScrollTrigger`, `ScrollSmoother`, `ScrollToPlugin` y `SplitText`;
- `app/components/hooks/useGlobalSmoothScroll.ts` para crear un `ScrollSmoother` global;
- atributos como `data-hero-root`, `data-split`, `data-card`, `data-text-block`, `data-reveal-item` y `data-parallax` para conectar el markup con las animaciones.

Las animaciones respetan `prefers-reduced-motion: reduce`.

### 4. Contenido

El contenido ya no vive en un solo archivo. Hoy esta repartido por dominio dentro de `app/components/data/`:

- `site.ts`: branding, URL base, navegacion y footer.
- `contact.ts`: telefono, WhatsApp, correo, direccion y coordenadas.
- `home.ts`: hero, pilares, estadisticas, diferenciales y audiencias.
- `about.ts`: perfiles del equipo, highlights e imagenes editoriales.
- `services.ts`: categorias de tratamiento, journey y apoyo a pacientes foraneos.
- `care.ts`: equipo multidisciplinario.
- `faq.ts`: preguntas frecuentes.
- `types.ts`: contratos tipados para contenido reutilizable.

Esto permite cambiar copy, rutas enlazadas, FAQs o datos de contacto sin tocar multiples paginas a la vez.

### 5. SEO

El SEO actual se reparte entre varios puntos:

- `app/root.tsx`: metadatos globales y JSON-LD base.
- `app/components/lib/meta.ts`: helper `buildMeta()` para title, description, keywords, canonical, Open Graph y Twitter cards.
- `scripts/generate-sitemap.mjs`: genera el sitemap leyendo `app/routes.ts`.
- `public/robots.txt`: reglas para crawling.
- `public/og/*`: imagenes Open Graph por pagina.

Cada ruta publica define su `meta()` usando `buildMeta()`.

### 6. Formulario de contacto

El flujo real del formulario esta dividido asi:

- `app/components/contact/contact-form-section.tsx`: UI del formulario, estados, dropdown custom del motivo y mapa embebido.
- `app/components/contact/contact-page.tsx`: composicion completa de la pagina de contacto.
- `app/routes/contacto.tsx`: validacion server-side y envio a Resend.

Resumen del flujo:

1. El usuario envia `name`, `email`, `phone`, `reason`, `message` y el honeypot `company`.
2. La `action()` valida nombre, correo, telefono, motivo y longitud del mensaje.
3. Si hay errores, devuelve `errors` y `values`.
4. Si el honeypot trae valor, responde como exito silencioso para cortar spam basico.
5. Si faltan variables de entorno, responde con error visible.
6. Si todo es valido, hace `POST` a `https://api.resend.com/emails`.
7. El correo se manda en `text` y `html`, usando el email capturado como `reply_to`.

## Arquitectura de carpetas

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

Notas sobre esa estructura:

- `app/routes/` contiene wrappers delgados por pagina.
- `app/components/*` agrupa UI y contenido por dominio funcional.
- `app/welcome/` viene del scaffold inicial de React Router y hoy no participa en las rutas publicas.
- `fonts/` guarda las tipografias locales cargadas desde `app/app.css`.
- `public/` concentra imagenes, logos, OG assets y archivos estaticos.

## Composicion de paginas

Las paginas actuales se arman con bloques reutilizables:

- `home/`: portada y secciones principales de captacion.
- `about/`: quienes somos y experiencia del paciente.
- `services/`: tratamientos y proceso.
- `contact/`: contacto, FAQ y pacientes foraneos.
- `shared/cta-banner.tsx`: CTA de cierre reutilizado en varias paginas.
- `ui/`: primitives como `PageHero`, `SectionHeading`, `ButtonLink`, `FeatureCard` e `ImageCard`.

## Operacion y mantenimiento

Si agregas o modificas una pagina, revisa al menos esto:

1. declarar la ruta en `app/routes.ts`;
2. crear o actualizar su `meta()` con `buildMeta()`;
3. enlazarla desde `siteNavigation` o `footerLinks` si aplica;
4. verificar assets en `public/`;
5. regenerar el sitemap con `npm run generate:sitemap` o `npm run build`.

Si cambias contenido global, normalmente los puntos de entrada son:

- `app/components/data/site.ts`
- `app/components/data/contact.ts`
- `app/components/data/home.ts`
- `app/components/data/about.ts`
- `app/components/data/services.ts`
- `app/components/data/care.ts`
- `app/components/data/faq.ts`

## Docker

El proyecto incluye un `Dockerfile` multi-stage que:

- instala dependencias de desarrollo para construir;
- instala dependencias de produccion por separado;
- ejecuta `npm run build`;
- arranca el proyecto con `npm run start`.

## Documentacion adicional

- `RESEND_INTEGRATION_GUIDE.md`: detalle tecnico de la integracion del formulario con Resend.

Este README reemplaza el template generico y documenta la estructura y el comportamiento actuales del frontend de VIXI.
