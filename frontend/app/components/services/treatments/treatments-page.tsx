import { TreatmentsCategories } from "./categories";
import { TreatmentsHero } from "./hero";
import { TreatmentsNextStep } from "./treatments-next-step";

export function TreatmentsPage() {
  return (
    <>
      <TreatmentsHero />
      <TreatmentsCategories />
      <TreatmentsNextStep />
    </>
  );
}
