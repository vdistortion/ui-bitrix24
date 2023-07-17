<template>
  <vue-select
    class="bx-select"
    :append-to-body="appendToBody"
    :autocomplete="autocomplete"
    :autoscroll="autoscroll"
    :calculate-position="calculatePosition"
    :clearable="clearable"
    :clear-search-on-blur="clearSearchOnBlur"
    :clear-search-on-select="clearSearchOnSelect"
    :close-on-select="closeOnSelect"
    :components="components"
    :create-option="createOption"
    :deselect-from-dropdown="deselectFromDropdown"
    :dir="dir"
    :disabled="disabled"
    :dropdown-should-open="dropdownShouldOpen"
    :filter="filter"
    :filterable="filterable"
    :filter-by="filterBy"
    :get-option-key="getOptionKey"
    :get-option-label="getOptionLabel"
    :input-id="inputId"
    :label="label"
    :loading="loading"
    :multiple="multiple"
    :no-drop="noDrop"
    :on-tab="onTab"
    :options="options"
    :placeholder="placeholder"
    :push-tags="pushTags"
    :reduce="reduce"
    :reset-on-options-change="resetOnOptionsChange"
    :searchable="searchable"
    :selectable="selectable"
    :select-on-tab="selectOnTab"
    :tabindex="tabindex"
    :taggable="taggable"
    :transition="transition"
    :uid="uid"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    @open="$emit('open')"
    @close="$emit('close')"
    @option:selecting="$emit('option:selecting', $event)"
    @option:selected="$emit('option:selected', $event)"
    @option:deselecting="$emit('option:deselecting', $event)"
    @option:deselected="$emit('option:deselected', $event)"
    @option:created="$emit('option:created', $event)"
    @search="(search, loading) => $emit('search', search, loading)"
    @search:blur="$emit('search:blur')"
    @search:focus="$emit('search:focus')"
  >
    <template v-if="$slots['footer']" #footer="slotScope">
      <slot name="footer" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['header']" #header="slotScope">
      <slot name="header" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['list-footer']" #list-footer="slotScope">
      <slot name="list-footer" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['list-header']" #list-header="slotScope">
      <slot name="list-header" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['no-options']" #no-options="slotScope">
      <slot name="no-options" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['open-indicator']" #open-indicator="slotScope">
      <slot name="open-indicator" v-bind="slotScope">
        <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="slotScope.attributes"></button>
      </slot>
    </template>
    <template v-if="$slots['option']" #option="slotScope">
      <slot name="option" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['search']" #search="slotScope">
      <slot name="search" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['selected-option']" #selected-option="slotScope">
      <slot name="selected-option" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['selected-option-container']" #selected-option-container="slotScope">
      <slot name="selected-option-container" v-bind="slotScope"></slot>
    </template>
    <template v-if="$slots['spinner']" #spinner="slotScope">
      <slot name="spinner" v-bind="slotScope"></slot>
    </template>
  </vue-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSelect from 'vue-select';
import { loadStyles } from '../utils/loadStyles';

export default defineComponent({
  created() {
    loadStyles();
  },
  model: {
    prop: 'model-value',
    event: 'update:model-value',
  },
  emits: [
    'update:modelValue',
    'open',
    'close',
    'option:selecting',
    'option:selected',
    'option:deselecting',
    'option:deselected',
    'option:created',
    'search',
    'search:blur',
    'search:focus',
  ],
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    autoscroll: {
      type: Boolean,
      default: true,
    },
    calculatePosition: {
      type: Function,
      default(dropdownList, component, { width, top, left }) {
        dropdownList.style.top = top; // eslint-disable-line no-param-reassign
        dropdownList.style.left = left; // eslint-disable-line no-param-reassign
        dropdownList.style.width = width; // eslint-disable-line no-param-reassign
      },
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    clearSearchOnBlur: {
      type: Function,
      default: ({ clearSearchOnSelect, multiple }) => clearSearchOnSelect && !multiple,
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: true,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    components: {
      type: Object,
      default: () => ({}),
    },
    createOption: {
      type: Function,
    },
    deselectFromDropdown: {
      type: Boolean,
      default: false,
    },
    dir: {
      type: String,
      default: 'auto',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownShouldOpen: {
      type: Function,
      default: ({ noDrop, open, mutableLoading }) => (noDrop ? false : open && !mutableLoading),
    },
    filter: {
      type: Function,
      default(options, search) {
        return options.filter((option) => {
          let label = this.getOptionLabel(option);
          if (typeof label === 'number') {
            label = label.toString();
          }
          return this.filterBy(option, label, search);
        });
      },
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    filterBy: {
      type: Function,
      default(option, label, search) {
        return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
      },
    },
    getOptionKey: {
      type: Function,
    },
    getOptionLabel: {
      type: Function,
    },
    inputId: {
      type: String,
    },
    label: {
      type: String,
      default: 'label',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    noDrop: {
      type: Boolean,
      default: false,
    },
    onTab: {
      type: Function,
      default() {
        if (this.selectOnTab && !this.isComposing) {
          this.typeAheadSelect();
        }
      },
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    pushTags: {
      type: Boolean,
      default: false,
    },
    reduce: {
      type: Function,
      default: (option) => option,
    },
    resetOnOptionsChange: {
      type: [Boolean, Function],
      default: false,
      validator: (value) => ['function', 'boolean'].includes(typeof value),
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    selectable: {
      type: Function,
      default: () => true,
    },
    selectOnTab: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      default: null,
    },
    taggable: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: 'vs__fade',
    },
    uid: {
      type: [String, Number],
    },
    modelValue: {
      required: true,
      default: null,
    },
  },
  components: {
    VueSelect,
  },
  name: 'bx-select',
});
</script>

<style>
@import 'vue-select/dist/vue-select.css';

.bx-select:hover .vs__dropdown-toggle,
.bx-select.vs--open .vs__dropdown-toggle {
  border-color: #66afe9;
}

.bx-select .vs__dropdown-toggle {
  transition: border-color 0.5s;
}

.bx-select .vs__dropdown-toggle,
.bx-select .vs__selected {
  border-radius: 2px;
}

.bx-select .vs__selected {
  background-color: #bcedfc;
}
</style>
