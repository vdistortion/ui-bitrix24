<template>
  <div :class="$style['drag-n-drop']">
    <label
      v-if="props.type === 'button'"
      class="ui-ctl ui-ctl-file-btn"
      :class="{
        [$style['drag-n-drop--disabled']]: props.disabled,
        [$style['drag-n-drop--btn']]: true,
      }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="props.multiple"
        :disabled="props.disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text" :class="$style['drag-n-drop__text']">
        {{ props.placeholder || data.defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="props.type === 'link'"
      class="ui-ctl ui-ctl-file-link"
      :class="{
        [$style['drag-n-drop--disabled']]: props.disabled,
        [$style['drag-n-drop--link']]: true,
      }"
      :title="title"
    >
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="props.multiple"
        :disabled="props.disabled"
        @change="onChange"
      />
      <div class="ui-ctl-label-text" :class="$style['drag-n-drop__text']">
        {{ props.placeholder || data.defaultPlaceholder }}
      </div>
    </label>
    <label
      v-else-if="props.type === 'drop'"
      class="ui-ctl ui-ctl-file-drop"
      :class="{
        [$style['drag-n-drop--disabled']]: props.disabled,
        [$style['drag-n-drop--drop']]: true,
      }"
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
    <ul v-if="data.files.length" :class="$style['drag-n-drop__list']">
      <li v-for="(file, key) in data.files" :key="key" :class="$style['drag-n-drop__file']">
        <span :class="$style['drag-n-drop__name']">{{ getName(file) }}</span>
        <span :class="$style['drag-n-drop__delete']" @click="onDelete(key)"></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, type PropType } from 'vue';
import { defaultProps, propsValues, type PropType as PropTypeInputFile } from './BxInputFile.props';
import { formatSizeUnits } from '@/utils/formatSizeUnits';
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

<style module>
.drag-n-drop .drag-n-drop--disabled.drag-n-drop--drop,
.drag-n-drop .drag-n-drop--disabled.drag-n-drop--link .drag-n-drop__text,
.drag-n-drop .drag-n-drop--disabled.drag-n-drop--btn .drag-n-drop__text {
  cursor: not-allowed;
}

.drag-n-drop .drag-n-drop--drop .drag-n-drop__input,
.drag-n-drop .drag-n-drop--link .drag-n-drop__input,
.drag-n-drop .drag-n-drop--btn .drag-n-drop__input {
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
