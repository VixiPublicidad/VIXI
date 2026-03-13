import {
  brandPillars,
  galleryImages,
  heroImage,
  homeActions,
  multidisciplinaryTeam,
  teamProfiles,
} from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { FeatureCard } from "~/components/ui/feature-card";
import { ImageCard } from "~/components/ui/image-card";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

const values = ["Confiable", "Segura", "Vanguardista", "Inclusiva", "Cálida"];
const subSpecialties = ["Cirugía de mínima invasión", "Endocrinología", "Andrología"];

export function WhoWeArePage() {
  return (
    <>
      <PageHero
        actions={homeActions}
        description="VIXI es una clínica de fertilidad especializada en biología de la reproducción humana, con un enfoque cálido, personalizado y respaldado por tecnología avanzada."
        eyebrow="Quiénes somos"
        image={galleryImages[1]}
        imageBadge="Base institucional"
        imageCaption="Especialidad médica, experiencia clínica y un entorno hospitalario confiable para acompañar cada decisión."
        stats={[
          { value: "Clínica", label: "especializada en fertilidad" },
          { value: "12 años", label: "de operación clínica" },
          { value: "Hospital", label: "como respaldo institucional" },
        ]}
        variant="editorial"
        title="Una clínica que combina rigor médico, sensibilidad humana y tecnología avanzada."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] space-y-8 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
            <SectionHeading
              description="Clínica de fertilidad con especialidad en biología de la reproducción humana y subespecialidades que fortalecen el abordaje integral."
              eyebrow="Perfil clínico"
              title="Biología de la reproducción humana con visión integral"
              variant="editorial"
            />
            <div className="mt-8 grid gap-4">
              {subSpecialties.map((item) => (
                <div key={item} className="rounded-[24px] bg-brand-950/4 px-5 py-4 text-brand-950">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-5">
            {brandPillars.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                description={pillar.description}
                eyebrow="Base de marca"
                title={pillar.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <SectionHeading
            description="Cada caso se atiende con un enfoque personalizado, cálido y humano, entendiendo que la fertilidad es una decisión emocional y médica."
            eyebrow="Filosofía de atención"
            title="Tratamientos personalizados para una decisión profundamente humana"
            variant="accent"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[24px] border border-brand-950/10 bg-white/88 px-5 py-5 text-lg font-medium text-brand-950 shadow-[0_18px_44px_rgba(11,31,59,0.06)]"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        <ImageCard
          src={heroImage.src}
          alt={heroImage.alt}
          className="rounded-[36px]"
          containerClassName="min-h-[420px]"
        />
      </section>

      <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
        <SectionHeading
          description="El equipo médico combina formación especializada en fertilidad, ginecología y cirugía de mínima invasión."
          eyebrow="Equipo médico"
          title="Perfiles clínicos con credenciales claras y trato humano"
          variant="editorial"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {teamProfiles.map((doctor) => (
            <article
              key={doctor.name}
              className="group relative overflow-hidden rounded-[2.5rem] border border-brand-950/5 bg-white shadow-[0_12px_45px_rgba(11,31,59,0.06)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(11,31,59,0.12)]"
            >
              <div className="flex flex-col p-8 sm:p-10">
                <p className="inline-flex max-w-full items-center rounded-full bg-accent-100/60 px-6 py-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.25em] text-accent-400 whitespace-normal break-words sm:w-max">
                  {doctor.role}
                </p>
                <h3 className="mt-4 text-3xl font-display font-medium leading-tight text-brand-950 sm:text-4xl">
                  {doctor.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-950/70">
                  {doctor.summary}
                </p>

                <div className="mt-auto pt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-950/40">Especialidades</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty) => (
                      <div key={specialty} className="rounded-full bg-brand-950/[0.03] border border-brand-950/[0.06] px-4 py-1.5 text-xs text-brand-950/80 transition-colors group-hover:bg-brand-950/10">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 border-t border-brand-950/5 pt-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-950/40">Formación</p>
                  <ul className="mt-3 grid gap-2.5 text-sm leading-relaxed text-brand-950/70">
                    {doctor.education.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[90vw] py-16 lg:px-8">
        <SectionHeading
          description="Cada caso puede apoyarse en distintas especialidades para construir un tratamiento más preciso y completo."
          eyebrow="Equipo multidisciplinario"
          title="Especialidades que trabajan en conjunto, no en silos"
          variant="minimal"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {multidisciplinaryTeam.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-[1.75rem] border border-brand-950/[0.07] bg-white px-6 py-7 shadow-[0_8px_32px_rgba(11,31,59,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(11,31,59,0.11)]"
            >
              {/* Gradient accent top-bar */}
              <div
                className="absolute left-0 top-0 h-[3px] w-full rounded-t-[1.75rem] bg-gradient-to-r from-brand-700/70 via-accent-300/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Index badge */}
              <span className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-950/[0.05] text-[10px] font-bold tracking-widest text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-base font-medium leading-snug text-brand-950">
                {item.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-brand-950/55">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        description="Si quieres conocer el enfoque completo de VIXI, agenda una consulta y revisa con el equipo cuál es el mejor siguiente paso para tu caso."
        eyebrow="Conoce VIXI"
        title="Una clínica especializada, cálida y preparada para acompañarte."
      />
    </>
  );
}
