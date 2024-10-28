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
  <div class="age-selector">
    <p class="age-selector__title">Ages</p>
    <v-tabs v-model="selectedAgeId" class="age-selector__tabs">
      <v-tab
        v-for="ageFilter in ageFilters"
        :key="ageFilter.id"
        class="age-selector__tab"
      >
        {{ ageFilter.label }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<style scoped lang="scss">
.age-selector {
  &__title {
    margin-bottom: 10px;
  }
}
</style>
