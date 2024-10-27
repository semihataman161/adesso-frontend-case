<script setup lang="ts">
import { reactive, watch } from "vue";
import jsonData from "../data/age-of-empires-units.json";
import AgeFilter from "../components/units/AgeFilter.vue";
import CostFilter from "../components/units/CostFilter.vue";
import UnitTable from "../components/units/UnitTable.vue";
import { ISelectedCost } from "../types/CostFilter";

const allTableState = reactive({ data: jsonData.units });
const filteredTableState = reactive({ data: allTableState.data });

const handleAgeFilterChange = (selectedAge: string) => {
  if (selectedAge === "All") {
    filteredTableState.data = allTableState.data;
  } else {
    filteredTableState.data = allTableState.data.filter(
      (element) => element.age === selectedAge
    );
  }
};

const handleCostFilterChange = (selectedCosts: ISelectedCost[]) => {
  if (selectedCosts.length === 0) {
    filteredTableState.data = allTableState.data;
  } else {
    // TODO: Implement logic here
  }
};
</script>

<template>
  <!-- Age Filter -->
  <age-filter @update:selectedAge="handleAgeFilterChange"></age-filter>

  <!-- Cost Filter -->
  <cost-filter @update:selectedCost="handleCostFilterChange"></cost-filter>

  <!-- Table -->
  <unit-table :table-data="filteredTableState.data"></unit-table>
</template>
