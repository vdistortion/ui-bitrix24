<template>
  <div class="ui-alert" :class="classList">
    <span class="ui-alert-message">
      <strong v-if="props.title">{{ props.title }}</strong> <slot></slot>
    </span>
    <span v-if="closing" class="ui-alert-close-btn" @click="$emit('close')"></span>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import {
  defaultProps,
  propsValues,
  type PropColor,
  type PropIcon,
  type PropSize,
} from './BxAlert.props';
import { useStyles } from '../composable/useStyles';
import { getClassName } from '../utils/getClassName';

useStyles();

const props = defineProps({
  title: {
    type: String,
    default: defaultProps.title,
    validator(value: unknown) {
      return typeof value === 'string';
    },
  },
  size: {
    type: String as PropType<PropSize>,
    default: defaultProps.size,
    validator(value: PropSize) {
      return propsValues.sizes.includes(value);
    },
  },
  color: {
    type: String as PropType<PropColor>,
    default: defaultProps.color,
    validator(value: PropColor) {
      return propsValues.colors.includes(value);
    },
  },
  icon: {
    type: String as PropType<PropIcon>,
    default: defaultProps.icon,
    validator(value: PropIcon) {
      return propsValues.icons.includes(value);
    },
  },
  center: {
    type: Boolean,
    default: defaultProps.center,
  },
  inline: {
    type: Boolean,
    default: defaultProps.inline,
  },
  closing: {
    type: Boolean,
    default: defaultProps.closing,
  },
});

defineEmits(['close']);

const classList = computed(() =>
  getClassName({
    [`ui-alert-${props.size}`]: propsValues.sizes.includes(props.size),
    [`ui-alert-${props.color}`]: propsValues.colors.includes(props.color),
    [`ui-alert-icon-${props.icon}`]: Boolean(props.icon) && propsValues.icons.includes(props.icon),
    'ui-alert-text-center': props.center,
    'ui-alert-inline': props.inline,
  }),
);
</script>
