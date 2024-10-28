<script setup lang="ts">
import { reactive, watch } from "vue";
import jsonData from "../data/age-of-empires-units.json";
import BaseCard from "../components/UI/BaseCard.vue";
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
  <div class="unit-filter">
    <!-- Age Filter -->
    <base-card class="unit-filter__card">
      <age-filter
        class="unit-filter__age"
        @update:selectedAge="handleAgeFilterChange"
      />
    </base-card>

    <!-- Cost Filter -->
    <base-card class="unit-filter__card">
      <cost-filter
        class="unit-filter__cost"
        @update:selectedCost="handleCostFilterChange"
      />
    </base-card>

    <!-- Table -->
    <base-card class="unit-filter__card">
      <unit-table
        class="unit-filter__table"
        :table-data="filteredTableState.data"
      />
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.unit-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  &__card {
    margin: 1rem 0;
    width: 50%;
  }

  &__age,
  &__cost,
  &__table {
    width: 100%;
  }
}
</style>
