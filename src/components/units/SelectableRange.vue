<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { ISelectedCost } from "@/types/Unit";

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

const formattedRangeValues = computed(() =>
  isRangeActive.value ? rangeValues.value.join("-") : "-"
);
</script>

<template>
  <v-row>
    <v-col cols="12" sm="4" md="3" xl="2" class="pl-1">
      <v-checkbox
        hide-details
        v-model="isRangeActive"
        :label="props.name"
      ></v-checkbox>
    </v-col>
    <v-col cols="12" sm="6" md="3" xl="3" class="mt-3">
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
    <v-col cols="12" sm="2" md="2" xl="2" class="mt-4">
      <p>{{ formattedRangeValues }}</p>
    </v-col>
  </v-row>
</template>
