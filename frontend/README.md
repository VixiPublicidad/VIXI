# VIXI Frontend

Sitio web marketing de VIXI, una clinica de fertilidad enfocada en reproduccion asistida. El proyecto esta construido con React Router 7, React 19, TypeScript y Tailwind CSS 4, con renderizado del lado del servidor y una arquitectura orientada a contenido estatico enriquecido con SEO tecnico y un formulario de contacto funcional.

## 1. Objetivo del sitio

El sitio esta pensado para:

- Presentar la propuesta de valor de VIXI con una narrativa editorial y visual.
- Explicar el equipo, la experiencia del paciente, los tratamientos y el proceso clinico.
- Resolver dudas frecuentes antes de la primera consulta.
- Captar leads por WhatsApp, llamada telefonica, correo y formulario.
- Posicionar organicamente el sitio con metadatos, Open Graph, datos estructurados y sitemap.

## 2. Stack tecnico

- `React Router 7` para enrutamiento, SSR y acciones del servidor.
- `React 19` para la UI.
- `TypeScript` para tipado del proyecto.
- `Tailwind CSS 4` para estilos utilitarios.
- `Framer Motion` para transiciones y microinteracciones.
- `Lenis` para smooth scroll en cliente.
- `React Icons` para iconografia.
- `Resend API` para el envio del formulario de contacto.

## 3. Como correr el proyecto

### Instalar dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

### Typecheck

```bash
npm run typecheck
```

### Build de produccion

```bash
npm run build
```

El build ejecuta antes la generacion del sitemap.

### Servir el build

```bash
npm run start
```

## 4. Scripts disponibles

- `npm run dev`: levanta el entorno de desarrollo.
- `npm run typecheck`: genera tipos de rutas y ejecuta TypeScript.
- `npm run generate:sitemap`: crea `public/sitemap.xml` a partir de `app/routes.ts`.
- `npm run build`: genera sitemap y compila cliente y servidor.
- `npm run start`: sirve la salida de produccion desde `build/server/index.js`.

## 5. Variables de entorno

Estas variables afectan comportamiento real del sitio:

### SEO y URLs

- `SITE_URL`: URL canonica del sitio. Se usa para canonicals, Open Graph, datos estructurados y sitemap.

### Formulario de contacto

- `RESEND_API_KEY`: API key de Resend.
- `CONTACT_FORM_TO_EMAIL`: correo destino que recibe los leads.
- `CONTACT_FORM_FROM_EMAIL`: remitente opcional. Si no existe, se usa `VIXI Contacto <noreply@vixireproduccion.mx>`.

Si `RESEND_API_KEY` o `CONTACT_FORM_TO_EMAIL` no estan definidos, el formulario no envia y responde con un error controlado en pantalla.

## 6. Arquitectura general

La aplicacion sigue una estructura simple de marketing site:

- `app/root.tsx`: define la shell HTML, metadatos globales, JSON-LD base y error boundary.
- `app/routes.ts`: declara todas las rutas publicas.
- `app/routes/*.tsx`: define cada pagina y, cuando aplica, `meta()` y `action()`.
- `app/components/layout/*`: header, footer, layout marketing y proveedor de scroll.
- `app/components/data/site-content.ts`: fuente central de contenido, navegacion, contacto, FAQs, tratamientos y metadata reutilizable.
- `app/components/ui/*`: componentes base presentacionales como `PageHero`, `SectionHeading`, `FeatureCard` e `ImageCard`.
- `app/components/home`, `app/components/about`, `app/components/services`, `app/components/contact`: bloques de pagina por dominio.
- `scripts/generate-sitemap.mjs`: genera sitemap a partir del archivo de rutas.

## 7. Mapa del sitio

Las rutas publicas actuales son:

- `/`: inicio.
- `/quienes-somos`: equipo medico, perfiles y enfoque clinico.
- `/nuestra-experiencia`: experiencia del paciente, tono humano y acompanamiento.
- `/tratamientos`: portafolio de servicios y tratamientos.
- `/como-funciona-tu-tratamiento`: recorrido del proceso clinico.
- `/pacientes-foraneos`: atencion para pacientes de otros estados o paises.
- `/preguntas-frecuentes`: preguntas frecuentes.
- `/contacto`: datos de contacto, mapa y formulario.

La navegacion principal y parte del footer se alimentan desde `app/components/data/site-content.ts`, lo que evita duplicar labels o URLs.

## 8. Como funciona el sitio

### Layout y experiencia base

- Todas las paginas renderizan dentro de `MarketingLayout`.
- El layout monta `SiteHeader`, `SiteFooter` y `LenisProvider`.
- `useScrollToTop` restablece la posicion al cambiar de ruta.
- El header cambia de estilo segun scroll y segun la pagina actual.
- En mobile, el menu bloquea el scroll del `body` mientras esta abierto.

### Contenido

- La mayor parte del contenido editorial vive en `site-content.ts`.
- Las paginas consumen ese contenido y lo transforman en secciones visuales.
- Esto facilita cambiar copy, telefonos, FAQs, tratamientos o navegacion sin reescribir multiples componentes.

### Interaccion principal

El sitio prioriza cuatro canales de conversion:

- WhatsApp.
- Llamada telefonica.
- Correo.
- Formulario de contacto.

Estos canales aparecen repetidamente en hero sections, CTAs, footer y pagina de contacto.

## 9. Flujo del formulario de contacto

La logica del formulario vive en `app/routes/contacto.tsx` y su UI en `app/components/contact/contact-page.tsx`.

### Flujo completo

1. El usuario completa nombre, correo, telefono, motivo y mensaje.
2. Existe un campo oculto `company` como honeypot anti-spam.
3. La `action()` del route recibe `formData` en el servidor.
4. Se validan longitudes minimas, formato de correo, motivo y limite de `2000` caracteres en el mensaje.
5. Si hay errores, la accion devuelve `errors` y `values` para rehidratar el formulario.
6. Si faltan variables de entorno, devuelve un error de configuracion visible.
7. Si todo es valido, el servidor hace `POST` a `https://api.resend.com/emails`.
8. El correo se arma en dos formatos: `text` y `html`.
9. Si Resend responde con error, se muestra un mensaje de fallo controlado.
10. Si el envio funciona, se muestra el estado `success`.

### Detalles importantes

- `reply_to` se configura con el correo capturado en el formulario.
- El correo HTML conserva branding visual de VIXI.
- El selector de motivo de contacto es un componente custom con portal y animaciones.
- `useNavigation()` se usa para mostrar estado de envio en el boton.

## 10. SEO y discoverability

El proyecto ya incorpora una base SEO bastante completa:

- Metadatos globales desde `app/root.tsx`.
- Metadatos por pagina a traves de `buildMeta()` en `app/components/lib/meta.ts`.
- Canonical URLs.
- Open Graph y Twitter cards.
- Keywords por ruta.
- JSON-LD para `MedicalClinic` y `WebSite`.
- `sitemap.xml` generado automaticamente desde las rutas declaradas.

La URL base para todos estos recursos depende de `SITE_URL`.

## 11. Sistema de contenido y componentes

### Fuente unica de contenido

`app/components/data/site-content.ts` centraliza:

- nombre del sitio y tagline,
- descripcion global,
- navegacion,
- datos de contacto,
- imagenes de hero y galerias,
- pilares de marca,
- perfiles medicos,
- categorias de tratamientos,
- FAQs,
- journey del tratamiento,
- enlaces de footer.

### Componentes reutilizables clave

- `PageHero`: hero principal de cada pagina.
- `SectionHeading`: encabezados consistentes de seccion.
- `FeatureCard`: tarjetas de contenido corto.
- `ImageCard`: bloques visuales reutilizables.
- `CTABanner`: cierre de pagina con llamada a la accion.
- `ButtonLink`: CTA estilizado con soporte para links internos o externos.

## 12. Estructura resumida de carpetas

```text
frontend/
  app/
    components/
      about/
      contact/
      data/
      home/
      layout/
      lib/
      services/
      shared/
      ui/
    routes/
    root.tsx
    routes.ts
    app.css
  public/
  scripts/
    generate-sitemap.mjs
  package.json
```

## 13. Consideraciones operativas

- Es un sitio mayormente estatico, pero no es una SPA pura: usa SSR.
- El smooth scroll solo se activa si el usuario no tiene `prefers-reduced-motion: reduce`.
- El formulario depende de conectividad saliente hacia Resend desde el servidor.
- El sitemap depende de que las rutas publicas queden declaradas en `app/routes.ts`.
- Si se agrega una nueva pagina, conviene actualizar:
  - la ruta en `app/routes.ts`,
  - el contenido o enlaces en `site-content.ts`,
  - su `meta()` correspondiente,
  - y verificar que quede incluida en el sitemap.

## 14. Mantenimiento recomendado

Cuando se modifique el sitio, revisar al menos estos puntos:

- que los datos de contacto sigan correctos en `site-content.ts`,
- que `SITE_URL` coincida con el dominio real del entorno,
- que las imagenes referenciadas existan en `public/`,
- que el formulario siga teniendo variables validas en servidor,
- que las rutas nuevas o removidas mantengan coherencia con header, footer y sitemap.

## 15. Estado actual del README

Este archivo reemplaza el template generico de React Router y documenta el comportamiento real del proyecto VIXI en su estado actual.
