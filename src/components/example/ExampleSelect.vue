<template>
  <example-table name="bx-select" :code="markup">
    <bx-select
      v-model="props.value"
      :type="props.type"
      @click="onClick"
      @input="onInput"
      @change="onChange"
    >
      <template v-if="props.type === 'select'">
        <option value="value">value</option>
        <option value="value2">value2</option>
        <option value="value3">value3</option>
      </template>
      <template v-else>{{ slots.default }}</template>
    </bx-select>
    <template #params>
      <label>
        slots.default
        <input type="text" v-model="slots.default">
      </label>
      <label>
        props.type
        <select v-model="props.type">
          <option
            v-for="item in settings.types"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.value
        <input type="text" v-model="props.value">
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxSelect from '../BxSelect.vue';

export default {
  methods: {
    onClick() {
      console.log('click');
    },
    onInput(value) {
      console.log('input', value);
    },
    onChange(value) {
      console.log('change', value);
    },
  },
  computed: {
    markup() {
      const options = [
        '',
        '<option value="value">value</option>',
        '<option value="value2">value2</option>',
        '<option value="value3">value3</option>',
        '',
      ].join('\n');

      return `
<bx-select
  type="${this.props.type}"
  value="${this.props.value}"
  @click="onClick"
  @input="onInput(value)"
  @change="onChange(value)"
>${this.props.type === 'select' ? options : this.slots.default}</bx-select>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: '',
      },
      props: {
        type: 'default',
        value: 'value',
      },
      settings: {
        types: ['default', 'select', 'search'],
      },
    };
  },
  components: {
    ExampleTable,
    BxSelect,
  },
  name: 'example-select',
};
</script>
