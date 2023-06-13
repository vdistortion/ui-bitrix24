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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'example-page',
});
</script>

<style>
.example-page main {
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
}
.example-page__menu {
  min-width: 200px;
}
.example-page__content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
