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
      <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="unit-details__col">
        <unit-detail-display :unitData="unitData" />
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
  padding: 1rem;

  &__row {
    text-align: center;
    justify-content: center;
    margin: 0;

    @media (max-width: 600px) {
      margin: 0;
      padding: 0;
    }
  }

  &__col {
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;

    @media (max-width: 600px) {
      padding: 0.5rem;
    }
  }
}
</style>
