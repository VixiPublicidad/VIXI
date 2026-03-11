import { experienceHighlights, galleryImages } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { FeatureCard } from "~/components/ui/feature-card";
import { ImageCard } from "~/components/ui/image-card";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

const principles = [
  {
    title: "Atencion integral",
    description: "Desde el diagnostico hasta el embarazo y mas alla, el acompanamiento se mantiene durante todo el proceso.",
  },
  {
    title: "Ambiente moderno y tranquilo",
    description: "VIXI se vive como un espacio sereno, moderno y acogedor que transmite confianza desde la llegada.",
  },
  {
    title: "Enfoque personalizado",
    description: "Cada paciente debe sentir que su tratamiento es unico y disenado para su historia clinica y emocional.",
  },
];

export function ExperiencePage() {
  return (
    <>
      <PageHero
        description="La experiencia en VIXI combina tecnologia avanzada con una sensacion acogedora y relajante, para acompanarte con claridad en cada etapa."
        eyebrow="Nuestra experiencia"
        image={galleryImages[2]}
        imageBadge="Experiencia sensorial"
        imageCaption="Un ambiente moderno, tranquilo y humano que acompana decisiones medicas importantes."
        stats={[
          { value: "Integral", label: "desde diagnostico hasta seguimiento" },
          { value: "Serena", label: "tecnologia avanzada con calma" },
          { value: "Personal", label: "acompanamiento en cada etapa" },
        ]}
        variant="process"
        title="Tecnologia avanzada con una sensacion acogedora y relajante."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="Atencion integral, trato cercano y una sensacion de calma que ayuda a vivir el proceso con mayor confianza."
          eyebrow="Lo que se siente"
          title="Una clinica minimalista con un toque calido y profundamente humano"
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

      <section className="mx-auto grid max-w-[90vw] items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {galleryImages.map((image) => (
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
            description="Cada paciente merece sentir que su tratamiento es unico, personalizado y acompanado con cercania."
            eyebrow="Acompanamiento"
            tone="light"
            title="Fertilizacion empatica, no comunicacion fria"
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
        description="La experiencia empieza desde la primera conversacion. Agenda una valoracion para conocer el proceso completo en VIXI."
        eyebrow="Primera consulta"
        title="Un espacio moderno y sereno para tomar decisiones con claridad."
      />
    </>
  );
}
