import { describe, it, expect } from "vitest";
import { createStore } from 'vuex';
import mutations from '@/store/modules/units/mutations';
import { IUnitsState } from '@/types/Unit';

const mockState: IUnitsState = {
  allTableData: [],
  filteredTableData: [],
  selectedAge: 'All',
  selectedCosts: [],
};

const store = createStore({
  state: mockState,
  mutations,
});

describe('store/modules/mutations.ts', () => {
  it('should set filtered units', () => {
    store.commit('SET_FILTERED_UNITS', [{ id: 1, name: 'Unit A', age: 'Feudal', cost: 100 }]);
    expect(store.state.filteredTableData).toEqual([{ id: 1, name: 'Unit A', age: 'Feudal', cost: 100 }]);
  });

  it('should set selected age', () => {
    store.commit('SET_SELECTED_AGE', 'Castle');
    expect(store.state.selectedAge).toBe('Castle');
  });

  it('should set selected costs', () => {
    store.commit('SET_SELECTED_COSTS', [{ cost: 200 }]);
    expect(store.state.selectedCosts).toEqual([{ cost: 200 }]);
  });
});
