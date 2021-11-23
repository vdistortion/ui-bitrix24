<template>
  <example-table name="bx-textarea" :code="markup">
    <bx-textarea
      v-model="props.value"
      :placeholder="props.placeholder"
      :resize="props.resize"
      :disabled="props.disabled"
      @input="onInput"
      @change="onChange"
    ></bx-textarea>
    <template #params>
      <label>
        props.value
        <input type="text" v-model="props.value">
      </label>
      <label>
        props.placeholder
        <input type="text" v-model="props.placeholder">
      </label>
      <label>
        props.resize
        <select v-model="props.resize">
          <option
            v-for="item in settings.resize"
            :value="item"
          >{{ item }}</option>
        </select>
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
import BxTextarea from '../BxTextarea.vue';

export default {
  methods: {
    onInput(value) {
      console.log('input', value);
    },
    onChange(value) {
      console.log('change', value);
    },
  },
  computed: {
    markup() {
      return `
<bx-textarea
  value="${this.props.value}"
  placeholder="${this.props.placeholder}"
  resize="${this.props.resize}"
  :disabled="${this.props.disabled}"
  @input="onInput(value)"
  @change="onChange(value)"
></bx-textarea>
      `;
    },
  },
  data() {
    return {
      props: {
        value: '',
        placeholder: '',
        resize: '',
        disabled: false,
      },
      settings: {
        resize: ['', 'no', 'y', 'x'],
      },
    };
  },
  components: {
    ExampleTable,
    BxTextarea,
  },
  name: 'example-textarea',
};
</script>
