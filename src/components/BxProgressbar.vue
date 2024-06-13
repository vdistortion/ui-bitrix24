<template>
  <div class="ui-progressbar" :class="classList">
    <div v-if="props.textBefore" class="ui-progressbar-text-before">{{ props.textBefore }}</div>
    <div class="ui-progressbar-track">
      <div class="ui-progressbar-bar" :style="{ width }"></div>
    </div>
    <div v-if="props.textAfter" class="ui-progressbar-text-after">{{ props.textAfter }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { defaultProps, type PropColor, type PropSize, propsValues } from './BxProgressbar.props';
import { useStyles } from '../composable/useStyles';
import { getClassName } from '../utils/getClassName';

useStyles();

const props = defineProps({
  progress: {
    type: Number,
    default: defaultProps.progress,
    validator(value) {
      return Number.isFinite(value);
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
  textBefore: {
    type: String,
    default: defaultProps.textBefore,
  },
  textAfter: {
    type: String,
    default: defaultProps.textAfter,
  },
  bg: {
    type: Boolean,
    default: defaultProps.bg,
  },
  column: {
    type: Boolean,
    default: defaultProps.column,
  },
});

const width = computed(() => `${props.progress}%`);

const classList = computed(() =>
  getClassName({
    [`ui-progressbar-${props.size}`]: propsValues.sizes.includes(props.size),
    [`ui-progressbar-${props.color}`]: propsValues.colors.includes(props.color),
    'ui-progressbar-bg': props.bg,
    'ui-progressbar-column': props.column,
  }),
);
</script>
