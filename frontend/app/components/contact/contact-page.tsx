import { Form, useNavigation } from "react-router";

import { contactDetails } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

const contactCards = [
  {
    label: "Teléfono",
    href: contactDetails.phoneHref,
    value: contactDetails.phoneDisplay,
  },
  {
    label: "WhatsApp",
    href: contactDetails.whatsappHref,
    value: contactDetails.whatsappDisplay,
  },
  {
    label: "Correo",
    href: contactDetails.emailHref,
    value: contactDetails.email,
  },
];

type ContactFormValues = {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
};

type ContactFormState = {
  errors?: Partial<Record<keyof ContactFormValues, string>> & { form?: string };
  success?: boolean;
  values?: ContactFormValues;
};

const contactReasons = [
  "Primera valoración",
  "Tratamientos de fertilidad",
  "Consulta en línea",
  "Pacientes foráneos",
  "Otra consulta",
];

export function ContactPage({ formState }: { formState?: ContactFormState }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const values = formState?.success ? {} : formState?.values ?? {};
  const errors = formState?.errors;

  return (
    <>
      <PageHero
        actions={[
          { label: "Enviar WhatsApp", to: contactDetails.whatsappHref, external: true },
          { label: "Llamar ahora", to: contactDetails.phoneHref, external: true },
        ]}
        description="Encuentra aquí dirección, horario, teléfono, WhatsApp, correo y la opción de consulta en línea para iniciar tu atención en VIXI."
        eyebrow="Contacto"
        image={{
          alt: "Fachada contemporánea de un hospital con luz cálida.",
          src: "/heroes/contact-hero-bg.avif",
        }}
        imageBadge="Canales directos"
        imageCaption="WhatsApp, llamada, correo y ubicación clara para facilitar tu primer contacto con la clínica."
        stats={[
          { value: "León, Gto.", label: "ubicación de la clínica" },
          { value: "8:30 a 18:00 h", label: "horario de atención" },
          { value: "Consulta en línea", label: "disponible" },
        ]}
        variant="concierge"
        title="Tu viaje a la fertilidad comienza con nosotros."
      />

      <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          description="Toda la información esencial para comunicarte con VIXI y programar tu primera valoración."
          eyebrow="Datos generales"
          title="Canales rápidos para iniciar tu valoración"
          variant="accent"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {contactCards.map((item) => (
            <a
              key={item.label}
              className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] transition hover:-translate-y-1"
              href={item.href}
              rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
              target={item.href.startsWith("https://") ? "_blank" : undefined}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">{item.label}</p>
              <p className="mt-4 text-xl font-semibold text-brand-950">{item.value}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)] sm:p-10">
          <SectionHeading
            description="Escribe tus datos y contexto general. El formulario queda listo para enviar correos con Resend mediante variables de entorno del servidor."
            eyebrow="Formulario de contacto"
            title="Cuéntanos en qué etapa estás"
            variant="accent"
          />

          <Form className="mt-8 grid gap-5" method="post">
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="company"
              tabIndex={-1}
              type="text"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                defaultValue={values.name}
                error={errors?.name}
                label="Nombre completo"
                name="name"
                placeholder="Tu nombre"
              />
              <FormField
                defaultValue={values.email}
                error={errors?.email}
                label="Correo electrónico"
                name="email"
                placeholder="nombre@correo.com"
                type="email"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                defaultValue={values.phone}
                error={errors?.phone}
                label="Teléfono o WhatsApp"
                name="phone"
                placeholder="477 000 0000"
                type="tel"
              />
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor="reason">
                  Motivo de contacto
                </label>
                <select
                  className="w-full rounded-[20px] border border-brand-950/12 bg-neutral-50 px-4 py-3.5 text-base text-brand-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200/80"
                  defaultValue={values.reason ?? ""}
                  id="reason"
                  name="reason"
                >
                  <option value="">Selecciona una opción</option>
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
                {errors?.reason ? <p className="text-sm text-[#9f1d35]">{errors.reason}</p> : null}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="min-h-40 w-full rounded-[24px] border border-brand-950/12 bg-neutral-50 px-4 py-3.5 text-base leading-7 text-brand-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200/80"
                defaultValue={values.message}
                id="message"
                name="message"
                placeholder="Comparte brevemente tu situación o la duda principal."
              />
              {errors?.message ? <p className="text-sm text-[#9f1d35]">{errors.message}</p> : null}
            </div>

            {errors?.form ? (
              <div className="rounded-[22px] border border-[#d86b82]/28 bg-[#fff1f4] px-5 py-4 text-sm leading-6 text-[#7f1730]">
                {errors.form}
              </div>
            ) : null}

            {formState?.success ? (
              <div className="rounded-[22px] border border-emerald-300/60 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-900">
                Gracias. Recibimos tu mensaje y el equipo de VIXI podrá responderte por correo o WhatsApp.
              </div>
            ) : null}

            <div className="flex flex-col gap-4 border-t border-brand-950/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-brand-950/65">
                Este formulario usa variables de entorno para enviar el mensaje por Resend.
                Configura <code className="font-mono text-[0.95em]">RESEND_API_KEY</code>, <code className="font-mono text-[0.95em]">CONTACT_FORM_TO_EMAIL</code> y opcionalmente <code className="font-mono text-[0.95em]">CONTACT_FORM_FROM_EMAIL</code>.
              </p>
              <button
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-950 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-950/55"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </Form>
        </div>

        <div className="grid gap-8">
          <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
            <SectionHeading
              description="VIXI está ubicado dentro de un entorno hospitalario confiable y ofrece consulta en línea para valoración inicial."
              eyebrow="Ubicación"
              tone="light"
              title="Dentro de un entorno hospitalario moderno y confiable"
              variant="editorial"
            />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-white/78">
              <p>{contactDetails.address}</p>
              <p>{contactDetails.hours}</p>
              <p>Consulta en línea disponible para valoración inicial y seguimiento.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-brand-950/10 bg-white shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
            <iframe
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av%20Cerro%20Gordo%2C%20Lomas%20del%20Campestre%2C%2037150%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.&output=embed"
              title="Ubicación de VIXI"
            />
          </div>
        </div>
      </section>

      <CTABanner
        description="El equipo de VIXI puede orientarte por teléfono, correo o WhatsApp para programar tu primera consulta."
        eyebrow="Agenda hoy"
        title="La conversación inicial puede empezar ahora."
      />
    </>
  );
}

function FormField({
  defaultValue,
  error,
  label,
  name,
  placeholder,
  type = "text",
}: {
  defaultValue?: string;
  error?: string;
  label: string;
  name: string;
  placeholder: string;
  type?: "email" | "tel" | "text";
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full rounded-[20px] border border-brand-950/12 bg-neutral-50 px-4 py-3.5 text-base text-brand-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200/80"
        defaultValue={defaultValue}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error ? <p className="text-sm text-[#9f1d35]">{error}</p> : null}
    </div>
  );
}
