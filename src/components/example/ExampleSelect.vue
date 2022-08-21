<template>
  <example-table name="bx-select" :code="markup">
    <bx-select
      v-model="props.value"
      :type="props.type"
      @click="onClick"
    >
      <template v-if="props.type === 'select'">
        <option value="value">value</option>
        <option value="value2">value2</option>
        <option value="value3">value3</option>
      </template>
    </bx-select>
    <template #params>
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
>${this.props.type === 'select' ? options : ''}</bx-select>
      `;
    },
  },
  data() {
    return {
      props: {
        type: 'select',
        value: 'value',
      },
      settings: {
        types: ['select', 'search'],
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
