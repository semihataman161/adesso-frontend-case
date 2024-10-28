import { GetterTree } from "vuex";
import type { IUnitsState } from "@/types/Unit";
import type { RootState } from "@/store/index";

const getters: GetterTree<IUnitsState, RootState> = {
  filteredTableData: (state) => {
    return state.filteredTableData;
  },
};

export default getters;
