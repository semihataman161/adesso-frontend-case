export interface ISelectedCost {
  isActive: boolean;
  name: string;
  value: number[];
}

export interface IUnitsState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allTableData: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filteredTableData: any[];
  selectedAge: string;
  selectedCosts: ISelectedCost[];
}
