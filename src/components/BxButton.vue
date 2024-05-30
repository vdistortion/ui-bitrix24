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

<script lang="ts">
export type PropTypes = 'button' | 'submit' | 'reset';
export type PropColors =
  | 'default'
  | 'success'
  | 'success-light'
  | 'danger'
  | 'danger-dark'
  | 'danger-light'
  | 'primary'
  | 'primary-dark'
  | 'secondary'
  | 'link'
  | 'light'
  | 'light-border';
export type PropSizes = 'xs' | 'sm' | 'md' | 'lg';
export type PropIcons =
  | ''
  | 'add'
  | 'stop'
  | 'start'
  | 'pause'
  | 'setting'
  | 'task'
  | 'info'
  | 'search'
  | 'follow'
  | 'unfollow'
  | 'print'
  | 'add-folder'
  | 'list'
  | 'business'
  | 'business-confirm'
  | 'business-warning'
  | 'camera'
  | 'phone-up'
  | 'phone-down'
  | 'back'
  | 'edit'
  | 'share'
  | 'remove'
  | 'download'
  | 'cloud'
  | 'page'
  | 'chat'
  | 'phone-call'
  | 'lock'
  | 'done'
  | 'disk'
  | 'mail'
  | 'alert'
  | 'angle-up'
  | 'angle-down'
  | 'dots'
  | 'forward'
  | 'fail'
  | 'success'
  | 'plan'
  | 'eye-opened'
  | 'eye-closed'
  | 'tariff'
  | 'battery'
  | 'no-battery'
  | 'half-battery'
  | 'low-battery'
  | 'crit-battery'
  | 'demo';
export type PropLoaders = '' | 'clock' | 'wait';

export type TypesProps = {
  types: PropTypes[];
  colors: PropColors[];
  sizes: PropSizes[];
  icons: PropIcons[];
  loaders: PropLoaders[];
};

export const propsValues: TypesProps = {
  types: ['button', 'submit', 'reset'],
  colors: [
    'default',
    'success',
    'success-light',
    'danger',
    'danger-dark',
    'danger-light',
    'primary',
    'primary-dark',
    'secondary',
    'link',
    'light',
    'light-border',
  ],
  sizes: ['xs', 'sm', 'md', 'lg'],
  icons: [
    '',
    'add',
    'stop',
    'start',
    'pause',
    'setting',
    'task',
    'info',
    'search',
    'follow',
    'unfollow',
    'print',
    'add-folder',
    'list',
    'business',
    'business-confirm',
    'business-warning',
    'camera',
    'phone-up',
    'phone-down',
    'back',
    'edit',
    'share',
    'remove',
    'download',
    'cloud',
    'page',
    'chat',
    'phone-call',
    'lock',
    'done',
    'disk',
    'mail',
    'alert',
    'angle-up',
    'angle-down',
    'dots',
    'forward',
    'fail',
    'success',
    'plan',
    'eye-opened',
    'eye-closed',
    'tariff',
    'battery',
    'no-battery',
    'half-battery',
    'low-battery',
    'crit-battery',
    'demo',
  ],
  loaders: ['', 'clock', 'wait'],
};
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  type: {
    type: String as PropType<PropTypes>,
    default: 'button',
    validator(value: PropTypes) {
      return propsValues.types.includes(value);
    },
  },
  color: {
    type: String as PropType<PropColors>,
    default: 'default',
    validator(value: PropColors) {
      return propsValues.colors.includes(value);
    },
  },
  size: {
    type: String as PropType<PropSizes>,
    default: 'md',
    validator(value: PropSizes) {
      return propsValues.sizes.includes(value);
    },
  },
  icon: {
    type: String as PropType<PropIcons>,
    default: '',
    validator(value: PropIcons) {
      return propsValues.icons.includes(value);
    },
  },
  loader: {
    type: String as PropType<PropLoaders>,
    default: '',
    validator(value: PropLoaders) {
      return propsValues.loaders.includes(value);
    },
  },
  count: {
    type: Number,
    default: 0,
    validator(value) {
      return Number.isFinite(value);
    },
  },
  counter: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  noCaps: {
    type: Boolean,
    default: false,
  },
  menu: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click', 'toggle-menu']);

const classList = computed(() => ({
  [`ui-btn-${props.color}`]: propsValues.colors.includes(props.color),
  [`ui-btn-${props.size}`]: propsValues.sizes.includes(props.size),
  [`ui-btn-icon-${props.icon}`]: props.icon && propsValues.icons.includes(props.icon),
  [`ui-btn-${props.loader}`]: props.loader && propsValues.loaders.includes(props.loader),
  'ui-btn-disabled': props.disabled,
  'ui-btn-dropdown': props.dropdown,
  'ui-btn-round': props.round,
  'ui-btn-no-caps': props.noCaps,
}));
</script>
