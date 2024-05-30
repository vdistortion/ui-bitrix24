<template>
  <div class="ui-progressbar" :class="classList">
    <div v-if="props.textBefore" class="ui-progressbar-text-before">{{ props.textBefore }}</div>
    <div class="ui-progressbar-track">
      <div class="ui-progressbar-bar" :style="{ width }"></div>
    </div>
    <div v-if="props.textAfter" class="ui-progressbar-text-after">{{ props.textAfter }}</div>
  </div>
</template>

<script lang="ts">
export type PropSizes = 'md' | 'lg';
export type PropColors = 'primary' | 'success' | 'warning' | 'danger';

export type TypesProps = {
  sizes: PropSizes[];
  colors: PropColors[];
};

export const propsValues: TypesProps = {
  sizes: ['md', 'lg'],
  colors: ['primary', 'success', 'warning', 'danger'],
};
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator(value) {
      return Number.isFinite(value);
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
    default: 'primary',
    validator(value: PropColors) {
      return propsValues.colors.includes(value);
    },
  },
  textBefore: {
    type: String,
    default: '',
  },
  textAfter: {
    type: String,
    default: '',
  },
  bg: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Boolean,
    default: false,
  },
});

const width = computed(() => `${props.progress}%`);

const classList = computed(() => ({
  [`ui-progressbar-${props.size}`]: propsValues.sizes.includes(props.size),
  [`ui-progressbar-${props.color}`]: propsValues.colors.includes(props.color),
  'ui-progressbar-bg': props.bg,
  'ui-progressbar-column': props.column,
}));
</script>
