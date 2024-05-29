import type { App } from 'vue';
import usePlugin from './plugin';
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

export default {
  install: (app: App<Element>) =>
    usePlugin.install(app, [
      BxAlert,
      BxButton,
      BxCheckbox,
      BxEntitySelector,
      BxIcon,
      BxInput,
      BxInputFile,
      BxProgressbar,
      BxRadio,
      BxTextarea,
    ]),
};
