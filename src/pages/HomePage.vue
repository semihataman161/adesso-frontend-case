<script setup lang="ts">
import BaseImage from "../components/UI/BaseImage.vue";
defineProps<{ msg: string }>();
</script>

<template>
  <v-container
    fluid
    class="d-flex justify-center align-center"
    style="height: 100vh"
  >
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" sm="8" md="6" class="d-flex justify-center align-center">
        <base-image>
          <template #image>
            <img
              loading="lazy"
              src="@/assets/age-of-empires.webp"
              alt="Age of empires"
            />
          </template>
        </base-image>
      </v-col>
    </v-row>
  </v-container>
</template>
