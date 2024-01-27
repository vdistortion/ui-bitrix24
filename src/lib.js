import usePlugin from './plugin';
import BxAlert from './components/BxAlert.vue';
import BxButton from './components/BxButton.vue';
import BxCheckbox from './components/BxCheckbox.vue';
import BxEntitySelector from './components/BxEntitySelector.vue';
import BxIcon from './components/BxIcon.vue';
import BxInput from './components/BxInput.vue';
import BxInputDate from './components/BxInputDate.vue';
import BxInputFile from './components/BxInputFile.vue';
import BxProgressbar from './components/BxProgressbar.vue';
import BxRadio from './components/BxRadio.vue';
import BxSelect from './components/BxSelect.vue';
import BxTextarea from './components/BxTextarea.vue';

export default {
  install: (app) => usePlugin.install(app, [
    BxAlert,
    BxButton,
    BxCheckbox,
    BxEntitySelector,
    BxIcon,
    BxInput,
    BxInputDate,
    BxInputFile,
    BxProgressbar,
    BxRadio,
    BxSelect,
    BxTextarea,
  ]),
};
