<template>
  <example-table name="bx-checkbox" :code="markup">
    <bx-checkbox
      value="One"
      v-model="props.value"
    >example</bx-checkbox>
    <bx-checkbox
      value="Two"
      v-model="props.value"
      :width="props.width"
      :disabled="props.disabled"
      :old="props.old"
      @change="onChange"
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
      <label>
        <input type="checkbox" v-model="props.old">
        props.old
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxCheckbox from '../BxCheckbox.vue';

export default {
  methods: {
    onChange(value) {
      console.log('change', value);
    },
  },
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
  :old="${this.props.old}"
  @change="onChange(value)"
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
        old: false,
      },
    };
  },
  components: {
    ExampleTable,
    BxCheckbox,
  },
  name: 'example-checkbox',
};
</script>
