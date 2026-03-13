import { faqItems } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

export function FAQPage() {
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
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[28px] border border-brand-950/10 bg-white/92 p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)]"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-brand-950 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-2xl text-brand-700 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-950/72">{item.answer}</p>
            </details>
          ))}
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
