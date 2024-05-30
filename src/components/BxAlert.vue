<template>
  <div class="ui-alert" :class="classList">
    <span class="ui-alert-message">
      <strong v-if="props.title">{{ props.title }}</strong> <slot></slot>
    </span>
    <span class="ui-alert-close-btn" @click="$emit('close')"></span>
  </div>
</template>

<script lang="ts">
export type PropSizes = 'md' | 'xs';
export type PropColors = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type PropIcons = '' | 'warning' | 'danger' | 'info';

export type TypesProps = {
  sizes: PropSizes[];
  colors: PropColors[];
  icons: PropIcons[];
};

export const propsValues: TypesProps = {
  sizes: ['md', 'xs'],
  colors: ['default', 'primary', 'success', 'warning', 'danger'],
  icons: ['', 'warning', 'danger', 'info'],
};
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
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
      return propsValues.sizes.includes(value);
    },
  },
  color: {
    type: String as PropType<PropColors>,
    default: 'default',
    validator(value: PropColors) {
      return propsValues.colors.includes(value);
    },
  },
  icon: {
    type: String as PropType<PropIcons>,
    default: '',
    validator(value: PropIcons) {
      return propsValues.icons.includes(value);
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
});

defineEmits(['close']);

const classList = computed(() => ({
  [`ui-alert-${props.size}`]: propsValues.sizes.includes(props.size),
  [`ui-alert-${props.color}`]: propsValues.colors.includes(props.color),
  [`ui-alert-icon-${props.icon}`]: props.icon && propsValues.icons.includes(props.icon),
  'ui-alert-text-center': props.center,
  'ui-alert-inline': props.inline,
}));
</script>
