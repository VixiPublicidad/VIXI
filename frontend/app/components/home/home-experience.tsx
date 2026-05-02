import { ImageCard } from "~/components/ui/image-card";

export function HomeExperience() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
      <div>
        <div className="relative max-w-4xl">
          <p className="eyebrow-label mb-5 text-brand-950/50">Experiencia VIXI</p>
          <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
            Detalles pensados en que te sientes siempre acompañada
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
            Atención integral desde la primera consulta, el tratamiento y durante el embarazo,
            dentro de un ambiente cálido y con acompañamiento durante todo el proceso.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Atención integral
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Atención integral desde la primera consulta, durante el tratamiento y hasta el
              embarazo.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Ambiente cálido
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Espacios diseñados para que cada visita se viva con calma, cercanía y confianza.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Acompañamiento en todo el proceso
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Seguimiento cercano para que cada decisión clínica se tome con claridad y apoyo.
            </p>
          </article>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ImageCard
          src="/gallery/experiencia_1.avif"
          alt="Sala de espera en clínica moderna de fertilidad con atmósfera cálida."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
        />
        <ImageCard
          src="/gallery/experiencia_2.avif"
          alt="Médico acompañando a una paciente durante el proceso clínico."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
        />
        <ImageCard
          src="/gallery/experiencia_3.avif"
          alt="Sala de consulta médica con tecnología y atención cercana."
          className="sm:col-span-2"
          containerClassName="min-h-[280px] sm:min-h-[400px]"
        />
      </div>
    </section>
  );
}
