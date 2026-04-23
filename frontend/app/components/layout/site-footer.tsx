import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand-950 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="max-w-xl">
          <img
            alt="VIXI"
            className="h-14 w-auto"
            decoding="async"
            height="56"
            src="/logos/vixi_logo_white.webp"
            width="168"
          />
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-accent-200">
            Ciencia y experiencia dando vida.
          </p>
          <p className="mt-6 text-base leading-7 text-white/74">
            La fertilidad es mas que un tratamiento. Es una decision emocional, medica y profundamente humana.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-200">Explora</p>
          <div className="mt-5 grid gap-3">
            <Link className="text-white/76 transition hover:text-white" to="/">Inicio</Link>
            <Link className="text-white/76 transition hover:text-white" to="/quienes-somos">Quienes somos</Link>
            <Link className="text-white/76 transition hover:text-white" to="/nuestra-experiencia">Experiencia</Link>
            <Link className="text-white/76 transition hover:text-white" to="/tratamientos">Tratamientos</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-200">Servicios</p>
          <div className="mt-5 grid gap-3">
            <Link className="text-white/76 transition hover:text-white" to="/como-funciona-tu-tratamiento">Proceso</Link>
            <Link className="text-white/76 transition hover:text-white" to="/pacientes-foraneos">Foraneos</Link>
            <Link className="text-white/76 transition hover:text-white" to="/preguntas-frecuentes">FAQ</Link>
            <Link className="text-white/76 transition hover:text-white" to="/contacto">Contacto</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-sm text-white/66 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="inline-flex items-center gap-2">
            <FaMapMarkerAlt aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-200" />
            Av. Cerro Gordo, Lomas del Campestre, 37150 Leon de los Aldama, Guanajuato
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
            <a className="inline-flex items-center gap-2" href="tel:+524776725136">
              <FaPhone aria-hidden="true" className="h-4 w-4 text-accent-200" />
              477 672 5136
            </a>
            <a
              className="inline-flex items-center gap-2"
              href="https://wa.me/524776725136"
              rel="noreferrer"
              target="_blank"
            >
              <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-accent-200" />
              WhatsApp 477 672 5136
            </a>
            <a className="inline-flex items-center gap-2" href="mailto:pacientes.vixi@gmail.com">
              <FaEnvelope aria-hidden="true" className="h-4 w-4 text-accent-200" />
              pacientes.vixi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
