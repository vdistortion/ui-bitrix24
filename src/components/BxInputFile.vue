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
      >
      <div class="ui-ctl-label-text">
        <slot v-if="$slots.default[0].text"></slot>
        <template v-else>{{ placeholder }}</template>
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
      >
      <div class="ui-ctl-label-text">
        <slot v-if="$slots.default[0].text"></slot>
        <template v-else>{{ placeholder }}</template>
      </div>
    </label>
    <label
      v-else-if="type === 'drop'"
      class="ui-ctl ui-ctl-file-drop"
      :class="{ 'bx-input-file-disabled': disabled }"
      :title="title"
    >
      <div class="ui-ctl-label-text">
        <span v-if="$slots.default[0].text">
          <slot></slot>
        </span>
        <template v-else>
          <span>{{ placeholder }}</span>
          <small>Перетащить с помощью drag'n'drop</small>
        </template>
      </div>
      <input
        class="ui-ctl-element"
        type="file"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      >
    </label>
    <label
      v-else-if="type === 'old'"
      class="drag-n-drop__label"
      :class="{ 'bx-input-file-disabled': disabled }"
    >
      <div class="drag-n-drop__area">
        <div v-if="$slots.default[0].text" class="drag-n-drop__title">
          <slot></slot>
        </div>
        <template v-else>
          <div class="drag-n-drop__title">{{ placeholder }}</div>
          <div class="drag-n-drop__description">Перетащить с помощью Drag'n'drop</div>
        </template>
      </div>
      <input
        type="file"
        :title="title"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      >
    </label>
    <ul v-if="files.length" class="drag-n-drop__list">
      <li v-for="(file, key) in files" :key="key" class="drag-n-drop__file">
        <span class="drag-n-drop__name">{{ getName(file) }}</span>
        <span class="drag-n-drop__delete" @click="onDelete(key)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import formatSizeUnits from '@/utils/formatSizeUnits';

export default {
  methods: {
    getName(file) {
      return `${file.name} (${formatSizeUnits(file.size)})`;
    },

    onChange(e) {
      for (const file of e.target.files) this.files.push(file);
      this.$emit('change', this.files);
    },

    onDelete(index) {
      this.files.splice(index, 1);
      this.$emit('change', this.files);
    },
  },
  computed: {
    title() {
      if (this.disabled) return '';
      if (this.files.length) return this.files.map((file) => file.name).join('\n');
      if (this.multiple) return 'Файлы не выбраны.';
      return 'Файл не выбран.';
    },
  },
  data() {
    return {
      files: [],
      placeholder: 'Загрузить файл или картинку',
    };
  },
  props: {
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

color = #f8fafa
timeout = .2s

.drag-n-drop
  width 100%
  &__label
    position relative
    display block
    height 90px
    padding 10px
    transition background-color timeout
    background-color color
    & input[type='file']
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      opacity 0
      cursor pointer
    &:hover
      background-color rgba(color, 0.8)
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
    color rgba(black, 0.4)
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
    background-image url('~@/assets/wduf-sprite.png')
    background-repeat no-repeat
    background-position center -44px
    width 24px
    height 24px
    cursor pointer
</style>
