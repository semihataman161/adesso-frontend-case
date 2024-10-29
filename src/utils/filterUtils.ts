import type { ISelectedCost } from "@/types/Unit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterByAge = (data: any[], selectedAge: string) => {
  try {
    return selectedAge !== "All"
      ? data.filter((element) => element.age === selectedAge)
      : data;
  } catch (error) {
    console.error("Error filtering by age:", error);
    return data;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterByCost = (data: any[], selectedCosts: ISelectedCost[]) => {
  try {
    if (selectedCosts.length === 0) return data;

    return data.filter((unit) => {
      return selectedCosts.every((selectedCost) => {
        const unitCost = unit.cost?.[selectedCost.name] ?? null;
        if (unitCost !== null) {
          const [minValue, maxValue] = selectedCost.value;
          return unitCost >= minValue && unitCost <= maxValue;
        }
        return false;
      });
    });
  } catch (error) {
    console.error("Error filtering by cost:", error);
    return data;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterByAgeAndCost = (data: any[], selectedAge: string, selectedCosts: ISelectedCost[]) => {
  let filteredData = filterByAge(data, selectedAge);
  filteredData = filterByCost(filteredData, selectedCosts);
  return filteredData;
};
