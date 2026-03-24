import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails, faqItems } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomeFaqContact() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div className="rounded-[32px] border border-brand-950/8 bg-white/84 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
        <SectionHeading
          description="Respondemos dudas frecuentes sobre costos, tiempos de proceso y probabilidad de \u00e9xito desde una perspectiva m\u00e9dica responsable."
          eyebrow="FAQ destacadas"
          title="Claridad antes de empezar"
          variant="minimal"
        />
        <div className="mt-8 grid gap-4">
          {faqItems.slice(0, 3).map((item) => (
            <article key={item.question} className="rounded-[28px] bg-brand-950/[0.045] p-6">
              <h3 className="font-display text-[1.45rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-950">
                {item.question}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-brand-950/78">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] bg-accent-100 p-8 text-brand-950 shadow-[0_20px_50px_rgba(244,166,183,0.18)]">
        <p className="eyebrow-label text-brand-700">{"Contacto r\u00e1pido"}</p>
        <h2 className="display-balance mt-4 font-display text-4xl leading-[0.96] tracking-[-0.045em]">
          {"Agenda tu primera conversaci\u00f3n con el equipo."}
        </h2>
        <div className="mt-8 grid gap-4 text-sm leading-6 sm:grid-cols-2">
          <a className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white" href={contactDetails.phoneHref}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaPhone aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">{contactDetails.phoneDisplay}</span>
          </a>
          <a
            className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            href={contactDetails.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaWhatsapp aria-hidden="true" className="h-6 w-6 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">{contactDetails.whatsappDisplay}</span>
          </a>
          <a className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white" href={contactDetails.emailHref}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-200/50">
              <FaEnvelope aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 break-all font-medium text-brand-950/80">{contactDetails.email}</span>
          </a>
          <a
            className="flex h-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white/72 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            href={`https://maps.google.com/?q=${encodeURIComponent(contactDetails.address)}`}
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-200/50">
              <FaMapMarkerAlt aria-hidden="true" className="h-5 w-5 text-brand-700" />
            </span>
            <span className="mt-1 font-medium text-brand-950/80">{contactDetails.address}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
