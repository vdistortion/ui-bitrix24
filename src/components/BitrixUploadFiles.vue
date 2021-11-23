<template>
  <div class="drag-n-drop">
    <label class="drag-n-drop__label">
      <div class="drag-n-drop__area">
        <div class="drag-n-drop__title">Загрузить файл или картинку</div>
        <div class="drag-n-drop__description">Перетащить с помощью Drag'n'drop</div>
      </div>
      <input type="file" multiple @change="onChange">
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
  data() {
    return {
      files: [],
    };
  },
  name: 'bitrix-upload-files',
};
</script>

<style lang="stylus">
color = #f8fafa
timeout = .2s

.drag-n-drop
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
