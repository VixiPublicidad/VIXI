import { buildMeta } from "~/components/lib/meta";
import { TreatmentsPage } from "~/components/services/treatments-page";

export function meta() {
  return buildMeta(
    "Tratamientos",
    "Explora evaluación, reproducción asistida, preservación de fertilidad, donación y opciones inclusivas.",
  );
}

export default function TratamientosRoute() {
  return <TreatmentsPage />;
}
