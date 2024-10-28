export interface ISelectedCost {
  isActive: boolean;
  name: string;
  value: number[];
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface IUnitsState {
  allTableData: any[];
  filteredTableData: any[];
  selectedAge: string;
  selectedCosts: ISelectedCost[];
}
