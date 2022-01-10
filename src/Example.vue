<template>
  <div id="app">
    <example-page>
      <example-entity-selector v-if="componentVisible === 'bx-entity-selector'"></example-entity-selector>
      <example-button v-if="componentVisible === 'bx-button'"></example-button>
      <example-input v-if="componentVisible === 'bx-input'"></example-input>
      <example-input-date v-if="componentVisible === 'bx-input-date'"></example-input-date>
      <example-input-file v-if="componentVisible === 'bx-input-file'"></example-input-file>
      <example-select v-if="componentVisible === 'bx-select'"></example-select>
      <example-radio v-if="componentVisible === 'bx-radio'"></example-radio>
      <example-checkbox v-if="componentVisible === 'bx-checkbox'"></example-checkbox>
      <example-textarea v-if="componentVisible === 'bx-textarea'"></example-textarea>
      <example-progressbar v-if="componentVisible === 'bx-progressbar'"></example-progressbar>
      <example-alert v-if="componentVisible === 'bx-alert'"></example-alert>
      <example-icon v-if="componentVisible === 'bx-icon'"></example-icon>
      <template #menu>
        <ul v-if="components.length" style="padding-left: 0;list-style-type: none;">
          <li v-for="component in components" :key="component">
            <label>
              <input type="radio" :value="component" v-model="componentVisible">
              <span>{{ component }}</span>
            </label>
          </li>
        </ul>
      </template>
    </example-page>
  </div>
</template>

<script>
import ExampleEntitySelector from './components/example/ExampleEntitySelector.vue';
import ExampleButton from './components/example/ExampleButton.vue';
import ExampleTextarea from './components/example/ExampleTextarea.vue';
import ExampleInputFile from './components/example/ExampleInputFile.vue';
import ExampleProgressbar from './components/example/ExampleProgressbar.vue';
import ExampleAlert from './components/example/ExampleAlert.vue';
import ExampleRadio from './components/example/ExampleRadio.vue';
import ExampleCheckbox from './components/example/ExampleCheckbox.vue';
import ExampleIcon from './components/example/ExampleIcon.vue';
import ExampleSelect from './components/example/ExampleSelect.vue';
import ExampleInputDate from './components/example/ExampleInputDate.vue';
import ExampleInput from './components/example/ExampleInput.vue';
import ExamplePage from './components/example/Page.vue';

export default {
  mounted() {
    this.$BX24.appInfo().then((response) => {
      if (response.scope.includes('user')) {
        Promise.all([
          this.$BX24.callMethod('user.current'),
          this.$BX24.callMethod('user.get'),
        ]).then(([userCurrent, users]) => ({ userCurrent, users }))
          .then(console.log);
      }
      return response;
    }).then(console.log);
  },
  data() {
    return {
      componentVisible: 'bx-button',
      components: [
        'bx-button',
        'bx-input',
        'bx-input-date',
        'bx-input-file',
        'bx-entity-selector',
        'bx-select',
        'bx-radio',
        'bx-checkbox',
        'bx-textarea',
        'bx-progressbar',
        'bx-alert',
        'bx-icon',
      ],
    };
  },
  inject: ['$BX24'],
  components: {
    ExampleEntitySelector,
    ExampleButton,
    ExampleTextarea,
    ExampleInputFile,
    ExampleProgressbar,
    ExampleAlert,
    ExampleRadio,
    ExampleCheckbox,
    ExampleIcon,
    ExampleSelect,
    ExampleInputDate,
    ExampleInput,
    ExamplePage,
  },
  name: 'example-app',
};
</script>

<style lang="stylus">
*
*::before
*::after
  box-sizing border-box
body
  margin 0
  padding 0
  font-family sans-serif
</style>
