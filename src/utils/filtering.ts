import type { ISelectedCost } from "../types/CostFilter";

export const filterUnits = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  units: any[],
  selectedAge: string,
  selectedCosts: ISelectedCost[]
) => {
  let filteredData = units;

  // Filter by age
  if (selectedAge !== "All") {
    filteredData = filteredData.filter(
      (element) => element.age === selectedAge
    );
  }

  // Filter by cost
  if (selectedCosts.length > 0) {
    filteredData = filteredData.filter((unit) => {
      return selectedCosts.every((selectedCost) => {
        const unitCost =
          (unit.cost as Record<string, number | undefined> | null)?.[
            selectedCost.name
          ] ?? null;

        if (unitCost !== null) {
          const [minValue, maxValue] = selectedCost.value;
          return unitCost >= minValue && unitCost <= maxValue;
        }
        return false;
      });
    });
  }

  return filteredData;
};
