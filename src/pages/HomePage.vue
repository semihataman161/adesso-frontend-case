<script setup lang="ts">
import BaseImage from "../components/UI/BaseImage.vue";
</script>

<template>
  <v-container
    fluid
    class="home-container home-container--full-height d-flex justify-center align-center"
  >
    <v-row class="home-row d-flex justify-center align-center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        class="home-col d-flex justify-center align-center"
      >
        <base-image>
          <template #image>
            <img
              loading="lazy"
              class="home-image"
              src="@/assets/age-of-empires.webp"
              alt="Age of Empires"
            />
          </template>
        </base-image>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
}
</style>
