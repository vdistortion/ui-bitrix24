<template>
  <div class="popup-window --open ui-selector-popup-offset-animation">
    <div class="popup-window-content">
      <div class="ui-selector-dialog" :style="{ width: props.width, height: props.height }">
        <div class="ui-selector-search">
          <slot></slot>
        </div>
        <div class="ui-selector-tabs">
          <div class="ui-selector-tab-contents">
            <div class="ui-selector-tab-content ui-selector-tab-content-active">
              <div class="ui-selector-items">
                <div class="ui-selector-item-box">
                  <div class="ui-selector-item">
                    <div
                      class="ui-selector-item-avatar"
                      style="
                        background-image: url('https://cdn-ru.bitrix24.ru/teamr/resize_cache/416471/7acf4cadf975128573a8b1c2766af5d8/main/da1/da1e1f2bf2d74d91cc7b12a5edc89269/avatar.png');
                      "
                    ></div>
                    <div class="ui-selector-item-titles">
                      <div class="ui-selector-item-supertitle"></div>
                      <div class="ui-selector-item-title-box">
                        <div class="ui-selector-item-title">Марина Варгасова</div>
                        <div class="ui-selector-item-badges"></div>
                        <div class="ui-selector-item-caption"></div>
                      </div>
                      <div class="ui-selector-item-subtitle"></div>
                    </div>
                    <div class="ui-selector-item-indicator"></div>
                    <a
                      class="ui-selector-item-link"
                      href="/company/personal/user/253/"
                      target="_blank"
                      title=""
                    >
                      <span class="ui-selector-item-link-text">о сотруднике</span>
                    </a>
                  </div>
                  <div class="ui-selector-item-children"></div>
                </div>
                <div class="ui-selector-item-box ui-selector-item-box-selected">
                  <div class="ui-selector-item">
                    <div
                      class="ui-selector-item-avatar"
                      style="
                        background-image: url('https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png');
                      "
                    ></div>
                    <div class="ui-selector-item-titles">
                      <div class="ui-selector-item-supertitle"></div>
                      <div class="ui-selector-item-title-box">
                        <div class="ui-selector-item-title">Валентин Золотов</div>
                        <div class="ui-selector-item-badges"></div>
                        <div class="ui-selector-item-caption"></div>
                      </div>
                      <div class="ui-selector-item-subtitle"></div>
                    </div>
                    <div class="ui-selector-item-indicator"></div>
                    <a
                      class="ui-selector-item-link"
                      href="/company/personal/user/648/"
                      target="_blank"
                      title=""
                    >
                      <span class="ui-selector-item-link-text">о сотруднике</span>
                    </a>
                  </div>
                  <div class="ui-selector-item-children"></div>
                </div>
                <div class="ui-selector-item-box">
                  <div class="ui-selector-item">
                    <div
                      class="ui-selector-item-avatar"
                      :style="`background-image: url(${getImageUrl('default-user')});`"
                    ></div>
                    <div class="ui-selector-item-titles">
                      <div class="ui-selector-item-supertitle"></div>
                      <div class="ui-selector-item-title-box">
                        <div class="ui-selector-item-title">soldatkinilya1996@gmail.com</div>
                        <div class="ui-selector-item-badges">
                          <span
                            class="ui-selector-item-badge"
                            style="color: rgb(35, 162, 202); background-color: rgb(220, 246, 254)"
                          >
                            Приглашен
                          </span>
                        </div>
                        <div class="ui-selector-item-caption"></div>
                      </div>
                      <div class="ui-selector-item-subtitle"></div>
                    </div>
                    <div class="ui-selector-item-indicator"></div>
                    <a
                      class="ui-selector-item-link"
                      href="/company/personal/user/3863/"
                      target="_blank"
                      title=""
                    >
                      <span class="ui-selector-item-link-text">о сотруднике</span>
                    </a>
                  </div>
                  <div class="ui-selector-item-children"></div>
                </div>
                <div class="ui-selector-item-box">
                  <div class="ui-selector-item">
                    <div
                      class="ui-selector-item-avatar"
                      :style="`background-image: url(${getImageUrl('extranet-user')});`"
                    ></div>
                    <div class="ui-selector-item-titles">
                      <div class="ui-selector-item-supertitle"></div>
                      <div class="ui-selector-item-title-box">
                        <div class="ui-selector-item-title" style="color: rgb(202, 134, 0)">
                          Ирина Журавлева
                        </div>
                        <div class="ui-selector-item-badges">
                          <span
                            class="ui-selector-item-badge"
                            style="color: rgb(187, 132, 18); background-color: rgb(255, 245, 153)"
                          >
                            Экстранет
                          </span>
                        </div>
                        <div class="ui-selector-item-caption"></div>
                      </div>
                      <div class="ui-selector-item-subtitle"></div>
                    </div>
                    <div class="ui-selector-item-indicator"></div>
                    <a
                      class="ui-selector-item-link"
                      href="/company/personal/user/528/"
                      target="_blank"
                      title=""
                    >
                      <span class="ui-selector-item-link-text">о сотруднике</span>
                    </a>
                  </div>
                  <div class="ui-selector-item-children"></div>
                </div>
                <div class="ui-selector-item-box">
                  <div class="ui-selector-item">
                    <div
                      class="ui-selector-item-avatar"
                      :style="`background-image: url(${getImageUrl('default-user')});`"
                    ></div>
                    <div class="ui-selector-item-titles">
                      <div class="ui-selector-item-supertitle"></div>
                      <div class="ui-selector-item-title-box">
                        <div class="ui-selector-item-title">Татьяна Гейбух</div>
                        <div class="ui-selector-item-badges"></div>
                        <div class="ui-selector-item-caption"></div>
                      </div>
                      <div class="ui-selector-item-subtitle"></div>
                    </div>
                    <div class="ui-selector-item-indicator"></div>
                    <a
                      class="ui-selector-item-link"
                      href="/company/personal/user/2778/"
                      target="_blank"
                      title=""
                    >
                      <span class="ui-selector-item-link-text">о сотруднике</span>
                    </a>
                  </div>
                  <div class="ui-selector-item-children"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ui-selector-tab-labels"
            :class="[data.hoverTabs ? 'ui-selector-tab-labels--active' : '']"
            @mouseover="data.hoverTabs = true"
            @mouseleave="data.hoverTabs = false"
            :style="{ 'max-width': data.hoverTabs ? props.widthTab : 'initial' }"
          >
            <div
              class="ui-selector-tab-label"
              :class="[data.hoverTabs ? 'ui-selector-tab-label-active' : '']"
            >
              <!--ui-selector-tab-label-hidden ui-selector-tab-label-hover-->
              <div class="ui-selector-tab-icon"></div>
              <div class="ui-selector-tab-title">Пользователи</div>
            </div>
          </div>
        </div>
        <div class="ui-selector-footer-container">
          <div
            class="ui-selector-footer"
            :class="{ 'ui-selector-footer--show': props.visibleFooter }"
          >
            <div class="ui-selector-footer-default">
              <slot name="footer">
                <span class="ui-selector-footer-link ui-selector-footer-link-add">
                  Пригласить сотрудника
                </span>
                <span class="ui-selector-footer-conjunction">или</span>
                <span class="ui-selector-footer-link">пригласить гостя</span>
                <span
                  data-hint="Вы можете добавить не только сотрудника, но и партнера или клиента по электронной почте."
                  data-hint-init="y"
                  class="ui-hint"
                >
                  <span class="ui-hint-icon"></span>
                </span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { loadStyles } from '@/utils/loadStyles';

loadStyles();

const props = defineProps({
  width: {
    type: String,
    default: '565px',
  },
  height: {
    type: String,
    default: '420px',
  },
  widthTab: {
    type: String,
    default: '160px',
  },
  visibleFooter: {
    type: Boolean,
    default: false,
  },
});

const data = reactive({
  hoverTabs: false,
});

function getImageUrl(name: string) {
  return new URL(`../assets/${name}.svg`, import.meta.url).href;
}
</script>

<style>
.ui-selector-dialog {
  position: relative;
}
</style>
