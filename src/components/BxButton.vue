<template>
  <div v-if="props.menu" class="ui-btn-split" :class="classList">
    <button
      class="ui-btn-main"
      :type="props.type"
      :disabled="props.disabled"
      @click="$emit('click')"
    >
      <slot></slot>
      <i v-if="props.counter" class="ui-btn-counter">{{ props.count }}</i>
    </button>
    <button
      class="ui-btn-menu"
      type="button"
      :disabled="props.disabled"
      @click="$emit('toggle-menu')"
    ></button>
  </div>
  <button
    v-else
    class="ui-btn"
    :class="classList"
    :type="props.type"
    :disabled="props.disabled"
    @click="$emit('click')"
  >
    <slot></slot>
    <i v-if="props.counter" class="ui-btn-counter">{{ props.count }}</i>
  </button>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import {
  defaultProps,
  propsValues,
  type PropColor,
  type PropIcon,
  type PropSize,
  type PropLoader,
  type PropType as PropTypeButton,
} from './BxButton.props';
import { useStyles } from '../composable/useStyles';
import { getClassName } from '../utils/getClassName';

useStyles();

const props = defineProps({
  type: {
    type: String as PropType<PropTypeButton>,
    default: defaultProps.type,
    validator(value: PropTypeButton) {
      return propsValues.types.includes(value);
    },
  },
  color: {
    type: String as PropType<PropColor>,
    default: defaultProps.color,
    validator(value: PropColor) {
      return propsValues.colors.includes(value);
    },
  },
  size: {
    type: String as PropType<PropSize>,
    default: defaultProps.size,
    validator(value: PropSize) {
      return propsValues.sizes.includes(value);
    },
  },
  icon: {
    type: String as PropType<PropIcon>,
    default: defaultProps.icon,
    validator(value: PropIcon) {
      return propsValues.icons.includes(value);
    },
  },
  loader: {
    type: String as PropType<PropLoader>,
    default: defaultProps.loader,
    validator(value: PropLoader) {
      return propsValues.loaders.includes(value);
    },
  },
  count: {
    type: Number,
    default: defaultProps.count,
    validator(value) {
      return Number.isFinite(value);
    },
  },
  counter: {
    type: Boolean,
    default: defaultProps.counter,
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
  },
  dropdown: {
    type: Boolean,
    default: defaultProps.dropdown,
  },
  round: {
    type: Boolean,
    default: defaultProps.round,
  },
  noCaps: {
    type: Boolean,
    default: defaultProps.noCaps,
  },
  menu: {
    type: Boolean,
    default: defaultProps.menu,
  },
});

defineEmits(['click', 'toggle-menu']);

const classList = computed(() =>
  getClassName({
    [`ui-btn-${props.color}`]: propsValues.colors.includes(props.color),
    [`ui-btn-${props.size}`]: propsValues.sizes.includes(props.size),
    [`ui-btn-icon-${props.icon}`]: Boolean(props.icon) && propsValues.icons.includes(props.icon),
    [`ui-btn-${props.loader}`]: Boolean(props.loader) && propsValues.loaders.includes(props.loader),
    'ui-btn-disabled': props.disabled,
    'ui-btn-dropdown': props.dropdown,
    'ui-btn-round': props.round,
    'ui-btn-no-caps': props.noCaps,
  }),
);
</script>
