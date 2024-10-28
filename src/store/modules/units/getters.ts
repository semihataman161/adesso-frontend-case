import { GetterTree } from "vuex";
import type { IUnitsState } from "@/types/Unit";
import type { RootState } from "@/store/index";

const getters: GetterTree<IUnitsState, RootState> = {
  filteredTableData: (state) => state.filteredTableData,
  allTableDataById: (state) => (id: number) =>
    state.allTableData.find((item) => item.id === id) || null,
};

export default getters;
