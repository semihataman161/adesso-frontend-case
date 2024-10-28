import { MutationTree } from "vuex";
import type { IUnitsState } from "@/types/Unit";

const mutations: MutationTree<IUnitsState> = {
  SET_FILTERED_UNITS(state, filteredData) {
    state.filteredTableData = filteredData;
  },
  SET_SELECTED_AGE(state, age: string) {
    state.selectedAge = age;
  },
  SET_SELECTED_COSTS(state, costs) {
    state.selectedCosts = costs;
  },
};

export default mutations;
