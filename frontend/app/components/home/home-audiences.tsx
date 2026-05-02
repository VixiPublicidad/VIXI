import { FaCalendarAlt, FaShieldAlt, FaUserFriends, FaUsers } from "react-icons/fa";

export function HomeAudiences() {
  return (
    <section className="mx-auto max-w-[80vw] py-16 lg:px-8">
      <div className="relative mx-auto flex flex-col items-center overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 px-8 py-12 text-center shadow-[0_20px_80px_-15px_rgba(11,31,59,0.08)] ring-1 ring-brand-950/5 backdrop-blur-3xl sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-100/50 mix-blend-multiply blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-200/50 mix-blend-multiply blur-[100px]" />
        <div className="relative z-10 w-full">
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-brand-950 sm:text-4xl lg:text-5xl">
            Enfoques clínicos a la medida
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-950/68 sm:text-lg">
            Medicina reproductiva basada en evidencia
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaUserFriends aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Alteraciones en la fertilidad
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-brand-700">
            Pacientes que no han logrado embarazo
          </p>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Abordamos de forma integral las causas femeninas y masculinas de infertilidad, desde
            alteraciones ovulatorias y tubarias hasta factores espermáticos, con un enfoque
            diagnóstico preciso que permite definir el tratamiento más adecuado en cada caso.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaUsers aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Optimización reproductiva
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-brand-700">
            Pacientes que buscan maximizar sus probabilidades
          </p>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Dirigido a quienes desean mejorar sus posibilidades de embarazo mediante estrategias
            avanzadas, incluyendo selección embrionaria, estudios genéticos y protocolos
            personalizados de estimulación.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaShieldAlt aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Preservación de fertilidad
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-brand-700">
            Planificación reproductiva y situaciones médicas de riesgo
          </p>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Indicado tanto en planificación reproductiva como en situaciones médicas que pueden
            comprometer la fertilidad, como tratamientos oncológicos. Actuamos de forma oportuna
            para preservar el potencial reproductivo.
          </p>
        </article>
        <article className="flex h-full flex-col rounded-[30px] border border-brand-950/8 bg-white/82 p-7 shadow-[0_20px_50px_rgba(11,31,59,0.07)] backdrop-blur-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100/30 text-accent-400">
            <FaCalendarAlt aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="font-display text-[1.65rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-950">
            Reproducción en edad avanzada
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-brand-700">
            Edad reproductiva avanzada
          </p>
          <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-brand-950/68">
            Ofrecemos alternativas basadas en evidencia para pacientes en etapas reproductivas más
            avanzadas, con un enfoque realista, ético y personalizado según pronóstico.
          </p>
        </article>
      </div>
    </section>
  );
}
