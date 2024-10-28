<script setup lang="ts">
import BaseCard from "@/components/UI/BaseCard.vue";
</script>

<template>
  <v-container
    fluid
    class="home home--full-height d-flex justify-center align-center"
  >
    <v-row class="home__row d-flex justify-center align-center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        class="home__col d-flex justify-center align-center"
      >
        <base-card>
          <img
            loading="lazy"
            class="home__image"
            src="@/assets/age-of-empires.webp"
            alt="Age of Empires"
          />
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.home {
  &--full-height {
    height: 100vh;
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
