<template>
  <div class="bx-entity-selector" :class="{ inline }">
    <div class="bx-entity-selector__button">
      <span class="bx-entity-selector__items">
        <span
          v-for="(item, key) in list"
          :key="key"
          class="bx-entity-selector__item"
          :class="{ 'hover-delete': hoverDelete[key] }"
        >
          <span
            class="bx-entity-selector__text"
            :class="{ clickable }"
            @auxclick.prevent="clickable ? $emit('auxclick', key, item) : false"
            @click.prevent="clickable ? $emit('click', key, item) : false"
          >
            {{ item[displayField] }}
          </span>
          <button
            class="bx-entity-selector__delete"
            @mouseenter="hoverDelete[key] = true"
            @mouseleave="hoverDelete[key] = false"
            @click="$emit('delete', key, item)"
          ></button>
        </span>
      </span>
      <span class="bx-entity-selector__controls">
        <button class="bx-entity-selector__add" @click="$emit('add')">
          {{ !list.length ? textAdd : multiple ? textMore : textChange }}
        </button>
      </span>
    </div>
    <div class="bx-entity-selector__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      hoverDelete: [],
    };
  },
  emits: ['add', 'auxclick', 'click', 'delete'],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    displayField: {
      type: String,
      default: 'name',
    },
    textAdd: {
      type: String,
      default: 'Добавить',
    },
    textMore: {
      type: String,
      default: 'Добавить ещё',
    },
    textChange: {
      type: String,
      default: 'Сменить',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-entity-selector',
});
</script>

<style>
.bx-entity-selector {
  position: relative;
}
.bx-entity-selector.inline {
  display: inline-block;
}
.bx-entity-selector__button {
  background-color: #fff;
  min-height: 33px;
  border: 1px solid #c6cdd3;
  padding: 5px 5px 0 5px;
}
.bx-entity-selector__item {
  background-color: #bcedfc;
  transition: background-color 0.2s linear;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  white-space: nowrap;
  height: 30px;
  position: relative;
  line-height: 28px;
  margin: 0 5px 5px 0;
}
.bx-entity-selector__item.hover-delete {
  background-color: #8be0fa;
}
.bx-entity-selector__text {
  padding: 0 0 0 10px;
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  color: #1f6ab5;
}
.bx-entity-selector__text.clickable {
  cursor: pointer;
}
.bx-entity-selector__delete {
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: inherit;
  width: 25px;
  height: 30px;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: auto;
  white-space: nowrap;
  line-height: 30px;
}
.bx-entity-selector__delete::after {
  content: '';
  background-image: url("../assets/media.png");
  background-repeat: no-repeat;
  background-position: -2px -17px;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto auto 7px;
  opacity: 0.2;
}
.bx-entity-selector__add {
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: inherit;
  margin: 7px 7px 7px 18px;
  border-bottom: 1px solid transparent;
  color: #2067b0;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  font-size: 13px;
  line-height: 17px;
  vertical-align: top;
  position: relative;
  transition: border-bottom-color 0.2s linear;
}
.bx-entity-selector__add:hover {
  border-bottom: 1px solid;
}
.bx-entity-selector__add::before {
  content: '';
  background-image: url("../assets/add.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 8px;
  left: -14px;
  position: absolute;
  top: 5px;
  width: 8px;
}
.bx-entity-selector__content {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
