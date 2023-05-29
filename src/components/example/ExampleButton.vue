<template>
  <example-table name="bx-button" :code="markup">
    <bx-button>bx-button</bx-button>
    <bx-button
      :color="props.color"
      :size="props.size"
      :icon="props.icon"
      :type="props.type"
      :loader="props.loader"
      :count="props.count"
      :counter="props.counter"
      :disabled="props.disabled"
      :dropdown="props.dropdown"
      :round="props.round"
      :noCaps="props.noCaps"
      :menu="props.menu"
      @click="onClick"
      @toggle-menu="onToggleMenu"
    >{{ slot.default }}</bx-button>
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
        props.loader
        <select v-model="props.loader">
          <option
            v-for="item in settings.loaders"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.size
        <select v-model="props.size">
          <option
            v-for="item in settings.sizes"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.count
        <input type="number" v-model.number="props.count">
      </label>
      <label>
        <input type="checkbox" v-model="props.counter">
        props.counter
      </label>
      <label>
        <input type="checkbox" v-model="props.disabled">
        props.disabled
      </label>
      <label>
        <input type="checkbox" v-model="props.dropdown">
        props.dropdown
      </label>
      <label>
        <input type="checkbox" v-model="props.round">
        props.round
      </label>
      <label>
        <input type="checkbox" v-model="props.noCaps">
        props.noCaps
      </label>
      <label>
        <input type="checkbox" v-model="props.menu">
        props.menu
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxButton from '../BxButton.vue';

export default defineComponent({
  methods: {
    onClick() {
      console.log('click');
    },
    onToggleMenu() {
      console.log('toggle-menu');
    },
  },
  computed: {
    markup() {
      return `
<bx-button>bx-button</bx-button>
<bx-button
  type="${this.props.type}"
  color="${this.props.color}"
  size="${this.props.size}"
  icon="${this.props.icon}"
  loader="${this.props.loader}"
  :count="${this.props.count}"
  :counter="${this.props.counter}"
  :disabled="${this.props.disabled}"
  :dropdown="${this.props.dropdown}"
  :round="${this.props.round}"
  :noCaps="${this.props.noCaps}"
  :menu="${this.props.menu}"
  @click="onClick"
  @toggle-menu="onToggleMenu"
>${this.slot.default}</bx-button>
      `;
    },
  },
  data() {
    return {
      slot: {
        default: 'Кнопка',
      },
      props: {
        color: 'default',
        size: 'md',
        icon: '',
        type: 'button',
        loader: '',
        count: 0,
        counter: false,
        disabled: false,
        dropdown: false,
        round: false,
        noCaps: false,
        menu: false,
      },
      settings: {
        types: ['button', 'submit', 'reset'],
        colors: [
          'default', 'success', 'success-light', 'danger', 'danger-dark', 'danger-light',
          'primary', 'primary-dark', 'secondary', 'link', 'light', 'light-border',
        ],
        icons: [
          '', 'add', 'stop', 'start', 'pause', 'setting', 'task', 'info', 'search', 'follow', 'unfollow',
          'print', 'add-folder', 'list', 'business', 'business-confirm', 'business-warning', 'camera',
          'phone-up', 'phone-down', 'back', 'edit', 'share', 'remove', 'download', 'cloud', 'page',
          'chat', 'phone-call', 'lock', 'done', 'disk', 'mail', 'alert', 'angle-up', 'angle-down',
          'dots', 'forward', 'fail', 'success', 'plan', 'eye-opened', 'eye-closed', 'tariff',
          'battery', 'no-battery', 'half-battery', 'low-battery', 'crit-battery', 'demo',
        ],
        loaders: ['', 'clock', 'wait'],
        sizes: ['xs', 'sm', 'md', 'lg'],
      },
    };
  },
  components: {
    ExampleTable,
    BxButton,
  },
  name: 'example-button',
});
</script>
