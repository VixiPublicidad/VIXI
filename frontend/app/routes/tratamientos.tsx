import { buildMeta } from "~/components/lib/meta";
import { TreatmentsPage } from "~/components/services/treatments-page";

export function meta() {
  return buildMeta(
    "Tratamientos de fertilidad y reproducción asistida",
    "Explora tratamientos de fertilidad en VIXI: evaluación, reproducción asistida, preservación de fertilidad, donación y opciones inclusivas.",
    {
      path: "/tratamientos",
      image: "/og/og-4.png",
      keywords: ["tratamientos de fertilidad", "reproducción asistida", "inseminación intrauterina", "fertilización in vitro"],
    },
  );
}

export default function TratamientosRoute() {
  return <TreatmentsPage />;
}
