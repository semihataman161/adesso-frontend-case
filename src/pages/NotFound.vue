<template>
  <v-container class="page-not-found" fluid fill-height>
    <v-row
      class="page-not-found__row d-flex align-center justify-center"
      style="height: 100vh"
    >
      <v-col cols="12" class="page-not-found__col">
        <h2 class="page-not-found__message">
          Page not found! Click here to navigate to the
          <router-link to="/home" class="page-not-found__link"
            >Home</router-link
          >
          page?
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
$primary-color: blue;
$text-color: #333;

.page-not-found {
  height: 100vh;

  &__row {
    text-align: center;
  }

  &__link {
    color: $primary-color;
    text-decoration: underline;
  }

  &__message {
    color: $text-color;
  }
}
</style>
