<template>
  <example-table
    name="bx-input-date"
    :code="markup"
    :based="['https://vue3datepicker.com', '@vuepic/vue-datepicker']"
  >
    <bx-input-date
      v-model="props.value"
      :after="props.after"
      :width="props.width"
    ></bx-input-date>
    <template #params>
      <label>
        props.value
        <input type="text" v-model="props.value">
      </label>
      <label>
        props.after
        <select v-model="props.after">
          <option
            v-for="item in settings.after"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.width
        <input type="text" v-model="props.width">
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxInputDate from '../BxInputDate.vue';

export default {
  computed: {
    markup() {
      return `
<bx-input-date
  v-model="${this.props.value}"
  after="${this.props.after}"
  width="${this.props.width}"
></bx-input-date>
      `;
    },
  },
  data() {
    return {
      props: {
        value: '01.01.2001',
        after: 'after',
        width: '100%',
      },
      settings: {
        after: ['after', 'ext-after'],
      },
    };
  },
  components: {
    ExampleTable,
    BxInputDate,
  },
  name: 'example-input-date',
};
</script>
