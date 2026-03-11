import { ContactPage } from "~/components/contact/contact-page";
import { buildMeta } from "~/components/lib/meta";
import type { Route } from "./+types/contacto";

export function meta() {
  return buildMeta(
    "Contacto",
    "Ubicación, horario, teléfono, WhatsApp, correo y consulta en línea de VIXI.",
  );
}

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

type ContactActionData = {
  errors?: Partial<Record<keyof ContactFormValues, string>> & { form?: string };
  success?: boolean;
  values?: Partial<ContactFormValues>;
};

const MAX_MESSAGE_LENGTH = 2000;

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  if (String(formData.get("company") ?? "").trim()) {
    return { success: true } satisfies ContactActionData;
  }

  const values: ContactFormValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    reason: String(formData.get("reason") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactActionData["errors"] = {};

  if (values.name.length < 3) errors.name = "Ingresa un nombre válido.";
  if (!isValidEmail(values.email)) errors.email = "Ingresa un correo válido.";
  if (values.phone.length < 8) errors.phone = "Ingresa un teléfono o WhatsApp válido.";
  if (!values.reason) errors.reason = "Selecciona el motivo de contacto.";
  if (values.message.length < 20) errors.message = "Comparte un poco más de contexto.";
  if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Tu mensaje no debe exceder ${MAX_MESSAGE_LENGTH} caracteres.`;
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values } satisfies ContactActionData;
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  const from = process.env.CONTACT_FORM_FROM_EMAIL ?? "VIXI Contacto <onboarding@resend.dev>";

  if (!resendApiKey || !to) {
    return {
      errors: {
        form: "Faltan variables de entorno del servidor para enviar el formulario con Resend.",
      },
      values,
    } satisfies ContactActionData;
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
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

  if (!resendResponse.ok) {
    return {
      errors: {
        form: "No fue posible enviar el mensaje en este momento. Intenta nuevamente en unos minutos.",
      },
      values,
    } satisfies ContactActionData;
  }

  return { success: true } satisfies ContactActionData;
}

export default function ContactoRoute({ actionData }: Route.ComponentProps) {
  return <ContactPage formState={actionData} />;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildTextEmail(values: ContactFormValues) {
  return [
    "Nuevo mensaje desde el formulario de contacto de VIXI",
    "",
    `Nombre: ${values.name}`,
    `Correo: ${values.email}`,
    `Teléfono: ${values.phone}`,
    `Motivo: ${values.reason}`,
    "",
    "Mensaje:",
    values.message,
  ].join("\n");
}

function buildHtmlEmail(values: ContactFormValues) {
  const rows = [
    ["Nombre", values.name],
    ["Correo", values.email],
    ["Teléfono", values.phone],
    ["Motivo", values.reason],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:700;color:#1e3a5f;border-bottom:1px solid #dbe8f4;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0b1f3b;border-bottom:1px solid #dbe8f4;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f5f7fa;padding:24px;color:#0b1f3b;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:24px;padding:24px;border:1px solid #dbe8f4;">
        <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#1e3a5f;">Nuevo contacto VIXI</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">${rows}</table>
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#1e3a5f;">Mensaje</p>
        <div style="font-size:16px;line-height:1.7;color:#0b1f3b;white-space:pre-wrap;">${escapeHtml(values.message)}</div>
      </div>
    </div>
  `.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
