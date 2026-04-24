import { FaCalendarAlt, FaUserFriends, FaUsers } from "react-icons/fa";

export function HomeAudiences() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative mx-auto flex flex-col items-center overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 px-8 py-12 text-center shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5 backdrop-blur-3xl sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-100/50 mix-blend-multiply blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-200/50 mix-blend-multiply blur-[100px]" />
        <div className="relative z-10 w-full">
          <p className="eyebrow-label mb-4 text-brand-700">Audiencias principales</p>
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-brand-950 sm:text-4xl lg:text-5xl">
            Un sitio que habla con distintos momentos de vida
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-950/68 sm:text-lg">
            VIXI acompaña a parejas con dificultades para lograr embarazo, familias que desean crecer y pacientes que buscan opciones reproductivas después de los 45.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaUserFriends aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="eyebrow-label mb-4 text-brand-700/62">Perfil de paciente</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Parejas que llevan tiempo buscando embarazo
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Procesos clínicos claros para quienes necesitan una solución segura, moderna y cercana.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaUsers aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="eyebrow-label mb-4 text-brand-700/62">Perfil de paciente</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Familias con hijos que desean crecer
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Acompañamiento cálido para pacientes que quieren tener un hijo más sin perder confianza en el proceso.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaCalendarAlt aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="eyebrow-label mb-4 text-brand-700/62">Perfil de paciente</p>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Pacientes de edad avanzada.
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Alternativas personalizadas para quienes buscan opciones reproductivas en etapas más avanzadas.
          </p>
        </article>
      </div>
    </section>
  );
}
