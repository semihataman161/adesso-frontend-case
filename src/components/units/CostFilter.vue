<script setup lang="ts">
import SelectableRange from "@/components/units/SelectableRange.vue";
import type { ISelectedCost } from "@/types/Unit";
import { reactive } from "vue";

const emit =
  defineEmits<
    (event: "update:selectedCost", selectedCost: ISelectedCost[]) => void
  >();

const costFilters = ["Wood", "Food", "Gold"];
const selectedCosts = reactive<{ data: ISelectedCost[] }>({
  data: [],
});

const updateSelectedCost = (selectedCost: ISelectedCost) => {
  const foundIndex = selectedCosts.data.findIndex(
    (item) => item.name === selectedCost.name
  );

  if (foundIndex !== -1) {
    if (!selectedCost.isActive) {
      selectedCosts.data.splice(foundIndex, 1);
    } else {
      selectedCosts.data[foundIndex] = {
        ...selectedCosts.data[foundIndex],
        ...selectedCost,
      };
    }
  } else {
    selectedCosts.data.push(selectedCost);
  }
};

const handleSelectedFilterChange = (selectedCost: ISelectedCost) => {
  updateSelectedCost(selectedCost);
  emit("update:selectedCost", selectedCosts.data);
};
</script>

<template>
  <p>Costs</p>
  <v-container fluid>
    <selectable-range
      v-for="costFilter in costFilters"
      :key="costFilter"
      :name="costFilter"
      @update:selectedFilterValues="handleSelectedFilterChange"
    ></selectable-range>
  </v-container>
</template>
