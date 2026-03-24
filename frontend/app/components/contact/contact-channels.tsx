import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

const contactCards = [
  {
    label: "Teléfono",
    href: contactDetails.phoneHref,
    icon: FaPhone,
    value: contactDetails.phoneDisplay,
  },
  {
    label: "WhatsApp",
    href: contactDetails.whatsappHref,
    icon: FaWhatsapp,
    value: contactDetails.whatsappDisplay,
  },
  {
    label: "Correo",
    href: contactDetails.emailHref,
    icon: FaEnvelope,
    value: contactDetails.email,
  },
];

export function ContactChannels() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
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
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              {"icon" in item && item.icon ? <item.icon aria-hidden="true" className="h-4 w-4" /> : null}
              {item.label}
            </p>
            <p className="mt-4 text-xl font-semibold text-brand-950">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
