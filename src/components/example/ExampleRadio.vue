<template>
  <example-table name="bx-radio" :code="markup">
    <bx-radio
      value="One"
      v-model="props.value"
    >example</bx-radio>
    <bx-radio
      value="Two"
      v-model="props.value"
      :width="props.width"
      :disabled="props.disabled"
      @change="onChange"
    >{{ slots.default }}</bx-radio>
    <template #params>
      <label>
        slots.default
        <input type="text" v-model="slots.default">
      </label>
      <label>
        props.value
        <select v-model="props.value">
          <option
            v-for="item in settings.values"
            :value="item"
          >{{ item }}</option>
        </select>
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

<script>
import ExampleTable from './Table.vue';
import BxRadio from '../BxRadio.vue';

export default {
  methods: {
    onChange(value) {
      console.log('change', value);
    },
  },
  computed: {
    markup() {
      return `
<bx-radio
  value="One"
  v-model="${this.props.value}"
>example</bx-radio>
<bx-radio
  value="Two"
  v-model="${this.props.value}"
  width="${this.props.width}"
  :disabled="${this.props.disabled}"
  @change="onChange(value)"
>${this.slots.default}</bx-radio>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: '',
      },
      props: {
        value: 'One',
        width: '320px',
        disabled: false,
      },
      settings: {
        values: ['', 'One', 'Two'],
      },
    };
  },
  components: {
    ExampleTable,
    BxRadio,
  },
  name: 'example-radio',
};
</script>
