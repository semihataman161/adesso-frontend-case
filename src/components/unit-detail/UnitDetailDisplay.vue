<script setup lang="ts">
import BaseCard from "@/components/UI/BaseCard.vue";
interface UnitDetail {
  label: string;
  value: string | number | null;
}

const props = defineProps<{
  unitData: UnitDetail[];
}>();
</script>

<template>
  <base-card>
    <ul
      v-if="unitData.length > 0"
      class="unit-details__list"
      data-testid="unit-details-list"
    >
      <li
        v-for="(item, index) in props.unitData"
        :key="index"
        class="unit-details__item"
        data-testid="unit-details-item"
      >
        <p class="unit-details__text">
          <strong class="unit-details__label">{{ item.label }}:</strong>
          <span data-testid="unit-details-value">{{ item.value || "-" }}</span>
        </p>
      </li>
    </ul>
  </base-card>
</template>

<style scoped lang="scss">
.unit-details__list {
  list-style-type: none;
  padding-left: 0;

  .unit-details__item {
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 4px;

    .unit-details__text {
      margin: 0;

      .unit-details__label {
        font-weight: bold;
      }
    }
  }
}
</style>
