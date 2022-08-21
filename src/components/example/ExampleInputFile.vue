<template>
  <example-table name="bx-input-file" :code="markup">
    <bx-input-file
      v-if="slot.default"
      :value="props.files"
      :type="props.type"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @input="onInput"
      @change="onChange"
      @delete="onDelete"
    >{{ slot.default }}</bx-input-file>
    <bx-input-file
      v-else
      :value="props.files"
      :type="props.type"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @input="onInput"
      @change="onChange"
      @delete="onDelete"
    ></bx-input-file>
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
    onInput(files) {
      console.log('input', files);
    },
    onChange(files) {
      console.log('change', files);

      files.forEach((file) => {
        this.props.files.push(file);
      });
    },
    onDelete(index) {
      console.log('delete', index);
      this.props.files.splice(index, 1);
    },
  },
  computed: {
    markup() {
      return `
<bx-input-file
  :value="[]"
  type="${this.props.type}"
  :multiple="${this.props.multiple}"
  :disabled="${this.props.disabled}"
  @input="onInput(files)"
  @change="onChange(files)"
  @delete="onDelete(index)"
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
        files: [],
        type: 'drop',
        multiple: false,
        disabled: false,
      },
      settings: {
        types: ['drop', 'button', 'link'],
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
