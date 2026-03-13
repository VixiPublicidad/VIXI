import { experienceHighlights, empathyGalleryImages } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { FeatureCard } from "~/components/ui/feature-card";
import { ImageCard } from "~/components/ui/image-card";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

const principles = [
  {
    title: "Atención integral",
    description: "Desde el diagnóstico hasta el embarazo y más allá, el acompañamiento se mantiene durante todo el proceso.",
  },
  {
    title: "Ambiente moderno y tranquilo",
    description: "VIXI se vive como un espacio sereno, moderno y acogedor que transmite confianza desde la llegada.",
  },
  {
    title: "Enfoque personalizado",
    description: "Cada paciente debe sentir que su tratamiento es único y diseñado para su historia clínica y emocional.",
  },
];

export function ExperiencePage() {
  return (
    <>
      <PageHero
        description="La experiencia en VIXI combina tecnología avanzada con una sensación acogedora y relajante, para acompañarte con claridad en cada etapa."
        eyebrow="Nuestra experiencia"
        image={{
          alt: "Clinica de fertilidad VIXI.",
          src: "/heroes/experience-hero-bg.avif",
        }}
        imageBadge="Experiencia sensorial"
        imageCaption="Un ambiente moderno, tranquilo y humano que acompaña decisiones médicas importantes."
        stats={[
          { value: "Integral", label: "desde diagnóstico hasta seguimiento" },
          { value: "Serena", label: "tecnología avanzada con calma" },
          { value: "Personal", label: "acompañamiento en cada etapa" },
        ]}
        variant="process"
        title="Tecnología avanzada con una sensación acogedora y relajante."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
        <SectionHeading
          align="center"
          description="Atención integral, trato cercano y una sensación de calma que ayuda a vivir el proceso con mayor confianza."
          eyebrow="Lo que se siente"
          title="Una clínica minimalista con un toque cálido y profundamente humano"
          variant="highlight"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {principles.map((item) => (
            <FeatureCard
              key={item.title}
              description={item.description}
              eyebrow="Experiencia"
              title={item.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] items-center gap-12 py-12 lg:grid-cols-2 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {empathyGalleryImages.map((image) => (
            <ImageCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              containerClassName="min-h-[280px] sm:min-h-[340px]"
            />
          ))}
        </div>

        <div className="rounded-[44px] bg-brand-950 p-10 text-white shadow-[0_30px_90px_rgba(11,31,59,0.22)] lg:p-14">
          <SectionHeading
            description="Cada paciente merece sentir que su tratamiento es único, personalizado y acompañado con cercanía."
            eyebrow="Acompañamiento"
            tone="light"
            title="Fertilización empática, no comunicación fría"
            variant="accent"
          />
          <div className="mt-8 grid gap-4">
            {experienceHighlights.map((item, index) => (
              <div key={item.title} className="rounded-[24px] bg-white/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-200">
                  Paso {index + 1}
                </p>
                <p className="mt-3 font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        description="La experiencia empieza desde la primera conversación. Agenda una valoración para conocer el proceso completo en VIXI."
        eyebrow="Primera consulta"
        title="Un espacio moderno y sereno para tomar decisiones con claridad."
      />
    </>
  );
}
