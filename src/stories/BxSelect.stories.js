import { action } from '@storybook/addon-actions';
import BxSelect from '../components/BxSelect.vue';
import countries from '../utils/countries';

const defaultProps = {
  appendToBody: false,
  autocomplete: 'off',
  autoscroll: true,
  calculatePosition(dropdownList, component, { width, top, left }) {
    dropdownList.style.top = top; // eslint-disable-line no-param-reassign
    dropdownList.style.left = left; // eslint-disable-line no-param-reassign
    dropdownList.style.width = width; // eslint-disable-line no-param-reassign
  },
  clearable: false,
  clearSearchOnBlur: ({ clearSearchOnSelect, multiple }) => clearSearchOnSelect && !multiple,
  clearSearchOnSelect: true,
  closeOnSelect: true,
  components: () => ({}),
  deselectFromDropdown: false,
  dir: 'auto',
  disabled: false,
  dropdownShouldOpen({ noDrop, open, mutableLoading }) {
    return noDrop ? false : open && !mutableLoading;
  },
  filter(options, search) {
    return options.filter((option) => {
      let label = this.getOptionLabel(option);
      if (typeof label === 'number') {
        label = label.toString();
      }
      return this.filterBy(option, label, search);
    });
  },
  filterable: true,
  filterBy(option, label, search) {
    return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
  },
  label: 'label',
  loading: false,
  multiple: false,
  noDrop: false,
  onTab() {
    if (this.selectOnTab && !this.isComposing) {
      this.typeAheadSelect();
    }
  },
  options: () => [],
  placeholder: '',
  pushTags: false,
  reduce: (option) => option,
  resetOnOptionsChange: false,
  searchable: true,
  selectable: () => true,
  selectOnTab: false,
  tabindex: null,
  taggable: false,
  transition: 'vs__fade',
  modelValue: null,
};

export default {
  title: 'forms/bx-select',
  component: BxSelect,
  parameters: {
    docs: {
      description: {
        component: `
          Component based on <a href="https://vue-select.org" target="_blank">vue-select 1</a>
        `.trim(),
      },
    },
  },
  args: {
    'update:modelValue': action('update:modelValue'),
    open: action('open'),
    close: action('close'),
    'option:selecting': action('option:selecting'),
    'option:selected': action('option:selected'),
    'option:deselecting': action('option:deselecting'),
    'option:deselected': action('option:deselected'),
    'option:created': action('option:created'),
    search: action('search'),
    'search:blur': action('search:blur'),
    'search:focus': action('search:focus'),
    appendToBody: defaultProps.appendToBody,
    autocomplete: defaultProps.autocomplete,
    autoscroll: defaultProps.autoscroll,
    calculatePosition: defaultProps.calculatePosition,
    clearable: defaultProps.clearable,
    clearSearchOnBlur: defaultProps.clearSearchOnBlur,
    clearSearchOnSelect: defaultProps.clearSearchOnSelect,
    closeOnSelect: defaultProps.closeOnSelect,
    components: defaultProps.components(),
    deselectFromDropdown: defaultProps.deselectFromDropdown,
    dir: defaultProps.dir,
    disabled: defaultProps.disabled,
    dropdownShouldOpen: defaultProps.dropdownShouldOpen,
    filter: defaultProps.filter,
    filterable: defaultProps.filterable,
    filterBy: defaultProps.filterBy,
    inputId: '',
    label: 'name',
    loading: defaultProps.loading,
    multiple: defaultProps.multiple,
    noDrop: defaultProps.noDrop,
    onTab: defaultProps.onTab,
    options: defaultProps.options(),
    placeholder: defaultProps.placeholder,
    pushTags: defaultProps.pushTags,
    reduce: defaultProps.reduce,
    resetOnOptionsChange: defaultProps.resetOnOptionsChange,
    searchable: defaultProps.searchable,
    selectable: defaultProps.selectable,
    selectOnTab: defaultProps.selectOnTab,
    tabindex: defaultProps.tabindex,
    taggable: defaultProps.taggable,
    transition: defaultProps.transition,
    uid: '',
    modelValue: defaultProps.modelValue,
  },
  argTypes: {
    options: {
      mapping: countries,
      options: countries.map((c, index) => index),
      control: {
        type: 'multi-select',
        labels: countries.map((country) => `{ code: ${country.code}, name: ${country.name} }`),
      },
    },
    uid: {
      defaultValue: defaultProps.uid,
      control: { type: 'text' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-select v-bind="args" v-on="args" v-model="args.modelValue"></bx-select>',
    data: () => ({ args }),
    components: { BxSelect },
  }),
};
