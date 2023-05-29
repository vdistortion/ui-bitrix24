<template>
  <!--    https://dev.1c-bitrix.ru/api_d7/bitrix/ui/entity_selector/tag_selector/index.php-->
  <div class="ui-tag-selector-outer-container">
    <div class="ui-tag-selector-container">
      <div class="ui-tag-selector-items">
        <div class="ui-tag-selector-item ui-tag-selector-tag ui-tag-selector-tag--has-avatar"
             style="background-color: rgb(188, 237, 252);"><a class="ui-tag-selector-tag-content"
                                                              href="/company/personal/user/150/"
                                                              target="_blank">
          <div class="ui-tag-selector-tag-avatar"
               :style="`background-image: url(${getImageUrl('default-tag-user')});`"></div>
          <div class="ui-tag-selector-tag-title" style="color: rgb(16, 102, 187);">Создаватель
            Админ
          </div>
        </a>
          <div class="ui-tag-selector-tag-remove"></div>
        </div>
        <input type="text"
               class="ui-tag-selector-item ui-tag-selector-text-box ui-tag-selector-item-hidden"
               autocomplete="off" placeholder="" value=""><span
        class="ui-tag-selector-item ui-tag-selector-add-button"><span
        class="ui-tag-selector-add-button-caption">Добавить</span></span></div>
      <div class="ui-tag-selector-create-button ui-tag-selector-item-hidden"><span
        class="ui-tag-selector-create-button-caption">Создать</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href;
    },
  },
  name: 'bx-tag-selector',
});
</script>
