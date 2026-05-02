export function ProcessSupportTeam() {
  return (
    <section className="mx-auto max-w-[80vw] py-6 lg:px-8">
      <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
        <div className="relative max-w-4xl">
          <p className="eyebrow-label mb-5 text-white/55">Apoyo clínico</p>
          <h2 className="display-balance font-display text-3xl leading-[0.98] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            Especialidades que sostienen el recorrido completo
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            El tratamiento puede involucrar distintas especialidades médicas según las necesidades clínicas de cada paciente.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Ginecología</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Valoración y manejo del sistema reproductivo femenino como base del proceso clínico.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Biología de la reproducción</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Especialidad central de VIXI, enfocada en el diagnóstico y tratamiento del factor infértil.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Endocrinología</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Regulación hormonal que impacta directamente en la ovulación y la respuesta al tratamiento.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Andrología</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Estudio y tratamiento del factor masculino, incluyendo calidad y función del esperma.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Medicina materno-fetal</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Seguimiento especializado de embarazos de alto riesgo surgidos tras tratamiento de fertilidad.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Genética</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Detección de alteraciones cromosómicas que pueden afectar la viabilidad del embrión.
            </p>
          </div>
          <div className="flex flex-1 basis-[calc(100%-1rem)] flex-col rounded-[22px] bg-white/8 p-5 sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
            <p className="font-medium text-white/90">Cirugía de mínima invasión</p>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">
              Procedimientos laparoscópicos e histeroscópicos con menor recuperación y mayor precisión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
