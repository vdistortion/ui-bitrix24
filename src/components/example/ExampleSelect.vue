<template>
  <example-table
    name="bx-select"
    :code="markup"
    :based="['https://vue-select.org', 'vue-select']"
  >
    <bx-select
      v-model="props.value"
      :placeholder="props.placeholder"
      :options="props.options"
      :multiple="props.multiple"
      :label="props.label"
    ></bx-select>
    <template #params>
      <label v-if="props.value">
        props.value
        <pre class="example-table__code">{{ props.value }}</pre>
      </label>
      <label>
        props.placeholder
        <input v-model="props.placeholder">
      </label>
      <label>
        <input type="checkbox" v-model="props.multiple">
        props.multiple
      </label>
      <label>
        props.label
        <select v-model="props.label">
          <option
            v-for="item in settings.labels"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxSelect from '../BxSelect.vue';
import countries from '../../utils/countries';

export default {
  computed: {
    markup() {
      return `
<bx-select
  v-model="value"
  :placeholder="${this.props.placeholder}"
  :options="[]"
  :multiple="${this.props.multiple}"
  :label="${this.props.label}"
></bx-select>
      `;
    },
  },
  data() {
    return {
      props: {
        value: '',
        placeholder: 'Countries',
        options: countries,
        multiple: false,
        label: 'name',
      },
      settings: {
        labels: ['name', 'code'],
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
