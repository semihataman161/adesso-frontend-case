<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const headers = [
  { title: "id", value: "id", sortable: true },
  { title: "name", value: "name", sortable: true },
  { title: "age", value: "age", sortable: true },
  { title: "cost", value: "cost", sortable: false },
];

const filteredTableData = computed(
  () => store.getters["units/filteredTableData"]
);

function getFormattedCostValue(proxy: object): string {
  const obj = { ...proxy };
  const entries = Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  return entries.join(", ");
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
const handleRowClick = async (event: any, row: any) => {
  await router.push(`units/${row.item.id}`);
};
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="filteredTableData"
    item-key="id"
    items-per-page="5"
    height="300px"
    @click:row="handleRowClick"
  >
    <template v-slot:[`item.cost`]="{ value }">
      {{ getFormattedCostValue(value) }}
    </template>
  </v-data-table>
</template>
