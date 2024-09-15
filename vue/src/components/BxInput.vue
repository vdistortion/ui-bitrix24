<template>
  <div class="bx-input ui-ctl ui-ctl-textbox" :class="classList">
    <component
      v-if="props.beforeIcon"
      :is="props.beforeButton ? 'button' : 'div'"
      :class="classListBeforeIcon"
      @click="$emit('click-before')"
    ></component>
    <component
      v-if="props.afterIcon"
      :is="props.afterButton ? 'button' : 'div'"
      :class="classListAfterIcon"
      @click="$emit('click-after')"
    ></component>
    <div v-if="props.tag" class="ui-ctl-tag" :class="classListTag">
      {{ props.tag }}
    </div>
    <input
      type="text"
      class="ui-ctl-element"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="onEmit($event, 'update:modelValue')"
      @change="onEmit($event, 'change')"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, useCssModule } from 'vue';
import {
  defaultProps,
  propsValues,
  type PropColor,
  type PropIcon,
  type PropSize,
  type PropTagColor,
} from './BxInput.props';
import { useStyles } from '../composable/useStyles';
import { getClassName } from '../utils/getClassName';

useStyles();

const props = defineProps({
  modelValue: {
    type: String,
    default: defaultProps.value,
  },
  placeholder: {
    type: String,
    default: defaultProps.placeholder,
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
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
  inline: {
    type: Boolean,
    default: defaultProps.inline,
  },
  noBorder: {
    type: Boolean,
    default: defaultProps.noBorder,
  },
  underline: {
    type: Boolean,
    default: defaultProps.underline,
  },
  noPadding: {
    type: Boolean,
    default: defaultProps.noPadding,
  },
  round: {
    type: Boolean,
    default: defaultProps.round,
  },
  tag: {
    type: String,
    default: defaultProps.tag,
  },
  tagColor: {
    type: String as PropType<PropTagColor>,
    default: defaultProps.tagColor,
    validator(value: PropTagColor) {
      return propsValues.tagColors.includes(value);
    },
  },
  beforeIcon: {
    type: String as PropType<PropIcon>,
    default: defaultProps.beforeIcon,
    validator(value: PropIcon) {
      return propsValues.icons.includes(value);
    },
  },
  beforeExt: {
    type: Boolean,
    default: defaultProps.beforeExt,
  },
  beforeButton: {
    type: Boolean,
    default: defaultProps.beforeButton,
  },
  afterIcon: {
    type: String as PropType<PropIcon>,
    default: defaultProps.afterIcon,
    validator(value: PropIcon) {
      return propsValues.icons.includes(value);
    },
  },
  afterExt: {
    type: Boolean,
    default: defaultProps.afterExt,
  },
  afterButton: {
    type: Boolean,
    default: defaultProps.afterButton,
  },
});

const emit = defineEmits(['update:modelValue', 'change', 'click-before', 'click-after']);

function onEmit(event: Event, eventName: 'change' | 'update:modelValue') {
  const input = event.target as HTMLInputElement;
  emit(eventName, input.value);
}

const styles = useCssModule();

const classList = computed(() =>
  getClassName({
    [`ui-ctl-${props.size}`]: propsValues.sizes.includes(props.size),
    [`ui-ctl-${props.color}`]: Boolean(props.color) && propsValues.colors.includes(props.color),
    'ui-ctl-before-icon': Boolean(props.beforeIcon) && !props.beforeExt,
    'ui-ctl-ext-before-icon': Boolean(props.beforeIcon) && props.beforeExt,
    'ui-ctl-after-icon': Boolean(props.afterIcon) && !props.afterExt,
    'ui-ctl-ext-after-icon': Boolean(props.afterIcon) && props.afterExt,
    'ui-ctl-inline': props.inline,
    'ui-ctl-no-border': props.noBorder,
    'ui-ctl-underline': props.underline,
    'ui-ctl-no-padding': props.noPadding,
    'ui-ctl-round': props.round,
    [styles['bx-input']]: true,
  }),
);

const classListBeforeIcon = computed(() =>
  getClassName({
    'ui-ctl-before': !props.beforeExt,
    'ui-ctl-ext-before': props.beforeExt,
    [`ui-ctl-icon-${props.beforeIcon}`]:
      Boolean(props.beforeIcon) && propsValues.icons.includes(props.beforeIcon),
    [styles['bx-input-before']]: true,
  }),
);

const classListAfterIcon = computed(() =>
  getClassName({
    'ui-ctl-after': !props.afterExt,
    'ui-ctl-ext-after': props.afterExt,
    [`ui-ctl-icon-${props.afterIcon}`]:
      Boolean(props.afterIcon) && propsValues.icons.includes(props.afterIcon),
  }),
);

const classListTag = computed(() =>
  getClassName({
    '--tag_light': props.tagColor === 'light',
    '--tag_light-blue': props.tagColor === 'light-blue',
  }),
);
</script>

<style module>
.bx-input {
  width: 100%;
}

.bx-input-before {
  left: 1px;
}
</style>
