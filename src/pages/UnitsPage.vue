<script setup lang="ts">
import { reactive, watch } from "vue";
import jsonData from "../data/age-of-empires-units.json";
import AgeFilter from "../components/units/AgeFilter.vue";
import CostFilter from "../components/units/CostFilter.vue";
import UnitTable from "../components/units/UnitTable.vue";
import type { ISelectedCost } from "../types/CostFilter";
import { filterUnits } from "../utils/filtering";

const allTableState = reactive({ data: jsonData.units });
const filteredTableState = reactive({ data: allTableState.data });
const selectedAge = reactive({ value: "All" });
const selectedCosts = reactive<ISelectedCost[]>([]);

watch([selectedAge, selectedCosts], () => {
  filteredTableState.data = filterUnits(
    allTableState.data,
    selectedAge.value,
    selectedCosts
  );
});

const handleAgeFilterChange = (age: string) => {
  selectedAge.value = age;
};

const handleCostFilterChange = (costs: ISelectedCost[]) => {
  selectedCosts.splice(0, selectedCosts.length, ...costs);
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
