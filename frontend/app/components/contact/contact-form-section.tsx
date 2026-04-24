import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Form, useNavigation } from "react-router";

import {
  AnimatePresence,
  createRevealUpVariants,
  createStaggerVariants,
  motion,
  revealViewport,
  useReducedMotion,
} from "~/components/lib/motion";

type ContactFormValues = {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
};

type ContactFormState = {
  errors?: Partial<Record<keyof ContactFormValues, string>> & { form?: string };
  success?: boolean;
  values?: ContactFormValues;
};

export function ContactFormSection({ formState }: { formState?: ContactFormState }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const values = formState?.success ? {} : formState?.values ?? {};
  const errors = formState?.errors;
  const reducedMotion = useReducedMotion();
  const leftVariants = createRevealUpVariants(reducedMotion, {
    distance: 46,
    duration: 0.9,
  });
  const rightVariants = createStaggerVariants(reducedMotion, {
    delayChildren: 0.08,
    staggerChildren: 0.1,
  });
  const cardVariants = createRevealUpVariants(reducedMotion, {
    distance: 42,
    duration: 0.84,
  });

  return (
    <section
      className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8"
      id="contact-form"
    >
      <motion.div
        className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)] sm:p-10"
        initial="hidden"
        variants={leftVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <div className="relative max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-950/10 bg-white/60 px-4 py-1.5 text-brand-950 shadow-[0_4px_24px_-4px_rgba(11,31,59,0.08)] backdrop-blur-md">
            <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="eyebrow-label pt-[1px] text-[10px]">Formulario de contacto</span>
          </div>
          <h2 className="display-balance bg-gradient-to-br from-brand-950 via-[#183457] to-[#3a5d8c] bg-clip-text font-display text-3xl leading-[0.98] tracking-[-0.045em] text-transparent sm:text-4xl lg:text-5xl">
            Cuentanos en que etapa estas
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-950/66 sm:text-lg">
            Escribe tus datos y contexto general. El formulario queda listo para enviar correos con Resend mediante variables de entorno del servidor.
          </p>
        </div>

        <Form className="mt-8 grid gap-5" method="post">
          <input
            aria-hidden="true"
            autoComplete="off"
            className="hidden"
            name="company"
            tabIndex={-1}
            type="text"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              defaultValue={values.name}
              error={errors?.name}
              label="Nombre completo"
              name="name"
              placeholder="Tu nombre"
            />
            <FormField
              defaultValue={values.email}
              error={errors?.email}
              label="Correo electronico"
              name="email"
              placeholder="nombre@correo.com"
              type="email"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              defaultValue={values.phone}
              error={errors?.phone}
              label="Telefono o WhatsApp"
              name="phone"
              placeholder="477 000 0000"
              type="tel"
            />
            <ContactReasonField defaultValue={values.reason} error={errors?.reason} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="min-h-40 w-full rounded-[24px] border border-brand-950/12 bg-neutral-50 px-4 py-3.5 text-base leading-7 text-brand-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200/80"
              defaultValue={values.message}
              id="message"
              name="message"
              placeholder="Comparte brevemente tu situacion o la duda principal."
            />
            {errors?.message ? <p className="text-sm text-[#9f1d35]">{errors.message}</p> : null}
          </div>

          {errors?.form ? (
            <div className="rounded-[22px] border border-[#d86b82]/28 bg-[#fff1f4] px-5 py-4 text-sm leading-6 text-[#7f1730]">
              {errors.form}
            </div>
          ) : null}

          {formState?.success ? (
            <div className="rounded-[22px] border border-emerald-300/60 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-900">
              Gracias. Recibimos tu mensaje y el equipo de VIXI podra responderte por correo o WhatsApp.
            </div>
          ) : null}

          <div className="flex flex-col gap-4 border-t border-brand-950/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-950 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-950/55"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </Form>
      </motion.div>

      <motion.div
        className="grid gap-8"
        initial="hidden"
        variants={rightVariants}
        viewport={revealViewport}
        whileInView="visible"
      >
        <motion.div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]" variants={cardVariants}>
          <div className="grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
            <div className="relative hidden h-full w-1 sm:block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent-400/80 via-white/50 to-transparent" />
              <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
            </div>
            <div>
              <p className="eyebrow-label mb-4 text-[10px] text-accent-200">Ubicacion</p>
              <h2 className="display-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Dentro de un entorno hospitalario moderno y confiable
              </h2>
              <p className="mt-6 max-w-3xl pr-4 text-base leading-8 text-white/82 sm:ml-4 sm:text-lg">
                VIXI esta ubicado dentro de un entorno hospitalario confiable y ofrece consulta en linea para valoracion inicial.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 text-sm leading-7 text-white/78">
            <p>Hospital Angeles, Av. Cerro Gordo, Lomas del Campestre, 37150 León de los Aldama, Guanajuato</p>
            <p>Lunes a viernes · 8:30 a 18:00 h</p>
            <p>Consulta en linea disponible para valoracion inicial y seguimiento.</p>
          </div>
        </motion.div>

        <motion.div className="overflow-hidden rounded-[32px] border border-brand-950/10 bg-white shadow-[0_18px_50px_rgba(11,31,59,0.08)]" variants={cardVariants}>
          <iframe
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Hospital%20Angeles%2C%20Av%20Cerro%20Gordo%2C%20Lomas%20del%20Campestre%2C%2037150%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.&output=embed"
            title="Ubicacion de VIXI"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactReasonField({
  defaultValue,
  error,
}: {
  defaultValue?: string;
  error?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState(defaultValue ?? "");
  const fieldRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelStyle, setPanelStyle] = useState<{ left: number; top: number; width: number } | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setSelectedReason(defaultValue ?? "");
  }, [defaultValue]);

  useEffect(() => {
    function updatePanelPosition() {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setPanelStyle({
        left: rect.left,
        top: rect.bottom + 8,
        width: rect.width,
      });
    }

    function handlePointerDown(event: PointerEvent) {
      if (!fieldRef.current?.contains(event.target as Node) && !panelRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      updatePanelPosition();
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("keydown", handleEscape);
      window.addEventListener("resize", updatePanelPosition);
      window.addEventListener("scroll", updatePanelPosition, true);
    }

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", updatePanelPosition);
      window.removeEventListener("scroll", updatePanelPosition, true);
    };
  }, [isOpen]);

  const currentLabel = selectedReason || "Selecciona una opcion";

  return (
    <div ref={fieldRef} className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor="reason">
        Motivo de contacto
      </label>
      <input name="reason" type="hidden" value={selectedReason} />

      <motion.button
        aria-controls={listboxId}
        aria-expanded={isOpen}
        animate={{
          boxShadow: isOpen ? "0 18px 42px rgba(11,31,59,0.12)" : "0 16px 38px rgba(11,31,59,0.07)",
        }}
        className={[
          "relative flex min-h-[56px] w-full items-center justify-between overflow-hidden rounded-[22px]",
          "border px-4 py-3.5 text-left text-base outline-none transition",
          error
            ? "border-[#d86b82]/45 bg-[#fff6f8] text-brand-950"
            : "border-brand-950/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,239,0.95))] text-brand-950 shadow-[0_16px_38px_rgba(11,31,59,0.07)]",
          isOpen ? "border-brand-700 ring-2 ring-brand-200/80" : "hover:border-brand-950/20",
        ].join(" ")}
        id="reason"
        onClick={() => setIsOpen((open) => !open)}
        ref={triggerRef}
        transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }}
        type="button"
      >
        <span className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[radial-gradient(circle_at_left,rgba(198,137,152,0.16),transparent_68%)]" />
        <span className={selectedReason ? "text-brand-950" : "text-brand-950/46"}>{currentLabel}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-950/10 bg-white/78 text-brand-700 shadow-[0_8px_18px_rgba(11,31,59,0.08)]"
          transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
        >
          <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
            <path
              d="M6.75 9.75 12 15l5.25-5.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </motion.span>
      </motion.button>

      {typeof document !== "undefined" && panelStyle
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  ref={panelRef}
                  animate="open"
                  className="fixed z-[120] overflow-hidden rounded-[26px] border border-brand-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,245,241,0.98))] p-2 shadow-[0_24px_60px_rgba(11,31,59,0.14)] backdrop-blur-xl"
                  exit="closed"
                  id={listboxId}
                  initial="closed"
                  role="listbox"
                  style={{
                    left: panelStyle.left,
                    top: panelStyle.top,
                    width: panelStyle.width,
                  }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
                  variants={{
                    closed: {
                      opacity: 0,
                      scale: 0.98,
                      y: -12,
                    },
                    open: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    },
                  }}
                >
                  <motion.div
                    animate="open"
                    className="grid gap-1"
                    initial="closed"
                    variants={{
                      closed: {},
                      open: {
                        transition: {
                          delayChildren: reducedMotion ? 0 : 0.04,
                          staggerChildren: reducedMotion ? 0 : 0.03,
                        },
                      },
                    }}
                  >
                    <DropdownOption
                      isActive={selectedReason === ""}
                      label="Selecciona una opcion"
                      onSelect={() => {
                        setSelectedReason("");
                        setIsOpen(false);
                      }}
                    />
                    <DropdownOption
                      isActive={selectedReason === "Primera valoracion"}
                      label="Primera valoracion"
                      onSelect={() => {
                        setSelectedReason("Primera valoracion");
                        setIsOpen(false);
                      }}
                    />
                    <DropdownOption
                      isActive={selectedReason === "Tratamientos de fertilidad"}
                      label="Tratamientos de fertilidad"
                      onSelect={() => {
                        setSelectedReason("Tratamientos de fertilidad");
                        setIsOpen(false);
                      }}
                    />
                    <DropdownOption
                      isActive={selectedReason === "Consulta en linea"}
                      label="Consulta en linea"
                      onSelect={() => {
                        setSelectedReason("Consulta en linea");
                        setIsOpen(false);
                      }}
                    />
                    <DropdownOption
                      isActive={selectedReason === "Pacientes foraneos"}
                      label="Pacientes foraneos"
                      onSelect={() => {
                        setSelectedReason("Pacientes foraneos");
                        setIsOpen(false);
                      }}
                    />
                    <DropdownOption
                      isActive={selectedReason === "Otra consulta"}
                      label="Otra consulta"
                      onSelect={() => {
                        setSelectedReason("Otra consulta");
                        setIsOpen(false);
                      }}
                    />
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}

      {error ? <p className="text-sm text-[#9f1d35]">{error}</p> : null}
    </div>
  );
}

function DropdownOption({
  isActive,
  label,
  onSelect,
}: {
  isActive: boolean;
  label: string;
  onSelect: () => void;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.button
      className={[
        "flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm transition",
        isActive
          ? "bg-brand-950 text-white shadow-[0_14px_30px_rgba(11,31,59,0.2)]"
          : "text-brand-950/76 hover:bg-white hover:text-brand-950",
      ].join(" ")}
      onClick={onSelect}
      role="option"
      type="button"
      variants={{
        closed: {
          opacity: 0,
          x: -8,
        },
        open: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }}
    >
      <span>{label}</span>
      <span
        className={[
          "inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/14 transition-all duration-200",
          isActive ? "scale-100 opacity-100" : "scale-75 opacity-0",
        ].join(" ")}
      >
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
          <path
            d="m5 12.75 4.5 4.5L19 7.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </span>
    </motion.button>
  );
}

function FormField({
  defaultValue,
  error,
  label,
  name,
  placeholder,
  type = "text",
}: {
  defaultValue?: string;
  error?: string;
  label: string;
  name: string;
  placeholder: string;
  type?: "email" | "tel" | "text";
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full rounded-[20px] border border-brand-950/12 bg-neutral-50 px-4 py-3.5 text-base text-brand-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-200/80"
        defaultValue={defaultValue}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error ? <p className="text-sm text-[#9f1d35]">{error}</p> : null}
    </div>
  );
}

export type { ContactFormState, ContactFormValues };
