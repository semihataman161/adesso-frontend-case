<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$base-card-border: 2px solid #ddd;
$base-card-background-color: #f9f9f9;
$base-card-border-radius: 8px;

.base-card {
  border: $base-card-border;
  background-color: $base-card-background-color;
  border-radius: $base-card-border-radius;
  padding: 2rem;
}
</style>
