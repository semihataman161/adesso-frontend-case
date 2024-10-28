<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import type { ISelectedCost } from "@/types/Unit";
import BaseCard from "@/components/UI/BaseCard.vue";
import AgeFilter from "@/components/units/AgeFilter.vue";
import CostFilter from "@/components/units/CostFilter.vue";
import UnitTable from "@/components/units/UnitTable.vue";

const store = useStore();

const selectedAge = computed(() => store.state.units.selectedAge);
const selectedCosts = computed(() => store.state.units.selectedCosts);

const handleAgeFilterChange = (age: string) => {
  store.dispatch("units/applyFilters", {
    selectedAge: age,
    selectedCosts: selectedCosts.value,
  });
};

const handleCostFilterChange = (costs: ISelectedCost[]) => {
  store.dispatch("units/applyFilters", {
    selectedAge: selectedAge.value,
    selectedCosts: costs,
  });
};
</script>

<template>
  <div class="unit-filter">
    <!-- Age Filter -->
    <base-card class="unit-filter__card">
      <age-filter @update:selectedAge="handleAgeFilterChange" />
    </base-card>

    <!-- Cost Filter -->
    <base-card class="unit-filter__card">
      <cost-filter @update:selectedCost="handleCostFilterChange" />
    </base-card>

    <!-- Table -->
    <base-card class="unit-filter__card">
      <unit-table />
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
