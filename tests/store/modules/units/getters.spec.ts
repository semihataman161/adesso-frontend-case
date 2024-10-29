import { describe, it, expect } from "vitest";
import { createStore } from "vuex";
import unitsModule from "@/store/modules/units";
import { IUnitsState } from "@/types/Unit";
import { RootState } from "@/store/index";

const mockState: IUnitsState = {
  allTableData: [
    { id: 1, name: "Unit A", age: "Feudal", cost: 100 },
    { id: 2, name: "Unit B", age: "Castle", cost: 200 },
  ],
  filteredTableData: [],
  selectedAge: "All",
  selectedCosts: [],
};

const store = createStore<RootState>({
  modules: {
    units: {
      ...unitsModule,
      state: mockState,
    },
  },
});

describe("store/modules/units/getters.ts", () => {
  it("should get filteredTableData", () => {
    expect(store.getters["units/filteredTableData"]).toEqual(
      mockState.filteredTableData
    );
  });

  it("should get allTableDataById for existing id", () => {
    const unitId = 1;
    const expectedUnit = mockState.allTableData.find(item => item.id === unitId);
    expect(store.getters["units/allTableDataById"](unitId)).toEqual(expectedUnit);
  });

  it("should return null for non-existing id", () => {
    const nonExistingId = 999;
    expect(store.getters["units/allTableDataById"](nonExistingId)).toBeNull();
  });
});