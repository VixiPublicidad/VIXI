import { OutOfTownPage } from "~/components/contact/out-of-town-page";
import { buildMeta } from "~/components/lib/meta";

export function meta() {
  return buildMeta(
    "Pacientes foráneos",
    "Información para pacientes de otros estados o países que buscan atención en VIXI.",
  );
}

export default function PacientesForaneosRoute() {
  return <OutOfTownPage />;
}
