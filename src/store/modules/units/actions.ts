import { ActionTree } from 'vuex';
import type { RootState } from '@/store/index';
import type { ISelectedCost, IUnitsState } from '@/types/Unit';

const actions: ActionTree<IUnitsState, RootState> = {
  applyFilters({ commit }, { selectedAge, selectedCosts }: { selectedAge: string, selectedCosts: ISelectedCost[] }) {
    commit('SET_SELECTED_AGE', selectedAge);
    commit('SET_SELECTED_COSTS', selectedCosts);
  },
};

export default actions;
