<template>
  <example-table name="bx-progressbar" :code="markup">
    <bx-progressbar
      :progress="props.progress"
      :size="props.size"
      :color="props.color"
      :textBefore="props.textBefore"
      :textAfter="props.textAfter"
      :bg="props.bg"
      :column="props.column"
    ></bx-progressbar>
    <template #params>
      <label>
        props.progress
        <input type="range" v-model.number="props.progress" min="0" max="100">
      </label>
      <label>
        props.size
        <select v-model="props.size">
          <option
            v-for="item in settings.size"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.color
        <select v-model="props.color">
          <option
            v-for="item in settings.colors"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.textBefore
        <input type="text" v-model="props.textBefore">
      </label>
      <label>
        props.textAfter
        <input type="text" v-model="props.textAfter">
      </label>
      <label>
        <input type="checkbox" v-model="props.bg">
        props.bg
      </label>
      <label>
        <input type="checkbox" v-model="props.column">
        props.column
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxProgressbar from '../BxProgressbar.vue';

export default defineComponent({
  computed: {
    markup() {
      return `
<bx-progressbar
  :progress="${this.props.progress}"
  size="${this.props.size}"
  color="${this.props.color}"
  textBefore="${this.props.textBefore}"
  textAfter="${this.props.textAfter}"
  :bg="${this.props.bg}"
  :column="${this.props.column}"
></bx-progressbar>
      `;
    },
  },
  data() {
    return {
      props: {
        progress: 0,
        size: 'md',
        color: 'primary',
        textBefore: '',
        textAfter: '',
        bg: false,
        column: false,
      },
      settings: {
        size: ['md', 'lg'],
        colors: ['primary', 'success', 'warning', 'danger'],
      },
    };
  },
  components: {
    ExampleTable,
    BxProgressbar,
  },
  name: 'example-progressbar',
});
</script>
