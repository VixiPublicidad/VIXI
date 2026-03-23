# Implementacion actual de Resend en VIXI

Este documento explica como esta implementado el envio de correos con Resend en este proyecto para que otra IA pueda replicar la misma logica en un sitio distinto, especialmente en otro formulario.

## Resumen ejecutivo

En VIXI, `Resend` no se usa mediante su SDK oficial. La integracion actual hace un `fetch` directo desde el servidor hacia:

```text
https://api.resend.com/emails
```

La logica vive en la accion del route de contacto:

- `frontend/app/routes/contacto.tsx`

La UI del formulario vive aqui:

- `frontend/app/components/contact/contact-page.tsx`

## Arquitectura actual

El flujo esta dividido en dos partes:

1. `contact-page.tsx` renderiza el formulario y hace `POST` tradicional con `<Form method="post">`.
2. `contacto.tsx` recibe el `FormData` del lado del servidor, valida datos y, si todo es correcto, envia el correo a Resend.

Punto importante:

- El secreto `RESEND_API_KEY` nunca se expone al cliente.
- Todo el envio ocurre del lado servidor.
- El cliente solo muestra errores, estado de envio y mensaje de exito.

## Campos que envia el formulario

El formulario actual manda estos campos:

- `name`
- `email`
- `phone`
- `reason`
- `message`
- `company` (honeypot anti-spam)

`company` es un campo oculto. Si llega con valor, el servidor asume bot/spam y termina el flujo sin enviar correo.

## Validaciones actuales

Antes de llamar a Resend, el servidor valida:

- `name`: minimo 3 caracteres.
- `email`: regex basica de correo valido.
- `phone`: minimo 8 caracteres.
- `reason`: obligatorio.
- `message`: minimo 20 caracteres.
- `message`: maximo 2000 caracteres.

Si alguna validacion falla:

- no se llama a Resend,
- se devuelve `{ errors, values }`,
- la UI repinta el formulario con los datos previos y mensajes de error.

## Variables de entorno requeridas

La integracion depende de estas variables:

```env
RESEND_API_KEY=...
CONTACT_FORM_TO_EMAIL=destino@dominio.com
CONTACT_FORM_FROM_EMAIL=VIXI Contacto <noreply@vixireproduccion.mx>
```

Comportamiento:

- `RESEND_API_KEY`: token privado para autenticar con Resend.
- `CONTACT_FORM_TO_EMAIL`: correo que recibe el lead.
- `CONTACT_FORM_FROM_EMAIL`: remitente visible. Si no existe, el codigo usa este fallback:

```text
VIXI Contacto <noreply@vixireproduccion.mx>
```

Si faltan `RESEND_API_KEY` o `CONTACT_FORM_TO_EMAIL`, el formulario devuelve un error controlado y no intenta enviar.

## Request exacto hacia Resend

La llamada actual se hace asi, conceptualmente:

```ts
const resendResponse = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from,
    to: [to],
    reply_to: values.email,
    subject: `Nuevo contacto VIXI: ${values.reason}`,
    text: buildTextEmail(values),
    html: buildHtmlEmail(values),
  }),
});
```

## Payload que manda VIXI

Este es el significado de cada propiedad del payload:

- `from`: remitente configurado en variables de entorno.
- `to`: arreglo con un solo destinatario, el correo interno de recepcion de leads.
- `reply_to`: correo que escribio el usuario en el formulario.
- `subject`: asunto con prefijo fijo y el motivo del contacto.
- `text`: version plana del correo.
- `html`: version con branding y estructura visual.

### Ejemplo real del payload

```json
{
  "from": "VIXI Contacto <noreply@vixireproduccion.mx>",
  "to": ["recepcion@dominio.com"],
  "reply_to": "paciente@correo.com",
  "subject": "Nuevo contacto VIXI: Primera valoracion",
  "text": "Nuevo mensaje desde el formulario de contacto de VIXI\n\nNombre: ...",
  "html": "<div style=\"...\">...</div>"
}
```

## Como construye el correo

La implementacion genera dos versiones del mensaje:

### 1. Texto plano

Se arma una salida simple con:

- encabezado fijo,
- nombre,
- correo,
- telefono,
- motivo,
- mensaje.

Esto sirve como fallback para clientes de correo que no rendericen HTML.

### 2. HTML

Se construye un template HTML inline con:

- cabecera de marca,
- tabla con datos del contacto,
- bloque visual para el mensaje,
- boton `mailto:` para responder,
- textos de continuidad de conversacion.

La salida HTML escapa caracteres peligrosos con una funcion `escapeHtml()` para evitar inyectar HTML arbitrario desde campos del usuario.

## Respuesta y manejo de errores

Despues del `fetch`:

- si `resendResponse.ok` es `false`, se devuelve un error de formulario generico;
- si `resendResponse.ok` es `true`, se devuelve `{ success: true }`.

La UI reacciona asi:

- muestra errores por campo si hay validaciones fallidas,
- muestra error general si falla configuracion o envio,
- muestra mensaje de exito si el correo fue enviado.

## Puntos de seguridad ya contemplados

- La API key vive solo en servidor.
- Hay honeypot (`company`) contra bots simples.
- Se validan campos antes del envio.
- El HTML del correo escapa contenido del usuario.
- Se usa `reply_to` en lugar de falsificar el `from` con el correo del visitante.

## Lo que otra IA debe replicar en otro sitio

Si otra IA debe implementar esto en un proyecto diferente, debe conservar estas decisiones:

1. El envio a Resend debe ocurrir en backend, action server, API route o serverless function. Nunca desde el navegador.
2. La API key debe vivir en variables de entorno privadas.
3. El formulario debe tener validaciones minimas del lado servidor aunque ya existan validaciones de cliente.
4. Debe existir un destinatario interno fijo, por ejemplo `CONTACT_FORM_TO_EMAIL`.
5. El correo del usuario debe ir en `reply_to`, no en `from`.
6. Conviene mandar tanto `text` como `html`.
7. El HTML debe sanitizar o escapar cualquier contenido inyectado desde el formulario.
8. Si se quiere filtrar spam basico, usar un honeypot oculto.

## Plantilla de implementacion portable

Esta plantilla resume la logica para otro framework:

```ts
type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export async function sendContactEmail(values: ContactPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  const from = process.env.CONTACT_FORM_FROM_EMAIL ?? "Sitio Web <noreply@tu-dominio.com>";

  if (!resendApiKey || !to) {
    throw new Error("Missing Resend configuration");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `Nuevo contacto: ${values.reason}`,
      text: buildTextEmail(values),
      html: buildHtmlEmail(values),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend send failed");
  }
}
```

## Adaptacion a otro formulario

Si el otro sitio no tiene exactamente los mismos campos, la IA que lo implemente debe:

- mapear los nuevos campos al payload del correo,
- mantener `reply_to` con el email del usuario si el formulario lo incluye,
- ajustar `subject`,
- regenerar `buildTextEmail()` y `buildHtmlEmail()` segun el nuevo dominio,
- cambiar el remitente `from` a un dominio autorizado en la cuenta de Resend,
- conservar escape/sanitizacion.

Ejemplos:

- Si el otro formulario es de cotizacion, `reason` podria ser `tipoDeServicio`.
- Si es un formulario medico distinto, `message` podria combinar sintomas, sede y disponibilidad.
- Si no existe campo `phone`, simplemente se elimina del template.

## Dependencias reales

Esta implementacion no depende del paquete `resend` en `package.json`.

Eso significa que para replicarla en otro sitio hay dos opciones validas:

1. Mantener el mismo enfoque con `fetch` directo a la API HTTP de Resend.
2. Reescribirla usando el SDK oficial de Resend, si el nuevo proyecto lo prefiere.

Si el objetivo es copiar el comportamiento exacto de VIXI, la opcion correcta es la primera.

## Archivos fuente a revisar

Para una replica fiel, la otra IA debe tomar como fuente estos archivos:

- `frontend/app/routes/contacto.tsx`
- `frontend/app/components/contact/contact-page.tsx`

## Instruccion breve para otra IA

Implementa un formulario server-side que:

- reciba datos del usuario,
- valide campos en backend,
- use `RESEND_API_KEY` desde entorno privado,
- haga `POST` a `https://api.resend.com/emails`,
- envie `from`, `to`, `reply_to`, `subject`, `text` y `html`,
- use el email del usuario como `reply_to`,
- muestre errores controlados y mensaje de exito,
- y nunca exponga la API key al cliente.
