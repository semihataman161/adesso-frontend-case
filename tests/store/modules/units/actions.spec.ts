import { describe, it, expect, beforeEach } from "vitest";
import { createStore } from "vuex";
import actions from "@/store/modules/units/actions";
import mutations from "@/store/modules/units/mutations";
import { filterByAgeAndCost } from "@/utils/filterUtils";

const mockState = {
  allTableData: [
    { id: 1, name: "Unit A", age: "Feudal", cost: 100 },
    { id: 2, name: "Unit B", age: "Castle", cost: 200 },
  ],
  filteredTableData: [],
  selectedAge: "All",
  selectedCosts: [],
};

const store = createStore({
  state: mockState,
  mutations,
  actions,
});

describe("store/modules/actions.ts", () => {
  beforeEach(() => {
    store.replaceState(mockState);
  });

  it("should apply filters correctly", async () => {
    const selectedCosts = [{ isActive: true, name: "Feudal", value: [100] }];
    const selectedAge = "Feudal";

    const filteredData = filterByAgeAndCost(
      mockState.allTableData,
      selectedAge,
      selectedCosts
    );

    await store.dispatch("applyFilters", { selectedAge, selectedCosts });

    expect(store.state.filteredTableData).toEqual(filteredData);
    expect(store.state.selectedAge).toBe(selectedAge);
    expect(store.state.selectedCosts).toEqual(selectedCosts);
  });
});
