<template>
  <div
    class="ui-tag-selector-outer-container"
    :class="{
      [$style['inline']]: props.inline,
    }"
  >
    <div class="ui-tag-selector-container">
      <div class="ui-tag-selector-items">
        <div
          v-for="(item, key) in props.list"
          :key="key"
          class="ui-tag-selector-item ui-tag-selector-tag"
          :class="{
            'ui-tag-selector-tag--has-avatar': props.icon,
          }"
        >
          <component
            :is="props.clickable ? 'a' : 'div'"
            class="ui-tag-selector-tag-content"
            :href="
              props.clickable
                ? item[props.displayFieldLink]
                  ? item[props.displayFieldLink]
                  : '#'
                : null
            "
            :target="props.clickable ? '_blank' : null"
            @click="
              props.clickable && !item[props.displayFieldLink]
                ? onClick($event, 'click', key, item)
                : null
            "
            @auxclick="
              props.clickable && !item[props.displayFieldLink]
                ? onClick($event, 'auxclick', key, item)
                : null
            "
          >
            <div
              v-if="props.icon"
              class="ui-tag-selector-tag-avatar"
              :style="`background-image: url(${getImageUrl(item[props.displayFieldIcon])});`"
            ></div>
            <slot v-else></slot>
            <div class="ui-tag-selector-tag-title" :class="[$style['title']]">
              {{ item[props.displayFieldName] }}
            </div>
          </component>
          <div class="ui-tag-selector-tag-remove" @click="$emit('delete', key, item)"></div>
        </div>
        <input
          type="text"
          class="ui-tag-selector-item ui-tag-selector-text-box"
          :class="{
            'ui-tag-selector-item-hidden': !props.showInputText,
          }"
          autocomplete="off"
          :placeholder="props.placeholder"
          v-model="text"
          @input="$emit('input', text)"
          @keyup.enter="$emit('enter', text)"
        />
        <span
          v-if="props.showAddButton"
          class="ui-tag-selector-item ui-tag-selector-add-button"
          @click="$emit('add', text)"
        >
          <span class="ui-tag-selector-add-button-caption">
            {{
              !props.list.length
                ? props.textAddButton
                : props.multiple
                  ? props.textMoreButton
                  : props.textChangeButton
            }}
          </span>
        </span>
      </div>
      <div
        class="ui-tag-selector-create-button"
        :class="{
          'ui-tag-selector-item-hidden': !props.showCreateButton,
        }"
        @click="$emit('create')"
      >
        <span class="ui-tag-selector-create-button-caption">{{ props.textCreateButton }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import { loadStyles } from '@/utils/loadStyles';
import { defaultProps, type ItemType } from './BxTagSelector.props';

loadStyles();

const props = defineProps({
  list: {
    type: Array as PropType<ItemType[]>,
    default: () => defaultProps.list,
  },
  placeholder: {
    type: String as PropType<string>,
    default: defaultProps.placeholder,
  },
  displayFieldName: {
    type: String as PropType<string>,
    default: defaultProps.displayFieldName,
  },
  displayFieldLink: {
    type: String as PropType<string>,
    default: defaultProps.displayFieldLink,
  },
  displayFieldIcon: {
    type: String as PropType<string>,
    default: defaultProps.displayFieldIcon,
  },
  defaultIcon: {
    type: String as PropType<string>,
    default: defaultProps.defaultIcon,
  },
  textAddButton: {
    type: String as PropType<string>,
    default: defaultProps.textAddButton,
  },
  textCreateButton: {
    type: String as PropType<string>,
    default: defaultProps.textCreateButton,
  },
  textMoreButton: {
    type: String as PropType<string>,
    default: defaultProps.textMoreButton,
  },
  textChangeButton: {
    type: String as PropType<string>,
    default: defaultProps.textChangeButton,
  },
  showAddButton: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.showAddButton,
  },
  showCreateButton: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.showCreateButton,
  },
  showInputText: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.showInputText,
  },
  clickable: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.clickable,
  },
  multiple: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.multiple,
  },
  inline: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.inline,
  },
  icon: {
    type: Boolean as PropType<boolean>,
    default: defaultProps.icon,
  },
});

const emit = defineEmits(['add', 'auxclick', 'click', 'create', 'delete', 'enter', 'input']);

const text = ref('');

function getImageUrl(icon?: string) {
  return icon ?? new URL(`../assets/${props.defaultIcon}.svg`, import.meta.url).href;
}

function onClick(e: MouseEvent, eventName: 'click' | 'auxclick', key: number, item: any) {
  e.preventDefault();
  emit(eventName, key, item);
}
</script>

<style module>
.inline {
  display: inline-block;
}

.title {
  position: relative;
  top: 2px;
  color: rgb(16, 102, 187);
}
</style>
