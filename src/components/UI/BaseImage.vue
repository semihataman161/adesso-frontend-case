<script setup lang="ts">
</script>

<template>
  <div class="base-image">
    <slot name="image">
    </slot>
    <slot name="caption">
    </slot>
  </div>
</template>

<style lang="scss" scoped>
$base-image-caption-color: #555;
$base-image-max-width: 100%;
$base-image-font-size: 1rem;
$base-image-caption-margin: 0.5rem;

.base-image {
  &__img {
    max-width: $base-image-max-width;
    height: auto;
    display: block;
  }

  &__caption {
    margin-top: $base-image-caption-margin;
    font-size: $base-image-font-size;
    text-align: center;
    color: $base-image-caption-color;
  }
}
</style>
