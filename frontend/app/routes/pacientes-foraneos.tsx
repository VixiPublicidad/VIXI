import { OutOfTownPage } from "~/components/contact/out-of-town-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Pacientes foráneos y consulta a distancia",
    "Información para pacientes de otros estados o países que buscan atención en VIXI, con valoración inicial en línea y seguimiento a distancia.",
    {
      path: "/pacientes-foraneos",
      image: "/og/og-6.png",
      keywords: ["pacientes foraneos fertilidad", "consulta en linea fertilidad", "clinica fertilidad mexico"],
    },
  );
}

export default function PacientesForaneosRoute() {
  return <OutOfTownPage />;
}
