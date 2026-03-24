import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Form, useNavigation } from "react-router";

import { contactDetails } from "~/components/data";
import { SectionHeading } from "~/components/ui/section-heading";

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

const contactReasons = [
  "Primera valoración",
  "Tratamientos de fertilidad",
  "Consulta en línea",
  "Pacientes foráneos",
  "Otra consulta",
];

export function ContactFormSection({ formState }: { formState?: ContactFormState }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const values = formState?.success ? {} : formState?.values ?? {};
  const errors = formState?.errors;

  return (
    <section
      className="mx-auto grid max-w-[80vw] gap-8 py-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8"
      id="contact-form"
    >
      <div className="rounded-[32px] border border-brand-950/10 bg-white/90 p-8 shadow-[0_18px_50px_rgba(11,31,59,0.08)] sm:p-10">
        <SectionHeading
          description="Escribe tus datos y contexto general. El formulario queda listo para enviar correos con Resend mediante variables de entorno del servidor."
          eyebrow="Formulario de contacto"
          title="Cuéntanos en qué etapa estás"
          variant="accent"
        />

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
              label="Correo electrónico"
              name="email"
              placeholder="nombre@correo.com"
              type="email"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              defaultValue={values.phone}
              error={errors?.phone}
              label="Teléfono o WhatsApp"
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
              placeholder="Comparte brevemente tu situación o la duda principal."
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
              Gracias. Recibimos tu mensaje y el equipo de VIXI podrá responderte por correo o WhatsApp.
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
      </div>

      <div className="grid gap-8">
        <div className="rounded-[32px] bg-brand-950 p-8 text-white shadow-[0_22px_60px_rgba(11,31,59,0.18)]">
          <SectionHeading
            description="VIXI está ubicado dentro de un entorno hospitalario confiable y ofrece consulta en línea para valoración inicial."
            eyebrow="Ubicación"
            title="Dentro de un entorno hospitalario moderno y confiable"
            tone="light"
            variant="editorial"
          />
          <div className="mt-8 grid gap-4 text-sm leading-7 text-white/78">
            <p>{contactDetails.address}</p>
            <p>{contactDetails.hours}</p>
            <p>Consulta en línea disponible para valoración inicial y seguimiento.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-brand-950/10 bg-white shadow-[0_18px_50px_rgba(11,31,59,0.08)]">
          <iframe
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Av%20Cerro%20Gordo%2C%20Lomas%20del%20Campestre%2C%2037150%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.&output=embed"
            title="Ubicación de VIXI"
          />
        </div>
      </div>
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
  const [panelStyle, setPanelStyle] = useState<{ left: number; top: number; width: number } | null>(null);

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
      if (!fieldRef.current?.contains(event.target as Node)) {
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

  const currentLabel = selectedReason || "Selecciona una opción";

  return (
    <div ref={fieldRef} className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700" htmlFor="reason">
        Motivo de contacto
      </label>
      <input name="reason" type="hidden" value={selectedReason} />

      <motion.button
        animate={isOpen ? { boxShadow: "0 18px 42px rgba(11,31,59,0.12)" } : { boxShadow: "0 16px 38px rgba(11,31,59,0.07)" }}
        aria-controls={listboxId}
        aria-expanded={isOpen}
        ref={triggerRef}
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
        type="button"
        transition={{ duration: 0.18, ease: "easeOut" }}
        whileHover={{ boxShadow: "0 20px 44px rgba(11,31,59,0.1)" }}
        whileTap={{ scale: 0.998 }}
      >
        <span className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[radial-gradient(circle_at_left,rgba(198,137,152,0.16),transparent_68%)]" />
        <span className={selectedReason ? "text-brand-950" : "text-brand-950/46"}>{currentLabel}</span>
        <motion.span
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-950/10 bg-white/78 text-brand-700 shadow-[0_8px_18px_rgba(11,31,59,0.08)]"
          transition={{ duration: 0.22, ease: "easeOut" }}
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
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="fixed z-[120] overflow-hidden rounded-[26px] border border-brand-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,245,241,0.98))] p-2 shadow-[0_24px_60px_rgba(11,31,59,0.14)] backdrop-blur-xl"
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  id={listboxId}
                  initial={{ opacity: 0, y: -12, scale: 0.98 }}
                  role="listbox"
                  style={{
                    left: panelStyle.left,
                    top: panelStyle.top,
                    width: panelStyle.width,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="grid gap-1">
                    <DropdownOption
                      isActive={selectedReason === ""}
                      label="Selecciona una opción"
                      onSelect={() => {
                        setSelectedReason("");
                        setIsOpen(false);
                      }}
                    />
                    {contactReasons.map((reason, index) => (
                      <DropdownOption
                        key={reason}
                        delay={index}
                        isActive={selectedReason === reason}
                        label={reason}
                        onSelect={() => {
                          setSelectedReason(reason);
                          setIsOpen(false);
                        }}
                      />
                    ))}
                  </div>
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
  delay = 0,
  isActive,
  label,
  onSelect,
}: {
  delay?: number;
  isActive: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <motion.button
      animate={{ opacity: 1, x: 0 }}
      className={[
        "flex w-full items-center justify-between rounded-[18px] px-4 py-3 text-left text-sm transition",
        isActive
          ? "bg-brand-950 text-white shadow-[0_14px_30px_rgba(11,31,59,0.2)]"
          : "text-brand-950/76 hover:bg-white hover:text-brand-950",
      ].join(" ")}
      initial={{ opacity: 0, x: -8 }}
      onClick={onSelect}
      role="option"
      transition={{ duration: 0.18, delay: Math.min(delay * 0.025, 0.12), ease: "easeOut" }}
      type="button"
      whileHover={{ x: 2 }}
    >
      <span>{label}</span>
      <motion.span
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/14"
        transition={{ duration: 0.16, ease: "easeOut" }}
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
      </motion.span>
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
