<template>
  <example-table name="bx-input-date" :code="markup">
    <bx-input-date
      :slotType="props.slotType"
      :type="props.type"
      :after="props.after"
      @click="onClick"
      @input="onInput"
      @change="onChange"
    >
      <template v-if="props.slotType === 'select'">
        <option value="01.01.2021">01.01.2021</option>
        <option value="02.02.2022">02.02.2022</option>
        <option value="03.03.2023">03.03.2023</option>
      </template>
      <template v-else>{{ slots.default }}</template>
    </bx-input-date>
    <template #params>
      <label>
        slots.default
        <input type="text" v-model="slots.default">
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
        '<option value="01.01.2021">01.01.2021</option>',
        '<option value="02.02.2022">02.02.2022</option>',
        '<option value="03.03.2023">03.03.2023</option>',
        '',
      ].join('\n');

      return `
<bx-input-date
  slotType="${this.props.slotType}"
  type="${this.props.type}"
  after="${this.props.after}"
  @click="onClick"
  @input="onInput(value)"
  @change="onChange(value)"
>${this.props.slotType === 'select' ? options : this.slots.default}</bx-input-date>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: '01.01.2021',
      },
      props: {
        slotType: 'default',
        type: 'text',
        after: 'after',
      },
      settings: {
        slotTypes: ['default', 'select', 'input'],
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
