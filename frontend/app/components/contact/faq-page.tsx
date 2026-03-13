import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { faqItems } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

export function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0]?.question ?? null);

  return (
    <>
      <PageHero
        description="Las preguntas frecuentes concentran inquietudes previas a la valoración: costos, tiempos, probabilidad de éxito y acompañamiento remoto."
        eyebrow="Preguntas frecuentes"
        image={{
          alt: "Recepción clínica con paciente resolviendo dudas antes de consulta.",
          src: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
        }}
        imageBadge="Información esencial"
        imageCaption="Respuestas claras para entender costos, tiempos, probabilidades y opciones de atención."
        stats={[
          { value: "Costos", label: "explicados por etapa" },
          { value: "Tiempos", label: "según cada procedimiento" },
          { value: "Expectativas", label: "desde criterios médicos responsables" },
        ]}
        variant="editorial"
        title="Respuestas claras para las dudas más comunes antes de empezar."
      />

      <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
        <SectionHeading
          align="center"
          description="Aquí resolvemos dudas frecuentes con información útil, cercana y médicamente responsable para una mejor decisión."
          eyebrow="FAQ"
          title="Información útil sin ruido ni sobrepromesas"
          variant="minimal"
        />
        <div className="mt-8 grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openQuestion === item.question;

            return (
              <motion.article
                key={item.question}
                animate={{ opacity: 1, y: 0 }}
                className={[
                  "group relative overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)] transition",
                  isOpen
                    ? "border-brand-700/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,240,235,0.98))]"
                    : "border-brand-950/10 bg-white/92 hover:border-brand-950/18",
                ].join(" ")}
                initial={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.24, delay: Math.min(index * 0.04, 0.16), ease: "easeOut" }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/30 to-transparent" />
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                  type="button"
                >
                  <span className="space-y-3">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-brand-950/10 bg-white/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-[0_10px_22px_rgba(11,31,59,0.06)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700/70">
                        Pregunta frecuente
                      </span>
                    </span>
                    <span className="block pr-4 text-lg font-semibold leading-7 text-brand-950 sm:text-[1.35rem]">
                      {item.question}
                    </span>
                  </span>
                  <motion.span
                    animate={
                      isOpen
                        ? { rotate: 45, backgroundColor: "rgb(11 31 59)" }
                        : { rotate: 0, backgroundColor: "rgb(255 255 255 / 0.82)" }
                    }
                    className={[
                      "mt-1 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(11,31,59,0.08)]",
                      isOpen ? "border-brand-950 text-white" : "border-brand-950/10 text-brand-700",
                    ].join(" ")}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: "easeOut" }}
                    >
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-5 max-w-3xl border-t border-brand-950/8 pt-5 text-sm leading-7 text-brand-950/72"
                        initial={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, delay: 0.04, ease: "easeOut" }}
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>

      <CTABanner
        description="Si tu duda requiere contexto médico, agenda una valoración para recibir una respuesta ajustada a tu caso."
        eyebrow="Resuelve tus dudas"
        title="La mejor respuesta siempre parte de tu diagnóstico."
      />
    </>
  );
}
