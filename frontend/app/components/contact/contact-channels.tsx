import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

import { contactDetails } from "~/components/data";
import {
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";
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
  const reducedMotion = useReducedMotion();
  const listVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.1,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 42,
    duration: 0.84,
  });

  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <SectionHeading
        description="Toda la información esencial para comunicarte con VIXI y programar tu primera valoración."
        eyebrow="Datos generales"
        title="Canales rápidos para iniciar tu valoración"
        variant="accent"
      />
      <motion.div
        className="mt-8 grid gap-5 lg:grid-cols-3"
        initial="hidden"
        variants={listVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        {contactCards.map((item) => (
          <motion.a
            key={item.label}
            className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)] transition hover:-translate-y-1"
            href={item.href}
            rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
            target={item.href.startsWith("https://") ? "_blank" : undefined}
            variants={cardVariants}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              <motion.span
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: [0, -4, 2, 0],
                        y: [0, -6, 0],
                      }
                }
                className="inline-flex"
                transition={{ duration: 4.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
              >
                <item.icon aria-hidden="true" className="h-4 w-4" />
              </motion.span>
              {item.label}
            </p>
            <p className="mt-4 text-xl font-semibold text-brand-950">{item.value}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
