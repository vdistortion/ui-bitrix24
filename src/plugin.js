export default {
  install(app, components) {
    components.forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};
