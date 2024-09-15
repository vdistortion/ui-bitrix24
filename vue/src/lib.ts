import type { App, Component } from 'vue';
import BxAlert from './components/BxAlert.vue';
import BxButton from './components/BxButton.vue';
import BxCheckbox from './components/BxCheckbox.vue';
import BxEntitySelector from './components/BxEntitySelector.vue';
import BxIcon from './components/BxIcon.vue';
import BxInput from './components/BxInput.vue';
import BxInputFile from './components/BxInputFile.vue';
import BxProgressbar from './components/BxProgressbar.vue';
import BxRadio from './components/BxRadio.vue';
import BxTextarea from './components/BxTextarea.vue';

type ComponentItem = [name: string, component: Component];
const list: ComponentItem[] = [
  ['bx-alert', BxAlert],
  ['bx-button', BxButton],
  ['bx-checkbox', BxCheckbox],
  ['bx-entity-selector', BxEntitySelector],
  ['bx-icon', BxIcon],
  ['bx-input', BxInput],
  ['bx-input-file', BxInputFile],
  ['bx-progressbar', BxProgressbar],
  ['bx-radio', BxRadio],
  ['bx-textarea', BxTextarea],
];

export default {
  install: (app: App<Element>) => {
    list.forEach(([name, component]) => app.component(name, component));
  },
};
