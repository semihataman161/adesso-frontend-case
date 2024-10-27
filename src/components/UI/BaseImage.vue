<template>
  <div class="base-image">
    <slot name="image" class="base-image__image"></slot>
    <slot name="caption" class="base-image__caption"></slot>
  </div>
</template>

<style lang="scss" scoped>
$base-image-border: 2px solid #ddd;
$base-image-background-color: #f9f9f9;
$base-image-border-radius: 8px;

.base-image {
  border: $base-image-border;
  background-color: $base-image-background-color;
  border-radius: $base-image-border-radius;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
}
</style>
