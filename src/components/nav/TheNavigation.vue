<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__menu">
        <li class="header__menu-item">
          <router-link class="header__link" to="/home">Home</router-link>
        </li>
        <li class="header__menu-item">
          <router-link class="header__link" to="/units">Units</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$header-bg-color: #11005c;
$link-color: white;
$link-hover-color: #f1a80a;
$link-hover-bg-color: #1a037e;
$link-padding: 0.5rem 1.5rem;
$header-height: 5rem;
$li-margin: 0 2rem;

@mixin link-hover-active-styles {
  color: $link-hover-color;
  border-color: $link-hover-color;
  background-color: $link-hover-bg-color;
}

.header {
  width: 100%;
  height: $header-height;
  background-color: $header-bg-color;

  &__nav {
    height: 100%;
  }

  &__menu {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__menu-item {
    margin: $li-margin;
  }

  &__link {
    text-decoration: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: $link-color;
    padding: $link-padding;
    display: inline-block;

    &:hover,
    &:active,
    &--active {
      @include link-hover-active-styles;
    }
  }

  a.router-link-active {
    @include link-hover-active-styles;
  }
}
</style>
