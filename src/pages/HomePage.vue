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
        xs="10"
        sm="8"
        md="6"
        lg="4"
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
    height: 90vh;
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  &__col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    cursor: pointer;
    transition: opacity 0.3s ease;
    max-width: 100%;
    width: auto;
    height: auto;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
