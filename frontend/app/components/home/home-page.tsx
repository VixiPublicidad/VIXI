import {
  audienceCards,
  brandPillars,
  contactDetails,
  differentiator,
  experienceHighlights,
  faqItems,
  galleryImages,
  heroImage,
  homeActions,
  homeStats,
  treatmentCategories,
  valueProposition,
  experienceImages,
} from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { FeatureCard } from "~/components/ui/feature-card";
import { ImageCard } from "~/components/ui/image-card";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

export function HomePage() {
  return (
    <>
      <PageHero
        actions={homeActions}
        description="VIXI es una clinica especializada en fertilizacion asistida que combina tecnologia avanzada, trato cercano y decisiones clinicas individualizadas dentro de un entorno hospitalario de prestigio."
        eyebrow="Clinica de fertilidad"
        image={heroImage}
        imageBadge="Fertilidad con criterio"
        imageCaption="Medicina avanzada, conversaciones claras y una experiencia pensada para sostener decisiones complejas."
        stats={homeStats}
        variant="signature"
        title="La fertilidad es mas que un tratamiento."
        subtitle="Es una decision emocional, medica y profundamente humana."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] py-16 sm:px-6 lg:px-8">
        <SectionHeading
          description="Fertilizacion asistida, enfoque personalizado, tecnologia avanzada y tratamientos de alta y baja complejidad."
          eyebrow="Propuesta de valor"
          title="Tres razones por las que VIXI se siente distinta desde la primera consulta"
          variant="accent"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {valueProposition.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
            >
              <img
                alt={galleryImages[index]?.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
                src={galleryImages[index]?.src ?? ""}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
              <div className="relative z-10 p-7 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent-200">VIXI</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/78">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-200">Pilares de marca</p>
          <h2 className="mt-4 font-display text-4xl leading-none">Ciencia, experiencia y cercania en equilibrio.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/76">
            Estos pilares definen la atencion de VIXI: rigor medico, experiencia clinica y un trato humano y cercano en cada etapa.
          </p>
          <div className="mt-8 grid gap-4">
            {brandPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[24px] border border-white/12 bg-white/6 p-5"
              >
                <p className="text-lg font-semibold text-white">{pillar.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[32px] border border-brand-950/10 bg-white/90 p-7 shadow-[0_18px_50px_rgba(11,31,59,0.08)] md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Diferenciador</p>
            <h3 className="mt-3 text-3xl font-semibold text-brand-950">
              Atencion especializada dentro de un hospital.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-950/74">{differentiator}</p>
          </article>

          {brandPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(11,31,59,0.12)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(11,31,59,0.18)]"
            >
              <img
                alt={pillar.image?.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                loading="lazy"
                src={pillar.image?.src ?? ""}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-brand-950/10" />
              <div className="relative z-10 p-6 sm:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent-200">Pilares de marca</p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/78">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          description="Desde evaluacion y diagnostico hasta reproduccion asistida, preservacion de fertilidad y donacion."
          eyebrow="Tratamientos"
          title="Un portafolio clinico pensado para decisiones bien informadas"
          variant="editorial"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {treatmentCategories.slice(0, 3).map((category) => (
            <article
              key={category.title}
              className="rounded-[28px] border border-brand-950/10 bg-white/88 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]"
            >
              <h3 className="text-xl font-semibold text-brand-950">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-950/72">{category.description}</p>
              <ul className="mt-5 grid gap-2 text-sm text-brand-950/80">
                {category.items.map((item) => (
                  <li key={item} className="rounded-full bg-brand-950/5 px-4 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <SectionHeading
            description="Atencion integral, ambiente moderno y tranquilo, y acompanamiento personalizado para que cada paciente se sienta en buenas manos."
            eyebrow="Experiencia VIXI"
            title="Cada detalle esta pensado para que la medicina avanzada tambien se sienta acompanada"
            variant="accent"
          />
          <div className="mt-8 grid gap-4">
            {experienceHighlights.map((item, index) => (
              <FeatureCard
                key={item.title}
                description={item.description}
                eyebrow={`0${index + 1}`}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {experienceImages.map((image, index) => (
            <ImageCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={index === 2 ? "sm:col-span-2" : ""}
              containerClassName={index === 2 ? "min-h-[280px] sm:min-h-[400px]" : "min-h-[280px] sm:min-h-[340px]"}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="VIXI acompana a parejas con dificultades para lograr embarazo, familias que desean crecer y pacientes que buscan opciones reproductivas despues de los 45."
          eyebrow="Audiencias principales"
          title="Un sitio que habla con distintos momentos de vida"
          variant="highlight"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {audienceCards.map((audience) => (
            <FeatureCard
              key={audience.title}
              description={audience.description}
              eyebrow="Perfil de paciente"
              title={audience.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <SectionHeading
            description="Respondemos dudas frecuentes sobre costos, tiempos de proceso y probabilidad de exito desde una perspectiva medica responsable."
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Contacto rapido</p>
          <h2 className="mt-4 font-display text-4xl leading-none">Agenda tu primera conversacion con el equipo.</h2>
          <div className="mt-8 grid gap-4 text-sm leading-6">
            <a className="rounded-[24px] bg-white/72 px-5 py-4" href={contactDetails.phoneHref}>
              {contactDetails.phoneDisplay}
            </a>
            <a className="rounded-[24px] bg-white/72 px-5 py-4" href={contactDetails.whatsappHref} rel="noreferrer" target="_blank">
              {contactDetails.whatsappDisplay}
            </a>
            <a className="rounded-[24px] bg-white/72 px-5 py-4" href={contactDetails.emailHref}>
              {contactDetails.email}
            </a>
            <div className="rounded-[24px] bg-white/72 px-5 py-4">{contactDetails.address}</div>
          </div>
        </div>
      </section>

      <CTABanner
        description="Agenda una valoracion para revisar tu caso con un equipo que entiende la fertilidad desde la medicina, la experiencia y la cercania."
        eyebrow="Siguiente paso"
        title="Tratamientos de alta y baja complejidad con acompanamiento real."
      />
    </>
  );
}
