import { buildMeta } from "~/components/lib/meta";
import { ProcessPage } from "~/components/services/process/process-page";

export function meta() {
  return buildMeta(
    "Proceso de tratamiento de fertilidad",
    "Conoce cómo funciona el tratamiento de fertilidad en VIXI, desde la primera consulta y el diagnóstico hasta el seguimiento clínico.",
    {
      path: "/como-funciona-tu-tratamiento",
      image: "/og/og-5.png",
      keywords: ["proceso de fertilidad", "consulta de fertilidad", "tratamiento de fertilidad paso a paso"],
    },
  );
}

export default function ProcesoRoute() {
  return <ProcessPage />;
}
