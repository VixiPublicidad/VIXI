import { ImageCard } from "~/components/ui/image-card";

export function HomeExperience() {
  return (
    <section className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
      <div>
        <div className="relative max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md">
            <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="eyebrow-label pt-[1px] text-[10px]">Experiencia VIXI</span>
          </div>
          <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
            Cada detalle está pensado para que la medicina avanzada también se sienta acompañada
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
            Atención integral, ambiente moderno y tranquilo, y acompañamiento personalizado para que cada paciente se sienta en buenas manos.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">01</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Atención integral
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Atención integral desde el diagnóstico hasta el embarazo y el seguimiento.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">02</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Ambiente moderno
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Ambiente moderno, minimalista y tranquilo con calidez humana.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
            <p className="eyebrow-label mb-4 text-brand-700/62">03</p>
            <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
              Acompañamiento personalizado
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
              Acompañamiento personalizado en cada decisión clínica y emocional.
            </p>
          </article>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ImageCard
          src="/gallery/experiencia_1.avif"
          alt="Sala de espera en clínica moderna de fertilidad, diseño sereno y relajante."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
        />
        <ImageCard
          src="/gallery/experiencia_2.avif"
          alt="Médico tomando la mano de un paciente en un gesto de consuelo, clínica moderna."
          containerClassName="min-h-[280px] sm:min-h-[340px]"
        />
        <ImageCard
          src="/gallery/experiencia_3.avif"
          alt="Sala de consulta médica de alta tecnología pero cálida y acogedora."
          className="sm:col-span-2"
          containerClassName="min-h-[280px] sm:min-h-[400px]"
        />
      </div>
    </section>
  );
}
