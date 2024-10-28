import { GetterTree } from "vuex";
import type { IUnitsState } from "@/types/Unit";
import type { RootState } from "@/store/index";

const getters: GetterTree<IUnitsState, RootState> = {
  filteredTableData: (state) => {
    let filteredData = state.allTableData;

    // Filter by age
    if (state.selectedAge !== "All") {
      filteredData = filteredData.filter(
        (element) => element.age === state.selectedAge
      );
    }

    // Filter by cost
    if (state.selectedCosts.length > 0) {
      filteredData = filteredData.filter((unit) => {
        return state.selectedCosts.every((selectedCost) => {
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
  },
};

export default getters;
