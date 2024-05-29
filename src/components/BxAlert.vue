<template>
  <div class="ui-alert" :class="classList">
    <span class="ui-alert-message">
      <strong v-if="title">{{ title }}</strong> <slot></slot>
    </span>
    <span class="ui-alert-close-btn" @click="$emit('close')"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import injectStyles from '../mixins/injectStyles';

export type PropSizes = 'md' | 'xs';
export type PropColors = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type PropIcons = '' | 'warning' | 'danger' | 'info';

export type TypesProps = {
  sizes: PropSizes[];
  colors: PropColors[];
  icons: PropIcons[];
};

export const props: TypesProps = {
  sizes: ['md', 'xs'],
  colors: ['default', 'primary', 'success', 'warning', 'danger'],
  icons: ['', 'warning', 'danger', 'info'],
};

export default defineComponent({
  computed: {
    classList() {
      return {
        [`ui-alert-${this.size}`]: props.sizes.includes(this.size),
        [`ui-alert-${this.color}`]: props.colors.includes(this.color),
        [`ui-alert-icon-${this.icon}`]: this.icon && props.icons.includes(this.icon),
        'ui-alert-text-center': this.center,
        'ui-alert-inline': this.inline,
      };
    },
  },
  mixins: [injectStyles],
  emits: ['close'],
  props: {
    title: {
      type: String,
      default: 'Внимание!',
      validator(value: unknown) {
        return typeof value === 'string';
      },
    },
    size: {
      type: String as PropType<PropSizes>,
      default: 'md',
      validator(value: PropSizes) {
        return props.sizes.includes(value);
      },
    },
    color: {
      type: String as PropType<PropColors>,
      default: 'default',
      validator(value: PropColors) {
        return props.colors.includes(value);
      },
    },
    icon: {
      type: String as PropType<PropIcons>,
      default: '',
      validator(value: PropIcons) {
        return props.icons.includes(value);
      },
    },
    center: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-alert',
});
</script>
