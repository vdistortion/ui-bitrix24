<template>
  <div class="example-page">
    <header class="example-page__header"></header>
    <main>
      <div class="example-page__menu">
        <slot name="menu"></slot>
      </div>
      <div class="example-page__content">
        <slot></slot>
      </div>
    </main>
    <footer class="example-page__footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'example-page',
};
</script>

<style lang="stylus">
.example-page
  main
    display flex
    max-width 1024px
    margin 0 auto
  &__menu
    min-width 200px
  &__content
    flex-grow 1
    display flex
    justify-content center
</style>
