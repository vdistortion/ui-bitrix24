<template>
  <example-table name="bx-input-file" :code="markup">
    <bx-input-file
      :type="props.type"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @change="onChange"
    >{{ slot.default }}</bx-input-file>
    <template #params>
      <label>
        slot.default
        <input type="text" v-model="slot.default">
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
        <input type="checkbox" v-model="props.multiple">
        props.multiple
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
import BxInputFile from '../BxInputFile.vue';

export default {
  methods: {
    onChange(files) {
      console.log('change', files);
    },
  },
  computed: {
    markup() {
      return `
<bx-input-file
  type="${this.props.type}"
  :multiple="${this.props.multiple}"
  :disabled="${this.props.disabled}"
  @change="onChange(files)"
>${this.slot.default}</bx-input-file>
      `;
    },
  },
  data() {
    return {
      slot: {
        default: '',
      },
      props: {
        type: 'drop',
        multiple: false,
        disabled: false,
      },
      settings: {
        types: ['drop', 'button', 'link', 'old'],
      },
    };
  },
  components: {
    ExampleTable,
    BxInputFile,
  },
  name: 'example-input-file',
};
</script>
