<script setup lang="ts">
import TheNavigation from "./components/nav/TheNavigation.vue";
</script>

<template>
  <div class="layout">
    <the-navigation class="layout__navigation"></the-navigation>
    <main class="layout__main">
      <router-view class="layout__content"></router-view>
    </main>
  </div>
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
