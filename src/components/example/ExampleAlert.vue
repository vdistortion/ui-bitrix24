<template>
  <example-table name="bx-alert" :code="markup">
    <bx-alert
      :title="props.title"
      :size="props.size"
      :color="props.color"
      :icon="props.icon"
      :center="props.center"
      :inline="props.inline"
      @close="onClose"
    >{{ slots.default }}</bx-alert>
    <template #params>
      <label>
        slots.default
        <input type="text" v-model="slots.default">
      </label>
      <label>
        props.title
        <input type="text" v-model="props.title">
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
        props.icon
        <select v-model="props.icon">
          <option
            v-for="item in settings.icons"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="props.center">
        props.center
      </label>
      <label>
        <input type="checkbox" v-model="props.inline">
        props.inline
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxAlert from '../BxAlert.vue';

export default defineComponent({
  methods: {
    onClose() {
      console.log('close');
    },
  },
  computed: {
    markup() {
      return `
<bx-alert
  title="${this.props.title}"
  size="${this.props.size}"
  color="${this.props.color}"
  icon="${this.props.icon}"
  :center="${this.props.center}"
  :inline="${this.props.inline}"
  @close="onClose"
>${this.slots.default}</bx-alert>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: '',
      },
      props: {
        title: 'Внимание!',
        size: 'md',
        color: 'default',
        icon: '',
        center: false,
        inline: false,
      },
      settings: {
        size: ['md', 'xs'],
        colors: ['default', 'primary', 'success', 'warning', 'danger'],
        icons: ['', 'warning', 'danger', 'info'],
      },
    };
  },
  components: {
    ExampleTable,
    BxAlert,
  },
  name: 'example-alert',
});
</script>
