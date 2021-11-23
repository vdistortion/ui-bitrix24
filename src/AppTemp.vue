<template>
  <div id="app">
    <bitrix-layout :menu="menu">
      <template #logo>
        Logotype
      </template>
      <template>
        <bitrix-form submit-name="submit" @submit="onSubmit">
          <template #buttons>
            <bx-button color="primary" icon="task" round type="reset"></bx-button>
          </template>
          <bitrix-upload-files @change="changeFiles"></bitrix-upload-files>
          <div style="display: flex;flex-direction: row;align-items: flex-start;column-gap: 10px;">
            <bx-button color="primary" size="lg" icon="task" round disabled type="submit"></bx-button>
            <bitrix-button color="primary" size="xs">primary</bitrix-button>
            <bitrix-button color="success" size="sm">success</bitrix-button>
            <bitrix-button color="danger" size="md">danger</bitrix-button>
            <bitrix-button color="outline" size="lg">outline</bitrix-button>
            <bitrix-button color="primary" disabled>disabled</bitrix-button>
            <bitrix-button color="primary" loading>loading</bitrix-button>
          </div>
          <br>
          <div style="display: flex;flex-direction: row;align-items: flex-start;column-gap: 10px;">
            <bx-checkbox value="1" v-model="checked">checkbox</bx-checkbox>
            <bx-checkbox value="2" v-model="checked">checkbox</bx-checkbox>
            <bx-radio :value="{name:'Tom', age:22}" v-model="radio" name="x">radio</bx-radio>
            <bx-radio :value="{name:'Sam', age:28}" v-model="radio" name="x">radio</bx-radio>
            <div>
              {{ checked }}
              <br>
              {{ radio }}
            </div>
          </div>
          <br>
          <div style="display: flex;flex-direction: row;align-items: flex-start;column-gap: 10px;">
            <bx-input-file type="button" @change="uploadFiles"></bx-input-file>
            <bx-input-file multiple @change="uploadFiles"></bx-input-file>
            {{ files }}
          </div>
          <br>
          <bitrix-input type="checkbox" v-model="text" label="test label"></bitrix-input>
          <br>
          <div style="display: flex;flex-direction: row;align-items: flex-start;column-gap: 10px;">
            <bitrix-input type="text" v-model="text" validation :valid="!!text"></bitrix-input>
            <bitrix-select v-model="text">
              <option value="test1">test1</option>
              <option value="test2">test2</option>
            </bitrix-select>
          </div>
        </bitrix-form>
        <p>{{ text }}</p>
      </template>
      <template #copyright>
        <div style="display: flex;column-gap: 5px;">
          <a :href="copyright.link" target="_blank">{{ copyright.name }}</a>
          &copy;
          {{ copyright.year }}
        </div>
      </template>
    </bitrix-layout>
  </div>
</template>

<script>
import BxCheckbox from '@/components/BxCheckbox';
import BxRadio from '@/components/BxRadio';

export default {
  components: { BxRadio, BxCheckbox },
  methods: {
    onSubmit(finishCallback) {
      const data = {
        text: this.text,
        files: this.files,
      };
      console.log(data);
      setTimeout(finishCallback, 2000);
    },

    changeFiles(files) {
      this.files = files;
    },

    uploadFiles(files) {
      console.log(files);
      this.files = files;
    },
  },
  mounted() {
    this.$BX24.fitWindow();
    this.$BX24.appInfo().then((response) => {
      console.log(response);
      if (response.scope.includes('user')) {
        this.$BX24.callMethod('user.current').then(console.log);
        this.$BX24.callMethod('user.get').then(console.log);
      }
    });
  },
  data() {
    return {
      checked: [],
      radio: {},
      text: '',
      files: [],
      menu: [
        ['npm', 'https://www.npmjs.com/package/vue-bitrix24'],
        ['GitHub', 'https://github.com/astrotrain55/vue-bitrix24'],
        ['Bitrix24 REST API', 'https://dev.1c-bitrix.ru/rest_help/js_library/'],
      ],
      copyright: {
        link: 'https://www.npmjs.com/package/vue-bitrix24',
        name: 'vue-bitrix24',
        year: new Date().getFullYear(),
      },
    };
  },
  inject: ['$BX24'],
  name: 'app',
};
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap")

*
*::before
*::after
  box-sizing border-box
body
  margin 0
  padding 0
  font-family 'Open Sans', sans-serif
</style>
