import { outOfTownHighlights } from "~/components/data/site-content";
import { CTABanner } from "~/components/shared/cta-banner";
import { PageHero } from "~/components/ui/page-hero";
import { SectionHeading } from "~/components/ui/section-heading";

const supportMoments = [
  "Orientacion previa sobre estudios, tiempos y preparacion.",
  "Planeacion de visitas para pacientes de otros estados o paises.",
  "Seguimiento remoto para resolver dudas entre citas.",
];

export function OutOfTownPage() {
  return (
    <>
      <PageHero
        description="VIXI atiende pacientes de otros estados y paises, con orientacion previa, consulta en linea y seguimiento a distancia cuando es posible."
        eyebrow="Pacientes foraneos"
        image={{
          alt: "Paciente revisando agenda de viaje y consulta medica.",
          src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
        }}
        imageBadge="Logistica cuidada"
        imageCaption="Acompanamiento claro para organizar consultas, estudios y tiempos de viaje con mayor tranquilidad."
        stats={[
          { value: "Si", label: "atencion a otros estados o paises" },
          { value: "En linea", label: "valoracion y seguimiento posible" },
          { value: "Coordinado", label: "calendario clinico por etapas" },
        ]}
        variant="gallery"
        title="Cuando viajas para atender tu fertilidad, la claridad logistica tambien importa."
        height="screen"
      />

      <section className="mx-auto max-w-[90vw] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          description="La atencion para pacientes foraneos busca dar claridad antes del viaje y acompanamiento durante cada etapa del tratamiento."
          eyebrow="Acompanamiento"
          title="Un proceso pensado para pacientes que no viven cerca"
          variant="accent"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {outOfTownHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(11,31,59,0.08)]"
            >
              <h2 className="text-2xl font-semibold text-brand-950">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-brand-950/72">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[90vw] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[32px] bg-accent-100 p-8 shadow-[0_20px_50px_rgba(244,166,183,0.22)]">
          <SectionHeading
            description="Consulta previa, planeacion de visitas y seguimiento remoto ayudan a que el tratamiento sea mas ordenado para quienes viajan."
            eyebrow="Lo que resolvemos"
            title="Menos friccion logistica, mas foco en tu tratamiento"
            variant="highlight"
          />
        </div>

        <div className="grid gap-4">
          {supportMoments.map((item, index) => (
            <div
              key={item}
              className="rounded-[26px] border border-brand-950/10 bg-white/90 p-6 shadow-[0_18px_44px_rgba(11,31,59,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Momento {index + 1}
              </p>
              <p className="mt-3 text-base leading-7 text-brand-950/74">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        description="Si vienes de otra ciudad, podemos ayudarte a organizar el siguiente paso clinico con la mayor claridad posible desde el inicio."
        eyebrow="Consulta previa"
        title="Viajar para tu tratamiento no deberia sentirse desordenado."
      />
    </>
  );
}
