import { WhoWeArePage } from "~/components/about/who-we-are-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Especialistas en fertilidad y reproducción asistida",
    "Conoce la filosofía, valores y el equipo médico de VIXI, especialistas en fertilidad y reproducción asistida en León, Guanajuato.",
    {
      path: "/quienes-somos",
      image: "/og/og-2.png",
      keywords: ["especialistas en fertilidad", "equipo médico fertilidad", "reproducción asistida León"],
    },
  );
}

export default function QuienesSomosRoute() {
  return <WhoWeArePage />;
}
