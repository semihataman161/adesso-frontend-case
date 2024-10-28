<script setup lang="ts">
import { ref, watch } from "vue";

const emit =
  defineEmits<(event: "update:selectedAge", selectedAge: string) => void>();

const selectedAgeId = ref(0);

const ageFilters = [
  { id: 0, label: "All" },
  { id: 1, label: "Dark" },
  { id: 2, label: "Feudal" },
  { id: 3, label: "Castle" },
  { id: 4, label: "Imperial" },
];

watch(selectedAgeId, (newId) => {
  const selectedAge = ageFilters.find((element) => element.id === newId);
  emit("update:selectedAge", selectedAge?.label || "");
});
</script>

<template>
  <p>Ages</p>
  <v-tabs v-model="selectedAgeId">
    <v-tab v-for="ageFilter in ageFilters" :key="ageFilter.id">
      {{ ageFilter.label }}
    </v-tab>
  </v-tabs>
</template>
