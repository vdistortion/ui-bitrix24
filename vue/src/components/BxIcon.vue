<template>
  <button v-if="button" class="ui-icon" :class="classList">
    <i></i>
  </button>
  <div v-else class="ui-icon" :class="classList">
    <i></i>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { defaultProps, type PropIcon, type PropSize, propsValues } from './BxIcon.props';
import { useStyles } from '../composable/useStyles';
import { getClassName } from '../utils/getClassName';

useStyles();

const props = defineProps({
  icon: {
    type: String as PropType<PropIcon>,
    default: defaultProps.icon,
    validator(value: PropIcon) {
      return propsValues.icons.includes(value);
    },
  },
  size: {
    type: String as PropType<PropSize>,
    default: defaultProps.size,
    validator(value: PropSize) {
      return propsValues.sizes.includes(value);
    },
  },
  button: {
    type: Boolean,
    default: defaultProps.button,
  },
  square: {
    type: Boolean,
    default: defaultProps.square,
  },
});

const classList = computed(() =>
  getClassName({
    [`ui-icon-${props.icon}`]: propsValues.icons.includes(props.icon),
    [`ui-icon-${props.size}`]: propsValues.sizes.includes(props.size),
    'ui-icon-square': props.square,
  }),
);
</script>
