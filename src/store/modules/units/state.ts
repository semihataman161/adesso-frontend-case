import jsonData from "@/data/age-of-empires-units.json";
import type { IUnitsState } from "@/types/Unit";

const state: IUnitsState = {
  allTableData: jsonData.units,
  filteredTableData: jsonData.units,
  selectedAge: "All",
  selectedCosts: [],
};

export default state;
