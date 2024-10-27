<script setup lang="ts">
import SelectableRange from "./SelectableRange.vue";
import { ISelectedCost } from "../../types/CostFilter";
import { defineEmits, reactive } from "vue";

const emit =
  defineEmits<
    (event: "update:selectedCost", selectedCost: ISelectedCost[]) => void
  >();

const costFilters = ["Wood", "Food", "Gold"];
const selectedCosts = reactive<{ data: ISelectedCost[] }>({
  data: [],
});

const handleSelectedFilterChange = (selectedCost: ISelectedCost) => {
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
