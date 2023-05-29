<template>
  <example-table name="bx-input" :code="markup">
    <bx-input
      v-model="props.value"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :size="props.size"
      :color="props.color"
      :width="props.width"
      :inline="props.inline"
      :noBorder="props.noBorder"
      :underline="props.underline"
      :noPadding="props.noPadding"
      :round="props.round"
      :tag="props.tag"
      :tagColor="props.tagColor"
      :beforeIcon="props.beforeIcon"
      :beforeExt="props.beforeExt"
      :beforeButton="props.beforeButton"
      :afterIcon="props.afterIcon"
      :afterExt="props.afterExt"
      :afterButton="props.afterButton"
      @change="onChange"
      @click-before="onClickBefore"
      @click-after="onClickAfter"
    ></bx-input>
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
        <input type="checkbox" v-model="props.disabled">
        props.disabled
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
        props.color
        <select v-model="props.color">
          <option
            v-for="item in settings.colors"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.width
        <input type="text" v-model="props.width">
      </label>
      <label>
        <input type="checkbox" v-model="props.inline">
        props.inline
      </label>
      <label>
        <input type="checkbox" v-model="props.noBorder">
        props.noBorder
      </label>
      <label>
        <input type="checkbox" v-model="props.underline">
        props.underline
      </label>
      <label>
        <input type="checkbox" v-model="props.noPadding">
        props.noPadding
      </label>
      <label>
        <input type="checkbox" v-model="props.round">
        props.round
      </label>
      <label>
        props.tag
        <input type="text" v-model="props.tag">
      </label>
      <label>
        props.tagColor
        <select v-model="props.tagColor">
          <option
            v-for="item in settings.tagColors"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.beforeIcon
        <select v-model="props.beforeIcon">
          <option
            v-for="item in settings.icons"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="props.beforeExt">
        props.beforeExt
      </label>
      <label>
        <input type="checkbox" v-model="props.beforeButton">
        props.beforeButton
      </label>
      <label>
        props.afterIcon
        <select v-model="props.afterIcon">
          <option
            v-for="item in settings.icons"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="props.afterExt">
        props.afterExt
      </label>
      <label>
        <input type="checkbox" v-model="props.afterButton">
        props.afterButton
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxInput from '../BxInput.vue';

export default defineComponent({
  methods: {
    onChange(value) {
      console.log('change', value);
    },
    onClickBefore() {
      console.log('click-before');
    },
    onClickAfter() {
      console.log('click-after');
    },
  },
  computed: {
    markup() {
      return `
<bx-input
  v-model="${this.props.value}"
  placeholder="${this.props.placeholder}"
  :disabled="${this.props.disabled}"
  size="${this.props.size}"
  color="${this.props.color}"
  width="${this.props.width}"
  :inline="${this.props.inline}"
  :noBorder="${this.props.noBorder}"
  :underline="${this.props.underline}"
  :noPadding="${this.props.noPadding}"
  :round="${this.props.round}"
  tag="${this.props.tag}"
  tagColor="${this.props.tagColor}"
  beforeIcon="${this.props.beforeIcon}"
  :beforeExt="${this.props.beforeExt}"
  :beforeButton="${this.props.beforeButton}"
  afterIcon="${this.props.afterIcon}"
  :afterExt="${this.props.afterExt}"
  :afterButton="${this.props.afterButton}"
  @change="onChange(value)"
  @click-before="onClickBefore"
  @click-after="onClickAfter"
></bx-input>
      `;
    },
  },
  data() {
    return {
      props: {
        value: '',
        placeholder: '',
        disabled: false,
        size: 'md',
        color: '',
        width: '',
        inline: false,
        noBorder: false,
        underline: false,
        noPadding: false,
        round: false,
        tag: '',
        tagColor: 'default',
        beforeIcon: '',
        beforeExt: false,
        beforeButton: false,
        afterIcon: '',
        afterExt: false,
        afterButton: false,
      },
      settings: {
        sizes: ['lg', 'md', 'sm', 'xs'],
        colors: ['', 'success', 'warning', 'danger'],
        tagColors: ['default', 'primary', 'success', 'warning', 'danger'],
        icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
      },
    };
  },
  components: {
    ExampleTable,
    BxInput,
  },
  name: 'example-input',
});
</script>
