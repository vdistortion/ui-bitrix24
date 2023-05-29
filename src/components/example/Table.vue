<template>
  <table class="example-table">
    <caption>{{ name }}</caption>
    <tbody>
      <tr>
        <td colspan="2">
          <div class="example-table__components">
            <slot></slot>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="example-table__params">
            <slot name="params"></slot>
          </div>
        </td>
        <td>
          <pre class="example-table__code" v-text="code.trim()"></pre>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="based.length">
      Component based on <a :href="based[0]" target="_blank">{{ based[1] ?? based[0] }}</a>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
    based: {
      type: Array,
      default: () => [],
    },
  },
  name: 'example-table',
});
</script>

<style lang="stylus">
.example-table
  margin 10px
  caption
    font-weight bold
  &__components
  &__code
  &__params
    padding 10px
  &__components
    display flex
    column-gap 10px
    border-bottom 1px solid
  &__code
    width 100%
    vertical-align top
    margin-right 20px
    padding 10px
    background-color #eeeeee
    border-radius 5px
  &__params
    display flex
    flex-direction column
    & > *:not(:first-child)
      margin-top 5px
</style>
