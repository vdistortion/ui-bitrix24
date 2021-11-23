<template>
  <div class="bitrix-layout">
    <header :class="{ center }">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="menu">
        <template v-if="router">
          <router-link v-for="([name, link], key) in menu" :key="key" :to="link">
            <span class="menu-item">{{ name }}</span>
          </router-link>
        </template>
        <template v-else>
          <a v-for="([name, link, target], key) in menu" :key="key" :href="link" target="_blank">
            <span class="menu-item">{{ name }}</span>
          </a>
        </template>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
      <slot name="copyright"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
    router: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bitrix-layout',
};
</script>

<style lang="stylus">
@import '~@/assets/vars.styl'

.bitrix-layout
  display flex
  flex-direction column
  align-items flex-start
  min-height 100vh

  header
    width 100%
    height 100px
    display flex
    flex-direction row
    align-items center
    box-sizing border-box
    padding 0 60px
    box-shadow 0 2px 0 #f5f5f5
    justify-content space-between
    &.center
      justify-content center

  .logo
    color $logo-color
    letter-spacing 1px
    font-size 16px
    font-weight 600
    margin-right 20px
    cursor default
    transition .3s
    &:hover
      color $logo-color-hover

  .menu
    display flex
    flex-direction row
    align-items center
    a
      text-decoration none
      margin-right 30px
      &:last-child
        margin-right 0
  .menu-item
    color $menu-link-color
    transition .3s
    font-size 16px
    letter-spacing 1px
    &:hover
      color $menu-link-color-hover

  main
    width 100%
    box-sizing border-box
    flex 1
    padding 60px

  footer
    width 100%
    height 100px
    display flex
    flex-direction row
    justify-content center
    align-items center
    box-sizing border-box
    padding 0 60px
    background-color #f5f5f5
    .copyright
      display flex
      flex-direction row
      align-items center
      span
        margin-right 6px
      a
        color $menu-link-color
        transition .3s
        text-decoration none
        font-weight 600
        &:hover
          color $menu-link-color-hover
          text-decoration underline
</style>
