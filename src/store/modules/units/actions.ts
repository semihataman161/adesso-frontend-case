import { ActionTree } from 'vuex';
import type { RootState } from '@/store/index';
import type { ISelectedCost, IUnitsState } from '@/types/Unit';
import { filterByAgeAndCost } from '@/utils/filterUtils';

const actions: ActionTree<IUnitsState, RootState> = {
  applyFilters({ commit, state }, { selectedAge, selectedCosts }: { selectedAge: string; selectedCosts: ISelectedCost[] }) {
    const filteredData = filterByAgeAndCost(state.allTableData, selectedAge, selectedCosts);

    commit('SET_FILTERED_UNITS', filteredData);
    commit('SET_SELECTED_AGE', selectedAge);
    commit('SET_SELECTED_COSTS', selectedCosts);
  },
};

export default actions;
