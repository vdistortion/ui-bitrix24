<template>
  <div class="drag-n-drop">
    <label
      v-if="type === 'button'"
      class="ui-ctl ui-ctl-file-btn"
      :class="{ 'bx-input-file-disabled': disabled }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text">
        {{ placeholder || defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="type === 'link'"
      class="ui-ctl ui-ctl-file-link"
      :class="{ 'bx-input-file-disabled': disabled }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text">
        {{ placeholder || defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="type === 'drop'"
      class="ui-ctl ui-ctl-file-drop"
      :class="{ 'bx-input-file-disabled': disabled }"
      :title="title"
    >
      <div class="ui-ctl-label-text">
        <span>{{ placeholder || defaultPlaceholder }}</span>
        <small>Перетащить с помощью drag'n'drop</small>
      </div>
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      />
    </label>
    <ul v-if="files.length" class="drag-n-drop__list">
      <li v-for="(file, key) in files" :key="key" class="drag-n-drop__file">
        <span class="drag-n-drop__name">{{ getName(file) }}</span>
        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { formatSizeUnits } from '../utils/formatSizeUnits';
import injectStyles from '../mixins/injectStyles';

export type PropTypes = 'drop' | 'button' | 'link';

export type TypesProps = {
  types: PropTypes[];
};

export const props: TypesProps = {
  types: ['drop', 'button', 'link'],
};

export default defineComponent({
  methods: {
    getName(file: File) {
      return `${file.name} (${formatSizeUnits(file.size)})`;
    },

    onChange(event: Event) {
      const input = event.target as HTMLInputElement;
      const files: FileList = input.files!;
      this.files.push(...files);
      this.$emit('change', [...this.files]);
    },

    onDelete(index: number) {
      const [file] = this.files.splice(index, 1);
      this.$emit('delete', [...this.files], file);
    },
  },
  computed: {
    title() {
      if (this.disabled) return '';
      if (this.files.length) return this.files.map((file: File) => file.name).join('\n');
      if (this.multiple) return 'Файлы не выбраны.';
      return 'Файл не выбран.';
    },
  },
  data() {
    return {
      files: [] as File[],
      defaultPlaceholder: 'Загрузить файл или картинку',
    };
  },
  mixins: [injectStyles],
  emits: ['change', 'delete'],
  props: {
    placeholder: {
      type: String,
      default: '',
      validator(value) {
        return typeof value === 'string';
      },
    },
    type: {
      type: String as PropType<PropTypes>,
      default: 'drop',
      validator(value: PropTypes) {
        return props.types.includes(value);
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-input-file',
});
</script>

<style>
.ui-ctl.bx-input-file-disabled.ui-ctl-file-drop,
.ui-ctl.bx-input-file-disabled.ui-ctl-file-link .ui-ctl-label-text,
.ui-ctl.bx-input-file-disabled.ui-ctl-file-btn .ui-ctl-label-text {
  cursor: not-allowed;
}
.drag-n-drop .ui-ctl-file-drop .ui-ctl-element,
.drag-n-drop .ui-ctl-file-link .ui-ctl-element,
.drag-n-drop .ui-ctl-file-btn .ui-ctl-element {
  display: block;
  position: absolute;
  top: -100%;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
.drag-n-drop {
  width: 100%;
  overflow: hidden;
}
.drag-n-drop__list {
  list-style-type: none;
  padding: 0;
  margin: 5px 0 0;
}
.drag-n-drop__file {
  display: flex;
  align-items: center;
}
.drag-n-drop__name {
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2067b0;
  font-size: 13px;
  line-height: 1.8;
}
.drag-n-drop__delete {
  background-image: url('../assets/wduf-sprite.png');
  background-repeat: no-repeat;
  background-position: center -44px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
