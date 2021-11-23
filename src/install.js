import Bitrix24 from './lib/plugin';
import BxCheckbox from './components/BxCheckbox.vue';
import BxRadio from './components/BxRadio.vue';
import BxTextarea from './components/BxTextarea.vue';
import BxInputFile from './components/BxInputFile.vue';
import BxButton from './components/BxButton.vue';
import BxButtonWrapper from './components/BxButtonWrapper.vue';
import './assets/ui/ui.font.opensans.min.css';
import './assets/ui/ui.buttons.css';
import './assets/ui/ui.buttons.icons.min.css';
import './assets/ui/ui.forms.min.css';
import './assets/ui/ui.progressbar.min.css';
import './assets/ui/ui.alert.css';
import './assets/ui/ui.icons.base.min.css';
import './assets/ui/ui.icons.b24.min.css';
import './assets/ui/ui.icons.disk.min.css';
import './assets/ui/ui.icons.service.min.css';

const Components = {
  BxCheckbox,
  BxRadio,
  BxTextarea,
  BxInputFile,
  BxButton,
  BxButtonWrapper,
};

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Object.values(Components).forEach((Component) => {
    Vue.component(Component.name, Component);
  });
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;
else if (typeof global !== 'undefined') GlobalVue = global.Vue;
if (GlobalVue) GlobalVue.use(plugin);

export default {
  ...plugin,
  ...Bitrix24,
};
