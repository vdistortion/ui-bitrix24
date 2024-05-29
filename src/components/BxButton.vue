<template>
  <div v-if="menu" class="ui-btn-split" :class="classList">
    <button class="ui-btn-main" :type="type" :disabled="disabled" @click="$emit('click')">
      <slot></slot>
      <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
    </button>
    <button
      class="ui-btn-menu"
      type="button"
      :disabled="disabled"
      @click="$emit('toggle-menu')"
    ></button>
  </div>
  <button
    v-else
    class="ui-btn"
    :class="classList"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
    <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import injectStyles from '../mixins/injectStyles';

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

export const props: TypesProps = {
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

export default defineComponent({
  computed: {
    classList() {
      return {
        [`ui-btn-${this.color}`]: props.colors.includes(this.color),
        [`ui-btn-${this.size}`]: props.sizes.includes(this.size),
        [`ui-btn-icon-${this.icon}`]: this.icon && props.icons.includes(this.icon),
        [`ui-btn-${this.loader}`]: this.loader && props.loaders.includes(this.loader),
        'ui-btn-disabled': this.disabled,
        'ui-btn-dropdown': this.dropdown,
        'ui-btn-round': this.round,
        'ui-btn-no-caps': this.noCaps,
      };
    },
  },
  mixins: [injectStyles],
  emits: ['click', 'toggle-menu'],
  props: {
    type: {
      type: String as PropType<PropTypes>,
      default: 'button',
      validator(value: PropTypes) {
        return props.types.includes(value);
      },
    },
    color: {
      type: String as PropType<PropColors>,
      default: 'default',
      validator(value: PropColors) {
        return props.colors.includes(value);
      },
    },
    size: {
      type: String as PropType<PropSizes>,
      default: 'md',
      validator(value: PropSizes) {
        return props.sizes.includes(value);
      },
    },
    icon: {
      type: String as PropType<PropIcons>,
      default: '',
      validator(value: PropIcons) {
        return props.icons.includes(value);
      },
    },
    loader: {
      type: String as PropType<PropLoaders>,
      default: '',
      validator(value: PropLoaders) {
        return props.loaders.includes(value);
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
  },
  name: 'bx-button',
});
</script>
