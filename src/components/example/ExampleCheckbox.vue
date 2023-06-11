<template>
  <example-table name="bx-checkbox" :code="markup">
    <bx-checkbox
      value="One"
      title="value=One"
      v-model="props.value"
    >example</bx-checkbox>
    <bx-checkbox
      value="Two"
      title="value=Two"
      v-model="props.value"
      :width="props.width"
      :disabled="props.disabled"
    >{{ slots.default }}</bx-checkbox>
    <template #params>
      <label>
        slots.default
        <input type="text" v-model="slots.default">
      </label>
      <label>
        props.value
        <input type="text" v-model="props.value" disabled>
      </label>
      <label>
        props.width
        <input type="text" v-model="props.width">
      </label>
      <label>
        <input type="checkbox" v-model="props.disabled">
        props.disabled
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxCheckbox from '../BxCheckbox.vue';

export default defineComponent({
  computed: {
    markup() {
      return `
<bx-checkbox
  value="One"
  v-model="${this.props.value}"
>example</bx-checkbox>
<bx-checkbox
  value="Two"
  v-model="${this.props.value}"
  width="${this.props.width}"
  :disabled="${this.props.disabled}"
>${this.slots.default}</bx-checkbox>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: '',
      },
      props: {
        value: [],
        width: '320px',
        disabled: false,
      },
    };
  },
  components: {
    ExampleTable,
    BxCheckbox,
  },
  name: 'example-checkbox',
});
</script>
