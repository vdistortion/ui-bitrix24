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
        @input="onInput"
        @change="onChange"
      >
      <div class="ui-ctl-label-text">
        <slot>{{ placeholder }}</slot>
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
        @input="onInput"
        @change="onChange"
      >
      <div class="ui-ctl-label-text">
        <slot>{{ placeholder }}</slot>
      </div>
    </label>
    <label
      v-else-if="type === 'drop'"
      class="ui-ctl ui-ctl-file-drop"
      :class="{ 'bx-input-file-disabled': disabled }"
      :title="title"
    >
      <div class="ui-ctl-label-text">
        <slot>
          <span>{{ placeholder }}</span>
          <small>Перетащить с помощью drag'n'drop</small>
        </slot>
      </div>
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="multiple"
        :disabled="disabled"
        @input="onInput"
        @change="onChange"
      >
    </label>
    <label
      v-else-if="type === 'old'"
      class="drag-n-drop__label"
      :class="{ 'bx-input-file-disabled': disabled }"
    >
      <div class="drag-n-drop__area">
        <div class="drag-n-drop__title">
          <slot>{{ placeholder }}</slot>
        </div>
        <div v-if="!$slots.default" class="drag-n-drop__description">
          Перетащить с помощью Drag'n'drop
        </div>
      </div>
      <input
        type="file"
        :title="title"
        :multiple="multiple"
        :disabled="disabled"
        @input="onInput"
        @change="onChange"
      >
    </label>
    <ul v-if="value.length" class="drag-n-drop__list">
      <li v-for="(file, key) in value" :key="key" class="drag-n-drop__file">
        <span class="drag-n-drop__name">{{ getName(file) }}</span>
        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import formatSizeUnits from '../utils/formatSizeUnits';
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  methods: {
    getName(file) {
      return `${file.name} (${formatSizeUnits(file.size)})`;
    },

    onInput(e) {
      this.$emit('input', [...e.target.files]);
    },

    onChange(e) {
      this.$emit('change', [...e.target.files]);
    },

    onDelete(index) {
      this.$emit('delete', index);
    },
  },
  computed: {
    title() {
      if (this.disabled) return '';
      if (this.value.length) return this.value.map((file) => file.name).join('\n');
      if (this.multiple) return 'Файлы не выбраны.';
      return 'Файл не выбран.';
    },
  },
  data() {
    return {
      placeholder: 'Загрузить файл или картинку',
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'drop',
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
};
</script>

<style lang="stylus">
.ui-ctl.bx-input-file-disabled.ui-ctl-file-drop
.ui-ctl.bx-input-file-disabled.ui-ctl-file-link .ui-ctl-label-text
.ui-ctl.bx-input-file-disabled.ui-ctl-file-btn .ui-ctl-label-text
.drag-n-drop .drag-n-drop__label.bx-input-file-disabled input[disabled]
  cursor not-allowed

.drag-n-drop .ui-ctl-file-drop .ui-ctl-element
.drag-n-drop .ui-ctl-file-link .ui-ctl-element
.drag-n-drop .ui-ctl-file-btn .ui-ctl-element
  display block
  position absolute
  top -100%
  right 0
  bottom 0
  left 0
  opacity 0

color = #f8fafa
timeout = .2s

.drag-n-drop
  width 100%
  overflow hidden
  &__label
    position relative
    display block
    height 90px
    padding 10px
    transition background-color timeout
    background-color color
    input[type="file"]
      position absolute
      top -100%
      right 0
      bottom 0
      left 0
      opacity 0
      width 100%
      cursor pointer
    &:hover
      background-color rgba(color, .8)
  &:hover &__area
    border-color #a7b0b5
  &__area
    display flex
    flex-direction column
    justify-content center
    box-sizing border-box
    height 100%
    border 2px dashed transparent
    transition border-color timeout linear
    text-align center
    color rgba(black, .4)
    font-weight 700
    font-size 30px
  &__title
    color #0b66c3
    font-size 14px
    font-weight bold
  &__description
    margin-top 2px
    color #8a8b8b
    font-size 12px
  &__list
    list-style-type none
    padding 0
    margin 5px 0 0
  &__file
    display flex
    align-items center
  &__area
  &__name
    text-overflow ellipsis
    overflow hidden
  &__name
    color #2067b0
    font-size 13px
    line-height 1.8
  &__delete
    background-image url("~../assets/wduf-sprite.png")
    background-repeat no-repeat
    background-position center -44px
    width 24px
    height 24px
    cursor pointer
</style>
