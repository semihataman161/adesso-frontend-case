<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import UnitDetailDisplay from "@/components/unit-detail/UnitDetailDisplay.vue";

const route = useRoute();
const store = useStore();

const id = Number(route.params.id);
const unitDetail = computed(() => store.getters["units/allTableDataById"](id));

const unitData = computed(() => {
  if (unitDetail.value) {
    return [
      { label: "ID", value: unitDetail.value.id },
      { label: "Name", value: unitDetail.value.name },
      { label: "Description", value: unitDetail.value.description },
      { label: "Min. Required Age", value: unitDetail.value.age },
      { label: "Wood Cost", value: unitDetail.value.cost.Wood },
      { label: "Food Cost", value: unitDetail.value.cost.Food },
      { label: "Gold Cost", value: unitDetail.value.cost.Gold },
      { label: "Build Time", value: unitDetail.value.build_time + " seconds" },
      {
        label: "Reload Time",
        value: unitDetail.value.reload_time + " seconds",
      },
      { label: "Hit Points", value: unitDetail.value.hit_points },
      { label: "Attack", value: unitDetail.value.attack },
      { label: "Accuracy", value: unitDetail.value.accuracy },
    ];
  }
  return [];
});
</script>

<template>
  <v-container class="unit-details">
    <v-row class="unit-details__row">
      <v-col cols="12" md="8" lg="6" class="unit-details__col">
        <UnitDetailDisplay :unitData="unitData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.unit-details {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;

  &__row {
    text-align: center;
    justify-content: center;
  }

  &__col {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
