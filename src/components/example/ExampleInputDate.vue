<template>
  <example-table name="bx-input-date" :code="markup">
    <bx-input-date
      v-model="props.value"
      :slotType="props.slotType"
      :type="props.type"
      :after="props.after"
      :width="props.width"
      @click="onClick"
    >
      <template v-if="props.slotType === 'select'">
        <option value="01.01.2021">01.01.2021</option>
        <option value="02.02.2022">02.02.2022</option>
        <option value="03.03.2023">03.03.2023</option>
      </template>
    </bx-input-date>
    <template #params>
      <label>
        props.value
        <input type="text" v-model="props.value">
      </label>
      <label>
        props.slotType
        <select v-model="props.slotType">
          <option
            v-for="item in settings.slotTypes"
            :value="item"
          >{{ item }}</option>
        </select>
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
  methods: {
    onClick() {
      console.log('click');
    },
  },
  computed: {
    markup() {
      const options = [
        '',
        '<option value="01.01.2021">01.01.2021</option>',
        '<option value="02.02.2022">02.02.2022</option>',
        '<option value="03.03.2023">03.03.2023</option>',
        '',
      ].join('\n');

      return `
<bx-input-date
  v-model="${this.props.value}"
  slotType="${this.props.slotType}"
  type="${this.props.type}"
  after="${this.props.after}"
  width="${this.props.width}"
  @click="onClick"
>${this.props.slotType === 'select' ? options : ''}</bx-input-date>
      `;
    },
  },
  data() {
    return {
      props: {
        value: '2001-01-01',
        slotType: 'input',
        type: 'date',
        after: 'after',
        width: 'inherit',
      },
      settings: {
        slotTypes: ['input', 'select'],
        types: ['date', 'time', 'datetime', 'text'],
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
