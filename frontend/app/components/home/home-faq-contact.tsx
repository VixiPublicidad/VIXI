import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails, faqItems } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeFaqContact() {
  return (
    <section className="mx-auto grid max-w-[90vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
        <SectionHeading
          description="Respondemos dudas frecuentes sobre costos, tiempos de proceso y probabilidad de éxito desde una perspectiva médica responsable."
          eyebrow="FAQ destacadas"
          title="Claridad antes de empezar"
          variant="minimal"
        />
        <div className="mt-8 grid gap-4">
          {faqItems.slice(0, 3).map((item) => (
            <article key={item.question} className="rounded-[24px] bg-brand-950/4 p-5">
              <h3 className="text-lg font-semibold text-brand-950">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-950/72">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] bg-accent-100 p-8 text-brand-950 shadow-[0_20px_50px_rgba(244,166,183,0.22)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Contacto rápido</p>
        <h2 className="mt-4 font-display text-4xl leading-none">Agenda tu primera conversación con el equipo.</h2>
        <div className="mt-8 grid gap-4 text-sm leading-6">
          <a className="inline-flex items-center gap-3 rounded-[24px] bg-white/72 px-5 py-4" href={contactDetails.phoneHref}>
            <FaPhone aria-hidden="true" className="h-4 w-4 text-brand-700" />
            {contactDetails.phoneDisplay}
          </a>
          <a
            className="inline-flex items-center gap-3 rounded-[24px] bg-white/72 px-5 py-4"
            href={contactDetails.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-brand-700" />
            {contactDetails.whatsappDisplay}
          </a>
          <a className="inline-flex items-center gap-3 rounded-[24px] bg-white/72 px-5 py-4" href={contactDetails.emailHref}>
            <FaEnvelope aria-hidden="true" className="h-4 w-4 text-brand-700" />
            {contactDetails.email}
          </a>
          <div className="inline-flex items-center gap-3 rounded-[24px] bg-white/72 px-5 py-4">
            <FaMapMarkerAlt aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-700" />
            {contactDetails.address}
          </div>
        </div>
      </div>
    </section>
  );
}
