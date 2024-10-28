<script setup lang="ts">
import TheNavigation from "@/components/nav/TheNavigation.vue";
</script>

<template>
  <v-app>
    <div class="layout">
      <the-navigation class="layout__navigation"></the-navigation>
      <main class="layout__main">
        <router-view></router-view>
      </main>
    </div>
  </v-app>
</template>

<style lang="scss">
$font-family: sans-serif;

* {
  box-sizing: border-box;
}

html {
  font-family: $font-family;
}

body {
  margin: 0;
}
</style>
