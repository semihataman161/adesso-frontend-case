<script setup lang="ts">
import { ref, watch, defineEmits, computed } from "vue";
import type { ISelectedCost } from "../../types/CostFilter";

const emit =
  defineEmits<
    (event: "update:selectedFilterValues", selectedCost: ISelectedCost) => void
  >();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const isRangeActive = ref(false);
const rangeValues = ref([0, 200]);

watch([isRangeActive, rangeValues], ([newIsRangeActive, newRangeValues]) => {
  emit("update:selectedFilterValues", {
    isActive: newIsRangeActive,
    name: props.name,
    value: newRangeValues,
  });
});

const formattedRangeValues = computed(() => rangeValues.value.join("-"));
</script>

<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-checkbox v-model="isRangeActive" :label="props.name"></v-checkbox>
    </v-col>
    <v-col cols="12" md="6">
      <v-range-slider
        v-model="rangeValues"
        :max="200"
        :min="0"
        :step="1"
        :disabled="!isRangeActive"
        strict
        hide-details
      ></v-range-slider>
    </v-col>
    <v-col cols="12" md="3">
      <p>{{ formattedRangeValues }}</p>
    </v-col>
  </v-row>
</template>
