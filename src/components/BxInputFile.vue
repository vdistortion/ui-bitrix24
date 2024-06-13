<template>
  <div class="drag-n-drop">
    <label
      v-if="props.type === 'button'"
      class="ui-ctl ui-ctl-file-btn"
      :class="{ 'bx-input-file-disabled': props.disabled }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="props.multiple"
        :disabled="props.disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text">
        {{ props.placeholder || data.defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="props.type === 'link'"
      class="ui-ctl ui-ctl-file-link"
      :class="{ 'bx-input-file-disabled': props.disabled }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="props.multiple"
        :disabled="props.disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text">
        {{ props.placeholder || data.defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="props.type === 'drop'"
      class="ui-ctl ui-ctl-file-drop"
      :class="{ 'bx-input-file-disabled': props.disabled }"
      :title="title"
    >
      <div class="ui-ctl-label-text">
        <span>{{ props.placeholder || data.defaultPlaceholder }}</span>
        <small>Перетащить с помощью drag'n'drop</small>
      </div>
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="props.multiple"
        :disabled="props.disabled"
        @change="onChange"
      />
    </label>
    <ul v-if="data.files.length" class="drag-n-drop__list">
      <li v-for="(file, key) in data.files" :key="key" class="drag-n-drop__file">
        <span class="drag-n-drop__name">{{ getName(file) }}</span>
        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, type PropType } from 'vue';
import { defaultProps, propsValues, type PropType as PropTypeInputFile } from './BxInputFile.props';
import { formatSizeUnits } from '../utils/formatSizeUnits';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  placeholder: {
    type: String,
    default: defaultProps.placeholder,
    validator(value) {
      return typeof value === 'string';
    },
  },
  type: {
    type: String as PropType<PropTypeInputFile>,
    default: defaultProps.type,
    validator(value: PropTypeInputFile) {
      return propsValues.types.includes(value);
    },
  },
  multiple: {
    type: Boolean,
    default: defaultProps.multiple,
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
  },
});

const emit = defineEmits(['change', 'delete']);

const data = reactive({
  files: [] as File[],
  defaultPlaceholder: 'Загрузить файл или картинку',
});

const title = computed(() => {
  if (props.disabled) return '';
  if (data.files.length) return data.files.map((file: File) => file.name).join('\n');
  if (props.multiple) return 'Файлы не выбраны.';
  return 'Файл не выбран.';
});

function getName(file: File) {
  return `${file.name} (${formatSizeUnits(file.size)})`;
}

function onChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const files: FileList = input.files!;
  data.files.push(...files);
  emit('change', [...data.files]);
}

function onDelete(index: number) {
  const [file] = data.files.splice(index, 1);
  emit('delete', [...data.files], file);
}
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
