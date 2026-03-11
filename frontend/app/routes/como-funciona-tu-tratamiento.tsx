import { buildMeta } from "~/components/lib/meta";
import { ProcessPage } from "~/components/services/process-page";

export function meta() {
  return buildMeta(
    "Cómo funciona tu tratamiento",
    "Conoce el proceso clínico de VIXI desde la primera consulta hasta el seguimiento.",
  );
}

export default function ProcesoRoute() {
  return <ProcessPage />;
}
