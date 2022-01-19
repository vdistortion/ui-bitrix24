<template>
  <div
    class="ui-ctl ui-ctl-textarea"
    :class="{
      'ui-ctl-no-resize': resize === 'no',
      'ui-ctl-resize-y': resize === 'y',
      'ui-ctl-resize-x': resize === 'x',
    }"
  >
    <textarea
      class="ui-ctl-element"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    resize: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-textarea',
};
</script>
