import type { App, Component } from 'vue';

export default {
  install(app: App<Element>, components: Component[]) {
    components.forEach((Component: Component) => {
      app.component(Component.name!, Component);
    });
  },
};
