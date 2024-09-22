<template>
  <div class="ui-tag-selector-outer-container">
    <div class="ui-tag-selector-container">
      <div class="ui-tag-selector-items">
        <div
          v-for="tag in props.tags"
          class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar"
        >
          <a class="ui-tag-selector-tag-content" :href="tag.link" target="_blank">
            <div
              class="ui-tag-selector-tag-avatar"
              :style="`background-image: url(${getImageUrl('default-tag-user')});`"
            ></div>
            <div class="ui-tag-selector-tag-title" style="color: rgb(16, 102, 187)">
              {{ tag.name }}
            </div>
          </a>
          <div class="ui-tag-selector-tag-remove"></div>
        </div>
        <input
          type="text"
          class="ui-tag-selector-item ui-tag-selector-text-box"
          :class="{
            'ui-tag-selector-item-hidden': props.hiddenTextBox,
          }"
          autocomplete="off"
          :placeholder="props.placeholder"
          value=""
        />
        <span class="ui-tag-selector-item ui-tag-selector-add-button">
          <span class="ui-tag-selector-add-button-caption">{{ props.textAddButton }}</span>
        </span>
      </div>
      <div
        class="ui-tag-selector-create-button"
        :class="{
          'ui-tag-selector-item-hidden': props.hiddenCreateButton,
        }"
      >
        <span class="ui-tag-selector-create-button-caption">{{ props.textCreateButton }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadStyles } from '../utils/loadStyles';

loadStyles();

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  },
  textAddButton: {
    type: String,
    default: 'Добавить',
  },
  textCreateButton: {
    type: String,
    default: 'Создать',
  },
  hiddenCreateButton: {
    type: Boolean,
    default: false,
  },
  hiddenTextBox: {
    type: Boolean,
    default: false,
  },
});

function getImageUrl(name: string) {
  return new URL(`../assets/${name}.svg`, import.meta.url).href;
}
</script>
