import { ContactPage } from "~/components/contact/contact-page";
import { buildMeta } from "~/components/lib/meta";
import type { Route } from "./+types/contacto";

export function meta() {
  return buildMeta(
    "Contacto y citas en León, Guanajuato",
    "Ubicación, horario, teléfono, WhatsApp, correo y consulta en línea de VIXI para agendar tu valoración en León, Guanajuato.",
    {
      path: "/contacto",
      image: "/og/og-1.png",
      keywords: ["contacto vixi", "citas fertilidad leon", "whatsapp clinica fertilidad"],
    },
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
  const from = process.env.CONTACT_FORM_FROM_EMAIL ?? "VIXI Contacto <noreply@vixireproduccion.mx>";

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
  const replyMailto = buildReplyMailto(values);
  const rows = [
    ["Nombre", values.name],
    ["Correo", values.email],
    ["Teléfono", values.phone],
    ["Motivo", values.reason],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:14px 16px;font-weight:700;color:#1e3a5f;border-bottom:1px solid #dbe8f4;width:34%;background:#f8fafc;">${escapeHtml(label)}</td><td style="padding:14px 16px;color:#0b1f3b;border-bottom:1px solid #dbe8f4;background:#ffffff;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="margin:0;padding:32px 16px;background:#f5f7fa;background-image:radial-gradient(circle at top left, rgba(247,214,222,0.72), transparent 34%),radial-gradient(circle at top right, rgba(219,232,244,0.9), transparent 32%),linear-gradient(180deg, #f8fafc 0%, #ffffff 48%, #f5f7fa 100%);font-family:Corbel,Arial,sans-serif;color:#0b1f3b;">
      <div style="max-width:680px;margin:0 auto;">
        <div style="background:#0b1f3b;border-radius:28px 28px 0 0;padding:28px 28px 24px;background-image:linear-gradient(135deg, #0b1f3b 0%, #183457 100%);">
          <img src="https://www.vixireproduccion.mx/logos/vixi_logo_white.webp" alt="VIXI" width="148" style="display:block;width:148px;max-width:100%;height:auto;margin:0 0 18px;" />
          <p style="margin:0 0 10px;font-size:11px;line-height:1;letter-spacing:0.28em;text-transform:uppercase;color:#f8b9c8;">Nuevo contacto</p>
          <h1 style="margin:0;font-family:Glancyr,Corbel,Arial,sans-serif;font-size:28px;line-height:1.15;color:#ffffff;font-weight:700;">Solicitud recibida desde el formulario de VIXI</h1>
        </div>
        <div style="background:#ffffff;border:1px solid #dbe8f4;border-top:none;border-radius:0 0 28px 28px;padding:28px;box-shadow:0 20px 60px rgba(11,31,59,0.08);">
          <div style="margin:0 0 24px;padding:16px 18px;border:1px solid #f7d6de;border-radius:18px;background:#fff6f8;color:#7f1730;font-size:14px;line-height:1.6;">
            Este correo resume una nueva solicitud de contacto enviada desde <strong>vixireproduccion.mx</strong>.
          </div>
          <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#1e3a5f;">Datos de contacto</p>
          <table style="width:100%;border-collapse:separate;border-spacing:0;margin:0 0 24px;border:1px solid #dbe8f4;border-radius:20px;overflow:hidden;">${rows}</table>
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#1e3a5f;">Mensaje</p>
          <div style="padding:20px 22px;border-radius:20px;background:#f8fafc;border:1px solid #dbe8f4;font-size:16px;line-height:1.8;color:#0b1f3b;white-space:pre-wrap;">${escapeHtml(values.message)}</div>
          <div style="margin-top:24px;padding-top:18px;border-top:1px solid #dbe8f4;font-size:13px;line-height:1.6;color:#51627c;">
            Responde directamente a este correo para continuar la conversación con <strong>${escapeHtml(values.name)}</strong>.
          </div>
          <div style="margin:24px 0 0;">
            <a href="${replyMailto}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:#0b1f3b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.02em;">
              Responder por correo
            </a>
          </div>
        </div>
      </div>
    </div>
  `.trim();
}

function buildReplyMailto(values: ContactFormValues) {
  const subject = "Re: Tu solicitud de contacto en VIXI";
  const body = `Hola ${values.name},\n\nGracias por contactarnos.\n\nSaludos,\nVIXI`;

  return `mailto:${encodeURIComponent(values.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
